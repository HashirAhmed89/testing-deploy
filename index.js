import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCv_MUgxybHTDQTX5s-3jkDIvqyIMz5Ztg",
  authDomain: "testing-7c365.firebaseapp.com",
  projectId: "testing-7c365",
  storageBucket: "testing-7c365.firebasestorage.app",
  messagingSenderId: "483596584090",
  appId: "1:483596584090:web:b224e95aa3e8e599810b23",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("btn");
const email = document.getElementById("email");
const password = document.getElementById("password");

btn.addEventListener("click", () => {
  console.log(email.value, password.value);
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log(userCredential, "userCredential");
      // const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error, "error");
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
});
