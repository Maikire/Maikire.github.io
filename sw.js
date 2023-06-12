/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","ede8ac81a584f9d734138f3da230fac4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","69393986ac98dc53f1a91ae7c92e75ca"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","592f77d0b21074b512cc6a5c04979919"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","2f129d01317b044b0b6c4dc6fe73d55a"],["/2023/03/24/DesignPatterns/单例模式/index.html","0a0f8d865930a3f559ecbda4dab97692"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","3883fda568eaa49154ae89388ddd505e"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","33e5c9dcab0ac8cc350aba2253f2c795"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","758135bfe0c7ba09b08754800cba6bed"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","41026b2681baa687e8dcd8409ad03e31"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","f5e33ce7c80bcc81ca4988cc639cf2eb"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","11ad76f445bb74e38ee3533b3880b21a"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","d1c91f5fad470d3277329f39a5a3b0fd"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","7d1912f7cf66de5578abf0dbc8a2e686"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","6ebe9030f1973a70265493904d2939b9"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","c769fbdaf1b616c30daf8413b7edeb3e"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","f99e7054c0dec09117aa2031f31e9192"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","16a2c2a9a04e66fff2ed73baeb91fe94"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","b1fc2994a4102d8c4962b6672e250622"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","9e217c6c5bd27e7b8379a64a36d348e9"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","cc19d10e47b2aa0f92559f0af8d3a5b1"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","69ce4c8cf7af18f6c0a19f144abe4d03"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","46e2af0ed848ce7d1408943974e409da"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","de6de2d557cec267d1819c129512c8d1"],["/404.html","229761ad50ddf9ace70b39195aa3d589"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","fefe37aafd0abcbd7a1f137f91602ca4"],["/archives/2022/12/index.html","5bfdae3a6c87aea55c8cd560818ccf1b"],["/archives/2022/index.html","eddaa0127567ca64ff0c3f71aa8e94ab"],["/archives/2023/01/index.html","14b3aca9f5cba15a242415914fbcf9fd"],["/archives/2023/03/index.html","a223b922f27b96ef368b42e41158a7a2"],["/archives/2023/03/page/2/index.html","925b5417bd0e2f5b48cede012edd652d"],["/archives/2023/04/index.html","9e3aa18509cb86013b2e4e7f64246664"],["/archives/2023/05/index.html","16903f229d86ce4c78823b7ec155243a"],["/archives/2023/06/index.html","8ddf3872f6e4b02ea6fa2188d310eb93"],["/archives/2023/index.html","e8c80a07672c8dcd9cc53f4c9f164101"],["/archives/2023/page/2/index.html","6c9b2c1be222b33c28220ff6722fe229"],["/archives/2023/page/3/index.html","e8a9b995cebd8381c4e381743a3dfce8"],["/archives/index.html","c5a4809ca8b0fddddf062f906681cee7"],["/categories/CSharp/CSharpBasics/index.html","c0c1936e42727a09e14975794b3394f2"],["/categories/CSharp/CSharpToolClass/index.html","572948ebf6a8bce02b7661adcbb0e995"],["/categories/CSharp/index.html","bcebe44a6c044d02b1d0a07da4d009cb"],["/categories/DesignPatterns/index.html","dbd31a44256a44bb5b72339571ccc61e"],["/categories/Shoka/index.html","0ce19b9667627953aabaec16d3cfb78b"],["/categories/Unity/UnityBasics/index.html","ff0ef4a70a250cb5635f7e2aeb069e55"],["/categories/Unity/UnityFramework/index.html","4c8eaf6cf6c52fbf706a100491e3e224"],["/categories/Unity/UnityGames/Unity2DGames/index.html","f4dad7da3be6105b71f0b176ae792981"],["/categories/Unity/UnityGames/index.html","f86e61b78ab25d2b9bcd94f9e6ddb37c"],["/categories/Unity/UnityToolClass/index.html","3b0aa7a78d793737ec16b63043a9688c"],["/categories/Unity/index.html","18b86bf15f6b803122ebe9768efdc6bd"],["/categories/Unity/page/2/index.html","da3ed2fb4a3bd8a7e0208cd189ac99bb"],["/categories/index.html","a401547b7af215cf4606f38508e98153"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","cf7b347c45c14516a824aebfb4a63642"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","f7d57f6e7433c636a258177542dfd0e8"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","fcf78c06113b77c8fd5a31ef82a50389"],["/page/3/index.html","37c12518ce66f635e93a50eb42707353"],["/sw-register.js","d39964725bc3daaca56891970ade8e65"],["/tags/AnimationEventBehaviour/index.html","e2193767ca25c189f489bd8c4c813656"],["/tags/ArrayHelper/index.html","100b31e8cea518813ef781ee1b40ae8d"],["/tags/CharacterFramework/index.html","59d423e3b14846dae44bd997158a1ac2"],["/tags/ConfigReader/index.html","fe9b272b3ec30f5f8be95ca07516d4b3"],["/tags/Coroutine-Unity/index.html","b87e57bfddc0c0416d1b80bd4dc0fb37"],["/tags/Delegate-CSharp/index.html","7ab7bdac0eb5f0c4761c25fdec06f1cf"],["/tags/Enumerator-CSharp/index.html","3c4b38faaeddc456d9a11eed9dfd278a"],["/tags/Event-CSharp/index.html","bff3cefd232292f53c3da63517f5a3cb"],["/tags/FiniteStateMachine/index.html","4b05c362119a3e1795c48d8f6dea93e5"],["/tags/GenerateResourceConfig/index.html","f3752d591bc50be0e1a53afc8df4a872"],["/tags/JSON/index.html","4592f42d84ac17296d89a0452761f505"],["/tags/ObjectPool/index.html","db681cb4d34efb1e01b1840c58135c81"],["/tags/Reflection-CSharp/index.html","cf7347a5086b2b5e51765ac4dcced854"],["/tags/ResourceManger/index.html","83dfeb553173249614e874295de9ef96"],["/tags/Shoka/index.html","9f4f0e753ff66eff78e3c2b5750663c8"],["/tags/SingletonPattern/index.html","a4d87821f121d977f93df57e1f3a14ee"],["/tags/SkillFramework/index.html","7c563d2c296d5b981d7a329fa662afd8"],["/tags/ThreadCrossHelper/index.html","831fe59f30dbb1f835e00a2b5c66d929"],["/tags/TransformHelper/index.html","1b8c9b90752db1f51ee07e84da9c08af"],["/tags/UIFramework/index.html","dbdd2b518d6b437d29695772103fc117"],["/tags/Unity2DGames/index.html","62ce60f76cab933666a6beeb620c23b7"],["/tags/index.html","face731feb96eb1a815cf54daeaeb2d2"]];
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
