(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),u=a(166),s=a(78),c=a(177),l=a(39),d=a(21),m=a(73),p=a(74),f=a.n(p);l.a.use(m.a).use(f.a).use(d.a).init({whitelist:["en-US","en"],nonExplicitWhitelist:!0,fallbackLng:["en"],backend:{loadPath:"resources/locale/{{lng}}/{{ns}}.json"},debug:!1,interpolation:{escapeValue:!1}});l.a;var h={overrides:{MuiAppBar:{colorDefault:{backgroundColor:"#fafafa",borderBottom:"1px rgba(0,0,0,0.2) solid"}},MuiInput:{underline:{"&:before":{borderBottom:"none"},"&:after":{borderBottom:"none"}}},MuiMenuItem:{root:{minHeight:"24px"}},MuiExpansionPanelDetails:{root:{display:"unset"}}}},b=a(43),y=a(44),v=a(75),g=a.n(v),E=Object.freeze({daily:365,weekly:52,fortnightly:26,monthly:12,quarterly:4,annually:1}),O=new(function(){function e(){Object(b.a)(this,e),this._data={},this._listeners=new Map}return Object(y.a)(e,[{key:"notify",value:function(e,t){this._listeners.forEach(function(a){a.type||a.handler(e,t)})}},{key:"notifyEvent",value:function(e,t){this._listeners.forEach(function(a){a.type===e&&a.handler(t)}),this.notify(e,t)}},{key:"subscribe",value:function(e,t){if(console.assert("function"===typeof t),"function"===typeof t){var a=g()();this._listeners.set(a,{handler:t,type:e});var n=this;return function(){n.unSubscribe(a)}}}},{key:"unSubscribe",value:function(e){this._listeners.delete(e)}},{key:"get",value:function(e){return e?this._data[e]:this._data}},{key:"set",value:function(e,t){this._data[e]=t,this.notifyEvent(e,t)}},{key:"resetBudget",value:function(){for(var e in this._data)if("budget"!==e&&"summary-period"!==e){var t=this.get(e);t.amount=0,t.period=E.monthly,this.set(e,t)}this.set("summary-period",E.annually)}}]),e}()),k=a(80),j=[{id:"Income",positive:!0,entries:[{id:"Your take - home pay"},{id:"Your partner's take-home pay"},{id:"Bonuses & overtime"},{id:"Income from savings & investments"},{id:"Centrelink benefits"},{id:"Family benefit payments"},{id:"Child support received"},{id:"Other"}]},{id:"Home & utilities",entries:[{id:"Mortgage & rent"},{id:"Body corporate fees"},{id:"Council rates"},{id:"Furniture & appliances"},{id:"Renovations & maintenance"},{id:"Electricity"},{id:"Gas"},{id:"Water"},{id:"Internet"},{id:"Pay TV"},{id:"Home phone"},{id:"Mobile"},{id:"Other"}]},{id:"Insurance & financial",entries:[{id:"Car insurance"},{id:"Home & contents insurance"},{id:"Personal & life insurance"},{id:"Health insurance"},{id:"Car loan"},{id:"Credit card interest"},{id:"Other loans"},{id:"Paying off debt"},{id:"Savings"},{id:"Investments & super contributions"},{id:"Charity donations"},{id:"Other"}]},{id:"Groceries",entries:[{id:"Supermarket"},{id:"Butcher"},{id:"Fruit & veg market"},{id:"Fish shop"},{id:"Deli & bakery"},{id:"Pet food"},{id:"Other"}]},{id:"Personal & medical",entries:[{id:"Cosmetics & toiletries"},{id:"Hair & beauty"},{id:"Medicines & pharmacy"},{id:"Glasses & eye care"},{id:"Dental"},{id:"Doctors & medical"},{id:"Hobbies"},{id:"Clothing & shoes"},{id:"Jewellery & accessories"},{id:"Computers & gadgets"},{id:"Sports & gym"},{id:"Education"},{id:"Pet care & vet"},{id:"Other"}]},{id:"Entertainment & eat - out",entries:[{id:"Coffee & tea"},{id:"Lunches - bought"},{id:"Take - away & snacks"},{id:"Cigarettes"},{id:"Drinks & alcohol"},{id:"Bars & clubs"},{id:"Restaurants"},{id:"Books"},{id:"Newspaper & magazines"},{id:"Movies & music"},{id:"Holidays"},{id:"Celebrations & gifts"},{id:"Other"}]},{id:"Transport & auto",entries:[{id:"Bus & train & ferry"},{id:"Petrol"},{id:"Road tolls & parking"},{id:"Rego & licence"},{id:"Repairs & maintenance"},{id:"Fines"},{id:"Airfares"},{id:"Other"}]},{id:"Children",entries:[{id:"Baby products"},{id:"Toys"},{id:"Babysitting"},{id:"Childcare"},{id:"Sports & activities"},{id:"School fees"},{id:"Excursions"},{id:"School uniforms"},{id:"Other school needs"},{id:"Child support payment"},{id:"Other"}]}];j.forEach(function(e){e.entries=e.entries.map(function(e){return Object(k.a)({},e,{amount:0,period:E.monthly})})}),l.a.on("initialized",function(){j.forEach(function(e){e.title=l.a.t(e.id),e.entries.map(function(t){var a=t.id;O.get(e.id+a).title=l.a.t(a)})})});var C=j;O.set("budget",C),C.forEach(function(e){e.entries.forEach(function(t){var a=e.id+t.id,n=window.localStorage.getItem(a);n&&(n=JSON.parse(n),t.amount=n.amount,t.period=n.period),O.set(a,t),O.subscribe(a,function(e){return window.localStorage.setItem(a,JSON.stringify(e))})})});var S=window.localStorage.getItem("summary-period")||E.annually;S=parseInt(S,10),O.set("summary-period",S),O.subscribe("summary-period",function(e){return window.localStorage.setItem("summary-period",e)});var w=a(27),B=a(171),I=a(160),x=a(162),M=a(163),N=a(164),P=a(176),F=a(175),H=a(161),_=a(165),D=a(172),R=a(167),J=a(173),z=function(e){var t=e.period,a=e.onChange,n=e.className,r=Object(d.b)().t;return i.a.createElement(R.a,{className:n,value:t,onChange:function(e){return a(e.target.value)}},i.a.createElement(J.a,{value:E.daily},r("period.daily")),i.a.createElement(J.a,{value:E.weekly},r("period.weekly")),i.a.createElement(J.a,{value:E.fortnightly},r("period.fortnightly")),i.a.createElement(J.a,{value:E.monthly},r("period.monthly")),i.a.createElement(J.a,{value:E.quarterly},r("period.quarterly")),i.a.createElement(J.a,{value:E.annually},r("period.annually")))};z.defaultProps={onChange:function(){}};var T=z,W=(a(114),a(158)),q=a(159),A=a(169),G=(a(115),function(e){var t=e.id,a=O.get(t),r=Object(n.useState)(a.amount),o=Object(w.a)(r,2),u=o[0],s=o[1],c=Object(n.useState)(a.period),l=Object(w.a)(c,2),d=l[0],m=l[1];Object(n.useEffect)(function(){return O.subscribe(t,function(e){s(e.amount),m(e.period)})});return i.a.createElement(W.a,null,i.a.createElement("div",{className:"budget-entry-container"},i.a.createElement(q.a,{container:!0,spacing:4},i.a.createElement(q.a,{item:!0,xs:12,md:6},a.title),i.a.createElement(q.a,{item:!0,xs:6,md:3},i.a.createElement("div",{className:"budget-entry-input"},i.a.createElement(A.a,{className:"budget-entry-entry",value:u,onChange:function(e){var n=e.target.value;void 0===(n=parseInt(n.toString(),10))||isNaN(n)||(s(n),a.amount=n,O.set(t,a))}}))),i.a.createElement(q.a,{item:!0,xs:6,md:3},i.a.createElement(T,{className:"budget-entry-period budget-entry-input",period:d,onChange:function(e){m(e),a.period=e,O.set(t,a)}})))))}),U=function(e){var t=e.id,a=e.title,r=e.entries,o=e.positive,u=e.appPeriod,s=function(){var e=r.map(function(e){return e.amount*e.period});return e=e.reduce(function(e,t){return e+t})},c=Object(n.useState)(s()),l=Object(w.a)(c,2),m=l[0],p=l[1];Object(n.useEffect)(function(){var e=r.map(function(e){return O.subscribe(t+e.id,function(e){p(s())})});return function(){e.forEach(function(e){return e()})}});var f=Object(d.b)().t;return i.a.createElement(P.a,null,i.a.createElement(F.a,{expandIcon:i.a.createElement(D.a,null)},i.a.createElement(I.a,{className:"category-group-title"},a),i.a.createElement(I.a,{className:"category-group-accumulated"},(o?"":"-")+f("currencySymbol"),Math.round(m/u))),i.a.createElement(H.a,null,r.map(function(e){return i.a.createElement(G,{id:t+e.id,key:t+e.id})})))};U.defaultProps={positive:!1};var L=U,V=a(79),Y=a(77),K=a(81),Q=a(56),X=a.n(Q),Z=a(170),$=["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(54, 159, 64, 0.7)"],ee=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(V.a)(this,Object(Y.a)(t).call(this,e))).state={budget:a.props.budget,update:0},a}return Object(K.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unSubStore=O.subscribe(null,function(){return e.setState({update:e.state.update+1})});var t=this.state.budget.filter(function(e){return!0!==e.positive}).map(function(e){return e.title});this.canvas=document.getElementById("chartCanvas"),X.a.defaults.global.defaultFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",X.a.defaults.global.defaultFontSize=16,this.chart=new X.a(this.canvas,{type:"pie",data:{labels:t},options:{title:{display:!0,position:"top"},rotation:-.7*Math.PI,legend:{position:"left"}}}),this.updateCanvas()}},{key:"componentWillUnmount",value:function(){this.unSubStore()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this.state.budget.filter(function(e){return!0===e.positive}),t=this.state.budget.filter(function(e){return!0!==e.positive}),a=e.map(function(e){return e.entries.reduce(function(e,t){return e+t.amount*t.period},0)});a=a.reduce(function(e,t){return e+t});var n=t.map(function(e){return e.entries.reduce(function(e,t){return e+t.amount*t.period},0)}),i=n.reduce(function(e,t){return e+t});this.chart.data.datasets=[{data:n,backgroundColor:t.map(function(e,t){return $[t%$.length]}),borderWidth:[1,1]}],this.chart.options.legend.display=Object(Z.c)("sm",this.props.width);var r=a-i;r/=this.props.period,r=Math.floor(r),this.chart.options.title.text=r<0?this.props.t("negativeBalance",{balance:r}):this.props.t("positiveBalance",{balance:r}),this.chart.update()}},{key:"render",value:function(){return i.a.createElement("canvas",{id:"chartCanvas",width:900,height:450})}}]),t}(i.a.Component),te=Object(d.c)()(Object(Z.a)()(ee)),ae=(a(118),function(){var e=Object(d.b)().t,t=Object(n.useState)(O.get("summary-period")),a=Object(w.a)(t,2),r=a[0],o=a[1];return O.subscribe("summary-period",function(e){return o(e)}),i.a.createElement(i.a.Fragment,null,i.a.createElement(B.a,{smDown:!0},i.a.createElement(I.a,{variant:"subtitle1",gutterBottom:!0},e("app-title"))),i.a.createElement("div",{className:"header-text"},i.a.createElement(I.a,null,e("view-as"),"\xa0",i.a.createElement(T,{period:r,onChange:function(e){return O.set("summary-period",e)}}))))});function ne(e){var t=e.children,a=Object(x.a)({disableHysteresis:!0,threshold:0});return i.a.cloneElement(t,{elevation:a?4:0})}var ie=function(e){var t=Object(d.b)().t;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ne,e,i.a.createElement(M.a,{color:"default"},i.a.createElement(N.a,null,i.a.createElement(I.a,{variant:"h6",color:"inherit"},t("budget-planner"))))),i.a.createElement(N.a,null))},re=function(){var e=Object(d.b)().t,t=Object(n.useState)(O.get("budget")),a=Object(w.a)(t,1)[0],r=Object(n.useState)(O.get("summary-period")),o=Object(w.a)(r,2),u=o[0],s=o[1];O.subscribe("summary-period",function(e){return s(e)});var c=a&&a.map(function(e){return i.a.createElement(L,{id:e.id,title:e.title,entries:e.entries,positive:e.positive,key:e.id,appPeriod:u})});return i.a.createElement(i.a.Fragment,null,i.a.createElement(ie,null),i.a.createElement(ae,null),c,i.a.createElement(P.a,{defaultExpanded:!0},i.a.createElement(F.a,{expandIcon:i.a.createElement(D.a,null)},i.a.createElement(I.a,null,e("summary"))),i.a.createElement(H.a,null,i.a.createElement("div",{width:900,height:450},i.a.createElement(te,{budget:a,period:u})),i.a.createElement("hr",null),i.a.createElement("p",null,e("reset-header"),"\xa0",i.a.createElement(_.a,{onClick:function(){return O.resetBudget()},variant:"contained"},e("reset"))))))},oe=i.a.createElement(u.a,{theme:Object(s.a)(h)},i.a.createElement(c.a,null),i.a.createElement(i.a.Suspense,{fallback:i.a.createElement("h1",null,"loading...")},i.a.createElement(re,null)));o.a.render(oe,document.getElementById("root"))},85:function(e,t,a){e.exports=a(119)}},[[85,1,2]]]);
//# sourceMappingURL=main.58dadb83.chunk.js.map