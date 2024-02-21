import axios from "axios";
import React, { Children, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice.js";

const Global = ({ children }) => {
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
  return children;
};

export default Global;
