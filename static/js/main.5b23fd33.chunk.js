(this["webpackJsonpblitzdata-search-filter"]=this["webpackJsonpblitzdata-search-filter"]||[]).push([[0],{113:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),i=a.n(r),s=a(50),l=a.n(s),o=a(58),u=a(13),b=a(27),d=a(11),j=(a(113),a(8)),f=function(){return Object(j.jsx)("div",{className:"emptyView-wrap",children:Object(j.jsx)("img",{src:"/images/gif/empty.gif",alt:""})})},m=[{id:1,value:"1",label:"1\ud83c\udf1f"},{id:2,value:"2",label:"2\ud83c\udf1f"},{id:3,value:"3",label:"3\ud83c\udf1f"},{id:4,value:"4",label:"4\ud83c\udf1f"},{id:5,value:"5",label:"5\ud83c\udf1f"}],O=(a(188),a(180)),h=(a(183),Object(O.a)({root:{"&$checked":{color:"#000"}},checked:{},wrap:{width:"100%",display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginLeft:0},label:{fontSize:".8rem",fontFamily:"'Raleway', sans-serif"}}),a(186)),v=a(189),p=Object(O.a)({root:{width:"100%",justifyContent:"space-between"},toggle:{fontFamily:"'Raleway', sans-serif",fontSize:".8rem",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:"10px","&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)":{borderRadius:"10px"},"&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)":{borderRadius:"10px",border:"1px solid rgba(0, 0, 0, 0.12)"},"&.Mui-selected":{borderRadius:"10px",background:"#000",color:"#fff"},"&.MuiToggleButton-root":{"&:hover":{background:"#000",color:"#fff"}}}}),g=function(e){var t=e.options,a=e.value,n=e.selectToggle,c=p();return Object(j.jsx)(v.a,{value:a,exclusive:!0,onChange:n,className:c.root,children:t.map((function(e){var t=e.label,a=e.id,n=e.value;return Object(j.jsx)(h.a,{className:c.toggle,value:n,children:t},a)}))})},x=a(190),y=Object(O.a)({root:{width:"100%"},thumb:{color:"#000"},rail:{color:"rgba(0, 0, 0, 0.26)"},track:{color:"#000"}}),w=function(e){var t=e.value,a=e.changeNumber,n=e.minNumber,c=e.maxNumber,r=(e.attributeName,y());return Object(j.jsx)("div",{className:r.root,children:Object(j.jsx)(x.a,{value:t,onChange:a,valueLabelDisplay:"on",min:n,max:c,classes:{thumb:r.thumb,rail:r.rail,track:r.track}})})},N=(a(120),a(88)),k=a(20),S=a(187),D=Object(O.a)({root:{"&$checked":{color:"#000"}},checked:{},wrap:{width:"100%",display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginLeft:0},label:{fontSize:".8rem",fontFamily:"'Raleway', sans-serif"}}),L=function(e){var t=e.changeDated,a=e.selectedDate;D();return Object(j.jsx)(k.a,{utils:N.a,children:Object(j.jsx)(S.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Select date",value:a,onChange:t,KeyboardButtonProps:{"aria-label":"change date"}})})},C=function(e){e.selectEnum;var t=e.selectToggle,a=(e.changeChecked,e.changeNumber),n=e.attributeList,r=e.changedDate,i=(e.selectedEnums,e.selectedToggles),s=void 0===i?{}:i,l=e.selectedNumbers,o=void 0===l?{}:l,u=e.selectedDates,b=void 0===u?{}:u;return Object(j.jsx)("div",{children:n.map((function(e){var n=e.attribute,i=e.type,l=e.label;return"int"===i?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("p",{className:"label-range",children:l}),Object(j.jsx)(w,{value:o[n],changeNumber:function(e){return a(n,e)},minNumber:100,maxNumber:5e3})]},n):"date"===i?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("p",{className:"label-range",children:l}),Object(j.jsx)(L,{selectedDate:b[n],changeDated:function(e){return r(n,e)}})]},n):"enum"===i?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("p",{className:"label",children:l}),Object(j.jsx)(g,{options:m,value:s[n],selectToggle:function(e){return t(n,e)}})]},n):null}))})},T=(a(121),function(e){var t=e.item,a=t.title,n=t.images,c=t.excerpt,r=t.editiondate;return Object(j.jsxs)("div",{className:"listItem-wrap",children:[Object(j.jsx)("img",{src:null!=n?n[0].base+n[0]["180x180_wp"]:"",alt:""}),Object(j.jsxs)("header",{children:[Object(j.jsx)("h4",{children:a}),Object(j.jsx)("span",{children:r})]}),Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:Object(j.jsx)("span",{children:c})})})]})}),z=(a(122),function(e){var t,a=e.blitzDataList,n=void 0===a?{items:[]}:a;return Object(j.jsx)("div",{className:"list-wrap",children:null===n||void 0===n||null===(t=n.items)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(T,{item:e},e["@sort"])}))})}),M=(a(123),a(87)),B=a.n(M),I=function(e){var t=e.value,a=e.changeInput;return Object(j.jsxs)("div",{className:"searchBar-wrap",children:[Object(j.jsx)(B.a,{className:"searchBar-icon"}),Object(j.jsx)("input",{type:"text",placeholder:"Search Bar",value:t,onChange:a})]})},E=a(72),F=a.n(E),R=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=5;break}return e.next=3,F.a.get("https://seeblick.localpoint.ch/api/list/cms_articles.json");case 3:return a=e.sent,e.abrupt("return",a.data);case 5:return e.next=7,F.a.get("https://seeblick.localpoint.ch/api/list/cms_articles.json?conditions=[".concat(t,"]"));case 7:return n=e.sent,e.abrupt("return",n.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(a(147),a(89)),A=function(){var e,t=Object(n.useState)({}),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({}),s=Object(d.a)(i,2),m=s[0],O=s[1],h=Object(n.useState)({default:[1e3,5e3]}),v=Object(d.a)(h,2),p=v[0],g=v[1],x=Object(n.useState)({}),y=Object(d.a)(x,2),w=y[0],N=y[1],k=Object(n.useState)([]),S=Object(d.a)(k,2),D=S[0],L=S[1],T=Object(n.useState)([{}]),M=Object(d.a)(T,2),B=M[0],E=M[1],F=Object(n.useState)(B),A=Object(d.a)(F,2),H=A[0],J=A[1],G=Object(n.useState)(!0),$=Object(d.a)(G,2),K=($[0],$[1]),P=Object(n.useState)(""),V=Object(d.a)(P,2),q=V[0],Q=V[1],U=Object(n.useState)({}),W=Object(d.a)(U,2),X=W[0],Y=W[1],Z=function(){for(var e=[],t=0,a=Object.keys(p);t<a.length;t++){var n=a[t];if("default"!==n){var c=p[n];if(console.log("First",n),Array.isArray(c)){var r=Object(d.a)(c,2),i=r[0],s=r[1];console.log("Second",n),e.push('["'.concat(n,'", ">", "').concat(i,'"]')),e.push('["'.concat(n,'", "<", "').concat(s,'"]'))}}}for(var l in w){var o=w[l];o&&e.push('["'.concat(l,'", ">", "').concat(o,'"]'))}return e.join(",")};return Object(n.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Z(),e.next=3,R(t);case 3:a=e.sent,E(a),J(a),n=Object.entries(a.model.attributes).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return{attribute:a,type:n.type,label:n.label}})),Y(n);case 8:case"end":return e.stop()}}),e)})))()}),[c,m,p,w]),Object(n.useEffect)((function(){!function(){var e,t=[],a=JSON.parse(JSON.stringify(B)),n=function(e){var a=m[e];a&&(t=t.filter((function(t){return parseInt(t[e])===parseInt(a)})))};for(var r in m)n(r);var i=function(e){var a=c[e];a&&(t=t.filter((function(t){return t[e]===a})))};for(var s in c)i(s);for(var l=function(){var e=Object(d.a)(u[o],2),a=e[0],n=e[1];if(Array.isArray(n)){var c=Object(d.a)(n,2),r=c[0],i=c[1];t=t.filter((function(e){return e[a]>=r&&e[a]<=i}))}},o=0,u=Object.entries(p);o<u.length;o++)l();var b=function(e){var a=w[e];a&&(t=t.filter((function(t){return new Date(t[e]).toDateString()===new Date(a).toDateString()})))};for(var j in w)b(j);D.filter((function(e){return e.checked})).map((function(e){return e.label.toLowerCase()})),q&&!1!==a.items&&void 0!==a.items&&null!==a.items&&(a.items=a.items.filter((function(e){return-1!==e.title.toLowerCase().search(q.toLowerCase().trim())}))),J(a),(null===a||void 0===a||null===(e=a.items)||void 0===e?void 0:e.length)?K(!0):K(!1)}()}),[m,c,q,p]),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:null!=(null===H||void 0===H||null===(e=H.model)||void 0===e?void 0:e.name)?H.model.name:"Loading..."})}),Object(j.jsx)(I,{value:q,changeInput:function(e){return Q(e.target.value)}}),Object(j.jsxs)("div",{className:"home_panelList-wrap",children:[Object(j.jsx)("div",{className:"home_panel-wrap",children:X.length>0?Object(j.jsx)(C,{selectedEnums:c,selectEnum:function(e,t){r((function(a){return Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},e,t))}))},selectedToggles:m,selectedNumbers:p,selectToggle:function(e,t){O((function(a){return Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},e,t))}))},changeChecked:function(e,t){var a=Object(b.a)({},D),n=a[e].map((function(e){return e.id===t?Object(b.a)(Object(b.a)({},e),{},{checked:!e.checked}):e}));a[e]=n,L(a)},changeNumber:function(e,t){g((function(a){return Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},e,t))}))},attributeList:X,selectedDates:w,changedDate:function(e,t){var a=Object(_.a)(t,"yyyy-MM-dd HH:mm:ss");N((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(u.a)({},e,a))}))}}):Object(j.jsx)("span",{children:"Loading..."})}),Object(j.jsx)("div",{className:"home_list-wrap",children:null!=(null===H||void 0===H?void 0:H.items)&&0!=(null===H||void 0===H?void 0:H.items)?Object(j.jsx)(z,{blitzDataList:H}):Object(j.jsx)(f,{})})]})]})},H=(a(148),function(){return Object(j.jsx)(A,{})});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.5b23fd33.chunk.js.map