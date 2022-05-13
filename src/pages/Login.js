import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postlogin } from "../services/services";
import "./login.css";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const [dataLogin, setDataLogin] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (dataLogin.email) {
      postlogin(dataLogin)
        .then((req) => {
          localStorage.setItem("access", req.data.access);
        })
        .then(() => {
          navigate("/shop");
        });
    }
  }, [dataLogin, navigate]);

  const onSubmit = (data) => {
    setDataLogin(data);
  };

  return (
    <div className="lg-container-login">
      <div className="container-login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-email">
            <label htmlFor="email">Ingrese su usuario</label>
            <input
              id="email"
              type="text"
              placeholder="admin@correo.com"
              {...register("email")}
            />
          </div>

          <div className="input-password">
            <label htmlFor="password">Ingrese su contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="xxxxxxxxx"
              {...register("password")}
            />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
