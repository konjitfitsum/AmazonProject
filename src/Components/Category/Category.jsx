import {} from "react";
import { categoryInfos } from "./catagoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./catagory.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((infos, i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Category;
