(self.webpackChunk=self.webpackChunk||[]).push([[872],{97235:function(t,r,e){var n=e(40857),i=e(86656),o=e(6061),s=e(3070).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});i(r,t)||s(r,t,{value:o.f(t)})}},1156:function(t,r,e){var n=e(45656),i=e(8006).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return s.slice()}}(t):i(n(t))}},6061:function(t,r,e){var n=e(5112);r.f=n},41817:function(t,r,e){"use strict";var n=e(82109),i=e(19781),o=e(17854),s=e(86656),a=e(70111),c=e(3070).f,l=e(99920),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[r]=!0),r};l(p,u);var m=p.prototype=u.prototype;m.constructor=p;var d=m.toString,v="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,r=d.call(t);if(s(f,t))return"";var e=v?r.slice(7,-1):r.replace(y,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:p})}},82526:function(t,r,e){"use strict";var n=e(82109),i=e(17854),o=e(35005),s=e(31913),a=e(19781),c=e(30133),l=e(43307),u=e(47293),f=e(86656),p=e(43157),m=e(70111),d=e(19670),v=e(47908),y=e(45656),g=e(57593),b=e(79114),h=e(70030),w=e(81956),S=e(8006),C=e(1156),_=e(25181),O=e(31236),x=e(3070),R=e(55296),E=e(68880),j=e(31320),P=e(72309),k=e(6200),T=e(3501),N=e(69711),F=e(5112),$=e(6061),D=e(97235),I=e(58003),z=e(29909),J=e(42092).forEach,W=k("hidden"),Q="Symbol",V=F("toPrimitive"),Y=z.set,Z=z.getterFor(Q),q=Object.prototype,A=i.Symbol,B=o("JSON","stringify"),G=O.f,H=x.f,K=C.f,L=R.f,M=P("symbols"),U=P("op-symbols"),X=P("string-to-symbol-registry"),tt=P("symbol-to-string-registry"),rt=P("wks"),et=i.QObject,nt=!et||!et.prototype||!et.prototype.findChild,it=a&&u((function(){return 7!=h(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=G(q,r);n&&delete q[r],H(t,r,e),n&&t!==q&&H(q,r,n)}:H,ot=function(t,r){var e=M[t]=h(A.prototype);return Y(e,{type:Q,tag:t,description:r}),a||(e.description=r),e},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof A},at=function(t,r,e){t===q&&at(U,r,e),d(t);var n=g(r,!0);return d(e),f(M,n)?(e.enumerable?(f(t,W)&&t[W][n]&&(t[W][n]=!1),e=h(e,{enumerable:b(0,!1)})):(f(t,W)||H(t,W,b(1,{})),t[W][n]=!0),it(t,n,e)):H(t,n,e)},ct=function(t,r){d(t);var e=y(r),n=w(e).concat(pt(e));return J(n,(function(r){a&&!lt.call(e,r)||at(t,r,e[r])})),t},lt=function(t){var r=g(t,!0),e=L.call(this,r);return!(this===q&&f(M,r)&&!f(U,r))&&(!(e||!f(this,r)||!f(M,r)||f(this,W)&&this[W][r])||e)},ut=function(t,r){var e=y(t),n=g(r,!0);if(e!==q||!f(M,n)||f(U,n)){var i=G(e,n);return!i||!f(M,n)||f(e,W)&&e[W][n]||(i.enumerable=!0),i}},ft=function(t){var r=K(y(t)),e=[];return J(r,(function(t){f(M,t)||f(T,t)||e.push(t)})),e},pt=function(t){var r=t===q,e=K(r?U:y(t)),n=[];return J(e,(function(t){!f(M,t)||r&&!f(q,t)||n.push(M[t])})),n};(c||(j((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=N(t),e=function(t){this===q&&e.call(U,t),f(this,W)&&f(this[W],r)&&(this[W][r]=!1),it(this,r,b(1,t))};return a&&nt&&it(q,r,{configurable:!0,set:e}),ot(r,t)}).prototype,"toString",(function(){return Z(this).tag})),j(A,"withoutSetter",(function(t){return ot(N(t),t)})),R.f=lt,x.f=at,O.f=ut,S.f=C.f=ft,_.f=pt,$.f=function(t){return ot(F(t),t)},a&&(H(A.prototype,"description",{configurable:!0,get:function(){return Z(this).description}}),s||j(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:A}),J(w(rt),(function(t){D(t)})),n({target:Q,stat:!0,forced:!c},{for:function(t){var r=String(t);if(f(X,r))return X[r];var e=A(r);return X[r]=e,tt[e]=r,e},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(tt,t))return tt[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,r){return void 0===r?h(t):ct(h(t),r)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ut}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),B)&&n({target:"JSON",stat:!0,forced:!c||u((function(){var t=A();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,r,e){for(var n,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(n=r,(m(r)||void 0!==t)&&!st(t))return p(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!st(r))return r}),i[1]=r,B.apply(null,i)}});A.prototype[V]||E(A.prototype,V,A.prototype.valueOf),I(A,Q),T[W]=!0},1402:function(t){t.exports="/images/logo-sm.png?2c12af685035e4b0f0310c516ecac99c"},35872:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return o}});var n=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"bg-primary"},[n("div",{staticClass:"text-primary text-center p-4"},[n("h5",{staticClass:"text-white font-size-20 p-2"},[t._v("Reset Password")]),t._v(" "),n("a",{staticClass:"logo logo-admin",attrs:{href:"/"}},[n("img",{attrs:{src:e(1402),height:"24",alt:"logo"}})])])])}],i=(e(82526),e(41817),{page:{title:"Forgot Password",meta:[{name:"description",content:e(23789).W}]},data:function(){return{email:"",error:null,tryingToReset:!1,isResetError:!1}},methods:{tryToReset:function(){var t=this;return this.tryingToReset=!0,this.error=null,this.resetPassword({email:this.email}).then((function(r){t.tryingToReset=!1,t.isResetError=!1})).catch((function(r){t.tryingToReset=!1,t.error=r||"",t.isResetError=!0}))}}}),o=(0,e(51900).Z)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"account-pages my-5 pt-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[e("div",{staticClass:"card overflow-hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-4"},[e("div",{staticClass:"p-3"},[e("b-alert",{staticClass:"mt-3",attrs:{variant:"danger",dismissible:""},model:{value:t.isResetError,callback:function(r){t.isResetError=r},expression:"isResetError"}},[t._v(t._s(t.error))]),t._v(" "),e("b-form",{staticClass:"form-horizontal mt-4",on:{submit:function(r){return r.preventDefault(),t.tryToReset.apply(null,arguments)}}},[e("b-form-group",{attrs:{id:"email-group",label:"Email","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email"},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}})],1),t._v(" "),e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-12 text-right"},[e("b-button",{staticClass:"w-md",attrs:{type:"submit",variant:"primary"}},[t._v("Reset")])],1)])],1)],1)])]),t._v(" "),e("div",{staticClass:"mt-5 text-center"},[e("p",[t._v("\n            Remember It ?\n            "),e("router-link",{staticClass:"font-weight-medium text-primary",attrs:{tag:"a",to:"/login"}},[t._v("Sign In here")])],1),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n            © "+t._s((new Date).getFullYear())+" Veltrix. Crafted with\n            "),e("i",{staticClass:"mdi mdi-heart text-danger"}),t._v(" by Themesbrand\n          ")])])])])])])}),n,!1,null,null,null).exports}}]);