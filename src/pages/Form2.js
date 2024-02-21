import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice.js";
import { useNavigate } from "react-router-dom";
import Global from "./Global.js";
import Navbar1 from "./Navbar1.js";
const Form2 = () => {
  const { user } = useSelector((state) => state.user);
  const [type, setType] = useState("");

  const [school, setSchool] = useState("");

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coins = 63;
    const res = await axios.post(
      "https://internship-backend-gjjh.onrender.com/update",
      {
        email: user?.email,
        type: type,
        coins: coins,
        school: school,
        start: start,
        end: end,
      }
    );
    console.log(res.data);
    navigate("/main");
  };
  return (
    <div>
      <Navbar1 />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your type "school/college": "5🪙"
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Enter school/college name: "5🪙"
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Enter your start: "2🪙"
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Enter your end: "2🪙"
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            required
          />
        </label>
        <br></br>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form2;
