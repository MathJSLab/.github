
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

global.console.log(`Running ${__filename} ...`);
const defaultConfigFile = 'download.config.json'
if (process.argv.length < 3) {
    process.argv.push(defaultConfigFile);
}
if (!path.isAbsolute(process.argv[2])) {
    process.argv[2] = path.resolve(process.argv[2]);
}
global.console.warn(`Downloading files specified in ${process.argv[2]} ...`);
const downloadConfig = {};
try {
    fs.accessSync(process.argv[2], fs.constants.R_OK);
    Object.assign(downloadConfig, JSON.parse(fs.readFileSync(process.argv[2], 'utf-8')));
} catch (err) {
    err.message = `cannot load and parse configuration file at ${process.argv[2]}\n${err.message}`;
    throw err;
}
async function spawnCurl(src, dest) {
    return new Promise((resolve, reject) => {
        const curl = spawn('curl', ['-k', '-o', dest, src]);
        curl.on('exit', (code) => {
            if (code === 0) {
                console.log(`File downloaded to ${dest}`);
                resolve(code);
            } else {
                console.error(`curl process exited with code ${code}`);
                reject(code);
            }
        });
    });
}
Promise.all(downloadConfig.files.map(async (file) => {
    if (!path.isAbsolute(file.dest)) {
        file.dest = path.resolve(file.dest);
    }
    fs.mkdirSync(path.dirname(file.dest), { recursive: true });
    return spawnCurl(file.src, file.dest);
})).then(_result => {
    global.console.warn(`Downloading files specified in ${process.argv[2]} done.`);
    global.console.log(`Running ${__filename} done.\r\n`);
});
