import "./assets/css/App.css"
import React, { useState } from "react"
import background from "./assets/images/waves.png"
import logo from "./assets/images/logo.svg"
import useWindowDimensions from "./utils/windowDimensions"

function App() {
  const { width } = useWindowDimensions()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isError, setError] = useState("")

  const onSubmit = () => {
    if (email === "") {
      setError("Email is required")
    } else if (password === "") {
      setError("Password is required")
    } else {
      if (email === "Test" && password === "Test1234!") {
        return alert("Login Successful")
      } else {
        setError("Your credentials are wrong")
      }
    }
  }

  const onInputChanged = (e) => {
    setError("")
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  return (
    <div className="app-background flex justify-center items-center">
      <div
        className="bg-no-repeat bg-contain bg-bottom fixed top-0 left-0 right-0 bottom-0 opacity-5 z-0"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <div
        className={
          width < 768
            ? "h-screen w-full flex flex-col justify-center items-center z-10"
            : "h-screen w-full flex flex-col justify-start items-start z-10"
        }
      >
        <img src={logo} alt="logo" className="h-8 m-5" />
        <div
          className={
            width < 768
              ? "flex justify-center items-end w-full"
              : "flex-1 flex justify-center items-center w-full"
          }
        >
          <div
            className={
              width < 768
                ? "bg-white rounded-md p-14 mx-4 mt-5 flex flex-col items-center w-full"
                : "bg-white rounded-md p-14 flex flex-col items-center card-styled"
            }
          >
            <h1 className="text-3xl font-bold">Welcome</h1>
            <h4 className="mt-2 mb-5">Log in your CASEOS account!</h4>
            {isError !== "" && (
              <div className="rounded p-5 flex flex-row error-message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-white text-base">
                  <span className="font-bold">Please Try Again.</span>
                  {"\n"}
                  {isError}
                </span>
              </div>
            )}
            <div className="w-full mt-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xs mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 text-sm focus:outline-none focus:shadow-outline"
                  name="email"
                  type="text"
                  placeholder="Type email here"
                  onChange={onInputChanged}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xs mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 text-sm focus:outline-none focus:shadow-outline"
                  name="password"
                  type="text"
                  placeholder="Minimum 8 characters"
                  onChange={onInputChanged}
                />
              </div>
              <button
                className="w-full bordered button-bg-color text-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => onSubmit()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
