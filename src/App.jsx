import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import popular from "./pages/Popular";
import Search from "./pages/Search";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/populer" Component={popular} />
        <Route path="/search" Component={Search} />
      </Routes>
    </div>
  );
};

export default App;
