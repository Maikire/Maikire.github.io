/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","d26351a8da176843a03c10d810d06d59"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","bce908c075d9e1fc41e615ddf39ea11a"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","d3b81da1044ff27b3325f061affb757e"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","3abee19b711280a7b84efe9aec8aa1f6"],["/2023/03/24/DesignPatterns/单例模式/index.html","e0da7d9f3cea356c45dc1254aa640d87"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","434f46830ace8f1bb253a1e7636eb9d5"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","0dc54955c674924b6da9bb1af266f2dc"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","5f8152292834e7284c66e475b77d2d8b"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","53bf889d0dc1e64397aceaded976e538"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","e3540368dca9fd4d6f307cc13f6657bb"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","65d5d4d31eb6fa5c629a052e451ee0a2"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","f88898c1164b647894af927704bba86d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","d98a2145c64b28dca7397e92f102d269"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","cdc620a1b097d770d4e4b43633585f51"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","d7985cdfc85a0bd35cf8b08bd7dea3e6"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","699883fca354c77b071103918d509c29"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","04839c9f45c8a99a566c2b6795cc465f"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","7bec14c3c0e7bc60f6d37dc2810376da"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/index.html","3c3f8e2e4481088634bf83f2fa2f6f86"],["/404.html","1010757676f2c6da319fd4fbf94666e5"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","78c2b3540810cdceb57ffe18071a7054"],["/archives/2022/12/index.html","0a932f92ac847c2108fda1ea6472c904"],["/archives/2022/index.html","517efb1dd5c924b7846600ad910f6571"],["/archives/2023/01/index.html","a6b5c72827a7e72c9448fd416ee03169"],["/archives/2023/03/index.html","20f0c3feb51d3b8700af9480323d7f4c"],["/archives/2023/03/page/2/index.html","7afb030eaa1c276fcfe41e8f5ff1f877"],["/archives/2023/04/index.html","b509a69b442fcfb1a6fcf63953a45920"],["/archives/2023/05/index.html","65e04ad560267b3893f5d5d418a703cf"],["/archives/2023/index.html","b03bb9f21c67e4e21e531a7c3ea7fa22"],["/archives/2023/page/2/index.html","02c993bafb38bf4b7539482ec3d02bd9"],["/archives/index.html","b949b0f38327c46ad3541a3f0dd8efb8"],["/categories/CSharp/CSharpBasics/index.html","12e6e9b7a1bc8dc16f28f933af478a32"],["/categories/CSharp/CSharpToolClass/index.html","33ca5a251ecbe09f37e90ea52ebcd27b"],["/categories/CSharp/index.html","1a387a38284347a956b7e134c92ef85a"],["/categories/DesignPatterns/index.html","7d47a5b773301122609e94f15be15005"],["/categories/Shoka/index.html","73c519b3dc8bf8dea85020b5cf4125d8"],["/categories/Unity/UnityBasics/index.html","2eb78dc1370ee997cba88d272e4ad2a5"],["/categories/Unity/UnityFramework/index.html","70984b0b066e2b31b0ce86e9278492cc"],["/categories/Unity/UnityGames/Unity2DGames/index.html","6c866c1ecdd15777b90d18936aa783ba"],["/categories/Unity/UnityGames/index.html","d45a287771ece611a39ecd3d5fbd3bc2"],["/categories/Unity/UnityToolClass/index.html","8204a7bfa7d4e91c89f709bdcf3cee48"],["/categories/Unity/index.html","b2c7cc93b0926258280604f3d44fe514"],["/categories/index.html","027a1155fc33b009bb5760ae2e52ff2d"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","40dd961baac0b9944fd2a247b383a981"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","86da9b5a8a32113a1ff5d46574408740"],["/sw-register.js","1b983fbb99d9acd907c4d17dfa72db0e"],["/tags/ArrayHelper-CSharp/index.html","924ee00abeba54497ce6cfa561207929"],["/tags/Coroutine-Unity/index.html","c4de6047d60323a4fca546edfdc93815"],["/tags/Delegate-CSharp/index.html","010297b3f345fa4fa2ff86b4fec9ac09"],["/tags/Enumerator-CSharp/index.html","d390400ed9b09d66a0a85eae4454b357"],["/tags/Event-CSharp/index.html","2a73b74b6d6abbec60ff604a79751e64"],["/tags/JSON-CSharp/index.html","9f7242c5eadc7c7dc231c2df2727b60c"],["/tags/Reflection-CSharp/index.html","f733dd4a2022508d3ff06be6d81af73e"],["/tags/Shoka/index.html","6120d8f37e4fd9df39377874577d9cb2"],["/tags/SingletonPattern/index.html","83cbad36b62783d55871347235cdfe1b"],["/tags/SkillFramework/index.html","b2ac79b1091e870b9f47ff16995ba5ab"],["/tags/UIFramework/index.html","7288a83e981bacf228998f32d706d803"],["/tags/Unity2DGames/index.html","aea1fea2831c487750b6fa40fbc8e0b7"],["/tags/UnityToolClass/index.html","dfd7170e859a17ec0ac9003e05b83d81"],["/tags/index.html","7a4886cc3cdeb512789af5bac120dc3e"]];
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
