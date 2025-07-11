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
      comfort_sofa: "🏠 مبل راحتی"
    }
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
      comfort_sofa: "🏠 Comfort Sofa"
    }
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
      comfort_sofa: "🏠 أريكة مريحة"
    }
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

