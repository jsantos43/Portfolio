import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./pages/Main/Main.jsx";
import Achievements from "./pages/Achievements/Achievements.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import SocialBar from "./components/SocialBar/SocialBar.jsx";
import EmailBar from "./components/EmailBar/EmailBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useSize from "./hooks/useSize.jsx";

function App() {
  const [menuMode, setMenuMode] = useState(false);
  const { width } = useSize();

  useEffect(() => {
    if (menuMode && width <= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuMode, width]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar menuMode={menuMode} setMenuMode={setMenuMode} />
        <SocialBar />
        <EmailBar />

        <Routes>
          <Route path="/" element={<Main menuMode={menuMode} />} />
          <Route
            path="/achievements"
            element={<Achievements menuMode={menuMode} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
