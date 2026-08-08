# Txt web

Chào mừng bạn đến với web được tạo bằng `README.md` và viết các tệp khác bằng văn bản thần túy (text file). 

## HOME|[ABOUT](./txt/about.txt)| 

Ở đây chưa có gì cả, nên tôi lấp đại khoảng trống bằng mấy dòng. 

### Chèn toán học:

Phương trình Dirac trong cơ học lượng tử: 

$$
(i \gamma^\mu \partial_\mu - m) \psi = 0
$$

### Chèn ảnh

![Shimuda](./img/sumida%20(shimeji%20simulation).jpg)

Nhân vật Shimuda trong Shimeji Shimulation

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