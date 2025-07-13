const allProducts = {
    // Main Products (Categories)
    'bed': { name: 'سرویس خواب', image: 'images/bed.jpg', type: 'دسته بندی', link: 'bed.html' },
    'tv': { name: 'میز تلویزیون', image: 'images/tv.jpg', type: 'دسته بندی', link: 'tv.html' },
    'mirror': { name: 'آینه کنسول', image: 'images/mirror.jpg', type: 'دسته بندی', link: 'mirror.html' },
    'jak': { name: 'جاکفشی', image: 'images/jak.jpg', type: 'دسته بندی', link: 'jak.html' },
    'sofa': { name: 'جلو مبلی', image: 'images/sofa.jpg', type: 'دسته بندی', link: 'sofa.html' },
    'deco': { name: 'محصولات تزیینی', image: 'images/deco.jpg', type: 'دسته بندی', link: 'deco.html' },
    'sofaes': { name: 'مبل استیل', image: 'images/sofaes.jpg', type: 'دسته بندی', link: 'sofaes.html' },
    'ayne': { name: 'آیینه قدی', image: 'images/ayne.jpg', type: 'دسته بندی', link: 'ayne.html' },
    'safar': { name: 'مبل راحتی', image: 'images/safar.jpg', type: 'دسته بندی', link: 'sofar.html' },

    'bednojavan': { name: 'سرویس خواب تک نفره (نوجوان)', image: 'images/bednojavan.jpg', type: 'دسته بندی', link: 'bednojavan.html' },
    'jahaz': { name: 'جهیزیه', image: 'images/jahaz.jpg', type: 'دسته بندی', link: 'jahaz.html' },
    'tablo': { name: 'اکسسوری و تابلو', image: 'images/tablo.jpg', type: 'دسته بندی', link: 'tablo.html' },
 
    // Bed Products
    'bed1': { id: 'bed1', name: 'سرویس خواب کلاسیک', type: 'چوب راش', image: 'images/bed1.jpg' },
    'bed2': { id: 'bed2', name: 'سرویس خواب مدرن', type: 'چوب گردو', image: 'images/bed2.jpg' },
    'bed3': { id: 'bed3', name: 'سرویس خواب سلطنتی', type: 'چوب بلوط', image: 'images/bed3.jpg' },
    'bed4': { id: 'bed4', name: 'سرویس خواب مینیمال', type: 'چوب کاج', image: 'images/bed4.jpg' },
    'bed5': { id: 'bed5', name: 'سرویس خواب کودک', type: 'چوب توت', image: 'images/bed5.jpg' },
    'bed6': { id: 'bed6', name: 'سرویس خواب لوکس', type: 'چوب ممرز', image: 'images/bed6.jpg' },

    // Bed Nojavan Products
    'bednojavan1': { id: 'bednojavan1', name: 'سرویس خواب نوجوان مدل A', type: 'چوب راش', image: 'images/bednojavan1.jpg' },
    'bednojavan2': { id: 'bednojavan2', name: 'سرویس خواب نوجوان مدل B', type: 'چوب گردو', image: 'images/bednojavan2.jpg' },
    'bednojavan3': { id: 'bednojavan3', name: 'سرویس خواب نوجوان مدل C', type: 'چوب بلوط', image: 'images/bednojavan3.jpg' },
    'bednojavan4': { id: 'bednojavan4', name: 'سرویس خواب نوجوان مدل D', type: 'چوب کاج', image: 'images/bednojavan4.jpg' },
    'bednojavan5': { id: 'bednojavan5', name: 'سرویس خواب نوجوان مدل E', type: 'چوب توت', image: 'images/bednojavan5.jpg' },
    'bednojavan6': { id: 'bednojavan6', name: 'سرویس خواب نوجوان مدل F', type: 'چوب ممرز', image: 'images/bednojavan6.jpg' },

    // Jahaz Products
    'jahaz1': { id: 'jahaz1', name: 'پکیج جهیزیه کامل A', type: 'اقتصادی', image: 'images/jahaz1.jpg' },
    'jahaz2': { id: 'jahaz2', name: 'پکیج جهیزیه کامل B', type: 'استاندارد', image: 'images/jahaz2.jpg' },
    'jahaz3': { id: 'jahaz3', name: 'پکیج جهیزیه کامل C', type: 'لوکس', image: 'images/jahaz3.jpg' },
    'jahaz4': { id: 'jahaz4', name: 'پکیج جهیزیه کامل D', type: 'سلطنتی', image: 'images/jahaz4.jpg' },
    'jahaz5': { id: 'jahaz5', name: 'پکیج جهیزیه کامل E', type: 'مدرن', image: 'images/jahaz5.jpg' },
    'jahaz6': { id: 'jahaz6', name: 'پکیج جهیزیه کامل F', type: 'کلاسیک', image: 'images/jahaz6.jpg' },
    
    // TV Stand Products (Assuming similar structure)
    'tv1': { id: 'tv1', name: 'میز تلویزیون مدل A', type: 'چوب راش', image: 'images/tv1.jpg' },
    'tv2': { id: 'tv2', name: 'میز تلویزیون مدل B', type: 'چوب گردو', image: 'images/tv2.jpg' },
    'tv3': { id: 'tv3', name: 'میز تلویزیون مدل C', type: 'چوب بلوط', image: 'images/tv3.jpg' },

    // Jak Products (Assuming similar structure)
    'jak1': { id: 'jak1', name: 'جا کفشی کلاسیک', type: 'چوب راش - 4 طبقه', image: 'images/shoe1.jpg' },
    'jak2': { id: 'jak2', name: 'جا کفشی مدرن', type: 'چوب گردو - 3 طبقه', image: 'images/shoe2.jpg' },
    'jak3': { id: 'jak3', name: 'جا کفشی دیواری', type: 'چوب بلوط - 6 جفت', image: 'images/shoe3.jpg' },
    'jak4': { id: 'jak4', name: 'جا کفشی مینیمال', type: 'چوب کاج - 2 طبقه', image: 'images/shoe4.jpg' },
    'jak5': { id: 'jak5', name: 'جا کفشی لوکس', type: 'چوب ماهگونی - 5 طبقه', image: 'images/shoe5.jpg' },
    'jak6': { id: 'jak6', name: 'جا کفشی کودک', type: 'چوب توت - طرح کارتونی', image: 'images/shoe6.jpg' },
    
    'sofa1': { id: 'sofa1', name: 'مبل راحتی مدل A', type: 'پارچه کتان', image: 'images/sofa1.jpg' },
    'sofa2': { id: 'sofa2', name: 'مبل راحتی مدل B', type: 'پارچه مخمل', image: 'images/sofa2.jpg' },
    'sofa3': { id: 'sofa3', name: 'مبل راحتی مدل C', type: 'چرم', image: 'images/sofa3.jpg' },
    'sofa4': { id: 'sofa4', name: 'مبل راحتی مدل D', type: 'پارچه مازراتی', image: 'images/sofa4.jpg' },
    'sofa5': { id: 'sofa5', name: 'مبل راحتی مدل E', type: 'پارچه شانل', image: 'images/sofa5.jpg' },
    'sofa6': { id: 'sofa6', name: 'مبل راحتی مدل F', type: 'پارچه نانو', image: 'images/sofa6.jpg' },
    // Add other products from other pages here...
    'tablo1': { id: 'tablo1', name: 'تابلو مدرن', type: 'رنگ روغن', image: 'images/tablo1.jpg' },
    'tablo2': { id: 'tablo2', name: 'تابلو کلاسیک', type: 'آبرنگ', image: 'images/tablo2.jpg' },
    'tablo3': { id: 'tablo3', name: 'اکسسوری دکوری', type: 'فلزی', image: 'images/tablo3.jpg' },
};