import{d,q as l,z as m}from"./chunk-EABF6OQU.js";import{$ as i,Na as r,Pb as a,R as u,W as o,aa as n,sa as f,wa as c}from"./chunk-7RK3OHFU.js";var M=(()=>{class t{autofocus=!1;focused=!1;platformId=o(c);document=o(d);host=o(f);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){l(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=m.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=function(s){return new(s||t)};static \u0275dir=n({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",a]},standalone:!0,features:[r]})}return t})(),E=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=i({type:t});static \u0275inj=u({})}return t})();export{M as a,E as b};
