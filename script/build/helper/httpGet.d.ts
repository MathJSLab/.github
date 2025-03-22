import { URL } from 'node:url';
import http from 'node:http';
/**
 * Gets the `http` or `https` module according to the protocol in the `url`
 * and executes the GET method on the `url`.
 * @param url
 * @param callback
 * @returns
 */
declare const _default: (url: http.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest;
export default _default;
