// EMY BAKES App Logic

// 1. Data Store: Complete Menu Catalog
const MENU_DATA = [
    // --- Category: Cookiescoop (كوكي سكوب) ---
    {
        id: "scoop-nutella",
        nameAr: "كوكي سكوب نوتيلا",
        nameEn: "Nutella Cookie Scoop",
        category: "cookiescoop",
        price: 345,
        desc: "يأتي الكوكي في بوكس به نوتيلا إكسترا وتشوكلت كوينز طبيعي وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        badge: "الأكثر مبيعاً 🔥",
        customizable: false
    },
    {
        id: "scoop-lotus",
        nameAr: "كوكي سكوب لوتس",
        nameEn: "Lotus Cookie Scoop",
        category: "cookiescoop",
        price: 355,
        desc: "يأتي الكوكي في بوكس به صوص لوتس غني وتشوكلت كوينز وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-kinder",
        nameAr: "كوكي سكوب كيندر",
        nameEn: "Kinder Cookie Scoop",
        category: "cookiescoop",
        price: 365,
        desc: "ياتي في بوكس به شوكولاتة كيندر إكسترا وتشوكلت كوينز طبيعي وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-mix-kinder-nutella",
        nameAr: "ميكس كيندر نوتيلا سكوب",
        nameEn: "Mix Kinder Nutella Scoop",
        category: "cookiescoop",
        price: 355,
        desc: "مزيج رائع من كيندر شوكليت ونوتيلا مع تشوكلت كوينز وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-mix-kinder-lotus",
        nameAr: "ميكس كيندر لوتس سكوب",
        nameEn: "Mix Kinder Lotus Scoop",
        category: "cookiescoop",
        price: 350,
        desc: "مزيج رائع من كيندر شوكليت وصوص لوتس فاخر مع الإضافات المقرمشة (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-pistachio",
        nameAr: "كوكي سكوب بستشيو (فستق)",
        nameEn: "Pistachio Cookie Scoop",
        category: "cookiescoop",
        price: 380,
        desc: "كوكي سكوب غرقان بصوص الفستق الفاخر الكرانشي مع تشوكلت كوينز (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-red-velvet",
        nameAr: "ريد فلفيت بلو بيري سكوب",
        nameEn: "Red Velvet Blueberry Scoop",
        category: "cookiescoop",
        price: 390,
        desc: "ياتي مع الريد فلفيت كريم تشيز وفيوتين كرانشي وبلوبيري توبينج فاخر",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
        badge: "مميز جداً ✨",
        customizable: false
    },

    // --- Category: Cookies (كوكيز) ---
    {
        id: "cookie-original",
        nameAr: "كوكيز اوريجينال",
        nameEn: "Original Cookie",
        category: "cookies",
        price: 65,
        desc: "كوكيز كلاسيكية بقطع الشوكولاتة الغنية، مقرمشة من الأطراف وطرية من المنتصف",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-double-choco",
        nameAr: "كوكيز دبل تشوكلت",
        nameEn: "Double Chocolate Cookie",
        category: "cookies",
        price: 65,
        desc: "عشاق الشوكولاتة! عجينة كاكاو غنية محشية بقطع الشوكولاتة البلجيكية",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-red-velvet",
        nameAr: "كوكيز ريد فيلفيت",
        nameEn: "Red Velvet Cookie",
        category: "cookies",
        price: 65,
        desc: "مخبوزة بلون الريد فيلفيت الجذاب ومحشوة بقطع الشوكولاتة البيضاء اللذيذة",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-pistachio",
        nameAr: "كوكيز بستشيو (فستق)",
        nameEn: "Pistachio Cookie",
        category: "cookies",
        price: 95,
        desc: "كوكيز فاخرة بنكهة وحشوة زبدة الفستق الطبيعية وحبات الفستق الحلبي",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-monster",
        nameAr: "كوكيز مونستر",
        nameEn: "Monster Cookie",
        category: "cookies",
        price: 70,
        desc: "كوكيز ملونة ومبهجة محشوة بقطع شوكولاتة كاندي M&Ms الذائبة",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-kinder",
        nameAr: "كوكيز كيندر",
        nameEn: "Kinder Cookie",
        category: "cookies",
        price: 80,
        desc: "كوكيز بقطع شوكولاتة كيندر اللذيذة وحشوة الحليب الغنية",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-lotus",
        nameAr: "كوكيز لوتس",
        nameEn: "Lotus Cookie",
        category: "cookies",
        price: 80,
        desc: "كوكيز بنكهة بسكويت اللوتس ومحشوة بزبدة اللوتس اللذيذة",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-tiramisu",
        nameAr: "كوكيز تيراميسو",
        nameEn: "Tiramisu Cookie",
        category: "cookies",
        price: 85,
        desc: "كوكيز مميزة بنكهة القهوة الفاخرة مع حشوة الكريمة الغنية",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-pistachio-kunafa",
        nameAr: "كوكيز فستق بالكنافة تريند",
        nameEn: "Pistachio Kunafa Cookie",
        category: "cookies",
        price: 110,
        desc: "التريند الجديد! كوكيز محشية فستق غني مع الكنافة المقرمشة واللذيذة",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        badge: "تريند 💥",
        customizable: false
    },
    {
        id: "cookie-icecream",
        nameAr: "كوكي آيس كريم دبل",
        nameEn: "Ice Cream Cookie",
        category: "cookies",
        price: 135,
        desc: "قطعتين كوكيز وبينهما طبقة غنية من آيس كريم الفانيليا الفاخرة",
        image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },

    // --- Category: Cheesecake Cookies (تشيز كيك كوكي) ---
    {
        id: "cc-cookie-nutella",
        nameAr: "تشيز كيك كوكي نوتيلا",
        nameEn: "Nutella Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 95,
        desc: "مزيج رائع من طعم التشيز كيك الغني مع الكوكيز ومغطاة بصوص النوتيلا",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-lotus",
        nameAr: "تشيز كيك كوكي لوتس",
        nameEn: "Lotus Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 100,
        desc: "مزيج رائع من التشيز كيك وبسكويت لوتس المقرمش مع زبدة اللوتس الفاخرة",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-kinder",
        nameAr: "تشيز كيك كوكي كيندر",
        nameEn: "Kinder Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 105,
        desc: "تشيز كيك كوكي غنية بشوكولاتة كيندر الذائبة وحشوتها اللذيذة",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-blueberry",
        nameAr: "تشيز كيك كوكي بلوبيري",
        nameEn: "Blueberry Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 110,
        desc: "تشيز كيك كوكي كلاسيكية مغطاة بصوص البلو بيري (التوت الأزرق) الفاخر",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-pistachio",
        nameAr: "تشيز كيك كوكي فستق",
        nameEn: "Pistachio Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 130,
        desc: "تشيز كيك كوكي غنية بصوص الفستق والفسدق الحلبي المجروش",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-caramel",
        nameAr: "تشيز كيك كوكي كراميل",
        nameEn: "Caramel Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 95,
        desc: "تشيز كيك كوكي لذيذة مغطاة بصوص الكراميل الذهبي السلس",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },

    // --- Category: Cinnamon Rolls (سينامون رولز) ---
    {
        id: "roll-caramel",
        nameAr: "سينامون رولز كراميل",
        nameEn: "Caramel Cinnamon Roll",
        category: "cinnamon",
        price: 85,
        desc: "رول سينامون طازج ودافئ مغطى بصوص كراميل غني ومكسرات لذيذة",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-nutella",
        nameAr: "سينامون رولز نوتيلا",
        nameEn: "Nutella Cinnamon Roll",
        category: "cinnamon",
        price: 85,
        desc: "رول القرفة الكلاسيكي المميز مغطى بالكامل بشوكولاتة نوتيلا الذائبة",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-lotus",
        nameAr: "سينامون رولز لوتس",
        nameEn: "Lotus Cinnamon Roll",
        category: "cinnamon",
        price: 85,
        desc: "رول قرفة رائع مغطى بزبدة لوتس وبسكويت لوتس المطحون",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-kinder",
        nameAr: "سينامون رولز كيندر",
        nameEn: "Kinder Cinnamon Roll",
        category: "cinnamon",
        price: 90,
        desc: "رول سينامون مميز مغطى بالكامل بصوص شوكولاتة كيندر الفاخرة",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-cookies-cream",
        nameAr: "سينامون رولز كوكيز أند كريم",
        nameEn: "Cookies & Cream Cinnamon Roll",
        category: "cinnamon",
        price: 90,
        desc: "رول القرفة بالكريمة البيضاء وبسكويت أوريو المطحون اللذيذ",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-raffaello",
        nameAr: "سينامون رولز رفايللو",
        nameEn: "Raffaello Cinnamon Roll",
        category: "cinnamon",
        price: 90,
        desc: "رول سينامون بالكريمة البيضاء الفاخرة، جوز الهند، وحبيبات اللوز المقرمش",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-blueberry",
        nameAr: "سينامون رولز بلوبيري",
        nameEn: "Blueberry Cinnamon Roll",
        category: "cinnamon",
        price: 105,
        desc: "رول قرفة بالكريمة وصوص التوت الأزرق (البلو بيري) المنعش",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-pistachio",
        nameAr: "سينامون رولز فستق",
        nameEn: "Pistachio Cinnamon Roll",
        category: "cinnamon",
        price: 110,
        desc: "رول سينامون طازج مغطى بزبدة الفستق الطبيعية وحبيبات الفستق",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    // --- Special Boxes Cinnamon Rolls ---
    {
        id: "box-banana-pudding",
        nameAr: "علبة بنانا بودينج (٤ قطع)",
        nameEn: "Special Box Banana Pudding (4 Pcs)",
        category: "cinnamon",
        price: 360,
        desc: "علب خاصة بـ Emy Bakes السعر لأربع قطع رولز مع حشوة البنانا بودينج المذهلة",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-apple-pie",
        nameAr: "علبة ابل باي كراميل مكسرات (٤ قطع)",
        nameEn: "Special Box Apple Pie (4 Pcs)",
        category: "cinnamon",
        price: 440,
        desc: "علب خاصة السعر لأربع قطع رولز غنية بتفاح مكرمل وقرفة ومكسرات مقرمشة",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-red-velvet-bb",
        nameAr: "علبة ريد فلفيت بلو بيري (٤ قطع)",
        nameEn: "Special Box Red Velvet BB (4 Pcs)",
        category: "cinnamon",
        price: 380,
        desc: "علب خاصة السعر لأربع قطع رولز بنكهة الريد فيلفيت والتوت البري الكرانشي",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-tiramisu",
        nameAr: "علبة تيراميسو سينامون (٤ قطع)",
        nameEn: "Special Box Tiramisu (4 Pcs)",
        category: "cinnamon",
        price: 355,
        desc: "علب خاصة السعر لأربع قطع رولز بنكهة التيراميسو والقهوة الغنية مع الكريمة",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-double-choco",
        nameAr: "علبة دبل تشوكلت سينامون (٤ قطع)",
        nameEn: "Special Box Double Choco (4 Pcs)",
        category: "cinnamon",
        price: 345,
        desc: "علب خاصة السعر لأربع قطع رولز غرقانة بصوص الشوكولاتة المزدوج البلجيكي",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    // --- Cinnamon rolls medium and mini (customizable) ---
    {
        id: "roll-mid-3pcs",
        nameAr: "سينامون رولز وسط (٣ قطع)",
        nameEn: "Medium Cinnamon Rolls (3 Pcs)",
        category: "cinnamon",
        price: 195,
        desc: "٣ قطع رولز حجم وسط مع توبينج من اختيارك (كراميل، نوتيلا، لوتس، كوكيز أند كريم، كيندر، رفايللو)",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "كوكيز اند كريم", "كيندر", "رفايللو"]
    },
    {
        id: "roll-mid-4pcs",
        nameAr: "سينامون رولز وسط (٤ قطع)",
        nameEn: "Medium Cinnamon Rolls (4 Pcs)",
        category: "cinnamon",
        price: 260,
        desc: "٤ قطع رولز حجم وسط مع توبينج من اختيارك (كراميل، نوتيلا، لوتس، كوكيز أند كريم، كيندر، رفايللو)",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "كوكيز اند كريم", "كيندر", "رفايللو"]
    },
    {
        id: "roll-mid-6pcs",
        nameAr: "سينامون رولز وسط (٦ قطع)",
        nameEn: "Medium Cinnamon Rolls (6 Pcs)",
        category: "cinnamon",
        price: 350,
        desc: "٦ قطع رولز حجم وسط مع توبينج من اختيارك (كراميل، نوتيلا، لوتس، كوكيز أند كريم، كيندر، رفايللو)",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "كوكيز اند كريم", "كيندر", "رفايللو"]
    },
    {
        id: "roll-mini-12pcs",
        nameAr: "بوكس ميني سينامون (١٢ قطعة)",
        nameEn: "Mini Cinnamon Box (12 Pcs)",
        category: "cinnamon",
        price: 380,
        desc: "بوكس يحتوي على ١٢ قطعة ميني سينامون رولز طازجة ومنوعة ولذيذة جداً",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-mini-20pcs",
        nameAr: "بوكس ميني سينامون (٢٠ قطعة)",
        nameEn: "Mini Cinnamon Box (20 Pcs)",
        category: "cinnamon",
        price: 590,
        desc: "بوكس الحفلات والجمعات! ٢٠ قطعة ميني سينامون رولز بنكهات ميكس غنية",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },

    // --- Category: Cheesecake (تشيز كيك) ---
    {
        id: "cc-caramel",
        nameAr: "أمريكان تشيز كيك كراميل",
        nameEn: "Caramel Cheesecake",
        category: "cheesecake",
        price: 105,
        desc: "تشيز كيك مخبوزة على الطريقة الأمريكية مغطاة بصوص كراميل لذيذ",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-nutella",
        nameAr: "أمريكان تشيز كيك نوتيلا",
        nameEn: "Nutella Cheesecake",
        category: "cheesecake",
        price: 105,
        desc: "تشيز كيك غنية وناعمة مغطاة بطبقة وافرة من شوكولاتة نوتيلا اللذيذة",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-mango",
        nameAr: "أمريكان تشيز كيك مانجو",
        nameEn: "Mango Cheesecake",
        category: "cheesecake",
        price: 110,
        desc: "تشيز كيك صيفية ومنعشة مغطاة بقطع وبوريه المانجو الطبيعي",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-strawberry",
        nameAr: "أمريكان تشيز كيك فراولة",
        nameEn: "Strawberry Cheesecake",
        category: "cheesecake",
        price: 110,
        desc: "الطعم الكلاسيكي المفضل! تشيز كيك مغطاة بقطع وصوص الفراولة الطازجة",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-lotus",
        nameAr: "أمريكان تشيز كيك لوتس",
        nameEn: "Lotus Cheesecake",
        category: "cheesecake",
        price: 110,
        desc: "تشيز كيك مميزة بقاعدة بسكويت لوتس ومغطاة بزبدة اللوتس الرائعة",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-kinder",
        nameAr: "أمريكان تشيز كيك كيندر",
        nameEn: "Kinder Cheesecake",
        category: "cheesecake",
        price: 115,
        desc: "تشيز كيك فاخرة مغطاة بصوص شوكولاتة كيندر الغنية",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-blueberry",
        nameAr: "أمريكان تشيز كيك بلوبيري",
        nameEn: "Blueberry Cheesecake",
        category: "cheesecake",
        price: 120,
        desc: "تشيز كيك أمريكية مخبوزة ومزينة بصوص التوت الأزرق الفاخر",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-pistachio",
        nameAr: "أمريكان تشيز كيك فستق",
        nameEn: "Pistachio Cheesecake",
        category: "cheesecake",
        price: 125,
        desc: "تشيز كيك غنية وزبدية مغطاة بصوص الفستق كرانشي الفاخر",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    // --- Cheesecake Tart ---
    {
        id: "cc-tart",
        nameAr: "تارت تشيز كيك كبير (١٠ أفراد)",
        nameEn: "Cheesecake Tart (10 Persons)",
        category: "cheesecake",
        price: 695,
        desc: "تارت تشيز كيك يكفي لـ ١٠ أفراد، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، كيندر، لوتس، فراولة، مانجو)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "كيندر", "لوتس", "فراولة", "مانجو"]
    },
    // --- Cheesecake boxes (customizable) ---
    {
        id: "cc-box-3pcs",
        nameAr: "علبة تشيز كيك (٣ قطع)",
        nameEn: "Cheesecake Box (3 Pcs)",
        category: "cheesecake",
        price: 295,
        desc: "بوكس ٣ قطع تشيز كيك، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، لوتس، مانجو، فراولة، كيندر)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "مانجو", "فراولة", "كيندر"]
    },
    {
        id: "cc-box-4pcs",
        nameAr: "علبة تشيز كيك (٤ قطع)",
        nameEn: "Cheesecake Box (4 Pcs)",
        category: "cheesecake",
        price: 385,
        desc: "بوكس ٤ قطع تشيز كيك، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، لوتس، مانجو، فراولة، كيندر)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "مانجو", "فراولة", "كيندر"]
    },
    {
        id: "cc-box-6pcs",
        nameAr: "علبة تشيز كيك (٦ قطع)",
        nameEn: "Cheesecake Box (6 Pcs)",
        category: "cheesecake",
        price: 480,
        desc: "بوكس ٦ قطع تشيز كيك، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، لوتس، مانجو، فراولة، كيندر)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "مانجو", "فراولة", "كيندر"]
    },

    // --- Category: Donuts (دوناتس) ---
    {
        id: "donut-glazed",
        nameAr: "دوناتس سكر كلاسيك",
        nameEn: "Classic Glazed Donut",
        category: "donuts",
        price: 50,
        desc: "دوناتس كلاسيكية هشة وخفيفة مغطاة بطبقة رقيقة وذكية من جليز السكر الذائب",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-chocolate",
        nameAr: "دوناتس شوكولاتة",
        nameEn: "Chocolate Glaze Donut",
        category: "donuts",
        price: 55,
        desc: "دوناتس هشة مغطاة بشوكولاتة الحليب الفاخرة ورشة من السبرنكلز الملونة",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-lotus",
        nameAr: "دوناتس لوتس دريم",
        nameEn: "Lotus Dream Donut",
        category: "donuts",
        price: 65,
        desc: "دوناتس غنية بحشوة كريمة اللوتس ومغطاة بزبدة لوتس وبسكويت مقرمش",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-pistachio",
        nameAr: "دوناتس بستشيو بومب",
        nameEn: "Pistachio Bomb Donut",
        category: "donuts",
        price: 75,
        desc: "دوناتس مخبوزة هشة محشوة بكريمة الفستق الطبيعي ومزينة بقطع الفستق",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-kinder",
        nameAr: "دوناتس كيندر كريم",
        nameEn: "Kinder Cream Donut",
        category: "donuts",
        price: 70,
        desc: "دوناتس لذيذة محشوة بكريمة الحليب والشوكولاتة ومزينة بقطع شوكولاتة كيندر",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    }
];

const IMAGE_MAPPING = {
    // Cookie Scoops (Skillet cookies / Deep dish cookies)
    "scoop-nutella": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    "scoop-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    "scoop-kinder": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=kinder",
    "scoop-mix-kinder-nutella": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=mix1",
    "scoop-mix-kinder-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=mix2",
    "scoop-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80", // Green dessert scoop
    "scoop-red-velvet": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80&sig=redscoop",

    // Cookies
    "cookie-original": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
    "cookie-double-choco": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=doublechoco",
    "cookie-red-velvet": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80&sig=redcookie",
    "cookie-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80&sig=pistcookie",
    "cookie-monster": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
    "cookie-kinder": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80&sig=kindercookie",
    "cookie-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=lotuscookie",
    "cookie-tiramisu": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=tiramisucookie",
    "cookie-pistachio-kunafa": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=kunafacookie",
    "cookie-icecream": "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80",

    // Cheesecake Cookies
    "cc-cookie-nutella": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=ccnutella",
    "cc-cookie-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=cclotus",
    "cc-cookie-kinder": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=cckinder",
    "cc-cookie-blueberry": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=ccblueberry",
    "cc-cookie-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80&sig=ccpistachio",
    "cc-cookie-caramel": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=cccaramel",
 
    // Cinnamon Rolls
    "roll-caramel": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
    "roll-nutella": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=nutellaroll",
    "roll-lotus": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=lotusroll",
    "roll-kinder": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=kinderroll",
    "roll-cookies-cream": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=cookiescreamroll",
    "roll-raffaello": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=raffaelloroll",
    "roll-blueberry": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=blueberryroll",
    "roll-pistachio": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=pistachioroll",
    "box-banana-pudding": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=bananabox",
    "box-apple-pie": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=applebox",
    "box-red-velvet-bb": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=redbox",
    "box-tiramisu": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=tiramisubox",
    "box-double-choco": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=chocobox",
    "roll-mid-3pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mid3",
    "roll-mid-4pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mid4",
    "roll-mid-6pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mid6",
    "roll-mini-12pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mini12",
    "roll-mini-20pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mini20",

    // Cheesecakes
    "cc-caramel": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=cccaramelslice",
    "cc-nutella": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
    "cc-mango": "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=400&q=80",
    "cc-strawberry": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
    "cc-lotus": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=lotus",
    "cc-kinder": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80&sig=kinder",
    "cc-blueberry": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=blueberry",
    "cc-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80&sig=pistcc",
    "cc-tart": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80",
    "cc-box-3pcs": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80&sig=box3",
    "cc-box-4pcs": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80&sig=box4",
    "cc-box-6pcs": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80&sig=box6",

    // Donuts
    "donut-glazed": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    "donut-chocolate": "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=400&q=80&sig=chocodonut",
    "donut-lotus": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80&sig=lotus",
    "donut-pistachio": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80&sig=pistachio",
    "donut-kinder": "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=400&q=80&sig=kinder"
};

// Apply unique image mapping to MENU_DATA catalog
MENU_DATA.forEach(item => {
    if (IMAGE_MAPPING[item.id]) {
        item.image = IMAGE_MAPPING[item.id];
    }
});

// 2. Categories Metadata
const CATEGORIES = [
    { id: "all", nameAr: "الكل", emoji: "✨" },
    { id: "cookiescoop", nameAr: "كوكي سكوب", emoji: "🥣" },
    { id: "cookies", nameAr: "كوكيز", emoji: "🍪" },
    { id: "cheesecake_cookie", nameAr: "تشيز كيك كوكي", emoji: "🍰🍪" },
    { id: "cinnamon", nameAr: "سينامون رولز", emoji: "🌀" },
    { id: "cheesecake", nameAr: "تشيز كيك", emoji: "🍰" },
    { id: "donuts", nameAr: "دوناتس", emoji: "🍩" }
];

// 3. Application State
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let itemBeingCustomized = null;
let isScrollingFromTabClick = false;
let tabClickScrollTimeout = null;

// 4. WhatsApp Business Information
const WHATSAPP_PHONE = "201061219807"; // Country code + phone (Egypt: +20)

// 5. DOM Elements
const mainHeader = document.getElementById("mainHeader");
const categoriesContainer = document.getElementById("categoriesContainer");
const productsGrid = document.getElementById("productsGrid");
const currentCategoryHeading = document.getElementById("currentCategoryHeading");
const searchInput = document.getElementById("searchInput");
const headerSearchInput = document.getElementById("headerSearchInput");

// Cart Elements
const cartToggleBtn = document.getElementById("cartToggleBtn");
const floatingCartBtn = document.getElementById("floatingCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartCount = document.getElementById("cartCount");
const floatingCartCount = document.getElementById("floatingCartCount");
const floatingCartPrice = document.getElementById("floatingCartPrice");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

// Toppings Modal Elements
const toppingModal = document.getElementById("toppingModal");
const toppingModalBackdrop = document.getElementById("toppingModalBackdrop");
const toppingModalCloseBtn = document.getElementById("toppingModalCloseBtn");
const customizerImg = document.getElementById("customizerImg");
const customizerName = document.getElementById("customizerName");
const customizerPrice = document.getElementById("customizerPrice");
const toppingsContainer = document.getElementById("toppingsContainer");
const confirmToppingBtn = document.getElementById("confirmToppingBtn");

// Checkout Modal Elements
const checkoutModal = document.getElementById("checkoutModal");
const checkoutModalBackdrop = document.getElementById("checkoutModalBackdrop");
const checkoutModalCloseBtn = document.getElementById("checkoutModalCloseBtn");
const checkoutForm = document.getElementById("checkoutForm");
const orderTypeRadios = document.getElementsByName("orderType");
const deliveryAddressGroup = document.getElementById("deliveryAddressGroup");
const clientAddress = document.getElementById("clientAddress");
const clientPhone = document.getElementById("clientPhone");

const priceFormatter = new Intl.NumberFormat("ar-EG");
const searchInputs = [searchInput, headerSearchInput].filter(Boolean);

function formatPrice(value) {
    return priceFormatter.format(Number(value) || 0);
}

function escapeHTML(value = "") {
    const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };

    return String(value).replace(/[&<>"']/g, char => entities[char]);
}

function normalizePhone(value = "") {
    return String(value).replace(/[^\d+]/g, "");
}

function isValidEgyptianMobile(value = "") {
    return /^(?:\+?20|0)?1[0125][0-9]{8}$/.test(normalizePhone(value));
}

function getCurrentCategoryTitle() {
    const categoryObj = CATEGORIES.find(category => category.id === currentCategory);
    if (!categoryObj || categoryObj.id === "all") return "كل الأصناف";
    return categoryObj.nameAr;
}

function updateCategoryHeading(count) {
    if (!currentCategoryHeading) return;
    const trimmedQuery = searchQuery.trim();
    const baseTitle = trimmedQuery ? `نتائج البحث عن "${trimmedQuery}"` : getCurrentCategoryTitle();
    currentCategoryHeading.textContent = `${baseTitle} (${formatPrice(count)})`;
}

function updatePageLock() {
    const hasActiveOverlay = cartDrawer.classList.contains("active") ||
        toppingModal.classList.contains("active") ||
        checkoutModal.classList.contains("active");

    document.body.classList.toggle("modal-open", hasActiveOverlay);
}

function triggerHapticFeedback(pattern = 30) {
    if (window.navigator && window.navigator.vibrate) {
        try {
            window.navigator.vibrate(pattern);
        } catch (e) {
            // Silently catch if blocked
        }
    }
}

function animateFlyingItem(startEl, imageUrl) {
    if (!startEl) return;
    
    const isMobile = window.innerWidth <= 768;
    const targetEl = isMobile 
        ? document.getElementById("floatingCartBtn")
        : document.getElementById("cartToggleBtn");
        
    if (!targetEl) return;
    
    const startRect = startEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    
    const flyer = document.createElement("div");
    flyer.className = "flying-preview-item";
    flyer.style.backgroundImage = `url('${imageUrl}')`;
    flyer.style.left = `${startRect.left + startRect.width / 2 - 24}px`;
    flyer.style.top = `${startRect.top + startRect.height / 2 - 24}px`;
    
    document.body.appendChild(flyer);
    
    requestAnimationFrame(() => {
        const diffX = (targetRect.left + targetRect.width / 2) - (startRect.left + startRect.width / 2);
        const diffY = (targetRect.top + targetRect.height / 2) - (startRect.top + startRect.height / 2);
        
        flyer.style.transform = `translate(${diffX}px, ${diffY}px) scale(0.1)`;
        flyer.style.opacity = "0.2";
        flyer.style.width = "20px";
        flyer.style.height = "20px";
    });
    
    setTimeout(() => {
        flyer.remove();
        
        targetEl.classList.remove("bump");
        void targetEl.offsetWidth; // trigger reflow
        targetEl.classList.add("bump");
        
        setTimeout(() => {
            targetEl.classList.remove("bump");
        }, 500);
    }, 800);
}

function openModal(modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    updatePageLock();
    triggerHapticFeedback(30);
}

function closeModal(modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    updatePageLock();
    triggerHapticFeedback(15);
}

function createImageFallback() {
    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.innerHTML = `
        <svg class="product-fallback-svg" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" stroke-width="9"/>
            <circle cx="50" cy="50" r="11" fill="currentColor"/>
            <path d="M24 46c5-16 17-24 31-23 12 1 21 7 25 19-8-2-12 4-18 5-7 1-12-4-18-1-7 3-13 5-20 0z" fill="currentColor" opacity=".28"/>
        </svg>
    `;
    return fallback;
}

function attachImageFallbacks(scope) {
    scope.querySelectorAll("img").forEach(img => {
        img.addEventListener("error", () => {
            img.replaceWith(createImageFallback());
        }, { once: true });
    });
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Generate sugar sprinkles in the background
    generateSugarSprinkles();

    // Render category filters
    renderCategories();

    // Render products catalog
    renderProducts();

    // Attach Event Listeners
    setupEventListeners();

    // Load Cart from LocalStorage if exists
    loadCartFromStorage();

    // Replace all Unicode Emojis with Apple Emoji images
    replaceEmojisInDOM(document.body);
});

// --- Background Sprinkles Effect ---
function generateSugarSprinkles() {
    const bg = document.getElementById("sprinklesBg");
    const colors = ["#FF2E93", "#00B1A5", "#FFD700", "#FFC0CB", "#FFFFFF"];
    const count = 30;

    for (let i = 0; i < count; i++) {
        const sprinkle = document.createElement("div");
        sprinkle.className = "sprinkle";
        
        // Random style attributes
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        sprinkle.style.width = `${size}px`;
        sprinkle.style.height = `${size * (Math.random() > 0.5 ? 2.5 : 1)}px`; // some circular, some oval/sticks
        sprinkle.style.background = color;
        sprinkle.style.top = `${Math.random() * 100}vh`;
        sprinkle.style.left = `${Math.random() * 100}vw`;
        sprinkle.style.borderRadius = "20px";
        sprinkle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Random float duration
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * -20;
        sprinkle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        
        bg.appendChild(sprinkle);
    }
}

// --- Render Category Tabs ---
function renderCategories() {
    categoriesContainer.innerHTML = CATEGORIES.map(category => `
        <button class="category-tab ${category.id === currentCategory ? 'active' : ''}"
                type="button"
                aria-pressed="${category.id === currentCategory}"
                data-category-id="${category.id}">
            <span class="category-emoji">${category.emoji}</span>
            <span>${escapeHTML(category.nameAr)}</span>
        </button>
    `).join('');

    // Replace unicode emojis in categories
    replaceEmojisInDOM(categoriesContainer);

    // Attach click events to tabs
    document.querySelectorAll(".category-tab").forEach(tab => {
        tab.addEventListener("click", (e) => {
            const button = e.currentTarget;
            const catId = button.getAttribute("data-category-id");
            
            centerActiveCategoryTab(button);

            // Update active styling
            document.querySelectorAll(".category-tab").forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-pressed", "false");
            });
            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            if (tabClickScrollTimeout) clearTimeout(tabClickScrollTimeout);
            isScrollingFromTabClick = true;
            
            let targetTop = 0;
            if (catId !== "all") {
                const sectionEl = document.getElementById(`section-${catId}`);
                if (sectionEl) {
                    targetTop = sectionEl.offsetTop - 135;
                }
            } else {
                const catalogEl = document.getElementById("productsGrid");
                if (catalogEl) {
                    targetTop = catalogEl.offsetTop - 145;
                }
            }
            
            window.scrollTo({
                top: targetTop,
                behavior: "smooth"
            });
            
            currentCategory = catId;
            updateCategoryHeadingFromScroll();

            tabClickScrollTimeout = setTimeout(() => {
                isScrollingFromTabClick = false;
            }, 850);
        });
    });
}

function centerActiveCategoryTab(tabEl) {
    if (!tabEl || !categoriesContainer) return;
    
    const containerWidth = categoriesContainer.offsetWidth;
    const tabLeft = tabEl.offsetLeft;
    const tabWidth = tabEl.offsetWidth;
    
    const scrollTarget = tabLeft - (containerWidth / 2) + (tabWidth / 2);
    
    categoriesContainer.scrollTo({
        left: scrollTarget,
        behavior: "smooth"
    });
}

function updateCategoryHeadingFromScroll() {
    if (!currentCategoryHeading) return;
    const baseTitle = searchQuery.trim() ? `نتائج البحث عن "${searchQuery.trim()}"` : getCurrentCategoryTitle();
    
    let count = 0;
    if (currentCategory === "all") {
        count = MENU_DATA.length;
    } else {
        count = MENU_DATA.filter(item => item.category === currentCategory).length;
    }
    
    currentCategoryHeading.textContent = `${baseTitle} (${formatPrice(count)})`;
}

// Scrollspy behavior with requestAnimationFrame throttling to prevent layout thrashing
let isScrollChecking = false;

window.addEventListener("scroll", () => {
    if (searchQuery.trim() !== "" || isScrollingFromTabClick || isScrollChecking) return;
    
    isScrollChecking = true;
    requestAnimationFrame(() => {
        const headers = document.querySelectorAll(".category-section-header");
        let activeSectionId = "all";
        
        const scrollPos = window.scrollY + 180; // Header offset
        
        headers.forEach(header => {
            if (scrollPos >= header.offsetTop) {
                activeSectionId = header.getAttribute("data-category-id");
            }
        });
        
        if (currentCategory !== activeSectionId) {
            currentCategory = activeSectionId;
            updateCategoryHeadingFromScroll();
            
            // Update active tab styles
            const tabs = document.querySelectorAll(".category-tab");
            tabs.forEach(tab => {
                const catId = tab.getAttribute("data-category-id");
                if (catId === activeSectionId) {
                    tab.classList.add("active");
                    tab.setAttribute("aria-pressed", "true");
                    centerActiveCategoryTab(tab);
                } else {
                    tab.classList.remove("active");
                    tab.setAttribute("aria-pressed", "false");
                }
            });
        }
        isScrollChecking = false;
    });
});

// --- Render Products Catalog Grid ---
// --- Render Products Catalog Grid ---
function renderProducts() {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // If searching, we show a flat list of matching products
    if (normalizedQuery !== "") {
        let filteredList = MENU_DATA.filter(item => 
            item.nameAr.toLowerCase().includes(normalizedQuery) ||
            item.nameEn.toLowerCase().includes(normalizedQuery) ||
            item.desc.toLowerCase().includes(normalizedQuery)
        );

        updateCategoryHeading(filteredList.length);

        if (filteredList.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results-state">
                    <div class="no-results-icon">🔍</div>
                    <h3 class="no-results-title">لم نجد أي صنف يطابق بحثك!</h3>
                    <p class="no-results-copy">جرّب كلمة أبسط، أو انتقل لتصنيف آخر من الشريط بالأعلى.</p>
                    <button type="button" class="no-results-clear-btn" id="clearSearchBtn">مسح البحث</button>
                </div>
            `;
            replaceEmojisInDOM(productsGrid);
            const clearSearchBtn = document.getElementById("clearSearchBtn");
            if (clearSearchBtn) {
                clearSearchBtn.addEventListener("click", () => {
                    searchQuery = "";
                    searchInputs.forEach(input => input.value = "");
                    renderProducts();
                });
            }
            return;
        }

        productsGrid.innerHTML = filteredList.map((item, index) => renderProductCard(item, index)).join('');
    } else {
        // Normal grouped view: group items by categories
        let htmlContent = "";
        let totalCount = 0;
        let globalIndex = 0;

        CATEGORIES.forEach(cat => {
            if (cat.id === "all") return;

            const catProducts = MENU_DATA.filter(item => item.category === cat.id);
            if (catProducts.length === 0) return;

            totalCount += catProducts.length;

            // Add Category Section Header inside the grid
            htmlContent += `
                <div class="category-section-header" id="section-${cat.id}" data-category-id="${cat.id}">
                    <span class="category-header-emoji">${cat.emoji}</span>
                    <span>${escapeHTML(cat.nameAr)}</span>
                </div>
            `;

            // Add product cards of this category with sequential global delay index
            htmlContent += catProducts.map(item => {
                const cardHtml = renderProductCard(item, globalIndex);
                globalIndex++;
                return cardHtml;
            }).join('');
        });

        updateCategoryHeading(totalCount);
        productsGrid.innerHTML = htmlContent;
    }

    // Replace unicode emojis in products grid
    replaceEmojisInDOM(productsGrid);
    attachImageFallbacks(productsGrid);

    // Attach actions
    attachCardActionListeners();
}

function renderProductCard(item, index = 0) {
    const cartItem = cart.find(ci => ci.id === item.id && !ci.hasCustomOptions);
    const qtyInCart = cartItem ? cartItem.qty : 0;
    const safeName = escapeHTML(item.nameAr);
    const safeDesc = escapeHTML(item.desc);
    const safeImage = escapeHTML(item.image);
    const safeBadge = item.badge ? escapeHTML(item.badge) : "";
    const delay = index * 40; // 40ms stagger offset

    return `
        <div class="product-card" data-product-id="${item.id}" style="animation-delay: ${delay}ms;">
            <div class="product-image-container">
                <img src="${safeImage}" alt="${safeName}" class="product-img" loading="lazy">
                ${safeBadge ? `<span class="product-badge">${safeBadge}</span>` : ''}
                <div class="product-price">${formatPrice(item.price)}<span>ج.م</span></div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${safeName}</h3>
                <p class="product-desc">${safeDesc}</p>
                
                <div class="product-actions">
                    ${qtyInCart > 0 ? `
                        <div class="card-quantity-controls">
                            <button class="card-qty-btn decrease-qty-btn" type="button" data-product-id="${item.id}" aria-label="تقليل ${safeName}">-</button>
                            <span class="card-qty-value">${formatPrice(qtyInCart)}</span>
                            <button class="card-qty-btn increase-qty-btn" type="button" data-product-id="${item.id}" aria-label="زيادة ${safeName}">+</button>
                        </div>
                    ` : `
                        <button class="add-to-cart-btn direct-add-btn" type="button" data-product-id="${item.id}" aria-label="إضافة ${safeName} للسلة">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                            <span>إضافة للسلة</span>
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

// --- Attach Actions to Catalog Cards ---
function attachCardActionListeners() {
    // Add to Cart (Direct or with Customizer)
    document.querySelectorAll(".direct-add-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-product-id");
            const product = MENU_DATA.find(p => p.id === id);
            
            if (product.customizable) {
                openCustomizerModal(product);
            } else {
                animateFlyingItem(e.currentTarget, product.image);
                addToCart(product);
            }
        });
    });

    // Increase Quantity
    document.querySelectorAll(".increase-qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-product-id");
            const cartItem = cart.find(ci => ci.id === id && !ci.hasCustomOptions);
            if (cartItem) {
                updateCartItemQuantity(cartItem.uniqueId, cartItem.qty + 1);
            }
        });
    });

    // Decrease Quantity
    document.querySelectorAll(".decrease-qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-product-id");
            const cartItem = cart.find(ci => ci.id === id && !ci.hasCustomOptions);
            if (cartItem) {
                updateCartItemQuantity(cartItem.uniqueId, cartItem.qty - 1);
            }
        });
    });
}

// --- Open Customization Modal ---
function openCustomizerModal(product) {
    itemBeingCustomized = product;
    
    // Set UI
    customizerImg.src = product.image;
    customizerImg.alt = product.nameAr;
    customizerName.textContent = product.nameAr;
    customizerPrice.innerHTML = `${formatPrice(product.price)}<span>ج.م</span>`;
    
    // Render Toppings
    toppingsContainer.innerHTML = product.toppings.map((topping, index) => `
        <div class="topping-option">
            <input type="checkbox" id="topping-${index}" class="topping-checkbox" value="${escapeHTML(topping)}">
            <label for="topping-${index}" class="topping-label">
                <span>${escapeHTML(topping)}</span>
                <span class="topping-indicator"></span>
            </label>
        </div>
    `).join('');
    
    // Replace emojis in topping modal
    replaceEmojisInDOM(toppingModal);
    
    openModal(toppingModal);
}

function closeCustomizerModal() {
    closeModal(toppingModal);
    itemBeingCustomized = null;
}

// --- Add to Cart Logic ---
function addToCart(product, selectedToppings = []) {
    const normalizedToppings = [...selectedToppings].sort();
    const isCustom = normalizedToppings.length > 0;
    
    // For custom items, uniqueId combines product.id and selected toppings
    const toppingString = normalizedToppings.join(", ");
    const uniqueId = isCustom ? `${product.id}-[${toppingString}]` : product.id;

    const existingItem = cart.find(item => item.uniqueId === uniqueId);

    if (existingItem) {
        existingItem.qty = Math.min(existingItem.qty + 1, 99);
    } else {
        cart.push({
            uniqueId: uniqueId,
            id: product.id,
            nameAr: product.nameAr,
            price: product.price,
            image: product.image,
            hasCustomOptions: isCustom,
            toppings: normalizedToppings,
            qty: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    renderProducts(); // Refresh buttons on catalog
    
    triggerHapticFeedback(40); // 40ms pulse
    showToast(`تمت إضافة "${product.nameAr}" بنجاح`, "success");
}

// --- Update Cart Quantity ---
function updateCartItemQuantity(uniqueId, newQty) {
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    
    if (itemIndex === -1) return;

    if (newQty <= 0) {
        // Remove item
        const removedItemName = cart[itemIndex].nameAr;
        cart.splice(itemIndex, 1);
        triggerHapticFeedback([40, 30, 40]); // Double vibration tap
        showToast(`تم حذف "${removedItemName}" من السلة`);
    } else {
        cart[itemIndex].qty = Math.min(newQty, 99);
        triggerHapticFeedback(25); // 25ms pulse
    }

    saveCartToStorage();
    updateCartUI();
    renderProducts();
}

// --- Update Cart Drawer UI ---
function updateCartUI() {
    // 1. Update Cart Badge Counters
    const totalCount = cart.reduce((total, item) => total + item.qty, 0);
    cartCount.textContent = formatPrice(totalCount);
    floatingCartCount.textContent = formatPrice(totalCount);
    
    // 2. Render Cart Items List
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart-state">
                <span class="empty-cart-icon pulsing-cupcake">🧁</span>
                <p class="empty-cart-text">سلة المشتريات فارغة تماماً!</p>
                <p class="empty-cart-subtext">تصفح المنيو وأضف أصنافك المفضلة لطلبها بسرعة.</p>
                <button type="button" class="empty-cart-action-btn" id="startShoppingBtn">ابدأ التسوق ✨</button>
            </div>
        `;
        checkoutBtn.disabled = true;

        const startShoppingBtn = document.getElementById("startShoppingBtn");
        if (startShoppingBtn) {
            startShoppingBtn.addEventListener("click", () => {
                const closeBtn = document.getElementById("cartCloseBtn");
                if (closeBtn) closeBtn.click();
                const catalogEl = document.getElementById("productsGrid");
                if (catalogEl) {
                    window.scrollTo({
                        top: catalogEl.offsetTop - 145,
                        behavior: "smooth"
                    });
                }
            });
        }
    } else {
        checkoutBtn.disabled = false;
        cartItemsList.innerHTML = cart.map(item => {
            const safeUniqueId = escapeHTML(item.uniqueId);
            const safeName = escapeHTML(item.nameAr);
            const safeImage = escapeHTML(item.image);
            const safeToppings = item.toppings.map(topping => escapeHTML(topping)).join('، ');

            return `
            <div class="cart-item">
                <button class="cart-item-remove-btn" type="button" data-unique-id="${safeUniqueId}" aria-label="حذف ${safeName}">
                    <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </button>
                <div class="cart-item-img-container">
                    <img src="${safeImage}" alt="${safeName}" class="cart-item-img" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <div>
                        <h4 class="cart-item-title">${safeName}</h4>
                        ${item.hasCustomOptions ? `<div class="cart-item-options">الإضافات: ${safeToppings}</div>` : ''}
                    </div>
                    <div class="cart-item-bottom">
                        <div class="cart-item-price">${formatPrice(item.price * item.qty)}<span>ج.م</span></div>
                        
                        <div class="cart-item-qty-controls">
                            <button class="cart-qty-btn-sm dec-cart-item" type="button" data-unique-id="${safeUniqueId}" aria-label="تقليل ${safeName}">-</button>
                            <span class="cart-qty-val-sm">${formatPrice(item.qty)}</span>
                            <button class="cart-qty-btn-sm inc-cart-item" type="button" data-unique-id="${safeUniqueId}" aria-label="زيادة ${safeName}">+</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Attach cart drawer items listeners
        attachCartItemsListeners();
    }

    // 3. Update Totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
    cartSubtotal.innerHTML = `${formatPrice(subtotal)}<span> ج.م</span>`;
    cartTotal.innerHTML = `${formatPrice(subtotal)}<span> ج.م</span>`;
    
    // Update floating cart price if element exists
    if (floatingCartPrice) {
        floatingCartPrice.textContent = formatPrice(subtotal);
    }
    
    // Toggle active class on mobile floating cart bar based on count
    if (floatingCartBtn) {
        floatingCartBtn.classList.toggle("active", totalCount > 0);
        floatingCartBtn.setAttribute("aria-expanded", cartDrawer.classList.contains("active") ? "true" : "false");
    }

    // Replace unicode emojis in cart list
    replaceEmojisInDOM(cartItemsList);
    attachImageFallbacks(cartItemsList);
}

// --- Attach Action Listeners to Cart Drawer Items ---
function attachCartItemsListeners() {
    // Increase quantity in cart
    document.querySelectorAll(".inc-cart-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const uniqueId = e.currentTarget.getAttribute("data-unique-id");
            const item = cart.find(ci => ci.uniqueId === uniqueId);
            if (item) {
                updateCartItemQuantity(uniqueId, item.qty + 1);
            }
        });
    });

    // Decrease quantity in cart
    document.querySelectorAll(".dec-cart-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const uniqueId = e.currentTarget.getAttribute("data-unique-id");
            const item = cart.find(ci => ci.uniqueId === uniqueId);
            if (item) {
                updateCartItemQuantity(uniqueId, item.qty - 1);
            }
        });
    });

    // Remove item fully
    document.querySelectorAll(".cart-item-remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const uniqueId = e.currentTarget.getAttribute("data-unique-id");
            updateCartItemQuantity(uniqueId, 0);
        });
    });
}

// --- Setup Event Listeners ---
function setupEventListeners() {
    // Header Scroll Shadow effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
    });

    // Cart Drawer Toggle
    const setCartExpanded = (isExpanded) => {
        cartToggleBtn.setAttribute("aria-expanded", String(isExpanded));
        floatingCartBtn.setAttribute("aria-expanded", String(isExpanded));
        cartDrawer.setAttribute("aria-hidden", String(!isExpanded));
    };

    const openCart = () => {
        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
        setCartExpanded(true);
        updatePageLock();
        triggerHapticFeedback(30);
    };

    const closeCart = () => {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
        setCartExpanded(false);
        updatePageLock();
        triggerHapticFeedback(15);
    };

    cartToggleBtn.addEventListener("click", openCart);
    floatingCartBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);

    // Search bar functionality
    const handleSearch = (e) => {
        searchQuery = e.target.value;
        searchInputs.forEach(input => {
            if (input !== e.target) input.value = searchQuery;
        });
        renderProducts();
    };

    searchInputs.forEach(input => input.addEventListener("input", handleSearch));

    // Customizer Modal Actions
    toppingModalCloseBtn.addEventListener("click", closeCustomizerModal);
    toppingModalBackdrop.addEventListener("click", closeCustomizerModal);

    confirmToppingBtn.addEventListener("click", () => {
        if (!itemBeingCustomized) return;
        
        // Collect checked checkboxes
        const checkedToppings = [];
        document.querySelectorAll(".topping-checkbox:checked").forEach(checkbox => {
            checkedToppings.push(checkbox.value);
        });

        if (checkedToppings.length === 0) {
            // Ask for confirmation to add without toppings
            if (!confirm("هل ترغب في إضافة الصنف بدون أي توبينج إضافي؟")) {
                return;
            }
        }

        animateFlyingItem(confirmToppingBtn, itemBeingCustomized.image);
        addToCart(itemBeingCustomized, checkedToppings);
        closeCustomizerModal();
    });

    // Checkout Modal Actions
    checkoutBtn.addEventListener("click", () => {
        // Close cart drawer first
        closeCart();
        
        // Render Order Summary in Checkout Modal
        renderCheckoutSummary();
        
        // Show Checkout Dialog
        openModal(checkoutModal);
    });

    checkoutModalCloseBtn.addEventListener("click", () => {
        closeModal(checkoutModal);
    });

    checkoutModalBackdrop.addEventListener("click", () => {
        closeModal(checkoutModal);
    });

    // Toggle Address Input based on Delivery Type
    const syncDeliveryAddress = () => {
        const selectedType = document.querySelector('input[name="orderType"]:checked').value;
        const needsAddress = selectedType === "delivery";
        deliveryAddressGroup.hidden = !needsAddress;
        clientAddress.required = needsAddress;
        if (!needsAddress) {
            clientAddress.setCustomValidity("");
        }
    };

    orderTypeRadios.forEach(radio => {
        radio.addEventListener("change", syncDeliveryAddress);
    });
    syncDeliveryAddress();

    document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;

        if (checkoutModal.classList.contains("active")) {
            closeModal(checkoutModal);
        } else if (toppingModal.classList.contains("active")) {
            closeCustomizerModal();
        } else if (cartDrawer.classList.contains("active")) {
            closeCart();
        }
    });

    // Submit Checkout form -> Generate WhatsApp Order
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // 1. Gather Information
        const name = document.getElementById("clientName").value.trim();
        const phone = clientPhone.value.trim();
        const type = document.querySelector('input[name="orderType"]:checked').value;
        const address = type === "delivery" ? clientAddress.value.trim() : "استلام من الفرع";
        const notes = document.getElementById("orderNotes").value.trim();

        if (cart.length === 0) {
            showToast("السلة فارغة، أضف صنفاً واحداً على الأقل قبل تأكيد الطلب.", "error");
            return;
        }

        if (!isValidEgyptianMobile(phone)) {
            clientPhone.setCustomValidity("اكتب رقم موبايل مصري صحيح مثل 01061219807");
            clientPhone.reportValidity();
            showToast("رقم الموبايل غير صحيح. تأكد أنه رقم واتساب مصري.", "error");
            return;
        }
        clientPhone.setCustomValidity("");

        if (type === "delivery" && address.length < 8) {
            clientAddress.setCustomValidity("اكتب عنواناً أوضح للتوصيل.");
            clientAddress.reportValidity();
            showToast("من فضلك اكتب العنوان بالتفصيل لتسهيل التوصيل.", "error");
            return;
        }
        clientAddress.setCustomValidity("");
        
        // 2. Build WhatsApp Message
        const orderText = generateWhatsAppMessage(name, phone, type, address, notes);
        
        // 3. Format URL
        const encodedText = encodeURIComponent(orderText);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedText}`;
        
        // 4. Open WhatsApp
        triggerHapticFeedback([60, 40, 60]); // energetic confirmation haptic pulse
        const whatsappWindow = window.open(whatsappUrl, "_blank");
        if (!whatsappWindow) {
            showToast("المتصفح منع فتح واتساب. اسمح بالنوافذ المنبثقة وجرب مرة أخرى.", "error");
            return;
        }
        whatsappWindow.opener = null;

        // 5. Success Flow
        showToast("جاري توجيهك للواتساب لتأكيد طلبك... \uD83D\uDE9A", "success");
        
        // Clear Cart
        cart = [];
        saveCartToStorage();
        updateCartUI();
        renderProducts();
        
        // Hide Modal
        checkoutForm.reset();
        syncDeliveryAddress();
        closeModal(checkoutModal);
    });
}

// --- Render Order Summary in Checkout Modal ---
function renderCheckoutSummary() {
    const summaryItemsContainer = document.getElementById("checkoutSummaryItems");
    const totalValContainer = document.getElementById("checkoutTotalVal");
    
    if (!summaryItemsContainer || !totalValContainer) return;
    
    if (cart.length === 0) {
        summaryItemsContainer.innerHTML = '<div class="checkout-empty-state">سلة المشتريات فارغة</div>';
        totalValContainer.textContent = "0 ج.م";
        return;
    }
    
    summaryItemsContainer.innerHTML = cart.map(item => {
        const safeName = escapeHTML(item.nameAr);
        const safeToppings = item.toppings.map(topping => escapeHTML(topping)).join('، ');

        return `
            <div class="checkout-summary-row">
                <span>• ${formatPrice(item.qty)}x ${safeName} ${item.hasCustomOptions ? `<span class="checkout-summary-option">(إضافات: ${safeToppings})</span>` : ''}</span>
                <span class="checkout-summary-price">${formatPrice(item.price * item.qty)} ج.م</span>
            </div>
        `;
    }).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalValContainer.textContent = `${formatPrice(total)} ج.م`;
    
    replaceEmojisInDOM(summaryItemsContainer);
}

// --- WhatsApp Message Builder ---
function generateWhatsAppMessage(name, phone, type, address, notes) {
    const divider = "------------------------------------------";
    let message = `*\uD83D\uDCE3 طلب جديد من EMY BAKES \uD83C\uDF69\u2728*\n${divider}\n`;
    message += `\uD83D\uDC64 *الاسم:* ${name}\n`;
    message += `\uD83D\uDCDE *رقم الموبايل:* ${normalizePhone(phone)}\n`;
    message += `\uD83D\uDE9A *نوع الطلب:* ${type === "delivery" ? "توصيل دليفري" : "استلام من الفرع"}\n`;
    
    if (type === "delivery") {
        message += `\uD83D\uDCCD *العنوان:* ${address}\n`;
    }
    
    message += `${divider}\n*\uD83D\uDED2 الأصناف المطلوبة:*\n`;

    cart.forEach(item => {
        message += `• ${formatPrice(item.qty)}x ${item.nameAr}`;
        if (item.hasCustomOptions) {
            message += ` (إضافات: ${item.toppings.join('، ')})`;
        }
        message += ` ➔ _${formatPrice(item.price * item.qty)} ج.م_\n`;
    });

    message += `${divider}\n`;
    
    if (notes) {
        message += `\uD83D\uDCDD *ملاحظات:* ${notes}\n${divider}\n`;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    message += `\uD83D\uDCB0 *المجموع الإجمالي:* *${formatPrice(total)} ج.م*\n\n`;
    message += `شكراً لاختياركم *Emy Bakes*! يرجى إرسال هذه الرسالة لتأكيد الطلب وسيتم مراجعته وتجهيزه فوراً. \uD83D\uDC96`;

    return message;
}

// --- LocalStorage Cart helpers ---
function sanitizeCartItems(items) {
    if (!Array.isArray(items)) return [];

    const mergedItems = new Map();

    items.forEach(item => {
        const product = MENU_DATA.find(menuItem => menuItem.id === item.id);
        if (!product) return;

        const allowedToppings = Array.isArray(product.toppings) ? product.toppings : [];
        const toppings = Array.isArray(item.toppings)
            ? item.toppings.filter(topping => allowedToppings.includes(topping)).sort()
            : [];
        const hasCustomOptions = toppings.length > 0;
        const uniqueId = hasCustomOptions ? `${product.id}-[${toppings.join(", ")}]` : product.id;
        const qty = Math.max(1, Math.min(Number.parseInt(item.qty, 10) || 1, 99));

        if (mergedItems.has(uniqueId)) {
            const existingItem = mergedItems.get(uniqueId);
            existingItem.qty = Math.min(existingItem.qty + qty, 99);
        } else {
            mergedItems.set(uniqueId, {
                uniqueId,
                id: product.id,
                nameAr: product.nameAr,
                price: product.price,
                image: product.image,
                hasCustomOptions,
                toppings,
                qty
            });
        }
    });

    return Array.from(mergedItems.values());
}

function saveCartToStorage() {
    localStorage.setItem("emy_bakes_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem("emy_bakes_cart");
    if (saved) {
        try {
            cart = sanitizeCartItems(JSON.parse(saved));
            saveCartToStorage();
            updateCartUI();
            renderProducts();
        } catch (e) {
            console.error("Failed to parse cart from storage", e);
            cart = [];
            saveCartToStorage();
        }
    }
}

// --- Toast Notifications Helper ---
const MAX_VISIBLE_TOASTS = 1;
const TOAST_DURATION = 2600;

function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const existingToast = Array.from(container.children).find(toast =>
        toast.dataset.message === message &&
        toast.dataset.type === type &&
        !toast.classList.contains("toast-exiting")
    );

    if (existingToast) {
        const repeat = Number(existingToast.dataset.repeat || 1) + 1;
        existingToast.dataset.repeat = repeat;
        existingToast.querySelector(".toast-repeat").textContent = `×${repeat}`;
        existingToast.classList.remove("toast-bump");
        void existingToast.offsetWidth;
        existingToast.classList.add("toast-bump");
        return;
    }

    while (container.children.length >= MAX_VISIBLE_TOASTS) {
        dismissToast(container.firstElementChild, 0);
    }

    const toast = document.createElement("div");
    
    toast.className = `toast ${type}`;
    toast.dataset.message = message;
    toast.dataset.type = type;
    toast.dataset.repeat = "1";
    
    const icon = type === "success"
        ? `<span class="toast-icon success">✓</span>`
        : type === "error"
            ? `<span class="toast-icon error">!</span>`
            : `<span class="toast-icon">ℹ</span>`;
        
    toast.innerHTML = `
        ${icon}
        <div class="toast-message">${escapeHTML(message)}</div>
        <span class="toast-repeat" aria-hidden="true"></span>
    `;

    container.appendChild(toast);
    
    // Replace emojis in the toast
    replaceEmojisInDOM(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add("active");
    }, 50);

    // Auto-destruct after a short moment so rapid actions never fill the screen.
    setTimeout(() => dismissToast(toast), TOAST_DURATION);
}

function dismissToast(toast, delay = 260) {
    if (!toast) return;

    if (delay === 0) {
        toast.remove();
        return;
    }

    toast.classList.add("toast-exiting");
    toast.classList.remove("active");

    setTimeout(() => {
        toast.remove();
    }, delay);
}

// --- Apple Emoji Replacement Helper ---
function replaceEmojisInDOM(node) {
    if (!node) return;
    const emojiRegex = /\p{Extended_Pictographic}/gu;
    
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (emojiRegex.test(text)) {
            const span = document.createElement("span");
            span.className = "apple-emoji-wrapper";
            span.innerHTML = text.replace(emojiRegex, (match) => {
                const codePoint = Array.from(match)
                    .map(c => c.codePointAt(0).toString(16))
                    .filter(cp => cp !== 'fe0f')
                    .join('-');
                
                // Skip standard text symbols matched by the emoji regex
                if (codePoint === 'a9' || codePoint === 'ae' || codePoint === '2122') {
                    return match;
                }
                
                return `<img class="apple-emoji" src="https://unpkg.com/emoji-datasource-apple@15.0.1/img/apple/64/${codePoint}.png" alt="${match}" onerror="this.replaceWith(this.alt)">`;
            });
            node.parentNode.replaceChild(span, node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE' && !node.classList.contains("apple-emoji-wrapper")) {
        const children = Array.from(node.childNodes);
        for (let child of children) {
            replaceEmojisInDOM(child);
        }
    }
}
