!function(t){t.fn.extend({vinnyFollow:function(o){var i={wrapper:1260,"class":"vinny-line",zindex:20,width:1,lineWidth:2,color:"#ffffff",alignClass:null,maxHeight:200,flowColor:"#5cff00",flowTop:230,responsiveOffset:50};o=t.extend(i,o);var a=t(this),n=null,s=t(window).width(),e=function(){n=null,s=t(window).width()},r=function(){a.each(function(){var i=t(this),a=o.color,e=0,r="auto",d=0,l="auto",f=0,h="0 0",p=0,c=0,v=!1,w=!1,g=!1,m=0,x="auto",u=0,b=0,z=!1,k=!1,y=!1;void 0!=i.data("offset-top")&&(e=parseInt(i.data("offset-top"))),void 0!=i.data("offset-left")&&(r="calc(((100vw - "+o.wrapper+"px) / 2) + "+parseInt(i.data("offset-left"))+"px)",550>=s&&(r="-"+4*parseInt(i.data("offset-left"))+"px")),void 0!=i.data("offset-bottom")&&(d=parseInt(i.data("offset-bottom"))),void 0!=i.data("offset-right")&&(l="calc(((100vw - "+o.wrapper+"px) / 2) + "+parseInt(i.data("offset-right"))+"px)"),void 0!=i.data("angle")&&(f=parseInt(i.data("angle"))),"bottom"==i.data("origin")&&(h="0 100%"),void 0!=i.data("color")&&(a=i.data("color")),void 0!=i.data("follow-on")&&(w=i.data("follow-on")),void 0!=i.data("2-line")&&(v=i.data("2-line")),void 0!=i.data("follow-on")&&(l=n),void 0!=i.data("horizontal")&&(g=!0),void 0!=i.data("horizontal-top")&&(m=parseInt(i.data("horizontal-top")),767>=s&&(m=o.responsiveOffset),d="calc(100% - "+m+"px)"),void 0!=i.data("horizontal-offsetx")&&(x="calc(((100vw - "+o.wrapper+"px) / 2) + "+parseInt(i.data("horizontal-offsetx"))+"px)"),void 0!=i.data("3-line")&&(z=i.data("3-line")),void 0!=i.data("diag-left-follow")&&(k=!0),void 0!=i.data("responsive")&&(y=!0);var X='<div class="'+o["class"]+'"></div>';if(t(this).find("."+o["class"]).length||t(this).append(X),t(this).find("."+o["class"]+":not(.line-horiz)").css({width:o.lineWidth+"px",position:"absolute","z-index":o.zindex,top:e,left:r,bottom:d,right:l,"-webkit-transform":"skewX("+f+"deg)","-moz-transform":"skewX("+f+"deg)","-ms-transform":"skewX("+f+"deg)","-o-transform":"skewX("+f+"deg)",transform:"skewX("+f+"deg)","-webkit-transform-origin":h,"-moz-transform-origin":h,"-ms-transform-origin":h,"-o-transform-origin":h,"transform-origin":h,overflow:"hidden"}),0!=f&&t(this).find("."+o["class"]+":not(.line-horiz)").attr("skewed","1"),null!=o.alignClass&&i.data("align-offset")){var I=parseInt(i.data("align-offset"));1250>=s&&(I=20);var W=i.find("."+o["class"]),C=s-(W.offset().left+W.height())-(s-o.wrapper)/2;i.find(o.alignClass).css({width:"calc(((100vw - "+o.wrapper+"px) / 2) - "+I+"px + "+C+"px)"})}if(1==g){var T=t(i).find("."+o["class"]+":last-child"),H=T.offset().left+T.height(),O="calc("+H+"px + "+o.lineWidth/2+"px)";x="calc(((100vw - "+o.wrapper+"px) / 2) + "+parseInt(i.data("horizontal-offsetx"))+"px + "+o.lineWidth/2+"px)";var X='<div class="'+o["class"]+' line-horiz"></div>';t(this).find(".line-horiz."+o["class"]).length||t(this).append(X),d="calc(100% - "+m+"px - "+o.lineWidth/2+"px)",t(this).find(".line-horiz."+o["class"]).css({height:o.lineWidth+"px",position:"absolute","z-index":o.zindex,right:x,bottom:d,left:O,overflow:"hidden"})}if(1==v){void 0!=i.data("2-offset-bottom")&&(p=i.data("2-offset-bottom"),e="calc(100% - "+d+"px)"),void 0!=i.data("2-offset-right")&&(l="calc(((100vw - "+o.wrapper+"px) / 2) + "+parseInt(i.data("2-offset-right"))+"px)"),void 0!=i.data("2-offset-top")&&(e=i.data("2-offset-top")),void 0!=i.data("2-angle")&&(c=i.data("2-angle"));var X='<div class="'+o["class"]+' line-2"></div>';t(this).find(".line-2."+o["class"]).length||t(this).append(X),t(this).find(".line-2."+o["class"]).css({width:o.lineWidth+"px",position:"absolute","z-index":o.zindex,top:e,left:r,bottom:p,right:l,"-webkit-transform":"skewX("+c+"deg)","-moz-transform":"skewX("+c+"deg)","-ms-transform":"skewX("+c+"deg)","-o-transform":"skewX("+c+"deg)",transform:"skewX("+c+"deg)","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-ms-transform-origin":"0 0","-o-transform-origin":"0 0","transform-origin":"0 0",overflow:"hidden"}),0!=c&&t(this).find(".line-2."+o["class"]).attr("skewed","1")}if(1==w){var T=t(i).find("."+o["class"]+":last-child");n=s-(T.offset().left+T.height())-o.lineWidth}if(1==z){void 0!=i.data("3-offset-bottom")&&(u=i.data("3-offset-bottom"),e="calc(100% - "+p+"px)"),void 0!=i.data("3-offset-right")&&(l="calc(((100vw - "+o.wrapper+"px) / 2) + "+parseInt(i.data("3-offset-right"))+"px)"),void 0!=i.data("3-offset-top")&&(e=i.data("3-offset-top")),void 0!=i.data("3-angle")&&(b=i.data("3-angle"));var X='<div class="'+o["class"]+' line-3"></div>';t(this).find(".line-3."+o["class"]).length||t(this).append(X),t(this).find(".line-3."+o["class"]).css({width:o.lineWidth+"px",position:"absolute","z-index":o.zindex,top:e,left:r,bottom:u,right:l,"-webkit-transform":"skewX("+b+"deg)","-moz-transform":"skewX("+b+"deg)","-ms-transform":"skewX("+b+"deg)","-o-transform":"skewX("+b+"deg)",transform:"skewX("+b+"deg)","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-ms-transform-origin":"0 0","-o-transform-origin":"0 0","transform-origin":"0 0",overflow:"hidden","border-radius":"2px"}),0!=b&&t(this).find(".line-3."+o["class"]).attr("skewed","1")}if(1==k){var j=i.next(),T=t(i).find("."+o["class"]+":last-child"),F=s-(T.offset().left+T.height())-o.lineWidth;j.find(".diag-left").css({width:F+"px"})}})};r(),t(window).on("resize",function(){e(),r()});var d='<div class="vinnycolor"></div>',l=t(".vinny-line");l.append(d);var f=t(".vinny-line:not(.line-horiz) .vinnycolor"),h=t(".line-horiz .vinnycolor");f.css({position:"absolute",left:"0",right:"0",top:"0",bottom:"0",margin:"0 auto",width:o.width+"px",background:o.color}),h.css({position:"absolute",left:"0",right:"0",top:"0",bottom:"0",margin:"auto 0",height:o.width+"px",background:o.color}),t("#main-banner .vinnycolor").css("top","1px");var d='<div class="vinnyflow"></div>';l.append(d);var p=t(".vinny-line:not(.line-horiz) .vinnyflow"),c=t(".line-horiz .vinnyflow"),v=0;l.each(function(){void 0!=t(this).closest(".vinnyfollow").data("offset-reset")&&(v=0),t(this).find(".vinnyflow").attr("data-distance-offset",v),t(this).hasClass("line-horiz")&&(v+=200)});var w;l.each(function(){var i=t(this);w=1==i.attr("skewed")?o.lineWidth/2:o.lineWidth/4,i.hasClass("line-horiz")?i.find(".vinnyflow").css({height:w+"px",border:w+"px solid "+o.flowColor}):i.find(".vinnyflow").css({width:w+"px",border:w+"px solid "+o.flowColor})}),p.css({position:"absolute",left:"0",right:"0",margin:"0 auto",height:o.maxHeight+"px","max-height":o.maxHeight+"px",background:o.flowColor}),c.css({position:"absolute",top:"0",bottom:"0",margin:"auto 0",width:"100%","max-width":"100%",background:o.flowColor}),a.each(function(){var o=t(this);if(void 0!=o.data("color")){var i=o.data("color");o.find(".vinnycolor").css("background",i)}});var g=function(){l.each(function(){var i=t(window).scrollTop(),a=parseInt(t(this).find(".vinnyflow").data("distance-offset")),n=t(this).offset().top,s=-(n-i)+o.flowTop-a;if(t(this).find(".vinnyflow").css("top",s+"px"),t(this).hasClass("line-horiz")){var e="calc("+s+"px * ("+(t(this).width()+o.flowTop/2)/o.flowTop+"))";t(this).find(".vinnyflow").css({left:e,top:"0"})}})};g(),t(window).on("scroll resize",function(){g()})}})}(jQuery);