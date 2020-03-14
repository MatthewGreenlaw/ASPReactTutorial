const camelReg = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

export default function Calendar(obj) {
    for (const key in obj) {
        let keySubs = key.match(camelReg);
        keySubs[0] = keySubs[0].toLowerCase();
        const camelKey = keySubs.join('');
        this[camelKey] = obj[key];
    };
};