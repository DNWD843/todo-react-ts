(this["webpackJsonptodo-react-ts"]=this["webpackJsonptodo-react-ts"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(19),a=n(7),l=(n(26),n(21)),s=n(8),r=n(2),d="todos",b="",u=n(0),j=function(){var e=Object(r.g)();return Object(u.jsxs)("div",{className:"centered-content",children:[Object(u.jsx)("p",{className:"center app-description",children:"\nThis is an application made with ReactJS, TypeScript and MaterializeCSS library. \nYou can add a Todo, that will be saved in youre browser's LocalStorage. \nAlso you can delete a Todo, set them high priority or mark them as 'Done'.\nA FilterPanel gives you possibility to search a Todo by a keyword, filter\nyoure Todos by next attributes: 'Active', 'Done', 'Important' and reset\nfilter settings.\n\n"}),Object(u.jsx)("button",{type:"button",id:"back",name:"back",className:"btn-small waves-effect waves-light",onClick:function(){return e.push("/")},children:"Back to the to-do list"})]})},h=function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"nav-wrapper padding-lr purple darken-3",children:[Object(u.jsx)(a.b,{to:"/nowhere",className:"brand-logo left",children:"React & Typescript"}),Object(u.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-small-only",children:[Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/",exact:!0,activeClassName:"navlink_selected",className:"navlink",children:"To-do list"})}),Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/about",exact:!0,activeClassName:"navlink_selected",className:"navlink",children:"About application"})})]})]})})},m=n(9),x=n.n(m),p=function(e){var t=Object(c.useState)(b),n=Object(s.a)(t,2),o=n[0],i=n[1],a=e.onAddTodo,l=x()("material-icons",{"purple-text text-darken-2":o,"grey-text text-lighten-1":!o});return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(o),i(b)},className:"todo-form",children:[Object(u.jsxs)("div",{className:"input-field mt2",children:[Object(u.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},type:"text",id:"add-form-title",placeholder:"Type a new to-do here"}),Object(u.jsx)("label",{htmlFor:"title",className:"active",children:"Add a new to-do"})]}),Object(u.jsx)("button",{id:"add-submit",type:"submit",disabled:!o,title:o?"Add a to-do":b,children:Object(u.jsx)("i",{className:l,children:"add"})})]})},f=function(e){var t=e.id,n=e.completed,c=e.todoText,o=e.isImportant,i=e.onToggle,a=e.handleClickDeleteIcon,l=e.onTogglePriority,s=x()("todo ",{completed:n,important:o}),r=x()("material-icons purple-text",{"text-darken-3":o,"text-accent-1":!o});return Object(u.jsxs)("li",{className:s,children:[Object(u.jsxs)("label",{className:"label",children:[Object(u.jsx)("input",{id:"checkbox",type:"checkbox",checked:n,onChange:function(){return i(t)}}),Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)("i",{className:r,onClick:function(){return l(t)},children:"priority_high"}),Object(u.jsx)("i",{className:"material-icons red-text",onClick:function(){return a(t)},children:"delete"})]})]},t)},O=function(e){var t=e.todos,n=e.onToggle,c=e.handleClickDeleteIcon,o=e.onTogglePriority;return t.length?Object(u.jsx)("ul",{children:t.map((function(e){var t=e.id,i=e.completed,a=e.todoText,l=e.isImportant;return Object(u.jsx)(f,{id:t,completed:i,todoText:a,isImportant:l,onToggle:n,handleClickDeleteIcon:c,onTogglePriority:o},t)}))}):Object(u.jsx)("h5",{className:"center no-todos-title",children:"You haven`t any to-do at this time!"})},g=Object(c.createContext)([]),v=Object(c.createContext)([]),y=function(e){var t=e.setFilteredListToState,n=Object(c.useContext)(g),o=Object(c.useState)(b),i=Object(s.a)(o,2),a=i[0],l=i[1],r=x()("material-icons",{"purple-text text-darken-2":a,"grey-text text-lighten-1":!a});return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(b)},className:"todo-form",children:[Object(u.jsxs)("div",{className:"form-field",children:[Object(u.jsxs)("div",{className:"input-field mt2",children:[Object(u.jsx)("input",{value:a,onChange:function(e){l(e.target.value);var c=n.filter((function(t){return t.todoText.toLowerCase().includes(e.target.value.toLowerCase())}));t(c,!0)},type:"text",id:"filter-panel-title",placeholder:"Type a keyword here"}),Object(u.jsx)("label",{htmlFor:"title",className:"active",children:"Find a to-do by a keyword"})]}),Object(u.jsx)("button",{id:"search-submit",type:"submit",disabled:!a,children:Object(u.jsx)("i",{id:"search-icon",className:r,children:"search"})})]}),Object(u.jsx)("button",{type:"button",className:"filter-button waves-effect waves-light btn-small",onClick:function(){t([],!1),l(b)},children:"Reset"}),Object(u.jsx)("button",{type:"button",className:"filter-button waves-effect waves-light btn-small ",onClick:function(){var e=n.filter((function(e){return e.isImportant}));t(e,!0)},children:"Important"}),Object(u.jsx)("button",{type:"button",className:"filter-button waves-effect waves-light btn-small",onClick:function(){var e=n.filter((function(e){return e.completed}));t(e,!0)},children:"Done"}),Object(u.jsx)("button",{type:"button",className:"filter-button waves-effect waves-light btn-small",onClick:function(){var e=n.filter((function(e){return!e.completed}));t(e,!0)},children:"Active"})]})},k=function(e){var t=e.handleAddTodo,n=e.toggleTodo,o=e.handleClickDeleteIcon,i=e.togglePriority,a=e.setFilteredListToState,l=e.isFiltered,s=Object(c.useContext)(g),r=Object(c.useContext)(v);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{onAddTodo:t}),Object(u.jsx)(y,{setFilteredListToState:a}),Object(u.jsx)(O,{todos:l?r:s,onToggle:n,handleClickDeleteIcon:o,onTogglePriority:i})]})},T=function(){var e,t=g.Provider,n=v.Provider,o=Object(c.useState)((e=d,JSON.parse(localStorage.getItem(e)||"[]"))),i=Object(s.a)(o,2),a=i[0],b=i[1],m=Object(c.useState)([]),x=Object(s.a)(m,2),p=x[0],f=x[1],O=Object(c.useState)(!1),y=Object(s.a)(O,2),T=y[0],C=y[1],N=Object(c.useCallback)((function(e){var t={todoText:e,id:Date.now(),completed:!1,isImportant:!1};b((function(e){return[t].concat(Object(l.a)(e))}))}),[]),w=Object(c.useCallback)((function(e){b(a.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}),[a]),S=Object(c.useCallback)((function(e){b(a.map((function(t){return t.id===e&&(t.isImportant=!t.isImportant),t})))}),[a]),I=Object(c.useCallback)((function(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))}),[]),F=function(e,t){T!==t&&C(t),(p.length||e.length)&&f(e)};return Object(c.useEffect)((function(){!function(e,t){localStorage.setItem(e,JSON.stringify(t))}(d,a)}),[a]),Object(u.jsx)(t,{value:a,children:Object(u.jsxs)(n,{value:p,children:[Object(u.jsx)(h,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(r.d,{children:[Object(u.jsx)(r.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(k,{handleAddTodo:N,toggleTodo:w,togglePriority:S,handleClickDeleteIcon:I,setFilteredListToState:F,isFiltered:T})}}),Object(u.jsx)(r.b,{path:"/about",component:j}),Object(u.jsx)(r.b,{children:Object(u.jsx)(r.a,{to:"/"})})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};Object(i.render)(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(a.a,{children:Object(u.jsx)(T,{})})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.0dd1d78d.chunk.js.map