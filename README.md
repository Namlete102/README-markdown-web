<!-- CSS -->
<link rel="stylesheet" href="style.css">
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.jpg" type="image/x-icon">

<!-- Contents -->

Chào mừng bạn đến với web được tạo bằng `README.md` và viết tệp được viết cũng bằng đuôi `.md`. 

## Trang chủ|[Giới thiệu](./menu/about.md)|[Cập nhật](./menu/news.md) 

Ở đây chưa có gì cả, nên tôi lấp đại khoảng trống bằng mấy dòng. 

Và dưới đây sẽ là các mục các vấn đề được chỉnh sửa ở file `README.md` này. 

### Chèn phương trình toán học:
 
<!-- Bị lỗi việc viết ptr toán học ở inline math -->
Viết phương trình định lý Pytago ở chế độ `inline math`: \(z^2 = x^2 + y^2\) 

Viết phương trình Dirac trong cơ học lượng tử ở chế độ `display math`: 

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


<table border="1">
  <tr>
    <td><pre>p. 52</pre></td>
    <td>In Remark 3.3.9, “ontheir” is missing a space</td>
  </tr>
  <tr>
    <td><pre>p. 54</pre></td>
    <td>In Example 3.3.21, should “but also what its range is” be “but also what its codomain is”?</td>
  </tr>
</table>

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