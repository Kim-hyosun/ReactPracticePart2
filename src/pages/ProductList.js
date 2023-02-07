
import HeadTitle from "../component/HeadTitle";
import ProductItem from "../component/ProductItem";

// import data from "../assets/DB/initialData.json"
// const { LushItems } = data;

import { setLushItems } from "../assets"; //주석대신 쓸수있음
function ProductList() {
  const LushItems = setLushItems(); //주석대신 쓸수있음
  
  return (
    <div>
      <HeadTitle
        title="제품리스트"
        description="러쉬의 대표적인 상품을 소개합니다.">
        <div>
          {LushItems.map((item) => 
            <ProductItem key={item.id} item={item} />
          )}
        </div>
      </HeadTitle>
    </div>
  );
}

export default ProductList;