// 인터페이스

interface Dev {
    name: string;
    skill: string;
}
// interface Person {
//     name: string;
// }

class Person {
    name: string;
    skill: string;
}

let developer: Dev;
let person: Person;
// developer = person 에러 Dev에 속성이 두 개, Person  에는 하나밖에 없다. 
developer = new Person();