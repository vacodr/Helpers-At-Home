(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{147:function(e,t,a){},151:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAYAAADZsVyDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgBtVAxCsJAENzLmTLiU2wtLPyAipWlpX8QSyu10B/4ARErTW9asfAF6e1EIYRzNl7gECPkcg4Mt7sJw8wQ2SMQQhw9z1PgghwhALtaNOfS/EFSebDTje/7B6VUjL2j7y3cH7idePGoHISOv0+SpIe9Dk6oIthpJKUcYV4ZFczBKe4hvSuyFp19dMsckwVYNPziNKN2KqgkREH8jPi2Jcv4YVH8Kp3+Eo3IIn7wr/jORRltCFzxrl11ymjA0RnvAEJ3F52abpUhXjl+jr4hxuJDON3ZitbyAYJNPDcwxnxJ0/QJ9skSL/1Oag14br/rAAAAAElFTkSuQmCC"},165:function(e,t,a){e.exports=a(340)},170:function(e,t,a){},189:function(e,t,a){},197:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},295:function(e,t,a){},297:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){e.exports=a.p+"static/media/elec.6508d4d9.jpg"},300:function(e,t,a){e.exports=a.p+"static/media/weld.869fcc32.jpg"},301:function(e,t,a){e.exports=a.p+"static/media/paint.6d5ca99d.jpg"},316:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(170),a(20)),i=a(18),m=a(11),s=a(111),u=a.n(s),d=Object(n.createContext)({userId:null,isCustomer:!1,isWorker:!1,username:null,token:null,login:function(){},logout:function(){}});function E(e){var t=e.children,a=Object(n.useState)(!1),l=Object(m.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),E=s[0],b=s[1],h=Object(n.useState)(null),p=Object(m.a)(h,2),f=p[0],v=p[1],g=Object(n.useState)(null),N=Object(m.a)(g,2),w=N[0],y=N[1],k=Object(n.useState)(null),j=Object(m.a)(k,2),O=j[0],x=j[1],S=Object(n.useState)(),C=Object(m.a)(S,2),A=C[0],I=C[1],R=Object(n.useCallback)((function(e,t,a,n,r){x(a),v(t),y(e),"customer"===n&&o(!0),"worker"===n&&b(!0);var l=r||new Date((new Date).getTime()+36e5);I(l),localStorage.setItem("userData",JSON.stringify({userId:e,username:t,uesrType:n,token:a,expiration:l.toISOString()})),u.a.defaults.headers.common.Authorization="Bearer ".concat(a)}),[]),D=Object(n.useCallback)((function(){x(null),I(null),y(null),v(null),o(!1),b(!1),localStorage.removeItem("userData");u.a.defaults.headers.common.Authorization="Bearer ".concat(null)}),[]);return Object(n.useEffect)((function(){var e;if(O&&A){var t=A.getTime()-(new Date).getTime();e=setTimeout(D,t)}else clearTimeout(e)}),[O,D,A]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&R(e.userId,e.username,e.token,e.uesrType,new Date(e.expiration))}),[R]),r.a.createElement(d.Provider,{value:{login:R,token:O,logout:D,userId:w,username:f,isCustomer:c,isWorker:E}},t)}a(189);var b=a(362),h=a(361),p=a(47),f=a(148),v={apiKey:"AIzaSyDqro2xIotKHH3rJNgbushzaJTnp3V1fMc",authDomain:"major1-73814.firebaseapp.com",projectId:"major1-73814",storageBucket:"major1-73814.appspot.com",messagingSenderId:"1080544030437",appId:"1:1080544030437:web:44f19a13b3d04cc93d6e0c"},g=function(){Object(f.a)(v)},N=a(45);g();var w=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),c=Object(m.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),d=u[0],E=u[1],b=Object(N.c)(),h=new N.a,f=function(e,t,a,n,l,c,o,i,m,s){fetch(he+"/addUser",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,role:a,service:n,cost:l,experience:c,mobileNumber:o,address:i})}).then((function(e){return e.json()})).then((function(n){var l,c={id:n.id,email:t,displayName:e,role:a,address:n.address,mobileNumber:n.mobileNumber};r(c);var o=(null===s||void 0===s||null===(l=s.state)||void 0===l?void 0:l.from)||"/";m.push(o)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){Object(N.d)(b,(function(e){e?fetch(he+"/user/"+e.email).then((function(e){return e.json()})).then((function(e){console.log("test",e.user),r({email:e.user.email,displayName:e.user.name,role:e.user.role,id:e.user._id,address:e.user.address,mobileNumber:e.user.mobileNumber}),i(!1)})).catch((function(e){console.log(e)})):(r({}),i(!1))}))}),[]);return{user:a,isLoading:o,setIsLoading:i,authError:d,setAuthError:E,registerUser:function(e,t,a,n,r,l,c,o,m,s,u){i(!0),Object(N.b)(b,e,t).then((function(t){E(""),Object(N.h)(b.currentUser,{displayName:a}).then((function(){f(a,e,n,r,l,c,o,m,u,s)})).catch((function(e){console.log(e)}))})).catch((function(e){E(e.message)})).finally((function(){return i(!1)}))},loginUser:function(e,t,a,n){i(!0),Object(N.e)(b,e,t).then((function(t){var l;fetch(he+"/user/"+e).then((function(e){return e.json()})).then((function(e){console.log("test",e.user.role),r({email:e.user.email,displayName:e.user.name,role:e.user.role,id:e.user._id,address:e.user.address,mobileNumber:e.user.mobileNumber}),i(!1)})).catch((function(e){console.log(e)}));var c=(null===a||void 0===a||null===(l=a.state)||void 0===l?void 0:l.from)||"/";n.push(c),E("")})).catch((function(e){E(e.message)})).finally((function(){return i(!1)}))},signInWithGoogle:function(e,t,a,n){Object(N.f)(b,h).then((function(l){var c=l.user,o=c.email,m=c.displayName,s={email:o,displayName:m,photoURL:c.photoURL};E(""),e?(r(Object(p.a)(Object(p.a)({},s),{},{role:n})),f(m,o,n,a,t)):(i(!0),fetch(he+"/user/"+s.email).then((function(e){return e.json()})).then((function(e){var n;r({email:s.email,displayName:s.displayName,photoURL:s.photoURL,role:e.role,id:e.id,address:e.address}),i(!1);var l=(null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from)||"/";a.push(l)})).catch((function(e){console.log(e)})))})).catch((function(e){E(e.message)})).finally((function(){return i(!1)}))},logout:function(){i(!0),Object(N.g)(b).then((function(){})).catch((function(e){})).finally((function(){return i(!1)}))}}},y=Object(n.createContext)({}),k=function(e){var t=e.children,a=w();return r.a.createElement(y.Provider,{value:a},t)},j=function(){return Object(n.useContext)(y)};var O=function(){var e=j(),t=e.user,a=(e.isLoading,e.authError,e.logout);console.log(t);var l=Object(n.useState)(!0),c=Object(m.a)(l,2),s=(c[0],c[1],Object(i.g)());return r.a.createElement("div",null,r.a.createElement(b.a,{expand:"lg",bg:"primary",variant:"dark",className:"navbar bg-dark"},r.a.createElement(b.a.Brand,{className:"brand-logo ml-5"},r.a.createElement(o.b,{to:"/",style:{color:"inherit",textDecoration:"none"}},r.a.createElement("b",null,"Helpers At Home"))),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"ml-auto"},r.a.createElement(o.c,{to:"/",className:"nav-option nav-link active mr-5"},"Home"),"customer"==t.role&&r.a.createElement(o.c,{to:"/workers",className:"nav-option nav-link active mr-5"},"Our Workers"),r.a.createElement(o.c,{to:"/about_us",className:"nav-option nav-link active mr-5"},"About Us")),t.email?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/profile"},r.a.createElement("span",{className:"mr-5 text-white"},t.displayName)),r.a.createElement("button",{onClick:function(){a(),s.push("/")},className:"custom-btn mr-5 btn-lg"},"Sign out")):r.a.createElement(r.a.Fragment,null," ",r.a.createElement(o.b,{to:"/login"},r.a.createElement("button",{className:"custom-btn mr-5 btn-lg"},"Sign In"))))))},x=a(360),S=(a(197),function(e){var t=e.worker,a=j().user,l=t._id,c=t.name,o=(t.email,t.photoURL),i=t.service,s=t.cost,u=t.experience,d=t.address,E=t.mobileNumber,b=Object(n.useState)(!1),h=Object(m.a)(b,2),p=h[0],f=h[1],v=function(){return f(!1)},g=Object(n.useState)(!1),N=Object(m.a)(g,2),w=N[0],y=N[1],k=function(){return y(!1)};return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"worker-box"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:o||"https://i.ibb.co/xsF142p/Frame.png",alt:""})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("p",null,"Name: ",c),r.a.createElement("p",null,"Category: ",i),r.a.createElement("p",null,"Estimate charge: $",s,"/hr")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("p",null,"Experience: ",u," years"),r.a.createElement("p",null,"Address: ",d),r.a.createElement("p",null,"Mobile number: ",E)),r.a.createElement("div",{className:"col-md-3 d-flex align-items-center"},r.a.createElement("button",{onClick:function(){return f(!0)},className:"custom-btn"},"Book Service")))),r.a.createElement(x.a,{show:p,onHide:v},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Book a service")),r.a.createElement(x.a.Body,null,r.a.createElement("p",null,"Name: ",c),r.a.createElement("p",null,"Category: ",i),r.a.createElement("p",null,"Estimate charge: $",s,"/hr"),r.a.createElement("p",null,"Experience: ",u," years")),r.a.createElement(x.a.Footer,null,r.a.createElement("button",{className:"blank-btn",onClick:v},"Cancel"),r.a.createElement("button",{className:"custom-btn",onClick:function(){v(),console.log("mobile",a.mobileNumber,E),fetch(he+"/addOrder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({customerId:a.id,workerId:l,customerName:a.displayName,workerName:c,workerMobile:E,customerMobile:a.mobileNumber,category:i,status:"Pending"})}).then((function(e){return y(!0)})).catch((function(e){return console.log(e)}))}},"Place Order"))),r.a.createElement(x.a,{show:w,onHide:k},r.a.createElement(x.a.Body,null,r.a.createElement("h3",null,"Your order has been successfully placed."),r.a.createElement("h4",null,"You can see the progress of your order in your profile page")),r.a.createElement(x.a.Footer,null,r.a.createElement("button",{className:"custom-btn",onClick:k},"OK"))))}),C=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),s=o[0],u=o[1],d=Object(n.useState)(""),E=Object(m.a)(d,2),b=E[0],h=E[1],p=Object(i.i)().service,f=j().user;Object(n.useEffect)((function(){"location"!=b&&fetch(he+"/workers/".concat(p,"/").concat(b)).then((function(e){return e.json()})).then((function(e){l(e.users),u(e.users),console.log("set done")}))}),[b]);console.log(a);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center m-5"},"Our Best Workers"),r.a.createElement("div",{className:"text-center m-5"},r.a.createElement("button",{className:"".concat("location"==b?"custom-btn":"blank-btn"," mr-3 mb-3"),onClick:function(){h("location"),l([]);var e=[];s.forEach((function(t){console.log(t),t.address==f.address&&e.push(t)})),s.forEach((function(t){t.address!=f.address&&e.push(t)})),l(e)}},"Location"),r.a.createElement("button",{className:"".concat("work"==b?"custom-btn":"blank-btn"," mr-3 mb-3"),onClick:function(){return h("work")}},"Work"),r.a.createElement("button",{className:"".concat("experience"==b?"custom-btn":"blank-btn"," mr-3 mb-3"),onClick:function(){return h("experience")}},"Experience"),r.a.createElement("button",{className:"".concat("price"==b?"custom-btn":"blank-btn"," mr-3 mb-3"),onClick:function(){return h("price")}},"Price")),r.a.createElement("div",{className:"col-md-12 col-lg-6 mx-auto"},r.a.createElement("div",{className:"d-flex justify-content-evenly"},r.a.createElement("input",{onChange:function(e){!function(e){var t=s.filter((function(t){if(t.name.toLowerCase().includes(e.toLowerCase()))return t}));l(t)}(e.target.value)},className:"form-control mr-3",type:"text",placeholder:"Search worker ..."}),r.a.createElement("button",{className:"custom-btn"},"Search"))),r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(S,{key:e._id,worker:e})}))))},A=(a(198),a(293),a(27));a(294);var I=function(e){var t=e.dev,a=t.name,n=t.img,l=t.github,c=t.linkedin,o=t.branch;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",{className:"upper-container"},r.a.createElement("img",{className:"img-fluid",src:n,alt:""})),r.a.createElement("div",{className:"lower-container"},r.a.createElement("h3",null,a),r.a.createElement("h4",null,o),r.a.createElement("div",{className:"icon-container"},r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(A.d,{className:"icon-links fa-2x github-icon"})),r.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(A.f,{className:"icon-links fa-2x linkedin-icon"}))))))},R=[{id:1,name:"Prateek Joshi",email:"prateekjoshi946@gmail.com",img:"https://i.ibb.co/PMVHsCF/project2.jpg",branch:"Computer Science",github:"https://github.com/Prateek1912",linkedin:"https://www.linkedin.com/in/prateek-joshi-076389170/"},{id:2,name:"Siddharth Rai",email:"Siddharth.09rai1999@gmail.com",img:"https://i.ibb.co/chMMNgt/project1.jpg",branch:"Computer Science",github:"https://github.com/siddharth-rai",linkedin:"https://www.linkedin.com/in/siddharth-rai-387363173/"},{id:3,name:"Vaibhav Agarwal",email:"vaibhav.06@gmail.com",img:"https://i.ibb.co/cJwY9nw/id-3.jpg",branch:"Computer Science",github:"https://github.com/vacodr",linkedin:"https://www.linkedin.com/in/vacodr"}];var D=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",{className:"main-container-heading"},"About Us"),r.a.createElement("p",{id:"para"},"Helpers At Home enables millions of underprivileged and unorganized blue-collar workforce in finding local employment, free of cost, directly from nearby employers, and without the middlemen in between.",r.a.createElement("br",null),"In turn, the platform makes it easy, quick, reliable & affordable for millions of employers to find & hire nearby blue-collar workers, again without the middlemen in between.",r.a.createElement("br",null),"With a larger vision to end poverty, forced labour, worker's exploitation, and human trafficking, Helpers At Home is working towards creating an ecosystem of inclusive economic growth for India's underprivileged unorganised blue-collar workforce.",r.a.createElement("br",null),"In the long run, having enough local employment opportunities allows workers to find a better working environment and better salaries for themselves and an opportunity to improve their quality of life.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5"}," "),r.a.createElement("div",{className:"col-md-6 mt-5"}," ")),r.a.createElement("h2",{className:"card-container-heading"},"Team of developers"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},R.map((function(e){return r.a.createElement(I,{dev:e})}))))))},L=(a(295),a(151),a(152)),P=a(66),B=function(e){var t=e.order,a=j().user,l=Object(n.useState)(t.status),c=Object(m.a)(l,2),o=c[0],i=c[1];return r.a.createElement("tr",null,"customer"==a.role?r.a.createElement("td",null,t.workerName):r.a.createElement("td",null,t.customerName),r.a.createElement("td",{className:"pt-3"},t.category),"customer"==a.role?r.a.createElement("td",null,t.workerMobile):r.a.createElement("td",null,t.customerMobile),"customer"==a.role?r.a.createElement("td",null,t.status):r.a.createElement("td",null,r.a.createElement(L.a,{variant:"secondary",id:"dropdown-basic-button",onSelect:function(e){fetch(he+"/updateOrder/"+t._id,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"post",body:JSON.stringify({status:e})}).then((function(e){return e.json()})).then((function(t){i(e)}))},title:o},r.a.createElement(P.a.Item,{eventKey:"pending"},"Pending"),r.a.createElement(P.a.Item,{eventKey:"On going"},"On going"),r.a.createElement(P.a.Item,{eventKey:"completed"},"Completed"))))},U=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=j().user;return Object(n.useEffect)((function(){var e;e="worker"==c.role?"Worker":"Customer",fetch(he+"/orderFor"+e+"/"+c.id).then((function(e){return e.json()})).then((function(e){return l(e.orders)}))}),[]),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"bg-dark text-white"},r.a.createElement("tr",null,r.a.createElement("td",null,"customer"==c.role?"Worker Name":"Customer Name"),r.a.createElement("td",null,"Category"),r.a.createElement("td",null,"Mobile number"),r.a.createElement("td",null,"Status"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(B,{key:e._id,order:e})}))))},M=function(){var e=j().user;return r.a.createElement("div",null,r.a.createElement("div",{className:"customer-profile"},r.a.createElement("h2",{className:"profile-heading"},e.displayName,"'s profile"),r.a.createElement("div",{className:"section-one"},r.a.createElement("div",{className:"profile-detail"},r.a.createElement("div",{className:"profile-image"},r.a.createElement("img",{alt:"profile",className:"profile-image",src:e.photoURL||"https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"})),r.a.createElement("div",{className:"profile-info"},r.a.createElement("div",{className:"overlap"}),r.a.createElement("div",{className:"mt-3 text-center"},r.a.createElement("h4",null,"Name: ",e.displayName),r.a.createElement("h4",null,"Email: ",e.email),r.a.createElement("h4",null,"Role: ",e.role)))),r.a.createElement("div",{className:"container m-5 text-center"},r.a.createElement("h3",{className:"service-heading my-3"},"worker"==e.role?"YOUR WORKING HISTORY":"SERVICES USED"),r.a.createElement(U,null))),r.a.createElement("div",{className:"section-two"},r.a.createElement("div",{className:"featured-photo"},r.a.createElement("h3",{className:"featured-heading heading"},"Featured Photos:-"),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}),r.a.createElement("div",{className:"grid-box"}))),r.a.createElement("div",{className:"reviews"},r.a.createElement("h3",{className:"reviews-heading heading"},"Reviews"),r.a.createElement("div",{className:"reviews-list"},r.a.createElement("div",{className:"reviews-box"},"Review given to you by particular worker who you employed (this will not be there for the individual)"),r.a.createElement("div",{className:"reviews-box"},"Review given to you by particular worker who you employed (this will not be there for the individual)"))))))};a(297),a(298);var F=function(){return r.a.createElement("div",{className:"main-footer page-footer bg-dark"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-md-2 "},r.a.createElement("center",null,r.a.createElement("h5",{className:"mb-2 pb-2"},"Cities we serve"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"Jaipur"),r.a.createElement("li",null,"Delhi"),r.a.createElement("li",null,"Mumbai"),r.a.createElement("li",null,"Banglore")))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("center",null,r.a.createElement("h5",{className:"mb-2 pb-2"},"Cities we serve"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"Chennai"),r.a.createElement("li",null,"Kolkata"),r.a.createElement("li",null,"West Bengal"),r.a.createElement("li",null,"Haryana")))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("center",null,r.a.createElement("h5",{className:"mb-2 pb-2"},"Cities we serve"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"Kanpur"),r.a.createElement("li",null,"Bhopal"),r.a.createElement("li",null,"Patna"),r.a.createElement("li",null,"Indore")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("center",null,r.a.createElement("h5",{className:"mt-4 mb-4"},"Find us on:"),r.a.createElement("ul",{className:"list-unstyled list-inline text-center"},r.a.createElement("li",{className:"list-inline-item mx-2"},r.a.createElement("a",{className:"btn-floating btn-fb text-white ",href:"https://www.facebook.com/"},r.a.createElement(A.c,{size:"2.8rem"}))),r.a.createElement("li",{className:"list-inline-item mx-2"},r.a.createElement("a",{className:"btn-floating btn-tw text-white",href:"https://www.twitter.com/"},r.a.createElement(A.h,{size:"2.8rem"}))),r.a.createElement("li",{className:"list-inline-item  mx-2 "},r.a.createElement("a",{className:"btn-floating btn-gplus text-white",href:"https://www.gplus.com/"},r.a.createElement(A.e,{size:"2.8rem"}))),r.a.createElement("li",{className:"list-inline-item mx-2"},r.a.createElement("a",{className:"btn-floating btn-li text-light",href:"https://www.linkedin.com/"},r.a.createElement(A.f,{size:"2.8rem"}))))))),r.a.createElement("div",{className:"text-center py-3",style:{fontSize:"1.1 rem "}},"@HelperAtHome, All rights reserved"))},Y=a(51);function H(){return r.a.createElement("div",{className:"align-items-center"},r.a.createElement(Y.a,{style:{width:"",height:""},className:"",prevIcon:r.a.createElement(A.a,{size:"3.5rem",color:"black",opacity:"0.7"}),nextIcon:r.a.createElement(A.b,{size:"3.5rem",color:"black",opacity:"0.7"})},r.a.createElement(Y.a.Item,{style:{width:"",height:""}},r.a.createElement("img",{className:"d-block w-100 img-fluid",src:a(299),alt:"First slide",style:{width:"100%",height:""}}),r.a.createElement(Y.a.Caption,{style:{bottom:"5%"}},r.a.createElement("h1",null,"Electrician"),r.a.createElement("h3",null,"Plays with electrons!"))),r.a.createElement(Y.a.Item,{style:{width:"",height:""}},r.a.createElement("img",{className:"d-block w-100 img-fluid",src:a(300),alt:"First slide",style:{width:"",height:""}}),r.a.createElement(Y.a.Caption,{style:{bottom:"5%"}},r.a.createElement("h1",null,"Blacksmith"),r.a.createElement("h3",null,"Cuts through metal!"))),r.a.createElement(Y.a.Item,{style:{width:"",height:""}},r.a.createElement("img",{className:"d-block w-100 img-fluid",src:a(301),alt:"First slide",style:{width:"",height:""}}),r.a.createElement(Y.a.Caption,{style:{bottom:"5%"}},r.a.createElement("h1",null,"Construction Worker"),r.a.createElement("h3",null,"Ever heard of Bob the Builder?")))))}var K=a(7),T=a(9),J=a(15),W=a(16),z=a(363),V=a(357),_=a(359),Q=(n.Component,a(35)),G=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(m.a)(c,2),i=o[0],s=o[1];return r.a.createElement("div",{className:"pl-5 ml-5 mt-5"},r.a.createElement("h3",null,"Rating:"),Object(Q.a)(Array(5)).map((function(e,t){var n=t+1;return r.a.createElement("label",{key:t},r.a.createElement("input",{type:"radio",name:"starrating",value:n,onClick:function(){return l(n)}}),r.a.createElement(A.g,{className:"star",color:n<=(i||a)?"#ffa62b":"#bbbfca",onMouseEnter:function(){return s(n)},onMouseLeave:function(){return s(null)},size:30}))})),r.a.createElement("div",null,r.a.createElement("h3",null,"Comment :"),r.a.createElement("textarea",null),r.a.createElement("br",null)))},q=a(63),X=a.n(q),Z=(a(110),a(316),a(358)),$=function(e){var t=e.service,a=j().user,n=t.img,l=t.title,c=(t.category,t.description);return r.a.createElement("div",{className:"box text-center"},"worker"==a.role?r.a.createElement("div",{to:"/workers/".concat(l),style:{color:"inherit",textDecoration:"none"}},r.a.createElement("div",{className:"box-image"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:"box-content"},r.a.createElement("h2",{className:"box-header"},l),r.a.createElement("p",null,c))):r.a.createElement(o.b,{to:"/workers/".concat(l),style:{color:"inherit",textDecoration:"none"}},r.a.createElement("div",{className:"box-image"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:"box-content"},r.a.createElement("h2",{className:"box-header"},l),r.a.createElement("p",null,c))))},ee={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},te=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch(he+"/service/best-service").then((function(e){return e.json()})).then((function(e){return l(e.services)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"headings m-5"},"OUR BEST SERVICES"),r.a.createElement(Z.a,null,r.a.createElement(X.a,{className:"block",responsive:ee},a.map((function(e){return r.a.createElement($,{key:e._id,service:e})})))))},ae=(a(317),a(336),function(e){Object(J.a)(a,e);var t=Object(W.a)(a);function a(){return Object(K.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/MhkGQAoc7bc",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),a}(n.Component)),ne=(a(337),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}}),re=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch(he+"/service/household-service").then((function(e){return e.json()})).then((function(e){return l(e.services)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"headings m-5"},"HOUSEHOLD SERVICES"),r.a.createElement(Z.a,null,r.a.createElement(X.a,{className:"block",responsive:ne},a.map((function(e){return r.a.createElement($,{key:e._id,service:e})})))))},le={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},ce=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch(he+"/service/professional-service").then((function(e){return e.json()})).then((function(e){return l(e.services)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"headings m-5"},"PROFESSIONAL SERVICES"),r.a.createElement(Z.a,null,r.a.createElement(X.a,{className:"block",responsive:le},a.map((function(e){return r.a.createElement($,{key:e._id,service:e})})))))};function oe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(te,null),r.a.createElement(re,null),r.a.createElement(ce,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(ae,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(G,null)))))}a(147);var ie=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=j(),s=(c.user,c.loginUser),u=(c.signInWithGoogle,c.isLoading),d=c.authError,E=Object(i.h)(),b=Object(i.g)(),h=function(e){var t=e.target.name,n=e.target.value,r=Object(p.a)({},a);r[t]=n,l(r)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-xl-6 col-md-8 col-sm-8 mx-auto"},r.a.createElement("div",{className:"custom-container text-white p-5 my-5"},r.a.createElement("h1",{className:"text-center mb-4"},"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(a.email,a.password,E,b)}},r.a.createElement("input",{className:"form-control",type:"email",placeholder:"Your Email",name:"email",onChange:h}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Your Password",name:"password",onChange:h}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn bg-dark text-white form-control mb-2"},u?r.a.createElement("div",{className:"spinner-border",role:"status"}):r.a.createElement("p",null,"Login")),r.a.createElement("h6",null,"New User?",r.a.createElement(o.b,{className:"text-white",style:{textDecoration:"none"},to:"/register"}," Register here")),d&&r.a.createElement("h6",{className:"text-danger"},d)),r.a.createElement("br",null))))},me=function(){return r.a.createElement("div",{className:"container text-white text-center my-5"},r.a.createElement("div",{className:"custom-container p-5"},r.a.createElement("h1",null,"Sorry, your requested page ",r.a.createElement("br",null)," is not found")))},se=a(155),ue=function(){return r.a.createElement("div",{style:{height:"600px"},className:"d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"spinner-border",role:"status"}))},de=["children"],Ee=function(e){var t=e.children,a=Object(se.a)(e,de),n=j(),l=n.user;return n.isLoading?r.a.createElement(ue,null):r.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return l.email?t:r.a.createElement(i.a,{to:{pathname:"/login",state:{from:a}}})}}))},be=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=j(),s=(c.user,c.registerUser),u=(c.signInWithGoogle,c.isLoading),d=c.authError,E=c.setAuthError,b=(c.signInWithFacebook,Object(n.useState)("Select one")),h=Object(m.a)(b,2),f=h[0],v=h[1],g=Object(n.useState)("Select the service that you will provide"),N=Object(m.a)(g,2),w=N[0],y=N[1],k=Object(n.useState)(""),O=Object(m.a)(k,2),x=O[0],S=O[1];console.log(a);var C=Object(n.useState)(!1),A=Object(m.a)(C,2),I=A[0],R=A[1],D=Object(i.h)(),B=Object(i.g)(),U=function(e){var t,n=e.target.name,r=e.target.value;"mobileNumber"==n&&(r.length>10?(t=r.substring(0,10),r=t):"0"==r&&(r=t=""),S(r));var c=Object(p.a)({},a);c[n]=r,l(c)};return console.log(a),r.a.createElement("div",null,I?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-xl-6 col-md-8 col-sm-8 mx-auto"},r.a.createElement("div",{className:"custom-container text-white p-5 my-5"},r.a.createElement("h1",{className:"text-center mb-4"},"Register"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.email&&a.password&&a.name&&"Select one"!=f?a.password==a.confirmPassword?s(a.email,a.password,a.name,f,a.service,a.cost,a.experience,a.mobileNumber,a.address,D,B):E("Your password and confirm password should be matched"):E("Fill up all fields")}},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h4",{className:"d-inline mr-2"},"I am a ",f)),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",placeholder:"Your Name",name:"name",onChange:U}),r.a.createElement("br",null),"worker"==f&&r.a.createElement("div",null,r.a.createElement(L.a,{onSelect:function(e){y(e);var t=Object(p.a)({},a);t.service=e,l(t)},id:"dropdown-basic-button",variant:"secondary",title:w},r.a.createElement(P.a.Item,{eventKey:"Carpenter"},"Carpenter"),r.a.createElement(P.a.Item,{eventKey:"Maid"},"Maid"),r.a.createElement(P.a.Item,{eventKey:"Cook"},"Cook"),r.a.createElement(P.a.Item,{eventKey:"Plumber"},"Plumber"),r.a.createElement(P.a.Item,{eventKey:"Maid"},"Maid"),r.a.createElement(P.a.Item,{eventKey:"Construction"},"Construction"),r.a.createElement(P.a.Item,{eventKey:"Electrician"},"Electrician"),r.a.createElement(P.a.Item,{eventKey:"Mechanic"},"Mechanic"),r.a.createElement(P.a.Item,{eventKey:"Mason"},"Mason")),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"number",placeholder:"Your hourly rate",name:"cost",onChange:U}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",placeholder:"Your Experience (year)",name:"experience",type:"number",onChange:U}),r.a.createElement("br",null)),r.a.createElement("input",{value:x,className:"form-control",placeholder:"Your Contact no.",type:"number",name:"mobileNumber",onChange:U}),r.a.createElement("br",null),r.a.createElement("textarea",{rows:"3",className:"form-control",placeholder:"Your address",name:"address",onChange:U}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",placeholder:"Your Email",type:"email",name:"email",onChange:U}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",placeholder:"Your Password",name:"password",type:"password",onChange:U}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",placeholder:"Confirm Password",name:"confirmPassword",type:"password",onChange:U}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn bg-dark text-white form-control mb-2"},u?r.a.createElement("div",{className:"spinner-border",role:"status"}):r.a.createElement("p",null,"Register")),r.a.createElement("h6",null,"Already registered?",r.a.createElement(o.b,{className:"text-white",style:{textDecoration:"none"},to:"/login"}," Login here")),d&&r.a.createElement("h6",{className:"text-danger"},d))))):r.a.createElement("div",{className:"d-flex justify-content-center align-items-center role-box"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Registration"),r.a.createElement("h1",{className:"mb-4"},"What is your role?"),r.a.createElement("button",{onClick:function(){R(!0),v("customer")},className:"blank-btn mr-3"},"Customer"),r.a.createElement("button",{onClick:function(){R(!0),v("worker")},className:"blank-btn"},"Worker"))))},he="https://helpers-at-home.herokuapp.com";var pe=function(){return r.a.createElement(k,null,r.a.createElement(E,null,r.a.createElement(o.a,null,r.a.createElement(O,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:oe}),r.a.createElement(Ee,{path:"/workers/:service?"},r.a.createElement(C,null)),r.a.createElement(Ee,{path:"/profile"},r.a.createElement(M,null)),r.a.createElement(i.b,{path:"/about_us",component:D}),r.a.createElement(i.b,{path:"/login",component:ie}),r.a.createElement(i.b,{path:"/register",component:be}),r.a.createElement(i.b,{path:"*",component:me}),r.a.createElement(i.a,{to:"/"})),r.a.createElement(F,null))))};a(338),a(339);c.a.render(r.a.createElement(pe,null),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.63bb8b73.chunk.js.map