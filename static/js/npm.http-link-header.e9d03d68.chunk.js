(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{170:function(e,t,r){"use strict";(function(t){var n=r(141),i=r(142),s=/^utf-?8|ascii|utf-?16-?le|ucs-?2|base-?64|latin-?1$/i,o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/\s|\uFEFF|\xA0/,a=/\r?\n[\x20\x09]+/g,f=/[;,"]/,c=/[;,"]|\s/,l=1,p=2,h=4;function d(e){return e.replace(o,"")}function g(e){return u.test(e)}function w(e,t){for(;g(e[t]);)t++;return t}function v(e){return c.test(e)}var x=function(){function e(t){n(this,e),this.refs=[],t&&this.parse(t)}return i(e,[{key:"rel",value:function(e){for(var t=[],r=0;r<this.refs.length;r++)this.refs[r].rel===e&&t.push(this.refs[r]);return t}},{key:"get",value:function(e,t){e=e.toLowerCase();for(var r=[],n=0;n<this.refs.length;n++)this.refs[n][e]===t&&r.push(this.refs[n]);return r}},{key:"set",value:function(e){return this.refs.push(e),this}},{key:"has",value:function(e,t){e=e.toLowerCase();for(var r=0;r<this.refs.length;r++)if(this.refs[r][e]===t)return!0;return!1}},{key:"parse",value:function(t,r){t=d(t=(r=r||0)?t.slice(r):t).replace(a,"");for(var n=l,i=t.length,s=(r=0,null);r<i;)if(n===l){if(g(t[r])){r++;continue}if("<"!==t[r])throw new Error('Unexpected character "'+t[r]+'" at offset '+r);if(-1===(c=t.indexOf(">",r)))throw new Error("Expected end of URI delimiter at offset "+r);s={uri:t.slice(r+1,c)},this.refs.push(s),r=c,n=p,r++}else if(n===p){if(g(t[r])){r++;continue}if(";"===t[r])n=h,r++;else{if(","!==t[r])throw new Error('Unexpected character "'+t[r]+'" at offset '+r);n=l,r++}}else{if(n!==h)throw new Error('Unknown parser state "'+n+'"');if(";"===t[r]||g(t[r])){r++;continue}if(-1===(c=t.indexOf("=",r)))throw new Error("Expected attribute delimiter at offset "+r);var o=d(t.slice(r,c)).toLowerCase(),u="";if('"'===t[r=w(t,r=c+1)])for(r++;r<i;){if('"'===t[r]){r++;break}"\\"===t[r]&&r++,u+=t[r],r++}else{for(var c=r+1;!f.test(t[c])&&c<i;)c++;u=t.slice(r,c),r=c}switch(s[o]&&e.isSingleOccurenceAttr(o)||("*"===o[o.length-1]?s[o]=e.parseExtendedValue(u):(u="rel"===o||"type"===o?u.toLowerCase():u,null!=s[o]?Array.isArray(s[o])?s[o].push(u):s[o]=[s[o],u]:s[o]=u)),t[r]){case",":n=l;break;case";":n=h}r++}return s=null,this}},{key:"toString",value:function(){for(var t=[],r="",n=null,i=0;i<this.refs.length;i++)n=this.refs[i],r=Object.keys(this.refs[i]).reduce((function(t,r){return"uri"===r?t:t+"; "+e.formatAttribute(r,n[r])}),"<"+n.uri+">"),t.push(r);return t.join(", ")}}]),e}();x.isCompatibleEncoding=function(e){return s.test(e)},x.parse=function(e,t){return(new x).parse(e,t)},x.isSingleOccurenceAttr=function(e){return"rel"===e||"type"===e||"media"===e||"title"===e||"title*"===e},x.isTokenAttr=function(e){return"rel"===e||"type"===e||"anchor"===e},x.escapeQuotes=function(e){return e.replace(/"/g,'\\"')},x.parseExtendedValue=function(e){var t=/([^']+)?(?:'([^']+)')?(.+)/.exec(e);return{language:t[2].toLowerCase(),encoding:x.isCompatibleEncoding(t[1])?null:t[1].toLowerCase(),value:x.isCompatibleEncoding(t[1])?decodeURIComponent(t[3]):t[3]}},x.formatExtendedAttribute=function(e,r){var n=(r.encoding||"utf-8").toUpperCase();return e+"="+n+"'"+(r.language||"en")+"'"+(t.isBuffer(r.value)&&x.isCompatibleEncoding(n)?r.value.toString(n):t.isBuffer(r.value)?r.value.toString("hex").replace(/[0-9a-f]{2}/gi,"%$1"):encodeURIComponent(r.value))},x.formatAttribute=function(e,t){return Array.isArray(t)?t.map((function(t){return x.formatAttribute(e,t)})).join("; "):"*"===e[e.length-1]||"string"!==typeof t?x.formatExtendedAttribute(e,t):(x.isTokenAttr(e)?t=v(t)?'"'+x.escapeQuotes(t)+'"':x.escapeQuotes(t):v(t)&&(t='"'+(t=(t=encodeURIComponent(t)).replace(/%20/g," ").replace(/%2C/g,",").replace(/%3B/g,";"))+'"'),e+"="+t)},e.exports=x}).call(this,r(103).Buffer)}}]);
//# sourceMappingURL=npm.http-link-header.e9d03d68.chunk.js.map