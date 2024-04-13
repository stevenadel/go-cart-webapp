import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../reusables/Button";
import LoadingSpinner from "../reusables/LoadingSpinner";
import { axiosInstance } from "../../axios";

function ProfileInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState({});
  const [updateSucceeded, setUpdateSucceeded] = useState(false);
  const [updateFailed, setUpdateFailed] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  useEffect(() => {
    axiosInstance
      .get("/profile/", config)
      .then((response) => {
        const imageUrl = response.data.profile_photo;
        if (imageUrl) {
          response.data.profile_photo = import.meta.env.VITE_API_URL + imageUrl;
        } else {
          response.data.profile_photo = "profile-photo.jpg";
        }
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const onSubmit = async (userData) => {
    for (let field in userData) {
      if (userData[field] === "") {
        delete userData[field];
      }
    }

    const isEmpty = Object.keys(userData).length === 0;
    if (!isEmpty) {
      axiosInstance
        .patch("/profile/update/", userData, config)
        .then((response) => {
          setUpdateSucceeded(true);
        })
        .catch((error) => {
          setUpdateFailed(true);
        });
    }
  };

  if (Object.keys(user).length === 0) {
    return <LoadingSpinner color="brandYellow" />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3"
      >
        <img
          className="h-32 w-32 rounded-full my-5"
          src={user.profile_photo}
          alt="Profile"
        ></img>
        <div className="mt-2 mb-8 w-full">
          <h3 className="px-2 text-2xl font-bold text-navy-700 dark:text-white">
            {user.first_name} {user.last_name}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Username</p>
            <input
              {...register("username", {
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not be longer than 20 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Username must contain only alphanumeric characters",
                },
              })}
              className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            />
            {errors.username && (
              <p className=" text-red-600 text-xs">{errors.username.message}</p>
            )}
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Email</p>
            <input
              type="email"
              {...register("email", {
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            />
            {errors.email && (
              <p className=" text-red-600 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">First Name</p>
            <input
              {...register("first_name", {
                minLength: {
                  value: 5,
                  message: "Name must be at least 5 characters long",
                },
                maxLength: {
                  value: 10,
                  message: "Name must not be longer than 10 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Name must contain only letters",
                },
              })}
              className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            />
            {errors.first_name && (
              <p className=" text-red-600 text-xs">
                {errors.first_name.message}
              </p>
            )}
          </div>

          {/* <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Password</p>
            <input
              type="password"
              {...register("password", { pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/i, message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long" } })}
              className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            />
            {errors.password && (<p className=" text-red-600 text-xs">{errors.password.message}</p>)}
          </div> */}

          <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Last Name</p>
            <input
              {...register("last_name", {
                minLength: {
                  value: 5,
                  message: "Name must be at least 5 characters long",
                },
                maxLength: {
                  value: 10,
                  message: "Name must not be longer than 10 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Name must contain only letters",
                },
              })}
              className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            />
            {errors.last_name && (
              <p className=" text-red-600 text-xs">
                {errors.last_name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Address</p>
            <input
              {...register("address", {
                maxLength: {
                  value: 100,
                  message: "Address must not be longer than 100 characters",
                },
              })}
              className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            />
            {errors.address && (
              <p className=" text-red-600 text-xs">{errors.address.message}</p>
            )}
          </div>
        </div>
        <Button
          text="Update Info"
          bgColor="bg-brandBlue"
          textColor="text-white font-bold"
        ></Button>
      </form>
      {updateSucceeded && (
        <p className="mt-10 text-green-600">
          Profile information updated successfully.
        </p>
      )}
      {updateFailed && (
        <p className="mt-10 text-red-600">
          Profile information update failed. Please try again later.
        </p>
      )}
    </div>
  );
}

export default ProfileInfo;
