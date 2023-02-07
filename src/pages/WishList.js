import { useEffect, useState } from "react";
import { getWishlist, delWishlist } from "../assets";
import ProductItem from "../component/ProductItem";

function WishList() {
  const [product, setProduct] = useState([]);
 
  const handleDELWishlist = (delitem) => {
    delWishlist(delitem);
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  }

  useEffect(() => {
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  }, []);

  return (
    <div>
      <h2>WISHLIST</h2>
      {product.length === 0 ? (
        <h4>위시리스트가 비어있습니다.</h4>) : (
          <ul>
            {
              product.map((item) => <li key={item.id}>
                                       <ProductItem item={item} />
                                        <button onClick={()=>delWishlist(item.id)}>위시리스트에서 삭제</button>
                                    </li>
              )
            }
          </ul>
         )}
    </div>
  );
}

export default WishList;