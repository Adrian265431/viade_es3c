/*! For license information please see npm.keycode.684337b6.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{410:function(e,o){function r(e){if(e&&"object"===typeof e){var o=e.which||e.keyCode||e.charCode;o&&(e=o)}if("number"===typeof e)return c[e];var r,t=String(e);return(r=n[t.toLowerCase()])?r:(r=a[t.toLowerCase()])||(1===t.length?t.charCodeAt(0):void 0)}r.isEventKey=function(e,o){if(e&&"object"===typeof e){var r=e.which||e.keyCode||e.charCode;if(null===r||void 0===r)return!1;if("string"===typeof o){var t;if(t=n[o.toLowerCase()])return t===r;if(t=a[o.toLowerCase()])return t===r}else if("number"===typeof o)return o===r;return!1}};var n=(o=e.exports=r).code=o.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},a=o.aliases={windows:91,"\u21e7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};for(t=97;t<123;t++)n[String.fromCharCode(t)]=t-32;for(var t=48;t<58;t++)n[t-48]=t;for(t=1;t<13;t++)n["f"+t]=t+111;for(t=0;t<10;t++)n["numpad "+t]=t+96;var c=o.names=o.title={};for(t in n)c[n[t]]=t;for(var p in a)n[p]=a[p]}}]);
//# sourceMappingURL=npm.keycode.684337b6.chunk.js.map