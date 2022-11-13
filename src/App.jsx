import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Sections/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
