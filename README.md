# https://joshua1988.github.io/ts/

# 타입스크립트 소개와 배경

1. 타입스크립트란?

- TypeScript is Typed Javasecipr at _Any Scale._
- 자바스크립트에 타입을 부여한 언어. 자바스크립트의 확장된 언어.
- 특징 -> 브라우저에서 실행하기 위해 컴파일 과정이 필요함.

2. 왜 타입스크립트가 좋은가?

1)  에러의 사전 방지 : 브라우저를 켜기 전에도 오류 확인이 가능하다.
2)  코드 가이드 및 자동 완성 : 개발 툴의 기능을 최대로 이용 가능하다. VSC의 경우 툴의 내부가 타입스크립트로 작성되어, 타입스크립트 개발에 최적화되어 있다.

# 타입스크립트 시작하기

1. 타입스크립트 프로젝트 시작하는 방법

- 컴파일(compile) : ts파일을 js파일로 변환하는 작업

```js
npm i typescript -g
```

- tsc(typescript compile)작업을 수행하기 위해 라이브러리를 설치.

2. 타입스크립트 설정 파일

- tsconfig.json을 이용해서 설정하기
- 프로젝트가 타입스크립트를 어떻게 이해할지에 대한 도움을 줄 수 있다.

```js
{
"compilerOptions" : {
   "allowJs" : true,
   "checkJs" : true,  // @ts-check 와 같은 기능
   "noImplicitAny" : true,  // 형식을 꼭 넣어 주어야 함
}
}
```

- 속성들은 ts 공식 홈페이지의 레퍼런스 문서에서 확인 후 적용할 수 있다.

* 깨알매모 : babel은 js 문법을 브라우저에도 출력되도록 변환해주는 역할을 한다.

# 타입스크립트 기초 - 변수와 함수 타입 정의하기

1. 기본 타입 - 문자열, 숫자, 배열

- TS에서 타입지정 하는 방법은 기본적으로 땡땡(:)

2. 기본 타입 - 튜플, 객체, 진위값

- 튜플 : 순서의 타입까지 정하는 것, 모든 인덱스의 타입이 정해져 있음

3. 함수 타입 - 파라미터, 반환값

```js
function final(a: number, b: number): number {
  return a + b;
}
```

4. 함수 타입 - 파라미터를 제한하는 특성

5. 함수 타입 - 옵셔널 파라미터

# 첫 번째 프로젝트 - 할 일 관리 애플리케이션

1. any, void 타입

- any : 모든 타입을 통칭함. (치트키)
- void : 반환값이 없음을 명시적으로 지정해줌.

2. return 함수의 비밀

```js
todoItems.filter((item) => item.done);
/*
return todoItems.filter(function(item) {
  if(item.done) return item;
})
*/
```

# 인터페이스

1. 함수 구조를 정의하는 인터페이스

- 프론트엔트 프로젝트 중 타입스크립트가 가장 빛을 발하는 시점이 바로 받아오는 API의 type를 정의해야 할 때다.
- 함수의 스펙(구조)까지 인터페이스를 통해 타입 지정 할 수 있다.

# 타입 별칭 (Type Aliases)

1. 타입 별칭 코드 예제

- interface를 사용해 객체의 property의 타입을 지정할 경우, 해당 타입의 설명에 interface ~ 라고만 나온다. 타입 별칭을 사용하면 객체의 형식과 모습이 다 나타난다.

2. 타입 별칭과 인터페이스의 차이점

- 타입 별칭이란? 말 그대로 별칭을 부여하는 것에 초점을 둬야 함. 새롭게 타입을 만들어내는 게 아님.

- VSCode 상 프리뷰 상태로 차이점을 확인할 수 있다. (type 의 프리뷰의 경우 해당 객체의 구조가 모두 나옴. interface 프리뷰에는 '타입이 이거입니다'라는 식으로 알려주기만 함.)

- 가장 큰 차이점 : 타입의 확장 가능/불가능 여부. 인터페이스는 확장이 가능하며 타입 별칭은 확장이 불가능하다.

- type보다는 interface 선언이 추천됨.

- software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

# 연산자를 이용한 타입 정의

1. Union Type

- 특정 타입 이상을 쓸 수 있게 만들어주는 것.

2. 유니온 타입의 장점

- 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정.

- 유니언 타입을 사용하면 타입 가드가 가능해진다.

3. 유니온 타입의 특징

- 인터페이스 등 구조체를 유니온 타입으로 사용할 경우, 보장된 속성에 대해서만 제공한다.

```js
// 유니언 타입의 특징
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.age;
}
```

4. 인터셉션 타입

- 인터섹션 : & 를 사용해서, 타입을 연결해준다.
- 유니언과 인터섹션의 차이? 함수 파라미터 타입에 유니언을 사용했을 경우, 파라미터는 여러 개의 인터페이스 중 하나의 속성만을 따를 수 있다. 인터섹션을 사용했을 경우 해당 인터페이스들이 가지고 있는 모든 타입 사용 가능함.

# 이넘

- 이넘 : 특정 값들의 집합을 의미하는 자료형.

1. 숫자형 이넘

- 목록에 항목이 하나씩 추가되면, 이넘 넘버가 0부터 시작해서 하나씩 +1 된다.
- 이넘 활용 사례 :

# 클래스

1. 클래스 소개

- 클래스의 역할: 인스턴스를 만들어줌. (틀)

```js
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

new Person(); // 생성되었습니다. -> constructor 안에 있는 내용 실행됨.
const hyeyeonkim = new Person("혜연", 30); // 변수에 생성된 객체 담기.

console.log(hyeyeonkim); // 클래스로 만들어진 객체가 뿅!
```

2. 자바스크립트 프로토타입의 활용 사례

- 프로토타입을 이용해 최상위 속성을 확인함으로서, Built-in JS API (JS Native API) 등을 사용할 수 있게 된다.
- 대표적인 예로 Object.keys(), Array.push

3. 타입스크립트의 클래스 문법

- 타입스크립트에서 클래스 문법을 사용하기 위해서는, 클래스 최 상단에 멤버 변수의 타입을 지정해야 한다.

# 제네릭

### 아래 함수의 문제점은 뭘까...? 분명히 같은 기능을 하고 있는데 왜 두 개나 있지?

```js
function logText(text: string) {
  console.log(text);
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText("a");
logNumber(10);
```

### 대안 : input에 대한 해결은 됐지만, 반환값이 해결되지 않음.

```js
function logText(text: string | number) {
  console.log(text);
  return text;
}

const a = logText("a"); // 이 경우 a의 타입은 string | number 타입
a.split(""); // 오류 : number가 들어오는 경우 split이 제공되지 않음.
```

### 제네릭 타입 활용

```js
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>() // 이 경우 text는 string이 된다.
str.split(''); // 오류 없음.

const login = logText<boolean>(true); // login은 boolean이 된다.

// logText("a");
// logText(10);
```

### 인터페이스에 제네릭 선언

```js
interface DropdownExample {
  value: string; // value 값은 언제든 바뀔 수 있음.
  selected: boolean;
}

const object: DropdownExample = {
  value: "abc",
  selected: false,
};

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const example: Dropdown<string> = {
  value: "ab",
  selected: false,
};
```

### 제네릭의 타입 제한

```js
// T[] : 제네릭 타입이 무엇인지 타입스크립트에게 일종의 힌트를 주는 것. (제네릭의 타입 제한??)

function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach((text) => console.log(text));
  return text;
}
```

### 제네릭 타입 제한 2 - 정의된 타입 이용하기

```js
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T):T {
    text.length;
    return text;
}

logTextLength('abac');

```

### 제네릭 타입 제한 3 - keyof (예약어)를 이용해서

```js
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
    return itemOption;
}
```

- ShoppingItem에 있는 타입 중 한 가지를 T의 타입으로 정한다. 라는 뜻!

# 두 번째 프로젝트 - 전화번호부 애플리케이션

1. 애플리케이션에 정의된 타입 설명 및 API 함수 타입 정의 힌트

```js
function fetchItems(): string[] {
  var items = ["a", "b", "c"];
  return items;
}

let result = fetchItems();
console.log(result); //  string이 나온다!
```

- 리턴 타입을 주지 않더라도, 타입스크립트는 타입의 형태를 통해 추론이 가능하다.

```js
function fetchItems(): string[] {
  var items = ["a", "b", "c"];
  return new Promis((resolve, reject) => {
    resolve(items);
  });
}
```

- 함수에서 Promise를 반환하게 되면, 타입스크립트는 Promise<unknown>으로 타입을 추론하게 된다.
- 따라서 그 Promise의 타입까지 정의해주면 된다.
- promise 안에서 resolve된 값이 반환 타입으로 들어가 있어야 하는데, 반환 타입과 실제 resolve된 값이 맞지 않으면 오류가 뜬다.

2. 클래스 선언부 타입 정의

- 클래스 내부에서 사용되는 메인 변수의 타입을 정의해주면 오류가 사라진다.
- constructor에는 클래스가 실행될 때 처음으로 실행되는 초기화 함수를 주로 넣어준다. constructor 에는 타입 정의를 따로 해주지 X

# 타입 추론

1. 타입 추론 : 타입스크립트가 코드를 해석해 나가는 동작.

```js
let a = 3;
```

- a에 대한 타입을 지정하지 않아도, 타입스크립트가 알아서 a의 타입을 number라고 추론함.

- 변수, 속성, 인자 기본 값, 함수 반환 값을 설정할 때 타입 추론이 일어남.

```js
function getB(b = 10) {
  var c = "hi";
  return b;
}
```

- 여기서 b = 10은 인자 기본 값임.

2. 인터페이스와 제네릭을 이용한 타입 추론 방식

- 타입스크립트는 제너릭 값까지 추론해서 타입을 정의해나간다.

```js
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: "", // string으로 잘 추론함~!
  title: "",
};
```

3. 복잡한 구조에서의 타입 추론 방식

- 타입이 확장되고 확장된 인터페이스에 또다시 제너릭이 있어도, 타입을 넘겨주어 사용이 가능하다.

```js
interface HyDropdown<T> {
  value: T;
  title: string;
}

interface HyDetailedDrop<K> extends Dropdown<K> {
  desc: string;
  tag: K;
}

var detailedItem: HyDetailedDrop<string> = {
  title: "",
  desc: "",
  tag: "",
  value: "",
};
```

# 타입 단언

- 타입의 값을 보장해주기

```js
var div = document.querySelector("div");
div?.innerText;
```

- 이 경우 div가 null이 아니라는 걸 보장해 주어야 한다.

- if 쓰기 or as 사용하기

# 타입 가드

1. 예제
   유니언 타입 복습 : 유니언 타입을 썼을 때, 일단 타입들의 공통 속성에만 접근할 수 있음! (겹치는 거)

```js
interface SmartDeveloper {
    name: string;
    skill:string;
}

interface Human {
    name:string;
    age:number;
}

function introduce(): SmartDeveloper | Human {
    return { name: 'Anne', age: 30, skill: 'dozing off'}
}

let anne = introduce();

if ((anne as SmartDeveloper).skill) {
    let skill = (anne as SmartDeveloper).skill;
    console.log(skill);
} else if ((anne as Human).age) {
    let age= (anne as Human).age;
    console.log(age);
}

```

- 이 경우, SmartDeveloper에만 있는 skill을 사용 가능하다.
- 타입의 범위를 줄여나갈 수 있음.
- 하지만 이 경우 코드 가독성이 많이 떨어지기 때문에, 타입 가드를 적용하는 게 좋다.

2. 타입 가드

```js
function isSmartDeveloper(target: SmartDeveloper | Human): target is SmartDeveloper {
return (target as SmartDeveloper).skill !== undefined;
}

if (isSmartDeveloper((anne))) {
    anne.skill
} else {
    anne.age
}
```

# 타입 호환 (Type Compatibility)

- 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미함.
- 오른 쪽에 있는 타입이 많은 속성을 가지거나 더 클 때 왼쪽과 호환이 된다.
- 구조적 타이핑 : interface, class같은 타입 별칭이 아닌 내부적으로 존재하고 있는 속성과 타입끼리 비교하는 것.
- 왼쪽에 있는 게 더 큰 거라는 사실 기억하자!
