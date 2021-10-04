# AES 암호화 복호화 (Spring & NodeJs 완벽 호환)

## AES 256 암호화
평문 데이터를 암호화하는 방법이며, 비밀키 하나로 데이터를 암호화 또는 복호화하는 방법입니다.  
모든 소스는 [깃허브]()에 있습니다.

## Spring & Java

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


   

