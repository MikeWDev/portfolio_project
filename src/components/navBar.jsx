import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import HeroPage from "../pages/heroPage";

function NavBar() {
  const [stickyClass, setStickyClass] = useState("");

  // useEffect(() => {
  //   const heroEl = document.querySelectorAll(".hero-section");

  //   const obs = new IntersectionObserver(
  //     function (entiers) {
  //       const ent = entiers[0];
  //       console.log(ent);
  //       if (!ent.isIntersecting) {
  //         setStickyClass("sticky");
  //       }
  //       if (ent.isIntersecting) {
  //         setStickyClass("");
  //       }
  //     },
  //     {
  //       root: null,
  //       threshold: 0,
  //       rootMargin: "-90px",
  //     }
  //   );
  //   obs.observe(heroEl);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 600 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  //SCROLLING LOGIC

  return (
    <>
      {/* navhidden */}
      <div className="nav-box">
        <header className={`navbar ${stickyClass}`}>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="hero" duration={1000} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" duration={1000} offset={-50} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="rp" duration={1000} smooth={true}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
          <div className="img-box">
            <Link to="hero" duration={1000} smooth={true}>
              <img src={logo} className="logo-img" alt="Developer's logo" />
            </Link>
          </div>
          <div className="contact-me-box">
            <Link to="ctaction" smooth={true} duration={1000}>
              Contact me
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBar;
