/**
 * This value is the default Open Graph width: 630.
 */
const defaultOGWidth = 7 * 9 * 10;
/**
 * MathJSLab logo factory in SVG format.
 * @param {*} style The `style` parameter must be a string defining the following classes:
 *                  - fillSymbol
 *                  - strokePanel
 *                  - fillPanel
 *                  - strokeTrace
 *                  - fillTrace
 * @param {*} width The logo is a square image. `width` defines the dimensions.
 * @param {*} precision Precision factor for coordinates.
 * @returns A string containing the MathJSLab logo in SVG format.
 */
export default function mathjslabLogoSvg(style, width = defaultOGWidth, precision = 2) {
    if (precision < 1) {
        precision = 1;
    }
    const coordinates = [
        /*  0 */ 1 / 45 /* stroke-width for traces */,
        /*  1 */ 3 / 5 /* Pi symbol font-size */,
        /*  2 */ 1 / 8 /* Expression font-size */,
        /*  3 */ 1 / 2 /* Half width coordinate */,
        /*  4 */ 16 / 35 /* Main circle panel radius */,
        /*  5 */ 1 / 3 /* Pi symbol x coordinate */,
        /*  6 */ 8 / 21 /* Pi symbol y coordinate */,
        /*  7 */ 11 / 35 /* Expression x coordinate */,
        /*  8 */ 24 / 35 /* Expression y coordinate */,
        /*  9 */ 1 / 5 /* X axis origin */,
        /* 10 */ 1 / 7,
        /* 11 */ 7 / 9 /* Y axis origin */,
        /* 12 */ 8 / 9,
        /* 13 */ 7 / 10,
        /* 14 */ 7 / 25,
        /* 15 */ 76 / 315,
        /* 16 */ 232 / 315,
        /* 17 */ 1 / 154,
        /* 18 */ 2 / 9 /* Graph curve */,
        /* 19 */ 13 / 21,
        /* 20 */ 1 / 3,
        /* 21 */ 13 / 30,
        /* 22 */ 2 / 5,
        /* 23 */ 1 / 2,
        /* 24 */ 8 / 15,
        /* 25 */ 11 / 21,
        /* 26 */ 3 / 5,
        /* 27 */ 2 / 3,
        /* 28 */ 4 / 5,
        /* 29 */ 13 / 15,
        /* 30 */ 11 / 45,
    ];
    const c = coordinates.map((value) => {
        if (value > 1 / (10 * precision)) {
            if (width > (defaultOGWidth * precision) / 10) {
                return Math.round(value * width);
            }
            else {
                return Math.round(value * 10 * width) / 10;
            }
        }
        else if (value > 1 / (100 * precision)) {
            if (width > defaultOGWidth) {
                return Math.round(value * width);
            }
            else if (width > (defaultOGWidth * precision) / 10) {
                return Math.round(value * 10 * width) / 10;
            }
            else {
                return Math.round(value * 100 * width) / 100;
            }
        }
        else {
            if (width > defaultOGWidth) {
                return Math.round(value * 10 * width) / 10;
            }
            else if (width > (defaultOGWidth * precision) / 10) {
                return Math.round(value * 100 * width) / 100;
            }
            else {
                return Math.round(value * 1000 * width) / 1000;
            }
        }
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}" viewBox="0 0 ${width} ${width}">
  <style>
${style}
  </style>
  <circle style="fill:none;stroke:none;stroke-opacity:1" cx="${c[3]}" cy="${c[3]}" r="${c[3]}"/>
  <circle class="strokePanel fillPanel" style="stroke-width:${c[0]}px" cx="${c[3]}" cy="${c[3]}" r="${c[4]}"/>
  <text class="fillSymbol" style="font-size:${c[1]}px;font-family:Symbol" x="${c[5]}" y="${c[6]}">p</text>
  <text class="fillSymbol" style="font-size:${c[2]}px;font-family:'Times New Roman';font-style:italic" x="${c[7]}" y="${c[8]}">ax+bx<tspan style="font-size:65%;baseline-shift:super">2</tspan>+cx<tspan style="font-size:65%;baseline-shift:super">3</tspan></text>
  <path class="strokeTrace" style="stroke-width:${c[0]}px;stroke-linecap:round" d="M ${c[9]},${c[10]} V ${c[11]} H ${c[12]}"/>
  <path class="strokeTrace" style="stroke-width:${c[0]}px" d="M ${c[9]},${c[13]} H ${c[14]} V ${c[11]}"/>
  <circle class="fillTrace" style="stroke:none" cx="${c[15]}" cy="${c[16]}" r="${c[17]}"/>
  <path class="strokeTrace" style="stroke-width:${c[0]}px;stroke-linecap:round" d="M ${c[9]},${c[13]} C ${c[18]},${c[19]} ${c[20]},${c[21]} ${c[22]},${c[21]} ${c[23]},${c[21]} ${c[24]},${c[25]} ${c[26]},${c[25]} ${c[27]},${c[25]} ${c[28]},${c[20]} ${c[29]},${c[30]}"/>
</svg>`;
}
