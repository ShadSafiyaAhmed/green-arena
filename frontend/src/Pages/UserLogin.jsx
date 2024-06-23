import React from "react";
import { FaGoogle } from "react-icons/fa";

const UserLogin = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
      style={{ backgroundImage: "url('/fcbStadium.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mt-24">
        {" "}
        {/* Adjusted margin-top */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <a
              href="forgot"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
        <div className="text-center my-4">
          <p className="text-gray-600">or</p>
        </div>
        <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center focus:outline-none focus:shadow-outline">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-600">Not registered yet?</p>
          <a
            href="signup"
            className="text-blue-500 hover:text-blue-800 font-bold"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
