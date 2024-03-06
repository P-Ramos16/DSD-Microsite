"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[479],{9855:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=s(4848),i=s(8453);const r={},a="API Instances",o={id:"The Backend Implementation/api_Instances",title:"API Instances",description:"architecture diagram",source:"@site/docs/The Backend Implementation/3-api_Instances.md",sourceDirName:"The Backend Implementation",slug:"/The Backend Implementation/api_Instances",permalink:"/microsite/docs/next/The Backend Implementation/api_Instances",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Load Balancer",permalink:"/microsite/docs/next/The Backend Implementation/load_balancer"},next:{title:"Databases",permalink:"/microsite/docs/next/The Backend Implementation/databases"}},l={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Why Python and FastAPI",id:"why-python-and-fastapi",level:2},{value:"The FastAPI implementation",id:"the-fastapi-implementation",level:2},{value:"Endpoints",id:"endpoints",level:3},{value:"Models",id:"models",level:3},{value:"Repositories",id:"repositories",level:3},{value:"Utils",id:"utils",level:3},{value:"Templates",id:"templates",level:3},{value:"Tests",id:"tests",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"api-instances",children:"API Instances"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"architecture diagram",src:s(7048).A+"",width:"1920",height:"889"})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#api-instances",children:"API Instances"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#why-python-and-fastapi",children:"Why Python and FastAPI"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#the-fastapi-implementation",children:"The FastAPI implementation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#endpoints",children:"Endpoints"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#models",children:"Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#repositories",children:"Repositories"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#utils",children:"Utils"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#templates",children:"Templates"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tests",children:"Tests"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"why-python-and-fastapi",children:"Why Python and FastAPI"}),"\n",(0,t.jsxs)(n.p,{children:["For the API itself, we chose to use ",(0,t.jsx)(n.a,{href:"https://fastapi.tiangolo.com/",children:(0,t.jsx)(n.strong,{children:"FastAPI"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This choice was heavily influenced by the fact that ",(0,t.jsx)(n.strong,{children:"all the code must be extremely well documented"})," and easy to change in the future."]}),"\n",(0,t.jsxs)(n.p,{children:["FastAPI also provides ",(0,t.jsx)(n.strong,{children:"more functionality"}),' than some of its more "barebones" competitors (for example, ',(0,t.jsx)(n.strong,{children:"flask"}),"), while ",(0,t.jsx)(n.strong,{children:"omitting most of the less used features"})," of more complex alternatives (for example, ",(0,t.jsx)(n.strong,{children:"django"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["The option of creating a ",(0,t.jsx)(n.strong,{children:"Spring-based API"})," or choosing a programming language ",(0,t.jsx)(n.strong,{children:"other than Python"})," is not possible, as the code itself ",(0,t.jsx)(n.strong,{children:"must be able to be maintained"})," by people who may not have the specific knowledge to quickly apply the changes that might be needed in the future."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Future proofing"})," also had a large impact on our decision, as all the components of this project must be able to have perhaps even ",(0,t.jsx)(n.strong,{children:"decades of support"}),", since if just one of the components used is discontinued, the whole action flow will be disrupted, causing ",(0,t.jsx)(n.strong,{children:"problems in the whole pipeline"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, ",(0,t.jsx)(n.strong,{children:"Python"})," and ",(0,t.jsx)(n.strong,{children:"FastAPI"})," were chosen because of their ",(0,t.jsx)(n.strong,{children:"featuresets"}),", easy ",(0,t.jsx)(n.strong,{children:"maintainability"}),", relatively ",(0,t.jsx)(n.strong,{children:"proven"})," future, and good ",(0,t.jsx)(n.strong,{children:"performance"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"the-fastapi-implementation",children:"The FastAPI implementation"}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"architecture diagram",src:s(6611).A+"",width:"1640",height:"320"})})}),"\n",(0,t.jsxs)(n.p,{children:["The final API codebase was divided into ",(0,t.jsx)(n.strong,{children:"multiple subsections"}),":"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"endpoints",children:"Endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["The endpoints consist of all the ",(0,t.jsx)(n.strong,{children:"accessible functions of the API"}),", along with their parameters and responses."]}),"\n",(0,t.jsxs)(n.p,{children:["All the endpoint's documentation can be found on the ",(0,t.jsx)(n.strong,{children:"Swagger documentation"})," on the API itself, at ",(0,t.jsx)(n.a,{href:"localhost:8080/docs",children:(0,t.jsx)(n.strong,{children:"localhost:8080/docs"})})," (the application must be on in order for this page to work)."]}),"\n",(0,t.jsxs)(n.p,{children:["The endpoints consist of ",(0,t.jsx)(n.strong,{children:"CRUD"})," and ",(0,t.jsx)(n.strong,{children:"other functions"})," that operate on the ",(0,t.jsx)(n.strong,{children:"models"})," and ",(0,t.jsx)(n.strong,{children:"local files"})," that have been inserted into the backend."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"models",children:"Models"}),"\n",(0,t.jsxs)(n.p,{children:["The models are the ",(0,t.jsx)(n.strong,{children:"Python/Database"})," representation of the ",(0,t.jsx)(n.strong,{children:"real-life objects"})," that we are working with, providing a simpler and more clear approach to ",(0,t.jsx)(n.strong,{children:"data manipulation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"There are multiple models, for example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User"})," Model;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dissertation"})," Model;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Notification"})," Model;"]}),"\n",(0,t.jsx)(n.li,{children:"etc."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.a,{href:"https://pydantic.dev/",children:(0,t.jsx)(n.strong,{children:"pydantic"})})," library, all the models automatically apply ",(0,t.jsx)(n.strong,{children:"data consistency checks"}),", valid value checks, ",(0,t.jsx)(n.strong,{children:"default values"}),", etc for all the parameters and variables stored inside a given model object, allowing for a much ",(0,t.jsx)(n.strong,{children:"easier and cleaner code"})," implementation."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"repositories",children:"Repositories"}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"interacting with the main database"}),", a set of repository actions was implemented that allow the ",(0,t.jsx)(n.strong,{children:"abstraction"})," of the database components in the rest of the application."]}),"\n",(0,t.jsx)(n.p,{children:"These repositories apply the necessary database operations to the main Database given a set of predefined parameters, and respond with the semi-processed outcome of the database."}),"\n",(0,t.jsxs)(n.p,{children:["These are essential to ",(0,t.jsx)(n.strong,{children:"ensure that the database is not overloaded"})," with bad requests from other functions, that the database threads are used ",(0,t.jsx)(n.strong,{children:"efficiently"})," and that access to the database is ",(0,t.jsx)(n.strong,{children:"easy to alter"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"utils",children:"Utils"}),"\n",(0,t.jsxs)(n.p,{children:["The utils are a set of functions that provide ",(0,t.jsx)(n.strong,{children:"extended functionality"})," to other parts of the API."]}),"\n",(0,t.jsx)(n.p,{children:"These functions include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authenticating"})," users;"]}),"\n",(0,t.jsxs)(n.li,{children:["Creating and sending ",(0,t.jsx)(n.strong,{children:"email notifications"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:["Getting the ",(0,t.jsx)(n.strong,{children:"configurations"})," from the Configuration Database;"]}),"\n",(0,t.jsxs)(n.li,{children:["Managing ",(0,t.jsx)(n.strong,{children:"local files"})," from the Filesystem;"]}),"\n",(0,t.jsx)(n.li,{children:"etc."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"templates",children:"Templates"}),"\n",(0,t.jsxs)(n.p,{children:["These templates are used by ",(0,t.jsx)(n.a,{href:"https://jinja.palletsprojects.com/en/3.1.x/",children:(0,t.jsx)(n.strong,{children:"Jinja"})})," and the API to ",(0,t.jsx)(n.strong,{children:"generate simple HTML code"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The generated file can then be sent to an ",(0,t.jsx)(n.strong,{children:"email notification"})," or used to ",(0,t.jsx)(n.strong,{children:"list all the data collected"})," throughout the year (useful for collecting information from the previous year for backups)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tests",children:"Tests"}),"\n",(0,t.jsx)(n.p,{children:"The test portion is still to be implemented."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6611:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/fastapi-5bae2045bbe5e9007688cd42056414f9.png"},7048:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/python_fastapi-d787a2251c7c30a803d185f449a657e3.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);