import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type PreviewServer, type ViteDevServer } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const mediaDir = path.join(rootDir, "public/media");

function sendMediaMp4(
  filePath: string,
  req: { headers: { range?: string } },
  res: {
    setHeader: (k: string, v: string | number) => void;
    statusCode: number;
    end: () => void;
  },
  next: () => void,
) {
  if (!fs.existsSync(filePath)) return next();

  const stat = fs.statSync(filePath);
  const range = req.headers.range;
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Cache-Control", "public, max-age=86400");

  if (!range) {
    res.setHeader("Content-Length", stat.size);
    fs.createReadStream(filePath).pipe(res as unknown as NodeJS.WritableStream);
    return;
  }

  const parts = range.replace(/bytes=/, "").split("-");
  const start = Number(parts[0]);
  const end = parts[1] ? Number(parts[1]) : stat.size - 1;
  if (Number.isNaN(start) || start >= stat.size) {
    res.statusCode = 416;
    res.end();
    return;
  }

  res.statusCode = 206;
  res.setHeader("Content-Range", `bytes ${start}-${end}/${stat.size}`);
  res.setHeader("Content-Length", end - start + 1);
  fs.createReadStream(filePath, { start, end }).pipe(
    res as unknown as NodeJS.WritableStream,
  );
}

function serveMediaMp4(): Plugin {
  const attach = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use((req, res, next) => {
      const urlPath = req.url?.split("?")[0] ?? "";
      const match = urlPath.match(/^\/media\/([A-Za-z0-9._-]+\.mp4)$/);
      if (!match) return next();
      sendMediaMp4(path.join(mediaDir, match[1]), req, res, next);
    });
  };

  return {
    name: "serve-waygo-media-mp4",
    configureServer: attach,
    configurePreviewServer: attach,
  };
}

export default defineConfig({
  plugins: [react(), serveMediaMp4()],
  server: {
    host: true,
    port: 5191,
    strictPort: true,
    watch: {
      ignored: ["**/*.png", "**/public/frames/**"],
    },
  },
});
