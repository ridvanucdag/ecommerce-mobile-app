export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const generateRandomReview = (id: number, rating: number): Review => {
  const names = [
    'Rıdvan',
    'Ahmet',
    'Zeynep',
    'Mehmet',
    'Ayşe',
    'Ali',
    'Emre',
    'Elif',
    'Can',
    'Seda',
    'Veli',
    'Fatma',
    'Murat',
    'Büşra',
    'Burak',
    'Hakan',
    'Cem',
    'Duygu',
    'Gökhan',
    'Şirin',
    'İsmail',
    'Kemal',
    'Yusuf',
    'Berk',
    'Himmet',
    'Ece',
    'Deniz',
    'Merve',
    'Okan',
    'Melis',
    'Serkan',
    'Levent',
    'Hüseyin',
    'Nazlı',
    'Pelin',
    'Kaan',
    'Sinem',
    'Alper',
    'Gizem',
    'Furkan',
    'Özge',
    'Yasemin',
    'Sibel',
    'Berna',
    'Cengiz',
    'Tugay',
    'Sevda',
    'Zeynep',
    'Kübra',
    'Aylin',
    'Ayhan',
    'Ramazan',
    'Emine',
    'Hasan',
    'Selin',
    'Burcu',
    'Umut',
    'Cemre',
    'Rıza',
    'Aslı',
  ];

  const comments = [
    'Harika bir ürün, gerçekten tavsiye ederim!',
    'Ürün güzel ama kargo biraz gecikti.',
    'Fiyat/performans çok iyi.',
    'Beklediğim gibi çıkmadı, hayal kırıklığı.',
    'Mükemmel bir deneyim!',
    'İlk defa aldım, çok memnun kaldım.',
    'Kesinlikle tekrar alırım.',
    'Kalitesi harika, kullanımı çok kolay.',
    'Tam ihtiyacım olan şeydi.',
    'Kargo biraz yavaş geldi ama ürün güzel.',
    'Ürün beklediğimin çok daha üstündeydi!',
    'Kullanımı çok pratik, memnun kaldım.',
    'Fiyatı biraz yüksek ama değdi.',
    'Bu kadarını beklemiyordum, çok iyi!',
    'Kalite ve fiyat dengesi harika.',
    'Ürünü severek kullanıyorum, çok işime yaradı.',
    'Kargo biraz daha hızlı olabilir, ama ürün mükemmel.',
    'Gerçekten kaliteli bir ürün, tavsiye ederim.',
    'Fiyatına göre harika bir ürün.',
    'Çok beğendim, kesinlikle tekrar alırım.',
    'Kargo biraz geç geldi ama beklemeye değer.',
    'Bu ürünü arkadaşlarıma da önerdim.',
    'Beklediğimin çok daha iyisi, çok kullanışlı.',
    'Ürün çok sağlam, uzun ömürlü gibi görünüyor.',
    'Ürün gerçekten harika, her şey anlatıldığı gibi.',
    'Yorumlara güvenerek aldım, çok memnun kaldım.',
    'Ürün işlevsel ve kaliteli, çok iyi.',
    'Tam ihtiyacım olan şeydi, teşekkürler!',
    'Ürün tamamen beklediğim gibi, gayet iyi.',
    'Fiyat/performans açısından çok iyi.',
    'Kesinlikle bu ürünü tekrar alırım.',
    'Mükemmel, kullanım kolaylığı çok yüksek.',
    'Ürün kesinlikle fiyatına göre çok kaliteli.',
    'Beklediğimden daha kaliteli, çok memnun kaldım.',
    'Ürün gayet güzel, ancak kargo biraz uzun sürdü.',
    'Her şey çok iyi, sadece kargo süresi uzun.',
    'Harika bir ürün, beklediğimin çok ötesinde.',
    'Kargo hızlı geldi, ürün harika.',
    'Ürünü çok sevdim, kesinlikle tavsiye ederim.',
    'Kargo hızlıydı, ürün harika.',
    'Çok beğendim, gerçekten mükemmel.',
    'Kesinlikle almanızı öneririm.',
    'Üründen gerçekten çok memnun kaldım.',
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const comment = comments[Math.floor(Math.random() * comments.length)];

  return {id, name, rating, comment};
};

const generateReviews = () => {
  const randomReviewCount = Math.floor(Math.random() * 31) + 10;
  const reviews: Review[] = [];

  let ratingOrder = [5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 1, 2];

  for (let i = 0; i < randomReviewCount; i++) {
    const rating = ratingOrder[i % ratingOrder.length];
    reviews.push(generateRandomReview(i + 1, rating));
  }

  return reviews;
};

const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const reviews: Review[] = shuffleArray(generateReviews());
