import axios from "axios";

const postMeal = async (meal) => {
  let token = localStorage.getItem("token");

  try {
    const result = await axios.post(
      "http://localhost:5000/api/v1/meals",
      meal,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("result.data", result.data);

    return result.data;
  } catch (err) {
    return err;
  }
};

export default postMeal;
