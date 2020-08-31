function import$(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function in$(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n])return!0;return!1}require.register("config.jsenv",function(e,t,n){n.exports={DOMAIN_NAME:"hackfoldr.org",GITHUB_ACCOUNT:"hackfoldr",HACKFOLDR_ID:"congressoccupied",GA_ID:"UA-39804485-1",BUILD:"git-b3c0cb2",GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.router","ui.router.stateHelper"]).config(["stateHelperProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.setNestedState({name:"about",url:"/about",templateUrl:"partials/about.html"}),e.setNestedState({name:"hack",url:"/{hackId:[^/]{1,}}",templateUrl:"partials/hack.html",resolve:{hackId:["$stateParams"].concat(function(e){return e.hackId})},controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")},children:[{name:"index",url:"/__index"},{name:"doc",url:"/{docId}"}]}),t.otherwise("/about"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0}),e.$safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var folderWhitelist,slice$=[].slice,replace$="".replace;folderWhitelist=function(e){return!0},angular.module("app.controllers",["ui.router","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(e,t,n,r,o){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return o(function(){return window.scrollTo(0,1)},0)}),o(function(){return r.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","$q","HackFolder","hackId"].concat(function(e,t,n,r,o,c,i,l){var a,u;return import$(e,{hackId:l,hasViewMode:function(e){return null!=e?e.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:i.iframes,docs:i.docs,tree:i.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+l+"/"+decodeURIComponent(t.id))},open:function(e){return window.open(e.url,e.id),!1},activate:function(e){var t;return t=i.activate(e),"hackfoldr"===(null!=t?t.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},showSaveModal:function(t,n,r){return $(".ui.modal.save").modal("toggle",t),r&&(e.saveBtn=$(r.target)),n&&(o.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:i,barframeSrc:function(e){var n;return n=e.opts.bar.replace(/\{(\w+)\}/g,function(){return e[arguments[1]]}),t.trustAsResourceUrl(n)},iframeCallback:function(t){return null==t&&(t={}),function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),r.current.title=t.title,t.title&&(document.title=t.title+" – hackfoldr"),"fail"===n?t.noiframe=!0:t.noiframe=!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(){return i.getIndex(l,!0,function(){})}}),folderWhitelist(l)?(e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(t):void 0}),a=c.defer(),a.promise.then(function(){return e.$watch("docId",function(t){var n,o,c;if(null!=t)r.params.docId===(null!=(n=e.first)?n.id:void 0)&&r.transitionTo("hack.doc",{docId:"",hackId:l});else if(o=null!=(n=e.first)?n.id:void 0)return null==e.docId&&(e.docId=o),void r.transitionTo("hack.doc",{docId:"",hackId:l});return t&&(c=i.activate(t)),"hackfoldr"===(null!=c?c.type:void 0)?(e.showIndex=!0,i.loadRemoteCsv(c.id,function(n,r,o){var c,a,u;return c=function(){var e,n,r,o=[];for(e=0,r=(n=i.tree).length;r>e;++e)c=n[e],c.id===t&&o.push(c);return o}()[0],c.tagFilter=null!=(a=c.tags)&&null!=(u=a[0])?u.content:void 0,c.children||(null==c.children&&(c.children=null!=o?o[0].children:void 0),(a=i.docs).splice.apply(a,[r.length,0].concat(slice$.call(r)))),e.indexDocs=r,e.indexSearch=l.replace(/^g0v-/,"")})):e.showIndex=!1})}),e.showIndex="hack.index"===r.current.name,e.showIndex?void 0:(e.collapsed=null!=(u=o.collapsed)?u:n.innerWidth<768,"false"===e.collapsed&&(e.collapsed=!1),e.$watch("collapsed",function(e){return null!=e?o.collapsed=!!e:void 0}),e.sidebar=!1,e.toggleSidebar=function(){return e.collapsed=!1,e.sidebar=!e.sidebar},i.getIndex(l,!1,function(){return e.$safeApply(e,function(){var t;return e.first=function(){var e,n,r,o=[];for(e=0,r=(n=i.docs).length;r>e;++e)t=n[e],t.url&&o.push(t);return o}()[0],a.resolve()})}))):n.location.href="http://hackfoldr.org/"+n.location.pathname})}).directive("resize",["$window"].concat(function(e){return function(t,n,r){var o;return o=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var o,c,i;return o=e(r.ngxIframe)(t),c=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),o(t&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(i),c(this.contentWindow,!0)}),i=setTimeout(function(){return c(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t,n){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var o,c;return o=e(r.ngxClickMeta),c=navigator.appVersion.match(/(Win|X11)/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return c(e)&&!o(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t,n){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t,n,r){var o;return o=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".ui.menu").height()},angular.element(e).bind("resize",function(){return t.$apply(o)}),t.$watch("docs",o),o()}})).factory({HackFolder:["$http","$sce"].concat(function(e,t){var n,r,o,c,i;return n={},r=[],o=[],i={iframes:n,docs:r,tree:o,activate:function(e,c){function i(e){return e.id}var l,a,u,s,d,p,f,h,g,v,m;for(null==c&&(c=!1),a=function(){var t,n,o,c=[];for(t=0,o=(n=r).length;o>t;++t)l=n[t],l.id===e&&c.push(l);return c}()[0],u=null!=a?a.type:void 0,s=0,p=(d=o).length;p>s;++s)f=d[s],(h=null!=f&&null!=(g=f.children)?g.map(i):void 0)&&in$(e,h)&&(f.expand=!0);return v=c?"edit":"view",m=function(){var t;switch(t=[u],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+v;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+v;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=a.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.net/"+e;case"video"!==t[0]:if("youtube"===a.provider)return"https://www.youtube.com/embed/"+e;if("ustream"===a.provider)return"http://www.ustream.tv/embed/"+e+"?v=3";break;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),null!=a&&a.hashtag&&(m+=null!=a?a.hashtag:void 0),m&&(m=t.trustAsResourceUrl(m)),"hackfoldr"===(null!=a?a.type:void 0)?a:((h=n[e])?(h.src=m,h.mode=v):n[e]={src:m,doc:a,mode:v},a)},getIndex:function(t,n,l){var a,u,s,d,p=this;return c!==t||n?(localStorage[t]&&!n&&(a=function(){try{return JSON.parse(localStorage[t])}catch(e){}}(),a&&(c=t,this.loadCsv(a,r,o,function(e,t){return i.folderTitle=e,l(t)}))),u={"Kaohsiung-explode-20140801":"1WVWrKC-Tbry3ltgouQPpZH2Cd2HkKeZ8DjLs4PWa1z4"},s=0,(d=/^[-\w]{40}[-\w]*$/.exec(u[t]||t)?function(){var e;return e=function(e){var n,o,i,a={}.hasOwnProperty;for(n in e)if(a.call(e,n))return o=e[n],r.length=0,c=t,i=o.toArray(),void p.processCsv(i,t,l)},Tabletop.init({key:u[t]||t,callback:e,simpleSheet:!1})}:function(){return e.get("https://ethercalc.net/_/"+t+"/csv").error(function(){return++s>3?void 0:setTimeout(d,1e3)}).success(function(e){return c=t,r.length=0,p.processCsv(e,t,l)})})()):l(r)},processCsv:function(e,t,n){return"string"==typeof e&&(e=replace$.call(e,/^\"?#.*\n/gm,""),e=CSV.parse(e)),localStorage[t]=JSON.stringify(e),this.loadCsv(e,r,o,function(e,t){return i.folderTitle=e,n(t)})},loadRemoteCsv:function(t,n){var r=this;return e.get("https://ethercalc.net/_/"+t+"/csv").success(function(e){var t,o;return t=[],o=[],r.loadCsv(e,t,o,function(e){return n(e,t,o)})})},loadCsv:function(e,t,n,r){function o(){try{return JSON.parse(w.replace(/""/g,'"'))}catch(e){}}function c(){var e;switch(e=[v],!1){case void 0!==e[0]:return u||(m&&(u=m,m=null),w&&(s=w)),{title:m,type:"dummy",id:"dummy"};case!(A=/^\/\/(.*?)(?:\#(.*))?$/.exec(e[0])):return{type:"hackfoldr",id:A[1],tag:A[2]};case!(A=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:A[1]};case!(A=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:A[1],id:A[2]};case!(A=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(e[0])):return{type:"video",provider:"youtube",id:A[1],icon:"https://www.google.com/s2/favicons?domain="+v};case!(A=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(e[0])):return{type:"video",provider:"ustream",id:A[1],icon:"https://www.google.com/s2/favicons?domain="+v};case!(A=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(v)),icon:"https://www.google.com/s2/favicons?domain="+A[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",v):void 0}}function i(e){return e.length}function l(e){var t,n,r,o,c;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],r=t[1],o=t[2],c=slice$.call(t,3),{content:r,"class":null!=o?o:"warning"}}var a,u,s,d,p,f,h,g,v,m,w,y,b,k,I,x,C,S,O,A,_,H,F,P,R,T,U;for(a=e,s={},p=[],f=0,h=a.length;h>f;++f)if(g=a[f],null!=g&&g.length){if(v=g[0],m=g[1],w=g[2],y=g[3],b=g[4],k=slice$.call(g,5),!m)continue;if(m=replace$.call(m,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=o()),null==w&&(w={}),y&&(y=replace$.call(y,/^"|"$/g,"")),I=v.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),null==I||!I.length)continue;x=I[0],C=I[1],v=I[2],S=I[3],O=import$({summary:b,hashtag:S,url:v,title:m,indent:C.length,opts:import$(import$({},s),w)},c()),"dummy"!==O.type||null!=(_=O.title)&&_.length?p.push(import$(import$({icon:"/img/"+O.type+".png"},O),{tags:(null!=(_=null!=(H=O.opts)?H.tags:void 0)?_:[]).concat((null!=(_=null!=y?y.split(","):void 0)?_:[]).filter(i).map(l))})):p.push(null)}for(d=p,d.filter(function(e){return null!=e?e.url:void 0}).map(function(e){var t,n,r;return"video"===e.type&&"youtube"===e.provider?(t=gapi.client.youtube.videos.list({id:e.id,part:"snippet"}),t.execute(function(t){var n;return"live"===(null!=(n=t.items)?n[0].snippet.liveBroadcastContent:void 0)?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=e.url.match(/ustream.tv\/embed\/([^?]+)/))?(r=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+r+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(t){var n,r;return"live"===JSON.parse(null!=(n=t.query)&&null!=(r=n.results)&&null!=(n=r.body)?n.p:void 0).results?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),t.splice.apply(t,[0,t.length].concat(slice$.call(d.filter(function(e){return null!=e})))),F=0,p=[],f=0,h=t.length;h>f;++f)R=f,O=t[f],R>0&&O.indent?(T=t[F],U=null!=(_=T.children)?_:T.children=[],U.push(O),p.push(null)):(F=R,p.push(O));return P=p,P=P.filter(function(e){return null!=e}),P=P.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:e.children.length<5),e}),n.splice.apply(n,[0,n.length].concat(slice$.call(P))),r(u,t)}}})}).directive("ngxTooltip",function(){return function(e,t,n){return $(t).popup({position:"right center",duration:1})}});
