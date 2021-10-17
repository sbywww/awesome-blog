# SVN 명령어 정리

**svn 사용할 때가 발생하여 Mac 기준으로 명령어를 정리하려고 합니다.  
svn 설치 (Mac 기준) HomeBrew가 설치되어 있다는 가정하에 진행한다.**

```bash
$ brew update
$ brew list // subversion 이 있는지 확인
$ brew info subversion // 정보 확인

$ brew install subversion
$ svn --version
```

* checkout (원격 저장소에서 최신 버전의 소스코드를 최초로 받아오는 것)

```bash
$ svn checkout svn://127.0.0.1/RepositroyName
```

* import (비어있는 원격 저장소에 처음으로 파일 업로드시 사용)

```bash
$ svn import project svn://127.0.0.1/RepositoryName/trunk
```

* export (버전 관리 파일들을 뺀 파일들만 추출)

```bash
$ svn export svn://127.0.0.1/RepositoryName
``` 

* update (원격 저장소에 있는 최신 버전으로 업데이트)

```bash
$ svn update 
```

* add (버전 관리 파일에 없는 새로운 파일 등록)

```bash
$ svn add file.ext 
```

* commit (로컬 저장소에 변경된 사항을 원격 저장소로 전송)

```bash
$ svn commit -m "messages"
```

* status (저장소 상태 - A: 추가, C: 충돌, D: 삭제, M: 수정, G: 병합)

```bash
$ svn status
```

* revert (로컬 저장소를 이전 상태로 변경)

```bash
$ svn revert .
```