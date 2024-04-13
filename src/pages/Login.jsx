import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "../components/reusables/Heading";
import { axiosInstance } from "../axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);

  const onSubmit = (data) => {
    axiosInstance
      .post("/login/", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        setLoginFailed(true);
      });
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Heading title="Sign in to your account" />
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username must not be longer than 20 characters long",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Username must contain only alphanumeric characters",
              },
            })}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Username"
          />
          {errors.username && (
            <p className="mt-2 text-red-600 text-xs">
              {errors.username.message}
            </p>
          )}
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/i,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long",
              },
            })}
            className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Password"
          />
          {errors.password && (
            <p className="mt-2 text-red-600 text-xs">
              {errors.password.message}
            </p>
          )}
          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-semibold rounded-md text-white bg-secondary focus:outline-none active:bg-red-700 transition duration-500 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
        {loginFailed && (
          <p className="mt-10 text-red-600">
            Login failed. Please check your credentials.
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
