(this.webpackJsonptwitchclonereact=this.webpackJsonptwitchclonereact||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/IconeTwitch.bea3cace.svg"},30:function(e,t,a){e.exports=a.p+"static/media/Search.862e4fe3.svg"},31:function(e,t,a){e.exports=a.p+"static/media/MenuIco.29c57c4d.svg"},32:function(e,t,a){e.exports=a.p+"static/media/Croix.a55a5aa3.svg"},36:function(e,t,a){e.exports=a(70)},41:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),i=(a(41),a(2)),l=a(29),m=a.n(l),u=a(30),o=a.n(u),p=a(31),d=a.n(p),h=a(32),v=a.n(h),f=a(1);var g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],p=l[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),E=g[0],N=g[1];Object(n.useEffect)((function(){var e=window.matchMedia("(max-width: 900px)");return e.addListener(b),b(e),function(){e.removeListener(b)}}));var b=function(e){e.matches?p(!0):p(!1)},x=function(){!0===a&&c(!a)};return r.a.createElement("div",null,r.a.createElement("nav",{className:"headerTop"},(a||!u)&&r.a.createElement("ul",{className:"listeMenu"},r.a.createElement("li",{onClick:x,className:"liensNav"},r.a.createElement(f.b,{className:"lien",to:"/"},r.a.createElement("img",{src:m.a,alt:"logo twitch",className:"logo"}))),r.a.createElement("li",{onClick:x,className:"liensNav"},r.a.createElement(f.b,{className:"lien",to:"/"},"Top Games")),r.a.createElement("li",{onClick:x,className:"liensNav"},r.a.createElement(f.b,{className:"lien",to:"/top-streams"},"Top Streams")),r.a.createElement("li",{className:"liensNav"},r.a.createElement("form",{className:"formSubmit",onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{required:!0,value:E,onChange:function(e){return function(e){N(e.target.value)}(e)},type:"text",className:"inputRecherche"}),r.a.createElement(f.b,{className:"lien",to:{pathname:"/resultats/".concat(E)}},r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:o.a,alt:"icone loupe",className:"logoLoupe"}))))))),r.a.createElement("div",{className:"menuResBtn"},r.a.createElement("img",{onClick:function(){c(!a)},src:a?v.a:d.a,alt:"icone menu responsive",className:"menuIco"})))},E=a(4),N=a.n(E),b=a(7),x=a(35),w=a.n(x).a.create({headers:{"Client-ID":"w2a6cwsv20row1slmr7kslio7oxg1i",Authorization:"Bearer venc4u8ggf51422czvk8sq43d5m9jq"}});var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(N.a.mark((function e(){var t,a,n,r,s,i,l,m,u,o,p,d,h;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("https://api.twitch.tv/helix/streams");case 2:return t=e.sent,a=t.data.data,n=a.map((function(e){return e.game_id})),r=a.map((function(e){return e.user_id})),"https://api.twitch.tv/helix/games?","https://api.twitch.tv/helix/users?",s="",i="",n.map((function(e){return s+="id=".concat(e,"&")})),r.map((function(e){return i+="id=".concat(e,"&")})),l="https://api.twitch.tv/helix/games?"+s,m="https://api.twitch.tv/helix/users?"+i,e.next=16,w.get(l);case 16:return u=e.sent,e.next=19,w.get(m);case 19:o=e.sent,p=u.data.data,d=o.data.data,h=a.map((function(e){return e.gameName="",e.truePic="",e.login="",p.forEach((function(t){d.forEach((function(a){e.user_id===a.id&&e.game_id===t.id&&(e.truePic=a.profile_image_url,e.gameName=t.name,e.login=a.login)}))})),e})),c(h.slice(0,6));case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(a),r.a.createElement("div",{className:"sidebar"},r.a.createElement("h2",{className:"titreSidebar"},"Cha\xeenes recommand\xe9es"),r.a.createElement("ul",{className:"listeStream"},a.map((function(e,t){return r.a.createElement(f.b,{key:t,className:"lien",to:{pathname:"/live/".concat(e.login)}},r.a.createElement("li",{key:t,className:"containerFlexSidebar"},r.a.createElement("img",{src:e.truePic,alt:"logo user",className:"profilePicRonde"}),r.a.createElement("div",{className:"streamUser"},e.user_name),r.a.createElement("div",{className:"viewerRight"},r.a.createElement("div",{className:"pointRouge"}),r.a.createElement("div",null,e.viewer_count)),r.a.createElement("div",{className:"gameNameSidebar"},e.gameName)))}))))};var _=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(N.a.mark((function e(){var t,a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("https://api.twitch.tv/helix/games/top");case 2:t=e.sent,a=t.data.data,n=a.map((function(e){var t=e.box_art_url.replace("{width}","250").replace("{height}","300");return e.box_art_url=t,e})),c(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"titreGames"},"Jeux les plus populaires"),r.a.createElement("div",{className:"flexAccueil"},a.map((function(e,t){return r.a.createElement("div",{key:t,className:"carteGames"},r.a.createElement("img",{src:e.box_art_url,alt:"jeu profile pic",className:"imgCarte"}),r.a.createElement("div",{className:"cardBodyGames"},r.a.createElement("h5",{className:"titreCartesGames"},e.name),r.a.createElement(f.b,{className:"lien",to:{pathname:"game/"+e.name,state:{gameID:e.id}}},r.a.createElement("div",{className:"btnCarte"},"Regarder ",e.name))))}))))};var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(N.a.mark((function e(){var t,a,n,r,s,i,l,m,u,o,p,d,h;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("https://api.twitch.tv/helix/streams");case 2:return t=e.sent,a=t.data.data,console.log(a),n=a.map((function(e){return e.game_id})),r=a.map((function(e){return e.user_id})),"https://api.twitch.tv/helix/games?","https://api.twitch.tv/helix/users?",s="",i="",n.map((function(e){return s+="id=".concat(e,"&")})),r.map((function(e){return i+="id=".concat(e,"&")})),l="https://api.twitch.tv/helix/games?"+s,m="https://api.twitch.tv/helix/users?"+i,e.next=17,w.get(l);case 17:return u=e.sent,e.next=20,w.get(m);case 20:o=e.sent,p=u.data.data,d=o.data.data,h=a.map((function(e){e.gameName="",e.login="",p.forEach((function(t){d.forEach((function(a){e.user_id===a.id&&e.game_id===t.id&&(e.truePic=a.profile_image_url,e.gameName=t.name,e.login=a.login)}))}));var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e})),c(h);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"titreGames"},"Stream les plus populaires"),r.a.createElement("div",{className:"flexAccueil"},a.map((function(e,t){return r.a.createElement("div",{key:t,className:"carteStream"},r.a.createElement("img",{src:e.thumbnail_url,className:"imgCarte",alt:"jeu"}),r.a.createElement("div",{className:"cardBodyStream"},r.a.createElement("h5",{className:"titreCartesStream"},e.user_name),r.a.createElement("p",{className:"txtStream"},"Jeu : ",e.gameName),r.a.createElement("p",{className:"txtStream viewers"},"Viewers : ",e.viewer_count),r.a.createElement(f.b,{className:"lien",to:{pathname:"/live/".concat(e.login)}},r.a.createElement("div",{className:"btnCarte"},"Regarder ",e.user_name))))}))))},S=a(10),k=a(17),y=a.n(k);var C=function(){var e=Object(S.g)().slug;console.log(e);var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),u=m[0],o=m[1];return Object(n.useEffect)((function(){(function(){var t=Object(b.a)(N.a.mark((function t(){var a,n,r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("https://api.twitch.tv/helix/streams?user_login=".concat(e));case 2:if(0!==(a=t.sent).data.data.length){t.next=7;break}s(!1),t.next=14;break;case 7:return n=a.data.data.map((function(e){return e.game_id})),t.next=10,w.get("https://api.twitch.tv/helix/games?id=".concat(n));case 10:r=t.sent,c=r.data.data.map((function(e){return e.name})),o(c),s(a.data.data[0]);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),c?r.a.createElement("div",{className:"containerDecale"},r.a.createElement(y.a,{height:"754",width:"100%",channel:e}),r.a.createElement("div",{className:"contInfo"},r.a.createElement("div",{className:"titreStream"},c.title),r.a.createElement("div",{className:"viewer"},"Viewers : ",c.viewer_count),r.a.createElement("div",{className:"infogame"},"Streamer : ",c.user_name,", \xa0 Langue : ",c.language),r.a.createElement("div",{className:"nomJeu"},"Jeu : ",u))):r.a.createElement("div",{className:"containerDecale"},r.a.createElement(y.a,{height:"754",width:"100%",channel:e}),r.a.createElement("div",{className:"contInfo"},r.a.createElement("div",{className:"titreStream"},"Le Streamer est offline ! ")))};var R=function(){var e=Object(S.g)().slug,t=Object(S.f)();console.log(t);var a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],m=Object(n.useState)(0),u=Object(i.a)(m,2),o=u[0],p=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(N.a.mark((function e(){var a,n,r,c,s,i,m,u,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("https://api.twitch.tv/helix/streams?game_id=".concat(t.state.gameID));case 2:return a=e.sent,n=a.data.data,r=n.map((function(e){var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e})),c=r.reduce((function(e,t){return e+t.viewer_count}),0),s=n.map((function(e){return e.user_id})),"https://api.twitch.tv/helix/users?",i="",s.map((function(e){return i+="id=".concat(e,"&")})),m="https://api.twitch.tv/helix/users?"+i,e.next=13,w.get(m);case 13:u=e.sent,o=u.data.data,r=n.map((function(e){return e.login="",o.forEach((function(t){e.user_id===t.id&&(e.login=t.login)})),e})),p(c),l(r);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.state.gameID]),console.log(o),console.log(s),r.a.createElement("div",null,r.a.createElement("h1",{className:"titreGamesStreams"},"Streams : ",e),r.a.createElement("h3",{className:"sousTitreGameStreams"},r.a.createElement("strong",{className:"textColored"},o)," personnes regardent ",e),r.a.createElement("div",{className:"flexAccueil"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"carteGameStreams"},r.a.createElement("img",{src:e.thumbnail_url,alt:"jeu carte img",className:"imgCarte"}),r.a.createElement("div",{className:"cardBodyGameStreams"},r.a.createElement("h5",{className:"titreCartesStream"},e.user_name),r.a.createElement("p",{className:"txtStream"},"Nombre de viewers : ",e.viewer_count),r.a.createElement(f.b,{className:"lien",to:{pathname:"/live/".concat(e.login)}},r.a.createElement("div",{className:"btnCarte"},"Regarder ",e.user_name))))}))))};var G=function(){return r.a.createElement("div",{className:"containerDecaleResultats"},r.a.createElement("h4",null,"R\xe9sultats de recherche: Pas de r\xe9sultats, ",r.a.createElement("br",null)," V\xe9rifiez l'orthographe de votre saisie, ou ce streamer n'\xe9xiste pas."))};var I=function(){var e=Object(S.g)().slug,t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),u=m[0],o=m[1],p=e.replace(/ /g,"");return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("https://api.twitch.tv/helix/users?login=".concat(p));case 2:t=e.sent,console.log(t),0===t.data.data.length?s(!1):o(t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),c?r.a.createElement("div",null,r.a.createElement("div",{className:"containerDecaleResultats"},r.a.createElement("h4",null,"R\xe9sultats de recherche : "),u.map((function(e,t){return r.a.createElement("div",{key:t,className:"carteResultats"},r.a.createElement("img",{src:e.profile_image_url,alt:"resultat profile",className:"imgCarte"}),r.a.createElement("div",{className:"cardBodyResults"},r.a.createElement("h5",{className:"titreCartesStream"},e.display_name),r.a.createElement("div",{className:"txtResult"},e.description),r.a.createElement(f.b,{className:"lien",to:{pathname:"/live/".concat(e.login)}},r.a.createElement("div",{className:"btnCarte btnResult"},"Regarder ",e.display_name))))})))):r.a.createElement(G,null)};var D=function(){return r.a.createElement(f.a,{forceRefresh:!0},r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:_}),r.a.createElement(S.a,{exact:!0,path:"/top-streams",component:O}),r.a.createElement(S.a,{exact:!0,path:"/live/:slug",component:C}),r.a.createElement(S.a,{exact:!0,path:"/game/:slug",component:R}),r.a.createElement(S.a,{exact:!0,path:"/resultats/:slug",component:I}),r.a.createElement(S.a,{exact:!0,path:"/resultats/",component:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c26873ad.chunk.js.map