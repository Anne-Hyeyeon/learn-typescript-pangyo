// 타입 추론 기본 1

var a = 10;

function getB(b = 10){
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: "", // string으로 잘 추론함~!
    title: ""
}

// 타입 추론 기본 3
 
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
    value: ""
}

// Best Common Type
