import axios from "axios";
import { useState, useEffect } from "react";

const fetchMeals = async () => {
  let token = localStorage.getItem("token");

  console.log("token", token);
  const configuration = {
    url: "http://localhost:5000/api/v1/meals",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const result = await axios(configuration);
    console.log("result.data.meals", result.data.meals);
    console.log("result.data.meals", result.data.meals[0]);

    return result.data.meals;
  } catch (err) {
    return err;
  }
};

const useMealsData = () => {
  const [meals, setMeals] = useState([]);
  const [loadingMeals, setLoadingMeals] = useState(false);

  useEffect(() => {
    setLoadingMeals(true);
    fetchMeals()
      .then((data) => {
        setMeals(data);
        setLoadingMeals(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingMeals(false);
      });
  }, []);

  let total = 0;
  const arrayMeals = { meals };

  for (let i = 0; i < arrayMeals.meals.length; i++) {
    total += arrayMeals.meals[i].totalCalories;
  }

  console.log("total", total);

  return { meals, loadingMeals, total };
};

export default useMealsData;
