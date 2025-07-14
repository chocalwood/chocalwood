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
    shopLink: "خرید آنلاین",
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
   instagramTitle: "اینستاگرام",

   // صفحه درباره ما (aboutwe.html)
   aboutTitle: "درباره ما - صنعت چوبی چوکال",
   aboutLogo: "🌳 چوکال",
   aboutBack: "بازگشت به خانه",
   aboutStoryTitle: "داستان چوکال",
   aboutStorySubtitle: "سه دهه تجربه در خلق شاهکارهای چوبی",
   aboutHistoryTitle: "تاریخچه چوکال",
   aboutHistoryText: "صنعت چوبی چوکال با بیش از ۳۰ سال تجربه در زمینه طراحی و تولید محصولات چوبی با کیفیت، یکی از پیشروان صنعت چوب در منطقه محسوب می‌شود. ما در طول این سال‌ها همواره در تلاش برای ارائه بهترین کیفیت و خدمات به مشتریان عزیز بوده‌ایم. تیم متخصص ما با استفاده از مدرن‌ترین تکنولوژی‌ها و به‌کارگیری بهترین مواد اولیه، محصولاتی تولید می‌کند که نه تنها زیبایی فضای شما را دوچندان می‌کند، بلکه دوام و کیفیت بی‌نظیری نیز دارند.",
   aboutStat1: "سال تجربه",
   aboutStat2: "پروژه موفق",
   aboutStat3: "متخصص ماهر",
   aboutStat4: "رضایت مشتری",
   aboutMissionTitle: "ماموریت ما",
   aboutMissionText: "ماموریت ما در چوکال ایجاد فضاهای زیبا و کارآمد با استفاده از چوب طبیعی است. ما معتقدیم که چوب نه تنها یک ماده ساختمانی است، بلکه حاملی از گرمای طبیعت و زیبایی است که می‌تواند هر فضایی را به مکانی دلپذیر و آرامش‌بخش تبدیل کند. هدف ما ارائه محصولات و خدماتی است که نه تنها انتظارات شما را برآورده کند، بلکه فراتر از آن، تجربه‌ای بی‌نظیر از زیبایی و کیفیت را به شما هدیه دهد.",
   aboutFeature1Title: "کیفیت برتر",
   aboutFeature1Text: "استفاده از بهترین مواد اولیه و کنترل کیفیت دقیق در تمام مراحل تولید",
   aboutFeature2Title: "متخصصین باتجربه",
   aboutFeature2Text: "تیم متخصص با سال‌ها تجربه در طراحی و ساخت محصولات چوبی",
   aboutFeature3Title: "طراحی منحصر به فرد",
   aboutFeature3Text: "طراحی‌های سفارشی متناسب با سلیقه و نیاز هر مشتری",
   aboutFeature4Title: "تحویل سریع",
   aboutFeature4Text: "تعهد به زمان تحویل و اجرای پروژه‌ها در کمترین زمان ممکن",
   aboutFeature5Title: "ضمانت کیفیت",
   aboutFeature5Text: "ارائه ضمانت کامل برای تمام محصولات و خدمات پس از فروش",
   aboutFeature6Title: "مسئولیت زیست‌محیطی",
   aboutFeature6Text: "استفاده از چوب‌های پایدار و رعایت اصول زیست‌محیطی",
   aboutVisionTitle: "چشم‌انداز آینده",
   aboutVisionText: "چوکال با نگاهی به آینده، در تلاش برای توسعه مداوم و نوآوری در صنعت چوب است. ما به دنبال ایجاد محصولات هوشمند و پایدار هستیم که نه تنها زیبایی فضا را تضمین کند، بلکه در راستای حفظ محیط زیست نیز گام بردارد. هدف ما تبدیل شدن به بزرگ‌ترین و معتبرترین مرجع صنعت چوب در منطقه است، جایی که کیفیت، نوآوری و رضایت مشتری در اولویت قرار دارد.",
   aboutFooterText: "با تشکر از اعتماد شما به چوکال - کیفیت را با چوب تجربه کنید",
   aboutContactLocation: "ایران، تهران,شهریار شاهد شهر خیابان محمد آژند",

   // صفحه فروشگاه (shop.html)
   shopTitle: "خرید آنلاین - صنعت چوبی چوکال",
   shopLogo: "🌳 چوکال",
   shopBack: "بازگشت به خانه",
   shopHeroTitle: "خرید آنلاین",
   shopHeroSubtitle: "محصولات ما را به صورت آنلاین سفارش دهید",
   shopComingSoon: "بخش فروش آنلاین به زودی راه اندازی خواهد شد.",
   shopContactUs: "در حال حاضر برای ثبت سفارش و اطلاع از قیمت‌ها می‌توانید با ما تماس بگیرید.",
   shopFooterText: "با تشکر از اعتماد شما به چوکال - کیفیت را با چوب تجربه کنید"
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
    shopLink: "Online Shop",
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
   instagramTitle: "Instagram",

   // About Us page (aboutwe.html)
   aboutTitle: "About Us - Chocal Wood Industry",
   aboutLogo: "🌳 Chocal",
   aboutBack: "Back to Home",
   aboutStoryTitle: "The Story of Chocal",
   aboutStorySubtitle: "Three decades of experience in creating wooden masterpieces",
   aboutHistoryTitle: "History of Chocal",
   aboutHistoryText: "With over 30 years of experience in designing and producing high-quality wooden products, Chocal Wood Industry is considered one of the pioneers in the wood industry in the region. Throughout these years, we have always strived to provide the best quality and services to our dear customers. Our specialized team, using the most modern technologies and the best raw materials, produces products that not only double the beauty of your space but also have unparalleled durability and quality.",
   aboutStat1: "Years of Experience",
   aboutStat2: "Successful Projects",
   aboutStat3: "Skilled Specialists",
   aboutStat4: "Customer Satisfaction",
   aboutMissionTitle: "Our Mission",
   aboutMissionText: "Our mission at Chocal is to create beautiful and functional spaces using natural wood. We believe that wood is not just a building material, but a carrier of nature's warmth and beauty that can transform any space into a pleasant and relaxing place. Our goal is to provide products and services that not only meet your expectations but go beyond them, offering you an unparalleled experience of beauty and quality.",
   aboutFeature1Title: "Superior Quality",
   aboutFeature1Text: "Use of the best raw materials and strict quality control at all stages of production",
   aboutFeature2Title: "Experienced Specialists",
   aboutFeature2Text: "A specialized team with years of experience in designing and manufacturing wooden products",
   aboutFeature3Title: "Unique Design",
   aboutFeature3Text: "Custom designs tailored to the taste and needs of each customer",
   aboutFeature4Title: "Fast Delivery",
   aboutFeature4Text: "Commitment to delivery times and project execution in the shortest possible time",
   aboutFeature5Title: "Quality Guarantee",
   aboutFeature5Text: "Providing a full guarantee for all products and after-sales services",
   aboutFeature6Title: "Environmental Responsibility",
   aboutFeature6Text: "Use of sustainable wood and adherence to environmental principles",
   aboutVisionTitle: "Future Vision",
   aboutVisionText: "Looking to the future, Chocal strives for continuous development and innovation in the wood industry. We aim to create smart and sustainable products that not only ensure the beauty of the space but also contribute to environmental preservation. Our goal is to become the largest and most reputable authority in the wood industry in the region, where quality, innovation, and customer satisfaction are prioritized.",
   aboutFooterText: "Thank you for your trust in Chocal - Experience quality with wood",
   aboutContactLocation: "Iran, Tehran, Shahriar, Shahed Shahr, Mohammad Ajand St.",

   // Shop page (shop.html)
   shopTitle: "Online Shop - Chocal Wood Industry",
   shopLogo: "🌳 Chocal",
   shopBack: "Back to Home",
   shopHeroTitle: "Online Shop",
   shopHeroSubtitle: "Order our products online",
   shopComingSoon: "The online sales section will be launched soon.",
   shopContactUs: "Currently, you can contact us to place an order and inquire about prices.",
   shopFooterText: "Thank you for your trust in Chocal - Experience quality with wood"
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
    shopLink: "التسوق عبر الإنترنت",
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
   instagramTitle: "انستغرام",

   // صفحة من نحن (aboutwe.html)
   aboutTitle: "من نحن - صناعة الخشب شوكال",
   aboutLogo: "🌳 شوكال",
   aboutBack: "العودة إلى الرئيسية",
   aboutStoryTitle: "قصة شوكال",
   aboutStorySubtitle: "ثلاثة عقود من الخبرة في إبداع روائع خشبية",
   aboutHistoryTitle: "تاريخ شوكال",
   aboutHistoryText: "مع أكثر من 30 عامًا من الخبرة في تصميم وإنتاج المنتجات الخشبية عالية الجودة ، تعتبر صناعة شوكال للأخشاب واحدة من الشركات الرائدة في صناعة الأخشاب في المنطقة. على مر السنين ، سعينا دائمًا لتقديم أفضل جودة وخدمات لعملائنا الأعزاء. يقوم فريقنا المتخصص ، باستخدام أحدث التقنيات وأفضل المواد الخام ، بإنتاج منتجات لا تضاعف جمال مساحتك فحسب ، بل تتمتع أيضًا بمتانة وجودة لا مثيل لهما.",
   aboutStat1: "سنوات من الخبرة",
   aboutStat2: "مشروع ناجح",
   aboutStat3: "متخصص ماهر",
   aboutStat4: "رضا العملاء",
   aboutMissionTitle: "مهمتنا",
   aboutMissionText: "مهمتنا في شوكال هي خلق مساحات جميلة وعملية باستخدام الخشب الطبيعي. نعتقد أن الخشب ليس مجرد مادة بناء ، ولكنه حامل لدفء الطبيعة وجمالها الذي يمكن أن يحول أي مساحة إلى مكان لطيف ومريح. هدفنا هو تقديم منتجات وخدمات لا تلبي توقعاتك فحسب ، بل تتجاوزها ، وتقدم لك تجربة لا مثيل لها من الجمال والجودة.",
   aboutFeature1Title: "جودة فائقة",
   aboutFeature1Text: "استخدام أفضل المواد الخام ورقابة صارمة على الجودة في جميع مراحل الإنتاج",
   aboutFeature2Title: "متخصصون من ذوي الخبرة",
   aboutFeature2Text: "فريق متخصص يتمتع بسنوات من الخبرة في تصميم وتصنيع المنتجات الخشبية",
   aboutFeature3Title: "تصميم فريد",
   aboutFeature3Text: "تصميمات مخصصة مصممة حسب ذوق واحتياجات كل عميل",
   aboutFeature4Title: "توصيل سريع",
   aboutFeature4Text: "الالتزام بمواعيد التسليم وتنفيذ المشاريع في أقصر وقت ممكن",
   aboutFeature5Title: "ضمان الجودة",
   aboutFeature5Text: "تقديم ضمان كامل لجميع المنتجات وخدمات ما بعد البيع",
   aboutFeature6Title: "المسؤولية البيئية",
   aboutFeature6Text: "استخدام الأخشاب المستدامة والالتزام بالمبادئ البيئية",
   aboutVisionTitle: "رؤية مستقبلية",
   aboutVisionText: "بالنظر إلى المستقبل ، تسعى شوكال جاهدة من أجل التطوير المستمر والابتكار في صناعة الأخشاب. نهدف إلى إنشاء منتجات ذكية ومستدامة لا تضمن جمال المساحة فحسب ، بل تساهم أيضًا في الحفاظ على البيئة. هدفنا هو أن نصبح أكبر سلطة وأكثرها شهرة في صناعة الأخشاب في المنطقة ، حيث الجودة والابتكار ورضا العملاء هي الأولوية.",
   aboutFooterText: "شكرا لثقتكم في شوكال - جربوا الجودة مع الخشب",
   aboutContactLocation: "إيران ، طهران ، شهريار ، شاهد شهر ، شارع محمد أجند",

   // صفحة المتجر (shop.html)
   shopTitle: "المتجر الإلكتروني - صناعة الخشب شوكال",
   shopLogo: "🌳 شوكال",
   shopBack: "العودة إلى الرئيسية",
   shopHeroTitle: "المتجر الإلكتروني",
   shopHeroSubtitle: "اطلب منتجاتنا عبر الإنترنت",
   shopComingSoon: "سيتم إطلاق قسم المبيعات عبر الإنترنت قريبًا.",
   shopContactUs: "حاليًا ، يمكنك الاتصال بنا لتقديم طلب والاستفسار عن الأسعار.",
   shopFooterText: "شكرا لثقتكم في شوكال - جربوا الجودة مع الخشب"
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

  // ترجمه صفحه درباره ما (aboutwe.html)
  if (document.body.classList.contains('about-page')) {
    translateAboutPage(lang);
  }

  // ترجمه صفحه فروشگاه (shop.html)
  if (document.body.classList.contains('shop-page')) {
    translateShopPage(lang);
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

  const shopLink = document.querySelector('#shop-link');
  if (shopLink) shopLink.innerText = t.shopLink;
  
  const aboutLink = document.querySelector('#about-link');
  if (aboutLink) aboutLink.innerText = t.aboutLink;
  
  const contactLink = document.querySelector('#contact-link');
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

// ترجمه صفحه درباره ما
function translateAboutPage(lang) {
  const t = translations[lang];
  document.title = t.aboutTitle;

  document.querySelector('.logo').innerText = t.aboutLogo;
  document.querySelector('.back-btn').innerText = t.aboutBack;
  document.querySelector('.hero-title').innerText = t.aboutStoryTitle;
  document.querySelector('.hero-subtitle').innerText = t.aboutStorySubtitle;
  
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles[0].childNodes[2].nodeValue = ` ${t.aboutHistoryTitle}`;
  sectionTitles[1].childNodes[2].nodeValue = ` ${t.aboutMissionTitle}`;
  sectionTitles[2].childNodes[2].nodeValue = ` ${t.aboutVisionTitle}`;

  document.querySelectorAll('.section-text')[0].innerText = t.aboutHistoryText;
  document.querySelectorAll('.section-text')[1].innerText = t.aboutMissionText;
  document.querySelectorAll('.section-text')[2].innerText = t.aboutVisionText;

  const statLabels = document.querySelectorAll('.stat-label');
  statLabels[0].innerText = t.aboutStat1;
  statLabels[1].innerText = t.aboutStat2;
  statLabels[2].innerText = t.aboutStat3;
  statLabels[3].innerText = t.aboutStat4;

  const featureTitles = document.querySelectorAll('.feature-title');
  featureTitles[0].innerText = t.aboutFeature1Title;
  featureTitles[1].innerText = t.aboutFeature2Title;
  featureTitles[2].innerText = t.aboutFeature3Title;
  featureTitles[3].innerText = t.aboutFeature4Title;
  featureTitles[4].innerText = t.aboutFeature5Title;
  featureTitles[5].innerText = t.aboutFeature6Title;

  const featureTexts = document.querySelectorAll('.feature-text');
  featureTexts[0].innerText = t.aboutFeature1Text;
  featureTexts[1].innerText = t.aboutFeature2Text;
  featureTexts[2].innerText = t.aboutFeature3Text;
  featureTexts[3].innerText = t.aboutFeature4Text;
  featureTexts[4].innerText = t.aboutFeature5Text;
  featureTexts[5].innerText = t.aboutFeature6Text;

  document.querySelector('.footer-text').innerText = t.aboutFooterText;
  document.querySelector('.contact-item span:last-child').innerText = t.aboutContactLocation;
}

// ترجمه صفحه فروشگاه
function translateShopPage(lang) {
  const t = translations[lang];
  document.title = t.shopTitle;

  document.querySelector('.logo').innerText = t.shopLogo;
  document.querySelector('.back-btn').innerText = t.shopBack;
  document.querySelector('.hero-title').innerText = t.shopHeroTitle;
  document.querySelector('.hero-subtitle').innerText = t.shopHeroSubtitle;
  
  const sectionText = document.querySelector('.section-text');
  sectionText.innerHTML = `${t.shopComingSoon}<br><br>${t.shopContactUs}`;

  document.querySelector('.footer-text').innerText = t.shopFooterText;
}
