"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7211],{5100:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>i,assets:()=>a,chCodeConfig:()=>y,contentTitle:()=>c,default:()=>A,frontMatter:()=>l,metadata:()=>p,toc:()=>F});var n=e(4848),s=e(8453),r=e(4754);const l={title:"API Keys",sidebar_position:1,slug:"/configuration-api-keys"},c=void 0,p={id:"Configuration/configuration-api-keys",title:"API Keys",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Configuration/configuration-api-keys.md",sourceDirName:"Configuration",slug:"/configuration-api-keys",permalink:"/configuration-api-keys",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"API Keys",sidebar_position:1,slug:"/configuration-api-keys"},sidebar:"defaultSidebar",previous:{title:"Authentication",permalink:"/configuration-authentication"},next:{title:"Command Line Interface (CLI)",permalink:"/configuration-cli"}},a={},i={annotations:r.hk,Code:r.Cy},y={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},F=[{value:"Generate an API key",id:"c29986a69cad4cdbbe7537e383ea7207",level:2},{value:"Generate an API key with the Langflow UI",id:"3d90098ddd7c44b6836c0273acf57123",level:3},{value:"Generate an API key with the Langflow CLI",id:"2368f62fc4b8477e8080c9c2d3659d76",level:3},{value:"Use the Langflow API key",id:"ae787e4b0d3846aa9094fac75e0ac04f",level:2},{value:"Use the <code>x-api-key</code> header",id:"70965b3ad24d467ca4f90e7c13a1f394",level:3},{value:"Use the query parameter",id:"febb797f3bb5403b9f070afc0fa4f453",level:3},{value:"Security Considerations",id:"1273eb69a61344d19827b30dba46dfd5",level:2},{value:"Custom API endpoint",id:"da933a86690a4fdeac24024472caf8a9",level:2},{value:"Revoke an API Key",id:"f0ea41ea167845cea91bb5e8f90d9df0",level:2}];function d(o){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...o.components};return i||D("CH",!1),i.Code||D("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,n.jsx)(t.p,{children:"Langflow provides an API key functionality that allows users to access their individual components and flows without traditional login authentication. The API key is a user-specific token that can be included in the request header or query parameter to authenticate API calls. This documentation outlines how to generate, use, and manage API keys in Langflow."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"The default user and password are set using the LANGFLOW_SUPERUSER and LANGFLOW_SUPERUSER_PASSWORD environment variables. The default values are langflow and langflow, respectively."})}),"\n",(0,n.jsx)(t.h2,{id:"c29986a69cad4cdbbe7537e383ea7207",children:"Generate an API key"}),"\n",(0,n.jsx)(t.p,{children:"Generate a user-specific token to use with Langflow."}),"\n",(0,n.jsx)(t.h3,{id:"3d90098ddd7c44b6836c0273acf57123",children:"Generate an API key with the Langflow UI"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Click on the "API Key" icon.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:e(9416).A+"",width:"278",height:"76"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Click on "Create new secret key".'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Give it an optional name."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Click on "Create secret key".'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Copy the API key and store it in a secure location."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"2368f62fc4b8477e8080c9c2d3659d76",children:"Generate an API key with the Langflow CLI"}),"\n",(0,n.jsx)(i.Code,{codeConfig:y,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"api-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow api-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e",props:{style:{color:"#FFA657"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"API Key Created Successfully:                                       \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                                     ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"sk-O0elzoWID1izAH8RUKrnnvyyMwIzHi2Wk-uXWoNJ2Ro                      \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                                     ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"This is the only time the API key will be displayed.                \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"Make sure to store it in a secure location.                         \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                                     ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"The API key has been copied to your clipboard. Cmd + V to paste it. \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",props:{style:{color:"#FFA657"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{id:"ae787e4b0d3846aa9094fac75e0ac04f",children:"Use the Langflow API key"}),"\n",(0,n.jsx)(t.p,{children:"Include your API key in API requests to authenticate requests to Langflow."}),"\n",(0,n.jsxs)(t.h3,{id:"70965b3ad24d467ca4f90e7c13a1f394",children:["Use the ",(0,n.jsx)(t.code,{children:"x-api-key"})," header"]}),"\n",(0,n.jsxs)(t.p,{children:["Include the ",(0,n.jsx)(t.code,{children:"x-api-key"})," in the HTTP header when making API requests:"]}),"\n",(0,n.jsx)(i.Code,{codeConfig:y,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  <",props:{style:{color:"#FF7B72"}}},{content:"http://localhost:3000/api/v1/run",props:{style:{color:"#A5D6FF"}}},{content:"/><",props:{style:{color:"#C9D1D9"}}},{content:"your_flow_i",props:{style:{color:"#A5D6FF"}}},{content:"d",props:{style:{color:"#C9D1D9"}}},{content:"> ",props:{style:{color:"#FF7B72"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json'",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -H ",props:{style:{color:"#79C0FF"}}},{content:"'x-api-key: <your api key>'",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -d ",props:{style:{color:"#79C0FF"}}},{content:'\'{"inputs": {"text":""}, "tweaks": {}}\'',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["With Python using ",(0,n.jsx)(t.code,{children:"requests"}),":"]}),"\n",(0,n.jsx)(i.Code,{codeConfig:y,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" requests",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" typing ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Optional",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"BASE_API_URL ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"<http://localhost:3001/api/v1/process>"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"FLOW_ID ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"4441b773-0724-434e-9cee-19d995d8f2df"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# You can tweak the flow by adding a tweaks dictionary",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:'# e.g {"OpenAI-XXXXX": {"model_name": "gpt-4"}}',props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"TWEAKS ",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"run_flow",props:{style:{color:"#D2A8FF"}}},{content:"(inputs: ",props:{style:{color:"#C9D1D9"}}},{content:"dict",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            flow_id: ",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            tweaks: Optional[",props:{style:{color:"#C9D1D9"}}},{content:"dict",props:{style:{color:"#79C0FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"None",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            apiKey: Optional[",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"None",props:{style:{color:"#79C0FF"}}},{content:") -> ",props:{style:{color:"#C9D1D9"}}},{content:"dict",props:{style:{color:"#79C0FF"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'    """',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    Run a flow with a given message and optional tweaks.",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :param message: The message to send to the flow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :param flow_id: The ID of the flow to run",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :param tweaks: Optional tweaks to customize the flow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :return: The JSON response from the flow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    """',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    api_url ",props:{style:{color:"#C9D1D9"}}},{content:"= f",props:{style:{color:"#FF7B72"}}},{content:'"',props:{style:{color:"#A5D6FF"}}},{content:"{BASE_API_URL}",props:{style:{color:"#79C0FF"}}},{content:"/",props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"flow_id",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    payload ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"inputs"',props:{style:{color:"#A5D6FF"}}},{content:": inputs}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    headers ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    if",props:{style:{color:"#FF7B72"}}},{content:" tweaks:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        payload[",props:{style:{color:"#C9D1D9"}}},{content:'"tweaks"',props:{style:{color:"#A5D6FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" tweaks",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    if",props:{style:{color:"#FF7B72"}}},{content:" apiKey:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        headers ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"x-api-key"',props:{style:{color:"#A5D6FF"}}},{content:": apiKey}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    response ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" requests.post(api_url, ",props:{style:{color:"#C9D1D9"}}},{content:"json",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"payload, ",props:{style:{color:"#C9D1D9"}}},{content:"headers",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"headers)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    return",props:{style:{color:"#FF7B72"}}},{content:" response.json()",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Setup any tweaks you want to apply to the flow",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"inputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"text"',props:{style:{color:"#A5D6FF"}}},{content:":",props:{style:{color:"#C9D1D9"}}},{content:'""',props:{style:{color:"#A5D6FF"}}},{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"api_key ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"<your api key>"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(run_flow(inputs, ",props:{style:{color:"#C9D1D9"}}},{content:"flow_id",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"FLOW_ID",props:{style:{color:"#79C0FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"tweaks",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"TWEAKS",props:{style:{color:"#79C0FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"apiKey",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"api_key))",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsx)(t.h3,{id:"febb797f3bb5403b9f070afc0fa4f453",children:"Use the query parameter"}),"\n",(0,n.jsx)(t.p,{children:"Include the API key as a query parameter in the URL:"}),"\n",(0,n.jsx)(i.Code,{codeConfig:y,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  <",props:{style:{color:"#FF7B72"}}},{content:"http://localhost:3000/api/v1/process",props:{style:{color:"#A5D6FF"}}},{content:"/><",props:{style:{color:"#C9D1D9"}}},{content:"your_flow_i",props:{style:{color:"#A5D6FF"}}},{content:"d",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}},{content:"?x-api-key=",props:{style:{color:"#A5D6FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"your_api_ke",props:{style:{color:"#A5D6FF"}}},{content:"y",props:{style:{color:"#C9D1D9"}}},{content:"> ",props:{style:{color:"#FF7B72"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json'",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -d ",props:{style:{color:"#79C0FF"}}},{content:'\'{"inputs": {"text":""}, "tweaks": {}}\'',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["With Python using ",(0,n.jsx)(t.code,{children:"requests"}),":"]}),"\n",(0,n.jsx)(i.Code,{codeConfig:y,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" requests",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"BASE_API_URL ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"<http://localhost:3001/api/v1/process>"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"FLOW_ID ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"4441b773-0724-434e-9cee-19d995d8f2df"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# You can tweak the flow by adding a tweaks dictionary",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:'# e.g {"OpenAI-XXXXX": {"model_name": "gpt-4"}}',props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"TWEAKS ",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"run_flow",props:{style:{color:"#D2A8FF"}}},{content:"(inputs: ",props:{style:{color:"#C9D1D9"}}},{content:"dict",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            flow_id: ",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            tweaks: Optional[",props:{style:{color:"#C9D1D9"}}},{content:"dict",props:{style:{color:"#79C0FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"None",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            apiKey: Optional[",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"None",props:{style:{color:"#79C0FF"}}},{content:") -> ",props:{style:{color:"#C9D1D9"}}},{content:"dict",props:{style:{color:"#79C0FF"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'    """',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    Run a flow with a given message and optional tweaks.",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :param message: The message to send to the flow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :param flow_id: The ID of the flow to run",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :param tweaks: Optional tweaks to customize the flow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    :return: The JSON response from the flow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    """',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    api_url ",props:{style:{color:"#C9D1D9"}}},{content:"= f",props:{style:{color:"#FF7B72"}}},{content:'"',props:{style:{color:"#A5D6FF"}}},{content:"{BASE_API_URL}",props:{style:{color:"#79C0FF"}}},{content:"/",props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"flow_id",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    payload ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"inputs"',props:{style:{color:"#A5D6FF"}}},{content:": inputs}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    headers ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    if",props:{style:{color:"#FF7B72"}}},{content:" tweaks:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        payload[",props:{style:{color:"#C9D1D9"}}},{content:'"tweaks"',props:{style:{color:"#A5D6FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" tweaks",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    if",props:{style:{color:"#FF7B72"}}},{content:" apiKey:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        api_url ",props:{style:{color:"#C9D1D9"}}},{content:"+= f",props:{style:{color:"#FF7B72"}}},{content:'"?x-api-key=',props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"apiKey",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    response ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" requests.post(api_url, ",props:{style:{color:"#C9D1D9"}}},{content:"json",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"payload, ",props:{style:{color:"#C9D1D9"}}},{content:"headers",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"headers)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    return",props:{style:{color:"#FF7B72"}}},{content:" response.json()",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Setup any tweaks you want to apply to the flow",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"inputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"text"',props:{style:{color:"#A5D6FF"}}},{content:":",props:{style:{color:"#C9D1D9"}}},{content:'""',props:{style:{color:"#A5D6FF"}}},{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"api_key ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"<your api key>"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(run_flow(inputs, ",props:{style:{color:"#C9D1D9"}}},{content:"flow_id",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"FLOW_ID",props:{style:{color:"#79C0FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"tweaks",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"TWEAKS",props:{style:{color:"#79C0FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"apiKey",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"api_key))",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{id:"1273eb69a61344d19827b30dba46dfd5",children:"Security Considerations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Visibility"}),": For security reasons, the API key cannot be retrieved again through the UI."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scope"}),": The key allows access only to the flows and components of the specific user to whom it was issued."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"da933a86690a4fdeac24024472caf8a9",children:"Custom API endpoint"}),"\n",(0,n.jsxs)(t.p,{children:["Under ",(0,n.jsx)(t.strong,{children:"Project Settings"})," > ",(0,n.jsx)(t.strong,{children:"Endpoint Name"}),", you can pick a custom name for the endpoint used to call your flow from the API."]}),"\n",(0,n.jsx)(t.h2,{id:"f0ea41ea167845cea91bb5e8f90d9df0",children:"Revoke an API Key"}),"\n",(0,n.jsx)(t.p,{children:"To revoke an API key, delete it from the UI. This action immediately invalidates the key and prevents it from being used again."})]})}function A(o={}){const{wrapper:t}={...(0,s.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}function D(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},9416:(o,t,e)=>{e.d(t,{A:()=>n});const n="data:image/png;base64,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"}}]);