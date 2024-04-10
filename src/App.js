// import { getDatabase, ref, set } from 'firebase/database';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from './firebase';
import SignupPage from './Pages/Signup';
import SigninPage from './Pages/Signin';
import './App.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';

// const db = getDatabase(app)
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  // const signUpUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "mounikaj404@gmail.com",
  //     "Mounika@123"
  //   ).then((value) => console.log(value));
  // };

  // const putData = () => {
  //   set(ref(db, 'user/mounika'), {
  //     id: 1,
  //     name: "Mounika Jangam",
  //     age: 24,
  //   });
  // };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("your are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
  return (
    <div className="App">
      {/* <h1>Firebase with React</h1> */}
      {/* <button onClick={putData}>Put Data</button> */}
      {/* <button onClick={signUpUser}>Create User</button> */}
      <SignupPage />
      <SigninPage />
    </div>
  );
}

  return (
    <div className= "App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default App;
