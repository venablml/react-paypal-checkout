import axios from 'axios'

const subscriptionUrl = "https://api-m.sandbox.paypal.com/v1/billing/subscriptions"
const planId = "P-76F46997MD275952DMC7AHGI"
const payload = {
  "plan_id": planId,
  "start_time": "2021-06-10T15:32:00Z",
  "subscriber": {
    "name": {
      "given_name": "John",
      "surname": "Doe"
    },
    "email_address": "customer@example.com",
    "shipping_address": {
      "name": {
        "full_name": "John Doe"
      },
      "address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "Building 17",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "application_context": {
    "brand_name": "AON",
    "locale": "en-US",
    "shipping_preference": "SET_PROVIDED_ADDRESS",
    "user_action": "SUBSCRIBE_NOW",
    "payment_method": {
      "payer_selected": "PAYPAL",
      "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
    },
    "return_url": "https://venablml.github.io/react-paypal-checkout/done",
    "cancel_url": "https://venablml.github.io/react-paypal-checkout/cancel"
  }
}

const createSubscription = () =>{
  axios.post(subscriptionUrl,payload, {
    headers: {
    'Authorization': 'Bearer A21AALa4G_rgZZ8kPhCdmGStS0TllHPjcK2Sii8oDqIuhhnLl4ar42IGLwyoKJ5SRBC5HtPssoj1GYM2S8f-nlgf9PgRIGSmA'
    }
},).then(d => console.log("data ", d)).catch(e => console.error("Error creating plan: " ,e))
}

export {createSubscription}