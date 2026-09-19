<!-- CSS -->
<link rel="stylesheet" href="./css/style.css">
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.jpg" type="image/x-icon">

<!-- Contents -->

Chào mừng bạn đến với web được tạo bằng `README.md` và với các tệp trình bày nội dung cũng được viết cũng bằng đuôi `.md`. 

## Trang chủ|[Giới thiệu](./about.md)|[Cập nhật](./news.md) 

Ở đây chưa có gì cả, nên tôi lấp đại khoảng trống bằng mấy dòng. 

Và dưới đây sẽ là các mục các vấn đề được chỉnh sửa ở file `README.md` này. 

### Viết văn bản: 

Văn bản thường nè. 

**In đậm**, *In nghiêng*, <u>Gạch chân chữ</u>, ~~Gạch giữa chữ~~. 

### Chèn link: 

Trực tiếp: Mã nguồn dự án [https://github.com/Namlete102/README-markdown-web](https://github.com/Namlete102/README-markdown-web)

Gián tiếp: Nhấp [vào đây](https://github.com/Namlete102/README-markdown-web) để được chuyển đến mã nguồn dự án.  

Có thể sử dụng thẻ `<a>` bên HTML để chèn link: Nhấp <a href="https://github.com/Namlete102/README-markdown-web" target="_blank">vào đây</a> để được chuyển đến mã nguồn dự án ở một tab khác bên trong trình duyệt web.

### Chèn danh sách: 

Danh sách không có thứ tự: 

+ Một
+ Hai
+ Ba

Danh sách có thứ tự: 

1. Một 
2. Hai 
3. Ba

### Chèn phương trình toán học:
 
Viết phương trình định lý Pytago ở chế độ `inline math`: \\(z^2 = x^2 + y^2\\)  

Viết phương trình Dirac trong cơ học lượng tử ở chế độ `display math`: 

$$
\begin{equation}
(i \gamma^\mu \partial_\mu - m) \psi = 0
\label{eq:1}
\end{equation}
$$

Tham chếu đến phương trình \eqref{eq:1}

### Chèn code 

DIsplay code: 

```latex
\documentclass{article}
\begin{document}
Hello \LaTeX
\end{document}
```

### Chèn ảnh

Ảnh đuôi file là jpg: 

<figure>
    <img src="./images/sumida (shimeji simulation).jpg" alt="Shimuda">
    <figcaption>Nhân vật Shimuda trong Shimeji Shimulation.</figcaption>
</figure> 

Ảnh đuôi file là gif: 

<figure>
    <img src="./images/Satanichia McDowell Kurumizawa.gif" alt="Satanichia McDowell Kurumizawa">
    <figcaption>Nhân vật Satanichia McDowell Kurumizawa trong Gabriel DropOut.</figcaption>
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

## Chân trang (footer) 

<!-- Footer -->
    <!-- Footer -->
  <footer>
        <div class="footerNav">
            <ul>
                <li><a href="https://github.com/Namlete102/LaTeX-theme" target="_blank">Github</a></li>            
                <li><a href="https://namlete102.github.io/Namleteblog.github.io/aboutme.html" target="_blank">Contact me</a></li>
                <li><a href="http://www.facebook.com/sharer.php? u=https://namnl2510757-gif.github.io/130526/" target="_blank">Share</a></li>
            </ul>
        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2026; Designed and edited by Namlete</p>
        </div>
  </footer>

<!-- JS -->

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