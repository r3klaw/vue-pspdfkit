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
(window.__PSPDFKitChunk=window.__PSPDFKitChunk||[]).push([[1],{829:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return F});var s,a=n(16),i=n.n(a),r=n(22),o=n.n(r),c=n(15),u=n.n(c),h=n(6),f=n.n(h),d=n(10),l=n.n(d),p=n(8),m=n.n(p),b=n(7),g=n.n(b),w=n(9),y=n.n(w),_=n(126),k=n(5),D=n(3),P=n(792),v=n(235);n.d(e,"corePool",function(){return P.a}),n.d(e,"validateStandaloneConfiguration",function(){return P.d}),n.d(e,"normalizeCoreOptions",function(){return P.c});var F=function(t){function e(t){f()(this,e);var n=t.baseUrl||Object(_.a)(window.document),a=u()({},t,{baseUrl:n});if("string"!=typeof a.baseUrl)throw new D.a("`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`");if("string"!=typeof a.pdf&&!(a.pdf instanceof ArrayBuffer))throw new D.a("pdf must be either an URL to a pdf, e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`");if("string"!=typeof a.licenseKey)throw new D.a("licenseKey must be set to a string value. Please obtain yours from https://customers.pspdfkit.com.");if(s&&s!==a.licenseKey)throw new D.a("Trying to re-use PSPDFKit for Web with a different licenseKey than the previous one.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.");if(a.licenseKey.startsWith("TRIAL-"))throw new D.a("You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nYou can find the license key to unlock your trial by following the link in your trial email and heading to:\nhttps://pspdfkit.com/guides/web/current/standalone/integration/");return m()(this,g()(e).call(this,a))}return y()(e,t),l()(e,[{key:"load",value:function(){var t=o()(i.a.mark(function t(e){var n,a,r,o,c,u,h;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="string"==typeof this._state.pdf?fetch(this._state.pdf,{credentials:"same-origin"}).then(function(t){return t.arrayBuffer()}):this._state.pdf,t.next=3,this.client.load(this._state.baseUrl,this._state.licenseKey,{mainThreadOrigin:Object(v.a)()||window.location.origin,disableWebAssembly:this._state.disableWebAssembly,disableWebAssemblyStreaming:this._state.disableWebAssemblyStreaming,disableIndexedDBCaching:this._state.disableIndexedDBCaching,enableAutomaticLinkExtraction:this._state.enableAutomaticLinkExtraction,overrideMemoryLimit:this._state.overrideMemoryLimit,enablePDFJavaScriptSupport:this._state.enablePDFJavaScriptSupport});case 3:return a=t.sent,r=a.features,this._state=this._state.set("features",Object(k.a)(r)),s=this._state.licenseKey,t.next=9,n;case 9:return o=t.sent,t.prev=10,t.next=13,this.client.openDocument(o,e);case 13:c=t.sent,t.next=20;break;case 16:throw t.prev=16,t.t0=t.catch(10),"INVALID_PASSWORD"===t.t0.message&&this._state.pdf instanceof ArrayBuffer&&(this._state=this._state.set("pdf",t.t0.callArgs[0])),t.t0;case 20:if(!this._XFDF){t.next=23;break}return t.next=23,this.client.importXFDF(this._XFDF.source,this._XFDF.keepCurrentAnnotations);case 23:if(!(this._instantJSON&&this._instantJSON.pdfId&&c.ID.permanent)){t.next=30;break}if(u=this._instantJSON.pdfId,h=c.ID,u.permanent===h.permanent){t.next=28;break}throw new D.a("Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");case 28:if(u.changing===h.changing){t.next=30;break}throw new D.a("Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");case 30:return this._state=this._state.set("documentResponse",c),t.abrupt("return",{features:this._state.features,hasPassword:!!e});case 32:case"end":return t.stop()}},t,this,[[10,16]])}));return function(e){return t.apply(this,arguments)}}()}]),e}(P.b)}}]);