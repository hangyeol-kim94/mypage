---
name: environment-setup
description: Windows에서 git/gh/npm 명령 실행 환경 설정 (PATH, 실행정책)
metadata:
  type: feedback
---

## git / gh
PowerShell PATH에 git과 gh가 없다. 항상 **Bash 도구**로 실행할 것.
- git: `/mingw64/bin/git` (Bash에서 `git` 사용 가능)
- gh: `/c/Program Files/GitHub CLI/gh.exe`

## npm / Node.js
PowerShell에서 npm을 사용하려면 두 가지가 필요하다:
1. PATH에 `C:\Program Files\nodejs` 추가 (영구 설정 완료 — [Environment]::SetEnvironmentVariable "User" scope)
2. PowerShell 실행정책 `RemoteSigned` (CurrentUser) 설정 완료

새 PowerShell 세션이면 바로 `npm` 사용 가능.
Claude 도구 내 PowerShell 배경 세션에서는 PATH가 초기화되므로:
```powershell
$env:PATH += ";C:\Program Files\nodejs"
```
를 명령 앞에 붙여야 한다.

**Why:** Windows PATH에 Node.js가 등록되지 않아 npm/npx 명령이 실패했음. 실행정책 미설정 시 npm.ps1 스크립트가 차단됨.

**How to apply:** git/gh는 Bash 도구로, npm은 PowerShell 도구로 실행. PowerShell 도구 호출 시 `$env:PATH += ";C:\Program Files\nodejs"` 선행.
