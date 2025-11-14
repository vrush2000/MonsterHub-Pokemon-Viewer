(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.0629724d90280ce5.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
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
"(react:main-thread)/./src/pages/Home.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Home: () => (Home)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/components/Card.tsx");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/react-router/dist/index.js");




const __snapshot_fee99_4abdb_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_4abdb_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_fee99_4abdb_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_4abdb_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_fee99_4abdb_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_fee99_4abdb_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_4abdb_10 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_10", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_fee99_4abdb_11 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_11", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
const __snapshot_fee99_4abdb_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "ListContainer");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_4abdb_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateScrollView(pageId);
    __SetAttribute(el, "scroll-orientation", "vertical");
    __SetClasses(el, "ScrollContent");
    __SetInlineStyles(el, "width:100%;flex:1");
    __SetAttribute(el, "lower-threshold", 100);
    return [
        el
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "scrolltolower", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "scroll", '')
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_fee99_4abdb_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fee99_4abdb_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "AppWrapper");
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
        if (ctx.__elements) __SetClasses(ctx.__elements[1], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 5, "bindEvent", "input", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry, null);
function Home() {
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
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
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
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
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        loadMorePokemon();
    }, [
        loadMorePokemon
    ]);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text)=>{
        setSearchTerm(text);
    }, []);
    const openDetail = (pokemonId)=>{
        navigate(`/details?id=${pokemonId}`);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_1, {
        values: [
            'HeaderWrapper' + (headerVisible ? ' visible' : ' hidden'),
            1
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: searchTerm && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_2, {
                    values: [
                        1
                    ]
                }, void 0, false, {
                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                    lineNumber: 211,
                    columnNumber: 15
                }, this)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_3, {
                values: [
                    1,
                    1
                ],
                children: [
                    loading && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_4, {}, void 0, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_5, {
                        children: error
                    }, void 0, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_6, {
                        children: searchLoading ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_7, {}, void 0, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 245,
                            columnNumber: 15
                        }, this) : searchResult ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.PokemonCard, {
                            pokemon: searchResult,
                            lazyLoad: true,
                            onClick: ()=>openDetail(searchResult.id)
                        }, searchResult.id, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this) : suggestions.length > 0 ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_8, {}, void 0, false, {
                                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this),
                                suggestions.map((pokemon)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.PokemonCard, {
                                        pokemon: pokemon,
                                        lazyLoad: true,
                                        onClick: ()=>openDetail(pokemon.id)
                                    }, pokemon.id, false, {
                                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                        lineNumber: 261,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true) : filteredList.length === 0 ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_9, {
                            children: searchError || "Tidak ada Pokémon yang cocok dengan pencarian Anda."
                        }, void 0, false, {
                            fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                            lineNumber: 270,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                filteredList.map((pokemon)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.PokemonCard, {
                                        pokemon: pokemon,
                                        lazyLoad: true,
                                        onClick: ()=>openDetail(pokemon.id)
                                    }, pokemon.id, false, {
                                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                        lineNumber: 276,
                                        columnNumber: 19
                                    }, this)),
                                loadingMore && !searchTerm && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_10, {}, void 0, false, {
                                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                    lineNumber: 284,
                                    columnNumber: 19
                                }, this),
                                !hasMore && !searchTerm && pokemonList.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fee99_4abdb_11, {}, void 0, false, {
                                    fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                                    lineNumber: 289,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, false, {
                fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "D:\\RESEARCH\\lynx-test-app\\src\\pages\\Home.tsx",
        lineNumber: 198,
        columnNumber: 5
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
__webpack_require__.h = () => ("3d5ead980ea972de")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.0629724d90280ce5.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main__main-thread.0629724d90280ce5.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.63.96.125:3000/main__main-thread.0629724d90280ce5.hot-update.js.map