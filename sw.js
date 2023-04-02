/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","c67d0d342d94df6f7b1e3afdfc88d24e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","7eb282d6da51449c7a2dd8acbaf511dc"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","f5bc3eb56d10a716e18d616ab6d10935"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","e31c88274ba3b228483141714aaaacb1"],["/2023/03/24/DesignPatterns/单例模式/index.html","c1da42a23504cc4ce3e29a678a8fec6b"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","08624f7830f492cd8f79bdba1696ecb5"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","0aef67b17073ac638e04af1a0f3c2fec"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","0e41931fa52a9c5a7b3314cbdf752b8a"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","062bf2f9422264c57fff5b98b0f68bdd"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","2d9392e7ae27d6dfb8b264f2e2700442"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","82e7b2d237052c91a439d4a40b58a842"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","3e9ecf7b941c4c31c7311e1cf71c467a"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","fabd02e12b1d57f9b4f6050d39e1342e"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","88387c6fc3b43af725f14b08e32796b1"],["/404.html","6167d67bad7092282c2bc13c831567dc"],["/CSharp/cover.jpg","5244f822fc31cf2d9148131b3c442282"],["/DesignPatterns/cover.jpg","51aa73dd65b15939e7314b9cc9ebe672"],["/Unity/cover.jpg","44fcc3d3d21c26460a6cb8f1aa4ec0b6"],["/about/index.html","1780abbdb182548a4c7bf77b26aeb5f4"],["/archives/2022/12/index.html","feb98742f514f60f8e6d263897b98321"],["/archives/2022/index.html","b8b1edf5186b6812cb4a5f04639a5cd7"],["/archives/2023/01/index.html","4348df469d1da9bc56ed4dfc202cd08e"],["/archives/2023/03/index.html","14b47f6107b88f97aa3233ceb845579e"],["/archives/2023/03/page/2/index.html","9ea317ee19bb2842c3cb4e1436256f74"],["/archives/2023/index.html","ebfadfb66369c3d3322884470121b458"],["/archives/2023/page/2/index.html","9305151201677ac036bf393f9c771d89"],["/archives/index.html","f2b6351d1195a53f9861e5b9d012596e"],["/categories/CSharp/CSharpBasics/index.html","cd775f1681bc62995280b91595796894"],["/categories/CSharp/CSharpToolClass/index.html","2ebb8f8660b8377d8c4e5d5fa405f2da"],["/categories/CSharp/index.html","48328e558dd546e19ade061bb2ad091a"],["/categories/DesignPatterns/index.html","30fbb957b308e7163e33ca34b172b271"],["/categories/Shoka/index.html","920e42ce0c238e24f7bf0aafc0b0fec6"],["/categories/Unity/UnityBasics/index.html","cba3ff1c846725c0b63cfc465d2f966d"],["/categories/Unity/UnityFramework/index.html","839a2e1cb376828c4ac630c2ad6f45ee"],["/categories/Unity/UnityGames/Unity2DGames/index.html","b5e9eb1e28d5261bffd6d617ae37a83b"],["/categories/Unity/UnityGames/index.html","ed40dd6e628ec50a2a0eb5a1ca6b80a4"],["/categories/Unity/UnityToolClass/index.html","8286305594332bc933ff24bda736fbf7"],["/categories/Unity/index.html","e4f30b6a266ed142897802a3bdc65df5"],["/categories/index.html","f33e378772f99a5bb27043d47e122674"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","7854ddfc5ae03a0e8294f3e1a76f10c6"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","40c1a60aafc05df9c0fca3ed76ec11a5"],["/sw-register.js","23f2e103e01ba2b40dd1088a7dcb785b"],["/tags/ArrayHelper-CSharp/index.html","94e432dc420610ee953e0b199269303a"],["/tags/Coroutine-Unity/index.html","305ae81de7189e4c1e4d1dc5b9e90d82"],["/tags/Delegate-CSharp/index.html","9db75a8785756fa18afa9c319642fea7"],["/tags/Enumerator-CSharp/index.html","29d8e3e03bcdc9d3f72c2bcf20298532"],["/tags/Event-CSharp/index.html","57bf82a4d6910a779527e535e2715132"],["/tags/JSON-CSharp/index.html","0c3e230abc45124e09ed7535818090ae"],["/tags/Reflection-CSharp/index.html","9d2af988808e2ef48cfacf5cdb4e0020"],["/tags/Shoka/index.html","28379e71d7b2e6da3b8a4d352535d519"],["/tags/SingletonPattern/index.html","504a20974c5d071e802cb2900cb2b492"],["/tags/UIFramework/index.html","d3dc870fc52ed04136f6ea19a7463ab0"],["/tags/Unity2DGames/index.html","e81599c530799a0fe6e0017f5521e087"],["/tags/UnityToolClass/index.html","c3bde665e7d8573da442f0aa558638cb"],["/tags/index.html","0edba14cd3aab9f48f287536782ef04b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
