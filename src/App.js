import "./App.css";
import { useState } from "react";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Static from "./components/Static/Static";
import abtDark from "./images/image-about-dark.jpg";
import abtLight from "./images/image-about-light.jpg";
import { data } from "./components/Hero/data";

function App() {
  const [id, setId] = useState(1);
  const displayContent = data.find((entry) => entry.id === id);
  const onPrev = () => {
    if (id === 1) {
      setId(3);
    } else {
      setId(id - 1);
    }
  };

  const onNext = () => {
    if (id === 3) {
      setId(1);
    } else {
      setId(id + 1);
    }
  };

  return (
    <Body>
      <Navbar />
      <Hero onNext={onNext} onPrev={onPrev} img={displayContent.img} />
      <Intro title={displayContent.title} content={displayContent.content} />
      <Static img={abtDark} />
      <About />
      <Static img={abtLight} />
    </Body>
  );
}

export default App;
