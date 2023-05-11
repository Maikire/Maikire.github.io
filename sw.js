/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","6ceb0f08b48ab0bfa505707fa35a6b91"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","dc7769e4fa3dcd3a88f731f74f61d2e0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","5f5a73cb6efa5c2e4ccc4c9921b53ae6"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","94c58376e348c3b09eebb6963ca617c8"],["/2023/03/24/DesignPatterns/单例模式/index.html","bc89c5733c6ea790a667a8b2562f4a3f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","b13bbbbfc00a035d743110982e0968b9"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","6a470314f7bae100cbccded1a3050ab0"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","582284fdb6a7d1db20edb9f417a15372"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","3263d869e5f66d326a425f0ee7ca6ed2"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","98e6a3daf1d6275f2998d0b3abdf746b"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","2cf81004bd6a0e762f946c64fed17cca"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","b63a01db8bbf357191582e83f3dcb3e4"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","4009bb9942e69b1e0ac2fa28a8ce38bb"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","3457831517fe221f46d29a2d378c7319"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","ba7a365704d43047c7e688831c8fdc70"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","96600bdc298203e05b47df0c3a33f2e8"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","8bd16e4f49640f3261bc4484cacb6bfb"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","bae09d615bb02ebb3f4b7d3d33e2b6d8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Character.png","ceff8d2b551c0199e8fcd1eede3b73c9"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","5f11029a0dab7f13354c459432a2db66"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/404.html","96f47463427209f9c95a52fc2c4b8837"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","ffeceffb26bcb3db1250337c08a4de49"],["/archives/2022/12/index.html","ab8c6237f1b98bfeb8f3d7e9af6960d8"],["/archives/2022/index.html","ef23e0cda884cb7e2ba4ee558ef4ac4f"],["/archives/2023/01/index.html","73179b06f94aadae423040b20a1fe7bd"],["/archives/2023/03/index.html","544b2bd37daae9f30e8fd369c2fe8ac0"],["/archives/2023/03/page/2/index.html","9423031b92a6cb27b29423881a340600"],["/archives/2023/04/index.html","4047dd8cae52822017f4dd6f267bbfaa"],["/archives/2023/05/index.html","647045af7b2408320004aaea700aae0e"],["/archives/2023/index.html","b23da1f986ba83a2c1e1bd3b858c8642"],["/archives/2023/page/2/index.html","efd2dac0c50c7458325521616b82a470"],["/archives/index.html","79fbe735e3aed95e4bb1885161536e17"],["/categories/CSharp/CSharpBasics/index.html","cb4daae251c15b4698eb3824d39db3c0"],["/categories/CSharp/CSharpToolClass/index.html","d4897a5c97b1f82bf46818b4b2a1fb39"],["/categories/CSharp/index.html","4be161f81105950c6e98a00691af0574"],["/categories/DesignPatterns/index.html","b2b10c1b464b13fcb29f6ce255a60532"],["/categories/Shoka/index.html","d80173a37108405ca2e5baa9cd9bddc9"],["/categories/Unity/UnityBasics/index.html","cb7da628b1960c99eb52eccfc907de4b"],["/categories/Unity/UnityFramework/index.html","a3f948f2221a1a452db83af191ab927f"],["/categories/Unity/UnityGames/Unity2DGames/index.html","7d74bb17b5ed28281f2e22f6b7e4cf0f"],["/categories/Unity/UnityGames/index.html","b239b129f8944c9c58c6cd2110df8c5c"],["/categories/Unity/UnityToolClass/index.html","8ec91e7bccdf23e93abe23e55ddf763a"],["/categories/Unity/index.html","44c1ecaf76b573cd4bac300c22f5f150"],["/categories/index.html","d7e6637593b73ba61a5d8b6336ee36ab"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","c7212ba4ccc8af4db59530dbeab0df89"],["/games/catch-the-cat/index.html","b3c18d15a533998b726afb6349f4ae60"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","8d0c958cfde1202f1cbe51c6de2c1a42"],["/games/jump-game/Build/jump-game.loader.js","2af853a4bbca4dae0e78fa81a5bc987a"],["/games/jump-game/TemplateData/Long.png","02d4b812b80b5e673f0d93f3f46dbaaa"],["/games/jump-game/TemplateData/MemoryProfiler.png","90178b1c01bd4c66a21b9f2866091783"],["/games/jump-game/TemplateData/fullscreen-button.png","489a5a9723567d8368c9810cde3dc098"],["/games/jump-game/TemplateData/progress-bar-empty-dark.png","781ae0583f8c2398925ecedfa04b62df"],["/games/jump-game/TemplateData/progress-bar-empty-light.png","4412cb4b67a2ae33b3e99cccf8da54c9"],["/games/jump-game/TemplateData/progress-bar-full-dark.png","99949a10dbeffcdf39821336aa11b3e0"],["/games/jump-game/TemplateData/progress-bar-full-light.png","9524d4bf7c6e05b2aa33d1a330491b24"],["/games/jump-game/TemplateData/style.css","033095607e94108b3505d05a4f3a4c6a"],["/games/jump-game/TemplateData/unity-logo-dark.png","5f00fa907e7c80061485fc64b62ca192"],["/games/jump-game/TemplateData/unity-logo-light.png","daf8545f18a102b4fa8f693681c2ffe0"],["/games/jump-game/TemplateData/webgl-logo.png","0c09503c39e9a26675e5f56d82f061b3"],["/games/jump-game/TemplateData/webmemd-icon.png","e409a6f1c955c2babb36cd2153d418b5"],["/games/jump-game/index.html","e450019760b88c08973fde4dabfc2355"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","0f83582e65411d0fcc259bafe16cad8d"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","f93a4d10c96487c75854443d281e55c7"],["/sw-register.js","7a6a1da7d2bfd795a0eddb27c108b843"],["/tags/ArrayHelper-CSharp/index.html","16f8bb0785cd24002d956a6cd3d1d982"],["/tags/Coroutine-Unity/index.html","6d0996a232af0e761a2ec3c648559c21"],["/tags/Delegate-CSharp/index.html","2ae8ca0e4c06f724fa8cf25c09ba0b1d"],["/tags/Enumerator-CSharp/index.html","bf60cc70e8d9961fdc5a572038185638"],["/tags/Event-CSharp/index.html","fd191c65ac861c418cf9241718733098"],["/tags/JSON-CSharp/index.html","176f896aa6c99b7697608c47801ba61e"],["/tags/Reflection-CSharp/index.html","5a5e785f0de59bfd3fcf83ac99ab25c3"],["/tags/Shoka/index.html","4b1f63c189551d0c157d49923f102094"],["/tags/SingletonPattern/index.html","fb34004ec63cc46906eac49557907186"],["/tags/SkillFramework/index.html","f51c520a8b19b1ba82f16a58aca098d1"],["/tags/UIFramework/index.html","9449ae9c8e8fb492dc93f4dcc6f3a4e2"],["/tags/Unity2DGames/index.html","45dd2ccac2f1b96df05bdb3cbe50451f"],["/tags/UnityToolClass/index.html","bd5a351b27cc22c1220ed440f56b24a9"],["/tags/index.html","908e43a4348e492863ccf4694e89cf3b"]];
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
