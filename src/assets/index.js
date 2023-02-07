import data from "./DB/initialData.json"
const { LushItems } = data;

export function setLushItems () {
  return LushItems;
};

//클릭한 제품의 번호와 러쉬 아이템 데이터 문서와 id와 일치하면 반환
export function getItemId (itemId) {
  return LushItems.find((lushItem)=> lushItem.id === itemId ); //()안에 있는것은 문자열로만 인식하기 때문에 json파일에 있는 아이디가 "0"형태로 작성되어있음
};

const WISHLIST_KEY = '러쉬_위시리스트';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}"); //json파일은 자바스크립트에서 쓸수있게 변환해줌

export const addWishlist = (itemId) => {
  wishlist[itemId] = LushItems[itemId].title;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist)); //객체형을 저장하려면 JSON.stringify 문자열 변환 필요
};

export const getWishlist = () => {
  return LushItems.filter((item)=>wishlist[item.id])
}

export const delWishlist = (itemId) => {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist)) //지우고난 다음의 기록을 남김
}


// export를 할때 function을 씌우지 않고 적으면 바로 실행됨