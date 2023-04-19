type Heroes = "Hulk" | "Capt" | "Thor"; // 문자열을 유니온으로 받는 타입

type HeroAges = { [K in Heroes]: number }; // K는 일종의 타입 변수

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};
