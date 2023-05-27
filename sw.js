/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","434aacf7a82ebac178266d8249a25dba"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","47ab10d7fbe042058e7da1f3251dc290"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","95dc8f98e313221332324c356f6e08a4"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","16f689ab21d345d6caa48285fdaa0db7"],["/2023/03/24/DesignPatterns/单例模式/index.html","a47fa02ee81fc1f7c8d29cc3f94574d2"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","cfd2ad915c78286c569beff6ddb1eecc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","5bfbbb829a5b49a1746a3c73db43865d"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","4db011dc0e88c67c99ed1e3ccdf815a5"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","19300a5c4bce1d370074b22105d95753"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","40c5b8ea6e6925117d5219db36192f94"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","87934749329261730716083819bb323d"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","544fe9f4d958639baf6817df7b938daa"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","753c988ac08f6afbd756be3f242d32ac"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","c7271e43c7a1d3c74eac92c61781d3e3"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","130b53b4a5ca4474b6f6e33b9beb7809"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","0af7d920eae34ad203a0ec3c1f87a010"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","3fb0bc7e108deaea65c12c1bd0aeea85"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","f7ed00da01c798924f68d53a887a48e4"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","cb2ccff3e5049f87cf156355877afb60"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","2def96894bae527179e5e6fede8f093c"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","cc19d10e47b2aa0f92559f0af8d3a5b1"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","6e069e8170bd324fa975c30617269e73"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","7e8fd62a0e29681e05ae97fb05a9aad9"],["/404.html","d5c665fab6c5ce05dfcc1979cc0499a9"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","cca3da27311c0675921d6efe3d6512c9"],["/archives/2022/12/index.html","7389b93e5361914b8b30d0ea4f284140"],["/archives/2022/index.html","8bf513f2eea4949d6247f7f33000a5cf"],["/archives/2023/01/index.html","8bd2bee3ce145c39151bb5bcaf4c992c"],["/archives/2023/03/index.html","7c594a5b1663d4614c5acba14da92ca6"],["/archives/2023/03/page/2/index.html","84309a6c5be5e1ee9521478964d328b4"],["/archives/2023/04/index.html","775ed873120d46a6809f49a51b6c862c"],["/archives/2023/05/index.html","20d7450f4d1734d740e19defc8cb14b0"],["/archives/2023/index.html","375786ee84ea5346657cffc465fc4025"],["/archives/2023/page/2/index.html","be8e30dfee6fce6788f716907d7d5960"],["/archives/index.html","7b26b5b931ab2c36dd9976316111713d"],["/categories/CSharp/CSharpBasics/index.html","0a88be838943f36827ce19c70926b7fb"],["/categories/CSharp/CSharpToolClass/index.html","59a21d825e1493b7b351eb543b5ceb81"],["/categories/CSharp/index.html","bdf8a3ef87506d0fc7c0f80d675d0a52"],["/categories/DesignPatterns/index.html","359be66596bda4cad798ccf5043556df"],["/categories/Shoka/index.html","74b1e7f6d58a27d52c6f7d78ba67ba59"],["/categories/Unity/UnityBasics/index.html","459a2be0e0c55858cbb47bb507bcf60b"],["/categories/Unity/UnityFramework/index.html","ab696e434426ac11fa4689d43aec5398"],["/categories/Unity/UnityGames/Unity2DGames/index.html","a7c19fb6100bc1d4fa098109605de715"],["/categories/Unity/UnityGames/index.html","3a1aa5947c63607a005f668e6fdd0241"],["/categories/Unity/UnityToolClass/index.html","88cb2211c449051b2337799b5d51a4f7"],["/categories/Unity/index.html","8e37f8d22d273eecddcdbfc7e3aba0e2"],["/categories/Unity/page/2/index.html","e4f6d211221e6300c4f3a8c5cca241dc"],["/categories/index.html","c7f2fcbe4eeb363c02f0a8bb5fd7cb27"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","dc2e41ca2325595db18a6e7b6d44e946"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","ef3838b16bd33dea4159f21fe527059f"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","572ec01fc63111be86da28fc41f04498"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","ca94dadea6063bfc4e3b51ca2d141788"],["/page/3/index.html","3cfdf9395985a1fcb4fefb726534726b"],["/sw-register.js","9140a2278b91eab7393e4a58b10d7848"],["/tags/AnimationEventBehaviour/index.html","5220df45d0ce10d37509e5ff8ac1259a"],["/tags/ArrayHelper/index.html","be283cd36ae9db849a684d4f92b38f80"],["/tags/CharacterFramework/index.html","19c3b7b02e2249423b7e5a224ab7eb60"],["/tags/ConfigReader/index.html","860f69be07d689181331478a988d6492"],["/tags/Coroutine-Unity/index.html","c467dc17fbc6030786c6f3496e79f74c"],["/tags/Delegate-CSharp/index.html","5624cb7039cb05451e9538f1e3c27b22"],["/tags/Enumerator-CSharp/index.html","8cae9b2dad5357329aacd39d5c1d6087"],["/tags/Event-CSharp/index.html","d2c2f7cd53c455c36ab665a48b91f982"],["/tags/FiniteStateMachine/index.html","dcf24fcf9baec7e81e45bbd62a2aa4c6"],["/tags/GenerateResourceConfig/index.html","7d179152144c8feef2d707316b69ccb7"],["/tags/JSON/index.html","fdc6bb270b0b42e256bd3220ebf6379b"],["/tags/ObjectPool/index.html","0ca7b04a65b7ab092b0a9a5d86d7eb23"],["/tags/Reflection-CSharp/index.html","b5f55a11fcbbfb6c8273274a79bc858e"],["/tags/ResourceManger/index.html","65c784297d33c0641221f962ecf20671"],["/tags/Shoka/index.html","80e480a7dd43590370627e18cde2e7f3"],["/tags/SingletonPattern/index.html","b35778029477d5fe9d35b76414bd3977"],["/tags/SkillFramework/index.html","834e325c67caa9e464d423ef4a52e06a"],["/tags/TransformHelper/index.html","1e7df072827b2ef15fca405f56d01aba"],["/tags/UIFramework/index.html","52985f79ac01d69552b28b0a7348354e"],["/tags/Unity2DGames/index.html","e864b4405924965eae16017b7b0881dd"],["/tags/index.html","b84430f4b1156210a90fc39af8b05055"]];
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
