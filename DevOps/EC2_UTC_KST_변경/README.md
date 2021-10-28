# EC2 시스템 시간 변경(UTC - KST)

> Amazon Linux 2 CentOS 기반으로 진행합니다.

UTC -> KST로 변경합니다.
```bash
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```

다음 명령어를 입력하면 정상적으로 변경된 것을 확인 할 수 있습니다.
```bash
date
```

