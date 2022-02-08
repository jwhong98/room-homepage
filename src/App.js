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
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  const [id, setId] = useState(1);
  const [menuShown, setMenuShown] = useState(false);

  const showMenuHandler = () => {
    setMenuShown(true);
  };

  const closeMenuHandler = () => {
    setMenuShown(false);
  };
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

  const imgSrc =
    window.innerWidth >= 1440
      ? displayContent.desktopImg
      : displayContent.mobileImg;

  console.log(window.innerWidth);

  return (
    <Body>
      {menuShown && <MobileMenu onClose={closeMenuHandler} />}
      <Navbar onShowMenu={showMenuHandler} />
      <Hero onNext={onNext} onPrev={onPrev} img={imgSrc} />
      <Intro title={displayContent.title} content={displayContent.content} />
      <Static img={abtDark} />
      <About />
      <Static img={abtLight} />
    </Body>
  );
}

export default App;
