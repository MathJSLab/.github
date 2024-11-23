import fs from 'node:fs';
import path from 'node:path';
import util from 'node:util';
import pngToIco from 'png-to-ico';
const defaultOutput = ['.', 'favicon.ico'];
export default async function (pngFiles, output = defaultOutput) {
    if (typeof pngFiles === 'string') {
        pngFiles = [pngFiles];
    }
    else if (!Array.isArray(pngFiles) || pngFiles.some((pathName) => typeof pathName !== 'string')) {
        throw new Error('invalid arguments:\r\r\npngFiles = ' + util.inspect(pngFiles, { compact: false, colors: true }));
    }
    if (output) {
        if (typeof output === 'string') {
            output = path.resolve(output);
        }
        else if (Array.isArray(output) && output.every((pathName) => typeof pathName === 'string')) {
            output = path.resolve(...output);
        }
        else if (typeof output === 'undefined' || output === null) {
            output = path.resolve(...defaultOutput);
        }
        else {
            throw new Error('invalid arguments:\noutput = ' + util.inspect(output, { compact: false, colors: true }));
        }
    }
    fs.writeFileSync(output, await pngToIco(pngFiles));
}
