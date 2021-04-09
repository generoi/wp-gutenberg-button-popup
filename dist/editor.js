/*! For license information please see editor.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=15)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"genero/button-popup","category":"design","attributes":{"text":{"type":"string"},"iconId":{"type":"number"},"iconUrl":{"type":"string"}},"parent":["genero/button-popups"],"supports":{"align":true,"alignWide":false,"color":{},"html":false}}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"genero/button-popups","category":"design","attributes":{"contentJustification":{"type":"string"}},"supports":{"align":["wide","full"],"html":false}}')},function(e,t,n){var r=n(16),o=n(17),c=n(18),i=n(20);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.hooks},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===c)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},,,,function(e,t,n){e.exports=n(21)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),c=n(0),i=n(1),l=n(6),a=n(3),u=n(9),p=n.n(u),s=n(10),b=n(5),f=[["core/columns",{align:"full"},[["core/column",{},[["core/image"],["core/group"]]],["core/column",{},[["core/heading"],["core/paragraph"],["core/list"],["core/buttons"]]]]]];var O=function(e){var t=e.name,n=e.attributes,r=e.setAttributes,o=n.text,l="wp-block-".concat(t.replace("/","-")),u=Object(c.useState)(!1),O=p()(u,2),m=O[0],d=O[1],j=function(){d(!m)},v=Object(a.useBlockProps)(),g=Object(a.__experimentalUseInnerBlocksProps)({className:"".concat(l,"__popup__content")},{template:Object(s.applyFilters)("wp-gutenberg-button-popup.popupTemplate",f),templateInsertUpdatesSelection:!1});return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",v,Object(c.createElement)(a.BlockControls,null,Object(c.createElement)(b.ToolbarGroup,null,Object(c.createElement)(b.ToolbarButton,{onClick:j},m?"Close popup":"Open popup "))),Object(c.createElement)(a.RichText,{placeholder:Object(i.__)("Add text…"),tagName:"button",value:o,onChange:function(e){return r({text:e})},withoutInteractiveFormatting:!0,className:"".concat(l,"__button")}),m&&Object(c.createElement)("div",{"aria-expanded":m?"true":"false",className:"".concat(l,"__popup")},Object(c.createElement)("div",{className:"".concat(l,"__popup__inner-container")},Object(c.createElement)("div",{className:"".concat(l,"__popup__header")},Object(c.createElement)(a.RichText,{placeholder:Object(i.__)("Add text…"),tagName:"span",value:o,onChange:function(e){return r({text:e})},withoutInteractiveFormatting:!0,className:"".concat(l,"__popup__title")}),Object(c.createElement)("button",{onClick:j,className:"".concat(l,"__popup__close-button")},"Close")),Object(c.createElement)("div",g)))))},m=n(7);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(l.registerBlockType)(m.name,j(j({},m),{},{title:Object(i.__)("Button Popup"),description:Object(i.__)(""),icon:"button",edit:O,save:function(){return Object(c.createElement)(a.InnerBlocks.Content,null)}}));var v=n(11),g=n.n(v),w=n(2),y=Object(c.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(w.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),_=Object(c.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(w.Path,{d:"M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"})),h=Object(c.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(w.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),x=Object(c.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(w.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),P=Object(c.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(c.createElement)(w.Path,{d:"M7 8h6v4H7zm-5 5v4h4l-1.2-1.2L7 12l-3.8 2.2M14 17h4v-4l-1.2 1.2L13 12l2.2 3.8M14 3l1.3 1.3L13 8l3.8-2.2L18 7V3M6 3H2v4l1.2-1.2L7 8 4.7 4.3"}));function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=["left","center","right","space-between","expand"],k={left:{icon:y,title:Object(i.__)("Justify content left")},center:{icon:_,title:Object(i.__)("Justify content center")},right:{icon:h,title:Object(i.__)("Justify content right")},"space-between":{icon:x,title:Object(i.__)("Justify space between")},expand:{icon:P,title:Object(i.__)("Expand")}},B=k.center.icon;function V(e){var t,n,r=e.onChange,o=e.allowedValues,l=void 0===o?M:o,a=e.toggleProps,u=e.value;return Object(c.createElement)(b.DropdownMenu,{icon:null!==(t=null===(n=k[u])||void 0===n?void 0:n.icon)&&void 0!==t?t:B,label:Object(i.__)("Change content justification"),controls:l.map((function(e){return S(S({},k[e]),{},{isActive:u===e,role:"menuitemradio",onClick:function(){return r(u===e?void 0:e)}})})),toggleProps:a})}var C=["genero/button-popup"],A=[["genero/button-popup"]];var D=function(e){var t=e.attributes.contentJustification,n=e.setAttributes,r=Object(a.useBlockProps)({className:g()(o()({},"is-content-justification-".concat(t),t))}),i=Object(a.__experimentalUseInnerBlocksProps)({className:"wp-block-genero-button-popups__inner-container"},{allowedBlocks:C,template:A,templateInsertUpdatesSelection:!0});return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.BlockControls,null,Object(c.createElement)(b.ToolbarGroup,null,Object(c.createElement)(b.ToolbarItem,null,(function(e){return Object(c.createElement)(V,{toggleProps:e,value:t,onChange:function(e){n({contentJustification:e})}})})))),Object(c.createElement)("div",r,Object(c.createElement)("div",i)))},I=n(8);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(l.registerBlockType)(I.name,T(T({},I),{},{title:Object(i.__)("Button Popups"),description:Object(i.__)(""),icon:"button",edit:D,save:function(){return Object(c.createElement)(a.InnerBlocks.Content,null)}}))}]);