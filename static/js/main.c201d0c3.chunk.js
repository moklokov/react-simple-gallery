(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports={backdrop:"Modal_backdrop__3vDOp",modal:"Modal_modal__3m2f2",arrow:"Modal_arrow__m5grl",arrow_next:"Modal_arrow_next__2P4Iy",arrow_prev:"Modal_arrow_prev__1wzha",arrow_disable:"Modal_arrow_disable__3mGON",img_wrap:"Modal_img_wrap__3WXiq",img:"Modal_img__2ivo3"}},,function(e,t,r){e.exports={root:"Arrow_root__14y95",arrow:"Arrow_arrow__2RALv",disable:"Arrow_disable__1wOLu"}},,,,,function(e,t,r){e.exports={image_wrap:"Preview_image_wrap__2KpQq",image:"Preview_image__287c8",image_active:"Preview_image_active__LjSg1"}},function(e,t,r){e.exports={wrap:"Gallery_wrap__2XaeX",main:"Gallery_main__2KB4B",sidebar:"Gallery_sidebar__1V292"}},function(e,t,r){e.exports={root:"Next_root__1X3xo",arrow:"Next_arrow__2MbSl"}},function(e,t,r){e.exports={root:"Prev_root__1w69o",arrow:"Prev_arrow__bSx5e"}},function(e,t,r){e.exports={root:"Slider_root__1LU-3",img:"Slider_img__1i-Ei"}},,,function(e,t,r){e.exports={root:"Sidebar_root__1_p6x"}},function(e,t,r){e.exports=r(35)},,,,,function(e,t,r){},,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),l=r(13),i=r.n(l),n=(r(28),r(3)),c=r(4),s=r(6),p=r(5),m=r(7),h=r(2),u=r.n(h),d=r(9),v=r(15),x=r.n(v),w=function(e){var t=e.active,r=e.src,o=e.onClick;return a.a.createElement("li",{className:x.a.image_wrap,onClick:o},a.a.createElement("div",{className:u()(x.a.image,Object(d.a)({},x.a.image_active,t))},a.a.createElement("img",{src:r,alt:"preview image"})))},g=r(22),_=r.n(g),b=function(e){var t=e.active,r=e.images,o=e.onChangeActive;return a.a.createElement("ul",{className:u()("clearfix",_.a.root)},r.map(function(e,r){return a.a.createElement(w,{key:r,src:e.preview,active:r===t,onClick:function(){return o(r)}})}))},f=r(10),E=r.n(f),O=r(17),j=r.n(O),k=function(e){var t=e.disable,r=e.onClick;return a.a.createElement("div",{className:u()(E.a.root,j.a.root,Object(d.a)({},E.a.disable,t)),onClick:t?void 0:r},a.a.createElement("span",{className:u()(E.a.arrow,j.a.arrow)},">"))},C=r(18),y=r.n(C),N=function(e){var t=e.disable,r=e.onClick;return a.a.createElement("div",{className:u()(E.a.root,y.a.root,Object(d.a)({},E.a.disable,t)),onClick:t?void 0:r},a.a.createElement("span",{className:u()(E.a.arrow,y.a.arrow)},"<"))},A=function(e){var t=e.count,r=e.active;return a.a.createElement("span",null,r,"/",t)},S=r(19),M=r.n(S),P=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={isShowArrows:!1},r.handleToggleArrows=function(){return r.setState({isShowArrows:!r.state.isShowArrows})},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,r=e.count,o=e.active,l=e.onNext,i=e.onPrev,n=e.onShow,c=this.state.isShowArrows;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:M.a.root,onMouseEnter:this.handleToggleArrows,onMouseLeave:this.handleToggleArrows},c&&a.a.createElement(N,{disable:o<=0,onClick:i}),a.a.createElement("img",{className:u()("img-responsive",M.a.img),src:t.medium,onClick:n}),c&&a.a.createElement(k,{disable:o>=r-1,onClick:l})),a.a.createElement("div",{className:"text-center white"},a.a.createElement(A,{count:r,active:o+1})))}}]),t}(o.Component),I=r(14),T=r(8),L=r.n(T),B=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e){e.stopPropagation(),r.props.disable||r.props.onClick()},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.disable;return a.a.createElement("div",{className:u()(L.a.arrow,L.a.arrow_left,Object(d.a)({},L.a.arrow_disable,e)),onClick:this.handleClick},a.a.createElement(I.a,{icon:"angle-left",size:"10x"}))}}]),t}(o.Component),G=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e){e.stopPropagation(),r.props.disable||r.props.onClick()},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.disable;return a.a.createElement("div",{className:u()(L.a.arrow,L.a.arrow_next,Object(d.a)({},L.a.arrow_disable,e)),onClick:this.handleClick},a.a.createElement(I.a,{icon:"angle-right",size:"10x"}))}}]),t}(o.Component),W=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e){return e.stopPropagation()},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.count,r=e.active,o=e.image;return a.a.createElement("div",{className:L.a.img_wrap},a.a.createElement("img",{className:L.a.img,src:o.large,onClick:this.handleClick}),a.a.createElement("div",{className:"text-center"},a.a.createElement(A,{count:t,active:r})))}}]),t}(o.Component),X=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(s.a)(this,Object(p.a)(t).call(this,e))).el=document.createElement("div"),r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return Object(l.createPortal)(this.props.children,this.el)}}]),t}(o.Component),z=function(e){var t=e.onClick;return a.a.createElement(X,null,a.a.createElement("div",{className:L.a.backdrop,onClick:t}))},D=function(e){var t=e.count,r=e.active,o=e.image,l=e.onNext,i=e.onPrev,n=e.onClose;return a.a.createElement("div",{className:L.a.modal,onClick:n},a.a.createElement("div",{className:"clearfix"},a.a.createElement(B,{onClick:i,disable:r<=0}),a.a.createElement(W,{image:o,count:t,active:r}),a.a.createElement(G,{onClick:l,disable:r>=t-1})),a.a.createElement(z,{onClick:n}))},q=r(11),J=r(20),K=r(16),U=r.n(K);q.b.add(J.b),q.b.add(J.a);var F=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={active:0,isShowModal:!1},r.setActive=function(e){return r.setState({active:e})},r.setIsShowModal=function(e){return r.setState({isShowModal:e})},r.handleNext=function(){return r.setActive(r.state.active+1)},r.handlePrev=function(){return r.setActive(r.state.active-1)},r.handleChangeActive=function(e){return r.setActive(e)},r.handleToggleModal=function(){return r.setIsShowModal(!r.state.isShowModal)},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.active,r=e.isShowModal,o=this.props.images,l=o[t];return a.a.createElement("div",{className:u()("clearfix",U.a.wrap)},a.a.createElement("div",{className:U.a.main},l&&a.a.createElement(P,{image:l,count:o.length,active:t,onNext:this.handleNext,onPrev:this.handlePrev,onShow:this.handleToggleModal})),a.a.createElement("div",{className:U.a.sidebar},a.a.createElement(b,{images:o,active:t,onChangeActive:this.handleChangeActive})),r&&a.a.createElement(D,{image:l,count:o.length,active:t,onNext:this.handleNext,onPrev:this.handlePrev,onClose:this.handleToggleModal}))}}]),t}(o.Component),Q=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={images:[]},r.loadImages=function(){r.setState({images:[{large:"http://lorempixel.com/1024/768/sports/1/",medium:"http://lorempixel.com/600/400/sports/1/",preview:"http://lorempixel.com/100/100/sports/1/"},{large:"http://lorempixel.com/1024/768/sports/2/",medium:"http://lorempixel.com/600/400/sports/2/",preview:"http://lorempixel.com/100/100/sports/2/"},{large:"http://lorempixel.com/1024/768/sports/3/",medium:"http://lorempixel.com/600/400/sports/3/",preview:"http://lorempixel.com/100/100/sports/3/"},{large:"http://lorempixel.com/1024/768/sports/4/",medium:"http://lorempixel.com/600/400/sports/4/",preview:"http://lorempixel.com/100/100/sports/4/"},{large:"http://lorempixel.com/1024/768/sports/5/",medium:"http://lorempixel.com/600/400/sports/5/",preview:"http://lorempixel.com/100/100/sports/5/"},{large:"http://lorempixel.com/1024/768/sports/6/",medium:"http://lorempixel.com/600/400/sports/6/",preview:"http://lorempixel.com/100/100/sports/6/"},{large:"http://lorempixel.com/1024/768/sports/7/",medium:"http://lorempixel.com/600/400/sports/7/",preview:"http://lorempixel.com/100/100/sports/7/"},{large:"http://lorempixel.com/1024/768/sports/8/",medium:"http://lorempixel.com/600/400/sports/8/",preview:"http://lorempixel.com/100/100/sports/8/"},{large:"http://lorempixel.com/1024/768/sports/9/",medium:"http://lorempixel.com/600/400/sports/9/",preview:"http://lorempixel.com/100/100/sports/9/"},{large:"http://lorempixel.com/1024/768/sports/1/",medium:"http://lorempixel.com/600/400/sports/1/",preview:"http://lorempixel.com/100/100/sports/1/"},{large:"http://lorempixel.com/1024/768/sports/2/",medium:"http://lorempixel.com/600/400/sports/2/",preview:"http://lorempixel.com/100/100/sports/2/"},{large:"http://lorempixel.com/1024/768/sports/3/",medium:"http://lorempixel.com/600/400/sports/3/",preview:"http://lorempixel.com/100/100/sports/3/"},{large:"http://lorempixel.com/1024/768/sports/4/",medium:"http://lorempixel.com/600/400/sports/4/",preview:"http://lorempixel.com/100/100/sports/4/"},{large:"http://lorempixel.com/1024/768/sports/5/",medium:"http://lorempixel.com/600/400/sports/5/",preview:"http://lorempixel.com/100/100/sports/5/"},{large:"http://lorempixel.com/1024/768/sports/6/",medium:"http://lorempixel.com/600/400/sports/6/",preview:"http://lorempixel.com/100/100/sports/6/"},{large:"http://lorempixel.com/1024/768/sports/7/",medium:"http://lorempixel.com/600/400/sports/7/",preview:"http://lorempixel.com/100/100/sports/7/"},{large:"http://lorempixel.com/1024/768/sports/8/",medium:"http://lorempixel.com/600/400/sports/8/",preview:"http://lorempixel.com/100/100/sports/8/"},{large:"http://lorempixel.com/1024/768/sports/9/",medium:"http://lorempixel.com/600/400/sports/9/",preview:"http://lorempixel.com/100/100/sports/9/"},{large:"http://lorempixel.com/1024/768/sports/1/",medium:"http://lorempixel.com/600/400/sports/1/",preview:"http://lorempixel.com/100/100/sports/1/"},{large:"http://lorempixel.com/1024/768/sports/2/",medium:"http://lorempixel.com/600/400/sports/2/",preview:"http://lorempixel.com/100/100/sports/2/"},{large:"http://lorempixel.com/1024/768/sports/3/",medium:"http://lorempixel.com/600/400/sports/3/",preview:"http://lorempixel.com/100/100/sports/3/"},{large:"http://lorempixel.com/1024/768/sports/4/",medium:"http://lorempixel.com/600/400/sports/4/",preview:"http://lorempixel.com/100/100/sports/4/"},{large:"http://lorempixel.com/1024/768/sports/5/",medium:"http://lorempixel.com/600/400/sports/5/",preview:"http://lorempixel.com/100/100/sports/5/"},{large:"http://lorempixel.com/1024/768/sports/6/",medium:"http://lorempixel.com/600/400/sports/6/",preview:"http://lorempixel.com/100/100/sports/6/"},{large:"http://lorempixel.com/1024/768/sports/7/",medium:"http://lorempixel.com/600/400/sports/7/",preview:"http://lorempixel.com/100/100/sports/7/"},{large:"http://lorempixel.com/1024/768/sports/8/",medium:"http://lorempixel.com/600/400/sports/8/",preview:"http://lorempixel.com/100/100/sports/8/"},{large:"http://lorempixel.com/1024/768/sports/9/",medium:"http://lorempixel.com/600/400/sports/9/",preview:"http://lorempixel.com/100/100/sports/9/"}]})},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadImages()}},{key:"render",value:function(){var e=this.state.images;return a.a.createElement("div",{style:{height:"600px"}},a.a.createElement(F,{images:e}))}}]),t}(o.Component),R=(r(34),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Simple images gallery")),a.a.createElement("div",{className:"App-content"},a.a.createElement(Q,null)))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,1,2]]]);
//# sourceMappingURL=main.c201d0c3.chunk.js.map