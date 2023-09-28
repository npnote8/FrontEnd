import Lottie from "lottie-react";
import * as logoAnimation from "../welcome.json";
import style from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import * as homePageAnimation from "../dansing.json";

const Homepage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={style.container}>
      {!token ? (
        <Lottie
          animationData={logoAnimation}
          loop={true}
          style={{
            height: "300px",
            width: "300px",
            margin: "auto",
          }}
        />
      ) : (
        <Lottie
          animationData={homePageAnimation}
          loop={true}
          style={{
            height: "300px",
            width: "300px",
            margin: "auto",
          }}
        />
      )}

      {!token ? (
        <>
          <div className={style.container}>
            <h2> onTrack is the app to track calories </h2>
            <h4> Sign In to start tracking </h4>
            <div className={style.wrapper}>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className={style.buttonSignIn}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className={style.buttonSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={style.container}>
            <h4> You can start tracking calories</h4>
          </div>
          <div className={style.wrapper}>
            <button
              type="button"
              className={style.buttonShowMeals}
              onClick={() => navigate("/meals")}
            >
              Meals
            </button>
            <button
              type="button"
              className={style.buttonLogOut}
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Homepage;
