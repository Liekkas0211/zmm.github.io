(this["webpackJsonpfirst-demo"]=this["webpackJsonpfirst-demo"]||[]).push([[0],{121:function(e,t,a){e.exports={header:"Header_header__gaDtN",label1:"Header_label1__1s2cL",label2:"Header_label2__y612P"}},193:function(e,t,a){e.exports={Burger:"Burger_Burger__v8L5n"}},210:function(e,t,a){e.exports=a(408)},215:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(5),o=a.n(l),c=(a(215),a(26)),i=a(27),s=a(30),u=a(28),d=a(31),m=a(60),p=a(207),h=a(50),E=a.n(h),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=n.a.createElement("div",{className:E.a.BreadBottom}," ");break;case"bread-top":e=n.a.createElement("div",{className:E.a.BreadTop},n.a.createElement("div",{className:E.a.Seeds1}),n.a.createElement("div",{className:E.a.Seeds2}),n.a.createElement("div",{className:E.a.Seeds2}));break;case"meat":e=n.a.createElement("div",{className:E.a.Meat});break;case"cheese":e=n.a.createElement("div",{className:E.a.Cheese});break;case"bacon":e=n.a.createElement("div",{className:E.a.Bacon});break;case"salad":e=n.a.createElement("div",{className:E.a.Salad});break;default:e=null}return e}}]),t}(r.Component),f=a(193),g=a.n(f),_=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(p.a)(Array(e.ingredients[t])).map((function(e,a){return n.a.createElement(b,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=n.a.createElement("p",null,"Please add some ingredients\ud83d\udc47")),n.a.createElement("div",{className:g.a.Burger},n.a.createElement(b,{type:"bread-top"}),t,n.a.createElement(b,{type:"bread-bottom"}))},v=a(41),O=a.n(v),y=a(95),R=a.n(y),N=function(e){return n.a.createElement("div",{className:R.a.BuildControl},n.a.createElement("div",{className:R.a.Label},e.label),n.a.createElement("button",{className:R.a.Less,onClick:e.remove,disabled:e.disabled},"Less"),n.a.createElement("button",{className:R.a.More,onClick:e.add},"More"))},S=a(56),C=[{label:"\ud83e\udd57Salad  ",type:"salad"},{label:"\ud83e\udd53Bacon  ",type:"bacon"},{label:"\ud83e\uddc0Cheese ",type:"cheese"},{label:"\ud83e\udd69Meat   ",type:"meat"}],B=Object(S.b)((function(e){return{igrds:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,sum:e.burgerBuilder.sumprice}}),(function(e){return{small:function(){return e({type:"SMALL"})},meat:function(){return e({type:"MEAT"})},big:function(){return e({type:"BIG"})}}}))((function(e){return n.a.createElement("div",{className:O.a.BuildControls},n.a.createElement("div",{className:O.a.lessmore},n.a.createElement("h1",null,"Current Price: ",n.a.createElement("strong",null,"\ud83d\udcb0",e.totalPrice.toFixed(2))," "),C.map((function(t){return n.a.createElement(N,{key:t.label,label:t.label,add:function(){return e.IngredientAdded(t.type)},remove:function(){return e.RemoveIngredient(t.type)},disabled:e.disabled[t.type]})})),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("button",{onClick:e.click,className:O.a.OrderButton1,disabled:!e.prsable},"ORDER NOW"))),n.a.createElement("div",{className:O.a.auto},n.a.createElement("h2",null," ",n.a.createElement("strong",null,"Fear of choice? Try ordering with one click \ud83d\udc47")),n.a.createElement("p",{className:O.a.Label}," Small \ud83e\udd571 \ud83e\udd691 \ud83e\uddc01 \ud83e\udd531   \xa0",n.a.createElement("a",{onClick:e.small,className:O.a.OrderButton}," Small")),n.a.createElement("br",null),n.a.createElement("p",{className:O.a.Label}," Double meat \ud83e\udd571 \ud83e\udd692 \ud83e\uddc01 \ud83e\udd531 \xa0",n.a.createElement("a",{onClick:e.meat,className:O.a.OrderButton}," Double Meat")),n.a.createElement("br",null),n.a.createElement("p",{className:O.a.Label}," BigDouble \ud83e\udd572 \ud83e\udd692 \ud83e\uddc02 \ud83e\udd532 \xa0",n.a.createElement("a",{onClick:e.big,className:O.a.OrderButton},"Burger king")),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("a",{href:"javascript:location.reload();",className:O.a.OrderButton}," Restart"))))})),D=a(61),j=a.n(D),k=a(68),w=a(59),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(){a.setState({visible:!1}),a.props.change()},a.handleConfirm=function(){a.setState({visible:!1}),a.props.change()},a.handleMask=function(){a.setState({visible:!1})},a.state={visible:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({visible:this.props.visible})}},{key:"componentWillReceiveProps",value:function(e){this.setState({visible:e.visible})}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.children,l=this.state.visible;return(void 0===l||l)&&n.a.createElement(k.a,null,n.a.createElement("div",{className:j.a.wrapper},n.a.createElement("div",{className:j.a.modal},n.a.createElement("div",{className:j.a.title},a),n.a.createElement("div",{className:j.a.content},r),n.a.createElement("div",{className:j.a.operator},n.a.createElement("button",{className:j.a.close,onClick:this.handleClose},"\u53d6\u6d88"),n.a.createElement("button",{className:j.a.confirm,onClick:function(){e.props.handleConfirm(),e.props.history.push("/burger/info")}}," \u786e\u5b9a")))))}}]),t}(n.a.Component),M=Object(w.e)(A);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={visible:!1},a.changeModal=function(){a.setState({visible:!1})},a.showModal=function(){a.setState({visible:!0})},a.handleConfirm=function(){return a.setState({visible:!1}),a.changeModal(),n.a.createElement(_,null)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"isBurgerPurchasable",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=null,t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.props.igrds);for(var a in t)t[a]=t[a]<=0;this.props.igrds&&(e=n.a.createElement(r.Fragment,null,n.a.createElement(_,{ingredients:this.props.igrds}),n.a.createElement(B,{totalPrice:this.props.price,IngredientAdded:this.props.onIngredientAdded,RemoveIngredient:this.props.onIngredientRemoved,disabled:t,prsable:this.isBurgerPurchasable(this.props.igrds),click:this.showModal})));var l=null;return this.state.visible&&(l=n.a.createElement(M,{visible:this.state.visible,title:"your order \u2714",change:this.changeModal,handleConfirm:this.handleConfirm},n.a.createElement("ul",null,"Current Price: \ud83d\udcb0",this.props.price.toFixed(2)," "),n.a.createElement("ul",null,"\ud83e\udd57salad:",this.props.igrds.salad," price:\xa3",this.props.sum.salad.toFixed(2)),n.a.createElement("ul",null,"\ud83e\udd53bacon:",this.props.igrds.bacon," price:\xa3",this.props.sum.bacon.toFixed(2)),n.a.createElement("ul",null,"\ud83e\uddc0cheese:",this.props.igrds.cheese," price:\xa3",this.props.sum.cheese.toFixed(2)," "),n.a.createElement("ul",null,"\ud83e\udd69meat:",this.props.igrds.meat," price:\xa3",this.props.sum.meat.toFixed(2)))),console.log(this.props.igrds),n.a.createElement(r.Fragment,null,e,",",l)}}]),t}(r.Component),x=Object(S.b)((function(e){return console.log(e.burgerBuilder.ingredients),{igrds:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,sum:e.burgerBuilder.sumprice}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})}}}))(I),L=a(121),T=a.n(L),U=a(413),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={visible:!1},a.showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this;return e=n.a.createElement("div",{style:{margin:"left"}},n.a.createElement("a",{type:"primary",onClick:this.showDrawer},"More\ud83c\udf54"),n.a.createElement(U.a,{title:"HUNBURGER OF ZMM",placement:"left",closable:!1,onClose:this.onClose,visible:this.state.visible},n.a.createElement("a",null,"Store address \ud83d\ude97"),n.a.createElement("p",null),n.a.createElement("a",{onClick:function(){t.props.history.push("/burger/order"),t.props.history.go()}}," Orders \ud83c\udf56"),n.a.createElement("p",null),n.a.createElement("a",null,"About \ud83d\udc69"))),n.a.createElement(k.a,null,n.a.createElement("div",{className:T.a.header},e,n.a.createElement("a",{className:T.a.label1,onClick:function(){t.props.history.push("/burger/"),t.props.history.go()}},"Burger Builders \ud83d\ude01 "),n.a.createElement("a",{className:T.a.label2,onClick:function(){t.props.history.push("/burger/order"),t.props.history.go()}},"Orders \ud83c\udf08")))}}]),t}(r.Component),H=Object(w.e)(F),W=a(412),J=a(93),V=a(411),q=a(410),G=a(63),K=a.n(G),X=a(117),Y=a.n(X),z=W.a.TextArea,$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={USER_ADDRESS:"",ORDER_REMARK:"",USER_NAME:"",USER_PHONE:"",confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||console.log("Received values of form: ",t)}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,r){var n=a.props.form;t&&t!==n.getFieldValue("password")?r("Two passwords that you enter is inconsistent!"):r()},a.validateToNextPassword=function(e,t,r){var n=a.props.form;t&&a.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),r()},a.handleWebsiteChange=function(e){var t;t=e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[],a.setState({autoCompleteResult:t})},a.submit=function(){console.log(a.state);var e={MCH_ID:"41708307",ORDER_BACON:a.props.igrds.bacon,ORDER_CHEESE:a.props.igrds.cheese,ORDER_MEAT:a.props.igrds.meat,ORDER_REMARK:a.state.ORDER_REMARK,ORDER_SALAD:a.props.igrds.salad,TOTAL_FEE:a.props.price,USER_ADDRESS:a.state.USER_ADDRESS,USER_NAME:a.state.USER_NAME,USER_PHONE:a.state.USER_PHONE};console.log(e),Y.a.post("https://ivftjreo9c.execute-api.cn-northwest-1.amazonaws.com.cn/prod/order",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),a.props.history.push("/burger/order"),a.props.history.go()},a.handlename=function(e){if(e&&e.target&&e.target.value){var t=e.target.value;a.setState((function(){return{USER_NAME:t}}))}},a.handleaddress=function(e){if(e&&e.target&&e.target.value){var t=e.target.value;a.setState((function(){return{USER_ADDRESS:t}}))}},a.handlephone=function(e){if(e&&e.target&&e.target.value){var t=e.target.value;a.setState((function(){return{USER_PHONE:t}}))}},a.handleremark=function(e){if(e&&e.target&&e.target.value){var t=e.target.value;a.setState((function(){return{ORDER_REMARK:t}}))}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){console.log("selected ".concat(e))}},{key:"checkEmail",value:function(e,t,a){/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t)?a():a("The Email is wrong")}},{key:"checkname",value:function(e,t,a){/^[a-zA-Z\u4e00-\u9fa5]+$/.test(t)?a():a("Please input Chinese character or letter")}},{key:"checkPhone",value:function(e,t,a){/^1(3|4|5|7|8)\d{9}$/.test(t)?a():a("The mobile phone number is wrong")}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=n.a.createElement("div",{className:K.a.butn},n.a.createElement("button",{className:K.a.confirm,onClick:function(){document.getElementById("info").scrollIntoView()}},"\u786e\u5b9a"),n.a.createElement("button",{className:K.a.close,onClick:function(){e.props.history.push("/burger/"),e.props.history.go()}},"\u53d6\u6d88")),r=J.a.Option,l=n.a.createElement("div",{className:K.a.form},n.a.createElement("h2",null,n.a.createElement("strong",null,"\u8bf7\u8f93\u5165\u4f60\u7684\u8054\u7cfb\u4fe1\u606f")),n.a.createElement(V.a,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},n.a.createElement(V.a.Item,{label:"name\ud83d\udc69/\ud83d\udc68"},t("name",{rules:[{validator:this.checkname,required:!0}]})(n.a.createElement(W.a,{placeholder:" Chinese character or letter",style:{width:300},onChange:function(t){return e.handlename(t)}}))),n.a.createElement(V.a.Item,{label:"Street \ud83c\udfe0"},t("Street",{rules:[{required:!0}]})(n.a.createElement(W.a,{placeholder:"Your current address.",style:{width:300},onChange:function(t){return e.handleaddress(t)}}))),n.a.createElement(V.a.Item,{label:"Phone Number \ud83d\udcde"},t("phone",{rules:[{validator:this.checkPhone,required:!0}]})(n.a.createElement(W.a,{placeholder:"11-digit phone number",style:{width:300},onChange:function(t){return e.handlephone(t)}}))),n.a.createElement(V.a.Item,{label:"E-mail \ud83d\udceb"},t("EMAIL",{rules:[{validator:this.checkEmail,required:!0}]})(n.a.createElement(W.a,{placeholder:"aaa@bbb.ccc",style:{width:300}}))),n.a.createElement(V.a.Item,{label:"remark \ud83d\udd8a"},t("email",{rules:[{required:!0}]})(n.a.createElement(z,{rows:3,placeholder:"For example, don't pepper.",style:{width:300},onChange:function(t){return e.handleremark(t)}}))),n.a.createElement(J.a,{defaultValue:"fastest",style:{width:400},onChange:this.handleChange},n.a.createElement(r,{value:"lowest"},"lowest"),n.a.createElement(r,{value:"middlest"},"fastest")),n.a.createElement("br",null),n.a.createElement("p",null),n.a.createElement(q.a,{style:{width:400}}),n.a.createElement("br",null)),n.a.createElement("button",{className:K.a.order,onClick:this.submit},"\u4e0b\u5355")),o=null;return this.props.igrds&&(o=n.a.createElement(_,{ingredients:this.props.igrds})),n.a.createElement("div",null,n.a.createElement("h1",{className:K.a.hope},n.a.createElement("strong",null," We hope is tastes well \ud83d\udc81\u200d\u2640\ufe0f")),o,n.a.createElement("br",null),n.a.createElement("h2",{className:K.a.hope1}," totalprice:",n.a.createElement("strong",null,"\ud83d\udcb0",Math.round(100*this.props.price)/100)),a,n.a.createElement("div",{id:"info"}),l,n.a.createElement("br",null),n.a.createElement("p",null))}}]),t}(r.Component),Q=Object(S.b)((function(e){return console.log(e.burgerBuilder.totalPrice),console.log(e.burgerBuilder.ingredients),{igrds:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice}}),(function(e){return{}}))(Object(w.e)(V.a.create()($))),Z=a(75),ee=a.n(Z),te=a(409),ae=[{title:"Name",dataIndex:"USER_NAME",key:"USER_NAME",render:function(e){return n.a.createElement("a",null,e)}},{title:"ID",dataIndex:"MCH_ID",key:"MCH_ID"},{title:"Address \ud83c\udfe0",dataIndex:"USER_ADDRESS",key:"USER_ADDRESS"},{title:"bacon \ud83e\udd53",dataIndex:"ORDER_BACON",key:"ORDER_BACON",className:"bacon",render:function(e){return n.a.createElement("h3",{className:ee.a.bacon},e)}},{title:"salad \ud83e\udd57",dataIndex:"ORDER_SALAD",key:"ORDER_SALAD",render:function(e){return n.a.createElement("h3",{className:ee.a.salad},e)}},{title:"cheese \ud83e\uddc0",dataIndex:"ORDER_CHEESE",key:"ORDER_CHEESE",render:function(e){return n.a.createElement("h3",{className:ee.a.cheese},e)}},{title:"meat \ud83e\udd69",dataIndex:"ORDER_MEAT",key:"ORDER_MEAT",render:function(e){return n.a.createElement("h3",{className:ee.a.meat},e)}},{title:"totalprice \ud83d\udcb0",dataIndex:"TOTAL_FEE",key:"TOTAL_FEE",render:function(e){return n.a.createElement("h2",null," \xa3",Math.round(1e3*e)/1e3)}},{title:"Action",key:"action",render:function(e,t){return n.a.createElement("span",null,n.a.createElement("a",null,"Delete"))}}],re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={order:[{MCH_ID:0,ORDER_BACON:0,ORDER_CHEESE:0,ORDER_MEAT:0,ORDER_REMARK:0,ORDER_SALAD:0,TOTAL_FEE:0,USER_ADDRESS:"",USER_NAME:"",USER_PHONE:""}]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y.a.get("https://ivftjreo9c.execute-api.cn-northwest-1.amazonaws.com.cn/prod/order",{params:{MCH_ID:"41708307"}}).then((function(t){console.log(t),e.setState({order:t.data.msg})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h2",{className:ee.a.hope1}," ALL your orders"),n.a.createElement("br",null),n.a.createElement("div",{className:ee.a.content},n.a.createElement(te.a,{columns:ae,dataSource:this.state.order})))}}]),t}(r.Component),ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(k.a,null,n.a.createElement(H,null),n.a.createElement(w.a,{path:"/burger/info",children:n.a.createElement(Q,null)}),n.a.createElement(w.a,{path:"/burger/order",children:n.a.createElement(re,null)}),n.a.createElement(w.a,{exact:!0,path:"/burger/",children:n.a.createElement(x,null)})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(71);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ce=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)},ie={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:0,purchaseable:!1,sumprice:{salad:0,bacon:0,cheese:0,meat:0}},se={salad:.5,cheese:.4,meat:1.3,bacon:.7},ue=function(e,t){var a=Object(m.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=ce(e.ingredients,a),n=Object(m.a)({},t.ingredientName,r[t.ingredientName]*se[t.ingredientName]),l={purchaseable:!0,ingredients:r,sumprice:ce(e.sumprice,n),totalPrice:e.totalPrice+se[t.ingredientName]};return ce(e,l)},de=function(e,t){var a=Object(m.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r=ce(e.ingredients,a),n=Object(m.a)({},t.ingredientName,r[t.ingredientName]*se[t.ingredientName]),l={purchaseable:!0,ingredients:r,sumprice:ce(e.sumprice,n),totalPrice:e.totalPrice-se[t.ingredientName]};return ce(e,l)},me=function(e){var t=ce(e.ingredients,{salad:1,bacon:1,cheese:1,meat:1}),a=ce(e.sumprice,{salad:.5,cheese:.4,meat:1.3,bacon:.7});return ce(e,{purchaseable:!0,ingredients:t,sumprice:a,totalPrice:2.9})},pe=function(e){var t=ce(e.ingredients,{salad:1,bacon:1,cheese:1,meat:2}),a=ce(e.sumprice,{salad:.5,cheese:.4,bacon:.7,meat:2.6});return ce(e,{purchaseable:!0,ingredients:t,sumprice:a,totalPrice:4.2})},he=function(e){var t=ce(e.ingredients,{salad:2,bacon:2,cheese:2,meat:2}),a=ce(e.sumprice,{salad:1,cheese:.8,meat:2.6,bacon:1.4});return ce(e,{purchaseable:!0,ingredients:t,sumprice:a,totalPrice:5.8})},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return ue(e,t);case"REMOVE_INGREDIENT":return de(e,t);case"SMALL":return me(e);case"MEAT":return pe(e);case"BIG":return he(e);default:return e}},be=(a(407),a(206)),fe=Object(le.c)({burgerBuilder:Ee}),ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,_e=Object(le.e)(fe,ge(Object(le.a)(be.a)));o.a.render(n.a.createElement(S.a,{store:_e},n.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2bTYV",OrderButton1:"BuildControls_OrderButton1__M1b_v",OrderButton:"BuildControls_OrderButton__3K-PS",OrderButton2:"BuildControls_OrderButton2__3Je-v",enable:"BuildControls_enable__1v9hc",lessmore:"BuildControls_lessmore__yNkdr",auto:"BuildControls_auto__2HmOm",Label:"BuildControls_Label__32yyE"}},50:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2H8gy",BreadTop:"BurgerIngredient_BreadTop__3Dxw6",Seeds1:"BurgerIngredient_Seeds1__2sB0Y",Seeds2:"BurgerIngredient_Seeds2__3XQAu",Meat:"BurgerIngredient_Meat__1UWEv",Cheese:"BurgerIngredient_Cheese__3w1a4",Salad:"BurgerIngredient_Salad__22mJY",Bacon:"BurgerIngredient_Bacon__38Ye7"}},61:function(e,t,a){e.exports={modal:"modal_modal__31rcr",title:"modal_title__3EWJc",content:"modal_content__1WPLL",operator:"modal_operator__3W08h",close:"modal_close__hDTk5",confirm:"modal_confirm__J8wBC",mask:"modal_mask__EmNcO"}},63:function(e,t,a){e.exports={close:"form_close__3dgE9",confirm:"form_confirm__t_wfv",order:"form_order__2Ls9X",butn:"form_butn__2xJfH",hope:"form_hope__WaKgW",hope1:"form_hope1__2tjwJ",form:"form_form__XhXYN"}},75:function(e,t,a){e.exports={one:"order_one__40sFy",bacon:"order_bacon__2eT0e",salad:"order_salad__7hyR_",cheese:"order_cheese__3wNEt",meat:"order_meat__3gqkV",hope1:"order_hope1__azAhM",content:"order_content__2zfJh"}},95:function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2F6Sm",Label:"BuildControl_Label__3vrqD",Less:"BuildControl_Less__1VQXn",More:"BuildControl_More__h_RAx"}}},[[210,1,2]]]);
//# sourceMappingURL=main.7365854b.chunk.js.map