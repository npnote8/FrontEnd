import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
