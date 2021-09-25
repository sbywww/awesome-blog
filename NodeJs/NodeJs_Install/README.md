# Node.js 설치하기 (Mac Os)

> Node.js 설치하는 방법 (Mac Os 기준)
설치 하는 방법에는 여러 가지가 있지만 그 중 두 가지 방법을 정리해보려고 한다.

### 1. Node.js 공식 홈페이지에서 LTS 버전으로 다운로드 받는다.  
공식 사이트 링크 : https://nodejs.org/ko/


### 2. 터미널을 이용하여 Node.js 설치한다. (권장)  

1. 첫 번째로 nvm(Node Version Manager)을 설치한다.
```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

2. 정상적으로 설치되었는지 확인해본다. 
```bash
nvm --version
```

3. 정상적으로 설치가 되었다면 Node.js를 설치한다.  
공식 사이트에서 LTS 버전을 확인한다.  
   (2021년 9월 22일 기준 LTS 버전 14.17.6)
   
```bash
nvm install v14.17.6
```

4. 최신의 버전을 설치하려면 다음과 같이 명령어를 실행하면 된다.
```bash
nvm install stable
```

5. 버전 목록을 확인하고 싶다면 다음과 같이 명령어를 실행하면 된다.
```bash
nvm ls-remote
```

6. 정상적으로 node.js가 설치되었는지 확인해보자.
```bash
node -v
```

7. 다른 버전을 사용하고 싶다면 다음과 같이 명령어를 사용하여 변경하면 된다.
```bash
nvm use v12.16.1
```

8. 다른 버전을 default로 사용하고 싶다면 다음과 같이 명령어를 사용하여 변경하면 된다.
```bash
nvm alias default v12.16.1
```

9. 필요없는 버전을 지우고 싶다면 원하는 버전으로 변경 후 삭제하려는 버전을 아래 명령어 처럼 입력하면 된다.
```bash
nvm use v12.16.1 (사용하고 싶은 버전)
nvm uninstall v13.11.0 (삭제하고 싶은 버전)
```

10. 추가적으로 yarn 까지 설치해보자.
```bash
npm install -g yarn
```

### 정리
가끔 nvm을 이용한 방법을 까먹어서 정리해보았다.


   

