import { useForm } from 'react-hook-form';
import Heading from '../components/reusables/Heading';
import axios from "axios";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('shipping_address', data.shipping_address);
    formData.append('profile_photo', data.profile_photo[0]); 
    const url = import.meta.env.VITE_API_URL + "/register/";
    axios
      .post(url, formData)
      .then((response) => {
        console.log(response.data)

      })
      .catch((error) => {
        console.log("Login failed:", error.response.data);
      });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Heading title="Sign up to create a new account" />
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", { required: "Username is required", minLength: { value: 5, message: "Username must be at least 5 characters long" }, maxLength: { value: 20, message: "Username must not be longer than 20 characters" }, pattern: { value: /^[a-zA-Z0-9]+$/, message: "Username must contain only alphanumeric characters" } })}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Username"
          />
          {errors.username && (<p className=" text-red-500 text-xs">{errors.username.message}</p>)}

          <input
            {...register("first_name", { required: "Name is required", minLength: { value: 5, message: "Name must be at least 5 characters long" }, maxLength: { value: 10, message: "Name must not be longer than 10 characters" }, pattern: { value: /^[a-zA-Z]+$/, message: "Name must contain only letters" } })}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="First Name"
          />
          {errors.firstName && (<p className=" text-red-500 text-xs">{errors.firstName.message}</p>)}

          <input
            {...register("last_name", { required: "Name is required", minLength: { value: 5, message: "Name must be at least 5 characters long" }, maxLength: { value: 10, message: "Name must not be longer than 10 characters" }, pattern: { value: /^[a-zA-Z]+$/, message: "Name must contain only letters" } })}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Last Name"
          />
          {errors.lastName && (<p className=" text-red-500 text-xs">{errors.lastName.message}</p>)}

          <input
            type="email"
            {...register("email", { required: "Email is required", pattern: { value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: "Please enter a valid email address" } })}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Email"
          />
          {errors.email && (<p className=" text-red-500 text-xs">{errors.email.message}</p>)}

          <input
            type="password"
            {...register("password", { required: "Password is required", pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/i, message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long" } })}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Password"
          />
          {errors.password && (<p className=" text-red-500 text-xs">{errors.password.message}</p>)}

          <input
            {...register("shipping_address", { maxLength: { value: 100, message: "Address must not be longer than 100 characters" } })}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Shipping Address"
          />
          {errors.address && (<p className=" text-red-500 text-xs">{errors.address.message}</p>)}

          <input
            type="file"
            accept="image/*"
            alt="Profile image to upload"
            {...register("profile_photo")}
            className="my-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-brandBlue focus:z-10 sm:text-sm sm:leading-5"
          />

          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary focus:outline-none active:bg-secondary transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
