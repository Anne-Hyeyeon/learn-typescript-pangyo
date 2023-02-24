
// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add():number {
    return 10
}

// 함수에 타입을 정의하는 방식
function final(a: number, b: number):number{
    return a + b;
}
final(10, 20);

// 10,20 뒤에 30, 40을 입력할 경우 바로 오류. TS가 해당 함수의 스펙을 바로 파악함.

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}
log('hello world');
