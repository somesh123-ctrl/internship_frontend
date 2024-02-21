import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice.js";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";

import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Navbar1 = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    aa();
  }, []);
  const aa = async () => {
    const res = await axios.post(
      "https://internship-backend-gjjh.onrender.com/getData",
      {
        email: user?.email,
      }
    );
    dispatch(setUser(res.data));
  };
  return (
    <div>
      {" "}
      <div className="head">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link ">
                    <div className="cart">
                      <span>🪙{user?.coins}</span>
                    </div>
                  </NavLink>
                </li>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <NavDropdown title={user?.name} id="basic-nav-dropdown">
                      <LinkContainer to="/users">
                        <NavDropdown.Item>🤵My Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item>📴Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar1;
