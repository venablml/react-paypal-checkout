import {
  useLocation
} from "react-router-dom";
import React, {  useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


import axios from 'axios'
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const clientId = 'AStVxVYVevg9Opp0E0XVkUfOBKOvPJ9lh6psz2178uR8fiyzx9V6Tu8iceWMIvEo9QDuM-5a3EHizASm';

const getAccessToken = (authorizationCode) =>{
  const url = "https://api-m.sandbox.paypal.com/v1/oauth2/token"
  const clientSecret = 'EFzxa_5522GaPABkWP17u9yX3MAh8FHK_66orbNK1EOgwzEx0h6uGOmrSKG7vAc15KhDrTRJMjA8j9ar';
  const encodedData = window.btoa(clientId + ':' + clientSecret);
  
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', authorizationCode);

  return axios.post(url,params, {headers:{
    "Authorization" :"Basic " + encodedData  }})
}





const Checkout = () => {

  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null)

  let query = useQuery();
  const authorizationCode = query.get('code')
 
  const createOrder = (data, actions) => {
    return actions.order
        .create({
            purchase_units: [
                {
                    amount: {
                        value: 20.00,
                    },
                },
            ],
            payer:{
              payer_id: user.payer_id,
  
            }
        })
        .then((orderID) => {
           console.log("Order id ", orderID)
            return orderID;
        });
  }
  useEffect(() => {
    if(authorizationCode){
      console.log("Get access code")
      getAccessToken(authorizationCode).then(d => {
        console.log("data -", d.data)
        setAccessToken(d.data.access_token)
      })
    } 
   
  },[authorizationCode]);
  useEffect(() => { 
    const url ="https://api-m.sandbox.paypal.com/v1/identity/oauth2/userinfo?schema=paypalv1.1"
    if(accessToken !=null){
      console.log("Get user info now")
      axios.get(url, {headers:{
        "Authorization" : "Bearer " + accessToken,
        "Content-type": "application/json"
      }}).then(response =>{
        console.log("USer info = ", response.data)
        setUser(response.data)
      } )
    }
    
  },[accessToken]);
 
  
  let content = null
 
  
  if (user){
      content = 

<PayPalScriptProvider options={{ "client-id": "AStVxVYVevg9Opp0E0XVkUfOBKOvPJ9lh6psz2178uR8fiyzx9V6Tu8iceWMIvEo9QDuM-5a3EHizASm ",
"data-namespace": 'paypal_sdk' }}>
            <PayPalButtons style={{ layout: "horizontal" }}  createOrder={createOrder}/>
        </PayPalScriptProvider>
      
  }
  else {
    content = <div>Please log in</div>
  }
  return <main>{content}</main>
    
}

export default Checkout