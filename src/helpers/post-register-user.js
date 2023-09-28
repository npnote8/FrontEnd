import axios from "axios";

const registerUser = async (userInformation) => {
  try {
    const result = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      userInformation
    );
    console.log("result.data", result.data.user);
    console.log("result.data", result.data.token);

    return result.data;
  } catch (err) {
    return err;
  }
};

export default registerUser;
