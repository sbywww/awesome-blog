# Spring Boot에서 LocalDate 처리하기

예전에 Java에서 날짜와 시간을 다루는 java.util.Date, java.util.Calendar 클래스 사용했지만
문제가 많이 있었습니다. 그래서 Java 1.8 버전에서 개선된 날짜와 시간 API를 제공합니다.

개선된 날짜와 시간 API `LocalDate`, `LocalDateTime` 을 Spring Boot에서 사용하는 방법을 알아보고자 합니다.

### 개발환경
> SpringBoot 2.5.5  
> Java 1.8


기본적으로 SpringBoot 2.0 이상에서는 자동으로 JSR 310 의존성이 포함되어 별도로 설정할 필요가 없습니다.



### 참고

https://d2.naver.com/helloworld/645609
