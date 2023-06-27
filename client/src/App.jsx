import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
// import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
