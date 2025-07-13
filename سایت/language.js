// language.js - سیستم کامل چندزبانه
const translations = {
  fa: {
    // صفحه اصلی (index.html)
    welcomeTitle: "به صنعت چوبی چوکال خوش آمدید",
    welcomeText: "زیبایی را با چوب تجربه کنید ❤️",
    welcomeButton: "کیفیت را با چوکال تجربه کنید",
    clickHint: "👈 کلیک کنید",
    phoneText: 'تماس با مجموعه چوکال - <a href="tel:+989386908288">+989386908288</a>',
    mainMenuTitle: "منوی اصلی چوکال",
    productsLink: "محصولات",
    aboutLink: "درباره ما",
    contactLink: "تماس با ما",
    specialOfferTitle: "تخفیف ویژه برای اولین خرید",
    specialOfferSubtitle: "٪20 تخفیف + ارسال رایگان",
    
    // صفحه محصولات (products.html)
    productsTitle: "چوکال",
    backButton: "🏠 برگشت به صفحه اصلی",
    productsTab: "محصولات",
    favoritesTab: "لیست علاقه‌مندی‌ها",
    emptyFavorites: "هنوز هیچ محصولی به لیست علاقه‌مندی‌ها اضافه نکرده‌اید",
    chatButton: "💬 چت با ما",
    favoritesHeader: "علاقه‌مندی‌ها",
    chatAlert: "چت با ما به زودی راه‌اندازی خواهد شد!",
    
    // نام محصولات
    productNames: {
      bed: "🛏 سرویس خواب",
      tv: "📺️ میز تلویزیون",
      mirror: "🪑 آینه کنسول",
      jak: "👞 جاکفشی",
      sofa: "🛋️ جلو مبلی",
      deco: "❤️ محصولات تزیینی",
      steel_sofa: "🏠 مبل استیل",
      standing_mirror: "❤️ آیینه قدی",
      comfort_sofa: "🏠 مبل راحتی",
      tablo: "🖼️ اکسسوری و تابلو",
      tablo1: "تابلو مدرن",
      tablo2: "تابلو کلاسیک",
      tablo3: "اکسسوری دکوری"
    },

    // صفحه سرویس خواب (bed.html)
    bedTitle: "سرویس خواب چوکال",
    backToProducts: "← محصولات",
    backToHome: "🏠 صفحه اصلی",
    favorites: "علاقه‌مندی‌ها",
    yourFavorites: "علاقه‌مندی‌های شما",
    imageNotFound: "عکس پیدا نشد",
    like: "لایک",
    liked: "لایک شده",
    noFavoritesAdded: "هیچ محصولی اضافه نشده",
    commentSystemSoon: "سیستم نظرات به زودی!",
    productTypeWood: {
      "چوب راش": "چوب راش",
      "چوب گردو": "چوب گردو",
      "چوب بلوط": "چوب بلوط",
      "چوب کاج": "چوب کاج",
      "چوب توت": "چوب توت",
      "چوب ممرز": "چوب ممرز"
    },
    productTypeArt: {
      "رنگ روغن": "رنگ روغن",
      "آبرنگ": "آبرنگ",
      "فلزی": "فلزی"
    },
    // صفحه تماس با ما (tamas.html)
   contactHeader: "تماس با چوکال",
   contactSubHeader: "هر زمان که نیاز به مشاوره دارید، با ما در ارتباط باشید",
   backButtonContact: "← برگشت",
   phoneTitle: "تماس تلفنی",
   emailTitle: "ایمیل",
   instagramTitle: "اینستاگرام"
  },
  
  en: {
    // Main page (index.html)
    welcomeTitle: "Welcome to Chocal Wood Industry",
    welcomeText: "Experience beauty with wood ❤️",
    welcomeButton: "Experience quality with Chocal",
    clickHint: "👈 Click here",
    phoneText: 'Contact Chocal Wood - <a href="tel:+989386908288">+989386908288</a>',
    mainMenuTitle: "Chocal Main Menu",
    productsLink: "Products",
    aboutLink: "About Us",
    contactLink: "Contact Us",
    specialOfferTitle: "Special Discount for First Purchase",
    specialOfferSubtitle: "20% Discount + Free Shipping",
    
    // Products page (products.html)
    productsTitle: "Chocal",
    backButton: "🏠 Back to Home",
    productsTab: "Products",
    favoritesTab: "Favorites",
    emptyFavorites: "You haven't added any products to favorites yet",
    chatButton: "💬 Chat with us",
    favoritesHeader: "Favorites",
    chatAlert: "Chat with us will be available soon!",
    
    // Product names
    productNames: {
      bed: "🛏 Bedroom Set",
      tv: "📺️ TV Stand",
      mirror: "🪑 Console Mirror",
      jak: "👞 Shoe Rack",
      sofa: "🛋️ Coffee Table",
      deco: "❤️ Decorative Products",
      steel_sofa: "🏠 Steel Sofa",
      standing_mirror: "❤️ Standing Mirror",
      comfort_sofa: "🏠 Comfort Sofa",
      tablo: "🖼️ Accessories & Paintings",
      tablo1: "Modern Painting",
      tablo2: "Classic Painting",
      tablo3: "Decorative Accessory"
    },

    // Bed page (bed.html)
    bedTitle: "Chocal Bedroom Set",
    backToProducts: "← Products",
    backToHome: "🏠 Home",
    favorites: "Favorites",
    yourFavorites: "Your Favorites",
    imageNotFound: "Image not found",
    like: "Like",
    liked: "Liked",
    noFavoritesAdded: "No items added",
    commentSystemSoon: "Comment system coming soon!",
    productTypeWood: {
      "چوب راش": "Beech Wood",
      "چوب گردو": "Walnut Wood",
      "چوب بلوط": "Oak Wood",
      "چوب کاج": "Pine Wood",
      "چوب توت": "Mulberry Wood",
      "چوب ممرز": "Hornbeam Wood"
    },
    productTypeArt: {
      "رنگ روغن": "Oil Painting",
      "آبرنگ": "Watercolor",
      "فلزی": "Metallic"
    },
     // Contact Us page (tamas.html)
   contactHeader: "Contact Chocal",
   contactSubHeader: "Feel free to contact us whenever you need advice",
   backButtonContact: "← Back",
   phoneTitle: "Phone Call",
   emailTitle: "Email",
   instagramTitle: "Instagram"
  },
  
  ar: {
    // الصفحة الرئيسية (index.html)
    welcomeTitle: "مرحباً بكم في صناعة الخشب شوكال",
    welcomeText: "اختبروا الجمال مع الخشب ❤️",
    welcomeButton: "جرّبوا الجودة مع شوكال",
    clickHint: "👈 اضغط هنا",
    phoneText: 'الاتصال بشركة شوكال - <a href="tel:+989386908288">+989386908288</a>',
    mainMenuTitle: "القائمة الرئيسية لشوكال",
    productsLink: "المنتجات",
    aboutLink: "من نحن",
    contactLink: "اتصل بنا",
    specialOfferTitle: "خصم خاص للشراء الأول",
    specialOfferSubtitle: "خصم 20% + شحن مجاني",
    
    // صفحة المنتجات (products.html)
    productsTitle: "شوكال",
    backButton: "🏠 العودة إلى الصفحة الرئيسية",
    productsTab: "المنتجات",
    favoritesTab: "المفضلة",
    emptyFavorites: "لم تقم بإضافة أي منتجات إلى المفضلة بعد",
    chatButton: "💬 محادثة معنا",
    favoritesHeader: "المفضلة",
    chatAlert: "المحادثة معنا ستكون متاحة قريباً!",
    
    // أسماء المنتجات
    productNames: {
      bed: "🛏 طقم غرفة نوم",
      tv: "📺️ طاولة تلفزيون",
      mirror: "🪑 مرآة كونسول",
      jak: "👞 حامل أحذية",
      sofa: "🛋️ طاولة قهوة",
      deco: "❤️ منتجات تزيينية",
      steel_sofa: "🏠 أريكة ستيل",
      standing_mirror: "❤️ مرآة واقفة",
      comfort_sofa: "🏠 أريكة مريحة",
      tablo: "🖼️ إكسسوارات ولوحات",
      tablo1: "لوحة حديثة",
      tablo2: "لوحة كلاسيكية",
      tablo3: "إكسسوار ديكور"
    },

    // صفحة طقم غرفة النوم (bed.html)
    bedTitle: "طقم غرفة نوم شوكال",
    backToProducts: "→ المنتجات",
    backToHome: "🏠 الرئيسية",
    favorites: "المفضلة",
    yourFavorites: "مفضلاتك",
    imageNotFound: "لم يتم العثور على الصورة",
    like: "إعجاب",
    liked: "أعجبني",
    noFavoritesAdded: "لم تتم إضافة أي عناصر",
    commentSystemSoon: "نظام التعليقات قريباً!",
    productTypeWood: {
      "چوب راش": "خشب الزان",
      "چوب گردو": "خشب الجوز",
      "چوب بلوط": "خشب البلوط",
      "چوب کاج": "خشب الصنوبر",
      "چوب توت": "خشب التوت",
      "چوب ممرز": "خشب النير"
    },
    productTypeArt: {
      "رنگ روغن": "لوحة زيتية",
      "آبرنگ": "ألوان مائية",
      "فلزی": "معدني"
    },
     // صفحة اتصل بنا (tamas.html)
   contactHeader: "اتصل بشوكال",
   contactSubHeader: "لا تتردد في الاتصال بنا كلما احتجت إلى مشورة",
   backButtonContact: "→ رجوع",
   phoneTitle: "مكالمة هاتفية",
   emailTitle: "بريد إلكتروني",
   instagramTitle: "انستغرام"
  }
};

// تابع اصلی تغییر زبان
function switchLanguage(lang) {
  // ذخیره زبان انتخاب شده در localStorage
  localStorage.setItem('selectedLanguage', lang);
  
  // تغییر جهت صفحه
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  
  // ترجمه عناصر صفحه اصلی (index.html)
  if (document.querySelector('.welcome-box')) {
    translateIndexPage(lang);
  }
  
  // ترجمه عناصر صفحه محصولات (products.html)
  if (document.querySelector('.header')) {
    translateProductsPage(lang);
  }
  
  // بروزرسانی تنظیمات CSS برای زبان‌های مختلف
  updateLanguageStyles(lang);

  // ترجمه صفحه سرویس خواب (bed.html)
  if (document.querySelector('.gallery')) {
    translateBedPage(lang);
  }

   // ترجمه صفحه تماس با ما (tamas.html)
   if (document.querySelector('.contact-grid')) {
    translateContactPage(lang);
  }

  // ترجمه صفحه تابلو (tablo.html)
  if (document.body.classList.contains('tablo-page')) {
    translateTabloPage(lang);
  }
}

// ترجمه صفحه اصلی
function translateIndexPage(lang) {
  const t = translations[lang];
  
  // عنوان اصلی
  const mainTitle = document.querySelector('h1');
  if (mainTitle) mainTitle.innerText = t.welcomeTitle;
  
  // متن خوشامدگویی
  const welcomeText = document.querySelector('.welcome-box p');
  if (welcomeText) welcomeText.innerText = t.welcomeText;
  
  // دکمه اصلی
  const mainButton = document.querySelector('.button');
  if (mainButton) mainButton.innerText = t.welcomeButton;
  
  // راهنمای کلیک
  const clickHint = document.getElementById('click-text');
  if (clickHint) clickHint.innerText = t.clickHint;
  
  // اطلاعات تماس
  const phoneText = document.getElementById('phone-text');
  if (phoneText) phoneText.innerHTML = t.phoneText;
  
  // منوی اصلی
  const mainMenuTitle = document.querySelector('.main-menu h2');
  if (mainMenuTitle) mainMenuTitle.innerText = t.mainMenuTitle;
  
  // لینک‌های منو
  const productsLink = document.querySelector('#products-link');
  if (productsLink) productsLink.innerText = t.productsLink;
  
  const aboutLink = document.querySelector('.main-menu ul li:nth-child(2) a');
  if (aboutLink) aboutLink.innerText = t.aboutLink;
  
  const contactLink = document.querySelector('.main-menu ul li:nth-child(3) a');
  if (contactLink) contactLink.innerText = t.contactLink;
  
  // تخفیف ویژه
  const offerTitle = document.querySelector('.special-offer .offer-text');
  if (offerTitle) offerTitle.innerText = t.specialOfferTitle;
  
  const offerSubtitle = document.querySelector('.special-offer .offer-subtitle');
  if (offerSubtitle) offerSubtitle.innerText = t.specialOfferSubtitle;
}

// ترجمه صفحه محصولات
function translateProductsPage(lang) {
  const t = translations[lang];
  
  // عنوان صفحه محصولات
  const productsTitle = document.querySelector('.header h1');
  if (productsTitle) productsTitle.innerText = t.productsTitle;
  
  // دکمه برگشت
  const backButton = document.querySelector('.back-btn');
  if (backButton) backButton.innerText = t.backButton;
  
  // تب‌های ناوبری
  const navButtons = document.querySelectorAll('.nav-btn');
  if (navButtons.length >= 2) {
    navButtons[0].innerText = t.productsTab;
    
    // تب علاقه‌مندی‌ها با شمارنده
    const favoriteCount = document.getElementById('favoriteCount');
    const currentCount = favoriteCount ? favoriteCount.innerText : '0';
    navButtons[1].innerHTML = `${t.favoritesTab} (<span id="favoriteCount">${currentCount}</span>)`;
  }
  
  // ترجمه نام محصولات
  const productLinks = document.querySelectorAll('.product-link');
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach((card, index) => {
    const productId = card.dataset.product;
    const link = card.querySelector('.product-link');
    
    if (link && productId && t.productNames[productId]) {
      link.innerText = t.productNames[productId];
    } else if (link) {
      // برای محصولات اضافی که در dataset تعریف نشده‌اند
      const cardIndex = Array.from(productCards).indexOf(card);
      if (cardIndex === 6) link.innerText = t.productNames.steel_sofa;
      else if (cardIndex === 7) link.innerText = t.productNames.standing_mirror;
      else if (cardIndex === 8) link.innerText = t.productNames.comfort_sofa;
    }
  });
  
  // متن خالی بودن علاقه‌مندی‌ها
  const emptyFavorites = document.querySelector('.empty-favorites p');
  if (emptyFavorites) emptyFavorites.innerText = t.emptyFavorites;
  
  // دکمه چت
  const chatButton = document.querySelector('.chat-btn');
  if (chatButton) chatButton.innerText = t.chatButton;
  
  // هدر علاقه‌مندی‌ها
  const favoritesHeader = document.querySelector('.favorites-header');
  if (favoritesHeader) {
    const headerSpans = favoritesHeader.querySelectorAll('span');
    if (headerSpans.length >= 2) {
      headerSpans[1].innerText = t.favoritesHeader;
    }
  }
  
  // بروزرسانی لیست علاقه‌مندی‌ها
  if (typeof updateFavoritesList === 'function') {
    updateFavoritesList();
  }
}

// ترجمه صفحه سرویس خواب
function translateBedPage(lang) {
  const t = translations[lang];

  document.querySelector('h1').innerText = t.bedTitle;
  document.querySelector('.products-btn').innerText = t.backToProducts;
  document.querySelector('.home-btn').innerText = t.backToHome;
  document.querySelector('.favorites-icon span:nth-child(2)').innerText = t.favorites;
  document.querySelector('.favorites-panel h4').innerText = t.yourFavorites;
  
  const emptyFavs = document.querySelector('.favorites-panel p');
  if(emptyFavs) emptyFavs.innerText = t.noFavoritesAdded;

  // This will translate product types when the cards are rerendered
  if (typeof loadProducts === 'function') {
    loadProducts();
  }
}


// بروزرسانی استایل‌ها بر اساس زبان
function updateLanguageStyles(lang) {
  const body = document.body;
  
  // حذف کلاس‌های زبان قبلی
  body.classList.remove('lang-fa', 'lang-en', 'lang-ar');
  
  // اضافه کردن کلاس زبان جدید
  body.classList.add(`lang-${lang}`);
  
  // تنظیمات خاص برای زبان‌های مختلف
  if (lang === 'en') {
    // تنظیمات خاص انگلیسی
    document.documentElement.style.setProperty('--text-align', 'left');
    document.documentElement.style.setProperty('--flex-direction', 'row');
  } else {
    // تنظیمات خاص فارسی و عربی
    document.documentElement.style.setProperty('--text-align', 'right');
    document.documentElement.style.setProperty('--flex-direction', 'row-reverse');
  }
}

// توابع مخصوص تغییر زبان
function switchToFarsi() {
  switchLanguage('fa');
}

function switchToEnglish() {
  switchLanguage('en');
}

function switchToArabic() {
  switchLanguage('ar');
}

// بروزرسانی لیست علاقه‌مندی‌ها با ترجمه
function updateFavoritesList() {
  const lang = localStorage.getItem('selectedLanguage') || 'fa';
  const t = translations[lang];
  const favoritesList = document.getElementById('favoritesList');
  
  if (!favoritesList) return;
  
  // دریافت لیست علاقه‌مندی‌ها از localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  
  if (favorites.length === 0) {
    favoritesList.innerHTML = `
      <div class="empty-favorites">
        <p>${t.emptyFavorites}</p>
        <p>❤️</p>
      </div>
    `;
  } else {
    favoritesList.innerHTML = favorites.map(productId => {
      const productName = t.productNames[productId] || productId;
      return `
        <div class="product-card" data-product="${productId}">
          <button class="favorite-btn active" onclick="toggleFavorite('${productId}', this)">♥</button>
          <a href="${productId}.html" class="product-link">${productName}</a>
        </div>
      `;
    }).join('');
  }
}

// بروزرسانی پیام چت
function openChat() {
  const lang = localStorage.getItem('selectedLanguage') || 'fa';
  const t = translations[lang];
  alert(t.chatAlert);
}

// بارگذاری زبان ذخیره شده هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'fa';
  switchLanguage(savedLang);
});

// رویداد تغییر زبان برای صفحات مختلف
window.addEventListener('load', function() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'fa';
  
  // تأخیر کوتاه برای اطمینان از لود کامل عناصر
  setTimeout(() => {
    switchLanguage(savedLang);
  }, 100);
});

// export برای استفاده در سایر فایل‌ها
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    translations,
    switchLanguage,
    switchToFarsi,
    switchToEnglish,
    switchToArabic,
    updateFavoritesList,
    openChat
  };
}

// ترجمه صفحه تماس با ما
function translateContactPage(lang) {
 const t = translations[lang];

 document.title = t.contactHeader;
 
 const header = document.querySelector('header h1');
 if(header) header.innerText = t.contactHeader;

 const subHeader = document.querySelector('header p');
 if(subHeader) subHeader.innerText = t.contactSubHeader;

 const backBtn = document.querySelector('.back-btn');
 if(backBtn) backBtn.innerText = t.backButtonContact;

 const contactTitles = document.querySelectorAll('.contact-title');
 if (contactTitles.length === 3) {
   contactTitles[0].innerText = t.phoneTitle;
   contactTitles[1].innerText = t.emailTitle;
   contactTitles[2].innerText = t.instagramTitle;
  }
 }

// ترجمه صفحه تابلو
function translateTabloPage(lang) {
  const t = translations[lang];

  document.title = t.productNames.tablo || 'اکسسوری و تابلو';
  
  const header = document.querySelector('.header h1');
  if(header) header.innerText = t.productNames.tablo || 'اکسسوری و تابلو';

  const backBtn = document.querySelector('.back-btn');
  if(backBtn) backBtn.innerText = t.backButton || '🏠 برگشت به صفحه اصلی';

  const productsTab = document.querySelector('.nav-btn');
  if(productsTab) productsTab.innerText = t.productsTab || 'محصولات';

  // Rerender product cards with the correct language
  if (typeof generateProductCards === 'function') {
    generateProductCards();
  }
}
