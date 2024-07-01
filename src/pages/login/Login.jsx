import React from "react";
import loginImg from "../../assets/login__img.png";
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
const login = [{ title: "john32", year: "87654321" }];

const Login = () => {
  return (
    <div>
      <section className="login">
        <div className="container">
          <div className="login__style">
            <img src={loginImg} alt="loginImg" />
            <form className="login__content">
              <Stack spacing={2} sx={{ width: 300 }}>
                <h4 className="login__content__text">UserName</h4>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  disableClearable
                  options={login.map((option) => option?.title)}
                  renderInput={(params) => (
                    <TextField {...params} label="Username" />
                  )}
                />
                <h4 className="login__content__text">Password</h4>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={login.map((option) => option?.year)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Password"
                      InputProps={{
                        ...params.InputProps,
                        type: "password",
                      }}
                    />
                  )}
                />
                <Button
                  endDecorator={<IoIosArrowRoundForward />}
                  color="success"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
