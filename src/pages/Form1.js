import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "../redux/UserSlice.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1.js";

const Form1 = () => {
  const [name, setName] = useState("");
  const [coins, setCoins] = useState("");

  const [mobile, setMobile] = useState("");

  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coins = 49;
    const res = await axios.post(
      "https://internship-backend-gjjh.onrender.com/update",
      {
        email: user?.email,
        name: name,
        coins: coins,
        mobile: mobile,
        linkedIn: linkedIn,
        gitHub: gitHub,
      }
    );
    console.log(res.data);
    navigate("/form2");
  };
  return (
    <div>
      <Navbar1 />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name: "1🪙"
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Enter Mobile: "15🪙"
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Enter your linkedIn: "3🪙"
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Enter your gitHub: "5🪙"
          <input
            type="text"
            value={gitHub}
            onChange={(e) => setGitHub(e.target.value)}
            required
          />
        </label>
        <br></br>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form1;
