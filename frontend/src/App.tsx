import { Routes, Route } from "react-router-dom";
import { Home } from "./home/pages/Home";
import { Reviews } from "./reviews/pages/Reviews";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper-reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
