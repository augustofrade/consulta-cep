(this["webpackJsonpconsulta-cep"]=this["webpackJsonpconsulta-cep"]||[]).push([[0],{14:function(e,a,t){e.exports=t(37)},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c),l=t(2),i=t(13),u=t.n(i),s=function(e){return r.a.createElement("div",{className:"full-cntr",id:"info-cntr"},r.a.createElement("span",{id:"info-box"},r.a.createElement("p",{className:"cep-info"},"Logradouro: ",e.logradouro),r.a.createElement("p",{className:"cep-info"},"Bairro: ",e.bairro),r.a.createElement("p",{className:"cep-info"},"Cidade: ",e.localidade),r.a.createElement("p",{className:"cep-info"},"Estado: ",e.uf)))},m=function(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)({}),m=Object(l.a)(i,2),d=m[0],p=m[1];return r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"cep-container"},r.a.createElement("div",{id:"cep-form"},r.a.createElement("h1",{className:"display-3"},"Consulta de CEP"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:c,className:"form-control",placeholder:"CEP",onChange:function(e){return o(e.target.value)}})),r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e=c,void u.a.get("https://viacep.com.br/ws/".concat(e.trim(),"/json/")).catch((function(e){return e.response?{data:{erro:"N\xe3o foi poss\xedvel conectar \xe0 API"}}:e.request?{data:{erro:"CEP inv\xe1lido"}}:{data:{erro:"Algo inesperado ocorreu"}}})).then((function(e){var a=e.data;if(a.erro)return a.erro=!0===a.erro?"CEP Inv\xe1lido":a.erro,void alert(a.erro);p(a)}));var e}},"Consultar")),d.cep&&r.a.createElement(s,d)))},d=function(){return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("p",null,"Esta aplica\xe7\xe3o foi feita em React para fins de estudo."),r.a.createElement("p",null,"A API utilizada foi a ",r.a.createElement("b",null,r.a.createElement("a",{href:"https://viacep.com.br",target:"_blank"},"ViaCEP")))))};t(36);function p(){return r.a.createElement("div",{id:"app"},r.a.createElement(m,null),r.a.createElement(d,null))}o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.69bff043.chunk.js.map