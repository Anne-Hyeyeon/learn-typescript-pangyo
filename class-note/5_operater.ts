// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

function logMessage(value: string | number) {
    console.log(value);
}
logMessage('hello');
logMessage(100);

// 유니언 타입의 특징
interface Employee {
    name: string;
    skill: string;
}

interface Human {
    name: string;
    age: number;
}

function askSomeone(someone: Employee | Human) {
    someone.name
}

askSomeone({name: 'John', skill: '개발'});
askSomeone({name: 'John', age: 30});



//  interSection

// function askSomeone(someone: Developer & Person) {
//     someone.age
//     someone.skill
//     someone.name
// }

