import httpGet from './httpGet';

/**
 * Downloads the file and return as string.
 * @param url
 */
export default async function (url: string): Promise<string | void> {
    return new Promise((resolve: (value?: string | void) => void, reject: (reason?: any) => void) => {
        console.log(`Downloading ${url} ...`);
        let result = '';
        httpGet(url, function (response) {
            response.on('data', (chunk: string) => {
                result += chunk;
            });
            response.on('end', () => {
                resolve(result);
            });
            response.on('error', (err: Error) => {
                reject(err.message);
            });
        });
    });
}
