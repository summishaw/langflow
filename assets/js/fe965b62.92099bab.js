"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[784],{2095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(4848),o=n(8453);const r={title:"Document QA",sidebar_position:2,slug:"/starter-projects-document-qa"},c=void 0,i={id:"Starter-Projects/starter-projects-document-qa",title:"Document QA",description:"Build a question-and-answer chatbot with a document loaded from local memory.",source:"@site/docs/Starter-Projects/starter-projects-document-qa.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-document-qa",permalink:"/starter-projects-document-qa",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Document QA",sidebar_position:2,slug:"/starter-projects-document-qa"},sidebar:"defaultSidebar",previous:{title:"Blog Writer",permalink:"/starter-projects-blog-writer"},next:{title:"Memory Chatbot",permalink:"/starter-projects-memory-chatbot"}},a={},l=[{value:"Prerequisites",id:"6555c100a30e4a21954af25e2e05403a",level:2},{value:"Create the Document QA project",id:"204500104f024553aab2b633bb99f603",level:2},{value:"Run the Document QA",id:"f58fcc2b9e594156a829b1772b6a7191",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Build a question-and-answer chatbot with a document loaded from local memory."}),"\n",(0,s.jsx)(t.h2,{id:"6555c100a30e4a21954af25e2e05403a",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/getting-started-installation",children:"Langflow installed and running"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"204500104f024553aab2b633bb99f603",children:"Create the Document QA project"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,s.jsx)(t.strong,{children:"New Project"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select\xa0",(0,s.jsx)(t.strong,{children:"Document QA"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Document QA"}),"\xa0project is created."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7190).A+"",width:"2624",height:"1476"})}),"\n",(0,s.jsxs)(t.p,{children:["This flow is composed of a standard chatbot with the\xa0",(0,s.jsx)(t.strong,{children:"Chat Input"}),",\xa0",(0,s.jsx)(t.strong,{children:"Prompt"}),",\xa0",(0,s.jsx)(t.strong,{children:"OpenAI"}),", and\xa0",(0,s.jsx)(t.strong,{children:"Chat Output"}),"\xa0components, but it also incorporates a ",(0,s.jsx)(t.strong,{children:"File"})," component, which loads a file from your local machine. ",(0,s.jsx)(t.strong,{children:"Parse Data"})," is used to convert the data from ",(0,s.jsx)(t.strong,{children:"File"})," into the\xa0",(0,s.jsx)(t.strong,{children:"Prompt"}),"\xa0component as\xa0",(0,s.jsx)(t.code,{children:"{Document}"}),". The\xa0",(0,s.jsx)(t.strong,{children:"Prompt"}),"\xa0component is instructed to answer questions based on the contents of\xa0",(0,s.jsx)(t.code,{children:"{Document}"}),". This gives the\xa0",(0,s.jsx)(t.strong,{children:"OpenAI"}),"\xa0component context it would not otherwise have access to."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2288).A+"",width:"3104",height:"1746"})}),"\n",(0,s.jsx)(t.h2,{id:"f58fcc2b9e594156a829b1772b6a7191",children:"Run the Document QA"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To select a document to load, in the\xa0",(0,s.jsx)(t.strong,{children:"File"}),"\xa0component, click the\xa0",(0,s.jsx)(t.strong,{children:"Path"}),"\xa0field. Select a local file, and then click\xa0",(0,s.jsx)(t.strong,{children:"Open"}),". The file name appears in the field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7403).A+"",width:"2656",height:"1494"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Playground"}),"\xa0button. Here you can chat with the AI that has access to your document's content."]}),"\n",(0,s.jsx)(t.li,{children:"Type in a question about the document content and press Enter. You should see a contextual response."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7403:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/1073956357-ad06ac6117db6c773f2b153e155e6fd2.png"},2288:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/1140665127-3f2b06d41cf3e8871307680b17f373e9.png"},7190:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/727819216-06357f178dd332e6eb79cd7897bd8019.png"},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);