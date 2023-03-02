class WebDeveloper {
    private name: string; // 이 클래스 안에서만 사용하겠다는 걸 의미
    public age: number; // 전역으로 사용!
    readonly log: string; // 접근만 가능하고(읽기 전용), 변경은 할 수 없음.

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}