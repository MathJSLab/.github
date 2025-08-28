import path from 'node:path';
import fs from 'node:fs';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { Resvg } from '@resvg/resvg-js';

export default async (src: string, sizes: number[] = [16, 32, 48, 64, 128, 256]) => {
    const ext = path.extname(src).toLowerCase();
    let pngBuffers: Buffer[];
    if (ext === '.svg') {
        // Uses Resvg (no warnings).
        const svg = fs.readFileSync(src, 'utf8');
        pngBuffers = sizes.map((size) => {
            const resvg = new Resvg(svg, {
                fitTo: { mode: 'width', value: size },
            });
            return resvg.render().asPng();
        });
    } else {
        // Use Sharp (good for PNG, JPG etc.).
        pngBuffers = await Promise.all(sizes.map((size) => sharp(src).resize(size, size).png().toBuffer()));
    }
    return pngToIco(pngBuffers);
};
