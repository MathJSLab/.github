import http from 'node:http';
import { HTMLElement, Options } from 'node-html-parser';
/**
 * Downloads an HTML file and parses it, returning an object of type
 * HTMLElement.
 * @param url
 * @param options
 */
declare const _default: (url: http.RequestOptions | string | URL, options?: Partial<Options>) => Promise<HTMLElement | void>;
export default _default;
