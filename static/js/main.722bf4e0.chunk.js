(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var s=t(1),a=t.n(s),d=t(8),i=t.n(d),n=t(4),o=t(5),c=t(2),p=t(7),m=t(6),u=(t(13),t(0)),l=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],y=function(e){Object(p.a)(t,e);var r=Object(m.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=r.call(this,e)).state={displayText:"Drop a Funky Beat!"},s.displayText=s.displayText.bind(Object(c.a)(s)),s}return Object(o.a)(t,[{key:"displayText",value:function(e){this.setState({displayText:e})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsx)("h1",{children:"Drum Machine"}),Object(u.jsx)("div",{id:"display",children:this.state.displayText}),Object(u.jsx)("div",{className:"grid",id:"drumpads",children:l.map((function(r){return Object(u.jsx)(h,{keyTrigger:r.keyTrigger,id:r.id,keyCode:r.keyCode,url:r.url,displayText:e.displayText},r.id)}))})]})}}]),t}(a.a.Component),h=function(e){Object(p.a)(t,e);var r=Object(m.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=r.call(this,e)).componentDidMount=function(){document.addEventListener("keydown",s.handleKeyPress)},s.componentWillUnmount=function(){document.removeEventListener("keydown",s.handkleKeyPress)},s.handleKeyPress=function(e){e.keyCode===s.props.keyCode&&(s.playAudio(),s.props.displayText(s.props.id))},s.playAudio=function(){document.getElementById(s.props.keyTrigger).play(),s.props.displayText(s.props.id)},s.handleKeyPress=s.handleKeyPress.bind(Object(c.a)(s)),s}return Object(o.a)(t,[{key:"render",value:function(){return Object(u.jsxs)("button",{className:"drum-pad",id:this.props.id,onClick:this.playAudio,onKeyPress:this.handleKeyPress,children:[this.props.keyTrigger,Object(u.jsx)("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.url})]})}}]),t}(a.a.Component),k=y;i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.722bf4e0.chunk.js.map