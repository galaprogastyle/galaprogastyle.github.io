(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),s=a(10),i=a.n(s),o=a(55),u=a(56),d=a(60),p=a(57),m=a(61),f=a(1),h=(a(111),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(f.Panel,{id:t},r.a.createElement(f.PanelHeader,null,"Example"),n&&r.a.createElement(f.Group,{title:"User Data Fetched with VK Connect"},r.a.createElement(f.ListItem,{before:n.photo_200?r.a.createElement(f.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(f.Group,{title:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0433\u0440\u0443\u043f\u043f\u044b"},r.a.createElement(f.Div,null,r.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":""}))),r.a.createElement(f.Group,{title:"Navigation Example"},r.a.createElement(f.Div,null,r.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),E=a(58),b=a.n(E),k=(a(112),a(59)),g=a.n(k),v=a(32),P=a.n(v),w=Object(f.platform)(),A=function(e){return r.a.createElement(f.Panel,{id:e.id},r.a.createElement(f.PanelHeader,{left:r.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},w===f.IOS?r.a.createElement(g.a,null):r.a.createElement(P.a,null))},"Persik"),e.res?r.a.createElement("h1",null,e.res.request_id):null,e.res?e.res.response.map(function(e){return r.a.createElement("h1",null,e)}):null,r.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,res:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppCallAPIMethodResult":e.setState({res:t.detail.data});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(f.View,{activePanel:this.state.activePanel},r.a.createElement(h,{id:"home",res:this.state.res,fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(A,{id:"persik",res:this.state.res,go:this.go}))}}]),t}(r.a.Component);i.a.send("VKWebAppInit",{}),i.a.send("VKWebAppGetAuthToken",{app_id:7085389,scope:"groups"}),i.a.send("VKWebAppCallAPIMethod",{method:"groups.getMembers",request_id:"kek",params:{group_id:"60844824",filter:"managers",v:"5.101",access_token:"db45c37929cab6c121f95884fe32e81061577d97348af6fb37a2316f2f97819a0ab0cdaa12a3cd4f703a0"}}),c.a.render(r.a.createElement(_,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.395a8a05.chunk.js.map