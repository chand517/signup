import { auth } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var createAccountButton =document.getElementById('btn1')
createAccountButton.addEventListener('click',()=>{

    console.log('chal gya');
    var userEmail= document.getElementById('email').value
    var userPassword= document.getElementById('pass').value
    console.log(userEmail , userPassword);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    if(user.emailverified===true){
      alert('welcome')
      window.location.href='dashboard.html'
      // ...

    }else{
      alert('please   email verified ')
    }
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})