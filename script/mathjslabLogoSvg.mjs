/**
 * This value is the default Open Graph width: 630.
 */
const defaultOGWidth = 2 * 5 * 7 * 9;
/**
 * MathJSLab logo factory in SVG format.
 * @param {*} style The `style` parameter must be a string defining the following classes:
 *                  - fill-symbol
 *                  - stroke-panel
 *                  - fillPanel
 *                  - stroke-trace
 *                  - fill-trace
 * @param {*} width The logo is a square image. `width` defines the dimensions.
 * @param {*} precision Precision factor for coordinates.
 * @returns A string containing the MathJSLab logo in SVG format.
 */
export default function mathjslabLogoSvg(style, width = defaultOGWidth, precision = 2) {
    if (precision < 1) {
        precision = 1;
    }
    const coordinates = [
        /*   0 */ 1 / 45 /* stroke-width for traces */,
        /*   1 */ 3 / 25 /* Expression font-size */,
        /*   2 */ 1 / 2 /* Half width coordinate */,
        /*   3 */ 16 / 35 /* Main circle panel radius */,
        /*   4 */ 17 / 70 /* Expression x coordinate */,
        /*   5 */ 47 / 70 /* Expression y coordinate */,
        /*   6 */ 1 / 5 /* X axis origin */,
        /*   7 */ 3 / 14,
        /*   8 */ 7 / 9 /* Y axis origin */,
        /*   9 */ 22 / 27,
        /*  10 */ 7 / 10,
        /*  11 */ 7 / 25,
        /*  12 */ 76 / 315,
        /*  13 */ 232 / 315,
        /*  14 */ 1 / 154,
        /*  15 */ 2 / 9 /* Graph curve */,
        /*  16 */ 13 / 21,
        /*  17 */ 29 / 90,
        /*  18 */ 13 / 30,
        /*  19 */ 2 / 5,
        /*  20 */ 29 / 60,
        /*  21 */ 8 / 15,
        /*  22 */ 11 / 21,
        /*  23 */ 3 / 5,
        /*  24 */ 2 / 3,
        /*  25 */ 57 / 70,
        /*  26 */ 38 / 45,
        /*  27 */ 12 / 45,
        /*  28 */ 79 / 210 /* Pi symbol */,
        /*  29 */ 47 / 315,
        /*  30 */ 124 / 315,
        /*  31 */ 17 / 126,
        /*  32 */ 17 / 42,
        /*  33 */ 41 / 315,
        /*  34 */ 55 / 126,
        /*  35 */ 68 / 105,
        /*  36 */ 109 / 630,
        /*  37 */ 4 / 7,
        /*  38 */ 359 / 630,
        /*  39 */ 59 / 315,
        /*  40 */ 4 / 21,
        /*  41 */ 179 / 315,
        /*  42 */ 131 / 630,
        /*  43 */ 17 / 30,
        /*  44 */ 71 / 315,
        /*  45 */ 71 / 126,
        /*  46 */ 181 / 630,
        /*  47 */ 32 / 105,
        /*  48 */ 14 / 45,
        /*  49 */ 101 / 315,
        /*  50 */ 26 / 45,
        /*  51 */ 1 / 3,
        /*  52 */ 62 / 105,
        /*  53 */ 107 / 315,
        /*  54 */ 38 / 63,
        /*  55 */ 28 / 45,
        /*  56 */ 40 / 63,
        /*  57 */ 20 / 63,
        /*  58 */ 19 / 63,
        /*  59 */ 41 / 63,
        /*  60 */ 409 / 630,
        /*  61 */ 103 / 315,
        /*  62 */ 209 / 630,
        /*  63 */ 67 / 105,
        /*  64 */ 221 / 630,
        /*  65 */ 79 / 126,
        /*  66 */ 233 / 630,
        /*  67 */ 7 / 18,
        /*  68 */ 61 / 105,
        /*  69 */ 49 / 90,
        /*  70 */ 164 / 315,
        /*  71 */ 223 / 630,
        /*  72 */ 94 / 315,
        /*  73 */ 331 / 630,
        /*  74 */ 3 / 14,
        /*  75 */ 8 / 15,
        /*  76 */ 7 / 15,
        /*  77 */ 146 / 315,
        /*  78 */ 29 / 63,
        /*  79 */ 31 / 126,
        /*  80 */ 41 / 90,
        /*  81 */ 5 / 18,
        /*  82 */ 142 / 315,
        /*  83 */ 13 / 42,
        /*  84 */ 47 / 105,
        /*  85 */ 34 / 105,
        /*  86 */ 281 / 630,
        /*  87 */ 106 / 315,
        /*  88 */ 277 / 630,
        /*  89 */ 13 / 35,
        /*  90 */ 89 / 210,
        /*  91 */ 41 / 105,
        /*  92 */ 2 / 5,
        /*  93 */ 8 / 21,
        /*  94 */ 11 / 30,
        /*  95 */ 17 / 45,
        /*  96 */ 38 / 105,
        /*  97 */ 12 / 35,
        /*  98 */ 23 / 70,
        /*  99 */ 37 / 90,
        /* 100 */ 44 / 105,
        /* 101 */ 53 / 126,
        /* 102 */ 55 / 126,
        /* 103 */ 11 / 63,
        /* 104 */ 22 / 63,
        /* 105 */ 59 / 315,
        /* 106 */ 37 / 105,
        /* 107 */ 6 / 35,
        /* 108 */ 10 / 63,
    ];
    const c = coordinates.map((value) => {
        if (value > 1 / (10 * precision)) {
            if (width > (defaultOGWidth * precision) / 10) {
                return Math.round(value * width);
            } else {
                return Math.round(value * 10 * width) / 10;
            }
        } else if (value > 1 / (100 * precision)) {
            if (width > defaultOGWidth) {
                return Math.round(value * width);
            } else if (width > (defaultOGWidth * precision) / 10) {
                return Math.round(value * 10 * width) / 10;
            } else {
                return Math.round(value * 100 * width) / 100;
            }
        } else {
            if (width > defaultOGWidth) {
                return Math.round(value * 10 * width) / 10;
            } else if (width > (defaultOGWidth * precision) / 10) {
                return Math.round(value * 100 * width) / 100;
            } else {
                return Math.round(value * 1000 * width) / 1000;
            }
        }
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}" viewBox="0 0 ${width} ${width}">
  <style>
${style}
  </style>
  <circle style="fill:none;stroke:none;stroke-opacity:1" cx="${c[2]}" cy="${c[2]}" r="${c[2]}"/>
  <circle class="stroke-fill-panel" style="stroke-width:${c[0]}px" cx="${c[2]}" cy="${c[2]}" r="${c[3]}"/>
  <path
   class="fill-symbol"
   d="M ${c[28]},${c[29]}
      C ${c[30]},${c[31]} ${c[32]},${c[33]} ${c[34]},${c[33]}
      H ${c[35]}
      V ${c[36]}
      H ${c[37]}
      C ${c[38]},${c[39]} ${c[38]},${c[40]} ${c[41]},${c[42]} ${c[43]},${c[44]} ${c[45]},${c[46]} ${c[45]},${c[46]} ${c[45]},${c[47]} ${c[43]},${c[48]} ${c[37]},${c[49]} ${c[50]},${c[51]} ${c[52]},${c[53]} ${c[54]},${c[53]} ${c[55]},${c[53]} ${c[56]},${c[57]} ${c[56]},${c[58]}
      H ${c[59]}
      C ${c[60]},${c[61]} ${c[60]},${c[62]} ${c[63]},${c[64]} ${c[65]},${c[66]} ${c[54]},${c[67]} ${c[68]},${c[67]} ${c[69]},${c[67]} ${c[70]},${c[71]} ${c[70]},${c[72]} ${c[70]},${c[46]} ${c[73]},${c[74]} ${c[75]},${c[36]}
      H ${c[76]}
      C ${c[77]},${c[42]} ${c[78]},${c[79]} ${c[80]},${c[81]} ${c[82]},${c[83]} ${c[84]},${c[85]} ${c[86]},${c[87]} ${c[88]},${c[89]} ${c[90]},${c[91]} ${c[92]},${c[91]} ${c[93]},${c[91]} ${c[94]},${c[95]} ${c[94]},${c[96]} ${c[94]},${c[64]} ${c[89]},${c[97]} ${c[91]},${c[98]} ${c[99]},${c[48]} ${c[100]},${c[58]} ${c[101]},${c[46]}
      L ${c[102]},${c[103]}
      H ${c[93]}
      C ${c[89]},${c[103]} ${c[96]},${c[103]} ${c[104]},${c[105]} ${c[106]},${c[107]} ${c[94]},${c[108]} ${c[28]},${c[29]}
      Z" />
  <!-- prettier-ignore -->
  <text class="fill-symbol" style="font-size:${c[1]}px;font-family:'Times New Roman';font-style:italic" x="${c[4]}" y="${c[5]}">ax<tspan style="font-size:65%;baseline-shift:super">3</tspan><tspan style="font-style:normal;font-weight:bold;font-size:80%;font-family:'Times New Roman'">+</tspan>bx<tspan style="font-size:65%;baseline-shift:super">2</tspan><tspan style="font-style:normal;font-weight:bold;font-size:80%;font-family:'Times New Roman'">+</tspan>cx<tspan style="font-style:normal;font-weight:bold;font-size:80%;font-family:'Times New Roman'">+</tspan>d</text>
  <path class="stroke-trace" style="stroke-width:${c[0]}px;stroke-linecap:round" d="M ${c[6]},${c[7]} V ${c[8]} H ${c[9]}"/>
  <path class="stroke-trace" style="stroke-width:${c[0]}px" d="M ${c[6]},${c[10]} H ${c[11]} V ${c[8]}"/>
  <circle class="fill-trace" style="stroke:none" cx="${c[12]}" cy="${c[13]}" r="${c[14]}"/>
  <path class="stroke-trace" style="stroke-width:${c[0]}px;stroke-linecap:round" d="M ${c[6]},${c[10]} C ${c[15]},${c[16]} ${c[17]},${c[18]} ${c[19]},${c[18]} ${c[20]},${c[18]} ${c[21]},${c[22]} ${c[23]},${c[22]} ${c[24]},${c[22]} ${c[25]},${c[17]} ${c[26]},${c[27]}"/>
</svg>`;
}
