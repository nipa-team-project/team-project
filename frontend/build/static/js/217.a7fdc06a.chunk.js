"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[217],{217:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});var a=s(9439),t=s(2791),o=s(7689),c=s(1087),i=s(184),l="https://kauth.kakao.com/oauth/authorize?client_id=".concat("3a8a581619662b5a126943e55dfda42f","&redirect_uri=","https://localhost:3000/auth","&response_type=code"),r=function(){window.location.href=l},u=new URL(window.location.href).searchParams.get("code");console.log(u);var d="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=".concat("VVPjzaZLMHYFfBStGKMf","&state=","False","&redirect_uri=","https://localhost:3000/auth"),h=function(){window.location.href=d},p=function(){var e=(0,t.useState)(""),n=(0,a.Z)(e,2),s=n[0],l=n[1],u=(0,t.useState)(""),d=(0,a.Z)(u,2),p=d[0],m=d[1],g=(0,t.useState)(""),x=(0,a.Z)(g,2),j=x[0],f=x[1],N=(0,o.s0)();return(0,i.jsxs)("div",{className:"login-page",children:[(0,i.jsx)("img",{className:"welcome",src:"/img/loginimg/Welcome.png",alt:"Welcome"}),(0,i.jsx)("p",{className:"text_welcome",children:"\ud658\uc601\ud569\ub2c8\ub2e4!"}),(0,i.jsxs)("form",{className:"login-form",children:[(0,i.jsx)("input",{type:"text",value:s,onChange:function(e){return l(e.target.value)},className:"login-input"}),(0,i.jsx)("br",{}),(0,i.jsx)("input",{type:"password",value:p,onChange:function(e){return m(e.target.value)},className:j?"error-input":"login-input"}),j&&(0,i.jsx)("p",{className:"error-message",children:j}),(0,i.jsx)("button",{type:"button",onClick:function(){s&&p?(console.log("\ub85c\uadf8\uc778 \uc2dc\ub3c4:",s,p),"0000"===p?(console.log("\ub85c\uadf8\uc778 \uc131\uacf5:",s),f(null),N("/")):(console.log("\ub85c\uadf8\uc778 \uc2e4\ud328"),f("\uc798\ubabb\ub41c \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694."))):f("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},className:"login-button",children:"\ub85c\uadf8\uc778\ud558\uae30"}),(0,i.jsxs)("div",{className:"nosignup",children:[(0,i.jsx)("p",{children:"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc138\uc694?"}),(0,i.jsx)("p",{children:(0,i.jsx)(c.rU,{to:"/Signup",className:"signup",children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})})]})]}),(0,i.jsxs)("div",{className:"icon_content",children:[(0,i.jsx)("div",{className:"icon_wrapper",children:(0,i.jsxs)(c.rU,{className:"icon_text",onClick:r,children:[(0,i.jsx)("img",{className:"icons",src:"/img/loginimg/Kakao.png",alt:"kakao"}),(0,i.jsx)("p",{children:"\uce74\uce74\uc624\ud1a1\uc73c\ub85c \uc2dc\uc791"})]})}),(0,i.jsx)("div",{className:"icon_wrapper",children:(0,i.jsxs)(c.rU,{className:"icon_text",onClick:h,children:[(0,i.jsx)("img",{className:"icons",src:"/img/loginimg/Naver.png",alt:"naver"}),(0,i.jsx)("p",{children:"\ub124\uc774\ubc84\ub85c \uc2dc\uc791"})]})})]})]})}}}]);
//# sourceMappingURL=217.a7fdc06a.chunk.js.map