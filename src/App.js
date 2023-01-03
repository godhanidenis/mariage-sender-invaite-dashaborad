import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardContent from "./Components/Dashboard";
import People from "./Components/People";
import Cards from "./Components/Cards";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DashboardContent />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
