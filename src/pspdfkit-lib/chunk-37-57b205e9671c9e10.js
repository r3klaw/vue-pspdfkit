/*!
 * PSPDFKit for Web 2019.4.0 (https://pspdfkit.com/web)
 * 
 * Copyright (c) 2016-2019 PSPDFKit GmbH. All rights reserved.
 * 
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 * 
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(window.__PSPDFKitChunk=window.__PSPDFKitChunk||[]).push([[37],{899:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(31),l=a.n(o),i=a(17),c=a.n(i),s=a(23),d=a.n(s),u=a(16),p=a.n(u),g=a(32),m=a.n(g),f=a(33),b=a.n(f),v=a(445),h=a(14),y=a(3),P=a(177),w=a(34),I=a(24),x=a(87),k=a(5),N=a(2),E=a(37),S=a(0),O=a(13),C=a.n(O),M=a(15),D=a(446),j=a(45),A=a(101),z=a(215),B=new N.M({width:h.b,height:h.a}),R=S.createElement(A.a,null),T=function(e){var t=e.styles,r=e.formatMessage;return S.createElement("div",{style:{width:e.width,height:e.height},className:t.importedDocument},S.createElement("div",{className:t.importedDocumentIconCircle},S.createElement(j.a,{src:a(471)})),S.createElement("span",{className:t.importedDocumentInfo},r(F.documentMergedHere)))},L=function(e,t,a){var r=e.map(function(e){return{type:"page",page:e,rotation:0,label:e.pageLabel}}),n=function(e){var t=e.dupeOf||e.label,a=0,n=!0,o=!1,l=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var s=i.value;null!=s.dupeOf&&s.dupeOf===t&&null!=s.dupeNumber&&s.dupeNumber>a&&(a=s.dupeNumber)}}catch(e){o=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw l}}return a+1},o=!0,l=!1,i=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var d=c.value;switch(d.type){case"addPage":var u=void 0;null!=d.afterPageIndex?u=d.afterPageIndex+1:(Object(y.h)(null!=d.beforePageIndex),u=d.beforePageIndex),r=r.insert(u,{type:"newPage",label:a(F.newPage),rotation:0,size:new N.M({width:d.pageWidth,height:d.pageHeight})});break;case"removePages":var g=d.pageIndexes.map(function(e){return r.get(e)}),m=!0,f=!1,b=void 0;try{for(var v,h=g[Symbol.iterator]();!(m=(v=h.next()).done);m=!0){var P=v.value;Object(y.h)(null!=P);var w=r.indexOf(P);r=r.delete(w)}}catch(e){f=!0,b=e}finally{try{m||null==h.return||h.return()}finally{if(f)throw b}}break;case"rotatePages":var I=!0,x=!1,k=void 0;try{for(var E,S=d.pageIndexes[Symbol.iterator]();!(I=(E=S.next()).done);I=!0){var O=E.value,C=r.get(O);Object(y.h)(null!=C);var M=void 0,D=void 0;Object(y.h)("page"===C.type||"newPage"===C.type);var j=C.rotation;if(D=90===d.rotateBy?270===j?0:j+d.rotateBy:90===j?0:180===j?90:270===j?180:j+d.rotateBy,Object(y.h)(0===D||90===D||180===D||270===D),"page"===C.type)M=p()({},C,{rotation:D});else{if("newPage"!=C.type)throw new y.a("Rotation is not allowed on imported documents");M=p()({},C,{rotation:D})}r=r.set(O,M)}}catch(e){x=!0,k=e}finally{try{I||null==S.return||S.return()}finally{if(x)throw k}}break;case"duplicatePages":var A=d.pageIndexes.map(function(e){return r.get(e)}),z=!0,B=!1,R=void 0;try{for(var T,L=A[Symbol.iterator]();!(z=(T=L.next()).done);z=!0){var H=T.value;Object(y.h)(null!=H),Object(y.h)("page"===H.type);var _=n(H),V=H.dupeOf||H.label,W=r.indexOf(H);r=r.insert(W+1,Object.assign({},H,{label:"".concat(V," (").concat(_,")"),dupeOf:V,dupeNumber:_}))}}catch(e){B=!0,R=e}finally{try{z||null==L.return||L.return()}finally{if(B)throw R}}break;case"movePages":var K=d.pageIndexes[0],G=void 0;null!=d.beforePageIndex?G=d.beforePageIndex:(Object(y.h)(null!=d.afterPageIndex),G=d.afterPageIndex+1);var Y=r.get(K);r=r.delete(K),Object(y.h)(null!=Y),r=r.insert(G,Y);break;case"importDocument":var q=void 0;null!=d.beforePageIndex?q=d.beforePageIndex:(Object(y.h)(null!=d.afterPageIndex),q=d.afterPageIndex+1),Object(y.h)("string"==typeof d.document.name);var U=d.document.name;r=r.insert(q,{type:"importedDocument",label:U});break;case"keepPages":throw Error("Unknown document operation");default:Object(y.b)(d.type)}}}catch(e){l=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(l)throw i}}return r};t.default=Object(I.e)(function(e){var t,r,o=e.onCancel,i=e.pages,s=e.dispatch,u=e.backend,g=e.frameWindow,f=e.intl.formatMessage,I=e.CSS_HACK.styles,O=S.useState(Object(k.a)()),A=b()(O,2),H=A[0],_=A[1],V=S.useState(0),W=b()(V,2),K=W[0],G=W[1],Y=H.slice(0,H.size-K),q=L(e.pages,Y,f),U=S.useState(Object(k.g)()),J=b()(U,2),Q=J[0],X=J[1],Z=S.useState(!1),$=b()(Z,2),ee=$[0],te=$[1],ae=S.useState(!1),re=b()(ae,2),ne=re[0],oe=re[1],le=S.useCallback(function(e){_(Y.push(e)),G(0)},[Y]),ie=S.useRef(!0);S.useLayoutEffect(function(){return function(){ie.current&&(ie.current=!1)}},[]);var ce=S.useCallback(function(){var e=i.get(0),t=e?e.pageSize:B,a={type:"addPage",backgroundColor:N.j.WHITE,pageWidth:t.width,pageHeight:t.height,rotateBy:0};1===Q.size?a.afterPageIndex=Q.first():a.beforePageIndex=0,le(a),X(Q.clear())},[i,Q,le]),se=S.useCallback(function(){le({type:"removePages",pageIndexes:Q.toArray()}),X(Q.clear())},[le,Q]),de=S.useCallback(function(){le({type:"duplicatePages",pageIndexes:Q.toArray()}),X(Q.clear())},[le,Q]),ue=S.useCallback(function(){le({type:"rotatePages",pageIndexes:Q.toArray(),rotateBy:270})},[le,Q]),pe=S.useCallback(function(){le({type:"rotatePages",pageIndexes:Q.toArray(),rotateBy:90})},[le,Q]),ge=S.useCallback(function(){var e=Y,t=!0,a=!1,r=void 0;try{for(var n,o=Q.sort()[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var l=n.value;e=e.push({type:"movePages",pageIndexes:[l],beforePageIndex:l-1})}}catch(e){a=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}_(e),G(0),X(Object(k.g)(Q.toArray().map(function(e){return e-1})))},[Q,Y]),me=S.useCallback(function(){var e=Y,t=!0,a=!1,r=void 0;try{for(var n,o=Q.sort().reverse()[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var l=n.value;e=e.push({type:"movePages",pageIndexes:[l],afterPageIndex:l})}}catch(e){a=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}_(e),G(0),X(Object(k.g)(Q.toArray().map(function(e){return e+1})))},[Q,Y]),fe=S.useCallback(function(){X(Q.clear()),G(K+1)},[Q,K]),be=S.useCallback(function(){X(Q.clear()),G(K-1)},[Q,K]),ve=S.useCallback(function(){var e=document.createElement("input");e.type="file",e.accept="application/pdf",e.onchange=function(e){if(0!==e.target.files.length){var t={};1===Q.size?t.afterPageIndex=Q.first():t.beforePageIndex=0;var a=Y,r=!0,n=!1,o=void 0;try{for(var l,i=function(){var e=l.value;return"string"!=typeof e.name||0===e.name.length?{v:void 0}:"application/pdf"!==e.type?(window.alert("The uploaded file must be a PDF."),{v:void 0}):-1!==q.findIndex(function(t){return"importedDocument"===t.type&&t.label===e.name})?{v:void 0}:void(a=a.push(p()({type:"importDocument",treatImportedDocumentAsOnePage:!0,document:e},t)))},c=e.target.files[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=i();if("object"===m()(s))return s.v}}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}_(a),G(0),X(Q.clear())}},e.click()},[Q,Y,q]),he=S.useCallback(function(){X(q.keySeq().toSet())},[q,X]),ye=S.useCallback(function(){X(Q.clear())},[Q,X]),Pe=S.useCallback(function(e){Q.has(e)?X(Q.delete(e)):X(Q.add(e))},[Q,X]),we=S.useCallback(function(){o()},[o]),Ie=S.useCallback(function(){te(!0),s(Object(P.a)(Y.toArray(),function(){ie.current&&te(!1)},function(e){throw ie.current&&te(!1),e}))},[s,Y]),xe=S.useCallback(d()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return te(!0),e.prev=1,e.next=4,u.exportPDFWithOperations(Y.toArray().map(E.k));case 4:t=e.sent,Object(x.c)(t,g),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:return e.prev=11,ie.current&&te(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[1,8,11,14]])})),[u,Y,g]),ke=Q.size>0&&void 0===Q.find(function(e){var t=q.get(e);return Object(y.h)(null!=t),"page"!==t.type&&"newPage"!==t.type}),Ne=Q.size>0&&void 0===Q.find(function(e){var t=q.get(e);return Object(y.h)(null!=t),"page"!==t.type}),Ee=!Q.isEmpty()&&!Q.includes(0),Se=!Q.isEmpty()&&!Q.includes(q.size-1),Oe=K<H.size,Ce=K>0,Me=I.toolbar.toolbarButton,De=S.useMemo(function(){return[{type:"editor/add",onPress:ce,className:Me,disabled:ee,children:f(F.newPage)},{type:"editor/remove",onPress:se,className:Me,disabled:0===Q.size||Q.size===q.size||ee,children:f(F.removePage)},{type:"editor/duplicate",onPress:de,className:Me,children:f(F.duplicatePage),disabled:!Ne||ee},{type:"editor/rotateLeft",onPress:ue,className:Me,children:f(F.rotatePageLeft),disabled:!ke||ee},{type:"editor/rotateRight",onPress:pe,className:Me,children:f(F.rotatePageRight),disabled:!ke||ee},{type:"editor/moveLeft",onPress:ge,className:I.toolbar.toolbarButton,children:f(F.moveBefore),disabled:!Ee||ee},{type:"editor/moveRight",onPress:me,className:I.toolbar.toolbarButton,children:f(F.moveAfter),disabled:!Se||ee},{type:"editor/merge",onPress:ve,className:Me,children:f(F.mergeDocument),disabled:ee},{type:"spacer"},{type:"editor/undo",onPress:fe,className:I.toolbar.toolbarButton,children:f(M.a.undo),disabled:!Oe||ee},{type:"editor/redo",onPress:be,className:I.toolbar.toolbarButton,children:f(M.a.redo),disabled:!Ce||ee},{type:"editor/selectAll",onPress:he,className:Me,children:f(F.selectAll),disabled:Q.size===q.size||ee},{type:"editor/selectNone",onPress:ye,className:Me,children:f(F.selectNone),disabled:Q.isEmpty()||ee}]},[ce,Me,ee,f,se,Q,q.size,de,Ne,ue,ke,pe,ge,I.toolbar.toolbarButton,Ee,me,Se,ve,fe,Oe,be,Ce,he,ye]),je=S.useState(Number.POSITIVE_INFINITY),Ae=b()(je,2),ze=Ae[0],Be=Ae[1],Re=S.useMemo(function(){return ze===Number.POSITIVE_INFINITY?[De,[]]:[De.slice(0,ze),De.slice(ze).filter(function(e){return"spacer"!==e.type}).map(function(e){return{item:p()({},e,{dropdownGroup:"documentEditor"})}})]},[De,ze]),Te=b()(Re,2),Le=Te[0],Fe=Te[1],He=S.useState(new N.M),_e=b()(He,2),Ve=_e[0],We=_e[1],Ke=S.useCallback(function(e){Be(Number.POSITIVE_INFINITY),We(new N.M({width:e.width,height:e.height}))},[We,Be]),Ge=S.useRef(null);S.useLayoutEffect(function(){var e=Ge.current;if(e&&0!==Ve.width){var t=e.children;if(t.length!==ze){var a=e.ownerDocument.defaultView.getComputedStyle(e),r=44+(parseInt(a.getPropertyValue("padding-left"))||0)+(parseInt(a.getPropertyValue("padding-right"))||0),n=[].findIndex.call(t,function(e,t){return"spacer"!==De[t].type&&(r+=e.clientWidth)>Ve.width});Be(-1===n?Number.POSITIVE_INFINITY:n),e.ownerDocument.defaultView.innerWidth>=h.e?oe(!0):oe(!1)}}},[Ve,ze,Be,De]);var Ye=e.CSS_HACK.components,qe=Ye.ToolbarButtonComponent,Ue=Ye.ToolbarDropdownGroupComponent;return S.createElement("div",{className:C()(I.docEditor,"PSPDFKit-DocumentEditor")},S.createElement("div",{className:I.toolbar.root,style:{flex:0}},S.createElement("div",{ref:Ge,className:I.toolbarContainer},Le.map(function(e,t){return"spacer"===e.type?S.createElement("div",{style:{flex:1},key:"spacer-".concat(t)}):S.createElement(qe,l()({},e,{key:e.type}))})),Fe.length>0&&S.createElement(S.Fragment,null,S.createElement("div",{style:{flex:1},key:"spacer-responsive"}),S.createElement(Ue,{icon:{type:"more",size:{width:20,height:20}},items:Fe,discreteDropdown:!0,ItemComponent:function(e){var t=e.item;return e.isSelectedItem?null:S.createElement(qe,l()({},t.item,{key:t.type,className:C()(t.item.className,I.toolbar.dropdownButton)}))}}))),S.createElement("div",{className:I.pagesView},S.createElement(z.a,{onResize:Ke}),S.createElement("div",{className:C()((t={},n()(t,I.pagesGrid,!0),n()(t,I.pagesGridLargeThumbnails,ne),t))},S.createElement(D.a,{totalItems:q.size,width:Ve.width,height:Ve.height,itemScale:e.scale,renderItemCallback:function(e,t,a){var r,n=q.get(e);switch(Object(y.h)(null!=n),n.type){case"page":r=S.createElement(v.b,{key:"page-".concat(n.label),page:n.page,size:t,maxSize:a,rotation:n.rotation});break;case"newPage":var o=Object(v.a)(n.size,n.rotation,t,a),l=o.rotatedWidth,i=o.rotatedHeight;r=S.createElement("div",{key:"newPage-".concat(n.label),style:{width:l,height:i}});break;case"importedDocument":var c=Object(v.a)(B,0,t,a),s=c.containerWidth,d=c.containerHeight;r=S.createElement(T,{width:s,height:d,key:"importedDoc-".concat(n.label),styles:I,formatMessage:f});break;default:Object(y.b)(n.type)}return{item:r,label:n.label}},onItemPress:Pe,selectedItemIndexes:Q,cssPrefix:"PSPDFKit-DocumentEditor"}))),S.createElement("div",{className:I.bottomBar},S.createElement(w.b,{onClick:we},f(M.a.cancel)),S.createElement("div",{className:C()((r={},n()(r,I.pagesSelectedIndicator,!0),n()(r,I.pagesSelectedIndicatorShown,Q.size>0),r))},S.createElement("div",{className:I.pagesSelectedIcon},S.createElement(j.a,{src:a(472)})),f(F.pagesSelected,{arg0:Q.size})),S.createElement("div",{className:I.spacer}),ee&&R,S.createElement(w.b,{disabled:ee,onClick:xe},f(F.saveAs)),S.createElement(w.b,{primary:!0,disabled:Y.isEmpty()||ee,onClick:Ie},f(M.a.save))))});var F=Object(I.d)({newPage:{id:"newPage",defaultMessage:"New Page",description:"Add new page"},removePage:{id:"removePage",defaultMessage:"Remove Page",description:"Remove page"},duplicatePage:{id:"duplicatePage",defaultMessage:"Duplicate Page",description:"Duplicate page"},rotatePageLeft:{id:"rotatePageLeft",defaultMessage:"Rotate Page Left",description:"Rotate Page Left"},rotatePageRight:{id:"rotatePageRight",defaultMessage:"Rotate Page Right",description:"Rotate Page Right"},mergeDocument:{id:"mergeDocument",defaultMessage:"Merge Document",description:"Merge Document"},selectAll:{id:"selectAll",defaultMessage:"Select All",description:"Select All Pages"},selectNone:{id:"selectNone",defaultMessage:"Select None",description:"Deselect All Pages"},saveAs:{id:"saveAs",defaultMessage:"Export Modified Document",description:"Save Modified Document Locally"},moveBefore:{id:"moveBefore",defaultMessage:"Move Before",description:"Move page before previous one"},moveAfter:{id:"moveAfter",defaultMessage:"Move After",description:"Move page after next one"},documentMergedHere:{id:"documentMergedHere",defaultMessage:"Document will be merged here",description:"Placeholder for the imported document"},save:{id:"save",defaultMessage:"Apply Modifications",description:"Apply Modifications to the current Document"},pagesSelected:{id:"pagesSelected",defaultMessage:"{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",description:"Number of pages selected."}})}}]);