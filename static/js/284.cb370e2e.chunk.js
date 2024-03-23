"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[284],{2840:function(n,e,o){o.r(e),o.d(e,{default:function(){return R}});var r,t,i,s,a,l,d=o(4270),c=o(1413),p=o(9434),u=o(9273),f=o(168),m=o(3081),h=o(1087),x=m.Z.div(r||(r=(0,f.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  padding: 30px;\n\n  @media (min-width: 320px) {\n    width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    width: 320px;\n  }\n\n  > h2 {\n    color: #8f9eb2;\n    text-align: center;\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.secondaryBgCl}),(function(n){return n.theme.borderRadius})),b=m.Z.form(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),g=m.Z.label(i||(i=(0,f.Z)(["\n  position: relative;\n\n  > input {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #8f9eb2;\n    padding: 8px 4px;\n\n    background-color: transparent;\n    outline: transparent;\n    color: #8f9eb2;\n    transition: border-color 300ms ease-in-out;\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      border-color: #fff;\n    }\n\n    &::placeholder {\n      color: transparent;\n      transition: color 300ms ease-in-out;\n    }\n\n    &:focus::placeholder {\n      color: #8f9eb2;\n    }\n\n    &:focus + span,\n    &:not(:placeholder-shown) + span {\n      color: #fff;\n      transform: translateY(-20px);\n    }\n  }\n\n  > span {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    font-size: 18px;\n    transform-origin: top left;\n    transition: transform 300ms ease-in-out, color 300ms ease-in-out;\n  }\n\n  > p {\n    position: absolute;\n    bottom: -15px;\n    left: 50%;\n    width: 250px;\n    transform: translateX(-50%);\n    font-size: 12px;\n    color: tomato;\n    text-align: center;\n  }\n"]))),j=m.Z.button(s||(s=(0,f.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 8px 16px;\n  width: 100px;\n  border-radius: ",";\n  border: 1px solid #8f9eb2;\n  background-color: transparent;\n  color: #8f9eb2;\n  font-weight: 500;\n  font-size: 16px;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n\n  &:hover {\n    border-color: #6487ef;\n    background-color: #6487ef;\n    color: #ddf2ff;\n  }\n"])),(function(n){return n.theme.borderRadius})),w=(0,m.Z)(h.OL)(a||(a=(0,f.Z)(["\n  color: #6487ef;\n"]))),Z=m.Z.span(l||(l=(0,f.Z)(["\n  color: #8f9eb2;\n  text-align: center;\n"]))),k=o(887),y=o(4695),v=o(2797),C=o(3329),q=v.Ry({email:v.Z_().email().required().trim(),password:v.Z_().min(5).required().trim()}).required(),I=function(){var n=(0,p.I0)(),e=(0,k.cI)({resolver:(0,y.X)(q)}),o=e.register,r=e.handleSubmit,t=e.reset,i=e.formState.errors;return(0,C.jsxs)(x,{children:[(0,C.jsx)("h2",{children:"Login"}),(0,C.jsxs)(b,{onSubmit:r((function(e){n((0,u.Ib)(e)),t()})),autoComplete:"off",children:[(0,C.jsxs)(g,{children:[(0,C.jsx)("input",(0,c.Z)((0,c.Z)({},o("email")),{},{placeholder:"email@mail.com"})),(0,C.jsx)("span",{children:"Email"}),i.email&&(0,C.jsx)("p",{children:i.email.message})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)("input",(0,c.Z)((0,c.Z)({},o("password")),{},{placeholder:"enter your password"})),(0,C.jsx)("span",{children:"Password"}),i.password&&(0,C.jsx)("p",{children:i.password.message})]}),(0,C.jsx)(j,{type:"submit",children:"Login"}),(0,C.jsxs)(Z,{children:["Not a member? ",(0,C.jsx)(w,{to:"/register",children:"Register"})]})]})]})},L={container:{minHeight:"calc(100vh - 140px)",display:"flex",alignItems:"center",justifyContent:"center"}},R=function(){return(0,C.jsxs)("div",{style:L.container,children:[(0,C.jsx)(d.q,{children:(0,C.jsx)("title",{children:"Phonebook | Login"})}),(0,C.jsx)(I,{})]})}}}]);
//# sourceMappingURL=284.cb370e2e.chunk.js.map