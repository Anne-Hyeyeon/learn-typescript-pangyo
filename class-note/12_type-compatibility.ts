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


// 함수
const add = function(a: number) {

}

let sum = function(a: number, b: number) {

}
// sum 함수가 add 함수보다 더 크다..!!

// add = sum; 오류 
 
sum = add;

// 제네릭
interface Empty<T> {
    // ..
}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>