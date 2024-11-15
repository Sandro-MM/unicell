import{b as re}from"./chunk-A3GMORTM.js";import{a as $}from"./chunk-VDXPL7UY.js";import{a as ce,b as ae}from"./chunk-EPX2RJC7.js";import{A as oe,D as te,E as ne,F as ie,k as W,l as Y,n as ee,o as M,u as E}from"./chunk-EABF6OQU.js";import{$ as A,$a as p,Ab as X,Ba as l,Ja as z,La as m,Na as H,P as O,Pb as k,Q as N,Qa as g,Qb as J,R as q,Sa as r,Ta as c,W as j,Wa as F,Xa as u,_ as f,ab as b,bb as s,cb as V,db as T,fb as R,ga as Q,ha as C,hb as G,ia as y,ib as I,ja as v,ka as d,mb as U,nb as P,oa as _,ob as S,pb as B,xb as Z,yb as w,zb as K}from"./chunk-7RK3OHFU.js";var D=(()=>{class e extends ${static \u0275fac=(()=>{let t;return function(o){return(t||(t=d(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["CheckIcon"]],standalone:!0,features:[m,w],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(v(),p(0,"svg",0),s(1,"path",1),b()),n&2&&(u(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var L=(()=>{class e extends ${static \u0275fac=(()=>{let t;return function(o){return(t||(t=d(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[m,w],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(v(),p(0,"svg",0),s(1,"path",1),b()),n&2&&(u(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},dependencies:[M],encapsulation:2})}return e})();var he=["input"],de=()=>({"p-checkbox-input":!0}),ue=e=>({checked:e,class:"p-checkbox-icon"});function pe(e,a){if(e&1&&s(0,"span",8),e&2){let t=I(3);c("ngClass",t.checkboxIcon),r("data-pc-section","icon")}}function be(e,a){e&1&&s(0,"CheckIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function ke(e,a){if(e&1&&(V(0),g(1,pe,1,2,"span",7)(2,be,1,2,"CheckIcon",6),T()),e&2){let t=I(2);l(),c("ngIf",t.checkboxIcon),l(),c("ngIf",!t.checkboxIcon)}}function fe(e,a){e&1&&s(0,"MinusIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function me(e,a){if(e&1&&(V(0),g(1,ke,3,2,"ng-container",4)(2,fe,1,2,"MinusIcon",6),T()),e&2){let t=I();l(),c("ngIf",t.checked),l(),c("ngIf",t._indeterminate())}}function xe(e,a){}function ge(e,a){e&1&&g(0,xe,0,0,"ng-template")}var Ce=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}
`,ye={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},se=(()=>{class e extends oe{name="checkbox";theme=Ce;classes=ye;static \u0275fac=(()=>{let t;return function(o){return(t||(t=d(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var ve={provide:ce,useExisting:O(()=>_e),multi:!0},_e=(()=>{class e extends ie{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new _;onFocus=new _;onBlur=new _;inputViewChild;templates;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:E.contains(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"}}_indeterminate=z(void 0);checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=j(se);ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this.checkboxIconTemplate=t.template;break}})}updateModel(t){let n,o=this.injector.get(ae,null,{optional:!0,self:!0}),i=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=i.filter(h=>!E.equals(h,this.value)):n=i?[...i,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=d(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-checkbox"]],contentQueries:function(n,o,i){if(n&1&&U(i,te,4),n&2){let h;S(h=B())&&(o.templates=h)}},viewQuery:function(n,o){if(n&1&&P(he,5),n&2){let i;S(i=B())&&(o.inputViewChild=i.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",k],binary:[2,"binary","binary",k],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",J],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",k],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",k],required:[2,"required","required",k],autofocus:[2,"autofocus","autofocus",k],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[Z([ve,se]),H,m,Q],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let i=R();p(0,"div",1)(1,"input",2,0),G("focus",function(x){return C(i),y(o.onInputFocus(x))})("blur",function(x){return C(i),y(o.onInputBlur(x))})("change",function(x){return C(i),y(o.handleChange(x))}),b(),p(3,"div",3),g(4,me,3,2,"ng-container",4)(5,ge,1,0,null,5),b()()}n&2&&(F(o.style),u(o.styleClass),c("ngClass",o.containerClass),r("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),l(),F(o.inputStyle),u(o.inputClass),c("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",K(26,de)),r("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),l(3),c("ngIf",!o.checkboxIconTemplate),l(),c("ngTemplateOutlet",o.checkboxIconTemplate)("ngTemplateOutletContext",X(27,ue,o.checked)))},dependencies:()=>[W,Y,ee,D,L],encapsulation:2,changeDetection:0})}return e})(),Ke=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=q({imports:[M,re,D,L,ne]})}return e})();export{_e as a,Ke as b};
