import{b as F,c as k,d as A,e as R}from"./chunk-EPX2RJC7.js";import{A as N,F as D,o as $}from"./chunk-EABF6OQU.js";import{$ as M,$a as l,Ba as t,Ca as m,Cb as i,Db as n,La as _,Na as O,Pb as x,Q as v,R as b,Ta as f,Va as T,W as y,Xb as B,_ as C,aa as E,ab as o,bb as u,hb as w,ka as S,lb as g,oa as I,rb as p,sb as s,tb as h,xb as P,yb as z}from"./chunk-7RK3OHFU.js";var Y=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

/* For PrimeNG */

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")}
};
`,K={root:({instance:e,props:c})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":c.autoResize,"p-invalid":c.invalid,"p-variant-filled":c.variant?c.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":c.fluid}]},H=(()=>{class e extends N{name="textarea";theme=Y;classes=K;static \u0275fac=(()=>{let a;return function(d){return(a||(a=S(e)))(d||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var j=(()=>{class e extends D{ngModel;control;autoResize;variant="outlined";fluid=!1;onResize=new I;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=y(H);constructor(a,r){super(),this.ngModel=a,this.control=r}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return this.fluid||!!r}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(a){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(a){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(a||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(r){return new(r||e)(m(k,8),m(F,8))};static \u0275dir=E({type:e,selectors:[["","pTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:8,hostBindings:function(r,d){r&1&&w("input",function(G){return d.onInput(G)}),r&2&&T("p-filled",d.filled)("p-textarea-resizable",d.autoResize)("p-variant-filled",d.variant==="filled"||d.config.inputStyle()==="filled")("p-textarea-fluid",d.hasFluid)},inputs:{autoResize:[2,"autoResize","autoResize",x],variant:"variant",fluid:[2,"fluid","fluid",x]},outputs:{onResize:"onResize"},features:[P([H]),O,_]})}return e})(),U=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=M({type:e});static \u0275inj=b({imports:[$]})}return e})();var V=class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=C({type:e,selectors:[["app-help-page"]],standalone:!0,features:[z],decls:52,vars:53,consts:[[1,"block_1"],[1,"info"],[1,"inputs"],["for","name"],["type","text","id","name","pInputText","",3,"placeholder","fluid"],["for","email"],["type","text","id","email","pInputText","",3,"placeholder","fluid"],["for","phone"],["id","phone","type","text","pInputText","",3,"placeholder","fluid"],["for","country"],["id","country","type","text","pInputText","",3,"placeholder","fluid"],["for","name",2,"margin-top","30px"],["rows","5","cols","30","pTextarea","",2,"resize","none",3,"placeholder","fluid"],[1,"send"],[1,"help_img"]],template:function(a,r){a&1&&(l(0,"div",0)(1,"div",1)(2,"h3"),p(3),i(4,"translate"),o(),l(5,"h1"),p(6),i(7,"translate"),l(8,"span"),p(9),i(10,"translate"),o()(),l(11,"h2"),p(12),i(13,"translate"),l(14,"span"),p(15),i(16,"translate"),o()(),l(17,"div",2)(18,"div")(19,"label",3),p(20),i(21,"translate"),o(),u(22,"input",4),i(23,"translate"),o(),l(24,"div")(25,"label",5),p(26),i(27,"translate"),o(),u(28,"input",6),i(29,"translate"),o()(),l(30,"div",2)(31,"div")(32,"label",7),p(33),i(34,"translate"),o(),u(35,"input",8),i(36,"translate"),o(),l(37,"div")(38,"label",9),p(39),i(40,"translate"),o(),u(41,"input",10),i(42,"translate"),o()(),l(43,"label",11),p(44),i(45,"translate"),o(),u(46,"textarea",12),i(47,"translate"),l(48,"div",13),p(49),i(50,"translate"),o()(),u(51,"div",14),o()),a&2&&(t(3),s(n(4,21,"CONTACT_US")),t(3),s(n(7,23,"CONTACT_US_T")),t(3),s(n(10,25,"CONTACT_US_T_2")),t(3),s(n(13,27,"CONTACT_US_D")),t(3),s(n(16,29,"CONTACT_US_D_2")),t(5),s(n(21,31,"NAME")),t(2),g("placeholder",n(23,33,"NAME")),f("fluid",!0),t(4),s(n(27,35,"EMAIL")),t(2),g("placeholder",n(29,37,"EMAIL")),f("fluid",!0),t(5),s(n(34,39,"PHONE")),t(2),g("placeholder",n(36,41,"PHONE")),f("fluid",!0),t(4),s(n(40,43,"COUNTRY")),t(2),g("placeholder",n(42,45,"COUNTRY")),f("fluid",!0),t(3),h("",n(45,47,"MESSAGE"),"*"),t(2),g("placeholder",n(47,49,"ENTER_MESSAGE")),f("fluid",!0),t(3),h(" ",n(50,51,"SEND"),""))},dependencies:[R,A,U,j,B],styles:['.block_1[_ngcontent-%COMP%]{margin-top:214px;display:flex;gap:28px;padding:0 24px 50px;justify-content:center;align-items:center}h3[_ngcontent-%COMP%]{color:#1f2533;font-size:14px;font-style:normal;font-weight:700;line-height:14px;text-transform:uppercase}h1[_ngcontent-%COMP%]{margin-top:25px;color:#1f2533;font-feature-settings:"liga" off,"clig" off;font-size:32px;font-style:normal;font-weight:700;line-height:130%}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2147cc}h2[_ngcontent-%COMP%]{color:#1f2533;font-size:18px;font-style:normal;font-weight:500;line-height:140%;margin-top:30px;margin-bottom:65px}h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2147cc}.info[_ngcontent-%COMP%]{width:100%;max-width:565px}.inputs[_ngcontent-%COMP%]{width:100%;margin-top:30px;display:flex;justify-content:start;align-items:center;gap:35px}.inputs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%}label[_ngcontent-%COMP%]{margin-bottom:10px;display:block;color:#1f2533;font-feature-settings:"liga" off,"clig" off;font-size:16px;font-style:normal;font-weight:600;line-height:140%}.send[_ngcontent-%COMP%]{margin-top:50px;width:234px;height:57px;text-align:center;border-radius:68px;background:#2147cc;color:#fff;font-size:19px;font-style:normal;font-weight:700;line-height:57px}.help_img[_ngcontent-%COMP%]{width:50%;max-width:565px;background:url("./media/help-img-3TN7KED4.png") center no-repeat;background-size:contain;height:900px}@media (max-width: 1024px){.help_img[_ngcontent-%COMP%]{display:none}}@media (max-width: 768px){.inputs[_ngcontent-%COMP%]{flex-direction:column}.inputs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}}']})};export{V as HelpPageComponent};
