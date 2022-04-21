!function(){"use strict";(function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t=window.wp.element,n=window.wp.i18n,r=window.wp.blocks,o=window.wp.blockEditor;function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=window.wp.hooks,l=window.wp.components,p=[["core/columns",{align:"full"},[["core/column",{},[["core/image"],["core/group"]]],["core/column",{},[["core/heading"],["core/paragraph"],["core/list"]]]]]];var u=function(e){var r=e.name,c=e.attributes,u=e.setAttributes,s=c.text,m="wp-block-".concat(r.replace("/","-")),d=a((0,t.useState)(!1),2),f=d[0],b=d[1],y=function(){b(!f)},g=(0,o.useBlockProps)(),w=(0,o.useInnerBlocksProps)({className:"".concat(m,"__popup__content")},{template:(0,i.applyFilters)("wp-gutenberg-button-popup.popupTemplate",p),templateInsertUpdatesSelection:!1});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",g,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(l.ToolbarGroup,null,(0,t.createElement)(l.ToolbarButton,{onClick:y},f?"Close popup":"Open popup "))),(0,t.createElement)(o.RichText,{placeholder:(0,n.__)("Add text…"),tagName:"button",value:s,onChange:function(e){return u({text:e})},withoutInteractiveFormatting:!0,className:"".concat(m,"__button")}),f&&(0,t.createElement)("div",{"aria-expanded":f?"true":"false",className:"".concat(m,"__popup")},(0,t.createElement)("div",{className:"".concat(m,"__popup__inner-container")},(0,t.createElement)("div",{className:"".concat(m,"__popup__header")},(0,t.createElement)(o.RichText,{placeholder:(0,n.__)("Add text…"),tagName:"span",value:s,onChange:function(e){return u({text:e})},withoutInteractiveFormatting:!0,className:"".concat(m,"__popup__title")}),(0,t.createElement)("button",{onClick:y,className:"".concat(m,"__popup__close-button")},"Close")),(0,t.createElement)("div",w)))))},s=JSON.parse('{"apiVersion":2,"name":"genero/button-popup","category":"design","attributes":{"text":{"type":"string"},"iconId":{"type":"number"},"iconUrl":{"type":"string"}},"parent":["genero/button-popups"],"supports":{"align":true,"alignWide":false,"color":{},"html":false},"editorScript":"file:../dist/index.js","script":"file:../dist/script.js","editorStyle":"file:../dist/editor.css","style":"file:../dist/style.css"}');function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}(0,r.registerBlockType)(s.name,d(d({},s),{},{title:(0,n.__)("Button Popup"),description:(0,n.__)(""),icon:"button",edit:u,save:function(){return(0,t.createElement)(o.InnerBlocks.Content,null)}}))})()}();