import * as crypto from "crypto";
const ivKey = Buffer.from([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]); // 16byte
const alg = "AES-256-CBC";
const masterKey = "mk4JSJVoOD5YJL7hi0evw8VHQ7kDKi2R";

export const encrypt = (text: string) => {
    const cipher = crypto.createCipheriv(alg, masterKey, ivKey);
    cipher.setAutoPadding(false);
    let encrypted = cipher.update(pkcs7Pad(text), undefined, "base64");
    encrypted += cipher.final("base64");
    return encrypted;
};

export const decrypt = (text: string) => {
    const decipher = crypto.createDecipheriv(alg, masterKey, ivKey);
    decipher.setAutoPadding(false);
    let decrypted = decipher.update(text, "base64", "utf8");
    decrypted += decipher.final("utf8");
    return pkcs7Unpad(decrypted);
};

const pkcs7Pad = (params: string) => {
    const buffer = Buffer.from(params, "utf8");
    const bytes = new Uint8Array(buffer.length);
    let i = buffer.length;
    while (i--) {
        bytes[i] = buffer[i];
    }

    return Buffer.from(pad(bytes));
};

const pkcs7Unpad = (params: string) => {
    const buffer = Buffer.from(params, "utf8");
    const bytes = new Uint8Array(buffer.length);
    let i = buffer.length;
    while (i--) {
        bytes[i] = buffer[i];
    }
    const result = Buffer.from(unpad(bytes));
    return result.toString("utf8");
};

// pkcs7 unpad
const unpad = (padded: Uint8Array) => {
    return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
};

// pkcs7 pad
const pad = (plaintext: Uint8Array) => {
    const padding = PADDING[plaintext.byteLength % 16 || 0];
    const result = new Uint8Array(plaintext.byteLength + padding.length);

    result.set(plaintext);
    result.set(padding, plaintext.byteLength);

    return result;
};

// pre-define the padding values
const PADDING = [
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],

    [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],

    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],

    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],

    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],

    [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],

    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],

    [9, 9, 9, 9, 9, 9, 9, 9, 9],

    [8, 8, 8, 8, 8, 8, 8, 8],

    [7, 7, 7, 7, 7, 7, 7],

    [6, 6, 6, 6, 6, 6],

    [5, 5, 5, 5, 5],

    [4, 4, 4, 4],

    [3, 3, 3],

    [2, 2],

    [1],
];
