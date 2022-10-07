# [checksum](#)

> a typefont for hex encoded values 


## Usage

Prevent FOUT or FOIT. Use Font Loading API or Web Font Loader:

```html
<link rel="preload" href=(path to WOFF2 font) as="font" type="font/woff2" crossorigin="anonymous">
```

```html
<script>
  window.WebFontConfig = {
    custom: {
      families: ['Checksum'],
    },
  };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.js" integrity="sha256-4O4pS1SH31ZqrSO2A/2QJTVjTPqVe+jnYgOWUVr7EEc=" crossorigin="anonymous"></script>
```


```css
@font-face {
  font-family: 'KaTeX_Main';
  src: url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Main-Regular.woff2) format('woff2'), url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Main-Regular.woff) format('woff'), url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Main-Regular.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Math';
  src: url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Math-BoldItalic.woff2) format('woff2'), url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Math-BoldItalic.woff) format('woff'), url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Math-BoldItalic.ttf) format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Math';
  src: url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Math-Italic.woff2) format('woff2'), url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Math-Italic.woff) format('woff'), url(https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/fonts/KaTeX_Math-Italic.ttf) format('truetype');
  font-weight: normal;
  font-style: italic;
}
```

### glyph ordering

<pre>
.notdef
.null
CR
space
one
two
three
four
five
six
seven
eight
nine
zero
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
hyphen
</pre>
