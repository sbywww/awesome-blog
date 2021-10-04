package com.ssoop.blog;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public class AesUtilTest {

    ObjectMapper mapper = new ObjectMapper();

    @Test
    public void encryptTest() throws JsonProcessingException, InvalidAlgorithmParameterException, UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException {
        Post post = new Post(1, "제목1", "내용1");
        String json = mapper.writeValueAsString(post);
        String en = AesUtil.encryptAES(json);
        System.out.println(en);
    }

    @Test
    public void decryptTest() throws InvalidAlgorithmParameterException, UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException, JsonProcessingException {
        String en = "bzZ3s4AyfuvvgymTyzgTTPqOg/KtqBcmJjAO38JNjy1IAtRGNvg4CQ0yn+YUxGXY";
        String de = AesUtil.decryptAES(en);
        Post post = mapper.readValue(de, Post.class);
        System.out.println(post);
    }
}
