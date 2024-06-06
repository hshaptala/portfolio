import "./styles/main.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

const Layout = () => {
  const location = useLocation();
  const [isProjectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    setIsProjectPage(location.pathname.startsWith("/project"));
  }, [location]);

  return (
    <>
      <Navbar isProjectPage={isProjectPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
