/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","9bc8eb123cc6648da38529158b90a086"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","bba792e81ba16b11e1d2494dbd5898b6"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","7d7727544aad5fe212b966274d31f121"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","9342f2038f5fca7e183dc22d0ef11245"],["/2023/03/24/DesignPatterns/单例模式/index.html","e2084a6be234c29f9d78546e3d749376"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","18fb6292e652581f5df79fb651932ae6"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","1b7fe4bcc9111ed5bb1fa8baaea1f3f6"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","ebb616e5e9c5beba6f86bab81143b397"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","0e03ff6a4f1f348e263ff36709f27812"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","2fefa9304febd2d29cb7b421ea9da547"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","95f0158d494bec7492a31d4bad59e94e"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","14cf8e7a6479050f5a49ffe2fe8031ef"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","af963adbb7a83b60095aee10ecc75ccb"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","9a794d06e7138a44fa5fb36085e167b2"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","b890f0748c73c5c4608b931912ffeced"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","ffb77f5a65e466683512a66088734f44"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","5d5604658d1a189738732b0883b6bd6d"],["/404.html","4ac5d33f24935a8549985d254b8729bc"],["/CSharp/cover.jpg","5244f822fc31cf2d9148131b3c442282"],["/DesignPatterns/cover.jpg","51aa73dd65b15939e7314b9cc9ebe672"],["/Unity/cover.jpg","44fcc3d3d21c26460a6cb8f1aa4ec0b6"],["/about/index.html","70fd4dff4486a271ea55490ced9f1510"],["/archives/2022/12/index.html","54a731854ef67b02d28155f6ae9150d2"],["/archives/2022/index.html","c9d1ddf97a3e4e251351201d1f4623b4"],["/archives/2023/01/index.html","d0504598bc602c0ae972fe24225a4f04"],["/archives/2023/03/index.html","0853bd248fff39934426478229d0b208"],["/archives/2023/03/page/2/index.html","4e46e8c309e0aa0aef4cbdf5515d2ea2"],["/archives/2023/04/index.html","b32c9d30084f5d621cb03c66e9ae4915"],["/archives/2023/index.html","43dfe5671fdc79b44efd576e665af80a"],["/archives/2023/page/2/index.html","b90a01730f7897cec8ada4d35f653877"],["/archives/index.html","14d5231829274698b3104c650329a16d"],["/categories/CSharp/CSharpBasics/index.html","3b026dcc15b245fbd46a1bcdef92e465"],["/categories/CSharp/CSharpToolClass/index.html","37fdceb9bddb24b3c8832015962204c3"],["/categories/CSharp/index.html","d82069363bad4a74a02e5b235a0c46d9"],["/categories/DesignPatterns/index.html","7af0f757f4c39dec0a7ed8ecb77b51e1"],["/categories/Shoka/index.html","ff355fa8f250b5e5945bf32451c9f816"],["/categories/Unity/UnityBasics/index.html","d64649e15c53e736b54088b89c8bf78c"],["/categories/Unity/UnityFramework/index.html","6baca617bf794b5d87aa1a2400fa5eaf"],["/categories/Unity/UnityGames/Unity2DGames/index.html","3a030fa3c59f6431b165b37d3c3fdd81"],["/categories/Unity/UnityGames/index.html","cab2833b144338bcb6ad5e8c1cbefd6d"],["/categories/Unity/UnityToolClass/index.html","2b3281e0ded8a6a621d403283158f198"],["/categories/Unity/index.html","a60cda011cb228e51d1628000f646726"],["/categories/index.html","203366a57dd47e1a83f9d42d9cb284fd"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","bd0ce6a84fc7707871198674c998a0d9"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","f8350d4bd3f7b2ae631952407d2872a9"],["/sw-register.js","90c9a5c5e449d14961a6866b0ef1afcf"],["/tags/ArrayHelper-CSharp/index.html","4bd475bb8e35c889f0df239be0ebf255"],["/tags/Coroutine-Unity/index.html","7a6343ad8a5dde5eb61620c2d12900c3"],["/tags/Delegate-CSharp/index.html","f24a23d6a6a9efac44a49867a9f15a22"],["/tags/Enumerator-CSharp/index.html","30d6a54365da475b694b1ed8a8fd50e6"],["/tags/Event-CSharp/index.html","10f06bd7c2e958247688af56e2ea86a7"],["/tags/JSON-CSharp/index.html","72112e971407c8391f42a3794d66b638"],["/tags/Reflection-CSharp/index.html","33eb7844dca794f8bab57d2272af01c9"],["/tags/Shoka/index.html","80f2b6e2aa3b31b3f95cbf4756f51853"],["/tags/SingletonPattern/index.html","cead6b1ee3c5d40458fbb5ebf4b7dda7"],["/tags/UIFramework/index.html","96290d00f94dd2d2b3bff9fbdef42b99"],["/tags/Unity2DGames/index.html","b5d2def6086580302b6076491d014c73"],["/tags/UnityToolClass/index.html","55bfef898d3da3c1f3fd65e1915b4ac9"],["/tags/index.html","6633adec056a9b0d3e42d3ae112035ec"]];
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
