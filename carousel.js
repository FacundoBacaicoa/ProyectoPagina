carouselContainer = document.querySelector('.carousel-container');
      const carouselImgs = carouselContainer.querySelector('.imgs');
      const antBtn = carouselContainer.querySelector('.ant');
      const sigBtn = carouselContainer.querySelector('.sig');
      const dotsContainer = carouselContainer.querySelector('.dotsContainer');
      let currentIndex = 0;
      const cImagenes = [
        'imgsindex/11.jpg',
        'imgsindex/22.jpg',
        'imgsindex/33.jpg',
      ];

      function mostrarImagen(index) {
        const images = carouselImgs.querySelectorAll('img');
        images.forEach((img, i) => {
          img.classList.remove('active');
          if (i === index) {
            img.classList.add('active');
          }
        });
        updateDots(index);
      }
      
      function nextImage() {
        currentIndex++;
        if (currentIndex >= cImagenes.length) {
          currentIndex = 0;
        }
        mostrarImagen(currentIndex);
      }

      function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = cImagenes.length - 1;
        }
        mostrarImagen(currentIndex);
      }

      function createDots() {
        for (let i = 0; i < cImagenes.length; i++) {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          dot.addEventListener('click', () => showImage(i));
          dotsContainer.appendChild(dot);
        }
        updateDots(currentIndex);
      }

      function updateDots(index) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
          dot.classList.remove('active');
          if (i === index) {
            dot.classList.add('active');
          }
        });
      }

      function crearImagenes() {
        cImagenes.forEach((imgSrc, index) => {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = '';
          img.classList.add('carousel-img');
          if (index === currentIndex) {
            img.classList.add('active');
          }
          carouselImgs.appendChild(img);
        });
      }

      antBtn.addEventListener('click', prevImage);
      sigBtn.addEventListener('click', nextImage);
      createDots();
      crearImagenes();
      mostrarImagen(currentIndex);