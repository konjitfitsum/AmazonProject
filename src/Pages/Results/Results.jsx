import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Results.module.css";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loder"; // Fixed import

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const res = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        setResults(res.data);
      } catch (err) {
        console.log("Error fetching products:", err);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, [categoryName]); // Added categoryName as a dependency

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
