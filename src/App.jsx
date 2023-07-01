import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
