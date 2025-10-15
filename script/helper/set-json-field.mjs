#!/usr/bin/env node
/**
 * set-json-field.mjs
 *
 * Usage:
 * node script/helper/set-json-field.mjs file.json field=value
 * node script/helper/set-json-field.mjs file.json "obj.sub.value=123"
 * node script/helper/set-json-field.mjs file.json "enabled=true"
 *
 * Example:
 * node script/helper/set-json-field.mjs package.json version=1.0.5
 */
import fs from 'fs';
import path from 'path';

/* -------------------- Helper function: nested access ----------------- */
function setNestedProperty(obj, keyPath, value) {
    const keys = keyPath.split('.');
    let target = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (typeof target[k] !== 'object' || target[k] === null) target[k] = {};
        target = target[k];
    }
    target[keys[keys.length - 1]] = value;
}
/* ------------------------ Command line input ------------------------- */
const [, , fileArg, assignment] = process.argv;
if (!fileArg || !assignment) {
    console.error('Usage: node script/helper/set-json-field.mjs <file.json> field=value');
    process.exit(1);
}
const [keyPath, rawValue] = assignment.split('=');
if (!keyPath || rawValue === undefined) {
    console.error('Error: Argument must be in the format field=value');
    process.exit(1);
}
/* ----------------------- Reads the JSON file ------------------------- */
const filePath = path.resolve(fileArg);
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
/* --------------------- Try to interpret the value -------------------- */
let parsedValue = rawValue;
/* Attempts to automatically convert valid numbers, booleans, nulls, and JSON */
if (rawValue === 'true') parsedValue = true;
else if (rawValue === 'false') parsedValue = false;
else if (rawValue === 'null') parsedValue = null;
else if (!isNaN(rawValue) && rawValue.trim() !== '') parsedValue = Number(rawValue);
else if ((rawValue.startsWith('{') && rawValue.endsWith('}')) || (rawValue.startsWith('[') && rawValue.endsWith(']'))) {
    try {
        parsedValue = JSON.parse(rawValue);
    } catch {}
}
/* -------------------- Apply the modification -------------------- */
setNestedProperty(data, keyPath, parsedValue);
/* ----------------- Save the modified JSON file ------------------ */
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`✅ ${fileArg}: field '${keyPath}' updated to`, parsedValue);
