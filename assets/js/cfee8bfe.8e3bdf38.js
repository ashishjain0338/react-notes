"use strict";(self.webpackChunkreact_notes=self.webpackChunkreact_notes||[]).push([[699],{1211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"Basics/routing","title":"Routing","description":"Routing simply means creating a route/linking a link with a page/React Component","source":"@site/docs/Basics/routing.md","sourceDirName":"Basics","slug":"/Basics/routing","permalink":"/react-notes/docs/Basics/routing","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Basics/routing.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Setting up Project","permalink":"/react-notes/docs/Getting-Started/"},"next":{"title":"React Component as Function","permalink":"/react-notes/docs/Basics/functional"}}');var s=n(4848),a=n(8453);const r={sidebar_position:1},i="Routing",c={},u=[{value:"Install package",id:"install-package",level:4},{value:"Define Routes in App.js",id:"define-routes-in-appjs",level:4}];function l(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"routing",children:"Routing"})}),"\n",(0,s.jsx)(t.p,{children:"Routing simply means creating a route/linking a link with a page/React Component"}),"\n",(0,s.jsx)(t.h4,{id:"install-package",children:"Install package"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install react-router-dom\n"})}),"\n",(0,s.jsx)(t.h4,{id:"define-routes-in-appjs",children:"Define Routes in App.js"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { BrowserRouter, Routes, Route } from "react-router-dom";\n\nreturn (\n<div>\n    <p>Your App</p>\n    <BrowserRouter>\n    <Routes>\n        <Route path="/">\n        <Route index element={<Home />} />\n        <Route path="blogs" element={<Blogs />} />\n        <Route path="contact" element={<Contact />} />\n        <Route path="*" element={<NoPage />} />\n        </Route>\n    </Routes>\n    </BrowserRouter>\n</div>\n)\n\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);