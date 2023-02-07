import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getItemId, addWishlist, delWishlist } from "../assets";

function ProductPage() {
  const { itemId } = useParams();
  const item = getItemId(itemId); //클릭한 제품의 번호 데이터만 불러오는 함수
  const navigate = useNavigate();

  console.log(item);
  
  if (!item) {
    return <Navigate to="/products" />;
  }

  const handleAddWishlist = () => {
    // alert('저장되었습니다');
    addWishlist(item.id); //현재 클릭한 아이디를 해당함수로 넘겨줌
    navigate("/wishlist"); //위시리스트로 이동
  };
  // const handleDELWishlist = () => {
    // alert('삭제되었습니다');
    // delWishlist(item.id); //현재 클릭한 아이디를 해당함수로 넘겨줌
    // navigate("/wishlist"); //위시리스트로 이동
  // };

  const path = process.env.PUBLIC_URL;
  return (
    <section>
      <h2>{item.title}</h2>
      <img src={`${path}/images/${item.imgUrl}.jpg`} alt={item.title} />
      <br />
      <button onClick={handleAddWishlist}>위시리스트 저장</button> 
      {/* <button onClick={handleDELWishlist}>위시리스트 삭제</button>  */}
    </section>
  );
}

export default ProductPage;