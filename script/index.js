const imageUrls = [
  '/images/Desktop_1920/cover_3.jpg', 
  '/images/Desktop_1920/cover_2.jpg', 
  '/images/Desktop_1920/cover_1.jpg'  
];

const header = document.querySelector('.header');

// Создаём массив объектов изображений из URL-адресов
const images = imageUrls.map(url => {
  const img = new Image(); // Создаём новый объект Image
  img.src = url; // Устанавливаем источник для объекта изображения
  return img; // Возвращаем созданный объект изображения
});

// Начинаем с первого изображения (индекс 0)
let index = 0; 

setInterval(() => {
  header.style.backgroundImage = `url(${images[index].src})`;

  // Обновляем индекс для следующего изображения
  // Если индекс достиг конца массива, сбрасываем его на 0
  // Иначе увеличиваем на 1
  index = index >= images.length - 1 ? 0 : index + 1; 
}, 3000);