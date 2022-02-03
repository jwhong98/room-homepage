import "./App.css";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Static from "./components/Static/Static";
import abtDark from "./images/image-about-dark.jpg";
import abtLight from "./images/image-about-light.jpg";

function App() {
  return (
    <Body>
      <Navbar />
      <Hero />
      <Intro />
      <Static img={abtDark} />
      <About />
      <Static img={abtLight} />
    </Body>
  );
}

export default App;
