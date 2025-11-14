(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main.c1cf6a7196aa48c2.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
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
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

"use strict";
exports.ids = ["main"];
exports.modules = {
"(react:background)/./src/pages/details/Details.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1763106877377
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),
"(react:background)/./src/pages/details/Details.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Details: () => (Details)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/helpers/capitalize.ts");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/react-router/dist/index.js");
/* ESM import */var _Details_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/pages/details/Details.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");





const __snapshot_04116_91f20_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionImage shimmer-effect");
    return [
        el
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "EvolutionImage");
    __SetAttribute(el, "lazy-load", true);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    },
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "onLoad", ctx.__values[1]);
    },
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[2]);
    }
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_04116_91f20_5 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_5", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "LoadingOverlay");
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
    const el4 = __CreateRawText("Memuat evolusi...");
    __AppendElement(el3, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_6 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_6", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "PopupName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_8 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_8", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_7 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_7", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "TypeContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_9 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_9", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "Description");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_11 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_11", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "AbilityBadge");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_10 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_10", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "AbilitiesContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_13 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_13", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "StatName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_14 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_14", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_04116_91f20_15 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_15", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "StatValue");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_12 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_12", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_18 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_18", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "MoveName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_19 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_19", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_20 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_20", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_21 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_21", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_17 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_17", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_16 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_16", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateScrollView(pageId);
    __SetAttribute(el, "scroll-orientation", "vertical");
    __SetClasses(el, "MovesContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_25 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_25", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetAttribute(el, "src", "https://mpaas.vercel.app/assets/images/loading-ball.gif");
    __SetClasses(el, "EvolutionImage");
    __SetInlineStyles(el, "opacity:0.5");
    return [
        el
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_26 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_26", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "EvolutionName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_24 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_24", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_27 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_27", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "EvolutionArrow");
    const el1 = __CreateRawText("→");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_23 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_23", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_22 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_22", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_04116_91f20_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_04116_91f20_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "PopupClose");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("✕");
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el, el4);
    const el5 = __CreateScrollView(pageId);
    __SetID(el5, "scroll");
    __SetAttribute(el5, "scroll-orientation", "vertical");
    __SetClasses(el5, "DetailScroll");
    __AppendElement(el, el5);
    const el6 = __CreateView(pageId);
    __SetClasses(el6, "PopupHeader");
    __AppendElement(el5, el6);
    const el7 = __CreateImage(pageId);
    __SetClasses(el7, "PopupImage");
    __AppendElement(el6, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "PopupId");
    __AppendElement(el6, el9);
    const el10 = __CreateRawText("#");
    __AppendElement(el9, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el9, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el12);
    const el13 = __CreateView(pageId);
    __SetClasses(el13, "DetailSection");
    __AppendElement(el5, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "SectionTitle");
    __AppendElement(el13, el14);
    const el15 = __CreateRawText("Pokédex Entry");
    __AppendElement(el14, el15);
    const el16 = __CreateWrapperElement(pageId);
    __AppendElement(el13, el16);
    const el17 = __CreateView(pageId);
    __SetClasses(el17, "DetailSection");
    __AppendElement(el5, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "SectionTitle");
    __AppendElement(el17, el18);
    const el19 = __CreateRawText("Informasi Fisik");
    __AppendElement(el18, el19);
    const el20 = __CreateView(pageId);
    __SetClasses(el20, "InfoGrid");
    __AppendElement(el17, el20);
    const el21 = __CreateView(pageId);
    __SetClasses(el21, "InfoItem");
    __AppendElement(el20, el21);
    const el22 = __CreateText(pageId);
    __SetClasses(el22, "InfoLabel");
    __AppendElement(el21, el22);
    const el23 = __CreateRawText("Tinggi");
    __AppendElement(el22, el23);
    const el24 = __CreateText(pageId);
    __SetClasses(el24, "InfoValue");
    __AppendElement(el21, el24);
    const el25 = __CreateWrapperElement(pageId);
    __AppendElement(el24, el25);
    const el26 = __CreateRawText(" m");
    __AppendElement(el24, el26);
    const el27 = __CreateView(pageId);
    __SetClasses(el27, "InfoItem");
    __AppendElement(el20, el27);
    const el28 = __CreateText(pageId);
    __SetClasses(el28, "InfoLabel");
    __AppendElement(el27, el28);
    const el29 = __CreateRawText("Berat");
    __AppendElement(el28, el29);
    const el30 = __CreateText(pageId);
    __SetClasses(el30, "InfoValue");
    __AppendElement(el27, el30);
    const el31 = __CreateWrapperElement(pageId);
    __AppendElement(el30, el31);
    const el32 = __CreateRawText(" kg");
    __AppendElement(el30, el32);
    const el33 = __CreateView(pageId);
    __SetClasses(el33, "DetailSection");
    __AppendElement(el5, el33);
    const el34 = __CreateText(pageId);
    __SetClasses(el34, "SectionTitle");
    __AppendElement(el33, el34);
    const el35 = __CreateRawText("Kemampuan");
    __AppendElement(el34, el35);
    const el36 = __CreateWrapperElement(pageId);
    __AppendElement(el33, el36);
    const el37 = __CreateView(pageId);
    __SetClasses(el37, "DetailSection");
    __AppendElement(el5, el37);
    const el38 = __CreateText(pageId);
    __SetClasses(el38, "SectionTitle");
    __AppendElement(el37, el38);
    const el39 = __CreateRawText("Base Stats");
    __AppendElement(el38, el39);
    const el40 = __CreateWrapperElement(pageId);
    __AppendElement(el37, el40);
    const el41 = __CreateView(pageId);
    __SetClasses(el41, "DetailSection");
    __AppendElement(el5, el41);
    const el42 = __CreateText(pageId);
    __SetClasses(el42, "SectionTitle");
    __AppendElement(el41, el42);
    const el43 = __CreateRawText("Moves");
    __AppendElement(el42, el43);
    const el44 = __CreateWrapperElement(pageId);
    __AppendElement(el41, el44);
    const el45 = __CreateView(pageId);
    __SetClasses(el45, "DetailSection");
    __AppendElement(el5, el45);
    const el46 = __CreateText(pageId);
    __SetClasses(el46, "SectionTitle");
    __AppendElement(el45, el46);
    const el47 = __CreateRawText("Rantai Evolusi");
    __AppendElement(el46, el47);
    const el48 = __CreateWrapperElement(pageId);
    __AppendElement(el45, el48);
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
        el47,
        el48
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 1, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[7], "src", ctx.__values[2]);
    }
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        16
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        25
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        31
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        36
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        40
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        44
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        48
    ]
], undefined, globDynamicComponentEntry, null);
function Details() {
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
    const [detail, setDetail] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [evoLoadingId, setEvoLoadingId] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const pokemonId = new URLSearchParams(location.search).get("id");
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    // State for main image loading
    const [isMainImageLoaded, setIsMainImageLoaded] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onClose = ()=>{
        navigate("/");
    };
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const onClose = ()=>{
        navigate("/");
    };
    const goToEvolution = (id)=>{
        setEvoLoadingId(id); // set loading untuk evolusi yang diklik
        setIsMainImageLoaded(false); // Reset main image loaded state when navigating to new evolution
        navigate(`/details?id=${id}`);
        lynx.createSelectorQuery().select(`#scroll`).invoke({
            method: 'scrollTo',
            params: {
                offset: 0,
                index: 0,
                smooth: true
            }
        }).exec();
    };
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchDetail = async ()=>{
            try {
                var _speciesData_flavor_text_entries_find;
                setIsMainImageLoaded(false); // Ensure main image is not loaded when starting fetch
                setLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                const speciesResponse = await fetch(data.species.url);
                const speciesData = await speciesResponse.json();
                const description = ((_speciesData_flavor_text_entries_find = speciesData.flavor_text_entries.find((entry)=>entry.language.name === 'en')) === null || _speciesData_flavor_text_entries_find === void 0 ? void 0 : _speciesData_flavor_text_entries_find.flavor_text.replace(/\f/g, ' ')) || 'No description available.';
                // Get top 20 moves
                const moves = data.moves.slice(0, 20).map((m)=>{
                    var _m_version_group_details_;
                    return {
                        name: m.move.name,
                        level: ((_m_version_group_details_ = m.version_group_details[0]) === null || _m_version_group_details_ === void 0 ? void 0 : _m_version_group_details_.level_learned_at) || 0,
                        power: m.move.power,
                        accuracy: m.move.accuracy
                    };
                }).sort((a, b)=>a.level - b.level);
                const evolutionResponse = await fetch(speciesData.evolution_chain.url);
                const evolutionData = await evolutionResponse.json();
                const evolutionChain = [];
                let currentEvolution = evolutionData.chain;
                while(currentEvolution){
                    const speciesUrl = currentEvolution.species.url;
                    const id = parseInt(speciesUrl.split('/').slice(-2, -1)[0]);
                    evolutionChain.push({
                        id,
                        name: currentEvolution.species.name,
                        imageUrl: `https://img.pokemondb.net/sprites/home/normal/${currentEvolution.species.name}.png`
                    });
                    currentEvolution = currentEvolution.evolves_to[0];
                }
                const detailData = {
                    id: data.id,
                    name: data.name,
                    imageUrl: data.sprites.other.home.front_default,
                    // imageUrl: `https://img.pokemondb.net/sprites/home/normal/${data.name}.png`,
                    types: data.types.map((t)=>t.type.name),
                    stats: data.stats.map((s)=>({
                            name: s.stat.name,
                            value: s.base_stat
                        })),
                    height: data.height / 10,
                    weight: data.weight / 10,
                    abilities: data.abilities.map((a)=>a.ability.name),
                    evolutionChain,
                    description,
                    moves
                };
                setDetail(detailData);
            } catch (error) {
                console.error('Error fetching detail:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchDetail();
    }, [
        pokemonId
    ]);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setEvoLoadingId(null); // reset loading saat detail berubah
        setIsMainImageLoaded(false); // Reset main image loaded state when detail changes
    }, [
        detail
    ]);
    const EvolutionImageWithShimmer = ({ evo })=>{
        const [isEvolutionImageLoaded, setIsEvolutionImageLoaded] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                !isEvolutionImageLoaded && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_1, {}, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                    lineNumber: 143,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_2, {
                    values: [
                        evo.imageUrl,
                        ()=>setIsEvolutionImageLoaded(true),
                        {
                            display: isEvolutionImageLoaded ? 'block' : 'none'
                        }
                    ]
                }, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
    };
    if (!detail && loading) return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_3, {}, void 0, false, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
        lineNumber: 152,
        columnNumber: 13
    }, this);
    if (!detail) return null;
    const primaryType = detail.types[0] || 'unknown';
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_4, {
        values: [
            `DetailContent`,
            onClose,
            detail.imageUrl
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: loading && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_5, {}, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                    lineNumber: 171,
                    columnNumber: 17
                }, this)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_6, {
                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(detail.name)
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 184,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.id.toString().padStart(3, '0')
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_7, {
                children: detail.types.map((type)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_8, {
                        values: [
                            `TypeBadge Type-${type}`
                        ],
                        children: type.toUpperCase()
                    }, type, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 188,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 186,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_9, {
                children: detail.description
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 195,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.height
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.weight
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_10, {
                children: detail.abilities.map((ability)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_11, {
                        children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(ability.replace('-', ' '))
                    }, ability, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 216,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 214,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.stats.map((stat)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_12, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_13, {
                                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(stat.name.replace('-', ' '))
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 225,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_14, {
                                values: [
                                    `StatBar Type-${primaryType}`,
                                    {
                                        width: `${stat.value / 255 * 100}%`
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 226,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_15, {
                                children: stat.value
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 232,
                                columnNumber: 29
                            }, this)
                        ]
                    }, stat.name, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 224,
                        columnNumber: 25
                    }, this))
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_16, {
                children: [
                    ...detail.moves
                ].filter((move)=>move.level > 0).sort((a, b)=>b.level - a.level).map((move)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_17, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_18, {
                                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(move.name.replace('-', ' '))
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 245,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_19, {
                                children: move.level
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 246,
                                columnNumber: 37
                            }, this),
                            move.power && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_20, {
                                children: move.power
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 247,
                                columnNumber: 52
                            }, this),
                            move.accuracy && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_21, {
                                children: move.accuracy
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 248,
                                columnNumber: 55
                            }, this)
                        ]
                    }, move.name, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 244,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 239,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_22, {
                children: detail.evolutionChain.map((evo, index)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_23, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_24, {
                                values: [
                                    ()=>goToEvolution(evo.id)
                                ],
                                children: [
                                    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                        children: evoLoadingId === evo.id ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_25, {}, void 0, false, {
                                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                            lineNumber: 262,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EvolutionImageWithShimmer, {
                                            evo: evo
                                        }, void 0, false, {
                                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                            lineNumber: 268,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, void 0, this),
                                    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_26, {
                                        children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(evo.name)
                                    }, void 0, false, {
                                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                        lineNumber: 270,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 260,
                                columnNumber: 33
                            }, this),
                            index < detail.evolutionChain.length - 1 && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_04116_91f20_27, {}, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                                lineNumber: 273,
                                columnNumber: 37
                            }, this)
                        ]
                    }, evo.id, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                        lineNumber: 259,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
                lineNumber: 257,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\details\\Details.tsx",
        lineNumber: 166,
        columnNumber: 9
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("4f6a5bc9684a79e7")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.c1cf6a7196aa48c2.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main.c1cf6a7196aa48c2.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.63.96.125:3000/main.c1cf6a7196aa48c2.hot-update.js.map