import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loder";
import Product from "../../Components/Product/Product";
function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    // fetch product data from the API
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // set loading to false even if there's an error to avoid infinite loading state
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} />}
    </LayOut>
  );
}

export default ProductDetail;
