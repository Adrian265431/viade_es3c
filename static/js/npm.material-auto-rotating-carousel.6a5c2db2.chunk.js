(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{219:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.modulo=function(e,t){return(e%t+t)%t}},374:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),r=C(l),i=C(a(1)),d=C(a(211)),u=C(a(228)),c=a(161),s=C(a(150)),f=a(215),p=C(a(455)),h=C(a(393)),m=C(a(394)),b=C(a(454)),g=C(a(227)),v=C(a(456)),y=C(a(395)),x=C(a(28)),w=C(a(396)),M=a(219);function C(e){return e&&e.__esModule?e:{default:e}}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var E={root:{"& > *:focus":{outline:"none"}},content:{width:"60%",maxWidth:700,height:"calc(100% - 96px)",maxHeight:600,margin:"-16px auto 0",position:"relative",top:"50%",transform:"translateY(-50%)"},contentMobile:{width:"100%",height:"100%",maxWidth:"initial",maxHeight:"initial",margin:0,top:0,transform:"none","& > $carouselWrapper":{borderRadius:0}},arrow:{width:48,height:48,position:"absolute",top:"calc((100% - 96px) / 2 + 24px)"},arrowLeft:{left:-96},arrowRight:{right:-96},arrowIcon:{color:c.grey[700]},carouselWrapper:{overflow:"hidden",borderRadius:14,transform:"scale(1.0)",background:"transparent",height:"100%"},dots:{paddingTop:36,margin:"0 auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20},footer:{marginTop:-72,width:"100%",position:"relative",textAlign:"center"},footerMobile:{marginTop:-92},footerMobileLandscape:{marginTop:-3,transform:"translateY(-50vh)",display:"inline-block",width:"auto"},slide:{width:"100%",height:"100%"},slideMobile:{width:"100%",height:"100%"},carousel:{height:"100%"},carouselContainer:{height:"100%"},closed:{}},P=function(e){function t(){var e,a,n;k(this,t);for(var o=arguments.length,l=Array(o),r=0;r<o;r++)l[r]=arguments[r];return a=n=j(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={slideIndex:0},n.handleContentClick=function(e){return e.stopPropagation()||e.preventDefault()},n.handleChange=function(e){n.setState({slideIndex:e},n.onChange(e))},j(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"decreaseIndex",value:function(){var e=this.state.slideIndex-1;this.setState({slideIndex:e},this.onChange(e))}},{key:"increaseIndex",value:function(){var e=this.state.slideIndex+1;this.setState({slideIndex:e},this.onChange(e))}},{key:"onChange",value:function(e){this.props.onChange&&this.props.onChange((0,M.modulo)(e,this.props.children.length))}},{key:"render",value:function(){var e,t,a=this,o=this.props,l=o.autoplay,i=o.ButtonProps,c=o.children,s=o.classes,C=o.containerStyle,k=o.hideArrows,j=o.interval,E=o.label,P=o.landscape,_=o.mobile,S=o.ModalProps,I=o.open,N=o.onClose,B=o.onStart,L=_&&P,R={enter:f.duration.enteringScreen,exit:f.duration.leavingScreen},T=null!=c.length,W=r.default.createElement(w.default,{autoplay:I&&l&&T,className:s.carousel,containerStyle:n({height:"100%"},C),index:this.state.slideIndex,interval:j,onChangeIndex:this.handleChange,slideClassName:s.slide},r.default.Children.map(c,(function(e){return r.default.cloneElement(e,{mobile:_,landscape:L})})));return r.default.createElement(b.default,n({className:(0,x.default)(s.root,O({},s.rootMobile,_)),open:I,onClose:N,BackdropComponent:v.default,BackdropProps:S?n({transitionDuration:R},S.BackdropProps):{transitionDuration:R}},S),r.default.createElement(g.default,{appear:!0,in:I,timeout:R},r.default.createElement("div",{className:(0,x.default)(s.content,O({},s.contentMobile,_)),onClick:this.handleContentClick},r.default.createElement(u.default,{elevation:_?0:1,className:s.carouselWrapper},W),r.default.createElement("div",{style:L?{minWidth:300,maxWidth:"calc(50% - 48px)",padding:24,float:"right"}:null},r.default.createElement("div",{className:(0,x.default)(s.footer,(e={},O(e,s.footerMobile,_),O(e,s.footerMobileLandscape,L),e))},E&&r.default.createElement(d.default,n({variant:"contained",onClick:B},i),E),T&&r.default.createElement(y.default,{count:c.length,index:(0,M.modulo)(this.state.slideIndex,c.length),className:(0,x.default)(s.dots,(t={},O(t,s.dotsMobile,_),O(t,s.dotsMobileLandscape,L),t)),onDotClick:this.handleChange}))),!_&&!k&&T&&r.default.createElement("div",null,r.default.createElement(p.default,{className:(0,x.default)(s.arrow,s.arrowLeft),onClick:function(){return a.decreaseIndex()}},r.default.createElement(h.default,{className:s.arrowIcon})),r.default.createElement(p.default,{className:(0,x.default)(s.arrow,s.arrowRight),onClick:function(){return a.increaseIndex()}},r.default.createElement(m.default,{className:s.arrowIcon}))))))}}]),t}(l.Component);P.defaultProps={autoplay:!0,interval:3e3,mobile:!1,open:!1,hideArrows:!1},P.propTypes={autoplay:i.default.bool,ButtonProps:i.default.object,classes:i.default.object.isRequired,containerStyle:i.default.object,interval:i.default.number,label:i.default.string,landscape:i.default.bool,mobile:i.default.bool,ModalProps:i.default.object,onChange:i.default.func,onClose:i.default.func,onStart:i.default.func,open:i.default.bool,hideArrows:i.default.bool},t.default=(0,s.default)(E)(P)},396:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=function(e){var t=e.children,a=e.autoplay,l=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","autoplay"]),r=function(e){return function(t){var a=t.index,n=t.key;return o.default.cloneElement(e[(0,u.modulo)(a,e.length)],{key:n})}}(t);return a?o.default.createElement(f,n({},l,{slideRenderer:r})):o.default.createElement(s,n({},l,{slideRenderer:r}))};var o=c(a(0)),l=c(a(397)),r=c(a(407)),i=c(a(409)),d=c(a(411)),u=a(219);function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,i.default)((0,r.default)(d.default)),f=(0,l.default)(s)},424:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=c(a(0)),l=c(a(1)),r=c(a(159)),i=c(a(214)),d=c(a(150)),u=c(a(28));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={root:{backgroundColor:i.default[500],height:"100%"},rootMobileLandscape:{width:"100%",display:"flex",flexDirection:"row"},media:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center","& > *":{maxHeight:"100%"}},mediaMobile:{position:"relative",top:"50%",transform:"translateY(-50%)"},mediaMobileLandscape:{},mediaBackground:{backgroundColor:i.default[700],height:"calc(100% - 216px)",textAlign:"center"},mediaBackgroundMobile:{height:"calc(100% - 241px)"},mediaBackgroundMobileLandscape:{height:"100%",flex:"1 1",alignSelf:"stretch"},text:{textAlign:"center",maxWidth:"80%",margin:"0 auto",paddingTop:32},textMobile:{paddingTop:30,"& $title":{marginBottom:8}},textMobileLandscape:{minWidth:300,maxWidth:"calc(50% - 48px)",padding:"24px 24px 128px",flex:"0 1",alignSelf:"center",textAlign:"left",margin:0},title:{fontSize:"24px",fontWeight:700,lineHeight:"32px",marginBottom:12,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",color:"#fff"},subtitle:{fontSize:"15px",fontWeight:400,lineHeight:"18px",margin:0,color:"#fff"}};function p(e){var t,a,l,i,d=e.classes,c=e.media,f=e.mediaBackgroundStyle,p=e.subtitle,h=e.title,m=e.mobile,b=e.landscape,g=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["classes","media","mediaBackgroundStyle","subtitle","title","mobile","landscape"]),v=m&&b;return o.default.createElement("div",n({className:(0,u.default)(d.root,(t={},s(t,d.rootMobile,m),s(t,d.rootMobileLandscape,v),t))},g),o.default.createElement("div",{className:(0,u.default)(d.mediaBackground,(a={},s(a,d.mediaBackgroundMobile,m),s(a,d.mediaBackgroundMobileLandscape,v),a)),style:f},o.default.createElement("div",{className:(0,u.default)(d.media,(l={},s(l,d.mediaMobile,m),s(l,d.mediaMobileLandscape,v),l))},c)),o.default.createElement("div",{className:(0,u.default)(d.text,(i={},s(i,d.textMobile,m),s(i,d.textMobileLandscape,v),i))},o.default.createElement(r.default,{className:d.title},h),o.default.createElement(r.default,{className:d.subtitle},p)))}p.propTypes={classes:l.default.object.isRequired,media:l.default.node.isRequired,mediaBackgroundStyle:l.default.object,subtitle:l.default.string.isRequired,title:l.default.string.isRequired,mobile:l.default.bool,landscape:l.default.bool},t.default=(0,d.default)(f)(p)},70:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(374);Object.defineProperty(t,"AutoRotatingCarousel",{enumerable:!0,get:function(){return l(n).default}});var o=a(424);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return l(o).default}})}}]);
//# sourceMappingURL=npm.material-auto-rotating-carousel.6a5c2db2.chunk.js.map