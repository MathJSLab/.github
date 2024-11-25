
const fs = require('node:fs');
const path = require('node:path');
const { exec } = require('node:child_process');
const defaultConfigFile = 'download.config.json'
if (process.argv.length < 3) {
    process.argv.push(defaultConfigFile);
}
if (!path.isAbsolute(process.argv[2])) {
    process.argv[2] = path.resolve(process.argv[2]);
}
const downloadConfig = {};
try {
    fs.accessSync(process.argv[2], fs.constants.R_OK);
    Object.assign(downloadConfig, JSON.parse(fs.readFileSync(process.argv[2], 'utf-8')));
} catch (err) {
    err.message = `cannot load and parse configuration file at ${process.argv[2]}\n${err.message}`;
    throw err;
}
Promise.all(downloadConfig.files.map(async (file) => {
    if (!path.isAbsolute(file.dest)) {
        file.dest = path.resolve(file.dest);
    }
    fs.mkdirSync(path.dirname(file.dest), { recursive: true });
    exec(`curl -k -o ${file.dest} ${file.src}`, (err, stdout, stderr) => {
        if (err) {
            err.message = `error executing curl: ${err.message}`;
            throw err;
        }
        if (stderr) {
            console.error(stderr);
        }
        console.log(stdout);
    });
}));
