(this["webpackJsonpgoogle-keep"]=this["webpackJsonpgoogle-keep"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/react.37fe8322.png"},function(e,t,a){e.exports=a.p+"static/media/bootstrap.1aa61eee.jpg"},function(e,t,a){e.exports=a.p+"static/media/google.0a6783bd.png"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),i=(a(19),a(4)),o=a(3),m=a(5),s=a(6),d=a(11),u=a.n(d),p=a(12),E=a.n(p),g=a(13),b=a.n(g),v=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card m-3",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.content),l.a.createElement("button",{onClick:function(){e.edit(e.id)},className:"btn btn-primary"},"Edit"),l.a.createElement("button",{onClick:function(){e.delete(e.id)},className:"btn btn-danger ml-2"},"Delete"))))};a(8),a(9);var f=function(){var e=0,t=Object(n.useState)({title:"",content:""}),a=Object(s.a)(t,2),c=a[0],r=a[1],d=Object(n.useState)([]),p=Object(s.a)(d,2),g=p[0],f=p[1],h=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))},N=function(e){f(g.filter((function(t,a){return a!==e})))},y=function(t){document.getElementById("editor").style.display="block",e=t,console.log("editnoteindex",t),document.getElementById("edittitle").value=g[t].title,document.getElementById("editcontent").value=g[t].content};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logos my-5"},l.a.createElement("span",null,l.a.createElement("img",{className:"img-fluid",src:b.a,height:"50",width:"50",alt:"google"})),l.a.createElement("span",{style:{fontSize:"20px"}},"="),l.a.createElement("span",null,l.a.createElement("img",{className:"img-fluid",src:u.a,height:"50",width:"50",alt:"reacticon"})),l.a.createElement("span",{style:{fontSize:"20px"}},"+"),l.a.createElement("span",null,l.a.createElement("img",{className:"img-fluid",src:E.a,height:"50",width:"50",alt:"bootstrap"}))),l.a.createElement("div",{className:"input my-5"},l.a.createElement("form",null,l.a.createElement("input",{name:"title",value:c.title,type:"text",placeholder:"Title..",onChange:h,autoComplete:"off"}),l.a.createElement("textarea",{name:"content",value:c.content,placeholder:"Take a note...",spellcheck:"false",onChange:h}),l.a.createElement("button",{type:"button",class:"btn btn-success addbtn",onClick:function(){""==c.title&&""==c.content?alert("Please Enter Note Title and Content"):(r({title:"",content:""}),f([].concat(Object(i.a)(g),[c])))}},l.a.createElement("span",null,"+")))),l.a.createElement("div",{className:"notes"},g.map((function(e,t){return l.a.createElement(v,{title:e.title,content:e.content,delete:N,edit:y,id:t})}))),l.a.createElement("div",{className:"input"},l.a.createElement("div",{id:"editor",className:"editor"},l.a.createElement("form",{className:"editform",style:{boxShadow:"0 0 30px rgba(0,0,0,0.3)"}},l.a.createElement("input",{id:"edittitle",name:"edittitle",autoComplete:"off",placeholder:"Edit title"}),l.a.createElement("textarea",{id:"editcontent",name:"editcontent",placeholder:"Edit body"}),l.a.createElement("button",{type:"button",class:"btn btn-primary addbtn",onClick:function(){var t=Object(i.a)(g);t.forEach((function(t,a){a==e&&(t.title=document.getElementById("edittitle").value,t.content=document.getElementById("editcontent").value)})),f(Object(i.a)(t)),document.getElementById("editor").style.display="none"}},"Save"))))))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Google Keep"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto text-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://github.com/rohitlohia47/Google-Keep"},"Source Code(Github)")))))))};r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(f,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.fb6c7fc7.chunk.js.map