import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Search from "./pages/Search";
import Forecast from "./pages/Forecast";
import About from "./pages/About";

function App() {  
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
<Route path="/forecast/:city" element={<Forecast />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;