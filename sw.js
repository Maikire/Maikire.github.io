/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","48d63fe163515f6f65b4102d478f25f1"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","81e0cbc29a55e17d146b52040fc6fd99"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","a2dbb6f3145e91896bb958bfbb8a0a5a"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","37e983a3ee826f5fe891f0a62d44052a"],["/2023/03/24/DesignPatterns/单例模式/index.html","d29e06d05595f406ad4637a0edd27a04"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","603ce37e825e25754f79ef03fb2f2cb5"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","2c73eb9919dd6f991f2dfe7249174bff"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","4666ef19b394b618c215029c156639ca"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","53bf889d0dc1e64397aceaded976e538"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","3baa0ea471169b5d59a4181596351772"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","5497771ac768fc394d3a1d7803500191"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","e5e8754f72ad07ef7e0e39e7ee804ea8"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","8d29a860df3365f648525f8738e807ce"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","68c1cbac3967593e2c86ef05cfa237a7"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","b6220ef3f46e3f845701d2e309198b3c"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","0360c742b68f15064af4be46c2f8a1ad"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","fed1a008a014afbadb13609347aeddf8"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","d3251f419df562a94e302634edafc2ae"],["/404.html","5ed60d01845d3ff91c141f33aa3ed33b"],["/CSharp/cover.jpg","5244f822fc31cf2d9148131b3c442282"],["/DesignPatterns/cover.jpg","51aa73dd65b15939e7314b9cc9ebe672"],["/Unity/cover.jpg","44fcc3d3d21c26460a6cb8f1aa4ec0b6"],["/about/index.html","4937ae0ca587dabe773dcb2ed44a2ac6"],["/archives/2022/12/index.html","24922586755b94b8ff0e85b094074bfe"],["/archives/2022/index.html","93397fef28174e770790dd9867d958f1"],["/archives/2023/01/index.html","473067c4a28786abf628512a767250cb"],["/archives/2023/03/index.html","81ba0261b08c7ac85848cc509f2b114b"],["/archives/2023/03/page/2/index.html","f605b26441158a9ed3da1584efd32e5b"],["/archives/2023/04/index.html","d09e2d82727f0e5e46acf37afb70d3ad"],["/archives/2023/index.html","b768a47b5eea3e9a8907303717bd05ee"],["/archives/2023/page/2/index.html","d743bdab76a3ef6f907ea00bde62f95c"],["/archives/index.html","978cc58444b66cda48119e9afa5f4d83"],["/categories/CSharp/CSharpBasics/index.html","7b11d5aa9bbb1aedf1a16baa21cd3313"],["/categories/CSharp/CSharpToolClass/index.html","ccb349c81b7aa4d691343d7417df3ba0"],["/categories/CSharp/index.html","96f5191c92f9fc784488229431895779"],["/categories/DesignPatterns/index.html","f03672c7cb6b2caf060e8c232bb7ac00"],["/categories/Shoka/index.html","a6fbb56508bae41b6a1f2a5cf8b9dc3d"],["/categories/Unity/UnityBasics/index.html","2f5ba22838845cf805e3969cc419d868"],["/categories/Unity/UnityFramework/index.html","95f9f71bf8331b1e35f4cbc509d1e925"],["/categories/Unity/UnityGames/Unity2DGames/index.html","4b2a2aab2e8f682e2630a17ebb5a52e3"],["/categories/Unity/UnityGames/index.html","28714497589b2c16599a25932fa177db"],["/categories/Unity/UnityToolClass/index.html","f4bfbfb85ec676a456a78a8b266c9fbf"],["/categories/Unity/index.html","6e7c2568d7aa6cf580d477a1ea750ca6"],["/categories/index.html","ef6071c96fd3dc8964f4ff86666b607f"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","f050372f2ea1704d57ac8ff1ec48ad8d"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","b2db6ae9dd2cd00153df5f533c2f3f09"],["/sw-register.js","a359218a0feb30e7c8451df0eee50236"],["/tags/ArrayHelper-CSharp/index.html","c797f5e6c66253fac972e1c7fe6958aa"],["/tags/Coroutine-Unity/index.html","81023cf4189255595916750169cf2f29"],["/tags/Delegate-CSharp/index.html","bde2c3b1957a11b98f8678b970801711"],["/tags/Enumerator-CSharp/index.html","40f4b63c8540c6725d3d1e0bd337015c"],["/tags/Event-CSharp/index.html","194608a19ed406a2bce10c46521e46bc"],["/tags/JSON-CSharp/index.html","6708a1d2c0e2dfd0e5d86d0197405223"],["/tags/Reflection-CSharp/index.html","665a2fc61913fde3f81c027b23ba4216"],["/tags/Shoka/index.html","552d90dfef15616af4bd2d2231a278a4"],["/tags/SingletonPattern/index.html","13e1d297f9b778150b5925e14e72703f"],["/tags/UIFramework/index.html","131815f15b09325c1979bf0ecb3a82d3"],["/tags/Unity2DGames/index.html","d88de4576fc1474425eff844d475e4e4"],["/tags/UnityToolClass/index.html","c8d1f63dce5b25ce6fdf2f90e0890e54"],["/tags/index.html","f01b3ded6f2422631de15aa0819dc5bd"]];
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
