import { Routes, Route } from "react-router-dom";
import { Home } from "./home/pages/Home";
import { Reviews } from "./reviews/pages/Reviews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper-reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
