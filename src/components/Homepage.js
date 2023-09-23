import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import * as logoAnimation from "../welcome.json";
import style from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <Lottie
        animationData={logoAnimation}
        loop={true}
        style={{
          height: "300px",
          width: "300px",
          margin: "auto",
        }}
      />
      <h2>onTrack is the app to track calories daily</h2>
      <div className={style.wrapper}>
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className={style.buttonSignUp}
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className={style.buttonSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Homepage;
