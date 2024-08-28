import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
import AboutUs from "./pages/AboutUs";
import NoMatch from "./pages/NoMatch";
import NotificationBar from "./components/NotificationBar/NotifcationBar";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Router>
        <NotificationBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
