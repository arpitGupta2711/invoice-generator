(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{77:function(e,t,s){},78:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),a=s(26),c=s.n(a),r=(s(77),s(15)),l=s(17),o=s(19),d=s(20),j=(s(42),s(78),s(63)),h=s(11),m=s(50),b=s(3),u=s(38),p=s(24),x=s(27),O=s(14),f=s(71),v=s(44),y=s(45),N=s(37),w=s(2),g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(w.jsxs)(N.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(w.jsx)(N.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(w.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(w.jsx)(O.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}]),s}(n.a.Component),C=g,I=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(w.jsx)(T,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"ITEM"}),Object(w.jsx)("th",{children:"QTY"}),Object(w.jsx)("th",{children:"PRICE/RATE"}),Object(w.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(w.jsx)("tbody",{children:i})]}),Object(w.jsx)(x.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Item"})]})}}]),s}(n.a.Component),T=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"onDelEvent",value:function(){this.props.onDelEvent(this.props.item)}},{key:"render",value:function(){return Object(w.jsxs)("tr",{children:[Object(w.jsxs)("td",{style:{width:"100%"},children:[Object(w.jsx)(C,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(w.jsx)(C,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(w.jsx)("td",{style:{minWidth:"70px"},children:Object(w.jsx)(C,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(w.jsx)("td",{style:{minWidth:"130px"},children:Object(w.jsx)(C,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(w.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(w.jsx)(y.c,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}]),s}(n.a.Component),D=I,A=s(10),F=s.n(A),E=s(13),S=s(70),k=s(58),R=s.n(k),q=s(65),M=s(31),z=s(5);function L(e){return P.apply(this,arguments)}function P(){return(P=Object(E.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R()(document.querySelector("#invoiceCapture")).then((function(e){var t=e.toDataURL("image/png",1),s=new q.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;var i=s.getImageProperties(t),n=s.internal.pageSize.getWidth(),a=i.height*n/i.width;s.addImage(t,"PNG",0,0,n,a),s.save("invoice-001.pdf")})),!t.edit){e.next=6;break}return e.next=4,t.editInvoice(t,t.routeParams);case 4:e.next=8;break;case 6:return e.next=8,t.addInvoice(t);case 8:t.navigate("/");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(r.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[Object(w.jsxs)(S.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0,children:[Object(w.jsxs)("div",{id:"invoiceCapture",children:[Object(w.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(w.jsxs)("div",{className:"w-100",children:[Object(w.jsx)("h4",{className:"fw-bold my-2",children:this.props.info.billFrom||"John Uberbacher"}),Object(w.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",this.props.info.invoiceNumber||""]})]}),Object(w.jsxs)("div",{className:"text-end ms-4",children:[Object(w.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(w.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",this.props.currency," ",this.props.total]})]})]}),Object(w.jsxs)("div",{className:"p-4",children:[Object(w.jsxs)(u.a,{className:"mb-4",children:[Object(w.jsxs)(p.a,{md:4,children:[Object(w.jsx)("div",{className:"fw-bold",children:"Billed to:"}),Object(w.jsx)("div",{children:this.props.info.billTo||""}),Object(w.jsx)("div",{children:this.props.info.billToAddress||""}),Object(w.jsx)("div",{children:this.props.info.billToEmail||""})]}),Object(w.jsxs)(p.a,{md:4,children:[Object(w.jsx)("div",{className:"fw-bold",children:"Billed From:"}),Object(w.jsx)("div",{children:this.props.info.billFrom||""}),Object(w.jsx)("div",{children:this.props.info.billFromAddress||""}),Object(w.jsx)("div",{children:this.props.info.billFromEmail||""})]}),Object(w.jsxs)(p.a,{md:4,children:[Object(w.jsx)("div",{className:"fw-bold mt-2",children:"Date Of Issue:"}),Object(w.jsx)("div",{children:this.props.info.dateOfIssue||""})]})]}),Object(w.jsxs)(v.a,{className:"mb-0",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"QTY"}),Object(w.jsx)("th",{children:"DESCRIPTION"}),Object(w.jsx)("th",{className:"text-end",children:"PRICE"}),Object(w.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(w.jsx)("tbody",{children:this.props.items.map((function(t,s){return Object(w.jsxs)("tr",{id:s,children:[Object(w.jsx)("td",{style:{width:"70px"},children:t.quantity}),Object(w.jsxs)("td",{children:[t.name," - ",t.description]}),Object(w.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[e.props.currency," ",t.price]}),Object(w.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[e.props.currency," ",t.price*t.quantity]})]},s)}))})]}),Object(w.jsx)(v.a,{children:Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"\xa0"}),Object(w.jsx)("td",{children:"\xa0"}),Object(w.jsx)("td",{children:"\xa0"})]}),Object(w.jsxs)("tr",{className:"text-end",children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(w.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.subTotal]})]}),0!=this.props.taxAmmount&&Object(w.jsxs)("tr",{className:"text-end",children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TAX"}),Object(w.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.taxAmmount]})]}),0!=this.props.discountAmmount&&Object(w.jsxs)("tr",{className:"text-end",children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(w.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.discountAmmount]})]}),Object(w.jsxs)("tr",{className:"text-end",children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(w.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.total]})]})]})}),this.props.info.notes&&Object(w.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:this.props.info.notes})]})]}),Object(w.jsx)("div",{className:"pb-4 px-4",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(p.a,{md:6,children:Object(w.jsxs)(x.a,{variant:"primary",className:"d-block w-100",onClick:function(){return L(e.props)},children:[Object(w.jsx)(y.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Send Invoice"]})}),Object(w.jsx)(p.a,{md:6,children:Object(w.jsxs)(x.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:function(){return L(e.props)},children:[Object(w.jsx)(y.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(w.jsx)("hr",{className:"mt-4 mb-3"})]})}}]),s}(n.a.Component);var U,W=(U=Object(M.b)((function(e){return{todoState:e.invoices}}),{addInvoice:function(e){return function(){var t=Object(E.a)(F.a.mark((function t(s){var i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{i=Object(b.a)(Object(b.a)({},e),{},{id:(new Date).getTime()}),s({type:"ADD_LIST",payload:i})}catch(n){}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editInvoice:function(e,t){return function(){var s=Object(E.a)(F.a.mark((function s(i){var n;return F.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:try{(n=Object(b.a)({},e)).id=t.id,i({type:"EDIT",payload:n})}catch(a){}case 1:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(B),function(e){var t=Object(z.l)(),s=Object(z.n)();return Object(w.jsx)(U,Object(b.a)(Object(b.a)({},e),{},{navigate:t,routeParams:s}))}),G=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).editField=function(e){i.setState(Object(h.a)({},e.target.name,e.target.value)),i.handleCalculateTotal()},i.onCurrencyChange=function(e){i.setState(e)},i.openModal=function(e){e.preventDefault(),i.handleCalculateTotal(),i.setState({isOpen:!0})},i.closeModal=function(e){return i.setState({isOpen:!1})},i.state={isOpen:!1,currency:"$",currentDate:"",invoiceNumber:1,dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",notes:"",total:"0.00",subTotal:"0.00",taxRate:"",taxAmmount:"0.00",discountRate:"",discountAmmount:"0.00"},i.state.items=[{id:0,name:"",description:"",price:"1.00",quantity:1}],i.editField=i.editField.bind(Object(m.a)(i)),i}return Object(l.a)(s,[{key:"componentDidMount",value:function(e){if(this.handleCalculateTotal(),this.props.edit){var t=this.props.todoState.invoices,s=this.props.routeParams,i=t.find((function(e){return parseInt(s.id)===parseInt(e.id)}));(i=Object(b.a)({},i.info)).isOpen=!1,this.setState(i)}}},{key:"handleRowDel",value:function(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}},{key:"handleAddEvent",value:function(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items)}},{key:"handleCalculateTotal",value:function(){var e=this,t=this.state.items,s=0;t.map((function(e){s=parseFloat(s+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2)})),this.setState({subTotal:parseFloat(s).toFixed(2)},(function(){e.setState({taxAmmount:parseFloat(parseFloat(s)*(e.state.taxRate/100)).toFixed(2)},(function(){e.setState({discountAmmount:parseFloat(parseFloat(s)*(e.state.discountRate/100)).toFixed(2)},(function(){e.setState({total:s-e.state.discountAmmount+parseFloat(e.state.taxAmmount)})}))}))}))}},{key:"onItemizedItemEdit",value:function(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s==t.name&&e.id==t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}},{key:"render",value:function(){var e=this;return Object(w.jsx)(O.a,{onSubmit:this.openModal,children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(p.a,{md:8,lg:9,children:Object(w.jsxs)(f.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(w.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(w.jsxs)("div",{class:"d-flex flex-column",children:[Object(w.jsx)("div",{className:"d-flex flex-column",children:Object(w.jsxs)("div",{class:"mb-2",children:[Object(w.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(w.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(w.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(w.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(w.jsx)(O.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:function(t){return e.editField(t)},style:{maxWidth:"150px"},required:"required"})]})]}),Object(w.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(w.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(w.jsx)(O.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:function(t){return e.editField(t)},min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(w.jsx)("hr",{className:"my-4"}),Object(w.jsxs)(u.a,{className:"mb-5",children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(O.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(w.jsx)(O.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(w.jsx)(O.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(w.jsx)(O.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]}),Object(w.jsxs)(p.a,{children:[Object(w.jsx)(O.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(w.jsx)(O.a.Control,{placeholder:"Who is this invoice from?",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(w.jsx)(O.a.Control,{placeholder:"Email address",value:this.state.billFromEmail,type:"email",name:"billFromEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(w.jsx)(O.a.Control,{placeholder:"Billing address",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]})]}),Object(w.jsx)(D,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(w.jsx)(u.a,{className:"mt-4 justify-content-end",children:Object(w.jsxs)(p.a,{lg:6,children:[Object(w.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(w.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(w.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(w.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(w.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(w.jsxs)("span",{children:[Object(w.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(w.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(w.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(w.jsxs)("span",{children:[Object(w.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(w.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(w.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total||0]})]})]})}),Object(w.jsx)("hr",{className:"my-4"}),Object(w.jsx)(O.a.Label,{className:"fw-bold",children:"Notes:"}),Object(w.jsx)(O.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:function(t){return e.editField(t)},as:"textarea",className:"my-2",rows:1})]})}),Object(w.jsx)(p.a,{md:4,lg:3,children:Object(w.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(w.jsx)(x.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review Invoice"}),Object(w.jsx)(W,{edit:this.props.edit,showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(w.jsxs)(O.a.Group,{className:"mb-3",children:[Object(w.jsx)(O.a.Label,{className:"fw-bold",children:"Currency:"}),Object(w.jsxs)(O.a.Select,{onChange:function(t){return e.onCurrencyChange({currency:t.target.value})},className:"btn btn-light my-1","aria-label":"Change Currency",children:[Object(w.jsx)("option",{value:"$",children:"USD (United States Dollar)"}),Object(w.jsx)("option",{value:"\xa3",children:"GBP (British Pound Sterling)"}),Object(w.jsx)("option",{value:"\xa5",children:"JPY (Japanese Yen)"}),Object(w.jsx)("option",{value:"$",children:"CAD (Canadian Dollar)"}),Object(w.jsx)("option",{value:"$",children:"AUD (Australian Dollar)"}),Object(w.jsx)("option",{value:"$",children:"SGD (Signapore Dollar)"}),Object(w.jsx)("option",{value:"\xa5",children:"CNY (Chinese Renminbi)"}),Object(w.jsx)("option",{value:"\u20bf",children:"BTC (Bitcoin)"})]})]}),Object(w.jsxs)(O.a.Group,{className:"my-3",children:[Object(w.jsx)(O.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(w.jsxs)(N.a,{className:"my-1 flex-nowrap",children:[Object(w.jsx)(O.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(w.jsx)(N.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(w.jsxs)(O.a.Group,{className:"my-3",children:[Object(w.jsx)(O.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(w.jsxs)(N.a,{className:"my-1 flex-nowrap",children:[Object(w.jsx)(O.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(w.jsx)(N.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}]),s}(n.a.Component);var J=function(e){return function(t){var s=Object(z.l)(),i=Object(z.n)();return Object(w.jsx)(e,Object(b.a)(Object(b.a)({},t),{},{navigate:s,routeParams:i}))}}(Object(M.b)((function(e){return{todoState:e.invoices}}))(G)),Y=s(55),$=s(9),Q=s(68),_=s(33),H=function(e){var t=e.id,s=e.info,n=e.view,a=Object(M.c)(),c=Object(i.useState)(!1),r=Object($.a)(c,2),l=r[0],o=r[1];return Object(w.jsxs)(Y.a.Item,{as:"li",className:"d-flex justify-content-between align-items-start",style:{margin:"5px 0px",justifyContent:"none",alignItems:"none"},children:[Object(w.jsxs)("div",{className:"ms-2 ",style:{marginRight:"5%"},children:[Object(w.jsx)("div",{className:"fw-bold",children:"Invoice No:"}),s.invoiceNumber]}),Object(w.jsxs)("div",{className:"ms-2 ",style:{marginRight:"3%"},children:[Object(w.jsx)("div",{className:"fw-bold",children:"From"}),s.billFrom]}),Object(w.jsxs)("div",{className:"ms-2 ",style:{marginRight:"10%"},children:[Object(w.jsx)("div",{className:"fw-bold",children:"To"}),s.billTo]}),Object(w.jsxs)("div",{className:"ms-2 ",style:{marginRight:"10%"},children:[Object(w.jsx)("div",{className:"fw-bold",children:"Date of Issue:"}),s.currency]}),Object(w.jsxs)("div",{className:"ms-2 me-auto",children:[Object(w.jsx)("div",{className:"fw-bold",children:"Total"}),s.total," ",s.currency]}),Object(w.jsxs)(x.a,{style:{marginLeft:"1%"},onClick:function(e){e.preventDefault(),o(!0)},children:[" ","View"]}),Object(w.jsx)(W,{showModal:l,closeModal:function(e){return o(!1)},info:s,items:s.items,currency:s.currency,subTotal:s.subTotal,taxAmmount:s.taxAmmount,discountAmmount:s.discountAmmount,total:s.total,view:!0}),Object(w.jsx)(_.a,{to:"/form/".concat(t),children:Object(w.jsx)(x.a,{style:{marginLeft:"1%",marginRight:"1%"},children:"Edit"})}),Object(w.jsx)("div",{onClick:function(){n||a(function(e){return function(){var t=Object(E.a)(F.a.mark((function t(s){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{s({type:"DELETE",payload:e})}catch(i){}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},style:{cursor:"pointer"},children:Object(w.jsx)(Q.a,{style:{marginTop:"7px",fontSize:"30px"}})})]})},V=function(){var e=Object(M.d)((function(e){return e.invoices})).invoices;return Object(w.jsxs)(Y.a,{style:{width:"80%",listStyle:"none"},children:[e.map((function(e){return Object(w.jsx)(H,{openModal:e.openModal,closeModal:e.closeModal,id:e.id,info:e.info})})),Object(w.jsx)(_.a,{to:"/form",style:{justifyContent:"center",display:"flex"},children:Object(w.jsx)(x.a,{style:{marginTop:"30px",width:"30%"},children:"Add New Invoice"})})]})},X=Object(_.b)([{path:"/",element:Object(w.jsx)(V,{})},{path:"/form",element:Object(w.jsx)(j.a,{children:Object(w.jsx)(J,{})})},{path:"/form/:id",element:Object(w.jsx)(j.a,{children:Object(w.jsx)(J,{edit:!0})})}]),K=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(w.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(w.jsx)(z.b,{router:X})})}}]),s}(i.Component),Z=K,ee=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,479)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),i(e),n(e),a(e),c(e)}))},te=s(69),se=s(41),ie=s(16),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{invoices:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return Object(b.a)(Object(b.a)({},e),{},{invoices:[].concat(Object(ie.a)(e.invoices),[t.payload])});case"DELETE":return Object(b.a)(Object(b.a)({},e),{},{invoices:Object(ie.a)(e.invoices.filter((function(e){return e.id!==t.payload})))});case"EDIT":return Object(b.a)(Object(b.a)({},e),{},{invoices:Object(ie.a)(e.invoices.map((function(e){return parseInt(e.id)===parseInt(t.payload.id)?t.payload:e})))});default:return e}},ae=Object(se.b)({invoices:ne}),ce=Object(se.d)(ae,Object(se.c)(Object(se.a)(te.a)));c.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(M.a,{store:ce,children:Object(w.jsx)(Z,{})})}),document.getElementById("root")),ee()}},[[87,1,3]]]);
//# sourceMappingURL=main.7dff4323.chunk.js.map