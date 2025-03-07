import { Routes, Route } from "react-router-dom";
import Exercise1 from "./Screens/Exercise1";
import Exercise2 from "./Screens/Exercise2";
import Home from "./Screens/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise1" element={<Exercise1 />} />
      <Route path="/exercise2" element={<Exercise2 />} />
    </Routes>
  );
}

export default AppRoutes;
