import axios from "axios";

const updateMeal = async (id, newMeal) => {
  let token = localStorage.getItem("token");

  try {
    const result = await axios.patch(
      `http://localhost:5000/api/v1/meals/${id}`,
      newMeal,
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

export default updateMeal;
