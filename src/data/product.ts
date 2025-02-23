const product = [
  {
    id: 1,
    title: 'Samsung Galaxy Note 20',
    description:
      'Samsung Galaxy Note 20, son derece güçlü ve şık bir akıllı telefon. 6.9 inçlik dinamik AMOLED ekranı, 120 Hz yenileme hızı ile her türlü içerik akışını mükemmel bir şekilde görüntüler. Qualcomm Snapdragon 865+ işlemcisi sayesinde, hem oyunlar hem de profesyonel iş uygulamaları için yüksek performans sunar. 108 MP kamerası ile her anı net ve detaylı bir şekilde kaydedebilir, 8K video çekimleri ile profesyonel düzeyde video içerikleri oluşturabilirsiniz. Ayrıca, uzun süreli kullanım için büyük bataryası ve hızlı şarj desteği ile her zaman hazır bir cihaz.',
    imagelink: require('@assets/images/1.png'),
    category: 'category.phone',
    price: 1300,
    discounted_price: 1100.0,
    average_rating: 4.3,
    ratings_count: 120,
    favourite: false,
    index: 3,
    quantity: 1,
  },
  {
    id: 2,
    title: 'Apple iPhone 14 Pro Max',
    description:
      'Apple iPhone 14 Pro Max, mobil teknoloji dünyasında çığır açan özelliklere sahip. 6.7 inç Super Retina XDR ekranı ile mükemmel görüntü kalitesi sunar. A16 Bionic çipi, bugüne kadar üretilen en güçlü iPhone işlemcisidir ve çoklu görevler için mükemmel hız sağlar. 48 MP ana kamerası, her ortamda mükemmel fotoğraflar çekmenizi sağlar. Yüksek güvenlik önlemleri ile Face ID teknolojisi, tüm verilerinizi güvende tutarken, 5G desteği ile hızlı internet bağlantılarının keyfini çıkarabilirsiniz. Ayrıca, 3200 mAh bataryası ile tüm gün boyunca aktif kullanım imkanı sunar.',
    imagelink: require('@assets/images/2.png'),
    category: 'category.phone',
    price: 1200,
    discounted_price: 1000.0,
    average_rating: 4.5,
    ratings_count: 150,
    favourite: false,
    index: 1,
    quantity: 1,
  },
  {
    id: 3,
    title: 'Xiaomi Mi 11 Akıllı Telefon',
    description:
      'Xiaomi Mi 11, uygun fiyatına göre sunduğu üstün özelliklerle dikkat çekiyor. 6.81 inç 2K AMOLED ekranı, HDR10+ desteği ile sinema kalitesinde görüntüler sunar. Qualcomm Snapdragon 888 işlemcisi, oyunlar ve uygulamalar için olağanüstü hız ve performans sağlar. 108 MP kamera, her detayın net bir şekilde çekilmesini sağlar ve düşük ışık koşullarında bile başarılı sonuçlar verir. 4600 mAh batarya, gün boyunca yeterli enerji sunarken, 55W hızlı şarj desteği ile dakikalar içinde şarjınızı tamamlayabilirsiniz. Ayrıca, 5G teknolojisi ile internet hızınızı en üst düzeye çıkarabilirsiniz.',
    imagelink: require('@assets/images/3.png'),
    category: 'category.phone',
    price: 800,
    discounted_price: 700.0,
    average_rating: 4.0,
    ratings_count: 100,
    favourite: true,
    index: 2,
    quantity: 1,
  },
  {
    id: 4,
    title: 'Samsung Galaxy S23',
    description:
      'Samsung Galaxy S23, minimalist tasarımı ve güçlü özellikleriyle mükemmel bir telefon deneyimi sunar. 6.1 inç Dynamic AMOLED ekranı ile mükemmel renk doğruluğu ve kontrast sağlar. Exynos 2200 işlemcisi, yüksek hızda çoklu görevleri gerçekleştirebilmenizi sağlar. 50 MP üçlü arka kamerası, profesyonel fotoğraflar çekebilmenizi sağlayacak kadar yüksek kaliteli. Aynı zamanda, 4000 mAh bataryası uzun süreli kullanım sunarken, 25W hızlı şarj ile dakikalar içinde şarj edilebilir. Suya dayanıklılığı ile her türlü hava koşulunda rahatça kullanabilirsiniz.',
    imagelink: require('@assets/images/4.png'),
    category: 'category.phone',
    price: 1000,
    discounted_price: 850.0,
    average_rating: 3.5,
    ratings_count: 50,
    favourite: true,
    index: 0,
    quantity: 1,
  },
  {
    id: 5,
    title: 'Realme GT 2 Pro Akıllı Telefon',
    description:
      'Realme GT 2 Pro, teknoloji ve tasarım dünyasında dikkatleri üzerine çeker. 6.7 inç LTPO AMOLED ekranı, her türlü ortamda en yüksek kontrast ve renk doğruluğunu sunar. Qualcomm Snapdragon 8 Gen 1 işlemcisi, hızlı performans ve çoklu görevlerde üstün hız sağlar. 50 MP ana kamerası ve 50 MP ultra geniş kamerası ile her açıdan muazzam fotoğraflar çekebilirsiniz. Ayrıca, 5000 mAh batarya, uzun süreli kullanım sunarken, 65W hızlı şarj ile dakikalar içinde tam şarj olabilir. 5G desteği ile internet hızınızı maksimum seviyeye çıkarabilirsiniz.',
    imagelink: require('@assets/images/5.png'),
    category: 'category.phone',
    price: 950,
    discounted_price: 850.0,
    average_rating: 4.2,
    ratings_count: 60,
    favourite: true,
    index: 4,
    quantity: 1,
  },
  {
    id: 6,
    title: 'LG OLED TV - LG Güvencesi',
    description:
      'LG OLED TV, son derece ince tasarımı ve mükemmel görüntü kalitesiyle evinizdeki her anı sinematik bir deneyime dönüştürür. OLED ekran teknolojisi sayesinde, her siyah nokta gerçek siyah olur ve her detay mükemmel bir şekilde görünür. 4K çözünürlük ve HDR desteği ile her görüntü canlı ve net bir şekilde izlenebilir. Ayrıca, Dolby Atmos ses sistemi ile birlikte kullanıldığında, ses deneyiminiz de profesyonel seviyeye çıkar. Uzun ömürlü LED ışıkları ile enerji tasarrufu sağlar, çevre dostu bir televizyon deneyimi sunar.',
    imagelink: require('@assets/images/6.png'),
    category: 'category.television',
    price: 3000,
    discounted_price: 2500.0,
    average_rating: 4.8,
    ratings_count: 200,
    favourite: true,
    index: 5,
    quantity: 1,
  },
  {
    id: 7,
    title: 'Samsung 55" QLED TV',
    description:
      'Samsung 55" QLED TV, görüntü kalitesini bir üst seviyeye taşıyan mükemmel bir televizyon. QLED teknolojisi ile renkler daha canlı ve gerçekçi, her detayı en ince ayrıntısına kadar görebilirsiniz. 4K çözünürlük ve HDR desteği ile sinematik bir deneyim sunar. Ayrıca, ses kalitesi de çok yüksek, Dolby Atmos desteği sayesinde gerçekçi bir ses deneyimi yaşarsınız. Geniş ekranı sayesinde grup izlemeleri için idealdir. Çevre dostu LED ışıkları ve düşük enerji tüketimi sayesinde uzun ömürlü ve tasarruflu bir televizyon deneyimi sunar.',
    imagelink: require('@assets/images/7.png'),
    category: 'category.television',
    price: 4000,
    discounted_price: 3500.0,
    average_rating: 4.6,
    ratings_count: 180,
    favourite: false,
    index: 6,
    quantity: 1,
  },
  {
    id: 8,
    title: 'Philips Ambilight Akıllı TV',
    description: 'Philips Ambilight TV, inovatif ambilight teknolojisi ile.',
    imagelink: require('@assets/images/8.png'),
    category: 'category.television',
    price: 3500,
    discounted_price: 3000.0,
    average_rating: 4.7,
    ratings_count: 220,
    favourite: true,
    index: 7,
    quantity: 1,
  },
  {
    id: 9,
    title: 'Sony Bravia 4K TV Gelişmiş Teknoloji',
    description: 'Sony Bravia 4K TV, gelişmiş ses ve görüntü kalitesi.',
    imagelink: require('@assets/images/9.png'),
    category: 'category.television',
    price: 5000,
    discounted_price: 4500.0,
    average_rating: 4.9,
    ratings_count: 250,
    favourite: false,
    index: 8,
    quantity: 1,
  },
  {
    id: 10,
    title: 'TCL 4K TV - Uygun fiyatlı',
    description: 'TCL 4K TV, uygun fiyatlı yüksek çözünürlük.',
    imagelink: require('@assets/images/10.png'),
    category: 'category.television',
    price: 2000,
    discounted_price: 1800.0,
    average_rating: 4.0,
    ratings_count: 100,
    favourite: true,
    index: 9,
    quantity: 1,
  },
  {
    id: 11,
    title: 'Samsung Çamaşır Makinesi',
    description: 'Samsung çamaşır makinesi, modern teknolojilerle donatılmış.',
    imagelink: require('@assets/images/11.png'),
    category: 'category.homeAppliances',
    price: 3500,
    discounted_price: 3000.0,
    average_rating: 4.6,
    ratings_count: 110,
    favourite: true,
    index: 14,
    quantity: 1,
  },
  {
    id: 12,
    title: 'Arçelik Akıllı Buzdolabı',
    description: 'Arçelik Buzdolabı, geniş iç hacmiyle dikkat çekiyor.',
    imagelink: require('@assets/images/12.png'),
    category: 'category.homeAppliances',
    price: 4000,
    discounted_price: 3600.0,
    average_rating: 4.5,
    ratings_count: 150,
    favourite: false,
    index: 11,
    quantity: 1,
  },
  {
    id: 13,
    title: 'Siemens Akıllı 18Binlik Klima',
    description: 'Siemens klima, sıcak yaz günlerinde serinlik sağlar.',
    imagelink: require('@assets/images/13.png'),
    category: 'category.homeAppliances',
    price: 5500,
    discounted_price: 5000.0,
    average_rating: 4.7,
    ratings_count: 190,
    favourite: true,
    index: 12,
    quantity: 1,
  },
  {
    id: 14,
    title: 'Bosch Elektrikli Süpürge',
    description: 'Bosch elektrikli süpürge, sessiz ve güçlü emiş.',
    imagelink: require('@assets/images/14.png'),
    category: 'category.homeAppliances',
    price: 1500,
    discounted_price: 1400.0,
    average_rating: 4.0,
    ratings_count: 120,
    favourite: false,
    index: 13,
    quantity: 1,
  },
  {
    id: 15,
    title: 'Beko Çamaşır Makinesi',
    description: 'Beko çamaşır makinesi, enerji verimliliği yüksek.',
    imagelink: require('@assets/images/15.png'),
    category: 'category.homeAppliances',
    price: 2000,
    discounted_price: 1700.0,
    average_rating: 4.2,
    ratings_count: 80,
    favourite: true,
    index: 10,
    quantity: 1,
  },
  {
    id: 16,
    title: 'Nike Air Max 2021 Ayakkabı',
    description: 'Nike Air Max 2021, modern tasarımı ile öne çıkıyor.',
    imagelink: require('@assets/images/16.png'),
    category: 'category.shoes',
    price: 750,
    discounted_price: 650.0,
    average_rating: 4.4,
    ratings_count: 140,
    favourite: true,
    index: 15,
    quantity: 1,
  },
  {
    id: 17,
    title: 'Adidas Superstar Ayakkabı',
    description: 'Adidas Superstar, ikonik spor ayakkabısı olarak tarihe damgasını vurmuş bir modeldir. 1970’lerden bu yana hem sporcular hem de sokak modası tutkunları tarafından tercih edilen bu ayakkabı, her yaş ve tarzda insana hitap eder. Deri üst yüzeyi, dayanıklılığı ve rahatlığı ile dikkat çekerken, klasik Shell Toe (kabuk burun) tasarımı, ayakkabıya özgün bir görünüm kazandırır. Yüksek kaliteli kauçuk tabanı sayesinde uzun süreli kullanımda bile konfor sağlar. Hem günlük kullanımda hem de hafif egzersizlerde mükemmel performans sunar. Adidas Superstar, özelleştirilebilir renk seçenekleri ve şık tasarımı ile hem spor hem de şık kombinlerde kullanılabilir. Modern sokak stiline mükemmel uyum sağlar ve her adımda rahatlık sunar. Adidas markasının kalitesi ve tarzını yansıtan bu ayakkabı, hem şıklığı hem de fonksiyonelliği bir arada sunuyor.',
    imagelink: require('@assets/images/17.png'),
    category: 'category.shoes',
    price: 650,
    discounted_price: 580.0,
    average_rating: 4.3,
    ratings_count: 130,
    favourite: false,
    index: 16,
    quantity: 1,
  },
  {
    id: 18,
    title: 'Puma RS-X Ayakkabı',
    description: 'Puma RS-X, spor şıklığının adresi.',
    imagelink: require('@assets/images/18.png'),
    category: 'category.shoes',
    price: 800,
    discounted_price: 700.0,
    average_rating: 4.0,
    ratings_count: 100,
    favourite: true,
    index: 17,
    quantity: 1,
  },
  {
    id: 19,
    title: 'Reebok Classic Ayakkabı',
    description: 'Reebok Classic, rahatlığı ve şıklığı bir arada sunuyor.',
    imagelink: require('@assets/images/19.png'),
    category: 'category.shoes',
    price: 500,
    discounted_price: 450.0,
    average_rating: 4.2,
    ratings_count: 80,
    favourite: true,
    index: 18,
    quantity: 1,
  },
  {
    id: 20,
    title: 'New Balance 574 Ayakkabı',
    description: 'New Balance 574, günlük kullanım için ideal ayakkabı.',
    imagelink: require('@assets/images/20.png'),
    category: 'category.shoes',
    price: 900,
    discounted_price: 850.0,
    average_rating: 4.5,
    ratings_count: 110,
    favourite: false,
    index: 19,
    quantity: 1,
  },
  {
    id: 21,
    title: 'Canon EOS 90D Kamera',
    description:
      'Canon EOS 90D, profesyonel fotoğrafçılar için yüksek performans.',
    imagelink: require('@assets/images/21.png'),
    category: 'category.camera',
    price: 1500,
    discounted_price: 1300.0,
    average_rating: 4.6,
    ratings_count: 210,
    favourite: true,
    index: 20,
    quantity: 1,
  },
  {
    id: 22,
    title: 'Nikon D7500 Kamera',
    description:
      'Nikon D7500, fotoğrafçılık tutkunları için yüksek çözünürlük.',
    imagelink: require('@assets/images/22.png'),
    category: 'category.camera',
    price: 1200,
    discounted_price: 1000.0,
    average_rating: 4.3,
    ratings_count: 150,
    favourite: false,
    index: 21,
    quantity: 1,
  },
  {
    id: 23,
    title: 'Sony Alpha 7 III Kamera',
    description: 'Sony Alpha 7 III, profesyonel video çekimleri için mükemmel.',
    imagelink: require('@assets/images/23.png'),
    category: 'category.camera',
    price: 2500,
    discounted_price: 2200.0,
    average_rating: 4.9,
    ratings_count: 230,
    favourite: true,
    index: 22,
    quantity: 1,
  },
  {
    id: 24,
    title: 'Fujifilm X-T4 Kamera',
    description: 'Fujifilm X-T4, kompakt ve hafif profesyonel kamera.',
    imagelink: require('@assets/images/24.png'),
    category: 'category.camera',
    price: 1800,
    discounted_price: 1600.0,
    average_rating: 4.7,
    ratings_count: 170,
    favourite: false,
    index: 23,
    quantity: 1,
  },
  {
    id: 25,
    title: 'GoPro HERO 10 Kamera',
    description: 'GoPro HERO 10, aksiyon kameraları arasında en iyisi.',
    imagelink: require('@assets/images/25.png'),
    category: 'category.camera',
    price: 400,
    discounted_price: 350.0,
    average_rating: 4.8,
    ratings_count: 180,
    favourite: true,
    index: 24,
    quantity: 1,
  },
  {
    id: 26,
    title: 'Apple MacBook Air M2',
    description: 'Apple MacBook Air M2, ince tasarım ve güçlü performans.',
    imagelink: require('@assets/images/26.png'),
    category: 'category.computer',
    price: 1200,
    discounted_price: 1100.0,
    average_rating: 4.9,
    ratings_count: 500,
    favourite: true,
    index: 10,
    quantity: 1,
  },
  {
    id: 27,
    title: 'Dell XPS 13 - Gamer Laptop',
    description: 'Dell XPS 13, ince ve güçlü ultrabook.',
    imagelink: require('@assets/images/27.png'),
    category: 'category.computer',
    price: 1000,
    discounted_price: 950.0,
    average_rating: 4.8,
    ratings_count: 450,
    favourite: false,
    index: 11,
    quantity: 1,
  },
  {
    id: 28,
    title: 'HP Spectre x360 Laptop',
    description: 'HP Spectre x360, dönüştürülebilir dizüstü bilgisayar.',
    imagelink: require('@assets/images/28.png'),
    category: 'category.computer',
    price: 1400,
    discounted_price: 1300.0,
    average_rating: 4.6,
    ratings_count: 400,
    favourite: true,
    index: 12,
    quantity: 1,
  },
  {
    id: 29,
    title: 'Asus ZenBook 14 Laptop',
    description: 'Asus ZenBook 14, şık tasarım ve güçlü performans.',
    imagelink: require('@assets/images/29.png'),
    category: 'category.computer',
    price: 900,
    discounted_price: 850.0,
    average_rating: 4.4,
    ratings_count: 300,
    favourite: false,
    index: 13,
    quantity: 1,
  },
  {
    id: 30,
    title: 'Microsoft Surface Laptop 4',
    description: 'Microsoft Surface Laptop 4, mükemmel ekran ve batarya ömrü.',
    imagelink: require('@assets/images/30.png'),
    category: 'category.computer',
    price: 1300,
    discounted_price: 1200.0,
    average_rating: 4.7,
    ratings_count: 380,
    favourite: true,
    index: 14,
    quantity: 1,
  },
  {
    id: 31,
    title: 'Arçelik A++ geniş fırın',
    description: 'Arçelik, enerji tasarruflu fırın.',
    imagelink: require('@assets/images/31.png'),
    category: 'category.whiteGoods',
    price: 800,
    discounted_price: 750.0,
    average_rating: 4.6,
    ratings_count: 180,
    favourite: false,
    index: 18,
    quantity: 1,
  },
  {
    id: 32,
    title: 'Bosch buzdolabı KGN56XI30N',
    description: 'Bosch KGN56XI30N, enerji verimli ve geniş iç hacim.',
    imagelink: require('@assets/images/32.png'),
    category: 'category.whiteGoods',
    price: 600,
    discounted_price: 550.0,
    average_rating: 4.5,
    ratings_count: 250,
    favourite: true,
    index: 15,
    quantity: 1,
  },
  {
    id: 33,
    title: 'Samsung bulaşık makinesi',
    description: 'Samsung, geniş iç hacim ve şık tasarım.',
    imagelink: require('@assets/images/33.png'),
    category: 'category.whiteGoods',
    price: 700,
    discounted_price: 650.0,
    average_rating: 4.4,
    ratings_count: 270,
    favourite: true,
    index: 17,
    quantity: 1,
  },
  {
    id: 34,
    title: 'Siemens buzdolabı KA92NV99',
    description: 'Siemens KA92NV99, geniş hacimli buzdolabı.',
    imagelink: require('@assets/images/34.png'),
    category: 'category.whiteGoods',
    price: 1200,
    discounted_price: 1100.0,
    average_rating: 4.6,
    ratings_count: 300,
    favourite: false,
    index: 16,
    quantity: 1,
  },
  {
    id: 35,
    title: 'Simfer geniş hacimli mini fırın',
    description: 'Simfer, geniş iç hacimli ve enerji verimli fırın.',
    imagelink: require('@assets/images/35.png'),
    category: 'category.whiteGoods',
    price: 500,
    discounted_price: 450.0,
    average_rating: 4.3,
    ratings_count: 200,
    favourite: true,
    index: 19,
    quantity: 1,
  },
];
export default product;
