import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="NavbarSection">
        <div className="container">
          <section className="LogoSection"><h2>E-Commerce</h2> </section>
          <section className="MenuSection">
            <a href="#"> Home </a>
            <a href="#"> About </a>
            <a href="#"> Products </a>
            <a href="#"> Services </a>
            <a href="#"> Contacts </a>
          </section>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
