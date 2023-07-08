import React, { useState } from "react";

const LoginForm = ({ setToken }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        if (json.success) {
          setLoginData({
            email: "",
            password: "",
          });
          sessionStorage.setItem("secret-token-7k@zR", json.token);
          setToken(json.token);
        } else {
          setMessage(json.message);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div className="lg:w-4/6 mx-auto py-28 min-h-screen">
      <h1 className="text-white text-xl md:text-2xl text-center mb-8">
        Admin Login
      </h1>

      <p className="text-white text-center text-base mb-4">{message}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="">
          <input
            value={loginData.email}
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
            className="w-full text-base md:text-lg mb-5 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={loginData.password}
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
            className="text-base mt-4 md:text-lg w-full mb-5 md:mb-0 text-white bg-transparent border border-dark-grey rounded-lg p-3"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-gold mt-4 text-base md:text-lg border-2 border-white rounded-3xl py-2 px-16"
        >
          {loading ? "Submitting..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
