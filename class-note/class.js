class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

new Person(); // 생성되었습니다. -> constructor 안에 있는 내용 실행됨.
const hyeyeonkim = new Person("혜연", 30);
