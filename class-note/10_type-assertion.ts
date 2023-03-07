// // 타입 단언 (type assertion)
// var a;
// a = 20;
// a = 'a';
// var b = a;
// 타입스크립트는 각 값들을 'string'으로 말하지 않도 알아요!

// (주로 돔 APi바꿀 때 사용)


// DOM API  조작

document.querySelector
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
    div.innerText // div가 null이 아니라는 걸 보장해야 함.
}
