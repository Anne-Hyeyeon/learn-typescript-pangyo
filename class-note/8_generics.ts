// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('하이');
// logText(true);


function logText<T>(text: T):T {
    console.log(text);
    return text;
}
logText<string>('하이');


// 인터페이스에 제네릭을 선언하는 방법
interface DropdownExample {
    value: string; // value 값은 언제든 바뀔 수 있음.
    selected: boolean;
}

const object: DropdownExample = {
    value: 'abc',  
    selected: false
}


interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const example: Dropdown<string> = {
    value: 'ab',
    selected: false,
}


// 제네릭의 타입 제한

// T[] : 제네릭 타입이 무엇인지 타입스크립트에게 일종의 힌트를 주는 것. (제네릭의 타입 제한??)

// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach((text) => console.log(text));
//     return text;
// }


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T):T {
    text.length;
    return text;
}

logTextLength('abac');


// 제네릭 타입 제한 3 - keyof (예약어)를 이용해서
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
    return itemOption;
}
