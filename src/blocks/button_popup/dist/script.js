!function(){var n,t={29:function(){function n(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,r){if(!n)return;if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(n,r)}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0,u=function(){};return{s:u,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function r(){var t,r=n(document.querySelectorAll("\n    .wp-block-genero-button-popup__button[aria-controls],\n    .wp-block-genero-button-popup__popup__close-button[aria-controls]\n  "));try{var e=function(){var n=t.value;n.addEventListener("click",(function(){var t,r=document.getElementById(n.getAttribute("aria-controls"));"true"===(t=r).getAttribute("aria-expanded")?function(n){n.setAttribute("aria-expanded",!1)}(t):function(n){n.setAttribute("aria-expanded",!0)}(t)}))};for(r.s();!(t=r.n()).done;)e()}catch(n){r.e(n)}finally{r.f()}var o,u=n(document.querySelectorAll(".wp-block-genero-button-popup__popup"));try{var i=function(){var n=o.value;document.body.appendChild(n),n.addEventListener("click",(function(t){t.target===n&&n.querySelector(".wp-block-genero-button-popup__popup__close-button[aria-controls]").click()}))};for(u.s();!(o=u.n()).done;)i()}catch(n){u.e(n)}finally{u.f()}}"complete"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)},256:function(){},279:function(){},346:function(){},573:function(){}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return t[n](u,u.exports,e),u.exports}e.m=t,n=[],e.O=function(t,r,o,u){if(!r){var i=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],u=n[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));a&&(n.splice(f--,1),t=o())}return t}u=u||0;for(var f=n.length;f>0&&n[f-1][2]>u;f--)n[f]=n[f-1];n[f]=[r,o,u]},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={895:0,680:0,939:0,887:0,890:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var l=c(e);for(t&&t(r);f<i.length;f++)u=i[f],e.o(n,u)&&n[u]&&n[u][0](),n[i[f]]=0;return e.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),e.O(void 0,[680,939,887,890],(function(){return e(29)})),e.O(void 0,[680,939,887,890],(function(){return e(256)})),e.O(void 0,[680,939,887,890],(function(){return e(279)})),e.O(void 0,[680,939,887,890],(function(){return e(346)}));var o=e.O(void 0,[680,939,887,890],(function(){return e(573)}));o=e.O(o)}();