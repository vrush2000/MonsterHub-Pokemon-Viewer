(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main.f293765dff3198ff.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
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
"(react:background)/./src/components/Card.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PokemonCard: () => (PokemonCard)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/helpers/capitalize.ts");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/App.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");




const __snapshot_279ae_d320d_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_279ae_d320d_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "position: relative;");
    const el1 = __CreateImage(pageId);
    __SetAttribute(el1, "mode", "aspectFit");
    __SetAttribute(el1, "src", 'https://mpaas.vercel.app/assets/images/pokeball.png');
    __SetClasses(el1, "bg-image");
    __AppendElement(el, el1);
    const el2 = __CreateImage(pageId);
    __SetInlineStyles(el2, "position: relative;");
    __SetClasses(el2, "CardImage");
    __SetAttribute(el2, "mode", "aspectFit");
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[2], "src", ctx.__values[0]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 2, "bindEvent", "error", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_279ae_d320d_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_279ae_d320d_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "CardImagePlaceholder");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "PlaceholderText");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("No Image");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_279ae_d320d_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_279ae_d320d_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "CardName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_279ae_d320d_6 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_279ae_d320d_6", function() {
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
const __snapshot_279ae_d320d_5 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_279ae_d320d_5", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "TypeContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_279ae_d320d_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_279ae_d320d_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "CardContent");
    __AppendElement(el, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "CardId");
    __AppendElement(el2, el3);
    const el4 = __CreateRawText("#");
    __AppendElement(el3, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry, null);
function PokemonCard({ pokemon, onClick }) {
    const [imageError, setImageError] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const primaryType = pokemon.types[0] || 'unknown';
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_279ae_d320d_1, {
        values: [
            `Card Type-${primaryType}`,
            onClick
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: !imageError && pokemon.imageUrl ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_279ae_d320d_2, {
                    values: [
                        pokemon.imageUrl,
                        ()=>setImageError(true)
                    ]
                }, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\Card.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_279ae_d320d_3, {}, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\Card.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: pokemon.id.toString().padStart(3, '0')
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_279ae_d320d_4, {
                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(pokemon.name)
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\Card.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_279ae_d320d_5, {
                children: pokemon.types.map((type)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_279ae_d320d_6, {
                        values: [
                            `TypeBadge Type-${type}`
                        ],
                        children: type.toUpperCase()
                    }, type, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\Card.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\Card.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\Card.tsx",
        lineNumber: 12,
        columnNumber: 5
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
"(react:background)/./src/components/DetailPopup.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PokemonDetailPopup: () => (PokemonDetailPopup)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.css");
/* ESM import */var _helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/helpers/capitalize.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");




const __snapshot_ecaac_a56e6_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "PopupOverlay");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "PopupContent");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "dflex");
    __AppendElement(el1, el2);
    const el3 = __CreateImage(pageId);
    __SetAttribute(el3, "mode", "aspectFit");
    __SetAttribute(el3, "src", 'https://mpaas.vercel.app/assets/images/loading-ball.gif');
    __SetClasses(el3, "LoadingSpinner");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "StatusText");
    __AppendElement(el2, el4);
    const el5 = __CreateRawText("Memuat detail...");
    __AppendElement(el4, el5);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "PopupName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_5 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_5", function() {
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
const __snapshot_ecaac_a56e6_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "TypeContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_7 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_7", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "AbilityBadge");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_6 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_6", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "AbilitiesContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_9 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_9", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "StatName");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_10 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_10", function() {
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
const __snapshot_ecaac_a56e6_11 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_11", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "StatValue");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_8 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_8", function() {
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
const __snapshot_ecaac_a56e6_14 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_14", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionItem");
    const el1 = __CreateImage(pageId);
    __SetClasses(el1, "EvolutionImage");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "EvolutionName");
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[1], "src", ctx.__values[0]);
    }
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_15 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_15", function() {
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
const __snapshot_ecaac_a56e6_13 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_13", function() {
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
const __snapshot_ecaac_a56e6_12 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_12", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EvolutionContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_ecaac_a56e6_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_ecaac_a56e6_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "PopupOverlay");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "PopupContent");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "PopupClose");
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateRawText("✕");
    __AppendElement(el3, el4);
    const el5 = __CreateScrollView(pageId);
    __SetAttribute(el5, "scroll-orientation", "vertical");
    __SetClasses(el5, "PopupScroll");
    __AppendElement(el1, el5);
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
    __SetClasses(el13, "PopupSection");
    __AppendElement(el5, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "SectionTitle");
    __AppendElement(el13, el14);
    const el15 = __CreateRawText("Informasi Fisik");
    __AppendElement(el14, el15);
    const el16 = __CreateView(pageId);
    __SetClasses(el16, "InfoGrid");
    __AppendElement(el13, el16);
    const el17 = __CreateView(pageId);
    __SetClasses(el17, "InfoItem");
    __AppendElement(el16, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "InfoLabel");
    __AppendElement(el17, el18);
    const el19 = __CreateRawText("Tinggi");
    __AppendElement(el18, el19);
    const el20 = __CreateText(pageId);
    __SetClasses(el20, "InfoValue");
    __AppendElement(el17, el20);
    const el21 = __CreateWrapperElement(pageId);
    __AppendElement(el20, el21);
    const el22 = __CreateRawText(" m");
    __AppendElement(el20, el22);
    const el23 = __CreateView(pageId);
    __SetClasses(el23, "InfoItem");
    __AppendElement(el16, el23);
    const el24 = __CreateText(pageId);
    __SetClasses(el24, "InfoLabel");
    __AppendElement(el23, el24);
    const el25 = __CreateRawText("Berat");
    __AppendElement(el24, el25);
    const el26 = __CreateText(pageId);
    __SetClasses(el26, "InfoValue");
    __AppendElement(el23, el26);
    const el27 = __CreateWrapperElement(pageId);
    __AppendElement(el26, el27);
    const el28 = __CreateRawText(" kg");
    __AppendElement(el26, el28);
    const el29 = __CreateView(pageId);
    __SetClasses(el29, "PopupSection");
    __AppendElement(el5, el29);
    const el30 = __CreateText(pageId);
    __SetClasses(el30, "SectionTitle");
    __AppendElement(el29, el30);
    const el31 = __CreateRawText("Kemampuan");
    __AppendElement(el30, el31);
    const el32 = __CreateWrapperElement(pageId);
    __AppendElement(el29, el32);
    const el33 = __CreateView(pageId);
    __SetClasses(el33, "PopupSection");
    __AppendElement(el5, el33);
    const el34 = __CreateText(pageId);
    __SetClasses(el34, "SectionTitle");
    __AppendElement(el33, el34);
    const el35 = __CreateRawText("Base Stats");
    __AppendElement(el34, el35);
    const el36 = __CreateWrapperElement(pageId);
    __AppendElement(el33, el36);
    const el37 = __CreateView(pageId);
    __SetClasses(el37, "PopupSection");
    __AppendElement(el5, el37);
    const el38 = __CreateText(pageId);
    __SetClasses(el38, "SectionTitle");
    __AppendElement(el37, el38);
    const el39 = __CreateRawText("Rantai Evolusi");
    __AppendElement(el38, el39);
    const el40 = __CreateWrapperElement(pageId);
    __AppendElement(el37, el40);
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
        el40
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 2, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[7], "src", ctx.__values[1]);
    }
], [
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
        21
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        27
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        32
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        36
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        40
    ]
], undefined, globDynamicComponentEntry, null);
function PokemonDetailPopup({ pokemonId, onClose }) {
    const [detail, setDetail] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchDetail = async ()=>{
            try {
                setLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                const speciesResponse = await fetch(data.species.url);
                const speciesData = await speciesResponse.json();
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
                    imageUrl: `https://img.pokemondb.net/sprites/home/normal/${data.name}.png`,
                    types: data.types.map((t)=>t.type.name),
                    stats: data.stats.map((s)=>({
                            name: s.stat.name,
                            value: s.base_stat
                        })),
                    height: data.height / 10,
                    weight: data.weight / 10,
                    abilities: data.abilities.map((a)=>a.ability.name),
                    evolutionChain,
                    description: '',
                    moves: []
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
    if (!detail && loading) return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_1, {}, void 0, false, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
        lineNumber: 73,
        columnNumber: 13
    }, this);
    if (!detail) return null;
    const primaryType = detail.types[0] || 'unknown';
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_2, {
        values: [
            onClose,
            detail.imageUrl
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_3, {
                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__.capitalize)(detail.name)
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                lineNumber: 98,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.id.toString().padStart(3, '0')
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_4, {
                children: detail.types.map((type)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_5, {
                        values: [
                            `TypeBadge Type-${type}`
                        ],
                        children: type.toUpperCase()
                    }, type, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                        lineNumber: 102,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                lineNumber: 100,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.height
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.weight
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_6, {
                children: detail.abilities.map((ability)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_7, {
                        children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__.capitalize)(ability.replace('-', ' '))
                    }, ability, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                        lineNumber: 125,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                lineNumber: 123,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: detail.stats.map((stat)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_8, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_9, {
                                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__.capitalize)(stat.name.replace('-', ' '))
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                                lineNumber: 134,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_10, {
                                values: [
                                    `StatBar Type-${primaryType}`,
                                    {
                                        width: `${stat.value / 255 * 100}%`
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                                lineNumber: 135,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_11, {
                                children: stat.value
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                                lineNumber: 141,
                                columnNumber: 33
                            }, this)
                        ]
                    }, stat.name, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                        lineNumber: 133,
                        columnNumber: 29
                    }, this))
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_12, {
                children: detail.evolutionChain.map((evo, index)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_13, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_14, {
                                values: [
                                    evo.imageUrl
                                ],
                                children: (0,_helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__.capitalize)(evo.name)
                            }, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                                lineNumber: 151,
                                columnNumber: 37
                            }, this),
                            index < detail.evolutionChain.length - 1 && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_ecaac_a56e6_15, {}, void 0, false, {
                                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                                lineNumber: 156,
                                columnNumber: 41
                            }, this)
                        ]
                    }, evo.id, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                        lineNumber: 150,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
                lineNumber: 148,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\components\\DetailPopup.tsx",
        lineNumber: 89,
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
"(react:background)/./src/pages/Home.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Home: () => (Home)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/components/Card.tsx");
/* ESM import */var _components_DetailPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/components/DetailPopup.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");




const __snapshot_fee99_0933a_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "ClearButton");
    const el1 = __CreateImage(pageId);
    __SetAttribute(el1, "src", "https://img.icons8.com/?size=100&id=3062&format=png");
    __SetClasses(el1, "ClearIcon");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatusMessage");
    const el1 = __CreateImage(pageId);
    __SetAttribute(el1, "mode", "aspectFit");
    __SetAttribute(el1, "src", 'https://mpaas.vercel.app/assets/images/loading-ball.gif');
    __SetClasses(el1, "LoadingSpinner");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "StatusText");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Memuat data dari Pallet Town...");
    __AppendElement(el2, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_5 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_5", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatusMessage");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "StatusText");
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
const __snapshot_fee99_0933a_7 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_7", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatusMessage");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "StatusText");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Mencari Pokémon...");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_8 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_8", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatusMessage");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "StatusText");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Mencari saran...");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_9 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_9", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "SuggestionTitle");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "StatusText");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Saran Pokémon:");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_10 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_10", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "StatusMessage");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "StatusText");
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
const __snapshot_fee99_0933a_11 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_11", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "LoadingMore");
    __SetInlineStyles(el, "position: absolute; left:0; bottom: -10px;");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "LoadingMoreText");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Memuat lebih banyak Pokémon...");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_12 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_12", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "EndMessage");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "EndMessageText");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Semua Pokémon telah dimuat! 🎉");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_6 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_6", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "ListContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateScrollView(pageId);
    __SetAttribute(el, "scroll-orientation", "vertical");
    __SetClasses(el, "ScrollContent");
    __SetInlineStyles(el, "width:100%;flex:1");
    __SetAttribute(el, "lower-threshold", 100);
    return [
        el
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "scrolltolower", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "scroll", '')
], (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_0933a_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_0933a_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "AppWrapper");
    __SetInlineStyles(el, "position:relative");
    const el1 = __CreateView(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "SearchContainer");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "InputMock");
    __AppendElement(el2, el3);
    const el4 = __CreateImage(pageId);
    __SetAttribute(el4, "src", "https://img.icons8.com/?size=512&id=59878&format=png");
    __SetClasses(el4, "ClearIcon");
    __AppendElement(el3, el4);
    const el5 = __CreateElement("input", pageId);
    __SetID(el5, "searchinput");
    __SetClasses(el5, "SearchInput");
    __SetAttribute(el5, "type", "text");
    __SetAttribute(el5, "placeholder", "Cari Nama, ID, atau Tipe...");
    __AppendElement(el3, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el, el8);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[1], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 5, "bindEvent", "input", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ]
], undefined, globDynamicComponentEntry, null);
function Home() {
    const [pokemonList, setPokemonList] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [filteredList, setFilteredList] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [searchTerm, setSearchTerm] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [headerVisible, setHeaderVisible] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [lastScroll, setLastScroll] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [offset, setOffset] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [hasMore, setHasMore] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [loadingMore, setLoadingMore] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [searchResult, setSearchResult] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [searchLoading, setSearchLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [searchError, setSearchError] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [suggestions, setSuggestions] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [suggestLoading, setSuggestLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedPokemonId, setSelectedPokemonId] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const fetchPokemonDetail = async (url)=>{
        const detailResponse = await fetch(url);
        if (!detailResponse.ok) throw new Error(`Detail fetch error for ${url}`);
        const details = await detailResponse.json();
        const officialImageUrl = `https://img.pokemondb.net/sprites/home/normal/${details.name}.png`;
        return {
            id: details.id,
            name: details.name,
            imageUrl: officialImageUrl,
            types: details.types.map((t)=>t.type.name)
        };
    };
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const initialData = await response.json();
                const detailPromises = initialData.results.map((result)=>fetchPokemonDetail(result.url));
                const fullList = await Promise.all(detailPromises);
                setPokemonList(fullList);
                setFilteredList(fullList);
                setOffset(50);
                setHasMore(true);
            } catch (e) {
                console.error("Fetch error:", e);
                setError('Gagal memuat data Pokémon. Coba lagi nanti.');
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    const loadMorePokemon = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (loadingMore || !hasMore || searchTerm) return;
        try {
            setLoadingMore(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (data.results.length === 0) {
                setHasMore(false);
                return;
            }
            const detailPromises = data.results.map((result)=>fetchPokemonDetail(result.url));
            const newPokemon = await Promise.all(detailPromises);
            setPokemonList((prev)=>[
                    ...prev,
                    ...newPokemon
                ]);
            setFilteredList((prev)=>searchTerm ? prev : [
                    ...prev,
                    ...newPokemon
                ]);
            setOffset((prev)=>prev + 50);
            if (offset + 50 >= 1000) setHasMore(false);
        } catch (e) {
            console.error("Load more error:", e);
        } finally{
            setLoadingMore(false);
        }
    }, [
        offset,
        loadingMore,
        hasMore,
        searchTerm
    ]);
    const handleScrollToLower = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        loadMorePokemon();
    }, [
        loadMorePokemon
    ]);
    const handleScroll = (e)=>{
        const scrollTop = e.detail.scrollTop;
        if (scrollTop > lastScroll && scrollTop > 50) setHeaderVisible(false);
        else setHeaderVisible(true);
        setLastScroll(scrollTop);
    };
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSearchResult(null);
        setSearchError(null);
        setSuggestions([]);
        if (!searchTerm) {
            setFilteredList(pokemonList);
            return;
        }
        const term = searchTerm.toLowerCase();
        if (term.length >= 3) {
            setSuggestLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then((res)=>res.json()).then(async (data)=>{
                const matched = data.results.filter((p)=>p.name.includes(term)).slice(0, 10);
                const detailList = await Promise.all(matched.map((p)=>fetchPokemonDetail(p.url)));
                setSuggestions(detailList);
            }).catch(()=>setSuggestions([])).finally(()=>setSuggestLoading(false));
        }
        const filtered = pokemonList.filter((pokemon)=>pokemon.name.toLowerCase().includes(term) || pokemon.id.toString() === term || pokemon.types.some((type)=>type.toLowerCase().includes(term)));
        setFilteredList(filtered);
        if (filtered.length === 0 && term.length > 0) {
            setSearchLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon/${term}`).then((res)=>{
                if (!res.ok) throw new Error('Pokémon tidak ditemukan');
                return res.json();
            }).then((details)=>{
                setSearchResult({
                    id: details.id,
                    name: details.name,
                    imageUrl: `https://img.pokemondb.net/sprites/home/normal/${details.name}.png`,
                    types: details.types.map((t)=>t.type.name)
                });
            }).catch(()=>setSearchError('Pokémon tidak ditemukan')).finally(()=>setSearchLoading(false));
        }
    }, [
        searchTerm,
        pokemonList
    ]);
    const handleInputChange = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text)=>{
        setSearchTerm(text);
    }, []);
    const handleClear = ()=>{
        setSearchTerm('');
        handleInputChange('');
    };
    const openDetailPopup = (pokemonId)=>{
        setSelectedPokemonId(pokemonId);
    };
    const closeDetailPopup = ()=>{
        setSelectedPokemonId(null);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_1, {
        values: [
            'HeaderWrapper' + (headerVisible ? ' visible' : ' hidden'),
            (e)=>handleInputChange(e.detail.value)
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: searchTerm && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_2, {
                    values: [
                        ()=>handleClear()
                    ]
                }, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                    lineNumber: 216,
                    columnNumber: 15
                }, this)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_3, {
                values: [
                    handleScrollToLower,
                    handleScroll
                ],
                children: [
                    loading && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_4, {}, void 0, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_5, {
                        children: error
                    }, void 0, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_6, {
                        children: searchLoading ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_7, {}, void 0, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 250,
                            columnNumber: 15
                        }, this) : suggestLoading ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_8, {}, void 0, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 254,
                            columnNumber: 15
                        }, this) : searchResult ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.PokemonCard, {
                            pokemon: searchResult,
                            onClick: ()=>openDetailPopup(searchResult.id)
                        }, searchResult.id, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 258,
                            columnNumber: 15
                        }, this) : suggestions.length > 0 ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_9, {}, void 0, false, {
                                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this),
                                suggestions.map((pokemon)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.PokemonCard, {
                                        pokemon: pokemon,
                                        onClick: ()=>openDetailPopup(pokemon.id)
                                    }, pokemon.id, false, {
                                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                        lineNumber: 269,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true) : filteredList.length === 0 ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_10, {
                            children: searchError || "Tidak ada Pokémon yang cocok dengan pencarian Anda."
                        }, void 0, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 277,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                filteredList.map((pokemon)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.PokemonCard, {
                                        pokemon: pokemon,
                                        onClick: ()=>openDetailPopup(pokemon.id)
                                    }, pokemon.id, false, {
                                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                        lineNumber: 283,
                                        columnNumber: 19
                                    }, this)),
                                loadingMore && !searchTerm && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_11, {}, void 0, false, {
                                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                    lineNumber: 290,
                                    columnNumber: 19
                                }, this),
                                !hasMore && !searchTerm && pokemonList.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_0933a_12, {}, void 0, false, {
                                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                    lineNumber: 295,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: selectedPokemonId && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DetailPopup__WEBPACK_IMPORTED_MODULE_3__.PokemonDetailPopup, {
                    pokemonId: selectedPokemonId,
                    onClose: closeDetailPopup
                }, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
        lineNumber: 203,
        columnNumber: 5
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
__webpack_require__.h = () => ("0eba6e8ea21a4bff")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.f293765dff3198ff.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main.f293765dff3198ff.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.63.96.125:3000/main.f293765dff3198ff.hot-update.js.map