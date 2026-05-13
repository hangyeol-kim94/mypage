---
name: git-bash-required
description: Windows PowerShell에 git/gh가 PATH에 없어 Bash 도구로 실행해야 함
metadata:
  type: feedback
---

PowerShell PATH에 git과 gh가 등록되어 있지 않다. 항상 Bash 도구로 git/gh 명령을 실행할 것.

- git: `/mingw64/bin/git` (Bash에서 `git` 으로 사용 가능)
- gh: `/c/Program Files/GitHub CLI/gh.exe` (절대경로 또는 `GH="/c/Program Files/GitHub CLI/gh.exe"` 변수 사용)

**Why:** PowerShell 환경에서 git/gh가 PATH에 없어 명령이 실패함. Bash 도구는 MSYS2/Git Bash 환경을 사용해 git을 정상 인식함.

**How to apply:** git, gh 관련 명령은 항상 Bash 도구로 실행. 절대경로 사용 시 cd 대신 `cd "/c/..."` 형식 사용.
