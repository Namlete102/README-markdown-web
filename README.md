<!-- CSS -->
<link rel="stylesheet" href="style.css">
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

<!-- Contents -->

Chào mừng bạn đến với web được tạo bằng `README.md` và viết các tệp khác bằng văn bản thần túy (text file). 

## Trang chủ|[Giới thiệu](./txt/about.txt)|[Cập nhật](./menu/news.md) 

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

<pre class="mermaid">
  timeline TD
    title MermaidChart 2023 Timeline
      section 2023 Q1 <br> Release Personal Tier
        Bullet 1 : sub-point 1a : sub-point 1b
        Bullet 2 : sub-point 2a : sub-point 2b
      section 2023 Q2 <br> Release XYZ Tier
        Bullet 3 : sub-point <br> 3a : sub-point 3b
        Bullet 4 : sub-point 4a : sub-point 4b
</pre>

### Chèn bảng 

|Tiêu đề 1|Tiêu đề 2|
|:--------|:--------|
|Nội dung 1|Nội dung 2|
|Nội dung 3|Nội dung 4|

<!-- JS -->

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

<!-- Mermaid -->

<script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true});
</script>

