import "./styles/reset.css";
import "./styles/app.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollUp, setScrollUp] = useState(40);
  const [navbarClick, setNavbarClick] = useState("");
  const [showNav, setShowNav] = useState(true);

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
    if (scrollPosition > 40) {
      if (scrollPosition - scrollUp >= 0) {
        if (scrollPosition > scrollUp) {
          setScrollUp(scrollPosition);
        }
        if (showNav) setShowNav(false);
      } else if (scrollPosition - scrollUp < -160) {
        setScrollUp(scrollPosition);
        setShowNav(true);
      }
    } else {
      setShowNav(true);
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
      else if (props === "Menu")
        divRef.current[1]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      else if (props === "Fotos")
        divRef.current[2]?.scrollIntoView({
          behavior: "smooth",
        });
      else if (props === "Contatos")
        divRef.current[3]?.scrollIntoView({
          behavior: "smooth",
        });
    }
  }
  return (
    <div className="App">
      <Header showNav={showNav} setNavbarClick={setNavbarClick} />
      <div
        className="Home"
        ref={(item) => {
          if (divRef.current.length === 0) {
            divRef.current.push(item);
          }
        }}
      >
        {/* <img
          src="/images/home-popcorn.jpg"
          alt="logo da shey pipocas gourmet"
          title="Credit: Photo by Yulia Khlebnikova at https://unsplash.com/photos/iuwMdNq0-s4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
        /> */}
        <img src="/images/removed-nutella.jpg" alt="logo da shey pipocas gourmet" />

        <h1>Pipocas Gourmet para toda família</h1>
      </div>
      <div
        className="Menu"
        ref={(item) => {
          if (divRef.current.length === 1) {
            divRef.current.push(item);
          }
        }}
      >
        <section className="menu__section">
          <Menu />
        </section>
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
        ref={(item) => {
          if (divRef.current.length === 3) {
            divRef.current.push(item);
          }
        }}
      >
        <Footer setNavbarClick={setNavbarClick} />
      </div>
    </div>
  );
};

export default App;
//layout example https://www.bingingwithbabish.com/#top
