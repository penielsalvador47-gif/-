/* =========================================================
   梨花's Flower Shop  ·  script.js
   - Petal rain (5 seconds) on page load
   - Bilingual: English ⇄ Traditional Chinese (auto-detect)
   - Smooth scroll, image lightbox, gallery interactions
   ========================================================= */

/* ----------  I18N DICTIONARY  ---------- */
const I18N = {
  en: {
    "brand.tagline": "Luxury Floral Boutique",
    "nav.home": "Home",
    "nav.product": "Product",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.promo": "Promotion",
    "nav.reserve": "Reserve",
    "nav.contact": "Contact",
    "cta.download": "Download Site",

    "hero.eyebrow": "— Tainan · Since 2018 —",
    "hero.title1": "Where every petal",
    "hero.title2": "whispers love.",
    "hero.lede": "Fresh, elegant, and vibrant flowers — hand-arranged next to Kun Shan University, delivered with care to every celebration.",
    "hero.cta1": "Explore Arrangements",
    "hero.cta2": "Reserve a Bouquet",
    "hero.from": "From NT$",
    "hero.upto": "Up to NT$",
    "hero.off": "Off Today",

    "product.eyebrow": "— Our Signature —",
    "product.title": "梨花's Flower Shop",
    "product.sub": "A flower shop that offers good quality of products and services, located next to Kun Shan University. We use flowers that are fresh, elegant, and vibrant — crafted to make our customers truly satisfied.",

    "feat1.t": "Fresh, Daily-Sourced Stems",
    "feat1.d": "Hand-picked from local growers each morning, every stem arrives at peak bloom.",
    "feat2.t": "Elegant, Couture Arrangements",
    "feat2.d": "From soft blush bouquets to grand wedding pieces, each design is a study in refined beauty.",
    "feat3.t": "Customised To Your Story",
    "feat3.d": "Birthdays, proposals, opening ceremonies — share your moment and we'll compose the perfect arrangement.",
    "feat4.t": "Vibrant, Long-Lasting Blooms",
    "feat4.d": "Quality first. Our flowers stay beautiful long after they leave our boutique.",

    "about.eyebrow": "— Our Story —",
    "about.title": "A boutique born from a love letter to flowers.",
    "about.p1": "梨花's Flower Shop began as a small atelier with a single idea: that every flower, when chosen with care, can carry a feeling words cannot. Today, our boutique next to Kun Shan University is a quiet sanctuary of blush peonies, soft roses, and gilded ribbons.",
    "about.p2": "We believe flowers are more than décor — they are the language of love, celebration, and remembrance. Each arrangement is composed by hand, with the patience of a couturier and the eye of an artist.",
    "about.v1": "Elegant · Feminine · Romantic",
    "about.v2": "Warm · Modern · Vibrant",
    "about.v3": "Freshness, quality, and a touch of gold.",
    "about.years": "Years of Craft",

    "gallery.eyebrow": "— The Collection —",
    "gallery.title": "Bouquets & Arrangements",
    "gallery.sub": "Browse our signature pieces. Each one can be customised to your colour story, budget, and occasion.",

    "g1.t": "Blush Romance",  "g1.d": "Garden roses · eucalyptus · ivory ribbon",
    "g2.t": "Ivory Sonata",   "g2.d": "White peonies · lisianthus · gold trim",
    "g3.t": "Rose Couture",   "g3.d": "Pink garden roses · baby's breath",
    "g4.t": "Petite Amour",   "g4.d": "Mini bouquet · pastel medley",
    "g5.t": "Atelier Bloom",  "g5.d": "Designer mix · seasonal stems",
    "g6.t": "Tender Whisper", "g6.d": "Soft pink · cream · sage greens",
    "g7.t": "Maison Rose",    "g7.d": "Boxed arrangement · for the home",
    "g8.t": "Bridal Veil",    "g8.d": "Wedding bouquet · ivory & champagne",
    "g9.t": "Garden Soirée",  "g9.d": "Garden style · airy & romantic",
    "g10.t": "Spring Letter", "g10.d": "Tulips & ranunculus medley",

    "promo.ribbon": "Limited-Time Event",
    "promo.off": "OFF",
    "promo.slogan": "\"Every bloom, half the price. All the love.\"",
    "promo.sub": "Celebrating you — 梨花's Flower Shop is offering a 50% discount for every customer. Mention this campaign when you reserve.",
    "pc1.t": "Welcome Discount", "pc1.d": "50% off your first bouquet, all collections included.",
    "pc2.t": "Anniversary Gift", "pc2.d": "Complimentary gold ribbon & handwritten card on every order.",
    "pc3.t": "Wedding Package",  "pc3.d": "Custom consultation for bridal bouquets & venue florals.",
    "promo.cta": "Claim Your Bloom",

    "reserve.eyebrow": "— Reservation Guidelines —",
    "reserve.title": "Reserve early. Receive beautifully.",
    "reserve.p1": "Contact us in advance for early and customised orders. Whether it's a birthday, a wedding, or a moment that simply deserves flowers, we will design something only for you.",
    "reserve.l1": "Customised bouquets — please reserve at least 2 days in advance.",
    "reserve.l2": "Wedding florals — please reserve 2–4 weeks in advance.",
    "reserve.l3": "Same-day pickup available for our signature collection.",
    "reserve.hours": "Opening Hours",
    "reserve.days": "Monday — Sunday",
    "reserve.email": "✉ Email Us",

    "cs.eyebrow": "— Customer Service —",
    "cs.title": "We're here, every petal of the way.",
    "cs.support": "Support",
    "cs.support.d": "Reach our florists Monday to Sunday, 9 AM – 5 PM. We reply within the day, with care.",
    "cs.phone": "Phone", "cs.email": "Email", "cs.address": "Address",
    "cs.pay": "Payment Methods",
    "cs.pay.d": "Choose what suits you. All transactions are simple, secure, and friendly.",
    "pay.cash": "Cash on Pickup", "pay.bank": "Bank Transfer", "pay.line": "LINE Pay", "pay.card": "Credit Card",
    "cs.find": "Find Us",
    "cs.find.d": "Next to Kun Shan University — a five-minute walk from the main gate.",
    "cs.find.cta": "Open in Google Maps →",
    "map.title": "Next to Kun Shan University",
    "map.sub": "A five-minute walk from the main gate. We can't wait to meet you.",

    "dl.eyebrow": "— Take it with you —",
    "dl.title": "Download this website",
    "dl.sub": "Get the complete site (HTML, CSS, JavaScript & images) as a single ZIP — yours to keep.",
    "dl.cta": "⬇ Download .ZIP",

    "book.eyebrow": "— Book a Bouquet —",
    "book.title": "Tell us about your moment.",
    "book.lede": "Fill in the form and we will reply within the day with a tailored quote, mockup colours, and the perfect bloom choices for your occasion.",
    "book.perk1": "Free consultation · no obligation",
    "book.perk2": "50% welcome discount applied automatically",
    "book.perk3": "Same-day reply, Monday – Sunday",
    "book.f.name": "Your Name *",
    "book.f.phone": "Phone *",
    "book.f.email": "Email *",
    "book.f.date": "Pickup / Delivery Date *",
    "book.f.occasion": "Occasion",
    "book.f.budget": "Budget",
    "book.f.style": "Preferred Style",
    "book.f.notes": "Special Requests",
    "book.surprise": "Surprise Me",
    "book.submit": "Send Reservation",
    "book.hint": "We reply by phone or email within the day · no spam, ever.",
    "book.toast.t": "Thank you ✿",
    "book.toast.d": "Your reservation has been prepared. Your email app is opening with the details — just press Send and we'll take it from there.",
    "occ.birthday": "Birthday", "occ.wedding": "Wedding", "occ.anniv": "Anniversary",
    "occ.propose": "Proposal", "occ.grad": "Graduation", "occ.opening": "Opening Ceremony",
    "occ.getwell": "Get Well", "occ.just": "Just Because",
    "bud.s": "NT$ 700 – 900", "bud.m": "NT$ 900 – 1,200",
    "bud.l": "NT$ 1,200 – 1,500", "bud.xl": "NT$ 1,500+ (Couture)",

    "footer.tag": "Luxury Floral Boutique · Tainan, Taiwan",
    "footer.visit": "Visit",
    "footer.hours": "Hours",
    "footer.hoursVal": "Mon — Sun · 9:00 AM – 5:00 PM",
    "footer.contact": "Contact",
    "footer.rights": "All petals reserved.",
  },

  "zh-TW": {
    "brand.tagline": "精品花藝沙龍",
    "nav.home": "首頁",
    "nav.product": "商品",
    "nav.about": "品牌故事",
    "nav.gallery": "花藝作品",
    "nav.promo": "優惠活動",
    "nav.reserve": "預訂須知",
    "nav.contact": "聯絡我們",
    "cta.download": "下載網站",

    "hero.eyebrow": "— 台南 · 自 2018 —",
    "hero.title1": "讓每一片花瓣",
    "hero.title2": "輕聲訴說愛意。",
    "hero.lede": "新鮮、優雅、且充滿生命力的花朵 — 於崑山科技大學旁親手綴成,為您的每一個重要時刻細心呈現。",
    "hero.cta1": "瀏覽花藝作品",
    "hero.cta2": "預訂花束",
    "hero.from": "起價 NT$",
    "hero.upto": "高至 NT$",
    "hero.off": "本日折扣",

    "product.eyebrow": "— 招牌商品 —",
    "product.title": "梨花's Flower Shop",
    "product.sub": "梨花's Flower Shop 是一家提供優質產品與服務的花店,座落於崑山科技大學旁。我們選用新鮮、優雅且生機盎然的花材,致力於讓每一位顧客都滿意而歸。",

    "feat1.t": "每日新鮮花材",
    "feat1.d": "每日清晨自在地花農精選,每一支花皆於最盛開時刻送達。",
    "feat2.t": "優雅高訂花藝",
    "feat2.d": "從柔粉色花束到盛大的婚禮作品,每一件設計都是精緻之美的體現。",
    "feat3.t": "客製專屬故事",
    "feat3.d": "生日、求婚、開幕慶 — 與我們分享您的時刻,我們為您量身編織完美花藝。",
    "feat4.t": "持久綻放品質",
    "feat4.d": "品質至上 — 我們的花朵在離開店面後依然保持美麗綻放。",

    "about.eyebrow": "— 品牌故事 —",
    "about.title": "一間源自對花朵情書的精品花坊。",
    "about.p1": "梨花's Flower Shop 始於一間小工坊與一個單純的信念:每一朵用心挑選的花,都能傳遞語言無法承載的情感。如今,我們位於崑山科技大學旁的店面,是粉嫩牡丹、柔軟玫瑰與鎏金緞帶的靜謐聖殿。",
    "about.p2": "我們相信花朵不僅是裝飾 — 它們是愛、慶祝與懷念的語言。每一件花藝皆以手工編排,具備高訂時裝的細膩耐心,以及藝術家的眼光。",
    "about.v1": "優雅 · 柔美 · 浪漫",
    "about.v2": "溫暖 · 現代 · 鮮活",
    "about.v3": "新鮮、品質,還有一抹金色。",
    "about.years": "年的匠心",

    "gallery.eyebrow": "— 精選作品 —",
    "gallery.title": "花束 & 花藝作品",
    "gallery.sub": "瀏覽我們的招牌作品。每一件都可依您的色彩故事、預算與場合進行客製。",

    "g1.t": "粉嫩浪漫",   "g1.d": "庭園玫瑰 · 尤加利 · 象牙緞帶",
    "g2.t": "象牙之歌",   "g2.d": "白牡丹 · 洋桔梗 · 金色細邊",
    "g3.t": "玫瑰高訂",   "g3.d": "粉色庭園玫瑰 · 滿天星",
    "g4.t": "小巧愛戀",   "g4.d": "迷你花束 · 粉彩拼配",
    "g5.t": "工坊精選",   "g5.d": "設計師混搭 · 當季花材",
    "g6.t": "輕聲細語",   "g6.d": "柔粉 · 奶白 · 鼠尾草綠",
    "g7.t": "玫瑰宅邸",   "g7.d": "盒裝花藝 · 居家擺設",
    "g8.t": "新娘面紗",   "g8.d": "婚禮花束 · 象牙與香檳金",
    "g9.t": "花園夜宴",   "g9.d": "庭園風 · 輕盈而浪漫",
    "g10.t": "春日來信",  "g10.d": "鬱金香與毛茛拼配",

    "promo.ribbon": "限時活動",
    "promo.off": "折",
    "promo.slogan": "「每一朵花,半價的價,滿滿的愛。」",
    "promo.sub": "為了款待您 — 梨花's Flower Shop 為每位顧客提供五折優惠。預訂時請告知此活動。",
    "pc1.t": "新客優惠", "pc1.d": "首次購買花束享五折,所有系列皆適用。",
    "pc2.t": "週年禮遇", "pc2.d": "每筆訂單贈送金色緞帶與手寫卡片。",
    "pc3.t": "婚禮專案", "pc3.d": "新娘捧花與場地花藝專屬諮詢設計。",
    "promo.cta": "領取您的花禮",

    "reserve.eyebrow": "— 預訂須知 —",
    "reserve.title": "提早預訂,優雅綻放。",
    "reserve.p1": "歡迎提早與我們聯絡客製訂單。無論是生日、婚禮,或只是一個值得花朵的時刻,我們都將為您量身設計。",
    "reserve.l1": "客製花束 — 請至少提前 2 天預訂。",
    "reserve.l2": "婚禮花藝 — 請提前 2 至 4 週預訂。",
    "reserve.l3": "招牌系列可當日自取。",
    "reserve.hours": "營業時間",
    "reserve.days": "週一 — 週日",
    "reserve.email": "✉ 來信洽詢",

    "cs.eyebrow": "— 顧客服務 —",
    "cs.title": "每一片花瓣,都有我們的陪伴。",
    "cs.support": "客服協助",
    "cs.support.d": "週一至週日 9:00 – 17:00 皆可聯繫我們的花藝師。我們將於當日溫暖回覆。",
    "cs.phone": "電話", "cs.email": "信箱", "cs.address": "地址",
    "cs.pay": "付款方式",
    "cs.pay.d": "選擇您方便的方式。所有交易都簡單、安全且友善。",
    "pay.cash": "現金取貨", "pay.bank": "銀行轉帳", "pay.line": "LINE Pay", "pay.card": "信用卡",
    "cs.find": "尋找我們",
    "cs.find.d": "崑山科技大學旁 — 步行 5 分鐘即達正門。",
    "cs.find.cta": "在 Google 地圖開啟 →",
    "map.title": "崑山科技大學旁",
    "map.sub": "步行 5 分鐘即達正門。期待與您相見。",

    "dl.eyebrow": "— 帶走收藏 —",
    "dl.title": "下載本網站",
    "dl.sub": "取得完整網站檔案(HTML、CSS、JavaScript 與圖片),一個 ZIP 全部帶走 — 屬於您。",
    "dl.cta": "⬇ 下載 .ZIP",

    "book.eyebrow": "— 預訂花禮 —",
    "book.title": "告訴我們您的時刻。",
    "book.lede": "填寫以下表單,我們將於當日回覆,提供專屬報價、色彩搭配與最適合您場合的花材選擇。",
    "book.perk1": "免費諮詢 · 無預訂義務",
    "book.perk2": "自動套用 50% 新客優惠",
    "book.perk3": "週一至週日 · 當日回覆",
    "book.f.name": "您的姓名 *",
    "book.f.phone": "聯絡電話 *",
    "book.f.email": "電子信箱 *",
    "book.f.date": "取件 / 配送日期 *",
    "book.f.occasion": "場合",
    "book.f.budget": "預算",
    "book.f.style": "風格偏好",
    "book.f.notes": "備註與特殊需求",
    "book.surprise": "驚喜搭配",
    "book.submit": "送出預訂",
    "book.hint": "我們將於當日以電話或信箱回覆 · 絕無垃圾訊息。",
    "book.toast.t": "感謝您 ✿",
    "book.toast.d": "您的預訂內容已準備好。郵件 App 正在開啟,請按下傳送,我們將立即為您服務。",
    "occ.birthday": "生日", "occ.wedding": "婚禮", "occ.anniv": "週年紀念",
    "occ.propose": "求婚", "occ.grad": "畢業", "occ.opening": "開幕慶",
    "occ.getwell": "探病祝福", "occ.just": "沒有特別原因",
    "bud.s": "NT$ 700 – 900", "bud.m": "NT$ 900 – 1,200",
    "bud.l": "NT$ 1,200 – 1,500", "bud.xl": "NT$ 1,500+ (高訂)",

    "footer.tag": "精品花藝沙龍 · 台灣台南",
    "footer.visit": "店面",
    "footer.hours": "時段",
    "footer.hoursVal": "週一至週日 · 9:00 – 17:00",
    "footer.contact": "聯絡",
    "footer.rights": "保留所有花瓣。",
  },
};

/* ----------  LANGUAGE  ---------- */
const LANG_KEY = "lihua_lang";

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && I18N[saved]) return saved;
  const browser = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  if (browser.startsWith("zh")) return "zh-TW";
  return "en";
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = "en";
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      // Some entries (slogan) contain HTML-safe quotes; use textContent.
      el.textContent = dict[key];
    }
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    const current = toggle.querySelector(".lang-toggle__current");
    const other   = toggle.querySelector(".lang-toggle__other");
    if (lang === "zh-TW") {
      current.textContent = "繁中";
      other.textContent = "EN";
    } else {
      current.textContent = "EN";
      other.textContent = "繁中";
    }
  }

  localStorage.setItem(LANG_KEY, lang);

  // Update page title in TC
  document.title = lang === "zh-TW"
    ? "梨花's Flower Shop · 精品花藝沙龍"
    : "梨花's Flower Shop — Luxury Floral Boutique";
}

function bindLanguageToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.lang || "en";
    const next = current === "zh-TW" ? "en" : "zh-TW";
    applyLanguage(next);
  });
}

/* ----------  PETAL RAIN (5 seconds)  ---------- */
function runPetalRain(durationMs = 5000) {
  const layer = document.getElementById("petal-rain");
  if (!layer) return;

  const petalClasses = ["petal--p1", "petal--p2", "petal--p3"];
  const total = 90;          // total petals across the 5s window
  const interval = durationMs / total;

  for (let i = 0; i < total; i++) {
    setTimeout(() => {
      const p = document.createElement("span");
      p.className = "petal " + petalClasses[i % petalClasses.length];
      const size = 18 + Math.random() * 26;       // 18 – 44 px
      const startX = Math.random() * 100;         // vw %
      const drift = (Math.random() * 200 - 100);  // -100..100 px sideways
      const spin = (Math.random() * 1440 - 720);  // rotations
      const duration = 4 + Math.random() * 3;     // 4–7 s
      p.style.left = startX + "vw";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.setProperty("--drift", drift + "px");
      p.style.setProperty("--spin", spin + "deg");
      p.style.animation = `petal-fall ${duration}s linear forwards`;
      layer.appendChild(p);

      // Cleanup individual petals after they fall
      setTimeout(() => p.remove(), duration * 1000 + 200);
    }, i * interval);
  }

  // Hide overlay shortly after the last petal lands
  setTimeout(() => {
    layer.classList.add("done");
  }, durationMs + 3500);
}

/* ----------  LIGHTBOX  ---------- */
function bindLightbox() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const close = lb.querySelector(".lightbox__close");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-img");
      const alt = item.querySelector("img")?.alt || "";
      img.src = src; img.alt = alt;
      lb.classList.add("active");
      lb.setAttribute("aria-hidden", "false");
    });
  });

  const hide = () => {
    lb.classList.remove("active");
    lb.setAttribute("aria-hidden", "true");
    img.src = "";
  };
  close.addEventListener("click", (e) => { e.stopPropagation(); hide(); });
  lb.addEventListener("click", hide);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("active")) hide();
  });
}

/* ----------  RESERVATION FORM (mailto-based, works fully offline)  ---------- */
function bindReservationForm() {
  const form = document.getElementById("book-form");
  const toast = document.getElementById("book-toast");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Native validation first
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    const get = (k) => (fd.get(k) || "").toString().trim();

    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const date = get("date");
    const occasion = get("occasion") || "—";
    const budget = get("budget") || "—";
    const style = get("style") || "—";
    const notes = get("notes") || "—";

    const subject = `[Reservation] ${name} · ${occasion} · ${date}`;
    const body =
`Dear 梨花's Flower Shop,

I would like to reserve a bouquet. Here are my details:

• Name      : ${name}
• Phone     : ${phone}
• Email     : ${email}
• Date      : ${date}
• Occasion  : ${occasion}
• Budget    : ${budget}
• Style     : ${style}

Special requests:
${notes}

Thank you — looking forward to your reply.
`;

    const mailto =
      "mailto:suilihua0207@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    // Show confirmation toast, then open email client
    toast.hidden = false;
    toast.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => { window.location.href = mailto; }, 400);
  });
}

/* ----------  TOP BAR SCROLL STATE  ---------- */
function bindScrollHeader() {
  const bar = document.querySelector(".top-bar");
  if (!bar) return;
  const onScroll = () => {
    if (window.scrollY > 30) bar.classList.add("scrolled");
    else bar.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ----------  REVEAL ON SCROLL  ---------- */
function bindReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".section__head, .feature-card, .gallery-item, .promo-card, .contact-card, .about__text, .about__image-wrap, .reserve__card, .reserve__intro").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .9s ease, transform .9s ease";
    io.observe(el);
  });
}

/* ----------  YEAR  ---------- */
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ----------  INIT  ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectInitialLang());
  bindLanguageToggle();
  bindLightbox();
  bindScrollHeader();
  bindReservationForm();
  bindReveals();
  setYear();
  runPetalRain(5000);
});
