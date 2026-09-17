export type Locale = "az" | "en";

export const CONTACT_EMAIL = "mikayilquliyev16@gmail.com";
export const CONTACT_LINKEDIN =
  "https://www.linkedin.com/company/138734134";

export const LIVE_APP_URL = "https://waygo.duckdns.org";

const az = {
  nav: {
    brand: "BİZ KİMİK",
    about: "Layihə",
    metrics: "Nəticələr",
    tech: "Texnologiya",
    team: "Təsisçilər",
    live: "Canlı",
    contact: "Əlaqə",
  },
  hero: {
    title: "Bakı üçün proqnoz əsaslı milli naviqasiya",
    label: "Giriş",
    scrollAz: "Aşağı sürüşdürün",
    scrollEn: "Scroll down",
  },
  about: {
    kicker: "WayGo · Biz kimik",
    title: "Tıxacı əvvəlcədən görən naviqasiya platforması.",
    p1: "Bakı sürücüsü ildə 120–145 saatını tıxacda itirir. Canlı xəritələr tıxacı qeyd etdikdən sonra axını eyni küçəyə yönləndirir. WayGo ehtimal axınını təxminən iki saat əvvəlcədən hesablayır, marşrutu 2–3 paralel yola bölür və qənaəti real vauçerə çevirir.",
    p2: "WayGo xarici xəritə xidmətinin klonu deyil. Kod, data və model Azərbaycanda, yerli komanda tərəfindən qurulur.",
    ctaProject: "Nəticələr",
    ctaContact: "Əlaqə",
    blocks: [
      {
        n: "01",
        title: "Tıxac yaranmadan yönləndirmə",
        body: "Ənənəvi naviqasiya tıxacı gördükdən sonra bütün axını eyni küçəyə yönləndirir. WayGo iki saatlıq ehtimal modeli ilə sürücünü artıq bölünmüş alternativə çıxarır.",
      },
      {
        n: "02",
        title: "Eco-marşrut və EcoPoints",
        body: "Eco-marşrut yanacaq sərfini və emissiyanı azaldır. EcoPoints yaşıl seçimi motivasiya edir: 1000 xal = 10 AZN yanacaq və ya enerji vauçeri.",
      },
      {
        n: "03",
        title: "Bakı üçün hazırlanmış süni intellekt",
        body: "LightGBM, 250 min Bakı qeydi, test R² 0.916. Proqnoz, marşrut və Azərbaycan dilində səsli köməkçi yerli infrastruktur üzərində qurulub.",
      },
    ],
  },
  metrics: {
    kicker: "02 · Nəticələr",
    title: "Ölçülmüş nəticələr.",
    lead: "Göstəricilər demo dəhlizi, model testi və eco-marşrut sınaqlarından götürülüb.",
    items: [
      {
        unit: "dəqiqə",
        label: "Qənaət olunan vaxt",
        hint: "28 May → Koroğlu. Ölçülmüş marşrut: ümumi xəritə 39 dəqiqə, WayGo 21 dəqiqə. Fərq 18 dəqiqə.",
      },
      {
        unit: "yanacaq",
        label: "Yanacaq və karbon",
        hint: "Eco-marşrut üzrə ölçülən yanacaq və karbon qənaəti: 22%.",
      },
      {
        unit: "R²",
        label: "Model dəqiqliyi",
        hint: "LightGBM test R² 0.916. Təxminən 2 saatlıq tıxac proqnozu. 250 min Bakı qeydi.",
      },
    ],
  },
  tech: {
    kicker: "03 · Texnologiya",
    title: "Proqnoz, marşrut və EcoPoints eyni platformada.",
    lead: "Alqoritm, marşrut cərimələri və mükafat mexanizmi WayGo-ya məxsusdur. Məlumat Azərbaycanda saxlanılır.",
    items: [
      {
        kicker: "Proqnoz",
        title: "İki saatlıq tıxac ehtimalı",
        body: "LightGBM canlı xəritəni təkrarlamır; tıxacın harada yaranacağını əvvəlcədən göstərir. Test R² 0.916.",
      },
      {
        kicker: "Marşrut",
        title: "Axının paralelləşdirilməsi",
        body: "Valhalla marşrutu qiymətləndirir. WayGo tıxac və qəza cəriməsini təyin edir. Nəqliyyat 2–3 paralel yola bölünür.",
      },
      {
        kicker: "Data",
        title: "250 min Bakı qeydi",
        body: "Yanacaq, vaxt və rayon siqnalları öz data qatımızdadır. FastAPI pipeline. Şəhər öz dilində oxunur.",
      },
      {
        kicker: "Mükafat",
        title: "EcoPoints",
        body: "Yaşıl sürücülük ölçülür və hesabda saxlanılır. 1000 xal = 10 AZN yanacaq və ya enerji vauçeri.",
      },
      {
        kicker: "Cüzdan",
        title: "Real vauçer",
        body: "Xallar kod şəklinə düşür. Sürücü qənaəti yanacaq və ya enerji kimi istifadə edir.",
      },
      {
        kicker: "Suverenlik",
        title: "Məlumat ölkədə qalır",
        body: "Spring Boot, React, FastAPI. Nəsimi, Yasamal, Səbail. Bakının hərəkət məlumatı ölkədən çıxmır.",
      },
    ],
  },
  team: {
    kicker: "04 · Təsisçilər",
    title: "Təsisçilər.",
    lead: "Platforma iki həmtəsisçi tərəfindən Azərbaycanda qurulur.",
    people: [
      {
        name: "Mikayıl Quliyev",
        role: "Həmtəsisçi",
        focus: "Software Engineer",
        bio: "Backend, xəritə və naviqasiya sisteminin arxitekturası.",
      },
      {
        name: "Müzaqil Həsənli",
        role: "Həmtəsisçi",
        focus: "AI / Data Engineer",
        bio: "Tıxac proqnozu və data infrastrukturu.",
      },
    ],
  },
  live: {
    kicker: "06 · Canlı",
    title: "Platformanı sınaqdan keçir",
    lead: "",
    cta: "Keçid",
  },
  contact: {
    kicker: "05 · Əlaqə",
    title: "Əlaqə.",
    lead: "Demo, tərəfdaşlıq və ya əməkdaşlıq üçün bizimlə əlaqə saxlayın.",
    cta: "Əlaqə",
    linkedin: "LinkedIn",
  },
  footer: {
    tag: "Bakı Mobiliti · Data Azərbaycanda qalır",
    contact: "Əlaqə",
    linkedin: "LinkedIn",
  },
  meta: {
    title: "WayGo — Biz kimik",
    description:
      "WayGo — tıxacı əvvəlcədən görən, axını bölən, qənaəti real vauçerə çevirən milli naviqasiya platforması.",
  },
} as const;

const en = {
  nav: {
    brand: "WHO WE ARE",
    about: "Project",
    metrics: "Results",
    tech: "Technology",
    team: "Founders",
    live: "Live",
    contact: "Contact",
  },
  hero: {
    title: "National navigation for Baku, driven by forecast",
    label: "Intro",
    scrollAz: "Aşağı sürüşdürün",
    scrollEn: "Scroll down",
  },
  about: {
    kicker: "WayGo · Who we are",
    title: "A navigation platform that sees congestion before it forms.",
    p1: "A Baku driver loses 120–145 hours a year in congestion. Live maps record the jam, then send the same flow onto one street. WayGo estimates the probability flow about two hours ahead, splits the route across 2–3 parallel roads, and converts the saving into a real voucher.",
    p2: "WayGo is not a clone of a foreign maps product. The code, the data, and the model are built in Azerbaijan by a local team.",
    ctaProject: "Results",
    ctaContact: "Contact",
    blocks: [
      {
        n: "01",
        title: "Routing before the jam forms",
        body: "Conventional navigation reacts after congestion appears, then directs the full flow onto one street. WayGo uses a two-hour probability model so the driver is already on a split alternative.",
      },
      {
        n: "02",
        title: "Eco routing and EcoPoints",
        body: "Eco routing reduces fuel use and emissions. EcoPoints incentivise the quieter choice: 1000 points = 10 AZN fuel or energy voucher.",
      },
      {
        n: "03",
        title: "An AI stack built for Baku",
        body: "LightGBM, 250k Baku records, test R² 0.916. Forecast, routing, and an Azerbaijani voice assistant run on local infrastructure.",
      },
    ],
  },
  metrics: {
    kicker: "02 · Results",
    title: "Measured outcomes.",
    lead: "The figures come from a demo corridor, a model test, and an eco-routing trial.",
    items: [
      {
        unit: "minutes",
        label: "Time saved",
        hint: "28 May → Koroğlu. Measured run: generic map 39 minutes, WayGo 21 minutes. Difference: 18 minutes.",
      },
      {
        unit: "fuel",
        label: "Fuel and carbon",
        hint: "Fuel and carbon saved on the eco route: 22%.",
      },
      {
        unit: "R²",
        label: "Model accuracy",
        hint: "LightGBM test R² 0.916. About a 2-hour congestion forecast. 250k Baku records.",
      },
    ],
  },
  tech: {
    kicker: "03 · Technology",
    title: "Forecast, routing, and EcoPoints on one platform.",
    lead: "The algorithm, route penalties, and reward mechanism are WayGo’s. Data is stored in Azerbaijan.",
    items: [
      {
        kicker: "Forecast",
        title: "Two-hour congestion probability",
        body: "LightGBM does not copy a live map; it indicates where congestion is likely to form. Test R² 0.916.",
      },
      {
        kicker: "Routing",
        title: "Parallel flow",
        body: "Valhalla scores the path. WayGo applies jam and accident penalties. Traffic is split across 2–3 parallel roads.",
      },
      {
        kicker: "Data",
        title: "250k Baku records",
        body: "Fuel, time, and district signals sit in our data layer. FastAPI pipeline. The city is read in its own language.",
      },
      {
        kicker: "Reward",
        title: "EcoPoints",
        body: "Green driving is measured and retained. 1000 points = 10 AZN fuel or energy voucher.",
      },
      {
        kicker: "Wallet",
        title: "A redeemable voucher",
        body: "Points become a code. The driver uses the saving as fuel or energy.",
      },
      {
        kicker: "Sovereignty",
        title: "Data stays in-country",
        body: "Spring Boot, React, FastAPI. Nəsimi, Yasamal, Səbail. Baku’s movement data does not leave the country.",
      },
    ],
  },
  team: {
    kicker: "04 · Founders",
    title: "Founders.",
    lead: "The platform is built in Azerbaijan by two co-founders.",
    people: [
      {
        name: "Mikayil Guliyev",
        role: "Co-founder",
        focus: "Software Engineer",
        bio: "Architecture of the backend, map, and routing system.",
      },
      {
        name: "Muzaqil Hasanli",
        role: "Co-founder",
        focus: "AI / Data Engineer",
        bio: "Traffic forecast and data infrastructure.",
      },
    ],
  },
  live: {
    kicker: "06 · Live",
    title: "Try the live platform",
    lead: "",
    cta: "Open",
  },
  contact: {
    kicker: "05 · Contact",
    title: "Contact.",
    lead: "Write to us for a demo, a partnership, or collaboration.",
    cta: "Contact",
    linkedin: "LinkedIn",
  },
  footer: {
    tag: "Baku Mobility · Data stays in Azerbaijan",
    contact: "Contact",
    linkedin: "LinkedIn",
  },
  meta: {
    title: "WayGo — Who we are",
    description:
      "WayGo — a national navigation platform that forecasts congestion, splits traffic flow, and converts savings into a real voucher.",
  },
} as const;

export const strings = { az, en } as const;
export type Strings = (typeof strings)[Locale];
