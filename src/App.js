import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-[100%] h-[100vh]">
          <ScaleLoader color="#040c2c" />
        </div>
      ) : (
        <div>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <div className="relative">
            <LandingPage />
            <About />

            <Experiences />
            <Projects />
            <Blogs />
            <ContactMe />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
