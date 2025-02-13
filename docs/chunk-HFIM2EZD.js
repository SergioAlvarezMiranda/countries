import{A as _,B as I,C as a,D as u,E as d,F as N,G as k,H as V,I as F,J as ae,K as L,L as h,M as j,N as le,O as se,S as ce,U as pe,V as ue,X,Y as me,a as Z,b as G,c as ee,d as Q,e as te,f as ne,g as x,h as ie,i as O,j as oe,k as w,l as R,m as re,n as W,o as D,p as l,q as f,r as p,s as M,t as m,u as s,v as o,w as i,x as c,y as T,z as b}from"./chunk-DWEJNRID.js";var y=class r{constructor(t){this.http=t;this.loadFromLocalStorage()}apiUrl="https://restcountries.com/v3.1";cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}};saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe(Q(()=>G([])))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe(ee(e=>e.length>0?e[0]:null),Q(()=>G(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe(x(e=>this.cacheStore.byCapital={term:t,countries:e}),x(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe(x(e=>this.cacheStore.byCountries={term:t,countries:e}),x(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe(x(e=>this.cacheStore.byRegion={region:t,countries:e}),x(()=>this.saveToLocalStorage()))}static \u0275fac=function(e){return new(e||r)(oe(se))};static \u0275prov=ie({token:r,factory:r.\u0275fac,providedIn:"root"})};var E=class r{debouncer=new Z;debouncerSuscription;placeholder="";initialValue="";onValue=new W;onDebounce=new W;ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(te(300)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}onSearch(t,e){t.preventDefault(),e.trim()&&this.onValue.emit(e)}onKyPress(t){this.debouncer.next(t)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},standalone:!1,decls:5,vars:2,consts:[["txtInput",""],["role","search",1,"d-flex",3,"submit"],["type","search","aria-label","Buscar",1,"form-control","me-2",3,"keyup","value","placeholder"],["type","submit",1,"btn","btn-outline-success"]],template:function(e,n){if(e&1){let g=T();o(0,"form",1),b("submit",function(K){w(g);let ye=I(2);return R(n.onSearch(K,ye.value))}),o(1,"input",2,0),b("keyup",function(){w(g);let K=I(2);return R(n.onKyPress(K.value))}),i(),o(3,"button",3),a(4,"Buscar"),i()()}e&2&&(l(),s("value",n.initialValue)("placeholder",n.placeholder))},styles:[".btn[_ngcontent-%COMP%]:hover{color:#ced4da;background-color:#495057;border-color:#495057}.btn-outline-success[_ngcontent-%COMP%]{--bs-btn-color: #495057;--bs-btn-border-color: #495057}"]})};var B=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["shared-loading-spinner"]],standalone:!1,decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"span"),a(2,"Buscando"),i(),re(),o(3,"svg",1)(4,"g",2)(5,"circle",3),c(6,"animate",4)(7,"animate",5)(8,"animate",6),i(),o(9,"circle",3),c(10,"animate",7)(11,"animate",8)(12,"animate",9),i(),o(13,"circle",10),c(14,"animate",11),i()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15xp;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 0 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]})};var Ce=r=>["/countries/by",r];function he(r,t){r&1&&(o(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),i())}function ve(r,t){if(r&1&&(o(0,"tr")(1,"td",5),a(2),i(),o(3,"td"),a(4),i(),o(5,"td"),c(6,"img",6),i(),o(7,"td"),a(8),i(),o(9,"td"),a(10),i(),o(11,"td"),a(12),k(13,"number"),i(),o(14,"td")(15,"a",7),a(16,"Ver m\xE1s"),i()()()),r&2){let e=t.$implicit,n=t.index;l(2),u(n+1),l(2),d(" ",e.flag," "),l(2),s("src",e.flags.svg,D),l(2),d(" ",e.name.common," "),l(2),d(" ",e.capital," "),l(2),d(" ",V(13,7,e.population)," "),l(3),s("routerLink",N(9,Ce,e.cca3))}}function Se(r,t){if(r&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),i(),o(5,"th"),a(6,"Icon"),i(),o(7,"th"),a(8,"Bandera"),i(),o(9,"th"),a(10,"Nombre"),i(),o(11,"th"),a(12,"Capital"),i(),o(13,"th"),a(14,"Poblaci\xF3n"),i(),c(15,"th"),i()(),o(16,"tbody"),m(17,ve,17,11,"tr",4),i()()),r&2){let e=_();l(17),s("ngForOf",e.countries)}}var v=class r{countries=[];static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["countries-table"]],inputs:{countries:"countries"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover","table-dark"],[4,"ngFor","ngForOf"],["scope","row"],["alt","country.name.common",3,"src"],[1,"link-secondary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(e,n){if(e&1&&m(0,he,2,0,"div",1)(1,Se,18,1,"ng-template",null,0,F),e&2){let g=I(2);s("ngIf",n.countries.length===0)("ngIfElse",g)}},dependencies:[L,h,ue,j],styles:["img[_ngcontent-%COMP%]{width:25px}.alert-warning[_ngcontent-%COMP%]{--bs-alert-color: #fff;--bs-alert-bg: #5b5a55;--bs-alert-border-color: #000;--bs-alert-link-color: var(--bs-warning-text-emphasis)}"]})};function xe(r,t){r&1&&c(0,"shared-loading-spinner")}var U=class r{constructor(t){this.countriesServices=t}countries=[];isLoading=!1;initialValue="";ngOnInit(){this.countries=this.countriesServices.cacheStore.byCapital.countries,this.initialValue=this.countriesServices.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesServices.searchCapital(t).subscribe(e=>{this.countries=e,this.isLoading=!1}),console.log({term:t})}static \u0275fac=function(e){return new(e||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["shared-capital-page"]],standalone:!1,decls:11,vars:3,consts:[[1,"list-group-item","list-group-item-action","list-group-item-secondary"],[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(e,n){e&1&&(o(0,"h2",0),a(1,"Por Capital"),i(),c(2,"hr"),o(3,"div",1)(4,"div",2)(5,"shared-search-box",3),b("onDebounce",function(S){return n.searchByCapital(S)}),i()()(),o(6,"div",1)(7,"div",2),c(8,"hr"),m(9,xe,1,0,"shared-loading-spinner",4),c(10,"countries-table",5),i()()),e&2&&(l(5),s("initialValue",n.initialValue),l(4),s("ngIf",n.isLoading),l(),s("countries",n.countries))},dependencies:[h,E,B,v],styles:["[][_ngcontent-%COMP%]{}"]})};function _e(r,t){r&1&&c(0,"shared-loading-spinner")}var q=class r{constructor(t){this.countriesServices=t}countries=[];isLoading=!1;initialValue="";ngOnInit(){this.countries=this.countriesServices.cacheStore.byCapital.countries,this.initialValue=this.countriesServices.cacheStore.byCapital.term}searchByCountry(t){this.countriesServices.searchCountry(t).subscribe(e=>{this.countries=e}),console.log({term:t})}static \u0275fac=function(e){return new(e||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["shared-country-page"]],standalone:!1,decls:11,vars:3,consts:[[1,"list-group-item","list-group-item-action","list-group-item-secondary"],[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(e,n){e&1&&(o(0,"h2",0),a(1,"Por Pais"),i(),c(2,"hr"),o(3,"div",1)(4,"div",2)(5,"shared-search-box",3),b("onDebounce",function(S){return n.searchByCountry(S)}),i()()(),o(6,"div",1)(7,"div",2),c(8,"hr"),m(9,_e,1,0,"shared-loading-spinner",4),c(10,"countries-table",5),i()()),e&2&&(l(5),s("initialValue",n.initialValue),l(4),s("ngIf",n.isLoading),l(),s("countries",n.countries))},dependencies:[h,E,B,v],styles:["[][_ngcontent-%COMP%]{}"]})};var Ie=r=>({"btn-outline-dark":r});function Ee(r,t){if(r&1){let e=T();o(0,"button",6),b("click",function(){let g=w(e).$implicit,S=_();return R(S.searchByRegion(g))}),a(1),i()}if(r&2){let e=t.$implicit,n=_();s("ngClass",N(2,Ie,n.selectedRegion!==e)),l(),d(" ",e," ")}}var H=class r{constructor(t){this.countriesService=t}countries=[];regions=["Africa","America","Asia","Europe","Oceania"];selectedRegion;ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.countriesService.searchRegion(t).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["app-by-region-page"]],standalone:!1,decls:10,vars:2,consts:[[1,"list-group-item","list-group-item-action","list-group-item-secondary"],[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(e,n){e&1&&(o(0,"h2",0),a(1,"Por region"),i(),c(2,"hr"),o(3,"div",1)(4,"div",2),m(5,Ee,2,4,"button",3),i()(),o(6,"div",1)(7,"div",4),c(8,"hr")(9,"countries-table",5),i()()),e&2&&(l(5),s("ngForOf",n.regions),l(4),s("countries",n.countries))},dependencies:[ae,L,v],encapsulation:2})};function Pe(r,t){r&1&&(o(0,"div",6),a(1," Espere por favor "),i())}function Be(r,t){if(r&1&&(o(0,"div")(1,"div",7)(2,"div",8)(3,"h2"),a(4,"Pa\xEDs: "),o(5,"strong"),a(6),i()()()(),o(7,"div",7)(8,"div",9)(9,"h3"),a(10,"Bandera"),i(),c(11,"img",10),i(),o(12,"div",3)(13,"ul",11)(14,"li",12)(15,"strong"),a(16,"Poblaci\xF3n:"),i(),a(17),k(18,"number"),i(),o(19,"li",12)(20,"strong"),a(21,"C\xF3digo:"),i(),a(22),i(),o(23,"li",12)(24,"strong"),a(25,"Idioma:"),i(),a(26),i()()()()()),r&2){let e=_();l(6),u(e.country.name.common),l(5),s("src",e.country.flags.svg,D)("alt",e.country.name.common),l(6),d(" ",V(18,6,e.country.population)," "),l(5),d(" ",e.country.cca3," "),l(4),d(" ",e.country.languages.spa," ")}}var z=class r{constructor(t,e,n){this.activatedRoute=t;this.router=e;this.countriesService=n}country;ngOnInit(){this.activatedRoute.params.pipe(ne(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}static \u0275fac=function(e){return new(e||r)(f(ce),f(pe),f(y))};static \u0275cmp=p({type:r,selectors:[["app-country-page"]],standalone:!1,decls:26,vars:11,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"row","mt-2"],[1,"col"],[1,"d-flex","flex-wrap"],[1,"badge","bg-dark","m-1"],[1,"alert","alert-inf"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"list-group"],[1,"list-group-item"]],template:function(e,n){if(e&1&&(m(0,Pe,2,0,"ng-template",null,0,F)(2,Be,27,8,"div",1),o(3,"div",2)(4,"div",3)(5,"h3"),a(6,"Traducciones"),i(),o(7,"div",4)(8,"span",5),a(9),i(),o(10,"span",5),a(11),i(),o(12,"span",5),a(13),i(),o(14,"span",5),a(15),i(),o(16,"span",5),a(17),i(),o(18,"span",5),a(19),i(),o(20,"span",5),a(21),i(),o(22,"span",5),a(23),i(),o(24,"span",5),a(25),i()()()()),e&2){let g=I(1);l(2),s("ngIf",n.country)("ngIfElse",g),l(7),u(n.country==null||n.country.translations==null||n.country.translations.ara==null?null:n.country.translations.ara.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.bre==null?null:n.country.translations.bre.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.ces==null?null:n.country.translations.ces.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.cym==null?null:n.country.translations.cym.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.deu==null?null:n.country.translations.deu.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.est==null?null:n.country.translations.est.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.fin==null?null:n.country.translations.fin.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.kor==null?null:n.country.translations.kor.common),l(2),u(n.country==null||n.country.translations==null||n.country.translations.per==null?null:n.country.translations.per.common)}},dependencies:[h,j],encapsulation:2})};var we=[{path:"by-capital",component:U},{path:"by-country",component:q},{path:"by-region",component:H},{path:"by/:id",component:z},{path:"**",redirectTo:"by-capital"}],J=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=M({type:r});static \u0275inj=O({imports:[X.forChild(we),X]})};var fe=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=M({type:r});static \u0275inj=O({imports:[le,J,me]})};export{fe as CountriesModule};
