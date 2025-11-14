(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.13aa38f6b2779947.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
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

exports.ids = ["main__main-thread"];
exports.modules = {
"(react:main-thread)/./src/pages/Home.tsx": (function () {
throw new Error("  × Module build failed:\n  ╰─▶   × Error: react-transform failed\n        │     at Object.mainThreadLoader (file:///D:/RESEARCH/lynx-test-app/node_modules/@lynx-js/react-webpack-plugin/lib/loaders/main-thread.js:39:23)\n        │     at D:\\RESEARCH\\lynx-test-app\\node_modules\\@rspack\\core\\dist\\index.js:3104:29\n        │     at node:internal/util:455:21\n        │     at new Promise (<anonymous>)\n        │     at node:internal/util:441:12\n        │     at isomorphoicRun (D:\\RESEARCH\\lynx-test-app\\node_modules\\@rspack\\core\\dist\\index.js:3603:244)\n        │     at runLoaders (D:\\RESEARCH\\lynx-test-app\\node_modules\\@rspack\\core\\dist\\index.js:3653:145)\n      \n");


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("b9c440e06d2d1362")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.13aa38f6b2779947.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main__main-thread.13aa38f6b2779947.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.63.96.125:3000/main__main-thread.13aa38f6b2779947.hot-update.js.map