(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("e46b6ba2",content,!0,{sourceMap:!1})},192:function(t,e,r){var content=r(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("0678115c",content,!0,{sourceMap:!1})},193:function(t,e,r){"use strict";var o=r(194),n=r.n(o);e.default=n.a},194:function(t,e){},195:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQuODY5cHgiIGhlaWdodD0iMTQuOTk1cHgiIHZpZXdCb3g9IjAgMCAxNC44NjkgMTQuOTk1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNC44NjkgMTQuOTk1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMUYyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIwLjkzMiIgeTE9IjAuOTc0IiB4Mj0iMTMuOTMyIiB5Mj0iMTMuOTcyIi8+DQoJPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjMxRjIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEzLjkzMiIgeTE9IjAuOTczIiB4Mj0iMC45MzIiIHkyPSIxMy45NzMiLz4NCjwvZz4NCjwvc3ZnPg0K"},196:function(t,e,r){"use strict";r(12),r(2),r(1),r(4);var o={head:function(){return{script:[]}},mounted:function(){!function(){function t(t){t.preventDefault();var form=t.target,e=function(form){var t,e=form.elements,r=Object.keys(e).filter((function(r){return"honeypot"!==e[r].name||(t=e[r].value,!1)})).map((function(t){return void 0!==e[t].name?e[t].name:e[t].length>0?e[t].item(0).name:void 0})).filter((function(t,e,r){return r.indexOf(t)==e&&t})),o={};return r.forEach((function(t){var element=e[t];if(o[t]=element.value,element.length){for(var data=[],i=0;i<element.length;i++){var r=element.item(i);(r.checked||r.selected)&&data.push(r.value)}o[t]=data.join(", ")}})),o.formDataNameOrder=JSON.stringify(r),o.formGoogleSheetName=form.dataset.sheet||"responses",o.formGoogleSendEmail=form.dataset.email||"",{data:o,honeypot:t}}(form),data=e.data;if(e.honeypot)return!1;!function(form){for(var t=form.querySelectorAll("button"),i=0;i<t.length;i++)t[i].disabled=!0}(form);var r=form.action,o=new XMLHttpRequest;o.open("POST",r),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){form.reset();var t=form.querySelector(".form-elements");t&&(t.style.display="none");var e=form.querySelector(".thankyou_message");e&&(e.style.display="block")}};var n=Object.keys(data).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(data[t])})).join("&");o.send(n)}document.addEventListener("DOMContentLoaded",(function(){for(var e=document.querySelectorAll("form.gform"),i=0;i<e.length;i++)e[i].addEventListener("submit",t,!1)}),!1)}()}},n=r(39),component=Object(n.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-wrapper"},[r("h6",[t._v("Send a Message")]),t._v(" "),r("form",{staticClass:"gform",attrs:{method:"post",action:"https://script.google.com/macros/s/AKfycbzd8JS6ba3V42JrKt0aAap33dwul4JxQt0fKI8I8IWPa_PsBlQ/exec"}},[r("input",{staticClass:"form-control",attrs:{name:"name",type:"text",required:"",placeholder:"Your Name"}}),t._v(" "),r("input",{staticClass:"form-control",attrs:{name:"message",type:"phone",required:"",placeholder:"Contact"}}),t._v(" "),r("input",{staticClass:"form-control",attrs:{name:"email",type:"email",required:"",placeholder:"Email Address"}}),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"color",placeholder:"How can we help"}}),t._v(" "),r("input",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit",id:"contactFormSubmit",value:"Submit"}}),t._v(" "),r("div",{staticClass:"thankyou_message",staticStyle:{display:"none"}},[r("h2",[r("em",[t._v("Thanks")]),t._v(" for contacting us! We will get back to you soon! ")])])])])}],!1,null,null,null);e.a=component.exports},197:function(t,e,r){t.exports=r.p+"img/4414588.jpg"},198:function(t,e,r){"use strict";var o=r(191);r.n(o).a},199:function(t,e,r){(e=r(25)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},200:function(t,e,r){"use strict";var o=r(192);r.n(o).a},201:function(t,e,r){(e=r(25)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}#header{background-color:#000}.main-nav-trigger{color:#fff}.main-nav-trigger svg{fill:#fff}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},202:function(t,e,r){"use strict";var o=r(204),n=r(193),l=r(39),component=Object(l.a)(n.default,o.a,o.b,!1,null,null,null);e.default=component.exports},203:function(t,e,r){"use strict";r(198);var o=r(39),n={components:{Logo:Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!1,null,null,null).exports,Form:r(196).a},data:function(){return{active:!1,showModal:!1}}},l=(r(200),Object(o.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"modal",class:t.showModal?"fade show":""},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[o("Form"),t._v(" "),o("button",{staticClass:"modal-close-button position-absolute",staticStyle:{top:"12px",right:"12px",border:"0","background-color":"transparent"},on:{click:function(e){t.showModal=!t.showModal}}},[o("img",{attrs:{src:r(195)}})])],1)])]),t._v(" "),o("div",{staticClass:"modal-backdrop hide",class:t.showModal?"fade show":""}),t._v(" "),o("div",{staticClass:"header-container-wrapper"},[o("div",{staticClass:"header-container container-fluid"},[o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-1 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span12 widget-span widget-type-global_group "},[o("div",{},[o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-1 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span12 widget-span widget-type-cell headroom headroom--not-bottom headroom--pinned headroom--top",attrs:{id:"header","data-widget-type":"cell","data-x":"0","data-w":"12"}},[o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-2 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span12 widget-span widget-type-cell page-center"},[o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-3 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span4 widget-span widget-type-cell header-left-col",attrs:{"data-widget-type":"cell","data-x":"0","data-w":"4"}},[o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-4 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span12 widget-span widget-type-custom_widget ",attrs:{"data-widget-type":"custom_widget"}},[o("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module",attrs:{id:""}},[o("div",{staticClass:"main-nav-trigger",class:t.active?"active":"",on:{click:function(e){t.active=!t.active}}},[o("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"27.567px",height:"18.046px",viewbox:"0 0 27.567 18.046","enable-background":"new 0 0 27.567 18.046","xml:space":"preserve"}},[o("rect",{attrs:{x:"0.345",y:"0.573",width:"26.903",height:"1.91"}}),t._v(" "),o("rect",{attrs:{x:"0.345",y:"8.071",width:"26.903",height:"1.91"}}),t._v(" "),o("rect",{attrs:{x:"0.345",y:"15.589",width:"26.903",height:"1.91"}})]),t._v(" "),o("span",[t._v("menu")])])])])])]),t._v(" "),o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-5 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span12 widget-span widget-type-custom_widget main-nav",class:t.active?"active":""},[o("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-menu",attrs:{id:"hs_cos_wrapper_module_155040545766534"}},[o("span",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu",attrs:{id:"hs_cos_wrapper_module_155040545766534_"}},[o("div",{staticClass:"hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal",attrs:{id:"hs_menu_wrapper_module_155040545766534_",role:"navigation","data-sitemap-name":"default","data-menu-id":"7634573452","aria-label":"Navigation Menu"}},[o("ul",{staticClass:"active-branch"},[o("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("about us")])],1),t._v(" "),o("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[o("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),o("li",{staticClass:"hs-menu-item hs-menu-depth-1 active active-branch"},[o("nuxt-link",{attrs:{to:"/how-we-work"}},[t._v("How We work")])],1),t._v(" "),o("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[o("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])]),t._v(" "),o("a",{staticClass:"main-nav-close",attrs:{href:"#"},on:{click:function(e){t.active=!t.active}}},[o("img",{attrs:{src:r(195)}}),t._v(" menu")])])])])]),t._v(" "),o("div",{staticClass:"span4 widget-span widget-type-custom_widget header-logo text-aligncenter"},[o("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image",attrs:{id:"hs_cos_wrapper_module_155040545185032"}},[o("span",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image",attrs:{id:"hs_cos_wrapper_module_155040545185032_"}},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"hs-image-widget ",staticStyle:{width:"140px","border-width":"0px",border:"0px",padding:"10px 0"},attrs:{src:r(197),width:"219",alt:""}})])],1)])]),t._v(" "),o("div",{staticClass:"span4 widget-span widget-type-cell header-right-col",attrs:{"data-widget-type":"cell","data-x":"8","data-w":"4"}},[o("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-6 "},[o("div",{staticClass:"row-fluid "},[o("div",{staticClass:"span12 widget-span widget-type-custom_widget ",attrs:{"data-widget-type":"custom_widget","data-x":"0","data-w":"12"}},[o("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-text",attrs:{id:"hs_cos_wrapper_module_155049393287983"}},[o("span",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text",attrs:{id:"hs_cos_wrapper_module_155049393287983_"}},[o("button",{staticClass:"header-form-trigger",class:t.showModal?"showModal":"",staticStyle:{border:"0",color:"#fff","background-color":"transparent"},attrs:{id:"show-modal"},on:{click:function(e){t.showModal=!t.showModal}}},[t._v("Request a Proposal")])])])])])])])])])])])])])])])])])])])])])])}),[],!1,null,null,null));e.a=l.exports},204:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"footer-container-wrapper"},[r("div",{staticClass:"footer-container container-fluid"},[r("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-1 "},[r("div",{staticClass:"row-fluid "},[r("div",{staticClass:"span12 widget-span widget-type-global_group "},[r("div",{},[r("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-1 "},[r("div",{staticClass:"row-fluid "},[r("div",{staticClass:"span12 widget-span widget-type-cell ",attrs:{id:"footer"}},[r("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-2 "},[r("div",{staticClass:"row-fluid "},[r("div",{staticClass:"span12 widget-span widget-type-cell page-center"},[r("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-3 "},[r("div",{staticClass:"row-fluid "},[r("div",{staticClass:"span9 widget-span widget-type-custom_widget "},[r("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-menu",attrs:{id:"","data-hs-cos-general-type":"widget","data-hs-cos-type":"module"}},[r("span",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu",attrs:{id:"","data-hs-cos-general-type":"widget","data-hs-cos-type":"menu"}},[r("div",{staticClass:"hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal",attrs:{id:"",role:"navigation","data-sitemap-name":"default","data-menu-id":"","aria-label":"Navigation Menu"}},[r("ul",[r("li",{staticClass:"hs-menu-itemo hs-menu-depth-1"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[r("nuxt-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),r("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[r("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),r("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[r("nuxt-link",{attrs:{to:"/how-we-work"}},[t._v("How We work")])],1),t._v(" "),r("li",{staticClass:"hs-menu-item hs-menu-depth-1"},[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])])]),t._v(" "),t._m(0)])])])])])])])])])])])])])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"span3 widget-span widget-type-custom_widget footer-social",attrs:{"data-widget-type":"custom_widget","data-x":"8","data-w":"4"}},[e("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"},[e("span",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text",attrs:{id:"hs_cos_wrapper_module_156564307524850_","data-hs-cos-general-type":"widget","data-hs-cos-type":"rich_text"}},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com//",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}},[this._v(" ")])])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/company//",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}},[this._v(" ")])])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}},[this._v(" ")])])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fa fa-youtube-play",attrs:{"aria-hidden":"true"}},[this._v(" ")])])])])])])])}]},205:function(t,e,r){var content=r(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("2f96c9f5",content,!0,{sourceMap:!1})},216:function(t,e,r){t.exports=r.p+"img/b10df37.jpg"},217:function(t,e,r){"use strict";var o=r(205);r.n(o).a},218:function(t,e,r){(e=r(25)(!1)).push([t.i,".ns-inner-banner-01-inner[data-v-f7611cee]{height:auto}@media (min-width:767px){.ns-inner-banner-01-inner[data-v-f7611cee]{height:440px}}",""]),t.exports=e},241:function(t,e,r){"use strict";r.r(e);var o=r(203),n=r(202),l=r(216),c=r.n(l),d={components:{Header:o.a,Footer:n.default},data:function(){return{aboutImg:c.a}}},w=(r(217),r(39)),component=Object(w.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("div",{staticClass:"body-container-wrapper"},[r("div",{staticClass:"body-container container-fluid"},[r("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-1 mb-5 pb-0"},[r("div",{staticClass:"row-fluid "},[r("div",{staticClass:"span12 widget-span widget-type-custom_widget ",attrs:{"data-widget-type":"custom_widget","data-x":"0","data-w":"12"}},[r("div",{staticClass:"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module",attrs:{id:"hs_cos_wrapper_module_1550574174983172","data-hs-cos-general-type":"widget","data-hs-cos-type":"module"}},[r("div",{staticClass:"ns-inner-banner-01"},[r("div",{staticClass:"page-center"},[r("div",{staticClass:"ns-inner-banner-01-inner",style:{backgroundImage:"url("+t.aboutImg+")"}},[r("div",{staticClass:"bg-overlay"}),t._v(" "),r("div",{staticClass:"ns-inner-banner-01-image"},[r("img",{attrs:{src:t.aboutImg,sizes:"(max-width: 1221px) 100vw, 1221px"}}),t._v(" "),r("h1",{staticClass:"wow fadeInLeft "},[t._v("About Us")])])])])])])])])]),t._v(" "),t._m(0)])]),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row-fluid-wrapper row-depth-1 row-number-1 mb-5 pb-5"},[e("div",{staticClass:"row-fluid "},[e("div",{staticClass:"page-center"},[e("p",{staticClass:"mx-md-5 px-md-5 mb-5"},[this._v("\n          Wydersocial is a digital marketing agency. That’s the short version, but it just doesn’t tell the whole story. We are a fresh start up with a bunch of Marketing specialists and e Commerce experts who have been in the industry for more then a decade and worked in various parts of the world like USA, UK, ASIA, AUSTRALIA & ME region. ")]),this._v(" "),e("p",{staticClass:"mx-md-5 px-md-5"},[this._v("\nOur company is defined by people, and our people are spectacular. What we really are is a specialized, digitally-savvy collection of marketing specialists that understand the connection between content and customers. Working together, we help our clients achieve exceptional results by finding the most valuable opportunities, and executing each component at the highest level. We’re data driven. We’re tenacious. And we’re committed to pushing the forefront of digital marketing.")])])])])}],!1,null,"f7611cee",null);e.default=component.exports}}]);