enum Shoes {
    Nike,
    Adidas,
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0




enum Clothes {
    Nike = 'Nike',
    Adidas = 'Adidas',
}

const myClothes = Clothes.Nike;
console.log(myClothes); // Nike


// 예제

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답');
    }
    if(answer === Answer.No){
        console.log('오답');
    }
}

askQuestion(Answer.Yes);
// askQuestion('Yes');
// askQuestion('Y');