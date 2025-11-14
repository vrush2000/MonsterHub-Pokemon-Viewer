(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main.4f6a5bc9684a79e7.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
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

exports.ids = ["main"];
exports.modules = {
"(react:background)/./src/pages/Home.tsx": (function () {
throw new Error("  × Module build failed:\n  ╰─▶   × Error: react-transform failed\n        │     at Object.backgroundLoader (file:///D:/RESEARCH/lynx-test-app/node_modules/@lynx-js/react-webpack-plugin/lib/loaders/background.js:39:23)\n        │     at D:\\RESEARCH\\lynx-test-app\\node_modules\\@rspack\\core\\dist\\index.js:3104:29\n        │     at node:internal/util:455:21\n        │     at new Promise (<anonymous>)\n        │     at node:internal/util:441:12\n        │     at isomorphoicRun (D:\\RESEARCH\\lynx-test-app\\node_modules\\@rspack\\core\\dist\\index.js:3603:244)\n        │     at runLoaders (D:\\RESEARCH\\lynx-test-app\\node_modules\\@rspack\\core\\dist\\index.js:3653:145)\n      \n");


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("b0fdbfe9c7023cf2")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.4f6a5bc9684a79e7.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main.4f6a5bc9684a79e7.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.63.96.125:3000/main.4f6a5bc9684a79e7.hot-update.js.map