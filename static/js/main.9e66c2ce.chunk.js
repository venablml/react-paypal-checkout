(this["webpackJsonpreact-paypal-checkout"]=this["webpackJsonpreact-paypal-checkout"]||[]).push([[0],{31:function(e,n,t){},32:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),a=t(25),r=t.n(a),o=(t(31),t(32),t(11)),l=t(2),s=t(1),u=function(){return Object(c.useEffect)((function(){window.paypal.use(["login"],(function(e){e.render({appid:"AStVxVYVevg9Opp0E0XVkUfOBKOvPJ9lh6psz2178uR8fiyzx9V6Tu8iceWMIvEo9QDuM-5a3EHizASm",authend:"sandbox",scopes:"openid profile email address",containerid:"lippButton",responseType:"code",locale:"en-us",buttonType:"LWP",buttonShape:"pill",buttonSize:"lg",fullPage:"true",returnurl:"https://venablml.github.io/react-paypal-checkout/"})})),console.log("Login with paypal")})),Object(s.jsx)("div",{children:Object(s.jsx)("span",{id:"lippButton"})})},p=t(10),d=t.n(p),h={product_id:"PROD-3EE93122GD2383205",name:"HC Contract 122121",description:"Something cool",status:"ACTIVE",billing_cycles:[{frequency:{interval_unit:"MONTH",interval_count:1},tenure_type:"REGULAR",sequence:1,total_cycles:12,pricing_scheme:{fixed_price:{value:"3",currency_code:"USD"}}}],payment_preferences:{auto_bill_outstanding:!0,setup_fee_failure_action:"CONTINUE",payment_failure_threshold:3},taxes:{percentage:"10",inclusive:!0}},b={plan_id:"P-76F46997MD275952DMC7AHGI",start_time:"2021-06-10T15:32:00Z",subscriber:{name:{given_name:"John",surname:"Doe"},email_address:"customer@example.com",shipping_address:{name:{full_name:"John Doe"},address:{address_line_1:"2211 N First Street",address_line_2:"Building 17",admin_area_2:"San Jose",admin_area_1:"CA",postal_code:"95131",country_code:"US"}}},application_context:{brand_name:"AON",locale:"en-US",shipping_preference:"SET_PROVIDED_ADDRESS",user_action:"SUBSCRIBE_NOW",payment_method:{payer_selected:"PAYPAL",payee_preferred:"IMMEDIATE_PAYMENT_REQUIRED"},return_url:"https://venablml.github.io/react-paypal-checkout/done",cancel_url:"https://venablml.github.io/react-paypal-checkout/cancel"}},_=function(){d.a.post("https://api-m.sandbox.paypal.com/v1/billing/plans",h,{headers:{Authorization:"Bearer A21AALa4G_rgZZ8kPhCdmGStS0TllHPjcK2Sii8oDqIuhhnLl4ar42IGLwyoKJ5SRBC5HtPssoj1GYM2S8f-nlgf9PgRIGSmA"}}).then((function(e){return console.log("data ",e)})).catch((function(e){return console.error("Error creating plan: ",e)}))},j=function(){d.a.post("https://api-m.sandbox.paypal.com/v1/billing/subscriptions",b,{headers:{Authorization:"Bearer A21AALa4G_rgZZ8kPhCdmGStS0TllHPjcK2Sii8oDqIuhhnLl4ar42IGLwyoKJ5SRBC5HtPssoj1GYM2S8f-nlgf9PgRIGSmA"}}).then((function(e){return console.log("data ",e)})).catch((function(e){return console.error("Error creating plan: ",e)}))},g=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:_,children:"Create plan"})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:j,children:"Subscribe"})})]})},m=function(){return Object(s.jsx)("div",{children:"Checkout Now, yo!"})};var f=function(){return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o.b,{to:"/login",children:"Login"}),Object(s.jsx)(o.b,{to:"/admin",children:"Admin"}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/login",children:Object(s.jsx)(u,{})}),Object(s.jsx)(l.a,{path:"/admin",children:Object(s.jsx)(g,{})}),Object(s.jsx)(l.a,{path:"/",children:Object(s.jsx)(m,{})})]})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),O()}},[[57,1,2]]]);
//# sourceMappingURL=main.9e66c2ce.chunk.js.map