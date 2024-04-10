import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiNntspZ4YEgJQXoP3dNTD0727qYp8hTM",
    authDomain: "practice-708ec.firebaseapp.com",
    projectId: "practice-708ec",
    storageBucket: "practice-708ec.appspot.com",
    messagingSenderId: "490238241285",
    appId: "1:490238241285:web:8825e01bcf77bbe4f44a6c",
    databaseURL: "https://practice-708ec-default-rtdb.firebaseio.com",
  };

  export const app = initializeApp(firebaseConfig);