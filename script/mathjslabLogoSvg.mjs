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
const defaultWidth = 630;
export default function mathjslabLogoSvg(style, width = defaultWidth, precision = 2) {
    if (precision < 1) {
        precision = 1;
    }
    const coordinates = [
        /*  0 */ 1 / 2,
        /*  1 */ 13 / 630,
        /*  2 */ 19 / 42,
        /*  3 */ 3 / 5,
        /*  4 */ 71 / 210,
        /*  5 */ 47 / 126,
        /*  6 */ 83 / 630,
        /*  7 */ 103 / 315,
        /*  8 */ 24 / 35,
        /*  9 */ 4 / 21,
        /* 10 */ 1 / 7,
        /* 11 */ 487 / 630,
        /* 12 */ 8 / 9,
        /* 13 */ 41 / 210,
        /* 14 */ 29 / 42,
        /* 15 */ 29 / 105,
        /* 16 */ 74 / 315,
        /* 17 */ 11 / 15,
        /* 18 */ 2 / 315,
        /* 19 */ 62 / 315,
        /* 20 */ 29 / 126,
        /* 21 */ 13 / 21,
        /* 22 */ 29 / 90,
        /* 23 */ 19 / 45,
        /* 24 */ 128 / 315,
        /* 25 */ 53 / 126,
        /* 26 */ 103 / 210,
        /* 27 */ 44 / 105,
        /* 28 */ 8 / 15,
        /* 29 */ 11 / 21,
        /* 30 */ 379 / 630,
        /* 31 */ 211 / 315,
        /* 32 */ 521 / 630,
        /* 33 */ 94 / 315,
        /* 34 */ 13 / 15,
        /* 35 */ 17 / 70,
    ];
    const c = coordinates.map((value) => {
        if (value > 1 / (10 * precision)) {
            if (width > (defaultWidth * precision) / 10) {
                return Math.round(value * width);
            } else {
                return Math.round(value * 10 * width) / 10;
            }
        } else if (value > 1 / (100 * precision)) {
            if (width > defaultWidth) {
                return Math.round(value * width);
            } else if (width > (defaultWidth * precision) / 10) {
                return Math.round(value * 10 * width) / 10;
            } else {
                return Math.round(value * 100 * width) / 100;
            }
        } else {
            if (width > defaultWidth) {
                return Math.round(value * 10 * width) / 10;
            } else if (width > (defaultWidth * precision) / 10) {
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
  <circle style="fill:none;stroke:none;stroke-opacity:1" cx="${c[0]}" cy="${c[0]}" r="${c[0]}"/>
  <circle class="strokePanel fillPanel" style="stroke-width:${c[1]}px" cx="${c[0]}" cy="${c[0]}" r="${c[2]}"/>
  <text class="fillSymbol" style="font-size:${c[3]}px;font-family:Symbol" x="${c[4]}" y="${c[5]}">p</text>
  <text class="fillSymbol" style="font-size:${c[6]}px;font-family:'Times New Roman';font-style:italic" x="${c[7]}" y="${c[8]}">a+bx<tspan style="font-size:65%;baseline-shift:super">2</tspan>+cx<tspan style="font-size:65%;baseline-shift:super">3</tspan></text>
  <path class="strokeTrace" style="stroke-width:${c[1]}px;stroke-linecap:round" d="M ${c[9]},${c[10]} V ${c[11]} H ${c[12]}"/>
  <path class="strokeTrace" style="stroke-width:${c[1]}px" d="M ${c[13]},${c[14]} H ${c[15]} V ${c[11]}"/>
  <circle class="fillTrace" style="stroke:none" cx="${c[16]}" cy="${c[17]}" r="${c[18]}"/>
  <path class="strokeTrace" style="stroke-width:${c[1]}px;stroke-linecap:round" d="M ${c[19]},${c[14]} C ${c[20]},${c[21]} ${c[22]},${c[23]} ${c[24]},${c[25]} C ${c[26]},${c[27]} ${c[28]},${c[29]} ${c[30]},${c[29]} C ${c[31]},${c[29]} ${c[32]},${c[33]} ${c[34]},${c[35]}"/>
</svg>`;
}
