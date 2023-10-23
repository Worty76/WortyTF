import { Routes, Route } from "react-router-dom";
import Appbar from "./layouts/Appbar";
// eslint-disable-next-line
import Footer from "./layouts/Footer";
import Index from "./pages/GetStarted/index";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion/Discussion";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/Profile/index";
import "./App.css";
import MidMans from "./pages/MidMans/index";
import Events from "./pages/Events/index";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Appbar />
      {/* Body */}
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/midmans" element={<MidMans />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/discussions/:id" element={<Discussion />} />
      </Routes>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
