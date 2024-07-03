import React, { useEffect } from "react";
import loginImg from "../../assets/login__img.png";
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { IoIosArrowRoundForward } from "react-icons/io";

const login = [{ title: "john32", year: "87654321" }];

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div>
      <section className="login">
        <div className="container">
          <div className="login__style">
            <img src={loginImg} alt="loginImg" />
            <form onSubmit={handleLogin} className="login__content">
              <input
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="login__content__input"
                name="username"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="login__content__input"
                name="password"
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
