/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","8972fbbf1607d85a70a6d68e8f59e5cb"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","3502c2ead15ff5798da6a7e667e42965"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","54ae0b986ab9f24780ba693475cf2fda"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","067d072627f469b1ef2efab94df57af6"],["/2023/03/24/DesignPatterns/单例模式/index.html","4c31e210093886be7f2dba20ead0cab0"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","c6271acbf2531af6a730aca47888597d"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","0f526cdbeaf529f1a5cdc6e917634b74"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","cd75da97fb6d14b0223b00be66698ae8"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","a23dc08b0195b9722172e4c51c80496b"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","796eea92697bad498808225d5ed0f610"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","05bc6d9e459070e7e8f79f7187497d38"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","c152dc2a1de441936e7c57a545d2b9f0"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","159790d3e4cb238645e3afdc040e106f"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","944b9da27050097528cd8bf901c012fd"],["/404.html","895d6e057e4d96fe562a0817e608cc4f"],["/CSharp/cover.jpg","5244f822fc31cf2d9148131b3c442282"],["/DesignPatterns/cover.jpg","51aa73dd65b15939e7314b9cc9ebe672"],["/Unity/cover.jpg","44fcc3d3d21c26460a6cb8f1aa4ec0b6"],["/about/index.html","26825c48be0c30ffb4ce5420ceffd2cb"],["/archives/2022/12/index.html","674a5e5888fc3a397db146ba960bea4f"],["/archives/2022/index.html","aed90f1252ba45a0bda6f885aeee3737"],["/archives/2023/01/index.html","a3104f368e296abc1a2e9b6f343df7f6"],["/archives/2023/03/index.html","ec407c615a5fd29a2eda6648ce9cc41d"],["/archives/2023/03/page/2/index.html","eaa0491448c75da0fe761361841e132e"],["/archives/2023/index.html","67a2f5426b24f8508e0e45d95e4c3cbb"],["/archives/2023/page/2/index.html","c0f9ea94a98f25ca53a4d942bdc032b0"],["/archives/index.html","ea74c46c2eb0c4303b0064b3ac421156"],["/categories/CSharp/CSharpBasics/index.html","4319568cec62f68f3b88b1a33aa6b767"],["/categories/CSharp/CSharpToolClass/index.html","99008a7f2f48e4d7dabb0b02ab8fb72f"],["/categories/CSharp/index.html","a90e3814324585ed6434706fe8b7c979"],["/categories/DesignPatterns/index.html","808619c7d412c4d415b43036a0d39837"],["/categories/Shoka/index.html","9a413442c264eba236d48e83da047310"],["/categories/Unity/UnityBasics/index.html","f43af4a116c5c1c4b9e6cd1eb3b786b0"],["/categories/Unity/UnityFramework/index.html","ea413d83356e45436f8477f2c5feadac"],["/categories/Unity/UnityGames/Unity2DGames/index.html","4a8946974ba227b06545b315cc9358c5"],["/categories/Unity/UnityGames/index.html","5071bfa6b9a43ba1628ae39be924e28b"],["/categories/Unity/UnityToolClass/index.html","5f632b5d4e44b32f3b0df106acb29ee3"],["/categories/Unity/index.html","e0563b731a1bb4c6825258a39c12af01"],["/categories/index.html","5cb8574686f524b6d0909220b2072bb9"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","b590f472b166ca3d374b8a171c4cbf65"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","dfa5cd53fa071afbf4f4cb9a1f42bf83"],["/sw-register.js","66548f86535e724a5d3e2fce3362102c"],["/tags/ArrayHelper-CSharp/index.html","e71c8f9519e8f5d9d7a989db5fafd512"],["/tags/Coroutine-Unity/index.html","5e6fbf1058d9de85d7b1590898b5a1e4"],["/tags/Delegate-CSharp/index.html","378d1a1ddf9f5f927597eb296d4b2c14"],["/tags/Enumerator-CSharp/index.html","4b2d3937273e651a3b87d77877fb3054"],["/tags/Event-CSharp/index.html","741660fe61d7ca6f3f661062b1cf9bdf"],["/tags/JSON-CSharp/index.html","6df2e1005585e2222a2cb94d86bdcf91"],["/tags/Reflection-CSharp/index.html","893a1e0f3f903aa5b720dc0150ee735b"],["/tags/Shoka/index.html","b8e2c82e04c624ee8c702678febf038b"],["/tags/SingletonPattern/index.html","df57cebe5b1822dcbf77a72929dd1602"],["/tags/UIFramework/index.html","94a0bfcb0f9aa2df76ddd691006e132b"],["/tags/Unity2DGames/index.html","9adfd75d048273301251325bf46c5284"],["/tags/UnityToolClass/index.html","42923568bca910b601b9d4d827da065f"],["/tags/index.html","bc0d4326a6232f0789420b850d035e26"]];
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
