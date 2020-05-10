(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{175:function(e,t,n){"use strict";var i=n(43),o=n.n(i),r=n(32),a=n.n(r),s=n(29),u=n.n(s),l=n(30),c=n.n(l),f=n(53),p=n.n(f),g=n(61),h=n.n(g),d=n(62),v=n.n(d),y=n(39),m=n.n(y),b=n(229),k=n.n(b),x={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,k()(t))}},S=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u()(this,e),this.init(t,n)}return c()(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||x,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,i){return i&&!this.debug?null:("string"===typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,a()({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),w=function(){function e(){u()(this,e),this.observers={}}return c()(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach((function(){if(t){var i=n.observers[e].indexOf(t);i>-1&&n.observers[e].splice(i,1)}else delete n.observers[e]}))}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(this.observers[e]){var o=[].concat(this.observers[e]);o.forEach((function(e){e.apply(void 0,n)}))}if(this.observers["*"]){var r=[].concat(this.observers["*"]);r.forEach((function(t){t.apply(t,[e].concat(n))}))}}}]),e}();function R(){var e,t,n=new Promise((function(n,i){e=n,t=i}));return n.resolve=e,n.reject=t,n}function L(e){return null==e?"":""+e}function O(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}function N(e,t,n){function i(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function o(){return!e||"string"===typeof e}for(var r="string"!==typeof t?[].concat(t):t.split(".");r.length>1;){if(o())return{};var a=i(r.shift());!e[a]&&n&&(e[a]=new n),e=e[a]}return o()?{}:{obj:e,k:i(r.shift())}}function C(e,t,n){var i=N(e,t,Object);i.obj[i.k]=n}function j(e,t){var n=N(e,t),i=n.obj,o=n.k;if(i)return i[o]}function E(e,t,n){for(var i in t)i in e?"string"===typeof e[i]||e[i]instanceof String||"string"===typeof t[i]||t[i]instanceof String?n&&(e[i]=t[i]):E(e[i],t[i],n):e[i]=t[i];return e}function P(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function V(e){return"string"===typeof e?e.replace(/[&<>"'\/]/g,(function(e){return F[e]})):e}var A=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return u()(this,t),n=p()(this,h()(t).call(this)),w.call(m()(m()(n))),n.data=e||{},n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return v()(t,e),c()(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,r=[e,t];return n&&"string"!==typeof n&&(r=r.concat(n)),n&&"string"===typeof n&&(r=r.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(r=e.split(".")),j(this.data,r)}},{key:"addResource",value:function(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},r=this.options.keySeparator;void 0===r&&(r=".");var a=[e,t];n&&(a=a.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(i=t,t=(a=e.split("."))[1]),this.addNamespaces(t),C(this.data,a,i),o.silent||this.emit("added",e,t,n,i)}},{key:"addResources",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in n)"string"!==typeof n[o]&&"[object Array]"!==Object.prototype.toString.apply(n[o])||this.addResource(e,t,o,n[o],{silent:!0});i.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(i=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var u=j(this.data,s)||{};i?E(u,n,o):u=a()({},u,n),C(this.data,s,u),r.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?a()({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(w),T={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,i,o){var r=this;return e.forEach((function(e){r.processors[e]&&(t=r.processors[e].process(t,n,i,o))})),t}},U=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u()(this,t),n=p()(this,h()(t).call(this)),w.call(m()(m()(n))),O(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat"],e,m()(m()(n))),n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=S.create("translator"),n}return v()(t,e),c()(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var r=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(r[0])>-1)&&(o=r.shift()),e=r.join(i)}return"string"===typeof o&&(o=[o]),{key:e,namespaces:o}}},{key:"translate",value:function(e,t){var n=this;if("object"!==o()(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),void 0===e||null===e)return"";Array.isArray(e)||(e=[String(e)]);var i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,r=this.extractFromKey(e[e.length-1],t),s=r.key,u=r.namespaces,l=u[u.length-1],c=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(f){var p=t.nsSeparator||this.options.nsSeparator;return l+p+s}return s}var g=this.resolve(e,t),h=g&&g.res,d=g&&g.usedKey||s,v=g&&g.exactUsedKey||s,y=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,x="string"!==typeof h&&"boolean"!==typeof h&&"number"!==typeof h;if(k&&h&&x&&m.indexOf(y)<0&&("string"!==typeof b||"[object Array]"!==y)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,h,t):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(i){var S="[object Array]"===y,w=S?[]:{},R=S?v:d;for(var L in h)if(Object.prototype.hasOwnProperty.call(h,L)){var O="".concat(R).concat(i).concat(L);w[L]=this.translate(O,a()({},t,{joinArrays:!1,ns:u})),w[L]===O&&(w[L]=h[L])}h=w}}else if(k&&"string"===typeof b&&"[object Array]"===y)(h=h.join(b))&&(h=this.extendTranslation(h,e,t));else{var N=!1,C=!1;if(!this.isValidLookup(h)&&void 0!==t.defaultValue){if(N=!0,void 0!==t.count){var j=this.pluralResolver.getSuffix(c,t.count);h=t["defaultValue".concat(j)]}h||(h=t.defaultValue)}this.isValidLookup(h)||(C=!0,h=s);var E=t.defaultValue&&t.defaultValue!==h&&this.options.updateMissing;if(C||N||E){this.logger.log(E?"updateKey":"missingKey",c,l,s,E?t.defaultValue:h);var P=[],F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&F&&F[0])for(var V=0;V<F.length;V++)P.push(F[V]);else"all"===this.options.saveMissingTo?P=this.languageUtils.toResolveHierarchy(t.lng||this.language):P.push(t.lng||this.language);var A=function(e,i){n.options.missingKeyHandler?n.options.missingKeyHandler(e,l,i,E?t.defaultValue:h,E,t):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(e,l,i,E?t.defaultValue:h,E,t),n.emit("missingKey",e,l,i,h)};if(this.options.saveMissing){var T=void 0!==t.count&&"string"!==typeof t.count;this.options.saveMissingPlurals&&T?P.forEach((function(e){n.pluralResolver.getPluralFormsOfKey(e,s).forEach((function(t){return A([e],t)}))})):A(P,s)}}h=this.extendTranslation(h,e,t,g),C&&h===s&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(s)),C&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,i){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(a()({},n,{interpolation:a()({},this.options.interpolation,n.interpolation)}));var r=n.replace&&"string"!==typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(r=a()({},this.options.interpolation.defaultVariables,r)),e=this.interpolator.interpolate(e,r,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){return o.translate.apply(o,arguments)}),n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,u="string"===typeof s?[s]:s;return void 0!==e&&null!==e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=T.handle(u,e,t,n,this)),e}},{key:"resolve",value:function(e){var t,n,i,o,r,a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e&&(e=[e]),e.forEach((function(e){if(!a.isValidLookup(t)){var u=a.extractFromKey(e,s),l=u.key;n=l;var c=u.namespaces;a.options.fallbackNS&&(c=c.concat(a.options.fallbackNS));var f=void 0!==s.count&&"string"!==typeof s.count,p=void 0!==s.context&&"string"===typeof s.context&&""!==s.context,g=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);c.forEach((function(e){a.isValidLookup(t)||(r=e,g.forEach((function(n){if(!a.isValidLookup(t)){o=n;var r,u,c=l,g=[c];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(g,l,n,e,s);else f&&(r=a.pluralResolver.getSuffix(n,s.count)),f&&p&&g.push(c+r),p&&g.push(c+="".concat(a.options.contextSeparator).concat(s.context)),f&&g.push(c+=r);for(;u=g.pop();)a.isValidLookup(t)||(i=u,t=a.getResource(n,e,u,s))}})))}))}})),{res:t,usedKey:n,exactUsedKey:i,usedLng:o,usedNS:r}}},{key:"isValidLookup",value:function(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}}]),t}(w);function K(e){return e.charAt(0).toUpperCase()+e.slice(1)}var D=function(){function e(t){u()(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=S.create("languageUtils")}return c()(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"===typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=K(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=K(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=K(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"===typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],r=function(e){e&&(n.isWhitelisted(e)?o.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"===typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(e))):"string"===typeof e&&r(this.formatLanguageCode(e)),i.forEach((function(e){o.indexOf(e)<0&&r(n.formatLanguageCode(e))})),o}}]),e}(),H=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],I={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||e>10)&&e%10==0?2:3)}};function M(){var e={};return H.forEach((function(t){t.lngs.forEach((function(n){e[n]={numbers:t.nr,plurals:I[t.fc]}}))})),e}var B=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u()(this,e),this.languageUtils=t,this.options=n,this.logger=S.create("pluralResolver"),this.rules=M()}return c()(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,i=[],o=this.getRule(e);return o?(o.numbers.forEach((function(o){var r=n.getSuffix(e,o);i.push("".concat(t).concat(r))})),i):i}},{key:"getSuffix",value:function(e,t){var n=this,i=this.getRule(e);if(i){var o=i.noAbs?i.plurals(t):i.plurals(Math.abs(t)),r=i.numbers[o];this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var a=function(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString()};return"v1"===this.options.compatibilityJSON?1===r?"":"number"===typeof r?"_plural_".concat(r.toString()):a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u()(this,e),this.logger=S.create("interpolator"),this.init(t,!0)}return c()(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t&&(this.options=e,this.format=e.interpolation&&e.interpolation.format||function(e){return e}),e.interpolation||(e.interpolation={escapeValue:!0});var n=e.interpolation;this.escape=void 0!==n.escape?n.escape:V,this.escapeValue=void 0===n.escapeValue||n.escapeValue,this.useRawValueToEscape=void 0!==n.useRawValueToEscape&&n.useRawValueToEscape,this.prefix=n.prefix?P(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?P(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?P(n.nestingPrefix):n.nestingPrefixEscaped||P("$t("),this.nestingSuffix=n.nestingSuffix?P(n.nestingSuffix):n.nestingSuffixEscaped||P(")"),this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,i){var o,r,a,s=this;function u(e){return e.replace(/\$/g,"$$$$")}var l=function(e){if(e.indexOf(s.formatSeparator)<0)return j(t,e);var i=e.split(s.formatSeparator),o=i.shift().trim(),r=i.join(s.formatSeparator).trim();return s.format(j(t,o),r,n)};this.resetRegExp();var c=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler;for(a=0;(o=this.regexpUnescape.exec(e))&&(r=l(o[1].trim()),e=e.replace(o[0],r),this.regexpUnescape.lastIndex=0,!(++a>=this.maxReplaces)););for(a=0;o=this.regexp.exec(e);){if(void 0===(r=l(o[1].trim())))if("function"===typeof c){var f=c(e,o,i);r="string"===typeof f?f:""}else this.logger.warn("missed to pass in variable ".concat(o[1]," for interpolating ").concat(e)),r="";else"string"===typeof r||this.useRawValueToEscape||(r=L(r));if(r=this.escapeValue?u(this.escape(r)):u(r),e=e.replace(o[0],r),this.regexp.lastIndex=0,++a>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a()({},o);function s(e,t){if(e.indexOf(",")<0)return e;var n=e.split(",");e=n.shift();var i=n.join(",");i=(i=this.interpolate(i,r)).replace(/'/g,'"');try{r=JSON.parse(i),t&&(r=a()({},t,r))}catch(o){this.logger.error("failed parsing options string in nesting for key ".concat(e),o)}return e}for(r.applyPostProcessor=!1;n=this.nestingRegexp.exec(e);){if((i=t(s.call(this,n[1].trim(),r),r))&&n[0]===e&&"string"!==typeof i)return i;"string"!==typeof i&&(i=L(i)),i||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),i=""),e=e.replace(n[0],i),this.regexp.lastIndex=0}return e}}]),e}(),z=n(63),$=n.n(z);var J=function(e){function t(e,n,i){var o,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return u()(this,t),o=p()(this,h()(t).call(this)),w.call(m()(m()(o))),o.backend=e,o.store=n,o.languageUtils=i.languageUtils,o.options=r,o.logger=S.create("backendConnector"),o.state={},o.queue=[],o.backend&&o.backend.init&&o.backend.init(i,r.backend,r),o}return v()(t,e),c()(t,[{key:"queueLoad",value:function(e,t,n,i){var o=this,r=[],a=[],s=[],u=[];return e.forEach((function(e){var i=!0;t.forEach((function(t){var s="".concat(e,"|").concat(t);!n.reload&&o.store.hasResourceBundle(e,t)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?a.indexOf(s)<0&&a.push(s):(o.state[s]=1,i=!1,a.indexOf(s)<0&&a.push(s),r.indexOf(s)<0&&r.push(s),u.indexOf(t)<0&&u.push(t)))})),i||s.push(e)})),(r.length||a.length)&&this.queue.push({pending:a,loaded:{},errors:[],callback:i}),{toLoad:r,pending:a,toLoadLanguages:s,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var i=e.split("|"),o=$()(i,2),r=o[0],a=o[1];t&&this.emit("failedLoading",r,a,t),n&&this.store.addResourceBundle(r,a,n),this.state[e]=t?-1:2;var s={};this.queue.forEach((function(n){!function(e,t,n,i){var o=N(e,t,Object),r=o.obj,a=o.k;r[a]=r[a]||[],i&&(r[a]=r[a].concat(n)),i||r[a].push(n)}(n.loaded,[r],a),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach((function(e){s[e]||(s[e]=[]),n.loaded[e].length&&n.loaded[e].forEach((function(t){s[e].indexOf(t)<0&&s[e].push(t)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",s),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,a=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,(function(s,u){s&&u&&o<5?setTimeout((function(){i.read.call(i,e,t,n,o+1,2*r,a)}),r):a(s,u)})):a(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"===typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"===typeof t&&(t=[t]);var r=this.queueLoad(e,t,i,o);if(!r.toLoad.length)return r.pending.length||o(),null;r.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.split("|"),o=$()(i,2),r=o[0],a=o[1];this.read(r,a,"read",null,null,(function(i,o){i&&t.logger.warn("".concat(n,"loading namespace ").concat(a," for language ").concat(r," failed"),i),!i&&o&&t.logger.log("".concat(n,"loaded namespace ").concat(a," for language ").concat(r),o),t.loaded(e,i,o)}))}},{key:"saveMissing",value:function(e,t,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(e,t,n,i,null,a()({},r,{isUpdate:o})),e&&e[0]&&this.store.addResource(e[0],t,n,i)}}]),t}(w);function W(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===o()(e[1])&&(t=e[1]),"string"===typeof e[1]&&(t.defaultValue=e[1]),"string"===typeof e[2]&&(t.tDescription=e[2]),"object"===o()(e[2])||"object"===o()(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}}}function _(e){return"string"===typeof e.ns&&(e.ns=[e.ns]),"string"===typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"===typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function G(){}var Q=new(function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(u()(this,t),e=p()(this,h()(t).call(this)),w.call(m()(m()(e))),e.options=_(n),e.services={},e.logger=S,e.modules={external:[]},i&&!e.isInitialized&&!n.isClone){if(!e.options.initImmediate)return e.init(n,i),p()(e,m()(m()(e)));setTimeout((function(){e.init(n,i)}),0)}return e}return v()(t,e),c()(t,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;function i(e){return e?"function"===typeof e?new e:e:null}if("function"===typeof t&&(n=t,t={}),this.options=a()({},W(),this.options,_(t)),this.format=this.options.interpolation.format,n||(n=G),!this.options.isClone){this.modules.logger?S.init(i(this.modules.logger),this.options):S.init(null,this.options);var o=new D(this.options);this.store=new A(this.options.resources,this.options);var r=this.services;r.logger=S,r.resourceStore=this.store,r.languageUtils=o,r.pluralResolver=new B(o,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),r.interpolator=new q(this.options),r.backendConnector=new J(i(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];e.emit.apply(e,[t].concat(i))})),this.modules.languageDetector&&(r.languageDetector=i(this.modules.languageDetector),r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=i(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new U(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];e.emit.apply(e,[t].concat(i))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}var s=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"];s.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}}));var u=R(),l=function(){e.changeLanguage(e.options.lng,(function(t,i){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(i),n(t,i)}))};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;if(!this.options.resources||this.options.partialBundledLanguages){if(this.language&&"cimode"===this.language.toLowerCase())return t();var n=[],i=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach((function(e){n.indexOf(e)<0&&n.push(e)}))};if(this.language)i(this.language);else{var o=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);o.forEach((function(e){return i(e)}))}this.options.preload&&this.options.preload.forEach((function(e){return i(e)})),this.services.backendConnector.load(n,this.options.ns,t)}else t(null)}},{key:"reloadResources",value:function(e,t,n){var i=R();return e||(e=this.languages),t||(t=this.options.ns),n||(n=G),this.services.backendConnector.reload(e,t,(function(e){i.resolve(),n(e)})),i}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&T.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,i=R();this.emit("languageChanging",e);var o=function(e){e&&(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources((function(o){!function(e,o){n.translator.changeLanguage(o),o&&(n.emit("languageChanged",o),n.logger.log("languageChanged",o)),i.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))}(o,e)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),i}},{key:"getFixedT",value:function(e,t){var n=this,i=function e(t,i){var r=a()({},i);if("object"!==o()(i)){for(var s=arguments.length,u=new Array(s>2?s-2:0),l=2;l<s;l++)u[l-2]=arguments[l];r=n.options.overloadTranslationOptionHandler([t,i].concat(u))}return r.lng=r.lng||e.lng,r.lngs=r.lngs||e.lngs,r.ns=r.ns||e.ns,n.t(t,r)};return"string"===typeof e?i.lng=e:i.lngs=e,i.ns=t,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"loadNamespaces",value:function(e,t){var n=this,i=R();return this.options.ns?("string"===typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=R();"string"===typeof e&&(e=[e]);var i=this.options.preload||[],o=e.filter((function(e){return i.indexOf(e)<0}));return o.length?(this.options.preload=i.concat(o),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new t(e,n)}},{key:"cloneInstance",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G,o=a()({},this.options,n,{isClone:!0}),r=new t(o),s=["store","services","language"];return s.forEach((function(t){r[t]=e[t]})),r.translator=new U(r.services,r.options),r.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];r.emit.apply(r,[e].concat(n))})),r.init(o,i),r.translator.options=r.options,r}}]),t}(w));t.a=Q,Q.changeLanguage.bind(Q),Q.cloneInstance.bind(Q),Q.createInstance.bind(Q),Q.dir.bind(Q),Q.exists.bind(Q),Q.getFixedT.bind(Q),Q.init.bind(Q),Q.loadLanguages.bind(Q),Q.loadNamespaces.bind(Q),Q.loadResources.bind(Q),Q.off.bind(Q),Q.on.bind(Q),Q.setDefaultNamespace.bind(Q),Q.t.bind(Q),Q.use.bind(Q)}}]);
//# sourceMappingURL=npm.i18next.8e24357e.chunk.js.map