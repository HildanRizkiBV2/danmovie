import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import popular from "./pages/Popular";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/populer" Component={popular} />
      </Routes>
    </div>
  );
};

export default App;
