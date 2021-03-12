(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,s,t){},14:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(7),i=t.n(a),r=(t(12),t(2)),l=t(3),o=t(5),j=t(4),d=t(0),h=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(d.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,target:"_blank",children:Object(d.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),t}(c.Component),m=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns",children:Object(d.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:e.aboutme}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.address}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.website})]})]})})]})]})})}}]),t}(c.Component),b=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.UniversityName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.CompanyName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:e.skillsDescription}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(d.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),t}(c.Component),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:"#modal-01",children:[Object(d.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.name}),Object(d.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),t}(c.Component),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"testimonials",children:[Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Client Testimonials"})})}),Object(d.jsxs)("div",{className:"ten columns flex-container",children:[Object(d.jsx)("div",{className:"flexslider",children:Object(d.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("blockquote",{children:[Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]}),"  "]})}}]),t}(c.Component),p=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsx)("div",{className:"row section-head",children:Object(d.jsx)("div",{className:"ten columns",children:Object(d.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(d.jsx)("div",{className:"widget",children:Object(d.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),t}(c.Component),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"twelve columns",children:Object(d.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})})}))})}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),f={imagebaseurl:"https://drgloo.github.io/",name:"Raishan Bernard",role:"Full Stack Developer",linkedinId:"Raishan Bernard",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of development and love to learn about new technologies, write code for my games or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/raishan-bernard-a17741157/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/drgloo",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/raishanbernard",className:"fa fa-twitter"}],aboutme:"I am currently a final year student at the Borough of Manhattan Community College and pursuing my bachelor's in Computer Science from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe in becoming the best version of myself, so I can contribute more to the world.",address:"Brooklyn, New York",website:"https://drgloo.github.io",education:[{UniversityName:"Borough of Manhattan Community College",specialization:"Computer Science",MonthOfPassing:"Dec",YearOfPassing:"2021",Achievements:"Increased my knowledge on the fundementals of Computer Science by learning the stucture mechnization of Computing."}],skillsDescription:"Generalization of my Skills",skills:[{skillname:"Full Stack Development"},{skillname:"Python Development"},{skillname:"C++"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"In extremely tough times, when most students fell by the wayside, Raishan has risen to the occasion. All of Raishan's work was top notch and turned in on time. In addition, Raishan will bring a lot to the table",name:"Mark Janis, Raishan's teacher at Borough of Manhattan Community College"},{description:"He's friendly, intelligent, and mature. You can trust him to do a great job and represent your company well.",name:"Christopher Rohner, Raishan's teacher at Brooklyn High School for Law and Technology"}]},v=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{resumeData:f}),Object(d.jsx)(m,{resumeData:f}),Object(d.jsx)(b,{resumeData:f}),Object(d.jsx)(u,{resumeData:f}),Object(d.jsx)(O,{resumeData:f}),Object(d.jsx)(p,{resumeData:f}),Object(d.jsx)(x,{resumeData:f})]})}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.087ac442.chunk.js.map