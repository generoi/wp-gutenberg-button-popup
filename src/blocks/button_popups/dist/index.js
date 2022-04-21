/*! For license information please see index.js.LICENSE.txt */
!function(){var e={906:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=window.wp.element,i=window.wp.i18n,c=window.wp.blocks,l=window.wp.blockEditor,a=n(184),s=n.n(a),u=window.wp.components,p=window.wp.primitives,f=(0,o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(p.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),v=(0,o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(p.Path,{d:"M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"})),w=(0,o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(p.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),b=(0,o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(p.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),d=(0,o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(p.Path,{d:"M7 8h6v4H7zm-5 5v4h4l-1.2-1.2L7 12l-3.8 2.2M14 17h4v-4l-1.2 1.2L13 12l2.2 3.8M14 3l1.3 1.3L13 8l3.8-2.2L18 7V3M6 3H2v4l1.2-1.2L7 8 4.7 4.3"}));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=["left","center","right","space-between","expand"],y={left:{icon:f,title:(0,i.__)("Justify content left")},center:{icon:v,title:(0,i.__)("Justify content center")},right:{icon:w,title:(0,i.__)("Justify content right")},"space-between":{icon:b,title:(0,i.__)("Justify space between")},expand:{icon:d,title:(0,i.__)("Expand")}},O=y.center.icon;function P(e){var t,n,r=e.onChange,c=e.allowedValues,l=void 0===c?h:c,a=e.toggleProps,s=e.value;return(0,o.createElement)(u.DropdownMenu,{icon:null!==(t=null===(n=y[s])||void 0===n?void 0:n.icon)&&void 0!==t?t:O,label:(0,i.__)("Change content justification"),controls:l.map((function(e){return m(m({},y[e]),{},{isActive:s===e,role:"menuitemradio",onClick:function(){return r(s===e?void 0:e)}})})),toggleProps:a})}var j=["genero/button-popup"],E=[["genero/button-popup"]];var x=function(e){var t=e.attributes.contentJustification,n=e.setAttributes,i=(0,l.useBlockProps)({className:s()(r({},"is-content-justification-".concat(t),t))}),c=(0,l.useInnerBlocksProps)({className:"wp-block-genero-button-popups__inner-container"},{allowedBlocks:j,template:E,templateInsertUpdatesSelection:!0});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(u.ToolbarGroup,null,(0,o.createElement)(u.ToolbarItem,null,(function(e){return(0,o.createElement)(P,{toggleProps:e,value:t,onChange:function(e){n({contentJustification:e})}})})))),(0,o.createElement)("div",i,(0,o.createElement)("div",c)))},_=JSON.parse('{"apiVersion":2,"name":"genero/button-popups","category":"design","attributes":{"contentJustification":{"type":"string"}},"supports":{"align":["wide","full"],"html":false},"editorScript":"file:../dist/index.js","editorStyle":"file:../dist/editor.css","style":"file:../dist/style.css"}');function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,c.registerBlockType)(_.name,M(M({},_),{},{title:(0,i.__)("Button Popups"),description:(0,i.__)(""),icon:"button",edit:x,save:function(){return(0,o.createElement)(l.InnerBlocks.Content,null)}}))},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===i)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n(906)}();