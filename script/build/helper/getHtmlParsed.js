import HTMLParser from 'node-html-parser';
import httpGet from './httpGet';
/**
 * Downloads an HTML file and parses it, returning an object of type
 * HTMLElement.
 * @param url
 * @param options
 */
export default async (url, options) => {
    return new Promise((resolve, reject) => {
        console.log(`Downloading ${url} ...`);
        httpGet(url, function (response) {
            let page = '';
            response.on('data', (data) => {
                page += data;
            });
            response.on('end', () => {
                console.log(`Downloading ${url} done.`);
                console.log(`Parsing ${url} ...`);
                const root = HTMLParser.parse(page, options);
                console.log(`Parsing ${url} done.`);
                resolve(root);
            });
            response.on('error', (err) => {
                console.error(`getHtmlParsed: ${err.message}`);
                reject(err.message);
            });
        });
    });
};
