(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{19:function(e,t,a){e.exports=a(41)},2:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),m=a(13),i=a(14),s=a(17),u=a(15),o=a(18);var d=function(e){return l.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var h=function(e){return l.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var E=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",{className:t},e.children)};var f=function(e){return l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",null,e.heading)),l.a.createElement("div",{className:"card-body"},e.children))};var p=function(e){return l.a.createElement("div",{className:"text-center"},l.a.createElement(h,null,l.a.createElement(E,{size:"md-1"},l.a.createElement("img",{alt:e.img,className:"img-fluid",src:e.img,style:{margin:"0 auto"}})),l.a.createElement(E,{size:"md-2"},l.a.createElement("h5",null,e.name)),l.a.createElement(E,{size:"md-3"},l.a.createElement("h5",null,e.phone)),l.a.createElement(E,{size:"md-3"},l.a.createElement("h5",null,e.email)),l.a.createElement(E,{size:"md-3"},l.a.createElement("h5",null,e.DOB.substring(0,10)))))},v=a(16),b=a.n(v),g=function(e){return b.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){return e.data.results.map((function(e){return{img:e.picture.thumbnail,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,DOB:e.dob.date}}))}))};a(2);var y=function(e){return l.a.createElement(h,null,l.a.createElement(E,{size:"md-3"}),l.a.createElement(E,{size:"md-6"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Search:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary"},"Reset")))),l.a.createElement(E,{size:"md-3"}))},z=function(e){return l.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={result:{},employees:[],search:""},a.handleInputChange=function(e){var t=e.target.value,n=a.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));a.setState({employees:n})},a.handleFormSubmit=function(e){e.preventDefault();for(var t=a.state.employees,n=0;n<t.length;n++)for(var l=0;l<t.length;l++)if(t[n].name<t[l].name){var r=t[l];t[l]=t[n],t[n]=r}a.setState({employees:t}),console.log(a.state.employees)},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){e.setState({employees:t})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null,l.a.createElement(y,{handleInputChange:this.handleInputChange}),l.a.createElement(h,null,l.a.createElement(E,{size:"md-12"},l.a.createElement(f,null,l.a.createElement(h,null,l.a.createElement(E,{size:"md-1"},l.a.createElement("h5",null,"Image")),l.a.createElement(E,{size:"md-2"},l.a.createElement("h5",null,"Name ",l.a.createElement("button",{onClick:this.handleFormSubmit,className:"btn"},l.a.createElement(z,{symbol:"\ud83d\udc8e"})))),l.a.createElement(E,{size:"md-3"},l.a.createElement("h5",null,"Phone")),l.a.createElement(E,{size:"md-3"},l.a.createElement("h5",null,"Email")),l.a.createElement(E,{size:"md-3"},l.a.createElement("h5",null,"DOB"))),this.state.employees.map((function(e){return l.a.createElement(p,Object.assign({key:e.name},e))})))))))}}]),t}(n.Component);var O=function(e){return l.a.createElement("div",{className:"hero text-center"},e.children,l.a.createElement("h2",null,"Employee Directory"),l.a.createElement("h4",null,"Click on the diamonds to filter by heading or use search box to narrow your results"))};var j=function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(N,null))};c.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.01b21be1.chunk.js.map