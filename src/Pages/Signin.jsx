import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const siginUser = () => {
    signInWithEmailAndPassword(auth, email,password).then((value) => {
        console.log(value);
        alert('Success');
    }).catch((err) => console.log(err));
  };

  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label>Enter your email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter you email"
      />
      <label>Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter you password"
      />
      <button onClick={siginUser}>Sign In</button>
    </div>
  );
};

export default SigninPage;
