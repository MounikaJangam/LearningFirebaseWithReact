import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log(value);
      alert("Success");
    });
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
  }

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="Password"
        required
        placeholder="Enter your password"
      />
      <br />
      <button onClick={signupWithGoogle}>Sign With Google</button>
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
