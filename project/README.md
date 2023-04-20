## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

1. 타입스크립트의 기본 환경 구성

- [x] NPM 초기화 : npm init -y (package.json까지)
- [x] 타입스크립트 라이브러리 설치 : npm i typescript
- [x] 타입스크립트 설정 파일 생성 및 기본 값 추가 : tsconfig.json
- [x] 자바스크립트 파일을 타입스크립트 파일로 변환하기 : app.js->app.ts
- [x] `tsc` 명령어로 타입스크립트 컴파일 하기

2. 명시적인 `any` 선언하기

- `tsconfig.json`파일에 `noImplicitAny` 값을 `true`로 추가

### tsconfig.json

- allowJs: Js파일을 타입스크립트에서 인식해서 사용하겠다는 뜻
- target: tsc 설정 : 타입스크립트 파일을 js로 변환해줌
- outDir: 타입스크립트의 결과물이 어디에 들어갈 것인가?
- moduleResolution: promise 베이스 코드를 사용하기 위해 node 옵션을 넣어줌.
- include: 어떤 폴더 밑에 있는 파일들을 ts로 컴파일할 것인가?

### 메모

- // @ts-check : JSDoc -> VSC에서 js 파일을 ts처럼 사용할 수 있게 해 주는 명령어
- JS 독 : `/**` 하고나서 엔터 치면 return의 타입을 정의할 수 있다.
- 함수에 블럭 후 Ctrl + D 누르면 사용한 곳으로 바로 이동할 수 있음.
- 정확하게는, `JSDoc`는 자바스크립트 API 문서 생성기다. 자바스크립트 소스코드에 JSDoc 주석을 추가하면, API 설명하는 HTML 문서를 생성할 수 있다.
- npm run 뒤에 오는 것들은 package.json의 script에 정의된 키값들이다. ex) npm run build
- 타입스크립트 디버깅 : 에러 뒤에 나오는 에러코드를 이용하자. 또는 에러 메시지를 그대로 복사해서 구글링을 해보자.

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
