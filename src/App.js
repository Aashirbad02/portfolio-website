import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  return (
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
  );
}

export default App;
