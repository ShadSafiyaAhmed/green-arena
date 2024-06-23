import React from "react";

const UserLogin = () => {
  return (
    
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/fcbStadium.jpg')" }}
    >
      {/* Overlay div to fade out the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login form container */}
      <div className="relative z-10 bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <form aria-labelledby="login-heading">
          <h2 id="login-heading" className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <div className="mb-6 text-center">
            <a
              className="text-sm text-black hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-6 flex items-center justify-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign in with Google
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center">
            <a
              className="text-sm text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              Not registered yet? Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
