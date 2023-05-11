/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","a2534aec1e7aa11593f367cb2001d6e0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","a9318f0538454ee84adf024c5d14c439"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","1f19c658ae766caf303181371fddfb04"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","3b0560b87d6cdeaac26c9ddf3a33f866"],["/2023/03/24/DesignPatterns/单例模式/index.html","2c59af0722ab6b4f8077b07be1f24651"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","bfbd35bb06aa0171bedde52f9c2dfa41"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","1014bb48feed308e44619611de31d187"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","f678a45434bc138c6badc932a7f18e5e"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","b04223506a43c8e56407e2a2e7407005"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","a46988e8ad8c7fc4100f4b259db7deee"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","2a2e8033fa4f5af959a28f5f197dc3f5"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","a3dae02b63e90d1b38abb8e979554216"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","9929543e0fdf1640882f43aaf3aa1c91"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","ff78d8cd11c194a7bca711bce9e7f2d6"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","0f66dee35e6d705c23628f68a607b792"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","07a769d307d12fb59aeaceb24a6beb61"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","8cabda60ea9705871c7b1e76b8c5f30d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","bae09d615bb02ebb3f4b7d3d33e2b6d8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Character.png","ceff8d2b551c0199e8fcd1eede3b73c9"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","5c38ae214b818678c0e8594274e3d693"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/404.html","53e016b154e4851f6c25db6659662393"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","3f25f34b831ea63d9fb53faff9ecda38"],["/archives/2022/12/index.html","c331fe2764492f976ea96fea66a3d92b"],["/archives/2022/index.html","b2b62efcd5ae7d40a282e6a5cd64c83c"],["/archives/2023/01/index.html","54dd211b4d98070875f3d1d931622384"],["/archives/2023/03/index.html","f1000baf988cfd346a706772784830d6"],["/archives/2023/03/page/2/index.html","ef1321ee1ca3370065bd821008979362"],["/archives/2023/04/index.html","808e0b57c94fdf01a475e18198ad7f7b"],["/archives/2023/05/index.html","ecc99bccb5fba8f625dcca1657af5479"],["/archives/2023/index.html","08f2471c7062052bcea8ca90054d2566"],["/archives/2023/page/2/index.html","a8404f280c6ddd71ebfeec7e00863a50"],["/archives/index.html","cad4299677e13afcfb6cd7aa7f6f3546"],["/categories/CSharp/CSharpBasics/index.html","59cbe19aee6dc32b01a51765e8477323"],["/categories/CSharp/CSharpToolClass/index.html","b88e26fbece279ada35cbe067da24bad"],["/categories/CSharp/index.html","b82d85686c4c6cc9aa849654c06f0192"],["/categories/DesignPatterns/index.html","b24993beb3ed61db7dee7231253014ff"],["/categories/Shoka/index.html","01dda7a6fa2ec32bb4fa6ba827459e19"],["/categories/Unity/UnityBasics/index.html","7bedef73307d2fd8fb29b43c99085a29"],["/categories/Unity/UnityFramework/index.html","0cb378bc2897c8c860e2275fd67f92cf"],["/categories/Unity/UnityGames/Unity2DGames/index.html","f39a1a41763218f2e7b85d1503e2fb15"],["/categories/Unity/UnityGames/index.html","aa9d7cabebeae40f0fb0bf567a104a2a"],["/categories/Unity/UnityToolClass/index.html","54729ef3bd45daf189e81074925c7bef"],["/categories/Unity/index.html","c17b683d5f406d738fb9965405752dea"],["/categories/index.html","3ca7b3a44d07b3ec15a5787da2e4a40b"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","c7212ba4ccc8af4db59530dbeab0df89"],["/games/catch-the-cat/index.html","225743fa19138c7a47a8a1f914decb7e"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","64a60e183c01eb624776349f8b220e04"],["/games/jump-game/Build/jump-game.loader.js","2af853a4bbca4dae0e78fa81a5bc987a"],["/games/jump-game/TemplateData/Long.png","02d4b812b80b5e673f0d93f3f46dbaaa"],["/games/jump-game/TemplateData/MemoryProfiler.png","90178b1c01bd4c66a21b9f2866091783"],["/games/jump-game/TemplateData/fullscreen-button.png","489a5a9723567d8368c9810cde3dc098"],["/games/jump-game/TemplateData/progress-bar-empty-dark.png","781ae0583f8c2398925ecedfa04b62df"],["/games/jump-game/TemplateData/progress-bar-empty-light.png","4412cb4b67a2ae33b3e99cccf8da54c9"],["/games/jump-game/TemplateData/progress-bar-full-dark.png","99949a10dbeffcdf39821336aa11b3e0"],["/games/jump-game/TemplateData/progress-bar-full-light.png","9524d4bf7c6e05b2aa33d1a330491b24"],["/games/jump-game/TemplateData/style.css","033095607e94108b3505d05a4f3a4c6a"],["/games/jump-game/TemplateData/unity-logo-dark.png","5f00fa907e7c80061485fc64b62ca192"],["/games/jump-game/TemplateData/unity-logo-light.png","daf8545f18a102b4fa8f693681c2ffe0"],["/games/jump-game/TemplateData/webgl-logo.png","0c09503c39e9a26675e5f56d82f061b3"],["/games/jump-game/TemplateData/webmemd-icon.png","e409a6f1c955c2babb36cd2153d418b5"],["/games/jump-game/index.html","ec3c2426ca1f5f70f47a76ce9537bbfa"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","59887c33c6dae4534cb7327fcfe17dc4"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","bc7da80b72fa2b64d51f643b0a3d0ce4"],["/sw-register.js","734c092ec4929285d082ea210719eb99"],["/tags/ArrayHelper-CSharp/index.html","c122bb0d9ff9517f09f93197fefc09fe"],["/tags/Coroutine-Unity/index.html","93cd7a4501001b17f6b07dcbaedd48d9"],["/tags/Delegate-CSharp/index.html","bbc8dd726e612f55ff5e3dcf241d4b08"],["/tags/Enumerator-CSharp/index.html","93dae43e76fac07e5babfcb8366c3415"],["/tags/Event-CSharp/index.html","9f2da9838f4ce19b111a742a750240f0"],["/tags/JSON-CSharp/index.html","fb9fd9ffce171ec37414a3e9bd44bbe3"],["/tags/Reflection-CSharp/index.html","3b6fd9862077c8984bb7f9fd34265758"],["/tags/Shoka/index.html","8c264f92f750f3f1053a6904d94b97c0"],["/tags/SingletonPattern/index.html","2a14c4c83dc442daf087859af791663b"],["/tags/SkillFramework/index.html","1bf4e0cc30d12ea412e02fbae7643291"],["/tags/UIFramework/index.html","647d41df9a583ef5c7d61adc97e06dd0"],["/tags/Unity2DGames/index.html","2bd394cbf8d8ce63adb766619c89d00d"],["/tags/UnityToolClass/index.html","c8260b0881e59f0aeb839599277b78b5"],["/tags/index.html","4db0358e726b01647991b1fa54e2c26d"]];
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
