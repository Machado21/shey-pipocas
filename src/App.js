import "./styles/app.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const [navbarClick, setNavbarClick] = useState("");

  const divRef = useRef([]);
  //Create a function to return scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  //Attach the function to the window scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition < 40) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }, [scrollPosition]);

  //Reset the navbarClick state when the user clicks on a link
  useEffect(() => {
    scrollToDiv(navbarClick);
    setNavbarClick("");
  }, [navbarClick]);

  function scrollToDiv(props) {
    if (props !== "") {
      if (props === "Home") divRef.current[0]?.scrollIntoView({ behavior: "smooth" });
      else if (props === "Sobre") divRef.current[1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      else if (props === "Fotos") divRef.current[2]?.scrollIntoView({ behavior: "smooth", block: "center" });
      else if (props === "Contatos") divRef.current[3]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  return (
    <div className="App">
      <Header transparent={transparent} setNavbarClick={setNavbarClick} />
      <div
        className="Home"
        ref={(item) => {
          if (divRef.current.length === 0) {
            divRef.current.push(item);
          }
        }}
      >
        <h1>Home</h1>
        <img src="/images/logo-shey.jpeg" alt="logo da shey pipocas gourmet" />
      </div>
      <div
        className="Sobre"
        ref={(item) => {
          if (divRef.current.length === 1) {
            divRef.current.push(item);
          }
        }}
      >
        <h1>Sobre</h1>
        <img src="/images/logo-shey.jpeg" alt="logo da shey pipocas gourmet" />
      </div>
      <div
        className="Fotos"
        ref={(item) => {
          if (divRef.current.length === 2) {
            divRef.current.push(item);
          }
        }}
      >
        <h1>Fotos</h1>
        <img src="/images/logo-shey.jpeg" alt="logo da shey pipocas gourmet" />
      </div>
      <div
        className="Contatos"
        ref={(item) => {
          if (divRef.current.length === 3) {
            divRef.current.push(item);
          }
        }}
      >
        <h1>Contatos</h1>
        <img src="/images/logo-shey.jpeg" alt="logo da shey pipocas gourmet" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
