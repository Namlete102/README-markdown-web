// Danh sách các đường dẫn ảnh của bạn
      const images = [
        './img/sumida (shimeji simulation).jpg',
      ];

      let currentIndex = 0;
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');

      // 1. Mở trình xem ảnh
      function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = 'flex';
        resetZoom(); // Reset lại zoom nếu tấm trước đang zoom
      }

      // 2. Đóng trình xem ảnh
      function closeLightbox() {
        lightbox.style.display = 'none';
      }

      // 3. Chuyển đổi ảnh (Tiến / Lùi)
      function changeImage(direction) {
        currentIndex += direction;
        
        // Nếu vượt quá ảnh cuối thì quay về ảnh đầu
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }
        // Nếu lùi quá ảnh đầu thì tới ảnh cuối
        if (currentIndex < 0) {
          currentIndex = images.length - 1;
        }
        
        lightboxImg.src = images[currentIndex];
        resetZoom(); // Đổi ảnh thì hủy chế độ zoom của ảnh cũ
      }

      // 4. Bật/Tắt Phóng to (Zoom) khi click vào ảnh
      lightboxImg.addEventListener('click', toggleZoom);

      function toggleZoom() {
        lightboxImg.classList.toggle('zoomed');
      }

      function resetZoom() {
        lightboxImg.classList.remove('zoomed');
      }

      // (Tùy chọn) Đóng khi bấm ra vùng đen bên ngoài khung ảnh
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });

 //   Mathjax

    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    };

    MathJax = {
      tex: {
        tags: 'ams'  // or 'all'
      }
    };
    
    function zoomOut() {
      let img = document.getElementById("myImage");
        img.style.width = (img.clientWidth - 50) + "px"; // Reduces width by 50px
      }