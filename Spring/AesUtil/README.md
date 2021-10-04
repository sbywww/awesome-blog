# AES 암호화 복호화 (Spring & NodeJs 완벽 호환)

## AES 256 암호화
평문 데이터를 암호화하는 방법이며, 비밀키 하나로 데이터를 암호화 또는 복호화하는 방법입니다.  
모든 소스는 [깃허브](https://github.com/ssoop-yoon/awesome-blog/tree/main/Spring/AesUtil) 에 있습니다.

## Spring & Java

```java
package com.ssoop.blog;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class AesUtil {
    public static byte[] ivBytes = { 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 };

    public static String Alg = "AES/CBC/PKCS5Padding";

    private static final String MASTER_KEY = "mk4JSJVoOD5YJL7hi0evw8VHQ7kDKi2R";

    public static String encrypt(String text, String masterKey)
            throws UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException,
            IllegalBlockSizeException, BadPaddingException, InvalidAlgorithmParameterException {
        if (text == null || text.length() == 0) {
            return text;
        }
        Cipher cipher = Cipher.getInstance(Alg);
        SecretKeySpec keySpec = new SecretKeySpec(masterKey.getBytes(), "AES");
        IvParameterSpec ivParamSpec = new IvParameterSpec(ivBytes);
        cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivParamSpec);

        byte[] encrypted = cipher.doFinal(text.getBytes(StandardCharsets.UTF_8));
        return Base64.getEncoder().encodeToString(encrypted);
    }

    public static String decrypt(String s, String masterKey)
            throws UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException,
            IllegalBlockSizeException, BadPaddingException, InvalidAlgorithmParameterException {
        if (s == null || s.length() == 0) {
            return s;
        }
        Cipher cipher = Cipher.getInstance(Alg);
        SecretKeySpec keySpec = new SecretKeySpec(masterKey.getBytes(), "AES");
        IvParameterSpec ivParamSpec = new IvParameterSpec(ivBytes);
        cipher.init(Cipher.DECRYPT_MODE, keySpec, ivParamSpec);

        byte[] decodedBytes = Base64.getDecoder().decode(s);
        byte[] decrypted = cipher.doFinal(decodedBytes);
        return new String(decrypted, StandardCharsets.UTF_8);
    }
}
```

### 암호화
```java
Post post = new Post(1, "제목1", "내용1");
String json = mapper.writeValueAsString(post);
String en = AesUtil.encryptAES(json);
```

```
암호화 전
{id=1, title='제목1', content='내용1'}

암호화 후
bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY
```

### 복호화
```java
String en = "bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY";
String de = AesUtil.decryptAES(en);
Post post = mapper.readValue(de, Post.class);
```

```
복호화 전
bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY

복호화 후
{id=1, title='제목1', content='내용1'}
```


## NodeJs & TypeScript
```TypeScript
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
```

### 암호화
```TypeScript
const post = {
    id: 1,
    title: "제목1",
    content: "내용1"
}

let en = encrypt(JSON.stringify(post));
console.log(en);
```

```
암호화 전
{id=1, title='제목1', content='내용1'}

암호화 후
bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY
```

### 복호화
```TypeScript
en = "bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY";
const de = decrypt(en);
console.log(JSON.parse(de));
```

```
복호화 전
bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY

복호화 후
{id=1, title='제목1', content='내용1'}
```


### 정리
비밀키가 동일하다면, Java로 암호화한 데이터를 NodeJs(TypeScript)로 복호화 할 수 있습니다.


   

