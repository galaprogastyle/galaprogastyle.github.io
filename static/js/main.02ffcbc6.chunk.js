(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),i=a(17),o=a.n(i),s=a(55),u=a(56),d=a(60),m=a(57),p=a(61),f=a(1),h=(a(111),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(f.Panel,{id:t},c.a.createElement(f.PanelHeader,null,"Alexeev Inc."),n&&c.a.createElement(f.Group,{title:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"},c.a.createElement(f.ListItem,{before:n.photo_200?c.a.createElement(f.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(f.Group,{title:"\u0427\u0442\u043e \u0442\u0430\u043c?"},c.a.createElement(f.Div,null,c.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0423\u0437\u043d\u0430\u0442\u044c!"))))}),E=a(58),b=a.n(E),v=(a(112),a(59)),k=a.n(v),g=a(32),P=a.n(g),w=Object(f.platform)(),y=function(e){return c.a.createElement(f.Panel,{id:e.id},c.a.createElement(f.PanelHeader,{left:c.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},w===f.IOS?c.a.createElement(k.a,null):c.a.createElement(P.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(f.View,{activePanel:this.state.activePanel},c.a.createElement(h,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(y,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(c.a.createElement(I,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.b0b7f675.png"},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.02ffcbc6.chunk.js.map