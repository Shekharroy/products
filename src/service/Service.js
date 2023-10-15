
import axios from "axios";

export const getProductsData = (category, setProductData) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((error) => {
        alert(`Something went wrong `, error);
        console.log(`Something went wrong ${error}`);
      });
  }