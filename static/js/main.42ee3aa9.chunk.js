(this.webpackJsonpmyslice=this.webpackJsonpmyslice||[]).push([[0],{35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c,r=n(2),o=n(15),i=n.n(o),a=n(5),s=n(7),u=n(9),l=Object(u.c)({name:"counter",initialState:{val:3},reducers:{increment:function(t){t.val+=1},triple:function(t){t.val*=3}}}),d=Object(u.c)({name:"todo",initialState:["first","second"],reducers:{addItems:function(t,e){t.push(e.payload)},removeItem:function(t,e){return t.filter((function(t){return t!==e.payload}))}}}),j=n(10),b=n(13),f=n.n(b),O=n(14),p=Object(u.b)("todos/fetchTodoTask",function(){var t=Object(O.a)(f.a.mark((function t(e,n){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.limit,n.dispatch,c=n.getState,console.log(c),t.abrupt("return",fetch("https://jsonplaceholder.typicode.com/todos/?_limit=".concat(c().counter.val)).then((function(t){return t.json()})).then((function(t){return t})));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(u.c)({name:"todos",initialState:{task:null,loading:!1,err:null},extraReducers:(c={},Object(j.a)(c,p.fulfilled,(function(t,e){t.task=e.payload,t.loading=!1})),Object(j.a)(c,p.pending,(function(t){t.loading=!0})),Object(j.a)(c,p.rejected,(function(t,e){t.err=e.error,t.loading=!1})),c)}),x=n(16);n(31),n(37);x.a.initializeApp({apiKey:"AIzaSyC445yoEHu2xMWHAs-WwISkJfWFl6oTDso",authDomain:"student-9772c.firebaseapp.com",databaseURL:"https://student-9772c.firebaseio.com",projectId:"student-9772c",storageBucket:"student-9772c.appspot.com",messagingSenderId:"310956542588",appId:"1:310956542588:web:eb6042d5d5b7268b0e17f9"});var v,m,g=x.a.firestore(),y=x.a.database(),k=Object(u.b)("users/fetchNotes",Object(O.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=g.collection("notes").get().then((function(t){var e=[];return t.forEach((function(t){e.push({title:t.data().title,body:t.data().body,id:t.id})})),e})),t.next=3,e;case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),I=Object(u.c)({name:"notes",initialState:{selectedNoteIndex:null,selectedNote:null,notes:null,count:3,loadingNotes:!1,error:null},reducers:{},extraReducers:(v={},Object(j.a)(v,k.pending,(function(t,e){!1===t.loadingNotes&&(t.loadingNotes=!0)})),Object(j.a)(v,k.fulfilled,(function(t,e){!0===t.loadingNotes&&(t.notes=e.payload,t.loadingNotes=!1)})),Object(j.a)(v,k.rejected,(function(t,e){!0===t.loadingNotes&&(t.loadingNotes=!1,t.error=e.payload)})),v)}),N=(n(1),Object(u.b)("posts/fetchPosts",Object(O.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=y.ref().child("posts").get().then((function(t){var e=[];return t.exists()?t.forEach((function(t){e.push({title:t.val().title,body:t.val().body})})):console.log("No data available"),e})).catch((function(t){console.error(t)})),t.next=3,e;case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))))),w=Object(u.c)({name:"posts",initialState:{posts:[],loading:!1,err:null},extraReducers:(m={},Object(j.a)(m,N.fulfilled,(function(t,e){t.posts=e.payload,!0===t.loading&&(t.loading=!1)})),Object(j.a)(m,N.pending,(function(t,e){t.loading=!0})),Object(j.a)(m,N.rejected,(function(t,e){t.err=e.error})),m)}),S=n(3),E=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.counter.val})),n=Object(s.b)(l.actions,t);return Object(S.jsxs)("div",{children:[e," ...",Object(S.jsx)("button",{onClick:function(){return n.increment()},children:"Add"}),Object(S.jsx)("button",{onClick:function(){return n.triple()},children:"Triple"})]})},C=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.notes.notes}));return Object(r.useEffect)((function(){t(k())}),[t]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Data from firestore"}),Object(S.jsx)("ul",{children:e&&e.map((function(t,e){return Object(S.jsxs)("li",{children:[Object(S.jsx)("button",{children:"x"}),t.title,",",t.body]},e)}))})]})},R=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.posts.posts}));return Object(r.useEffect)((function(){t(N())}),[t]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Data from RDB"}),Object(S.jsx)("ul",{children:e&&e.map((function(t,e){return Object(S.jsxs)("li",{children:[t.title," , ",t.body]},e)}))})]})},A=function(){var t=Object(r.useRef)(""),e=Object(a.c)((function(t){return t.todo})),n=Object(s.b)(d.actions,Object(a.b)());return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{placeholder:"Enter Item",ref:t}),Object(S.jsx)("button",{onClick:function(){""!==t.current.value&&n.addItems(t.current.value),t.current.value=""},children:"Add"}),Object(S.jsx)("br",{}),Object(S.jsx)("ul",{children:e.map((function(t,e){return Object(S.jsxs)("li",{children:[" ",Object(S.jsx)("button",{onClick:function(){return e=t,void n.removeItem(e);var e},children:"x"}),t]},e)}))})]})},D=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.todos.task})),n=Object(a.c)((function(t){return t.todos.loading}));return Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Fetched Todos"}),Object(S.jsx)("ul",{children:e?e.map((function(t,e){return Object(S.jsx)("li",{children:t.title},e)})):n?Object(S.jsx)("li",{children:" loading.... "}):Object(S.jsx)("li",{onClick:function(){t(p({limit:1}))},children:" click to fetch "})})]})},T=Object(s.c)({counter:l.reducer,todo:d.reducer,todos:h.reducer,notes:I.reducer,posts:w.reducer}),B=Object(u.a)({reducer:T});B.dispatch(k());n(35);function J(){return Object(S.jsxs)(a.a,{store:B,children:[Object(S.jsx)(E,{}),Object(S.jsx)("hr",{}),Object(S.jsx)(A,{}),Object(S.jsx)("hr",{}),Object(S.jsx)(D,{}),Object(S.jsx)("hr",{}),Object(S.jsx)(C,{}),Object(S.jsx)("hr",{}),Object(S.jsx)(R,{})]})}var W=document.getElementById("root");i.a.render(Object(S.jsx)(r.StrictMode,{children:Object(S.jsx)(J,{})}),W)}},[[36,1,2]]]);
//# sourceMappingURL=main.42ee3aa9.chunk.js.map