// JS 문자열 선언 방식
const foo = 'hello';


// TS 문자열 선언 
const str: string = 'hello';

// TS 숫자 
const num: number = 2;

// TS 배열
const arr: Array<number> = [1,2,3];
const heros: Array<string> = ['Captain', 'Thor', 'Hulk'];
const items: number[] = [1,2,3,4];

// TS 튜플 
let address: [string, number]= ['guro digital complex', 161];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };

let person: {name: string, age: number} = {
    name: 'capt',
    age: 1000
};

// TS 진위값
let show:boolean = true;