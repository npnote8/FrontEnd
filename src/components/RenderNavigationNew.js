import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Protected from "./Protected";
import Homepage from "./Homepage";
// import registerUser from "../helpers/post-register-user";

import Profile from "./Profile";
import NutritionFacts from "./NutritionFacts";
import Meals from "./Meals";
import { Login } from "./Login";
import Signup from "./Signup";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={token}>
              <Profile />
            </Protected>
          }
        />
        <Route path="/facts" element={<NutritionFacts />} />

        <Route
          path="/meals"
          element={
            <Protected isLoggedIn={token}>
              <Meals />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
