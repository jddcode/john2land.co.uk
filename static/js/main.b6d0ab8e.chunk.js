(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{43:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t(35),c=t(6),i=t(7),d=t(13),l=t(9),r=t(8),o=t(1),j=t(36),h=t.n(j),b=t(5),m=t(2),x=(t(43),t(25)),u=t.n(x),O=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a.logOut=a.logOut.bind(Object(d.a)(a)),a}return Object(i.a)(t,[{key:"menuBlockClass",value:function(e){return window.location.pathname.substring(0,e.length)==e?"nav-item dropdown active":"nav-item dropdown"}},{key:"logOut",value:function(){this.state.updateApp("session",!1),this.state.updateApp("user",!1),this.setState({session:!1})}},{key:"menuBlockClass",value:function(e){return window.location.pathname.substring(0,e.length)==e?"nav-link active":"nav-link"}},{key:"render",value:function(){var e,n,t,s,c,i,d,l;(null===(e=this.state)||void 0===e||null===(n=e.session)||void 0===n||null===(t=n.User)||void 0===t?void 0:t.ShadowUserID.length)>0?null===(s=this.state)||void 0===s||null===(c=s.session)||void 0===c||null===(i=c.User)||void 0===i||i.ShadowUserID:null===(d=this.state)||void 0===d||null===(l=d.session)||void 0===l||l.User;return Object(a.jsx)("span",{children:Object(a.jsx)("nav",{className:"navbar navbar-lg navbar-expand-lg navbar-dark bg-primary",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b.b,{to:"/",className:"navbar-brand",children:"John2Land.co.uk"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item mb-2 mb-md-0 mr-5",children:Object(a.jsx)(b.b,{to:"/support",className:"nav-link",children:"Our Charities"})}),Object(a.jsx)("li",{className:"nav-item mb-2 mb-md-0 mr-5",children:Object(a.jsx)(b.b,{to:"/route",className:"nav-link",children:"The Route"})}),Object(a.jsx)("li",{className:"nav-item mb-2 mb-md-0 mr-5",children:Object(a.jsx)(b.b,{to:"/equipment",className:"nav-link",children:"Equipment"})}),Object(a.jsx)("li",{className:"nav-item mb-2 mb-md-0 mr-5",children:Object(a.jsx)(b.b,{to:"/sponsors",className:"nav-link",children:"Our Sponsors"})})]})})]})})})}}]),t}(o.Component);function g(e){return e.state.session&&(fetch(e.state.config.Backend+"election/elections/active",{method:"GET",headers:{"x-thebigvote-session":e.state.session.ID}}).then((function(e){return e.json()})).then((function(n){e.state.updateApp("elections",n)})),fetch(e.state.config.Backend+"election/votes",{method:"GET",headers:{"x-thebigvote-session":e.state.session.ID}}).then((function(e){return e.json()})).then((function(n){e.state.updateApp("votes",n)}))),Object(a.jsx)(a.Fragment,{})}var p=function(e){return e.headTitle&&(document.title=e.headTitle),Object(a.jsxs)("span",{children:[Object(a.jsx)(O,{state:e.state}),Object(a.jsx)("main",{className:"main siteBackground",role:"main",children:Object(a.jsx)("div",{className:"pb-4 pt-2",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row mt-3 mb-2 pb-4 mb-sm-2",children:Object(a.jsxs)("div",{className:"col-md-8 mx-auto",children:[Object(a.jsx)("h1",{className:"h1 text-center siteMainHeaderTextColour",children:null===e||void 0===e?void 0:e.title}),function(){if(null===e||void 0===e?void 0:e.pageSubCaption)return Object(a.jsx)("h4",{className:"text-center siteBlueText",children:null===e||void 0===e?void 0:e.pageSubCaption})}()]})}),e.children]})})}),Object(a.jsx)("div",{className:"container bg-primary rounded",children:Object(a.jsx)("div",{className:"row mt-4",children:Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("p",{className:"text-center text-white mb-0 mt-1",children:"John2Land.co.uk"}),Object(a.jsx)("p",{className:"text-center text-white mb-1 mt-0 textFooterSubheading",children:"18th anniversary edition"})]})})}),Object(a.jsx)("div",{className:"pb-2"})]})};function D(e){var n,t,s,c;return!(null===e||void 0===e||null===(n=e.state)||void 0===n||null===(t=n.session)||void 0===t?void 0:t.ID)&&window.location.pathname.includes("/acct")?Object(a.jsx)(m.a,{to:"/"}):(null===e||void 0===e||null===(s=e.state)||void 0===s||null===(c=s.session)||void 0===c?void 0:c.ID)&&!window.location.pathname.includes("/acct")?Object(a.jsx)(m.a,{to:"/acct/elections"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{state:e.state}),e.children]})}t(15),t(16);var N=t(24),v=t.n(N),y=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body textStandardBlue",children:"This page will tell you why, when and where we are as well as how you can help us, Cancer Research UK and CLIC. Why not visit us on your mobile at wap.john2land.co.uk"})}),Object(a.jsx)("div",{className:"card mt-5",children:Object(a.jsxs)("table",{className:"table mb-0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",className:"textStandardBlack",children:"Date"}),Object(a.jsx)("th",{scope:"col",className:"textStandardBlack",children:"Route"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Tuesday 16th Sept 2003 at 20:00"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"16/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Travel to John O' Groats"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Wednesday 17th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"17/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"John O' Groats Preparation"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Thursday 18th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"18/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"John O' Groats to Ross Shire"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Friday 19th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"19/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Ross Shire to Argyll"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Saturday 20th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"20/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Argyll to Glasgow"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Sunday 21st"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"21/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Glasgow to Carlisle"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Monday 22nd"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"22/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Carlisle to Preston"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Tuesday 23rd"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"23/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Preston to Birmingham"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Wednesday 24th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"24/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Birmingham to Bristol"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Thursday 25th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"25/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Bristol to Plymouth"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Friday 26th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"26/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Plymouth to Lands End"})]})]})]})})]})}}]),t}(o.Component),R=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a.switchImage=a.switchImage.bind(Object(d.a)(a)),a}return Object(i.a)(t,[{key:"switchImage",value:function(e){this.setState({image:e})}},{key:"getHumanDate",value:function(e){return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()}},{key:"getTimeFull",value:function(e){var n=String(e.getHours());e.getHours()<10&&(n="0"+n);var t=String(e.getMinutes());e.getMinutes()<10&&(t="0"+t);var a=String(e.getSeconds());return e.getSeconds()<10&&(a="0"+a),n+":"+t+":"+a}},{key:"getHumanTime",value:function(e){var n=String(e.getHours());e.getHours()<10&&(n="0"+n);var t=String(e.getMinutes());e.getMinutes()<10&&(t="0"+t);var a=String(e.getSeconds());return e.getSeconds()<10&&(a="0"+a),n+":"+t}},{key:"render",value:function(){var e=this,n=this.state.config.checkpoints.Checkpoints.map((function(n,t){return Object(a.jsx)(a.Fragment,{children:"undefined"!=typeof n.Image?Object(a.jsxs)("tr",{className:"bg-light",style:{cursor:"pointer"},onClick:function(){return e.switchImage(n.Image)},"data-toggle":"modal","data-target":"#photo",children:[Object(a.jsx)("th",{scope:"row",children:n.Destination}),Object(a.jsx)("td",{className:"d-none d-md-block",children:e.getHumanDate(n.Date)}),Object(a.jsxs)("td",{className:"d-block d-md-none",children:[e.getHumanDate(n.Date)," - ",e.getHumanTime(n.Date)]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("span",{className:"d-inline d-md-none",children:"---"}),Object(a.jsx)("span",{className:"d-none d-md-inline",children:e.getHumanTime(n.Date)})]}),Object(a.jsx)("td",{children:n.Road})]}):Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:n.Destination}),Object(a.jsx)("td",{className:"d-none d-md-block",children:e.getHumanDate(n.Date)}),Object(a.jsxs)("td",{className:"d-block d-md-none",children:[e.getHumanDate(n.Date)," - ",e.getHumanTime(n.Date)]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("span",{className:"d-inline d-md-none",children:"---"}),Object(a.jsx)("span",{className:"d-none d-md-inline",children:e.getHumanTime(n.Date)})]}),Object(a.jsx)("td",{children:n.Road})]})})}));return Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"modal fade",id:"photo",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(a.jsx)("div",{className:"modal-content",children:Object(a.jsx)("img",{src:"/img/"+this.state.image+".jpg"})})})}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header bg-primary text-white lead",children:"The Route"}),Object(a.jsx)("div",{className:"card-body lead",children:"The planned route so far is as follows. This may change slightly as we interrogate autoroute! This page will allow you to see our progress updated automatically as we cycle. This will be done via special login to our WAP site which will enable us not only to see our next destination and route but report back to you exactly where we are and when."})]}),Object(a.jsx)("div",{className:"card mt-5",children:Object(a.jsxs)("table",{className:"table mb-0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Destination"}),Object(a.jsx)("th",{scope:"col",children:"Date"}),Object(a.jsx)("th",{scope:"col",className:"d-none d-md-block",children:"Time"}),Object(a.jsx)("th",{scope:"col",children:"Road"})]})}),Object(a.jsx)("tbody",{children:n})]})})]})}}]),t}(o.Component),f=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsx)("span",{children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header bg-primary text-white lead",children:"Support Cancer Research & CLIC"}),Object(a.jsx)("div",{className:"card-body lead",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{class:"col-12 col-md-6",children:[Object(a.jsx)("p",{className:"lead",children:"Cheques payable to Cancer Research UK"}),Object(a.jsxs)("p",{className:"lead",children:["John2Land",Object(a.jsx)("br",{}),"c/o Dawn Harrison",Object(a.jsx)("br",{}),"Cancer Research UK",Object(a.jsx)("br",{}),"Unit E1",Object(a.jsx)("br",{}),"The Innovation Centre",Object(a.jsx)("br",{}),"University of Exeter",Object(a.jsx)("br",{}),"Devon",Object(a.jsx)("br",{}),"EX4 4RN"]})]}),Object(a.jsxs)("div",{className:"col-12 col-md-6",children:[Object(a.jsx)("p",{className:"lead",children:"Cheques payable to CLIC"}),Object(a.jsxs)("p",{className:"lead",children:["John2Land",Object(a.jsx)("br",{}),"c/o Chris Banting",Object(a.jsx)("br",{}),"CLIC",Object(a.jsx)("br",{}),"3, Glebelands",Object(a.jsx)("br",{}),"Puddington",Object(a.jsx)("br",{}),"Tiverton",Object(a.jsx)("br",{}),"Devon",Object(a.jsx)("br",{}),"EX16 8ND"]})]})]})})]})})}}]),t}(o.Component),A=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("img",{src:"/img/RoyalMarinesEmblem.gif"})}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"The Royal Marines"}),"Thanks to the Royal Marines for transport and accomodation"]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("a",{href:"https://bt.com",target:"_blank",children:Object(a.jsx)("img",{src:"/img/bt_logo.gif"})})}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"BT Procurement"}),"Thanks to Mark Deveny from BT Procurement for supplying mobile comms"]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4"}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"John Driscoll"}),"Thanks to John Driscoll for the technical expertise in developing this site.",Object(a.jsx)("br",{}),"Check out his other project here: \xa0 ",Object(a.jsx)("a",{href:"https://shortify.pro",target:"_blank",children:"shortify.pro"})]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4"}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"Jose Fudge"}),"Thanks to JoseFudge for help, advice and sponsorship when designing our t-shirts"]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("a",{href:"/pjdHome.htm",target:"_blank",children:Object(a.jsx)("img",{src:"/img/pjdlogo.jpg"})})}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"PJD Stock Control"}),"Thanks to PJD Stock Control for celebratory champagne !"]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("a",{href:"http://xpedia.frogtrade.net/",target:"_blank",children:Object(a.jsx)("img",{src:"/img/xpedia_co_uk.gif"})})}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"XPedia.co.uk"}),"Thanks to Roger at XPedia.co.uk for the energy drinks..."]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsxs)("div",{className:"card-body row",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("a",{href:"https://www.o2.co.uk",target:"_blank",children:Object(a.jsx)("img",{src:"/img/O2logo.gif"})})}),Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)("p",{className:"lead",children:"O2"}),"Thanks to Bob Hirons and Tracey Woodhead for our mobile 'talk time'"]})]})}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsx)("div",{className:"card-body",children:"Thanks to John and Julia McDonald of Sidmouth Body Repairs for spraying our spare frame at such short notice."})}),Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:"Thanks to Graham Paton at Linguassist for his generous donation to our charities"})})]})}}]),t}(o.Component),I=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsx)("span",{children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header bg-primary text-white lead",children:"Our Equipment"}),Object(a.jsxs)("div",{className:"card-body lead",children:[Object(a.jsx)("p",{className:"lead",children:"To carry us and our equipment will take two mini busses! Nine riders and two drivers all together. We shall all be using standard 'road bikes' and take plenty of spares. This will include wheels, typres, inner tubes, pedals and even a spare saddle. Of course a full toolkit and plenty of chain lube! If you have done a similar ride and found any spares useful then please let us know; it might just help us out of trouble. You can message us from the 'contact us' page."}),Object(a.jsx)("p",{className:"lead",children:"To update the web site we will be using a GPRS mobile phone and a special WAP service written by John Driscoll. We will also take a laptop computer with modem. This will allow us to update this web site on the move with some pictures of our progress. Check out the links on the 'route' page once the journey gets started."}),Object(a.jsx)("p",{className:"lead",children:"Following our journey of 918 miles we suffered 5 punctures, two broken spokes and one broken frame. For the cycle nuts it was Alan's 501 Raleigh at the right hand rear chain stay, next to the bottom bracket."}),Object(a.jsxs)("p",{children:[Object(a.jsx)("img",{className:"d-none d-lg-block ml-auto mr-auto pt-2",src:"/img/BrokenFrame.JPG"}),Object(a.jsx)("img",{className:"d-inline d-lg-none",width:"350px",src:"/img/BrokenFrame.JPG"})]})]})]})})}}]),t}(o.Component),S=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state=e.state,a}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body textStandardBlue",children:"This page will tell you why, when and where we are as well as how you can help us, Cancer Research UK and CLIC. Why not visit us on your mobile at wap.john2land.co.uk"})}),Object(a.jsx)("div",{className:"card mt-5",children:Object(a.jsxs)("table",{className:"table mb-0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",className:"textStandardBlack",children:"Date"}),Object(a.jsx)("th",{scope:"col",className:"textStandardBlack",children:"Route"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Tuesday 16th Sept 2003 at 20:00"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"16/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Travel to John O' Groats"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Wednesday 17th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"17/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"John O' Groats Preparation"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Thursday 18th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"18/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"John O' Groats to Ross Shire"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Friday 19th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"19/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Ross Shire to Argyll"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Saturday 20th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"20/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Argyll to Glasgow"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Sunday 21st"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"21/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Glasgow to Carlisle"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Monday 22nd"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"22/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Carlisle to Preston"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Tuesday 23rd"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"23/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Preston to Birmingham"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Wednesday 24th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"24/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Birmingham to Bristol"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Thursday 25th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"25/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Bristol to Plymouth"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"textStandardBlue",children:[Object(a.jsx)("span",{className:"d-none d-lg-inline",children:"Friday 26th"}),Object(a.jsx)("span",{className:"d-inline d-lg-none",children:"26/09/03"})]}),Object(a.jsx)("td",{className:"textStandardBlue",children:"Plymouth to Lands End"})]})]})]})})]})}}]),t}(o.Component),w=function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(e){var a;Object(c.a)(this,t),a=n.call(this,e);var s=JSON.parse(u.a.get("state"));return null==s&&(s=new Object),a.state=s,a.storeState=a.storeState.bind(Object(d.a)(a)),a}return Object(i.a)(t,[{key:"configuration",value:function(){return{checkpoints:v.a.load("\nCheckpoints:\n  - Destination: John O Groats\n    Date: 2003-09-18 11:12:07\n    Road: A99\n    Image: 0\n  - Destination: John O Groats\n    Date: 2003-09-19 06:43:44\n    Road: A99\n    Image: 1\n  - Destination: Wick\n    Date: 2003-09-19 07:46:58\n    Road: A99\n    Image: 2\n  - Destination: Dumbeath\n    Date: 2003-09-19 09:25:36\n    Road: A99\n    Image: 3\n  - Destination: Helmsdale\n    Date: 2003-09-19 11:03:36\n    Road: A9\n    Image: 4\n  - Destination: Bora\n    Date: 2003-09-19 12:02:13\n    Road: A9\n    Image: 5\n  - Destination: Golspie\n    Date: 2003-09-19 12:33:09\n    Road: A9\n    Image: 6\n  - Destination: Dornoch Firth\n    Date: 2003-09-19 14:42:46\n    Road: A9\n    Image: 7\n  - Destination: Tain\n    Date: 2003-09-19 14:54:15\n    Road: A9\n    Image: 8\n  - Destination: Alness\n    Date: 2003-09-19 17:12:24\n    Road: A9\n  - Destination: Cromarty Firth\n    Date: 2003-09-19 17:15:00\n    Road: A9\n    Image: 10\n  - Destination: Tore\n    Date: 2003-09-19 17:15:40\n    Road: A9\n  - Destination: Moray Firth\n    Date: 2003-09-19 17:20:37\n    Road: A9\n  - Destination: Inverness\n    Date: 2003-09-19 17:21:55\n    Road: A82\n  - Destination: Drumnadrochit\n    Date: 2003-09-19 18:48:31\n    Road: A82\n  - Destination: Drumnadrochit\n    Date: 2003-09-19 18:48:49\n    Road: A82\n    Image: 15\n  - Destination: Invermoriston\n    Date: 2003-09-20 08:39:42\n    Road: A82\n    Image: 16\n  - Destination: Fort Augustus\n    Date: 2003-09-20 09:48:54\n    Road: A82\n    Image: 17\n  - Destination: Invergarry\n    Date: 2003-09-20 11:11:57\n    Road: A82\n    Image: 18\n  - Destination: Lach Lochy\n    Date: 2003-09-20 11:29:16\n    Road: A82\n    Image: 19\n  - Destination: Spear Bridge\n    Date: 2003-09-20 12:06:37\n    Road: A82\n    Image: 20\n  - Destination: Fort William\n    Date: 2003-09-20 13:36:02\n    Road: A82\n    Image: 21\n  - Destination: Orich\n    Date: 2003-09-20 13:54:59\n    Road: A82\n    Image: 22\n  - Destination: North Ballachuish\n    Date: 2003-09-20 14:52:41\n    Road: A82\n    Image: 23\n  - Destination: Glen Coe\n    Date: 2003-09-20 14:52:46\n    Road: A82\n    Image: 24\n  - Destination: Glen Coe\n    Date: 2003-09-21 07:20:32\n    Road: A82\n    Image: 25\n  - Destination: Bridge Of Orchie\n    Date: 2003-09-21 09:06:06\n    Road: A82\n    Image: 26\n  - Destination: Tyndrum\n    Date: 2003-09-21 09:42:22\n    Road: A82\n    Image: 27\n  - Destination: Crainlarich\n    Date: 2003-09-21 10:03:37\n    Road: A82\n    Image: 28\n  - Destination: Loch Lomond\n    Date: 2003-09-21 12:26:12\n    Road: A82\n    Image: 29\n  - Destination: Tarbet\n    Date: 2003-09-21 13:03:39\n    Road: A82\n    Image: 30\n  - Destination: Luss\n    Date: 2003-09-21 13:22:10\n    Road: A82\n    Image: 31\n  - Destination: Alexandria\n    Date: 2003-09-21 14:03:52\n    Road: A82\n    Image: 32\n  - Destination: Dumbarton\n    Date: 2003-09-21 14:27:08\n    Road: A82\n    Image: 33\n  - Destination: Glasgow (Govan)\n    Date: 2003-09-21 15:26:34\n    Road: Local\n    Image: 34\n  - Destination: Glasgow (Govan)\n    Date: 2003-09-22 08:07:10\n    Road: Local\n    Image: 35\n  - Destination: Hamilton\n    Date: 2003-09-22 08:42:07\n    Road: Local\n    Image: 36\n  - Destination: Larkhall\n    Date: 2003-09-22 09:41:59\n    Road: B7078\n    Image: 37\n  - Destination: Abington\n    Date: 2003-09-22 11:41:30\n    Road: A702\n    Image: 38\n  - Destination: Moffat\n    Date: 2003-09-22 13:05:53\n    Road: A702\n    Image: 39\n  - Destination: Lockerbie\n    Date: 2003-09-22 13:48:46\n    Road: B7076\n    Image: 40\n  - Destination: Gretna Green\n    Date: 2003-09-22 15:25:05\n    Road: A74\n    Image: 41\n  - Destination: Carlisle\n    Date: 2003-09-22 21:10:24\n    Road: A7\n    Image: 42\n  - Destination: Carlisle\n    Date: 2003-09-23 07:30:40\n    Road: A7\n    Image: 43\n  - Destination: Penrith\n    Date: 2003-09-23 08:59:16\n    Road: A6\n    Image: 44\n  - Destination: Shap Fells\n    Date: 2003-09-23 12:23:48\n    Road: A6\n    Image: 45\n  - Destination: Kendal\n    Date: 2003-09-23 13:10:08\n    Road: A6\n    Image: 46\n  - Destination: Carnforth\n    Date: 2003-09-23 14:38:20\n    Road: A6\n    Image: 47\n  - Destination: Lancaster\n    Date: 2003-09-23 15:04:02\n    Road: A6\n    Image: 48\n  - Destination: Garstang\n    Date: 2003-09-23 15:53:56\n    Road: A6\n    Image: 49\n  - Destination: Preston\n    Date: 2003-09-23 16:44:50\n    Road: A6\n    Image: 50\n  - Destination: Preston\n    Date: 2003-09-24 07:48:52\n    Road: A6\n    Image: 51\n  - Destination: Bamber Bridge\n    Date: 2003-09-24 08:03:11\n    Road: A6\n    Image: 52\n  - Destination: Leyland\n    Date: 2003-09-24 08:10:14\n    Road: A49\n  - Destination: Chorley\n    Date: 2003-09-24 08:18:51\n    Road: A49\n  - Destination: Wigan\n    Date: 2003-09-24 09:26:53\n    Road: A49\n  - Destination: Ashton In Makefield\n    Date: 2003-09-24 10:19:58\n    Road: A49\n    Image: 56\n  - Destination: Warrington\n    Date: 2003-09-24 10:54:55\n    Road: A49\n    Image: 57\n  - Destination: Knutsford\n    Date: 2003-09-24 11:48:28\n    Road: A50\n    Image: 58\n  - Destination: Holmes Chapel\n    Date: 2003-09-24 12:20:51\n    Road: A50\n    Image: 59\n  - Destination: Kidsgrove\n    Date: 2003-09-24 14:22:30\n    Road: A34\n    Image: 60\n  - Destination: Stoke On Trent\n    Date: 2003-09-24 15:45:02\n    Road: A34\n    Image: 61\n  - Destination: Stone\n    Date: 2003-09-24 15:45:07\n    Road: A34\n  - Destination: Yarlett\n    Date: 2003-09-24 15:45:10\n    Road: A34\n    Image: 63\n  - Destination: Stafford\n    Date: 2003-09-24 15:45:16\n    Road: A34\n  - Destination: Dunston\n    Date: 2003-09-24 15:45:24\n    Road: A449\n  - Destination: Codsall\n    Date: 2003-09-24 15:47:35\n    Road: A449\n  - Destination: Birmingham\n    Date: 2003-09-24 18:12:27\n    Road: Local\n  - Destination: Birmingham\n    Date: 2003-09-25 04:04:08\n    Road: Local\n    Image: 68\n  - Destination: Bromsgrove\n    Date: 2003-09-25 05:12:00\n    Road: A38\n    Image: 69\n  - Destination: Droitwich\n    Date: 2003-09-25 05:45:59\n    Road: A38\n    Image: 70\n  - Destination: Worcester\n    Date: 2003-09-25 06:23:25\n    Road: A38\n    Image: 71\n  - Destination: Tewkesbury\n    Date: 2003-09-25 07:27:36\n    Road: A38\n    Image: 72\n  - Destination: Gloucester\n    Date: 2003-09-25 08:40:43\n    Road: A38\n    Image: 73\n  - Destination: Cambridge\n    Date: 2003-09-25 10:12:17\n    Road: A38\n    Image: 74\n  - Destination: Newport\n    Date: 2003-09-25 10:38:47\n    Road: A38\n    Image: 75\n  - Destination: Stone\n    Date: 2003-09-25 10:44:03\n    Road: A38\n  - Destination: Almondsbury\n    Date: 2003-09-25 11:20:07\n    Road: A38\n    Image: 77\n  - Destination: Patchway\n    Date: 2003-09-25 11:21:10\n    Road: A38\n    Image: 78\n  - Destination: Filton\n    Date: 2003-09-25 11:32:13\n    Road: A38\n  - Destination: Bristol\n    Date: 2003-09-25 11:57:33\n    Road: A38\n  - Destination: Cowslip Green\n    Date: 2003-09-25 13:19:13\n    Road: A38\n  - Destination: Lower Wear\n    Date: 2003-09-25 13:30:48\n    Road: A38\n  - Destination: Tarnock\n    Date: 2003-09-25 13:40:49\n    Road: A38\n  - Destination: Huntspill\n    Date: 2003-09-25 14:04:29\n    Road: A38\n    Image: 84\n  - Destination: Bridgewater\n    Date: 2003-09-25 14:23:31\n    Road: A38\n    Image: 85\n  - Destination: Taunton\n    Date: 2003-09-25 15:15:17\n    Road: A38\n    Image: 86\n  - Destination: Corfe\n    Date: 2003-09-25 15:54:32\n    Road: B3170\n  - Destination: Newcott\n    Date: 2003-09-25 16:54:25\n    Road: Old A30\n    Image: 88\n  - Destination: Monkton\n    Date: 2003-09-25 17:16:09\n    Road: Old A30\n    Image: 89\n  - Destination: Honiton\n    Date: 2003-09-25 17:41:02\n    Road: Old A30\n  - Destination: Rockbere\n    Date: 2003-09-25 17:42:20\n    Road: Old A30\n  - Destination: Wimple\n    Date: 2003-09-25 17:42:37\n    Road: Old A30\n  - Destination: Exeter Airport\n    Date: 2003-09-25 17:42:47\n    Road: Old A30\n  - Destination: Newton Poppleford\n    Date: 2003-09-25 17:50:49\n    Road: B Road\n  - Destination: Newton Poppleford\n    Date: 2003-09-26 08:19:39\n    Road: B Road\n    Image: 95\n  - Destination: Exeter\n    Date: 2003-09-26 08:19:55\n    Road: A3052\n    Image: 96\n  - Destination: Okehampton\n    Date: 2003-09-26 09:16:33\n    Road: A30\n  - Destination: Launceston\n    Date: 2003-09-26 11:36:56\n    Road: A30\n    Image: 98\n  - Destination: Bodmin\n    Date: 2003-09-26 12:58:41\n    Road: A30\n    Image: 99\n  - Destination: Redruth\n    Date: 2003-09-26 16:05:06\n    Road: A30\n    Image: 100\n  - Destination: Cambourne\n    Date: 2003-09-26 16:10:26\n    Road: A30\n    Image: 101\n  - Destination: Penzance\n    Date: 2003-09-26 17:19:26\n    Road: A30\n    Image: 102\n  - Destination: Drift\n    Date: 2003-09-26 17:31:23\n    Road: A30\n    Image: 103\n  - Destination: Crows-An-Wra\n    Date: 2003-09-26 17:44:41\n    Road: A30\n    Image: 104\n  - Destination: Sennen\n    Date: 2003-09-26 17:51:06\n    Road: A30\n    Image: 106\n  - Destination: Lands End\n    Date: 2003-09-26 17:58:57\n    Road: A30\n    Image: 107\n  \n")}}},{key:"storeState",value:function(e,n){var t=this;JSON.stringify(this.state[e])!=JSON.stringify(n)&&this.setState(Object(s.a)({},e,n),(function(){u.a.set("state",JSON.stringify(t.state))}))}},{key:"render",value:function(){var e=this,n=this.state;return n.updateApp=this.storeState,n.config=this.configuration(),Object(a.jsx)(b.a,{children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",render:function(n){return Object(a.jsx)(D,{state:e.state,children:Object(a.jsx)(p,{state:e.state,title:"John2Land.co.uk",pageSubCaption:"Nine days cycling for Cancer Research UK and CLIC",children:Object(a.jsx)(y,{state:e.state})})})}}),Object(a.jsx)(m.b,{exact:!0,path:"/route",render:function(n){return Object(a.jsx)(D,{state:e.state,children:Object(a.jsx)(p,{state:e.state,title:"John2Land.co.uk",pageSubCaption:"Nine days cycling for Cancer Research UK and CLIC",children:Object(a.jsx)(R,{state:e.state})})})}}),Object(a.jsx)(m.b,{exact:!0,path:"/support",render:function(n){return Object(a.jsx)(D,{state:e.state,children:Object(a.jsx)(p,{state:e.state,title:"John2Land.co.uk",pageSubCaption:"Nine days cycling for Cancer Research UK and CLIC",children:Object(a.jsx)(f,{state:e.state})})})}}),Object(a.jsx)(m.b,{exact:!0,path:"/sponsors",render:function(n){return Object(a.jsx)(D,{state:e.state,children:Object(a.jsx)(p,{state:e.state,title:"John2Land.co.uk",pageSubCaption:"Nine days cycling for Cancer Research UK and CLIC",children:Object(a.jsx)(A,{state:e.state})})})}}),Object(a.jsx)(m.b,{exact:!0,path:"/equipment",render:function(n){return Object(a.jsx)(D,{state:e.state,children:Object(a.jsx)(p,{state:e.state,title:"John2Land.co.uk",pageSubCaption:"Nine days cycling for Cancer Research UK and CLIC",children:Object(a.jsx)(I,{state:e.state})})})}}),Object(a.jsx)(m.b,{exact:!0,path:"/comments",render:function(n){return Object(a.jsx)(D,{state:e.state,children:Object(a.jsx)(p,{state:e.state,title:"John2Land.co.uk",pageSubCaption:"Nine days cycling for Cancer Research UK and CLIC",children:Object(a.jsx)(S,{state:e.state})})})}})]})})}}]),t}(o.Component);h.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.b6d0ab8e.chunk.js.map