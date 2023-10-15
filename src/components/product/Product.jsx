import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import Buttons from "../buttons/Buttons";
import { getProductsData } from "../../service/Service";
import NoData from "../nodata/NoData";
import ProductDetails from "../productdetails/ProductDetails";

function Product() {
  const [productdata, setProductData] = useState([]);

  useEffect(() => {
    getProductsData("electronics", setProductData);
  }, []);

  return (
    <>
      <main className="MainSetion">
        <aside className="AsideCategoryList">
          <Buttons
            getProductsData={getProductsData}
            setProductData={setProductData}
          />
        </aside>
        <article className="ArticleProductsDetails">
          {productdata.length > 0 ? (
            <ProductDetails productdata={productdata}/>
          ) : (
            <NoData/>
          )}
        </article>
      </main>
    </>
  );
}

export default Product;
