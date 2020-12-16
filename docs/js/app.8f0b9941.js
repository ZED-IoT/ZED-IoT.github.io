(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0a12":function(t,e,i){t.exports=i.p+"img/ZED_Logo_02.285d4f95.png"},1438:function(t,e,i){t.exports=i.p+"img/ZED_Switch.c2856803.png"},"3d3e":function(t,e,i){t.exports=i.p+"img/ZED_FYI_Price.d8a77c6b.jpg"},5575:function(t,e,i){t.exports=i.p+"img/VP.5a72e70b.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.$vuetify.breakpoint.smAndDown?a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:""}},[a("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4"}},t._l(t.menu,(function(e,i){var s=e.text,n=e.link;return a("v-list-item",{key:i,attrs:{href:n},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-list-item-title",[t._v(t._s(s))])],1)})),1)],1)],1):t._e(),a("v-app-bar",{attrs:{app:"",color:"white",height:"100"}},[t.$vuetify.breakpoint.smAndDown?a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),a("v-img",{class:{"center-image":t.$vuetify.breakpoint.smAndDown},staticStyle:{cursor:"pointer"},attrs:{contain:"","max-height":"70%","max-width":"200",src:i("0a12"),onclick:"window.scrollTo({  top: 0,  left: 0 });"}}),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("div",t._l(t.menu,(function(e,i){var s=e.text,n=e.link;return a("v-btn",{key:i,attrs:{text:"",href:n}},[t._v(" "+t._s(s)+" ")])})),1):t._e()],1),a("v-main",[a("section",{attrs:{id:"hero"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-img",{attrs:{height:"calc(100vh - "+t.$vuetify.application.top+"px)",src:i("3d3e")}},[a("v-theme-provider",{attrs:{dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[a("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" Are you ready to be ")]),a("br"),a("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" amaZED? ")])]),a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:"",href:"#about-us"}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),a("section",{attrs:{id:"about-us"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("About us")]),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" We have identified 6 major sectors where extreme IoT energy harvesting solutions can provide a good product-market fit. The goal of the company is to have a versatile and diverse portfolio and not be fixed on one single use case or problem. These sectors are based on past experiments and results where ZED sees potential to provide a sustainable solution. The potential use cases where batteryless systems can contribute are in flood detection, large scale predictive maintenance, inventory management, precision agriculture, weather monitoring systems and smart transportation. These sectors are subject to client’s own IoT infrastructure requirements and problems. The beachhead market selected is smart transportation where ZED is currently working with the first client. The plan is to further develop base prototypes for these use cases which enables them to utilize networks of batteryless devices while also investigating potential bottlenecks to their deployment. By developing different aspects of the system, ZED can be better prepared to customize and further innovate based on the customer’s needs. The final system development will unequivocally be driven by market forces and client pain points. ")])],1),a("div",{staticClass:"py-12"})],1),a("section",{attrs:{id:"switch"}},[a("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:i("1438")}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(e){var i=e[0],s=e[1];return a("v-col",{key:s,attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"display-3 font-weight-black mb-4",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(s)}})])])})),1)],1)],1)],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Features")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.features,(function(e,i){var s=e.image,n=e.title,r=e.text;return a("v-col",{key:i,staticClass:"d-flex",attrs:{"align-self":"stretch",cols:"12",md:"6",sm:"12"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"120"}},[a("v-img",{staticStyle:{"border-radius":"initial"},attrs:{contain:"","max-height":"60",src:s}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(n)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{textContent:t._s(r)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("section",{attrs:{id:"stats"}},[a("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:i("ed28")}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(e){var i=e[0],s=e[1];return a("v-col",{key:s,attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"display-3 font-weight-black mb-4",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(s)}})])])})),1)],1)],1)],1),a("section",{staticClass:"primary",attrs:{id:"team"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3 white--text"},[t._v("The team")]),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 white--text",attrs:{"max-width":"720"}},[t._v(" Our multinational multidisciplinary team comprises scientists, engineers and commercial experts who bring years of technical and commercial experience to the table. As shown in the figure above, we follow a horizontal organizational structure. The people who build ZED consist of: ")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1",staticStyle:{"border-color":"white"}}),a("v-divider",{staticStyle:{"border-color":"white"}})],1),a("v-row",t._l(t.team,(function(e,i){var s=e.image,n=e.name,r=e.text;return a("v-col",{key:i,staticClass:"d-flex",attrs:{"align-self":"stretch",cols:"12",md:"6",sm:"12"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"250"}},[a("v-img",{attrs:{contain:"",src:s}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(n)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{textContent:t._s(r)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("section",{attrs:{id:"lab"}},[a("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:i("a50b")}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(e){var i=e[0],s=e[1];return a("v-col",{key:s,attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"display-3 font-weight-black mb-4",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(s)}})])])})),1)],1)],1)],1),a("section",{attrs:{id:"news"}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("News")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.articles,(function(e,i){var s=e.src,n=e.text,r=e.title,o=e.link;return a("v-col",{key:i,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:s,height:"275","max-width":"100%"}}),a("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(r)}}),a("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(n)}}),a("v-btn",{staticClass:"ml-n4 font-weight-black",attrs:{text:"",href:o}},[t._v(" Continue Reading ")])],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:" font-weight-bold mb-3 text-uppercase text-center"},[t._v(" Contact Us ")]),a("p",{staticClass:"text-center"},[t._v(" Email: "),a("a",{staticStyle:{color:"white"},attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])])]),a("div",{staticClass:"py-12"})],1)],1),a("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[a("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — ZED ")])])],1)},n=[],r={name:"App",components:{},created:function(){this.setFavicon(window.matchMedia("(prefers-color-scheme: dark)").matches)},methods:{setFavicon:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?"favicon_white.ico":"favicon_black.ico";document.getElementById("favicon").setAttribute("href",e)}},data:function(){return{drawer:!1,email:"info@ZED-IoT.nl",menu:[{text:"About us",link:"#about-us"},{text:"Features",link:"#features"},{text:"The team",link:"#team"},{text:"News",link:"#news"}],articles:[{src:"https://user-images.githubusercontent.com/17768955/101504996-22564200-3974-11eb-9096-62144d25318c.jpg",title:"Winning the Airbus FYI competition",text:"Under the name of Zero Heroes, ZED has won the prestigious Airbus Fly Your Ideas price. From 300 steams ZED convinced the jury with their energy harvesting solutions inside aircrafts.",link:"https://www.airbus.com/newsroom/press-releases/en/2019/06/pioneering-student-team-from-the-netherlands-wins-airbus-fly-your-ideas-2019-global-competition.html"},{src:"https://user-images.githubusercontent.com/17768955/102208298-87a7b700-3ecf-11eb-964e-4f9fabb56b59.PNG",title:"Winning the 4TU Impact challenge",text:"After wining the TU-Delft impact competition, ZED wins the national 4TU Impact challenge. Winning tickets to the World Expo in Dubai, where ZED will join the Dutch trade delegation representing the Netherlands.",link:"https://4tuimpactchallenge.nl/news/384"},{src:"https://user-images.githubusercontent.com/17768955/102208431-b32aa180-3ecf-11eb-84fe-d984551ce524.jpg",title:"Delta, TuDelft article",text:"Read why smart electronics are becoming battery free.",link:""}],features:[{image:i("ebee"),title:"Large scale Predictive Maintenance",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."},{image:i("9e7d"),title:"Smart Transportation",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."},{image:i("ceba"),title:"Flood Detection",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"},{image:i("f1fa"),title:"Perpetual Weather Stations",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"},{image:i("9d264"),title:"Inventory Management",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."},{image:i("c062"),title:"Precision Agriculture",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."}],team:[{image:i("5575"),name:"Dr. R.R. Venkatesha Prasad (a.k.a VP)",text:"Known fondly in the team as VP, Dr. Prasad is an associate professor at the Embedded and Networked Systems Group at TU, Delft. He spends three quarters of his time teaching and researching at the university and the other quarter working for ZED using his experience and network within the industry. He possesses 6 years of startup experience. In his startup venture, Esqube Communication Solutions, he developed an integrated VoIP--Telephony--web application suite. One real-time application he developed, to bridge VoIP calls anonymously, called Click-to-Talk, was appreciated by Ebay.com. The startup filed for eight patent applications and three PCT applications and was selected as top 100 IT innovators in India (NASSCOM 2006) and top 100 promising companies in Asia (RedHerring 2008). VP has more than 20 years of network, wireless, and IoT research expertise having mentored many PhDs and master students thus far. A never ending pool of ideas and enthusiasm, VP ensures that ZED never misses an opportunity either technical or financial."},{image:i("93a8"),name:"Ir. N.H. Hokke (a.k.a. Niels)",text:"Niels, a recent graduate under VP, worked on the topic of batteryless wireless communication in his masters at TU Delft. Instead of starting as a PhD and adding more research papers into an already full archive, Niels instead believes in transforming state of the art research into real life tangible products for the benefit of society. As CEO, Niels is fully focusing all of his time on building up ZED as a vehicle which can move our innovation from the labs of the university onto the industrial factory floor where it can truly make a difference saving time and money for our clients."},{image:i("f202"),name:"Ir. S. Sharma (a.k.a Suryansh)",text:"Suryansh, who also recently graduated under VP on the topic of batteryless wireless sensing, is currently pursuing a PhD at TU Delft on AIoT where he combines the power of AI and IoT systems to extreme applications. Suryansh kickstarted ZED’s journey at the Impact Challenge, granting the team a platform for experiencing entrepreneurship and gaining much needed structure and direction. Passionate for Innovation, He believes in the power of ideas and wants to transform research papers into tangible technology which can benefit the society at large."},{image:i("6f46"),name:"Dr. S. Narayana (a.k.a Sujay)",text:"Sujay, is currently working as a postdoc with VP at TU Delft. Having finished his Phd in resource constrained space IoT devices, Sujay is an expert in coordinating operations and guiding technical development within the team. Extremely methodical and scientifically sound, he brings a wide range of industrial engineering as well as research experience to ZED. With him on board, we look at “space” as another frontier for us to conquer."},{image:i("dd6d"),name:"J. I. van der Velde (a.k.a Josine)",text:"Business associate Josine is a student at NHL-Stenden studying International Business and Management Studies. She is doing her internship full-time at ZED and helps refine the business structure of ZED. Instrumental in developing a marketing strategy and reaching out to potential clients, Josine is always up for new challenges. While working she likes to keep control over the overall scope while ensuring a fun motivated atmosphere within the team."}],stats:[]}}},o=r,c=(i("5c0b"),i("2877")),l=i("6544"),u=i.n(l),d=i("7496"),p=i("40dc"),m=i("5bc1"),h=i("8212"),v=i("8336"),f=i("b0af"),g=i("99d9"),b=i("62ad"),w=i("a523"),y=i("ce7e"),x=i("553a"),C=i("132d"),k=i("adda"),_=i("8860"),D=i("da13"),P=i("1baa"),E=i("5d23"),S=i("f6c4"),V=i("f774"),T=i("8b9c"),j=i("6b53"),I=i("0fd9"),A=i("8dd9"),Z=i("2fa4"),q=i("480e"),N=Object(c["a"])(o,s,n,!1,null,null,null),O=N.exports;u()(N,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:m["a"],VAvatar:h["a"],VBtn:v["a"],VCard:f["a"],VCardText:g["a"],VCardTitle:g["b"],VCol:b["a"],VContainer:w["a"],VDivider:y["a"],VFooter:x["a"],VIcon:C["a"],VImg:k["a"],VList:_["a"],VListItem:D["a"],VListItemGroup:P["a"],VListItemTitle:E["a"],VMain:S["a"],VNavigationDrawer:V["a"],VParallax:T["a"],VResponsive:j["a"],VRow:I["a"],VSheet:A["a"],VSpacer:Z["a"],VThemeProvider:q["a"]});var L=i("f309");a["a"].use(L["a"]);var W=new L["a"]({theme:{themes:{light:{primary:"#173569"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:W,render:function(t){return t(O)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"6f46":function(t,e,i){t.exports=i.p+"img/Sujay.5cf3470b.jpg"},"93a8":function(t,e,i){t.exports=i.p+"img/Niels.32e7ba12.jpg"},"9c0c":function(t,e,i){},"9d264":function(t,e,i){t.exports=i.p+"img/ZED_icon_White_Inventory.1aefa965.png"},"9e7d":function(t,e,i){t.exports=i.p+"img/ZED_icon_White_Transportation.11c807e6.png"},a50b:function(t,e,i){t.exports=i.p+"img/ZED_LAB.3db23904.png"},c062:function(t,e,i){t.exports=i.p+"img/ZED_icon_White_Agriculture.2e06a649.png"},ceba:function(t,e,i){t.exports=i.p+"img/ZED_icon_White_Detection.3e3104aa.png"},dd6d:function(t,e,i){t.exports=i.p+"img/Josine.668cb25f.jpg"},ebee:function(t,e,i){t.exports=i.p+"img/ZED_icon_White_Maintenance.1be2e77e.png"},ed28:function(t,e,i){t.exports=i.p+"img/ZED_Switch_2.77da6aa2.png"},f1fa:function(t,e,i){t.exports=i.p+"img/ZED_icon_White_weatherstations.cbac1d92.png"},f202:function(t,e,i){t.exports=i.p+"img/Suryansh.8628eed1.jpg"}});
//# sourceMappingURL=app.8f0b9941.js.map