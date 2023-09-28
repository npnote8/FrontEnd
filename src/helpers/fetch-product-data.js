import axios from "axios";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  const configuration = {
    url: "http://localhost:5000/api/v1/calories",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const result = await axios(configuration);
    console.log("result.data.nutritionFacts", result.data.nutritionFacts);
    console.log(
      "result.data.nutritionFacts.id[0]",
      result.data.nutritionFacts[0]._id
    );
    return result.data.nutritionFacts;
  } catch (err) {
    return err;
  }
};

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  useEffect(() => {
    setLoadingProducts(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingProducts(false);
      });
  }, []);

  return { products, loadingProducts };
};

export default useProductData;
