!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_URL="https://api.unsplash.com",e.API_VERSION="v1",e.OAUTH_AUTHORIZE_URL="https://unsplash.com/oauth/authorize",e.OAUTH_TOKEN_URL="https://unsplash.com/oauth/token"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};e.formUrlEncode=s,e.getUrlComponents=function(t){return(0,u.default)(t,{},!0)},e.buildFetchOptions=function(t){var e=t.method,r=t.query,i=t.oauth,u=t.body,a=!0===i?t.url:""+this._apiUrl+t.url,c=o({},this._headers,t.headers,{"Accept-Version":this._apiVersion,Authorization:this._bearerToken?"Bearer "+this._bearerToken:"Client-ID "+this._applicationId});u&&(c["Content-Type"]="application/x-www-form-urlencoded");r&&(a=decodeURIComponent(a+"?"+(0,n.stringify)(r)));return{url:a,options:{method:e,headers:c,body:"GET"!==e&&u?s(u):void 0}}};var n=r(2),i=a(r(8)),u=a(r(9));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,i.default)(t)}},function(t,e,r){"use strict";e.decode=e.parse=r(6),e.encode=e.stringify=r(7)},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();e.toJson=function(t){return"function"==typeof t.json?t.json():t};var n=r(0),i=r(1),u=d(r(12)),a=d(r(13)),s=d(r(14)),c=d(r(15)),l=d(r(17)),f=d(r(18)),h=d(r(19)),p=d(r(20));function d(t){return t&&t.__esModule?t:{default:t}}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._apiUrl=e.apiUrl||n.API_URL,this._apiVersion=e.apiVersion||n.API_VERSION,this._applicationId=e.applicationId,this._secret=e.secret,this._callbackUrl=e.callbackUrl,this._bearerToken=e.bearerToken,this._headers=e.headers||{},this.auth=u.default.bind(this)(),this.currentUser=a.default.bind(this)(),this.users=s.default.bind(this)(),this.photos=c.default.bind(this)(),this.categories=l.default.bind(this)(),this.collections=f.default.bind(this)(),this.search=h.default.bind(this)(),this.stats=p.default.bind(this)()}return o(t,[{key:"request",value:function(t){var e=i.buildFetchOptions.bind(this)(t),r=e.url,o=e.options;return fetch(r,o)}}]),t}();e.default=y},function(t,e,r){"use strict";r.r(e);var o=r(4),n=new(r.n(o).a)({applicationId:"e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",secret:"8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",callbackUrl:"http://bgatesmf.bget.ru/auth"}).auth.getAuthenticationUrl(["public","write_likes"]);location.assign(n)},function(t,e,r){"use strict";function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,i){e=e||"&",r=r||"=";var u={};if("string"!=typeof t||0===t.length)return u;var a=/\+/g;t=t.split(e);var s=1e3;i&&"number"==typeof i.maxKeys&&(s=i.maxKeys);var c=t.length;s>0&&c>s&&(c=s);for(var l=0;l<c;++l){var f,h,p,d,y=t[l].replace(a,"%20"),v=y.indexOf(r);v>=0?(f=y.substr(0,v),h=y.substr(v+1)):(f=y,h=""),p=decodeURIComponent(f),d=decodeURIComponent(h),o(u,p)?n(u[p])?u[p].push(d):u[p]=[u[p],d]:u[p]=d}return u};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(t){switch(o(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,s){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===o(t)?u(a(t),function(o){var a=encodeURIComponent(n(o))+r;return i(t[o])?u(t[o],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[o]))}).join(e):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function u(t,e){if(t.map)return t.map(e);for(var r=[],o=0;o<t.length;o++)r.push(e(t[o],o));return r}var a=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t,e){function o(t){return String(t).replace(/[^ !'()~\*]*/g,encodeURIComponent).replace(/ /g,"+").replace(/[!'()~\*]/g,function(t){return"%"+t.charCodeAt().toString(16).slice(-2).toUpperCase()})}function n(t){var r=Object.keys(t);return e.sorted?r.sort():r}function i(t){return t.filter(function(t){return t}).join("&")}function u(t,a){var s=r(a),c=null;return a===c?c=e.ignorenull?c:o(t)+"="+c:/string|number|boolean/.test(s)?c=o(t)+"="+o(a):Array.isArray(a)?c=function(t,e){return i(e.map(function(e){return u(t+"[]",e)}))}(t,a):"object"===s&&(c=function(t,e){return i(n(e).map(function(r){return u(t+"["+r+"]",e[r])}))}(t,a)),c}return e="object"===r(e)?e:{},i(n(t).map(function(e){return u(e,t[e])}))}},function(t,e,r){"use strict";(function(e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=r(10),i=r(11),u=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function l(t){var r,n=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},i={},u=o(t=t||n);if("blob:"===t.protocol)i=new h(unescape(t.pathname),{});else if("string"===u)for(r in i=new h(t,{}),c)delete i[r];else if("object"===u){for(r in t)r in c||(i[r]=t[r]);void 0===i.slashes&&(i.slashes=a.test(t.href))}return i}function f(t){var e=u.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function h(t,e,r){if(!(this instanceof h))return new h(t,e,r);var u,a,c,p,d,y,v=s.slice(),b=o(e),_=this,g=0;for("object"!==b&&"string"!==b&&(r=e,e=null),r&&"function"!=typeof r&&(r=i.parse),e=l(e),u=!(a=f(t||"")).protocol&&!a.slashes,_.slashes=a.slashes||u&&e.slashes,_.protocol=a.protocol||e.protocol||"",t=a.rest,a.slashes||(v[3]=[/(.*)/,"pathname"]);g<v.length;g++)"function"!=typeof(p=v[g])?(c=p[0],y=p[1],c!=c?_[y]=t:"string"==typeof c?~(d=t.indexOf(c))&&("number"==typeof p[2]?(_[y]=t.slice(0,d),t=t.slice(d+p[2])):(_[y]=t.slice(d),t=t.slice(0,d))):(d=c.exec(t))&&(_[y]=d[1],t=t.slice(0,d.index)),_[y]=_[y]||u&&p[3]&&e[y]||"",p[4]&&(_[y]=_[y].toLowerCase())):t=p(t);r&&(_.query=r(_.query)),u&&e.slashes&&"/"!==_.pathname.charAt(0)&&(""!==_.pathname||""!==e.pathname)&&(_.pathname=function(t,e){for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=r.length,n=r[o-1],i=!1,u=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),u++):u&&(0===o&&(i=!0),r.splice(o,1),u--);return i&&r.unshift(""),"."!==n&&".."!==n||r.push(""),r.join("/")}(_.pathname,e.pathname)),n(_.port,_.protocol)||(_.host=_.hostname,_.port=""),_.username=_.password="",_.auth&&(p=_.auth.split(":"),_.username=p[0]||"",_.password=p[1]||""),_.origin=_.protocol&&_.host&&"file:"!==_.protocol?_.protocol+"//"+_.host:"null",_.href=_.toString()}h.prototype={set:function(t,e,r){var o=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(r||i.parse)(e)),o[t]=e;break;case"port":o[t]=e,n(e,o.protocol)?e&&(o.host=o.hostname+":"+e):(o.host=o.hostname,o[t]="");break;case"hostname":o[t]=e,o.port&&(e+=":"+o.port),o.host=e;break;case"host":o[t]=e,/:\d+$/.test(e)?(e=e.split(":"),o.port=e.pop(),o.hostname=e.join(":")):(o.hostname=e,o.port="");break;case"protocol":o.protocol=e.toLowerCase(),o.slashes=!r;break;case"pathname":case"hash":if(e){var u="pathname"===t?"/":"#";o[t]=e.charAt(0)!==u?u+e:e}else o[t]=e;break;default:o[t]=e}for(var a=0;a<s.length;a++){var c=s[a];c[4]&&(o[c[1]]=o[c[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(t){t&&"function"==typeof t||(t=i.stringify);var e,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var u=n+(r.slashes?"//":"");return r.username&&(u+=r.username,r.password&&(u+=":"+r.password),u+="@"),u+=r.host+r.pathname,(e="object"===o(r.query)?t(r.query):r.query)&&(u+="?"!==e.charAt(0)?"?"+e:e),r.hash&&(u+=r.hash),u}},h.extractProtocol=f,h.location=l,h.qs=i,t.exports=h}).call(this,r(3))},function(t,e,r){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},function(t,e,r){"use strict";var o,n=Object.prototype.hasOwnProperty;function i(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}e.stringify=function(t,e){e=e||"";var r,i,u=[];for(i in"string"!=typeof e&&(e="?"),t)if(n.call(t,i)){if((r=t[i])||null!==r&&r!==o&&!isNaN(r)||(r=""),i=encodeURIComponent(i),r=encodeURIComponent(r),null===i||null===r)continue;u.push(i+"="+r)}return u.length?e+u.join("&"):""},e.parse=function(t){for(var e,r=/([^=?&]+)=?([^&]*)/g,o={};e=r.exec(t);){var n=i(e[1]),u=i(e[2]);null===n||null===u||n in o||(o[n]=u)}return o}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{getAuthenticationUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["public"],r=i.default.stringify({client_id:t._applicationId,redirect_uri:t._callbackUrl,response_type:"code",scope:e.length>1?e.join("+"):e.toString()});return decodeURIComponent(u.OAUTH_AUTHORIZE_URL+"?"+r)},userAuthentication:function(e){var r=u.OAUTH_TOKEN_URL;return t.request({url:r,method:"POST",body:{client_id:t._applicationId,client_secret:t._secret,redirect_uri:t._callbackUrl,grant_type:"authorization_code",code:e},oauth:!0})},setBearerToken:function(e){e&&(t._bearerToken=e)}}};var o,n=r(2),i=(o=n)&&o.__esModule?o:{default:o},u=r(0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{profile:function(){return t.request({url:"/me",method:"GET"})},updateProfile:function(e){var r=e.username,o=e.firstName,n=e.lastName,i=e.email,u=e.url,a=e.location,s=e.bio,c=e.instagramUsername,l={username:r,first_name:o,last_name:n,email:i,url:u,location:a,bio:s,instagram_username:c};return Object.keys(l).forEach(function(t){l[t]||delete l[t]}),t.request({url:"/me",method:"PUT",body:l})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{profile:function(e){var r="/users/"+e;return t.request({url:r,method:"GET"})},photos:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u="/users/"+e+"/photos",a={page:r,per_page:o,order_by:n,stats:i};return t.request({url:u,method:"GET",query:a})},likes:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i="/users/"+e+"/likes",u={page:r,per_page:o,order_by:n};return t.request({url:i,method:"GET",query:u})},collections:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"published",i="/users/"+e+"/collections",u={page:r,per_page:o,order_by:n};return t.request({url:i,method:"GET",query:u})},statistics:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,n="/users/"+e+"/statistics",i={resolution:r,quantity:o};return t.request({url:n,method:"GET",query:i})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{listPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",n={page:e,per_page:r,order_by:o};return t.request({url:"/photos",method:"GET",query:n})},listCuratedPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",n={page:e,per_page:r,order_by:o};return t.request({url:"/photos/curated",method:"GET",query:n})},searchPhotos:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i={query:e,category:r.length>1?r.join(","):r.toString(),page:o,per_page:n};return t.request({url:"/photos/search",method:"GET",query:i})},getPhoto:function(e,r,o,n){var i="/photos/"+e,u={w:r,h:o,rect:n};return t.request({url:i,method:"GET",query:u})},getPhotoStats:function(e){var r="/photos/"+e+"/stats";return t.request({url:r,method:"GET"})},getRandomPhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.category||[],o=e.collections||[],n={featured:e.featured,username:e.username,orientation:e.orientation,category:r.join(),collections:o.join(),query:e.query,w:e.width,h:e.height,c:e.cacheBuster||(new Date).getTime(),count:e.count};return Object.keys(n).forEach(function(t){n[t]||delete n[t]}),t.request({url:"/photos/random",method:"GET",query:n})},uploadPhoto:function(e){if(!t._bearerToken)throw new Error("Requires a bearerToken to be set.");return t.request({url:"/photos",method:"POST",body:{photo:e}})},likePhoto:function(e){if(!t._bearerToken)throw new Error("Requires a bearerToken to be set.");var r="/photos/"+e+"/like";return t.request({url:r,method:"POST"})},unlikePhoto:function(e){if(!t._bearerToken)throw new Error("Requires a bearerToken to be set.");var r="/photos/"+e+"/like";return t.request({url:r,method:"DELETE"})},downloadPhoto:function(e){var r=(0,u.default)(e,"links.download_location",void 0);if(void 0===r)throw new Error("Object received is not a photo. "+e);var o=(0,n.getUrlComponents)(r);return t.request({url:o.pathname,method:"GET",query:o.query})}}};var o,n=r(1),i=r(16),u=(o=i)&&o.__esModule?o:{default:o}},function(t,e,r){(function(e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="Expected a function",n="__lodash_hash_undefined__",i=1/0,u="[object Function]",a="[object GeneratorFunction]",s="[object Symbol]",c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,f=/^\./,h=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,y="object"==(void 0===e?"undefined":r(e))&&e&&e.Object===Object&&e,v="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,b=y||v||Function("return this")();var _,g=Array.prototype,m=Function.prototype,q=Object.prototype,j=b["__core-js_shared__"],O=(_=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",w=m.toString,T=q.hasOwnProperty,S=q.toString,E=RegExp("^"+w.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=b.Symbol,C=g.splice,U=F(b,"Map"),k=F(Object,"create"),A=P?P.prototype:void 0,R=A?A.toString:void 0;function I(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function G(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function x(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function M(t,e){for(var r,o,n=t.length;n--;)if((r=t[n][0])===(o=e)||r!=r&&o!=o)return n;return-1}function L(t,e){for(var o,n=0,i=(e=function(t,e){if(D(t))return!1;var o=r(t);if("number"==o||"symbol"==o||"boolean"==o||null==t||Z(t))return!0;return l.test(t)||!c.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:D(o=e)?o:z(o)).length;null!=t&&n<i;)t=t[H(e[n++])];return n&&n==i?t:void 0}function N(t){return!(!K(t)||(e=t,O&&O in e))&&(function(t){var e=K(t)?S.call(t):"";return e==u||e==a}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?E:d).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function $(t,e){var o,n,i=t.__data__;return("string"==(n=r(o=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==o:null===o)?i["string"==typeof e?"string":"hash"]:i.map}function F(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return N(r)?r:void 0}I.prototype.clear=function(){this.__data__=k?k(null):{}},I.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},I.prototype.get=function(t){var e=this.__data__;if(k){var r=e[t];return r===n?void 0:r}return T.call(e,t)?e[t]:void 0},I.prototype.has=function(t){var e=this.__data__;return k?void 0!==e[t]:T.call(e,t)},I.prototype.set=function(t,e){return this.__data__[t]=k&&void 0===e?n:e,this},G.prototype.clear=function(){this.__data__=[]},G.prototype.delete=function(t){var e=this.__data__,r=M(e,t);return!(r<0||(r==e.length-1?e.pop():C.call(e,r,1),0))},G.prototype.get=function(t){var e=this.__data__,r=M(e,t);return r<0?void 0:e[r][1]},G.prototype.has=function(t){return M(this.__data__,t)>-1},G.prototype.set=function(t,e){var r=this.__data__,o=M(r,t);return o<0?r.push([t,e]):r[o][1]=e,this},x.prototype.clear=function(){this.__data__={hash:new I,map:new(U||G),string:new I}},x.prototype.delete=function(t){return $(this,t).delete(t)},x.prototype.get=function(t){return $(this,t).get(t)},x.prototype.has=function(t){return $(this,t).has(t)},x.prototype.set=function(t,e){return $(this,t).set(t,e),this};var z=V(function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(Z(t))return R?R.call(t):"";var e=t+"";return"0"==e&&1/t==-i?"-0":e}(e);var r=[];return f.test(t)&&r.push(""),t.replace(h,function(t,e,o,n){r.push(o?n.replace(p,"$1"):e||t)}),r});function H(t){if("string"==typeof t||Z(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}function V(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(o);var r=function r(){var o=arguments,n=e?e.apply(this,o):o[0],i=r.cache;if(i.has(n))return i.get(n);var u=t.apply(this,o);return r.cache=i.set(n,u),u};return r.cache=new(V.Cache||x),r}V.Cache=x;var D=Array.isArray;function K(t){var e=r(t);return!!t&&("object"==e||"function"==e)}function Z(t){return"symbol"==r(t)||function(t){return!!t&&"object"==r(t)}(t)&&S.call(t)==s}t.exports=function(t,e,r){var o=null==t?void 0:L(t,e);return void 0===o?r:o}}).call(this,r(3))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{listCategories:function(){return t.request({url:"/categories",method:"GET"})},category:function(e){var r="/categories/"+e;return t.request({url:r,method:"GET"})},categoryPhotos:function(e,r,o){var n="/categories/"+e+"/photos",i={page:r,per_page:o};return t.request({url:n,method:"GET",query:i})}}}},function(t,e,r){"use strict";function o(t,e){var r=t?"/collections/curated/"+e:"/collections/"+e;return this.request({url:r,method:"GET"})}function n(t,e){var r=t?"/collections/curated/"+e+"/photos":"/collections/"+e+"/photos",o={page:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,per_page:arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,order_by:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"latest"};return this.request({url:r,method:"GET",query:o})}function i(t,e,r,o){var n=t?"/collections/"+t:"/collections",i={title:e,description:r,private:o};return this.request({url:n,method:t?"PUT":"POST",body:i})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{listCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o={page:e,per_page:r};return t.request({url:"/collections",method:"GET",query:o})},listCuratedCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o={page:e,per_page:r};return t.request({url:"/collections/curated",method:"GET",query:o})},listFeaturedCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o={page:e,per_page:r};return t.request({url:"/collections/featured",method:"GET",query:o})},getCollection:o.bind(this,!1),getCuratedCollection:o.bind(this,!0),getCuratedCollectionPhotos:n.bind(this,!0),getCollectionPhotos:n.bind(this,!1),createCollection:i.bind(this,null),updateCollection:i.bind(this),deleteCollection:function(e){var r="/collections/"+e;return t.request({url:r,method:"DELETE"})},addPhotoToCollection:function(e,r){var o="/collections/"+e+"/add";return t.request({url:o,method:"POST",body:{photo_id:r}})},removePhotoFromCollection:function(e,r){var o="/collections/"+e+"/remove?photo_id="+r;return t.request({url:o,method:"DELETE"})},listRelatedCollections:function(e){var r="/collections/"+e+"/related";return t.request({url:r,method:"GET"})}}}},function(t,e,r){"use strict";function o(t){var e={query:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",page:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,per_page:arguments.length>3&&void 0!==arguments[3]?arguments[3]:10};return this.request({url:t,method:"GET",query:e})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{all:o.bind(this,"/search"),photos:o.bind(this,"/search/photos"),users:o.bind(this,"/search/users"),collections:o.bind(this,"/search/collections")}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{total:function(){return t.request({url:"/stats/total",method:"GET"})}}}}]);