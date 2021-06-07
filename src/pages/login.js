
import React, {  useEffect } from 'react';



const loginWithPaypal = () => {
  window.paypal.use( ['login'], login => {
    login.render ({
      "appid":"AStVxVYVevg9Opp0E0XVkUfOBKOvPJ9lh6psz2178uR8fiyzx9V6Tu8iceWMIvEo9QDuM-5a3EHizASm",
      "authend":"sandbox",
      "scopes":"openid profile email address",
      "containerid":"lippButton",
      "responseType":"code",
      "locale":"en-us",
      "buttonType":"LWP",
      "buttonShape":"pill",
      "buttonSize":"lg",
      "fullPage":"true",
      "returnurl":"https://venablml.github.io/react-paypal-checkout/"
    })
  })
  console.log("Login with paypal")
}


const Login = () => {
  useEffect(() => {
    loginWithPaypal();
  });
  return  (
    <div>
      <span id='lippButton'></span>
    </div>
   )
}

export default Login
  

