import httpGet from './httpGet';
/**
 * Downloads the file and return as string.
 * @param url
 */
export default async function (url) {
    return new Promise((resolve, reject) => {
        console.log(`Downloading ${url} ...`);
        let result = '';
        httpGet(url, function (response) {
            response.on('data', (chunk) => {
                result += chunk;
            });
            response.on('end', () => {
                resolve(result);
            });
            response.on('error', (err) => {
                reject(err.message);
            });
        });
    });
}
