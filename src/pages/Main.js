import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice.js";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { button } from "react-bootstrap";
import { card } from "@material-ui/core";
import col from "react-bootstrap/col";
import { Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Navbar1 from "./Navbar1.js";
import row from "react-bootstrap/row";
import Internship from "./Intrenship.js";
const Main = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    aa();
  }, []);
  const aa = async () => {
    const res = await axios.get(
      "https://internship-backend-gjjh.onrender.com/internship",
      {}
    );
    // dispatch(setUser(res.data));
    setInternships(res.data);
  };
  return (
    <div>
      <Navbar1 />
      <div classname="row-wrapper">
        <row>
          {internships.map((internship) => (
            <Internship key={internship.id} internship={internship} />
          ))}
        </row>
      </div>
    </div>
  );
};

export default Main;
