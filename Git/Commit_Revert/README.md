# 원격저장소에 올라간 Commit Revert 하기

commit을 했을 경우 다음과 같이 처리하여 되돌릴 수 있다.

```bash
$ git reset {commit-id}
```

이미 Push까지 진행하여 git에 반영된 상태일 경우 다음과 같이 처리하여 되돌릴 수 있다.

```bash
$ git reset --hard HEAD^
$ git push -f origin master
```

# git 로그 확인 방법


```bash
$ git reflog
```