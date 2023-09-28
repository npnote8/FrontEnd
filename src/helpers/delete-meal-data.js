import axios from "axios";

const deleteMeal = async (id) => {
  let token = localStorage.getItem("token");

  try {
    await axios.delete(
      `http://localhost:5000/api/v1/meals/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    alert("An error happened");
    return err;
  }
};

export default deleteMeal;
