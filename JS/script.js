// כשנלחצים על תמונה, התמונה תיפתח בהגדלה
const images = document.querySelectorAll('.image-item img');
const overlay = document.createElement('div');
overlay.id = 'overlay'; // יצירת שכבת overlay
document.body.appendChild(overlay);

images.forEach(image => {
  image.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = image.src; // קביעת מקור התמונה שתיפתח
    overlay.innerHTML = ''; // ניקוי התמונה הקודמת
    overlay.appendChild(img);
    overlay.style.display = 'flex'; // הצגת ה-overlay באמצעות flexbox (כדי למרכז את התמונה)
  });
});

// סגירת התמונה הגדולה כשנלחצים על ה-overlay
overlay.addEventListener('click', () => {
  overlay.style.display = 'none'; // החבאת ה-overlay
});
