(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),s=n(17),i=n.n(s),a=(n(26),n(13)),o=n.n(a),u=n(18),j=n(10),d=(n(28),n(9)),b=(n(38),n(30),n(19)),h=n.n(b),p=n(20),l=n(21),O=n(4);d.a.initializeApp({apiKey:"AIzaSyBWh_mdoSuwzsw7o_fnq8d0dgr2Q5qYctY",authDomain:"chat-app-42ee7.firebaseapp.com",projectId:"chat-app-42ee7",storageBucket:"chat-app-42ee7.appspot.com",messagingSenderId:"891274908278",appId:"1:891274908278:web:3eef64b0fcfc8d30b18557"});var f=d.a.auth(),x=d.a.firestore();var g=function(){var e=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"FireChat-Messenger"}),Object(O.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;f.signInWithPopup(e)},children:Object(O.jsx)(h.a,{})})]})},t=function(){return f.currentUser&&Object(O.jsx)("button",{className:"sign-out",onClick:function(){return f.signOut()},children:"Signout"})},n=function(){var e=x.collection("messages"),t=e.orderBy("createdAt").limit(30),n=Object(l.a)(t,{idField:"id"}),s=Object(j.a)(n,1)[0],i=Object(c.useState)(""),a=Object(j.a)(i,2),b=a[0],h=a[1],p=Object(c.useRef)(),g=function(){var t=Object(u.a)(o.a.mark((function t(n){var c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c=f.currentUser,r=c.uid,s=c.photoURL,t.next=4,e.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:s});case 4:h(""),p.current.scrollIntoView({behaviour:"smooth"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("main",{children:[s&&s.map((function(e){return Object(O.jsx)(r,{textMessage:e},e.id)})),Object(O.jsx)("div",{ref:p})]}),Object(O.jsxs)("form",{onSubmit:g,children:[Object(O.jsx)("input",{value:b,onChange:function(e){return h(e.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Send"})]})]})})},r=function(e){var t=e.textMessage,n=t.uid,c=t.text,r=t.photoURL,s=n===f.currentUser.uid?"sent":"received";return Object(O.jsxs)("div",{className:"message".concat(s),children:[Object(O.jsx)("img",{src:r}),Object(O.jsx)("p",{children:c})]})},s=Object(p.a)(f),i=Object(j.a)(s,1)[0];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{children:Object(O.jsx)(t,{})}),Object(O.jsx)("section",{children:i?Object(O.jsx)(n,{}):Object(O.jsx)(e,{})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),m()}},[[37,1,2]]]);
//# sourceMappingURL=main.e9951b48.chunk.js.map