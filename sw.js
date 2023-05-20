/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","250980f67108d18a8720bccf507be93b"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","b49558b63126796be2cce4d0f1a29058"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","a06d9b89bcd5bc2acef46c1fb6998078"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","a4998062c402b88249041dd5d29c2658"],["/2023/03/24/DesignPatterns/单例模式/index.html","a6b115a89f647570c95aea29dc0b17f5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e459b40df05bfc2939d3dceff23b3a95"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","75c8955fede9309940743828dfe52c29"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","13d56392aa5b6ae27b90226f2847ab47"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","ebe55e13609104a499b29f9d325af21e"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","01e7be7decb9e1b07dcda4c0118298d0"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","a9a43c4cb09dfb8df79825c1e5fda0e7"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","24e8b412ada9deedc52e0a1e7d4afd11"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","c4427cbd46c20a912245c59142b975cc"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","1d1d4cb089dc3679223bb0923b12db0f"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","df643ff0a9bb366f926d111388e9b514"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","4e66a02c90de5fe8bb500f0e358a9c90"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","c9a4fe65566273a365478fca41f03974"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","566aea4bc1879c5993dae2d3171636fb"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","2ff8380a4a34fd142985956f0036e133"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","22c2deebd1e78e0969a3027c2d8ee4db"],["/404.html","c6aa04b14503fbe7bcc489d670e1ea5a"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","9ad6c375d2e84e5a91ae63ca6a9c93f8"],["/archives/2022/12/index.html","e9cc3f4716c74e06eeae933ea13d4c81"],["/archives/2022/index.html","fac951d62d50e774cede03bf2842b535"],["/archives/2023/01/index.html","2b5129fb546acc97ecba0b4e4400564a"],["/archives/2023/03/index.html","d0f811f45e0fd401e11a1651b61d4fd6"],["/archives/2023/03/page/2/index.html","403aef83bda12f2610bb37626702b923"],["/archives/2023/04/index.html","c3e7b68c02f89d33da1780306252c062"],["/archives/2023/05/index.html","3be9b31f56d121684d924a6098d024bc"],["/archives/2023/index.html","704a2dd833336a4cc2b995b85643ceb2"],["/archives/2023/page/2/index.html","3b6274955d1544e0c161b2c96aae1424"],["/archives/index.html","24c58604fda3899990d1399f53fe4521"],["/categories/CSharp/CSharpBasics/index.html","86abab3cdbecbf1fb007d3add1628bb9"],["/categories/CSharp/CSharpToolClass/index.html","753676d85b2ccf1a09f96ce21d6c04e2"],["/categories/CSharp/index.html","7bf74093f4befdd1bbb804f95c57f0e8"],["/categories/DesignPatterns/index.html","015784f8636bbccb770ea819beb1915f"],["/categories/Shoka/index.html","eb22e68effe84fe0ccba47281072160a"],["/categories/Unity/UnityBasics/index.html","ac7947cfec7a2cdd6c44c2cfc60f51f3"],["/categories/Unity/UnityFramework/index.html","1cc4bdfdabed0e0154a25b3229e57db3"],["/categories/Unity/UnityGames/Unity2DGames/index.html","862765ce0578996afb0f8ba921474c40"],["/categories/Unity/UnityGames/index.html","184de190c3edf179da28b11b3cb56787"],["/categories/Unity/UnityToolClass/index.html","5c12f86a2f322b42f3fdd9534243a1c3"],["/categories/Unity/index.html","dbb12119eb82c9b314fbf31c35443457"],["/categories/Unity/page/2/index.html","93919087da70386262ffcfcdf4f63671"],["/categories/index.html","86fbf54960313a107b0ed5beda76a806"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","87f76b0ab622c59a21e051f306ab17f8"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","69bd2e0711cfb8bf5bf1d533bff382ff"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","a930a681e4f962d4b6b4c918b5642809"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","007723b9645980c821b603000d071ed4"],["/sw-register.js","b0079498105cff10c8a7399885cbba5e"],["/tags/AnimationEventBehaviour/index.html","8a555d33926e56039f9b16d1ea7a324e"],["/tags/ArrayHelper/index.html","64cee817ec0e161c0cd1f9e5dd3f8f9b"],["/tags/CharacterFramework/index.html","2bc064721765b72f12c01751d8f3f7e4"],["/tags/Coroutine-Unity/index.html","308b5a55710dbfc0d59e58bb0f900d59"],["/tags/Delegate-CSharp/index.html","eb5668ba38101b0e32e6a067b816e5da"],["/tags/Enumerator-CSharp/index.html","995a5ac769d55c1432a39c847b901cae"],["/tags/Event-CSharp/index.html","a461851a5be5ba2065af9f16aeb5240c"],["/tags/GenerateResourceConfig/index.html","b43c320e52d42bc893104addb972872e"],["/tags/JSON/index.html","0eb630013c93853500329c4f33554a0d"],["/tags/ObjectPool/index.html","56d71fa49376aaa33f64069bcdf551fa"],["/tags/Reflection-CSharp/index.html","9d07805e86b6fd55416933b38def77ab"],["/tags/ResourceManger/index.html","d8c217d8721de1bcb7b180443825eaa5"],["/tags/Shoka/index.html","bab99d089d58678f477c670c23a1ff7b"],["/tags/SingletonPattern/index.html","7a2a7b2f7b4d8b6dade26e62807af13f"],["/tags/SkillFramework/index.html","930ce35f79544475aa81ed353884b414"],["/tags/TransformHelper/index.html","45b01f51abae79f763085f68d7c4726b"],["/tags/UIFramework/index.html","72f0cae3f8643c55677cc94378bc0ba7"],["/tags/Unity2DGames/index.html","e68a0337c28869eac70faf33fed022c7"],["/tags/index.html","6efab28ad67ef09679167df505aae588"]];
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
