export default function xmlHeader(encoding = 'UTF-8', standalone = 'yes') {
    return `<?xml version="1.0" encoding="${typeof encoding === 'string' && encoding ? encoding.toUpperCase() : 'UTF-8'}"${typeof standalone === 'string' ? ` standalone="${standalone}"` : ''}?>`;
}
