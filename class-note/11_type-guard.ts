interface SmartDeveloper {
    name: string;
    skill:string;
}

interface Human {
    name:string;
    age:number;
}

function introduce(): SmartDeveloper | Human {
    return { name: 'Anne', age: 30, skill: 'dozing off'}
}

let anne = introduce();

if ((anne as SmartDeveloper).skill) {
    let skill = (anne as SmartDeveloper).skill;
    console.log(skill);
} else if ((anne as Human).age) {
    let age= (anne as Human).age;
    console.log(age);
}

// 타입 가드 정의
function isSmartDeveloper(target: SmartDeveloper | Human): target is SmartDeveloper {
return (target as SmartDeveloper).skill !== undefined;
}

if (isSmartDeveloper((anne))) {
    anne.skill
} else {
    anne.age
}

