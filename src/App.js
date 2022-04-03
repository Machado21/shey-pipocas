import "./styles/reset.css";
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
        <img
          src="/images/home-popcorn.jpg"
          alt="logo da shey pipocas gourmet"
          title="Credit: Photo by Yulia Khlebnikova at https://unsplash.com/photos/iuwMdNq0-s4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
        />
        <h1>Pipocas Gourmet para toda família</h1>
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
        <div className="images">
          <img src="/images/popcorn-nutella.jpg" alt="logo da shey pipocas gourmet" />
          <img src="/images/logo-popcorn.jpg" alt="logo da shey pipocas gourmet" />
          <img src="/images/bags.png" alt="logo da shey pipocas gourmet" />
          <img src="/images/bags-2.png" alt="logo da shey pipocas gourmet" />
          <img src="/images/bags-funny.png" alt="logo da shey pipocas gourmet" />
          <img src="/images/bags-small.png" alt="logo da shey pipocas gourmet" />
        </div>
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
      <Footer setNavbarClick={setNavbarClick} />
    </div>
  );
};

export default App;
//layout example https://www.bingingwithbabish.com/#top
