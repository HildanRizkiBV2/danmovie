import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </div>
  );
};

export default App;