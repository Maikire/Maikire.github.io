/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","3ee0ad1ea65e0fe5eb2b80d4505aaca4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","5cf78816036c0836c4dada9abe0c9ad8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","9c39f24183c75a93079b923cbfe21847"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","6679c3a15a25ad4d4cacaa7a6d71122d"],["/2023/03/24/DesignPatterns/单例模式/index.html","1b2318ca3a70337b392501108a726d60"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","b1550d39f805fa354352fa1df2d7860a"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","a59f7d9f68853710b8ceb98fdc0edb3a"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","b347827c5e485351b22fdb44808b07d1"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","53bf889d0dc1e64397aceaded976e538"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","7afbe2f533975047e1eb00310a7a1653"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ef65928f380bb7b9c7df906773473b59"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","90416b380539e5487f21238fb7807515"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","1a403757c4fe5e24edd6f28af7140f51"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","7429e416d9b717486bc8febab9fd707b"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","0aac5bf69dcc64e3d7d94c4d58b45bb0"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","ebab0ec1353130894035311c3b3ee2a4"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","b3be4f9d6a291bc8442419ba352da002"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","c8dba18e72284adf443767d0d3779c21"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/index.html","d9c8628682a0824b74adb8b7834976cf"],["/404.html","b9e6c0c64bc634c3bf3fa82d027f6ae3"],["/CSharp/cover.jpg","f89f6bbdbb27eca819cd9532df45d0ae"],["/DesignPatterns/cover.jpg","9a94fc0b334f66ee48b851e8b524602e"],["/Unity/cover.jpg","dbb00a874d8d684e1b1ce17df2ea4c33"],["/about/index.html","7bd021ef14ade89df6d11579ac30cfec"],["/archives/2022/12/index.html","e9481529bccf95205cbd02070eae27a8"],["/archives/2022/index.html","2ba4009932cfac4543daf5dc738b676a"],["/archives/2023/01/index.html","3a89d5f643f4d554a65349623fe88e6a"],["/archives/2023/03/index.html","8eb3f995f3c9cf1dbf88787078d918cd"],["/archives/2023/03/page/2/index.html","0c1c611c6413f74bdf388f0b484ca5ed"],["/archives/2023/04/index.html","3202aadd37daae5774ac983b84774c9a"],["/archives/2023/05/index.html","31ae91ee8ae2052562f718037e91bf22"],["/archives/2023/index.html","846303d3c8f19782a33c2ed8b34ab830"],["/archives/2023/page/2/index.html","4b7421be274b031c143d794ea994fdba"],["/archives/index.html","868906c4a71ba62dab67a9bcf331d6e0"],["/categories/CSharp/CSharpBasics/index.html","0c981d6e0d68d415e941512d827f7e02"],["/categories/CSharp/CSharpToolClass/index.html","eb9d9e89d1040792a6903e94342ae362"],["/categories/CSharp/index.html","f5ae2ee472700c58c40c7129a4a52108"],["/categories/DesignPatterns/index.html","50d53afcef0737c14b397f591bcbc68a"],["/categories/Shoka/index.html","1f7b135521f6c6aed6e9d2725200b857"],["/categories/Unity/UnityBasics/index.html","76f3d8957344b9d181e5da6f1eb7cbc1"],["/categories/Unity/UnityFramework/index.html","054195648c47f705082a5c608cccb026"],["/categories/Unity/UnityGames/Unity2DGames/index.html","2b94784a3450ab92940be36616a5b51f"],["/categories/Unity/UnityGames/index.html","7e6587ab9cb8b584d8a00341f7bcf99d"],["/categories/Unity/UnityToolClass/index.html","0d17bc3f44717cde1dd3c164dbe185a3"],["/categories/Unity/index.html","b7da2022b8196647ae2be79f5716d90f"],["/categories/index.html","9bc45c5f3a5b7e9383302c74a85e09ca"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","a152d401a560d6ab437cc7e32cbc4035"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","976d5cacbc83f037662f6e1b9daf787e"],["/sw-register.js","dde34072710021df0e795ed07e0d1241"],["/tags/ArrayHelper-CSharp/index.html","1c0f0d1919f8cefdd22c1d6dce45a97b"],["/tags/Coroutine-Unity/index.html","7f9e7fe09b7cb9290a2bd8ca6fc68661"],["/tags/Delegate-CSharp/index.html","5267f614f1dcd9254d2f0260b3555411"],["/tags/Enumerator-CSharp/index.html","763b301f935fe75c00c6b265f9f01036"],["/tags/Event-CSharp/index.html","617d0246ed555379f9e3fa9da4e71fac"],["/tags/JSON-CSharp/index.html","9f9dbe8ca49273d849d60057e430f574"],["/tags/Reflection-CSharp/index.html","0ea3bf4f9aa93c34e854b94820212509"],["/tags/Shoka/index.html","f428fd67aa9c1af3df9ea422aa1876e4"],["/tags/SingletonPattern/index.html","ee68bcd4deab0413db8849a5ef1c1511"],["/tags/SkillFramework/index.html","745733ca3c2119bddc30b43be4033345"],["/tags/UIFramework/index.html","9817494f1afee095e3ac546093b36694"],["/tags/Unity2DGames/index.html","87c00e22c69a1ef167fbcb55c9e4791e"],["/tags/UnityToolClass/index.html","637912cc99bc05810d32955a7ff107fc"],["/tags/index.html","72376ae32fdfd321cb1c740483995ba9"]];
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
