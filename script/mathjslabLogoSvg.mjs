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
        /*   1 */ 1 / 8 /* Expression font-size */,
        /*   2 */ 1 / 2 /* Half width coordinate */,
        /*   3 */ 16 / 35 /* Main circle panel radius */,
        /*   4 */ 11 / 35 /* Expression x coordinate */,
        /*   5 */ 24 / 35 /* Expression y coordinate */,
        /*   6 */ 1 / 5 /* X axis origin */,
        /*   7 */ 1 / 7,
        /*   8 */ 7 / 9 /* Y axis origin */,
        /*   9 */ 8 / 9,
        /*  10 */ 7 / 10,
        /*  11 */ 7 / 25,
        /*  12 */ 76 / 315,
        /*  13 */ 232 / 315,
        /*  14 */ 1 / 154,
        /*  15 */ 2 / 9 /* Graph curve */,
        /*  16 */ 13 / 21,
        /*  17 */ 1 / 3,
        /*  18 */ 13 / 30,
        /*  19 */ 2 / 5,
        /*  20 */ 1 / 2,
        /*  21 */ 8 / 15,
        /*  22 */ 11 / 21,
        /*  23 */ 3 / 5,
        /*  24 */ 2 / 3,
        /*  25 */ 4 / 5,
        /*  26 */ 13 / 15,
        /*  27 */ 11 / 45,
        /*  28 */ 79 / 210 /* Pi symbol */,
        /*  29 */ 32 / 315,
        /*  30 */ 124 / 315,
        /*  31 */ 3 / 35,
        /*  32 */ 17 / 42,
        /*  33 */ 17 / 210,
        /*  34 */ 55 / 126,
        /*  35 */ 68 / 105,
        /*  36 */ 17 / 126,
        /*  37 */ 4 / 7,
        /*  38 */ 57 / 100,
        /*  39 */ 3 / 20,
        /*  40 */ 179 / 315,
        /*  41 */ 11 / 63,
        /*  42 */ 17 / 30,
        /*  43 */ 25 / 126,
        /*  44 */ 71 / 126,
        /*  45 */ 31 / 126,
        /*  46 */ 17 / 63,
        /*  47 */ 26 / 45,
        /*  48 */ 67 / 420,
        /*  49 */ 13 / 45,
        /*  50 */ 94 / 315,
        /*  51 */ 13 / 42,
        /*  52 */ 9 / 28,
        /*  53 */ 62 / 105,
        /*  54 */ 104 / 315,
        /*  55 */ 38 / 63,
        /*  56 */ 28 / 45,
        /*  57 */ 40 / 63,
        /*  58 */ 401 / 630,
        /*  59 */ 2 / 7,
        /*  60 */ 41 / 63,
        /*  61 */ 409 / 630,
        /*  62 */ 199 / 630,
        /*  63 */ 59 / 180,
        /*  64 */ 23 / 36,
        /*  65 */ 31 / 90,
        /*  66 */ 197 / 315,
        /*  67 */ 47 / 126,
        /*  68 */ 7 / 18,
        /*  69 */ 61 / 105,
        /*  70 */ 49 / 90,
        /*  71 */ 164 / 315,
        /*  72 */ 331 / 630,
        /*  73 */ 11 / 60,
        /*  74 */ 73 / 210,
        /*  75 */ 89 / 315,
        /*  76 */ 7 / 15,
        /*  77 */ 29 / 63,
        /*  78 */ 19 / 90,
        /*  79 */ 289 / 630,
        /*  80 */ 71 / 315,
        /*  81 */ 29 / 126,
        /*  82 */ 149 / 630,
        /*  83 */ 191 / 420,
        /*  84 */ 9 / 35,
        /*  85 */ 19 / 42,
        /*  86 */ 92 / 315,
        /*  87 */ 47 / 105,
        /*  88 */ 14 / 45,
        /*  89 */ 281 / 630,
        /*  90 */ 103 / 315,
        /*  91 */ 277 / 630,
        /*  92 */ 116 / 315,
        /*  93 */ 89 / 210,
        /*  94 */ 41 / 105,
        /*  95 */ 8 / 21,
        /*  96 */ 11 / 30,
        /*  97 */ 5 / 14,
        /*  98 */ 13 / 35,
        /*  99 */ 211 / 630,
        /* 100 */ 20 / 63,
        /* 101 */ 37 / 90,
        /* 102 */ 44 / 105,
        /* 103 */ 53 / 126,
        /* 104 */ 19 / 140,
        /* 105 */ 22 / 63,
        /* 106 */ 37 / 105,
        /* 107 */ 2 / 15,
        /* 108 */ 1 / 9,
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
      C ${c[38]},${c[39]} ${c[40]},${c[48]} ${c[40]},${c[41]}
      C ${c[42]},${c[43]} ${c[44]},${c[45]} ${c[44]},${c[46]}
      C ${c[44]},${c[49]} ${c[42]},${c[50]} ${c[37]},${c[51]}
      C ${c[47]},${c[52]} ${c[53]},${c[54]} ${c[55]},${c[54]}
      C ${c[56]},${c[54]} ${c[57]},${c[4]} ${c[58]},${c[59]}
      H ${c[60]}
      C ${c[61]},${c[62]} ${c[35]},${c[63]} ${c[64]},${c[65]}
      C ${c[66]},${c[67]} ${c[55]},${c[68]} ${c[69]},${c[68]}
      C ${c[70]},${c[68]} ${c[71]},${c[74]} ${c[71]},${c[75]}
      C ${c[71]},${c[45]} ${c[72]},${c[73]} ${c[21]},${c[36]}
      H ${c[76]}
      L ${c[77]},${c[78]}
      L ${c[79]},${c[80]}
      C ${c[3]},${c[81]} ${c[3]},${c[82]} ${c[83]},${c[84]}
      C ${c[85]},${c[86]} ${c[87]},${c[88]} ${c[89]},${c[90]}
      C ${c[91]},${c[92]} ${c[93]},${c[94]} ${c[19]},${c[94]}
      C ${c[95]},${c[94]} ${c[96]},${c[28]} ${c[96]},${c[97]}
      C ${c[96]},${c[65]} ${c[98]},${c[99]} ${c[94]},${c[100]}
      C ${c[101]},${c[50]} ${c[102]},${c[59]} ${c[103]},${c[46]}
      L ${c[34]},${c[104]}
      H ${c[95]}
      C ${c[92]},${c[104]} ${c[97]},${c[104]} ${c[105]},${c[7]}
      C ${c[106]},${c[107]} ${c[96]},${c[108]} ${c[28]},${c[29]} Z" />
  <!-- prettier-ignore -->
  <text class="fill-symbol" style="font-size:${c[1]}px;font-family:'Times New Roman';font-style:italic" x="${c[4]}" y="${c[5]}">ax+bx<tspan style="font-size:65%;baseline-shift:super">2</tspan>+cx<tspan style="font-size:65%;baseline-shift:super">3</tspan></text>
  <path class="stroke-trace" style="stroke-width:${c[0]}px;stroke-linecap:round" d="M ${c[6]},${c[7]} V ${c[8]} H ${c[9]}"/>
  <path class="stroke-trace" style="stroke-width:${c[0]}px" d="M ${c[6]},${c[10]} H ${c[11]} V ${c[8]}"/>
  <circle class="fill-trace" style="stroke:none" cx="${c[12]}" cy="${c[13]}" r="${c[14]}"/>
  <path class="stroke-trace" style="stroke-width:${c[0]}px;stroke-linecap:round" d="M ${c[6]},${c[10]} C ${c[15]},${c[16]} ${c[17]},${c[18]} ${c[19]},${c[18]} ${c[20]},${c[18]} ${c[21]},${c[22]} ${c[23]},${c[22]} ${c[24]},${c[22]} ${c[25]},${c[17]} ${c[26]},${c[27]}"/>
</svg>`;
}
