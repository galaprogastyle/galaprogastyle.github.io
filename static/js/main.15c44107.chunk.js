(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),i=a(18),o=a.n(i),s=a(56),u=a(57),m=a(60),d=a(58),p=a(61),f=a(1),E=(a(111),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(f.Panel,{id:t},l.a.createElement(f.PanelHeader,null,"Alexeev Inc."),n&&l.a.createElement(f.Group,{title:"\u041f\u0440\u0438\u0432\u0435\u0442,"},l.a.createElement(f.ListItem,{before:n.photo_200?l.a.createElement(f.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(f.Group,{title:"\u0427\u0442\u043e \u0442\u0430\u043c?"},l.a.createElement(f.Div,null,l.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0423\u0437\u043d\u0430\u0442\u044c!")),l.a.createElement(f.Div,null,l.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"testing"},"\u0423\u0437\u043d\u0430\u0442\u044c!")),l.a.createElement(f.Div,null,l.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"home"},"\u0423\u0437\u043d\u0430\u0442\u044c!"))))}),h=a(59),b=a.n(h),v=(a(112),a(23)),g=a.n(v),k=a(17),P=a.n(k),w=Object(f.platform)(),y=function(e){return l.a.createElement(f.Panel,{id:e.id},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},w===f.IOS?l.a.createElement(g.a,null):l.a.createElement(P.a,null))},"\u041b\u043e\u0433\u043e\u0442\u0438\u043f\u0447\u0438\u043a!"),l.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},O=(Object(f.platform)(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(f.View,{activePanel:this.state.activePanel},l.a.createElement(E,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),l.a.createElement(y,{id:"persik",go:this.go}),l.a.createElement(y,{id:"persik",go:this.go}))}}]),t}(l.a.Component));o.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(O,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a.p+"static/media/persik.b0b7f675.png"},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.15c44107.chunk.js.map