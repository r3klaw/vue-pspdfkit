/*!
 * PSPDFKit for Web 2019.3.1 (https://pspdfkit.com/web)
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
(window.__PSPDFKitChunk=window.__PSPDFKitChunk||[]).push([[5],{831:function(t,e,n){"use strict";n.r(e);var a=n(27),r=n.n(a),o=n(57),i=n.n(o),s=n(16),c=n.n(s),u=n(22),l=n.n(u),d=n(6),h=n.n(d),f=n(10),k=n.n(f),p=n(34),v=n(84),m=n(201),b=n(300),y=n(3),w=n(5),P=n(8),x=n.n(P),F=n(7),_=n.n(F),j=n(9),O=n.n(j),L=function(t){function e(){return h()(this,e),x()(this,_()(e).apply(this,arguments))}return O()(e,t),e}(Object(w.e)({alreadyLoadedPages:Object(w.b)(),serverURL:null,authPayload:null,isLoaded:!1,isFormsEnabled:!0,loadBookmarksPromise:null}));n.d(e,"RESTProvider",function(){return g});var g=function(){function t(e,n,a){var r=a.isFormsEnabled;h()(this,t),this.state=new L({serverURL:e,authPayload:n,isFormsEnabled:r})}return k()(t,[{key:"load",value:function(){var t=l()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state=this.state.set("isLoaded",!0),!this.state.isFormsEnabled){t.next=4;break}return t.next=4,this._initializeFormFieldValues();case 4:return t.abrupt("return",this);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"destroy",value:function(){}},{key:"setAnnotationCallbacks",value:function(t){this.annotationCallbacks=t}},{key:"setBookmarkCallbacks",value:function(t){this.bookmarkCallbacks=t}},{key:"setFormFieldValueCallbacks",value:function(t){this.formFieldValueCallbacks=t}},{key:"createAnnotation",value:function(){var t=l()(c.a.mark(function t(e,n){var a,r,o,s,u=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),a=Object(p.i)(e),r=a.id,o=i()(a,["id"]),s={id:r,content:o},t.next=5,this._request("/annotations","POST",s).then(function(t){if(200!==t.status)throw new y.a("PSPDFKit Server returned an error, when saving an annotation.");t.json().then(function(t){if("attachment_missing"===t.error){var e=E(s,n);return u._request("/annotations","POST",e).then(function(t){return t.json()})}return t})});case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"updateAnnotation",value:function(){var t=l()(c.a.mark(function t(e){var n,a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),n=Object(p.i)(e),a=n.id,r=i()(n,["id"]),t.next=4,this._request("/annotations/".concat(a),"PUT",{id:a,content:r});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"deleteAnnotation",value:function(){var t=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),t.next=3,this._request("/annotations/".concat(e),"DELETE");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"createBookmark",value:function(){var t=l()(c.a.mark(function t(e){var n,a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),t.next=3,this.loadBookmarks();case 3:return n=Object(v.b)(e),a=n.id,r=i()(n,["id"]),t.next=6,this._request("/bookmarks","POST",{id:a,content:r});case 6:if(200===t.sent.status){t.next=9;break}throw new y.a("PSPDFKit Server returned an error, when saving an bookmark.");case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateBookmark",value:function(){var t=l()(c.a.mark(function t(e){var n,a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),t.next=3,this.loadBookmarks();case 3:return n=Object(v.b)(e),a=n.id,r=i()(n,["id"]),t.next=6,this._request("/bookmarks/".concat(a),"PUT",{id:a,content:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"deleteBookmark",value:function(){var t=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),t.next=3,this.loadBookmarks();case 3:return t.next=5,this._request("/bookmarks/".concat(e),"DELETE");case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"setFormFieldValue",value:function(){var t=l()(c.a.mark(function t(e){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._verifyLoaded(),n={id:"form-field-value/".concat(e.name),content:Object(p.k)(e)},t.next=4,this._request("/form-field-values","POST",{formFieldValues:[n]});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"createFormFieldValue",value:function(){var t=l()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"deleteFormFieldValue",value:function(){var t=l()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"loadAnnotationsForPageIndex",value:function(){var t=l()(c.a.mark(function t(e){var n,a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this._verifyLoaded(),!this.state.alreadyLoadedPages.has(e)){t.next=5;break}return t.next=4,this.state.alreadyLoadedPages.get(e);case 4:return t.abrupt("return");case 5:return t.prev=5,n=this._request("/page-".concat(e,"-annotations"),"GET").then(function(t){return t.json()}).catch(function(t){throw t}),this.state=this.state.setIn(["alreadyLoadedPages",e],n),t.next=10,n;case 10:a=t.sent,this.state=this.state.setIn(["alreadyLoadedPages",e],Promise.resolve()),(r=Object(w.a)().withMutations(function(t){a.annotations.map(function(e){try{t.push(Object(p.b)(e.id,e.content))}catch(t){console.info("Skipped creating annotation #".concat(e.id," from payload because an error occurred while deserializing."),e.content),console.info(t)}})})).size>0&&(Object(y.h)(this.annotationCallbacks),this.annotationCallbacks.createAnnotations(r,Object(w.b)(),m.a)),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),this._handleError(t.t0,"annotations");case 19:case"end":return t.stop()}},t,this,[[5,16]])}));return function(e){return t.apply(this,arguments)}}()},{key:"loadBookmarks",value:function(){var t=l()(c.a.mark(function t(){var e,n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this._verifyLoaded(),!this.state.loadBookmarksPromise){t.next=5;break}return t.next=4,this.state.loadBookmarksPromise;case 4:return t.abrupt("return");case 5:return t.prev=5,e=this._request("/bookmarks","GET").then(function(t){return t.json()}).then(function(t){return t.data}).catch(function(t){throw t}),this.state=this.state.set("loadBookmarksPromise",e),t.next=10,e;case 10:n=t.sent,this.state=this.state.set("loadBookmarksPromise",Promise.resolve()),Object(y.h)(Array.isArray(n.bookmarks),"Unexpected reply from bookmarks endpoint."),(a=Object(w.a)().withMutations(function(t){n.bookmarks.forEach(function(e){try{t.push(Object(v.a)(e.id,e.content))}catch(t){console.info("Skipped creating bookmark #".concat(e.id," from payload because an error occurred while deserializing."),e),console.info(t)}})})).size>0&&(Object(y.h)(this.bookmarkCallbacks),this.bookmarkCallbacks.createBookmarks(a,b.a)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),this._handleError(t.t0,"bookmarks");case 20:case"end":return t.stop()}},t,this,[[5,17]])}));return function(){return t.apply(this,arguments)}}()},{key:"_initializeFormFieldValues",value:function(){var t=l()(c.a.mark(function t(){var e,n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._request("/form-field-values","GET");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,Object(y.h)(Array.isArray(n.formFieldValues),"Unexpected reply from form-values endpoint."),a=Object(w.a)(n.formFieldValues.map(function(t){var e=t.content;try{return Object(p.d)(e)}catch(t){return console.info("Skipped form field value ".concat(e.name," from payload because an error occurred while deserializing."),e),console.info(t),null}}).filter(Boolean)),Object(y.h)(this.formFieldValueCallbacks),this.formFieldValueCallbacks.setFormFieldValues(a);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"_handleError",value:function(t,e){Object(y.g)("Loading or updating ".concat(e," failed:\n\n").concat(t.message))}},{key:"_request",value:function(t,e,n){Object(y.h)(null!=this.state.authPayload,"Cannot call request without authPayload");var a={"X-PSPDFKit-Token":this.state.authPayload.token,"PSPDFKit-Platform":"web","PSPDFKit-Version":"protocol=".concat(3,", client=").concat("2019.3.1",", client-git=").concat("16d91d05ee")};return fetch("".concat(this.state.serverURL).concat(t),{method:e,headers:a,body:n instanceof FormData?n:"object"===r()(n)?JSON.stringify(n):void 0,credentials:"include"})}},{key:"_verifyLoaded",value:function(){if(!this.state.isLoaded)throw new Error("not loaded")}}]),t}();function E(t,e){var n=new FormData;return n.append("annotation",JSON.stringify(t)),e.forEach(function(t,e){e&&t.data&&n.append(e,t.data)}),n}}}]);