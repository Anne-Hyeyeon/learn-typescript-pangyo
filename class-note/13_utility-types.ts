interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type shoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

// interface UpdateProduct {
//     //속성들을 모두 옵셔널로 넣으려면 어떻게 해야 할까? 기존에 정의된 타입을 다시 정의하며 옵션으로 바꾸는 게 맞는 방법일까?
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>;

// 3. 특정 상품 정보를 업데이트 (갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial

// #1
interface UserProfileUpdate {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
}

// #2
type UserProfileUpdate = {
    [p in 'username', 'email', 'profilePhotoUrl]: Userprofile[p]

}

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfileUpdate[p]
}

// #4. .subset
type Subset<T> = {
    [p in keyof T]?: T[p]
}