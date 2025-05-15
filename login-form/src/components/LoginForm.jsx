import {useState} from 'react'
import './LoginForm.css'

export function LoginForm() {
  const [showPassword, setShowPassword] =  useState(true);

  function switchButton() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  return (
    <>
      <div>
        <input type="email" placeholder="Email" className="input" />
      </div>
      <div>
        <input
          type={showPassword ? "password" : "text"}
          placeholder="Password"
          className="input"
        />{" "}
        <button className="show-password-btn" onClick={switchButton}>
          {showPassword ? "Show Password" : "Hide Password"}
        </button>
      </div>
      <button className="btn">Login</button>
      <button className="btn">Sign Up</button>
    </>
  );
}