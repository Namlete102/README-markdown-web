# Txt web

Chào mừng bạn đến với web được tạo bằng `README.md` và viết các tệp khác bằng văn bản thần túy (text file). 

## HOME|[ABOUT](./txt/about.txt)| 

Ở đây chưa có gì cả, nên tôi lấp đại khoảng trống bằng mấy dòng. 

### Chèn toán học:

Phương trình Dirac trong cơ học lượng tử: 

$$
\begin{equation}
(i \gamma^\mu \partial_\mu - m) \psi = 0
\label{eq:1}
\end{equation}
$$

Tham chếu đến phương trình \eqref{eq:1}

### Chèn ảnh

<figure>
    <img src="./img/sumida (shimeji simulation).jpg" alt="Shimuda" onclick="openLightbox(0)">
    <figcaption>Nhân vật Shimuda trong Shimeji Shimulation.</figcaption>
</figure> 

### Mermaid 

```mermaid
timeline TD
  title MermaidChart 2023 Timeline
    section 2023 Q1 <br> Release Personal Tier
      Bullet 1 : sub-point 1a : sub-point 1b
      Bullet 2 : sub-point 2a : sub-point 2b
    section 2023 Q2 <br> Release XYZ Tier
      Bullet 3 : sub-point <br> 3a : sub-point 3b
      Bullet 4 : sub-point 4a : sub-point 4b
```

### Chèn bảng 

|Tiêu đề 1|Tiêu đề 2|
|:--------|:--------|
|Nội dung 1|Nội dung 2|
|Nội dung 3|Nội dung 4|


<style>
/* Chèn ảnh */

figure{
  margin: 0 auto;
  text-align: center;
  display: block;
}

figure img{
  max-width: 80%;
  max-height: 80%;
  cursor: pointer;
  transition: transform 0.2s;
}

figure img:hover {
  transform: scale(1.05);
}

figure figcaption {
    margin-top: 30px;
    text-align: center;
    font-size: 16px;
}

/* Lớp phủ đen toàn màn hình */
.lightbox-overlay {
  display: none; /* Ẩn mặc định, hiện khi dùng JS */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Khung chứa ảnh (Bo góc và đổ bóng giống hình của bạn) */
.image-container {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  overflow: hidden; /* Giữ ảnh không tràn ra ngoài khi zoom */
}

.image-container img {
  max-width: 100%;
  max-height: 75vh;
  display: block;
  border-radius: 4px;
  transition: transform 0.3s ease; /* Hiệu ứng zoom mượt */
  cursor: zoom-in;
}

/* Trạng thái khi được Phóng to (Zoom) */
.image-container img.zoomed {
  transform: scale(1.5); /* Phóng to lên 1.5 lần */
  cursor: zoom-out;
}

/* Các nút điều hướng (Next / Prev / Close) */
.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  font-size: 30px;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}
.nav-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}
.prev-btn { left: 40px; }
.next-btn { right: 40px; }

/* Chữ gợi ý bấm zoom */
.zoom-indicator {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
  pointer-events: none;
}


/* Chú thích */

figcaption {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
}
</style>

<script>
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
</script>

<!-- Mathjax -->
<script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<script>
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
</script>

<style>
/* Thêm thuộc tính này cho phần tử/phương trình nhận tham chiếu */
 
[id^="eq-"], 
[id] { 
    /* Đặt giá trị bằng chiều cao Nav (? px) + khoảng hở mong muốn (ví dụ 15px) */
    scroll-margin-top: 15px; 
}
</style>