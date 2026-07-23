import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import ForEmployers from "./pages/ForEmployers";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/find-jobs" element={<FindJobs />} />

        <Route path="/for-employers" element={<ForEmployers />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
