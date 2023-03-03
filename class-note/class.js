// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// 아래에 있는 코드와 완전히 같음.

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
