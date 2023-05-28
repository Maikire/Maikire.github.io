/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","506201a8ef85884bac96e6dd4f9cfcbf"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","1aa73c57761a3c5a67463d3130118a41"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","712741dab49a014117661137ade35ca3"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","067be289e6175991ddf34746f9e65296"],["/2023/03/24/DesignPatterns/单例模式/index.html","fd15d26220f43efd7fbad225da2e6f3e"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","cfd2ad915c78286c569beff6ddb1eecc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","61867d7803554f7a20a66068ccdaaea6"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","e7a33abe9bdf5d0a3d7738542305681d"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","032ff25aef67d0e12610de93bd4a1f56"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","aa376ec62be28af034068d7b725aabcb"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","0a5c6b754211b32a239d4896c2cc1e02"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ec3e74164189c4d72d6c7108429847a8"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","2042e6b9c879930d14d90a552f6f0904"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","74dece7d0702d9020e7c63fbcfb3a25c"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","6f235d4987ffe509b87103bfef00c623"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","8ac14b1a3a9cd13054b03240ec6013c9"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","7f31d3fc1e392b5db8cb1a0c6cc2af3b"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","45d416e5ef3eff59ae917ee718f0bb9a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","1bb1a74e32c9395acc6ae9d1821974bf"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","607b39777e0e9d34bac8831ced3d71a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","cc19d10e47b2aa0f92559f0af8d3a5b1"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","e07ab95010752b5bd92c1d91d2e25629"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","a1b3d924f383f2d002032877f5ae1f2b"],["/404.html","790f5578d6ddfe3c2db4b1d2aaa8e9b3"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/README.html","d1933ebf485f63e6b3c8da3c9eb6c195"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","fe1d65c9395f072078199cacb8c9f792"],["/archives/2022/12/index.html","d8e0df67e4e0c92d51a31cc847db4918"],["/archives/2022/index.html","94c044ff5746763578c05e534b005e9b"],["/archives/2023/01/index.html","43db2a8df5c600a1507844320442589b"],["/archives/2023/03/index.html","f50b8526bb2c6d4f02f0c43b0a93173a"],["/archives/2023/03/page/2/index.html","f1826f58b00513fdb3e636922f12ccb7"],["/archives/2023/04/index.html","12ca00fe6624cab60f2b49f4f3673e99"],["/archives/2023/05/index.html","38ac014bb863a9371975a4843f003afd"],["/archives/2023/index.html","8cdaaa1c9520afe33a2a6950ea2d0484"],["/archives/2023/page/2/index.html","1544de901b7dcdc5a0f7b48feb12458b"],["/archives/index.html","64a4c8c0c04744803198c6166d6c7092"],["/categories/CSharp/CSharpBasics/index.html","1d431707b4f81855629c177032906145"],["/categories/CSharp/CSharpToolClass/index.html","8f0c24c50f8c4aabcd8c5f2aefdaa227"],["/categories/CSharp/index.html","b755c4a6e9d342e5de2f58bb24f5eee4"],["/categories/DesignPatterns/index.html","40647feed6553e2c4732c61c6bd086f6"],["/categories/Shoka/index.html","a17027e7320409b4c22cfc7a3cf38ec8"],["/categories/Unity/UnityBasics/index.html","3cab51511a6af407dee973b56c1cda91"],["/categories/Unity/UnityFramework/index.html","c967163a5ac187b2c690de7720a50644"],["/categories/Unity/UnityGames/Unity2DGames/index.html","ebd1f0b8f9bbeb86ade08a2433c5733e"],["/categories/Unity/UnityGames/index.html","856a7d889dcbf84cb5e96e9dcd123830"],["/categories/Unity/UnityToolClass/index.html","d198d426cdf7407336d512e7c711fada"],["/categories/Unity/index.html","c92d9960079959346b20f6d61b04a5c4"],["/categories/Unity/page/2/index.html","042cca49454d2e30f6a1bfe83ceeb8c8"],["/categories/index.html","580646868ee925b6afdf5369bac7fd7b"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","2142d951c158132f206b9c7529187674"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","2b936810e6342a6580030c235f564d7d"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","047eca556779d73d6e02a2b70ea981df"],["/js/app.js","154c7c34ab0b16931237d01afb60ec1d"],["/page/2/index.html","82581d95ff63570bfbea211a737064d5"],["/page/3/index.html","037f40a79e4bb684ac7cf3ffd16ee383"],["/sw-register.js","0093ede4be845732b6a1d331a7084cc4"],["/tags/AnimationEventBehaviour/index.html","7aa089cb780886d19e6c2a8ab570c3cd"],["/tags/ArrayHelper/index.html","9b4ddec7060ee8d58530ef5acc6cbb83"],["/tags/CharacterFramework/index.html","08996cbcc9f5d1f61349ab1e25b88c15"],["/tags/ConfigReader/index.html","18d1a10c85f16ae5a197605c36fb8767"],["/tags/Coroutine-Unity/index.html","801364ed80196beaa58225274e29914b"],["/tags/Delegate-CSharp/index.html","688987c2240d1498d4275e7b1204a6ab"],["/tags/Enumerator-CSharp/index.html","1116ebb01c5d92e79b608c57fb28560f"],["/tags/Event-CSharp/index.html","41d1e1420f64a8c80ef7eafec9702046"],["/tags/FiniteStateMachine/index.html","7d4c45bcf0ceae25ad8d4c3339c58b9d"],["/tags/GenerateResourceConfig/index.html","4923558951ffafc05778dbc27d69e1f3"],["/tags/JSON/index.html","169c0f184c99cfcb9b15207ac9c4fdbd"],["/tags/ObjectPool/index.html","9d222cee28ff4208280274174fae42f0"],["/tags/Reflection-CSharp/index.html","0a5cc61a38219c9cd1021a1de23e1cdd"],["/tags/ResourceManger/index.html","f3847a7f5ee3dd8f55ed1d80552c948a"],["/tags/Shoka/index.html","87c085739216adbad0d7d72a22bb6f78"],["/tags/SingletonPattern/index.html","c7da1fa2332c6d7510375070e7eb9631"],["/tags/SkillFramework/index.html","fbf4b66e86c1bda46e9175fe41c9fa35"],["/tags/TransformHelper/index.html","4139a407f2956084426abbb288700ee4"],["/tags/UIFramework/index.html","e23e367ae163d8d8cb0335f38381f965"],["/tags/Unity2DGames/index.html","57daed29b10f354c23fc3b5c2496c420"],["/tags/index.html","f35a1e90cbb271faee3d8020958142a4"]];
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
