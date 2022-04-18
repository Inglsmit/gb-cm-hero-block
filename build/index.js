!function(){"use strict";var e,o={552:function(){var e=window.wp.blocks;function o(){return o=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},o.apply(this,arguments)}var t=window.wp.element,l=window.wp.i18n,r=window.wp.blockEditor,c=window.wp.data,a=window.wp.blob,n=window.wp.components;(0,e.registerBlockType)("cm-block/hero-block",{edit:function(e){let{attributes:i,setAttributes:s}=e;const{id:p,url:m,alt:d,type:u,posterID:b,posterURL:k}=i,v=e=>{e&&e.url?s({url:e.url,id:e.id,alt:e.alt,type:e.type,posterID:0,posterURL:""}):s({url:void 0,id:void 0,alt:"",type:"",posterID:0,posterURL:""})},h=(0,c.useSelect)((e=>{const{getMedia:o}=e("core");return p?o(p):null}),[p]),_=(0,c.useSelect)((e=>e(r.store).getSettings().imageSizes),[]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Image Settings","hero-block")},p&&(0,t.createElement)(n.SelectControl,{label:(0,l.__)("Image Size","hero-block"),options:(()=>{if(!h)return[];const e=[],o=h.media_details.sizes;for(const t in o){const l=o[t],r=_.find((e=>e.slug===t));r&&e.push({label:r.name,value:l.source_url})}return e})(),value:m,onChange:e=>{s({url:e})}}),m&&!(0,a.isBlobURL)(m)&&(0,t.createElement)(n.TextareaControl,{label:(0,l.__)("Alt Text","hero-block"),value:d,onChange:e=>{s({alt:e})},help:(0,l.__)("Alternative text describes your image to people can't see it. Add a short description with its key details.","hero-block")}),m&&"video"===u&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.MediaUploadCheck,null,(0,t.createElement)(r.MediaUpload,{onSelect:e=>{e&&e.url?s({posterURL:e.url,posterID:e.id}):s({posterURL:"",posterID:0})},allowedTypes:["image"],value:b,render:e=>{let{open:o}=e;return(0,t.createElement)(n.Button,{className:0===b?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:o},0===b&&(0,l.__)("Set poster image","hero-block"),void 0!==k&&(0,t.createElement)("img",{alt:"",src:k}))}})),0!==b&&(0,t.createElement)(r.MediaUploadCheck,null,(0,t.createElement)(n.Button,{onClick:()=>{s({posterURL:"",posterID:0})},isDestructive:!0},(0,l.__)("Remove poster","hero-block")))))),m&&(0,t.createElement)(r.BlockControls,{group:"inline"},(0,t.createElement)(r.MediaReplaceFlow,{name:(0,l.__)("Replace Media","hero-block"),onSelect:v,onError:e=>console.log(e),accept:"image/*, video/*",allowedTypes:["image","video"],mediaId:p,mediaURL:m}),(0,t.createElement)(n.ToolbarButton,{onClick:()=>{s({url:void 0,alt:"",id:void 0,type:"",posterID:0,posterURL:""})}},(0,l.__)("Remove Media","hero-block"))),(0,t.createElement)("div",o({},(0,r.useBlockProps)(),{"data-align":"full"}),(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__holder"},m&&(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__media-wrap"+((0,a.isBlobURL)(m)?" is-loading":"")},"image"===u?(0,t.createElement)("img",{className:"wp-block-cm-block-hero-block__img",src:m,alt:d}):(0,t.createElement)("video",{autoPlay:!0,muted:!0,loop:!0,className:"wp-block-cm-block-hero-block__video",src:m}),(0,a.isBlobURL)(m)&&(0,t.createElement)(n.Spinner,null)),(0,t.createElement)(r.MediaPlaceholder,{icon:"admin-users",onSelect:v,onError:e=>console.log(e),accept:"image/*, video/*",allowedTypes:["image","video"],disableMediaButtons:m}),m&&(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__inner-block"},(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__container"},(0,t.createElement)(r.InnerBlocks,{template:[["core/heading",{placeholder:"Title"}],["core/paragraph",{placeholder:"Description"}],["core/button",{placeholder:"Link"}]],templateLock:"all"}))))))},save:function(e){let{attributes:o}=e;const{id:l,url:c,alt:a,type:n,posterID:i,posterURL:s}=o;return(0,t.createElement)("div",r.useBlockProps.save({className:" alignfull"}),c&&(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__holder"},(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__media-wrap"},"image"===n?(0,t.createElement)("img",{src:c,alt:a,className:l?`wp-block-cm-block-hero-block__img wp-image-${l}`:null}):(0,t.createElement)("video",{autoPlay:!0,muted:!0,loop:!0,poster:s,src:c,className:l?`wp-block-cm-block-hero-block__video wp-video-${l}`:null})),(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__inner-block"},(0,t.createElement)("div",{className:"wp-block-cm-block-hero-block__container"},(0,t.createElement)(r.InnerBlocks.Content,null)))))}})}},t={};function l(e){var r=t[e];if(void 0!==r)return r.exports;var c=t[e]={exports:{}};return o[e](c,c.exports,l),c.exports}l.m=o,e=[],l.O=function(o,t,r,c){if(!t){var a=1/0;for(p=0;p<e.length;p++){t=e[p][0],r=e[p][1],c=e[p][2];for(var n=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(l.O).every((function(e){return l.O[e](t[i])}))?t.splice(i--,1):(n=!1,c<a&&(a=c));if(n){e.splice(p--,1);var s=r();void 0!==s&&(o=s)}}return o}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[t,r,c]},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={826:0,46:0};l.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,c,a=t[0],n=t[1],i=t[2],s=0;if(a.some((function(o){return 0!==e[o]}))){for(r in n)l.o(n,r)&&(l.m[r]=n[r]);if(i)var p=i(l)}for(o&&o(t);s<a.length;s++)c=a[s],l.o(e,c)&&e[c]&&e[c][0](),e[a[s]]=0;return l.O(p)},t=self.webpackChunkhero_block=self.webpackChunkhero_block||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var r=l.O(void 0,[46],(function(){return l(552)}));r=l.O(r)}();