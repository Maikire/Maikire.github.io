/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","bcaa815a8b0d8f3d8396ef3503a6f7d9"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","39fff13506c423ffacc773686eeebe98"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","d4ced8b0d65f6dcd9930108f5af512d9"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","0d9c3b3d254b931a3afbf0760e0cd466"],["/2023/03/24/DesignPatterns/单例模式/index.html","8a26b4319e45347f1679caf8a0701d00"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","cfd2ad915c78286c569beff6ddb1eecc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","c3ff53bc508388f4f4ff2538ffe6deed"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","9e54180389519a6c542f39333ef0154d"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","628a0e4522f2317b4a52cfe7a16ef3ec"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","6c927a7b10afdbaf5a71ad5ae531179d"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","70160255172e7b4e75721b8db0198798"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","36f6c7207af33ae1a051385b5cca039b"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","67bba3b1266d1dde9305624671fb848a"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","3cde144837e0c5adfbf8d66391df0174"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","33d4c24a2559cc3bf7b5a78a97b6a868"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","bbaac780e8d1337288aa9a20c774d7dd"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","99599608f3a7e49548fcd8d7b67ec2dd"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","eb95f09659cb5bc01f7423651e992c3a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","70a10ba0209fdf2d63c3d983069a4fac"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","9dabd6c2d64afb1c206e45cefc5d25be"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","cc19d10e47b2aa0f92559f0af8d3a5b1"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","be40437ec89035ec098bbfa061abc1c2"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","d9c1134b7166b639827548ca83eb9294"],["/404.html","027f4f019d7e7ca608dfcb5ea50b8dc7"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","a7b63c234f8ef05ed78791ec25da86fb"],["/archives/2022/12/index.html","32bfaf0f0a93df78f04fd8ac8ac3304a"],["/archives/2022/index.html","9881880d3a07cd1a0d3ee29b099677d7"],["/archives/2023/01/index.html","6ee3069364241f425de542282cd2866e"],["/archives/2023/03/index.html","5f225115cad26084b9e4367f3c722beb"],["/archives/2023/03/page/2/index.html","89d38392011d6a7a63d3e4cd536e9f77"],["/archives/2023/04/index.html","b4b8ce1747b2869e1ce23e4d1ef989d6"],["/archives/2023/05/index.html","e7f39c076186bf970aab8ec1f9b8f0a1"],["/archives/2023/index.html","0ff3d9add088aaf7707c00ae0286762e"],["/archives/2023/page/2/index.html","da680a5fa3d3770dc8a456a3e135e2a0"],["/archives/index.html","3af69c11bb032216e6eb0db067b07f7f"],["/categories/CSharp/CSharpBasics/index.html","6605acbbd87cce2e99e179efb6e34e40"],["/categories/CSharp/CSharpToolClass/index.html","ed3f6676c8ccc7565c4781a7ac6b89dd"],["/categories/CSharp/index.html","64a1610d955be1f8e0dfc19bfe0ee97d"],["/categories/DesignPatterns/index.html","67c07660c3caf62fd24a6ac58fd8c117"],["/categories/Shoka/index.html","e4422d839ac59432470e32db0755ae54"],["/categories/Unity/UnityBasics/index.html","ac825af7561bb1d9a25dcce07b93ab93"],["/categories/Unity/UnityFramework/index.html","7ec22a04fa1953de7385cfa694f5f28e"],["/categories/Unity/UnityGames/Unity2DGames/index.html","03e82b9127a6240515fe20575165e742"],["/categories/Unity/UnityGames/index.html","93408dbea85fe1fea418ee0dabc64390"],["/categories/Unity/UnityToolClass/index.html","89d4cf776fd2d089ad0eadff52a9cf89"],["/categories/Unity/index.html","a8cc811a2316256c272b85ddacac7e3c"],["/categories/Unity/page/2/index.html","26e2e8ed5adaa2a4b5e31515c3f6d465"],["/categories/index.html","024b6e3acd3102a03c03c7ea58d158f2"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","280a1b6310868e1f8f34083b2409bd5b"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","2482f80726fd5352a9a7e65719c6d439"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","3ccff3811358da71689083929a2ed45e"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","cdfdf1dfa271b3594b2791d983b5f5df"],["/page/3/index.html","b2d3d5362d1854f97610d20f76e2e661"],["/sw-register.js","48700f7cd660c7663aeb7e95636c67b9"],["/tags/AnimationEventBehaviour/index.html","c718b6ba82a3f4304b3fc2e21b2870e0"],["/tags/ArrayHelper/index.html","81264716e3e1e8d3374e10602f8749ee"],["/tags/CharacterFramework/index.html","5fa181050cab1c2d2cc1cc1cff2f9c17"],["/tags/ConfigReader/index.html","7af6b03c0cb8ec0b1e738edd25819d9d"],["/tags/Coroutine-Unity/index.html","e42f39a81201f7777e1a3b6a23081e7a"],["/tags/Delegate-CSharp/index.html","e3ad9932b03d8f9c6fc6ed65357ba10a"],["/tags/Enumerator-CSharp/index.html","0dcb8ebc3f0fe2677ac6cc388b47a040"],["/tags/Event-CSharp/index.html","9cbae4d4e3156cefc94f9f181aaed5d1"],["/tags/FiniteStateMachine/index.html","5e4e868d1fe46f8f5c8727245dfdb098"],["/tags/GenerateResourceConfig/index.html","6c43b7cda2e1c3de14deadf9dab690a7"],["/tags/JSON/index.html","7b1bb8d3829ff104cf81f5d7f26b48bb"],["/tags/ObjectPool/index.html","468e847116aa22e14a548575d1532425"],["/tags/Reflection-CSharp/index.html","cccbef571398bb9ac0b31400c3548b63"],["/tags/ResourceManger/index.html","aff3d1fc95366325c5d1fe41b13fa1b1"],["/tags/Shoka/index.html","9f453907960889b63bae42abd2f88298"],["/tags/SingletonPattern/index.html","50ceda69b78f75e6b3aa7c7125b7b880"],["/tags/SkillFramework/index.html","374cfe12daf8875b3f7d6ae72dc3c9c8"],["/tags/TransformHelper/index.html","ba2210f96ec40e68d37862195a46cc12"],["/tags/UIFramework/index.html","303d267cf2c1d82c8ecc8fb9f7799eb4"],["/tags/Unity2DGames/index.html","2c0d0dd212b9b8f06a76dd21ff52b29a"],["/tags/index.html","e53a9cbddd1ed25b181092a6d4416bb6"]];
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
