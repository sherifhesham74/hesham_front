import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../css/Navs.css";
import { Link, NavLink } from "react-router-dom";

// import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Navs = () => {
  function getAuthToken() {
    return localStorage.getItem("authToken");
  }
  const token = getAuthToken();
  function removeAuthToken() {
    localStorage.removeItem("authToken");
  }
  function handleClick() {
    removeAuthToken();
    window.location.reload();
  }

  return (
    <Navbar bg="light" expand="lg" sticky="top" fixed="top">
      <Container>
        <NavLink className="nav-link" to="/">
          <Navbar.Brand href="#home" className="logoo">
            {" "}       
            <div class="loader">
//             <img src="./logoo.png" class="car"
//                 width="102"
//                 height="40"/>
              <span className="name p-2 logo-name">  هشام سلطان | المحامي بالنقض</span>

            </div>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              الرئيسية 
            </NavLink>
            <NavLink className="nav-link" to="/cars">
              تشريعات
            </NavLink>
            <NavLink className="nav-link" to="/accessories">
              مبادئ و أحكام
            </NavLink>
            {/* <NavLink className="nav-link" to="/schools">
              SCHOOLS
            </NavLink>
            <NavLink className="nav-link" to="/maintenance">
              MAINTENANCE
            </NavLink> */}
          </Nav>
          <Nav>
            {!token && (
              <NavLink id="lastnav" to="/login">
                <i class="fas fa-user-circle"></i>
              </NavLink>
            )}
          </Nav>
          {/* <Nav>
            <a class="nav-item nav-link" href="/mycart">
              <i class="fas fa-cart-plus fs-4"></i>
            </a>
          </Nav> */}

          {/* <Nav>
            <NavLink to="/cart">
              <span className="cart-icon relative">
                <BsCart3 />
                <span className="cart-counter absolute -top-3 -right-3 text-xs bg-orange-600 font-medium rounded-full w-5 h-5 flex justify-center items-center z-[1]"></span>
              </span>
            </NavLink>
          </Nav> */}
          {token && (
            <NavLink NavLink onClick={handleClick} className="nav-link" to="/">
              <i class="fas fa-sign-out-alt"></i>
            </NavLink>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
