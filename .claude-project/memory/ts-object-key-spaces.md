---
name: ts-object-key-spaces
description: TypeScript 객체 키에 공백이 포함되면 반드시 따옴표로 감싸야 함
metadata:
  type: feedback
---

TypeScript/JavaScript에서 공백이 포함된 객체 키는 따옴표 없이 쓰면 파싱 오류가 난다.

```ts
// ❌ 오류
const obj = { 광고 플랫폼: [...] };

// ✅ 정상
const obj = { "광고 플랫폼": [...] };
```

**Why:** 빌드 시 "Unexpected token `ident`" 오류 발생. 한글+공백 조합의 키에서 자주 발생.

**How to apply:** 한글 또는 특수문자가 포함된 객체 키 작성 시 항상 따옴표로 감쌀 것.
