import { encrypt, decrypt } from "./AesUtil";

const post = {
    id: 1,
    title: "제목1",
    content: "내용1"
}

let en = encrypt(JSON.stringify(post));
console.log(en);

en = "bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY";
const de = decrypt(en);
console.log(JSON.parse(de));

