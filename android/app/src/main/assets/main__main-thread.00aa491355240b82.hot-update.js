(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.00aa491355240b82.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
fetch = fetch || lynx.fetch;
requestAnimationFrame = requestAnimationFrame || lynx.requestAnimationFrame;
cancelAnimationFrame = cancelAnimationFrame || lynx.cancelAnimationFrame;

// This needs to be wrapped in an IIFE because it needs to be isolated against Lynx injected variables.
(() => {
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main__main-thread"]) {
  lynx.__chunk_entries__["main__main-thread"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main__main-thread"];
}

"use strict";
exports.ids = ["main__main-thread"];
exports.modules = {
"(react:main-thread)/./src/pages/details/Details.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Details: () => (Details)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/helpers/capitalize.ts");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/react-router/dist/index.js");
/* ESM import */var _Details_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./src/pages/details/Details.css");





const __snapshot_04116_3f96b_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "DetailContent");
    __SetInlineStyles(el, "height:100vh;display:flex;align-items:center;justify-content:center");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "dflex");
    __AppendElement(el, el1);
    const el2 = __CreateImage(pageId);
    __SetAttribute(el2, "mode", "aspectFit");
    __SetAttribute(el2, "src", 'https://mpaas.vercel.app/assets/images/loading-ball.gif');
    __SetClasses(el2, "LoadingSpinner");
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "StatusText");
    __AppendElement(el1, el3);
    const el4 = __CreateRawText("Memuat detail...");
    __AppendElement(el3, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "PopupName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "TypeContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "Description");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "AbilityBadge");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "AbilitiesContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_10 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_10", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "StatName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_11 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_11", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatBarContainer");
    const el1 = __CreateView(pageId);
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[1], ctx.__values[0] || '');
    },
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[1], ctx.__values[1]);
    }
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_12 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_12", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "StatValue");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatRow");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_15 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_15", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "MoveName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_16 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_16", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "MoveLevel");
    const el1 = __CreateRawText("Lv.");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_17 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_17", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "MovePower");
    const el1 = __CreateRawText("Power: ");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_18 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_18", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "MoveAccuracy");
    const el1 = __CreateRawText("Acc: ");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    const el3 = __CreateRawText("%");
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_14 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_14", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "MoveItem");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_13 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_13", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateScrollView(pageId);
    __SetAttribute(el, "scroll-orientation", "vertical");
    __SetClasses(el, "MovesContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_22 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_22", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetAttribute(el, "src", "https://mpaas.vercel.app/assets/images/loading-ball.gif");
    __SetClasses(el, "EvolutionImage");
    __SetInlineStyles(el, "opacity:0.5");
    return [
        el
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_23 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_23", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "EvolutionImage");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_24 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_24", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "EvolutionName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_21 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_21", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionItem");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_25 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_25", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "EvolutionArrow");
    const el1 = __CreateRawText("→");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_20 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_20", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionGroup");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_19 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_19", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_3f96b_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_3f96b_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "PopupClose");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("✕");
    __AppendElement(el2, el3);
    const el4 = __CreateScrollView(pageId);
    __SetID(el4, "scroll");
    __SetAttribute(el4, "scroll-orientation", "vertical");
    __SetClasses(el4, "DetailScroll");
    __AppendElement(el, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "PopupHeader");
    __AppendElement(el4, el5);
    const el6 = __CreateImage(pageId);
    __SetClasses(el6, "PopupImage");
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el7);
    const el8 = __CreateText(pageId);
    __SetClasses(el8, "PopupId");
    __AppendElement(el5, el8);
    const el9 = __CreateRawText("#");
    __AppendElement(el8, el9);
    const el10 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el11);
    const el12 = __CreateView(pageId);
    __SetClasses(el12, "DetailSection");
    __AppendElement(el4, el12);
    const el13 = __CreateText(pageId);
    __SetClasses(el13, "SectionTitle");
    __AppendElement(el12, el13);
    const el14 = __CreateRawText("Pokédex Entry");
    __AppendElement(el13, el14);
    const el15 = __CreateWrapperElement(pageId);
    __AppendElement(el12, el15);
    const el16 = __CreateView(pageId);
    __SetClasses(el16, "DetailSection");
    __AppendElement(el4, el16);
    const el17 = __CreateText(pageId);
    __SetClasses(el17, "SectionTitle");
    __AppendElement(el16, el17);
    const el18 = __CreateRawText("Informasi Fisik");
    __AppendElement(el17, el18);
    const el19 = __CreateView(pageId);
    __SetClasses(el19, "InfoGrid");
    __AppendElement(el16, el19);
    const el20 = __CreateView(pageId);
    __SetClasses(el20, "InfoItem");
    __AppendElement(el19, el20);
    const el21 = __CreateText(pageId);
    __SetClasses(el21, "InfoLabel");
    __AppendElement(el20, el21);
    const el22 = __CreateRawText("Tinggi");
    __AppendElement(el21, el22);
    const el23 = __CreateText(pageId);
    __SetClasses(el23, "InfoValue");
    __AppendElement(el20, el23);
    const el24 = __CreateWrapperElement(pageId);
    __AppendElement(el23, el24);
    const el25 = __CreateRawText(" m");
    __AppendElement(el23, el25);
    const el26 = __CreateView(pageId);
    __SetClasses(el26, "InfoItem");
    __AppendElement(el19, el26);
    const el27 = __CreateText(pageId);
    __SetClasses(el27, "InfoLabel");
    __AppendElement(el26, el27);
    const el28 = __CreateRawText("Berat");
    __AppendElement(el27, el28);
    const el29 = __CreateText(pageId);
    __SetClasses(el29, "InfoValue");
    __AppendElement(el26, el29);
    const el30 = __CreateWrapperElement(pageId);
    __AppendElement(el29, el30);
    const el31 = __CreateRawText(" kg");
    __AppendElement(el29, el31);
    const el32 = __CreateView(pageId);
    __SetClasses(el32, "DetailSection");
    __AppendElement(el4, el32);
    const el33 = __CreateText(pageId);
    __SetClasses(el33, "SectionTitle");
    __AppendElement(el32, el33);
    const el34 = __CreateRawText("Kemampuan");
    __AppendElement(el33, el34);
    const el35 = __CreateWrapperElement(pageId);
    __AppendElement(el32, el35);
    const el36 = __CreateView(pageId);
    __SetClasses(el36, "DetailSection");
    __AppendElement(el4, el36);
    const el37 = __CreateText(pageId);
    __SetClasses(el37, "SectionTitle");
    __AppendElement(el36, el37);
    const el38 = __CreateRawText("Base Stats");
    __AppendElement(el37, el38);
    const el39 = __CreateWrapperElement(pageId);
    __AppendElement(el36, el39);
    const el40 = __CreateView(pageId);
    __SetClasses(el40, "DetailSection");
    __AppendElement(el4, el40);
    const el41 = __CreateText(pageId);
    __SetClasses(el41, "SectionTitle");
    __AppendElement(el40, el41);
    const el42 = __CreateRawText("Moves");
    __AppendElement(el41, el42);
    const el43 = __CreateWrapperElement(pageId);
    __AppendElement(el40, el43);
    const el44 = __CreateView(pageId);
    __SetClasses(el44, "DetailSection");
    __AppendElement(el4, el44);
    const el45 = __CreateText(pageId);
    __SetClasses(el45, "SectionTitle");
    __AppendElement(el44, el45);
    const el46 = __CreateRawText("Rantai Evolusi");
    __AppendElement(el45, el46);
    const el47 = __CreateWrapperElement(pageId);
    __AppendElement(el44, el47);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31,
        el32,
        el33,
        el34,
        el35,
        el36,
        el37,
        el38,
        el39,
        el40,
        el41,
        el42,
        el43,
        el44,
        el45,
        el46,
        el47
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 1, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[6], "src", ctx.__values[2]);
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        10
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        15
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        24
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        30
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        35
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        39
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        43
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        47
    ]
], undefined, globDynamicComponentEntry, null);
function Details() {
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
    const [detail, setDetail] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [evoLoadingId, setEvoLoadingId] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    new URLSearchParams(location.search).get("id");
    (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    if (!detail && loading) return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_1, {}, void 0, false, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
        lineNumber: 118,
        columnNumber: 13
    }, this);
    if (!detail) return null;
    const primaryType = detail.types[0] || 'unknown';
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_2, {
        values: [
            `DetailContent`,
            1,
            detail.imageUrl
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_3, {
                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(detail.name)
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 139,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.id.toString().padStart(3, '0')
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_4, {
                children: detail.types.map((type)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_5, {
                        values: [
                            `TypeBadge Type-${type}`
                        ],
                        children: type.toUpperCase()
                    }, type, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 143,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 141,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_6, {
                children: detail.description
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 150,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.height
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.weight
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_7, {
                children: detail.abilities.map((ability)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_8, {
                        children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(ability.replace('-', ' '))
                    }, ability, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 171,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 169,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.stats.map((stat)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_9, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_10, {
                                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(stat.name.replace('-', ' '))
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 180,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_11, {
                                values: [
                                    `StatBar Type-${primaryType}`,
                                    {
                                        width: `${stat.value / 255 * 100}%`
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 181,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_12, {
                                children: stat.value
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 187,
                                columnNumber: 29
                            }, this)
                        ]
                    }, stat.name, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 179,
                        columnNumber: 25
                    }, this))
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_13, {
                children: [
                    ...detail.moves
                ].filter((move)=>move.level > 0).sort((a, b)=>b.level - a.level).map((move)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_14, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_15, {
                                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(move.name.replace('-', ' '))
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 200,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_16, {
                                children: move.level
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 201,
                                columnNumber: 37
                            }, this),
                            move.power && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_17, {
                                children: move.power
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 202,
                                columnNumber: 52
                            }, this),
                            move.accuracy && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_18, {
                                children: move.accuracy
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 203,
                                columnNumber: 55
                            }, this)
                        ]
                    }, move.name, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 199,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 194,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_19, {
                children: detail.evolutionChain.map((evo, index)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_20, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_21, {
                                values: [
                                    1
                                ],
                                children: [
                                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                        children: evoLoadingId === evo.id ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_22, {}, void 0, false, {
                                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                            lineNumber: 217,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_23, {
                                            values: [
                                                evo.imageUrl
                                            ]
                                        }, void 0, false, {
                                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                            lineNumber: 223,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, void 0, this),
                                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_24, {
                                        children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(evo.name)
                                    }, void 0, false, {
                                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                        lineNumber: 228,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 215,
                                columnNumber: 33
                            }, this),
                            index < detail.evolutionChain.length - 1 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_3f96b_25, {}, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 231,
                                columnNumber: 37
                            }, this)
                        ]
                    }, evo.id, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 214,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 212,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
        lineNumber: 132,
        columnNumber: 9
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("f90f3cccdf1b5815")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.00aa491355240b82.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main__main-thread.00aa491355240b82.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.63.96.125:3000/main__main-thread.00aa491355240b82.hot-update.js.map