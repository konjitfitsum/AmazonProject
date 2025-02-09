// import {} from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./product.module.css";
// import { Link } from "react-router-dom";
// function ProductCard({ product, flex, renderDesc }) {
//   const { image, title, id, rating, price, description } = product;
//   console.log(product);
//   return (
//     <div
//       className={`${classes.card__container} ${
//         flex ? classes.product__flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} />
//           {/* rating counter */}
//           <small>{rating.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }
// export default ProductCard;

import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product || {};
  console.log(product);

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title || "Product Image"} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          {rating ? (
            <>
              <Rating value={rating.rate} precision={0.1} />
              {/* rating counter */}
              <small>{rating.count}</small>
            </>
          ) : (
            <p>No ratings available</p>
          )}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
