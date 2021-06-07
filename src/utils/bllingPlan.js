import axios from 'axios'

const billingUrl = "https://api-m.sandbox.paypal.com/v1/billing/plans"
const productId = "PROD-3EE93122GD2383205"
const payload = {
  "product_id": productId,
  "name": "HC Contract 122121",
  "description": "Something cool",
  "status": "ACTIVE",
  "billing_cycles": [
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 1,
      "total_cycles": 12,
      "pricing_scheme": {
        "fixed_price": {
          "value": "3",
          "currency_code": "USD"
        }
      }
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee_failure_action": "CONTINUE",
    "payment_failure_threshold": 3
  },
  "taxes": {
    "percentage": "10",
    "inclusive": true
  }
}
const createBillingPlan = () =>{
  axios.post(billingUrl,payload, {
    headers: {
    'Authorization': 'Bearer A21AALa4G_rgZZ8kPhCdmGStS0TllHPjcK2Sii8oDqIuhhnLl4ar42IGLwyoKJ5SRBC5HtPssoj1GYM2S8f-nlgf9PgRIGSmA'
    }
},).then(d => console.log("data ", d)).catch(e => console.error("Error creating plan: " ,e))
}

export {createBillingPlan}