(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}},234:function(e,t,n){},238:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var s=n(9),a=n(124),i={links:[{id:1,link:"/profile",text:"Profile"},{id:2,link:"/dialogs",text:"Messages"},{id:3,link:"/news",text:"News"},{id:6,link:"/users",text:"Users"},{id:4,link:"/music",text:"Music"},{id:5,link:"/settings",text:"Settings"}],friends:[{id:1,name:"Tom"},{id:2,name:"Den"},{id:3,name:"Maks"}]},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},c=n(30),o=n(5),u="ADD-MESSAGE",l={dialogs:[{id:1,name:"Tom"},{id:2,name:"Den"},{id:3,name:"Maks"},{id:4,name:"Marta"}],messages:[{id:1,message:"Hiiiii",name:"Tom",date:"2004-07-24T18:18"},{id:2,message:"Yo",name:"Ben",date:"2004-07-24T18:18"},{id:3,message:"what's up?",name:"Shon",date:"2004-07-24T18:18"},{id:4,message:"How are you?",name:"Kent",date:"2004-07-24T18:18"}],newMessageText:"Hi"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;if(t.type===u){var n=t.newMessageText,s={id:5,message:n,name:"Your name",date:""};return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(c.a)(e.messages),[s]),newMessageText:""})}return e},j=n(122),b=n.n(j).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6f7f3ecd-ed5e-4ed6-a0ce-111fd29fbd86"}}),p=function(e){return b.get("profile/status/"+e).then((function(e){return e.data}))},h=function(e){return b.put("profile/status/",{status:e}).then((function(e){return e.data}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return b.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e,t){return t?b.delete("follow/".concat(e)).then((function(e){return e.data})):b.post("follow/".concat(e),null).then((function(e){return e.data}))},g=function(e){return b.get("profile/"+e).then((function(e){return e.data}))},O=function(){return b.get("/auth/me")},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.post("auth/login",{email:e,password:t,rememberMe:n})},v=function(){return b.delete("auth/login")},_=function(){return b.get("/security/get-captcha-url")},P="ADD-POST",I="SET_PROFILE_INFO",N="SET_STATUS",w={posts:[{id:1,message:"Taki spavu",likesCount:12},{id:2,message:"It's time to go futher",likesCount:23},{id:3,message:"I like apples",likesCount:4}],profileInfo:null,newPostText:"",status:"",id:null,currentUserId:null},C=function(e){return{type:N,status:e}},S=function(e){return function(t){g(e).then((function(n){t({type:I,profileInfo:n}),t(y(e))}))}},y=function(e){return function(t){p(e).then((function(e){t(C(e))}))}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPost:""});case I:return Object(o.a)(Object(o.a)({},e),{},{profileInfo:t.profileInfo});case N:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}},k="TOGGLE_FOLLOW",T="SET_USERS",M="SET_CURRENT_PAGE",E="SET_TOTAL_USERS_COUNT",A="FETCHING_USERS",D="FOLLOWING_PROGRESS",F={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},L=function(e){return{type:M,pageNumb:e}},z=function(e){return{type:E,totalCount:e}},R=function(e){return{type:A,isFetching:e}},G=function(e,t){return{type:D,userId:e,isFetching:t}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!e.followed}):e}))});case T:return Object(o.a)(Object(o.a)({},e),{},{users:Object(c.a)(t.users)});case M:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.pageNumb});case E:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case A:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case D:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):Object(c.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},Z=n(37),Y="SET_USER_DATA",J="SET_CAPTCHA",V={isAuth:!1,userId:null,login:null,email:null,avatar:null,id:null,captchaUrl:null,authorizedUserId:null},W=function(e,t,n){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:Y,payload:{userId:e,email:t,login:n,isAuth:s,captchaUrl:a,authorizedUserId:e}}},X=function(){return function(e){O().then((function(t){var n=t.data.data,s=n.id,a=n.email,i=n.login;0===t.data.resultCode&&(e(S(s)),e(W(s,a,i)))}))}},B=function(){return function(e){v().then((function(t){0===t.data.resultCode&&e(W(null,null,null,!1))}))}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(o.a)(Object(o.a)({},e),t.payload);case J:return Object(o.a)(Object(o.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},Q=n(121),q="SET_INITIALIZED",$={initialized:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===q?Object(o.a)(Object(o.a)({},e),{},{initialized:!0}):e},te=Object(s.c)({app:ee,sidebar:r,dialogsPage:d,profilePage:U,usersPage:H,auth:K,form:Q.a}),ne=Object(s.e)(te,Object(s.a)(a.a)),se=ne;window.store=ne;n(234);var ae=n(1),ie=n.n(ae),re=n(63),ce=n.n(re),oe=n(19),ue=n(20),le=n(22),de=n(21),je=(n(238),n(10)),be=n(66),pe=n.n(be),he=n(12),fe=n.p+"static/media/man.77349eb5.png",me=n(0),ge=function(e){return Object(me.jsxs)("header",{className:pe.a.header,children:[Object(me.jsx)("div",{className:pe.a.container,children:Object(me.jsx)(he.b,{to:"/profile",children:Object(me.jsx)("img",{className:pe.a.logo,src:"https://img.icons8.com/ios-filled/100/ffffff/marriott-hotels.png",alt:""})})}),Object(me.jsx)("div",{children:e.isAuth?Object(me.jsxs)(me.Fragment,{children:[Object(me.jsxs)(he.b,{to:"/profile",children:["Account ",e.login," "]}),Object(me.jsx)("button",{onClick:e.logout,children:"Logout"}),Object(me.jsx)("img",{src:e.avatar?e.avatar:fe,alt:"avatar",width:"40",height:"40"})]}):Object(me.jsx)(he.b,{to:"/login",children:"Login"})})]})},Oe=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ue.a)(n,[{key:"render",value:function(){return Object(me.jsx)(ge,Object(o.a)({},this.props))}}]),n}(ie.a.Component),xe=Object(je.b)((function(e){return{userId:e.auth.userId,isAuth:e.auth.isAuth,login:e.auth.login,avatar:e.profilePage.profileInfo?e.profilePage.profileInfo.photos.small:null}}),{logout:B})(Oe),ve=n(127),_e=n.n(ve),Pe=function(){return Object(me.jsx)("footer",{className:_e.a.footer,children:"\xa9 2021 Company Name. All Rights Reserved."})},Ie=n(11),Ne=n(35),we=n.n(Ne),Ce=n(41),Se=n.n(Ce),ye=function(e){return Object(me.jsxs)("li",{className:Se.a.messageItem,children:[Object(me.jsx)("img",{className:Se.a.avatar,src:"https://source.unsplash.com/IMYvZjlX3jE/50x50",alt:""}),Object(me.jsxs)("div",{children:[Object(me.jsx)(he.b,{to:e.messages.id,activeClassName:Se.a.activeLink,className:Se.a.link,children:Object(me.jsx)("span",{className:"friendName",children:e.messages.name})}),Object(me.jsx)("span",{children:Object(me.jsx)("time",{datetime:e.messages.date,children:e.messages.date})}),Object(me.jsx)("div",{className:Se.a.message,children:e.messages.message})]})]})},Ue=n(42),ke=n.n(Ue),Te=function(e){var t="/dialogs/".concat(e.id);return Object(me.jsxs)("li",{className:ke.a.dialog,children:[Object(me.jsx)("img",{className:ke.a.avatar,src:"https://source.unsplash.com/IMYvZjlX3jE/50x50",alt:""}),Object(me.jsxs)("div",{children:[Object(me.jsx)(he.b,{to:t,activeClassName:ke.a.activeDialog,className:ke.a.friend,children:e.name})," ",Object(me.jsx)("br",{}),Object(me.jsx)("span",{className:ke.a.date,children:Object(me.jsx)("time",{dateTime:"2004-07-24T18:18",children:"4 hours ago"})})]})]})},Me=n(119),Ee=n(120),Ae=Object(Ee.a)({form:"addMessage"})((function(e){return Object(me.jsxs)("form",{className:we.a.form,onSubmit:e.handleSubmit,children:[Object(me.jsx)(Me.a,{className:we.a.input,name:"message",component:"textarea"}),Object(me.jsx)("button",{className:we.a.button,children:"Submit"})]})})),De=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(me.jsx)(Te,{name:e.name,id:e.id})})),n=e.dialogsPage.messages.map((function(e){return Object(me.jsx)(ye,{messages:e})}));return Object(me.jsxs)("div",{children:[Object(me.jsx)("h1",{children:"Dialogs"}),Object(me.jsxs)("div",{className:we.a.dialogs,children:[Object(me.jsx)("ul",{className:we.a.dialogItems,children:t}),Object(me.jsxs)("div",{children:[Object(me.jsx)("ul",{className:we.a.messages,children:n}),Object(me.jsx)(Ae,{onSubmit:e.onSubmitMessage})]})]})]})},Fe=function(e){return{isAuth:e.auth.isAuth}},Le=function(e){var t=function(t){Object(le.a)(s,t);var n=Object(de.a)(s);function s(){return Object(oe.a)(this,s),n.apply(this,arguments)}return Object(ue.a)(s,[{key:"render",value:function(){return this.props.isAuth||this.props.match.params.userID?Object(me.jsx)(e,Object(o.a)({},this.props)):Object(me.jsx)(Ie.a,{to:"/login"})}}]),s}(ie.a.Component);return Object(s.d)(Ie.f,Object(je.b)(Fe))(t)},ze=Object(s.d)(Le,Object(je.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSubmitMessage:function(t){var n,s=(n=t.message,{type:u,newMessageText:n});e(s)}}})))(De),Re=n(52),Ge=n.n(Re),He=n(68),Ze=n.n(He),Ye=function(e){var t=e.friends.map((function(e){return Object(me.jsx)("li",{children:Object(me.jsxs)(he.b,{to:e.id,activeClassName:Ze.a.activeLink,className:Ze.a.link,children:[Object(me.jsx)("img",{className:Ze.a.avatar,src:"https://source.unsplash.com/IMYvZjlX3jE/50x50",alt:""}),Object(me.jsx)("span",{className:"friendName",children:e.name})]})},e.id)}));return Object(me.jsx)("div",{children:Object(me.jsxs)("h3",{children:["TOP Friends",Object(me.jsx)("ul",{children:t})]})})},Je=function(e){var t=e.sidebar.links.map((function(e){return Object(me.jsx)("li",{children:Object(me.jsx)(he.b,{to:e.link,activeClassName:Ge.a.activeLink,className:Ge.a.link,children:e.text})},e.id)}));return Object(me.jsxs)("aside",{className:Ge.a.nav,children:[Object(me.jsx)("ul",{className:Ge.a.menu,children:t}),Object(me.jsx)(Ye,{friends:e.sidebar.friends})]})},Ve=Object(je.b)((function(e){return{sidebar:e.sidebar}}))(Je),We=n(43),Xe=n.n(We),Be=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=t-5;s<=t;s++)n.push(s);return Object(me.jsxs)("div",{children:[Object(me.jsx)("h1",{children:"Users"}),Object(me.jsx)("div",{children:n.map((function(t){return Object(me.jsx)("button",{onClick:function(){e.onPageChanged(t)},className:e.currentPage===t&&Xe.a.selectedPage,children:t})}))}),e.users.map((function(t){return Object(me.jsxs)("div",{className:Xe.a.user,children:[Object(me.jsxs)("div",{children:[Object(me.jsx)(he.b,{to:"profile/".concat(t.id),children:Object(me.jsx)("img",{className:Xe.a.ava,src:t.photos.small?t.photos.small:fe,alt:""})}),Object(me.jsx)("br",{}),Object(me.jsxs)("button",{disabled:e.followingInProgress.find((function(e){return e===t.id}))?"disabled":null,onClick:function(){e.toggleFollowUser(t.id,t.followed)},children:[t.followed?"Unfollow":"Follow"," ",t.id]})]}),Object(me.jsxs)("div",{className:Xe.a.info,children:[Object(me.jsxs)("div",{children:[Object(me.jsx)("span",{children:t.name}),Object(me.jsx)("p",{children:t.status})]}),Object(me.jsxs)("div",{className:Xe.a.location,children:[Object(me.jsx)("p",{children:"u.location.country"}),Object(me.jsx)("p",{children:"u.location.city"})]})]})]},t.id)}))]})},Ke=n.p+"static/media/loader.236e7f5c.svg",Qe=function(){return Object(me.jsx)("img",{src:Ke,alt:"preloader"})},qe=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(oe.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(ue.a)(n,[{key:"componentDidMount",value:function(e){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(me.jsxs)(me.Fragment,{children:[this.props.isFetching?Object(me.jsx)(Qe,{}):null,Object(me.jsx)(Be,{totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,toggleFollowUser:this.props.toggleFollowUser,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress})]})}}]),n}(ie.a.Component),$e=Object(s.d)(Le,Object(je.b)((function(e){return{users:e.usersPage.users,currentPage:e.usersPage.currentPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setCurrentPage:L,setTotalUsersCount:z,getUsers:function(e,t){return function(n){n(L(e)),n(R(!0)),f(e,t).then((function(e){var t;n((t=e.items,{type:T,users:t})),n(R(!1)),n(z(e.totalCount))}))}},toggleFollowUser:function(e,t){return function(n){n(G(e,!0)),m(e,t).then((function(t){0===t.resultCode&&(n(function(e){return{type:k,userId:e}}(e)),n(G(e,!1)))}))}}}))(qe),et=n(34),tt=n.n(et),nt=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(oe.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.target.value})},e}return Object(ue.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){this.props.status!==e.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return Object(me.jsx)("div",{className:tt.a.status,children:this.state.editMode?Object(me.jsx)("input",{onBlur:this.deactivateEditMode,autoFocus:!0,onChange:this.onStatusChange,type:"text",value:this.state.status}):Object(me.jsx)("span",{onDoubleClick:function(t){return e.activateEditMode(t)},children:this.props.status||"--status--"})})}}]),n}(ie.a.Component),st=nt,at=function(e){return e.profileInfo?Object(me.jsxs)("div",{children:[Object(me.jsx)("img",{width:"967",height:"157",className:tt.a.banner,src:"https://source.unsplash.com/DLwUVlzrP0Q/1600x250",alt:""}),Object(me.jsxs)("div",{className:tt.a.wrapper,children:[Object(me.jsx)("img",{className:tt.a.avatar,src:e.profileInfo.photos.small?e.profileInfo.photos.small:fe,alt:"avatar",width:"75",height:"75"}),Object(me.jsxs)("div",{className:tt.a.info,children:[Object(me.jsx)(st,{status:e.status,updateStatus:e.updateStatus}),Object(me.jsx)("hr",{}),Object(me.jsx)("h1",{children:e.profileInfo.fullName}),e.profileInfo.aboutMe&&e.profileInfo.aboutMe]})]})]}):Object(me.jsx)(Qe,{})},it=n(53),rt=n.n(it),ct=n(89),ot=n.n(ct),ut=function(e){return Object(me.jsxs)("li",{className:ot.a.post,children:[Object(me.jsx)("img",{className:ot.a.avatar,src:"https://source.unsplash.com/IMYvZjlX3jE/150x150",alt:""}),Object(me.jsxs)("div",{children:["Post #",e.id," ",Object(me.jsx)("br",{}),Object(me.jsx)("p",{children:e.message}),Object(me.jsxs)("div",{children:[Object(me.jsx)("button",{children:"Like"}),Object(me.jsxs)("span",{children:[" (",e.likesCount,")"]})]})]})]})},lt=Object(Ee.a)({form:"addMessage"})((function(e){return Object(me.jsxs)("form",{className:rt.a.form,onSubmit:e.handleSubmit,children:[Object(me.jsx)(Me.a,{component:"input",type:"textarea",name:"newPostText",className:rt.a.field,value:e.newPostText}),Object(me.jsx)("button",{className:rt.a.button,children:"Add Post"})]})})),dt=function(e){var t=e.posts.map((function(e){return Object(me.jsx)(ut,{message:e.message,id:e.id,likesCount:e.likesCount})}));return Object(me.jsxs)("div",{children:[Object(me.jsx)("h2",{children:"My Posts"}),Object(me.jsx)(lt,{onSubmit:function(t){e.addPost(t)}}),Object(me.jsx)("ul",{className:rt.a.posts,children:t})]})},jt=Object(je.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){var n;e((n=t.newPostText,{type:P,newPostText:n}))}}}))(dt),bt=function(e){return Object(me.jsxs)("div",{children:[Object(me.jsx)(at,Object(o.a)({},e)),Object(me.jsx)(jt,{})]})},pt=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ue.a)(n,[{key:"componentDidMount",value:function(e){var t=this.props.match.params.userID||this.props.authorizedUserId;t&&this.props.getUserProfile(t)}},{key:"render",value:function(){return Object(me.jsx)("div",{children:Object(me.jsx)(bt,Object(o.a)(Object(o.a)({},this.props),{},{userId:this.userId}))})}}]),n}(ie.a.Component),ht=Object(s.d)(Ie.f,Le,Object(je.b)((function(e){return{profileInfo:e.profilePage.profileInfo,status:e.profilePage.status,authorizedUserId:e.auth.authorizedUserId,isAuth:e.auth.isAuth}}),{getUserProfile:S,getUserStatus:y,updateStatus:function(e){return function(t){h(e).then((function(n){0===n.resultCode&&t(C(e))}))}}}))(pt),ft=n(54),mt=n.n(ft),gt=Object(Ee.a)({form:"login"})((function(e){return Object(me.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(me.jsx)(Me.a,{className:mt.a.input,name:"email",component:"input",placeholder:"email"}),Object(me.jsx)(Me.a,{className:mt.a.input,name:"password",type:"password",component:"input",placeholder:"Password"}),Object(me.jsxs)("label",{children:[Object(me.jsx)(Me.a,{type:"checkbox",name:"rememberMe",component:"input"}),"Remember me"]}),e.captchaUrl?Object(me.jsxs)(me.Fragment,{children:["Please, enter text from the picture ",Object(me.jsx)("br",{}),Object(me.jsx)("br",{}),Object(me.jsx)("img",{src:e.captchaUrl,alt:"Captcha picture"}),Object(me.jsx)("br",{}),Object(me.jsx)(Me.a,{className:mt.a.input,name:"captcha",component:"input",placeholder:"Captcha"})]}):"",Object(me.jsx)("button",{className:mt.a.button,children:"Login"})]})})),Ot=Object(je.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{sendLoginRequest:function(e,t,n){return function(s){x(e,t,n).then((function(e){if(0===e.data.resultCode)s(X());else if(10===e.data.resultCode)_().then((function(e){var t;s((t=e.data.url,{type:J,captchaUrl:t}))}));else Object(Z.a)("login",{email:"Email is wrong"})}))}},logout:B})((function(e){return e.isAuth?Object(me.jsx)(Ie.a,{to:"/profile"}):Object(me.jsxs)("div",{children:[Object(me.jsx)("h1",{children:"Hello"}),Object(me.jsx)(gt,{onSubmit:function(t){e.sendLoginRequest(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),xt=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ue.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(me.jsxs)("div",{className:"app-wrapper",children:[Object(me.jsx)(xe,{}),Object(me.jsxs)("main",{className:"content",children:[Object(me.jsx)(Ve,{}),Object(me.jsxs)("article",{children:[Object(me.jsx)(Ie.b,{path:"/dialogs",children:Object(me.jsx)(ze,{})}),Object(me.jsx)(Ie.b,{path:"/profile/:userID?",render:function(){return Object(me.jsx)(ht,{})}}),Object(me.jsx)(Ie.b,{path:"/users",render:function(){return Object(me.jsx)($e,{})}}),Object(me.jsx)(Ie.b,{path:"/login",render:function(){return Object(me.jsx)(Ot,{})}})]})]}),Object(me.jsx)(Pe,{})]}):Object(me.jsx)(Qe,{})}}]),n}(ae.Component),vt=Object(je.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(X());Promise.all([t]).then((function(){e({type:q})}))}}})(xt);ce.a.render(Object(me.jsxs)(ie.a.StrictMode,{children:[Object(me.jsx)(he.a,{children:Object(me.jsx)(je.a,{store:se,children:Object(me.jsx)(vt,{})})}),","]}),document.getElementById("root"))},34:function(e,t,n){e.exports={wrapper:"ProfileInfo_wrapper__3boPV",banner:"ProfileInfo_banner__1uWel",avatar:"ProfileInfo_avatar__3xuFq",info:"ProfileInfo_info__3dsdE",status:"ProfileInfo_status__2G3BZ"}},35:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogItems:"Dialogs_dialogItems__3flRc",form:"Dialogs_form__1EQXf",field:"Dialogs_field__1dE4S",button:"Dialogs_button__UnW0m"}},41:function(e,t,n){e.exports={messageItem:"Message_messageItem__1CLbj"}},42:function(e,t,n){e.exports={dialog:"DialogItem_dialog__3tDA2",activeDialog:"DialogItem_activeDialog__3ZAjq",friend:"DialogItem_friend__3Ei13",avatar:"DialogItem_avatar__12OzI",date:"DialogItem_date__NDFEp"}},43:function(e,t,n){e.exports={user:"Users_user__1dQYj",info:"Users_info__W1JxX",location:"Users_location__1IQvC",ava:"Users_ava__dN1VK",selectedPage:"Users_selectedPage__J63sh"}},52:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",link:"Navbar_link__TNvz9",activeLink:"Navbar_activeLink__3etBE",menu:"Navbar_menu__NKpxG"}},53:function(e,t,n){e.exports={posts:"MyPosts_posts__3tZ1c",form:"MyPosts_form__2b1nv",field:"MyPosts_field__1WcIv",button:"MyPosts_button__2WbpQ"}},54:function(e,t,n){e.exports={input:"Login_input__1zhXD",button:"Login_button__3J267"}},66:function(e,t,n){e.exports={header:"Header_header__1VCKf",container:"Header_container__1VC87",logo:"Header_logo__3_SJs"}},68:function(e,t,n){e.exports={nav:"Friend_nav__3U3Zd",link:"Friend_link__1aprK",activeLink:"Friend_activeLink__2VzEv",menu:"Friend_menu__2uhCf"}},89:function(e,t,n){e.exports={avatar:"Post_avatar__1wBwP",post:"Post_post__A0EJd"}}},[[288,1,2]]]);
//# sourceMappingURL=main.dfaa1113.chunk.js.map