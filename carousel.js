carouselContainer = document.querySelector('.carousel-container');
      const carouselImgs = carouselContainer.querySelector('.imgs');
      const imagenes = carouselImgs.querySelectorAll('img');
      const antBtn = carouselContainer.querySelector('.ant');
      const sigBtn = carouselContainer.querySelector('.sig');
      const dotsContainer = carouselContainer.querySelector('.dotsContainer');
      let currentIndex = 0;
      const totalimagenes = imagenes.length;

      function showImage(index) {
        imagenes.forEach((img) => {
          img.classList.remove('active');
        });
        imagenes[index].classList.add('active');
        updateDots(index);
      }

      function nextImage() {
        currentIndex++;
        if (currentIndex >= totalimagenes) {
          currentIndex = 0;
        }
        showImage(currentIndex);
      }

      function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = totalimagenes - 1;
        }
        showImage(currentIndex);
      }

      function createDots() {
        for (let i = 0; i < totalimagenes; i++) {
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

      antBtn.addEventListener('click', prevImage);
      sigBtn.addEventListener('click', nextImage);
      createDots();
      showImage(currentIndex);