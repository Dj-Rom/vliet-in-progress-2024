import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import AuthPage from './pages/authPage/authPage';
import { useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { selecterInputWithAuthPage_login, selecterInputWithAuthPage_password, selecterSubmitAuth, submitLoginAndPasswordsCleanInput, afterSubmitLoginAndPasswords } from './redux/slices/slicesAuth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzdOGj687NZSpklCh34E_PX-MrsdLrCgc",
  authDomain: "van-vliet-transport.firebaseapp.com",
  projectId: "van-vliet-transport",
  storageBucket: "van-vliet-transport.appspot.com",
  messagingSenderId: "395200072831",
  appId: "1:395200072831:web:6d4481f192778751f3034a",
  measurementId: "G-PV4BMQDM9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const dispatch = useDispatch()
  const authPage_password = useSelector(selecterInputWithAuthPage_password)
  const authPage_login = useSelector(selecterInputWithAuthPage_login)
  const authPage_submit = useSelector(selecterSubmitAuth)


  function checkActionCode(login, password) {
    console.log(login);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(typeof (user.auth) === "object");
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    // dispatch(submitLoginAndPasswordsCleanInput())
    dispatch(afterSubmitLoginAndPasswords())
  }
  if (authPage_submit) { checkActionCode(authPage_login, authPage_password) }
  return (
    <AuthPage />
  )
}

export default App;
