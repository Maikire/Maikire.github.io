/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","c000985f35a66b3cef2f0e4d4713a222"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","7bbba103e690e3776e990cb929990840"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","4f1e16ce6efda35dd56fb303521d9802"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","233537738fdfdd3f670ab16ddcfb30ad"],["/2023/03/24/DesignPatterns/单例模式/index.html","b47bd0f31e9e97a7e933126b5c68d0ad"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","cfd2ad915c78286c569beff6ddb1eecc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","bd747289e311474a64a90fe2772d2e21"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","4807172717fb27753c152c6884a768f3"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","4e1fabbf14fedff796a86a9f5466e4cb"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","742c9d73d6208fda5d7da1e655b05163"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ccc1b0f46c79873911487b1e851915d7"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","239b29520803bac59f0436ce66880627"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","85a40c8e61a19618c222430b70d4bc87"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","2b2867d22074e65c1d2f44c3bacd9c49"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","9b6ce559efbd08875fc4cf072cdbc757"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","61051bed9530b45752b6d920e02de958"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","f56ec554c034f20667ed033a694ce8f8"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","01c5a034b44fbead6aa458023c1db570"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","532a4aee8289c2d3512efaa02fe89a44"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","6c7199f216d206a1709bc1df6f8d0de5"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","cc19d10e47b2aa0f92559f0af8d3a5b1"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","16031d164c62cf47dcfc2704d6b8308f"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","62dfef34fcaadf22c7ea53e2509f0e64"],["/404.html","357bd37dfc09f7560cf93be5beb535ad"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","4dd5fd914e27413cfe8670be144af063"],["/archives/2022/12/index.html","1253fb9e7d89af0e72bf1956ce7b6742"],["/archives/2022/index.html","38b1efab0135d82aa103cfdd4f302901"],["/archives/2023/01/index.html","0fb79240bbc156a95347e838a3c88220"],["/archives/2023/03/index.html","bf8ce4efbc275c0a8d53e205115b4fbb"],["/archives/2023/03/page/2/index.html","3c16dff30c5ee74454f4eb370b552bc5"],["/archives/2023/04/index.html","84346b4f487754c0363cd92cbad4792c"],["/archives/2023/05/index.html","e961d79160eec39cdd529ca1e3511998"],["/archives/2023/index.html","c003fe0bd5de002c6a722cb1a5b9819d"],["/archives/2023/page/2/index.html","3d4640cbf37cf89c5bc1b1fef1b5bef9"],["/archives/index.html","469bacba161df1666edb6c22639b459e"],["/categories/CSharp/CSharpBasics/index.html","a390d8077b0f08450c2a272d195ca2d8"],["/categories/CSharp/CSharpToolClass/index.html","8a1aa53da43411b8b2da809d53fe2805"],["/categories/CSharp/index.html","e4a534bb603811ff3c306f9778b49a2c"],["/categories/DesignPatterns/index.html","c679ffad56edf642b37b2912e9d7fd99"],["/categories/Shoka/index.html","cab85f9abeb7413a959e2602f07293e3"],["/categories/Unity/UnityBasics/index.html","6f2ef7ab33d55bda483acdc85566ab8e"],["/categories/Unity/UnityFramework/index.html","cb86c263ad9de96b7be4019a8e59432b"],["/categories/Unity/UnityGames/Unity2DGames/index.html","90f83f24df9288c71385521e75ac9b36"],["/categories/Unity/UnityGames/index.html","009d92e7aecd4690a592456d09a7fc6e"],["/categories/Unity/UnityToolClass/index.html","8521acca960bc5b0b89f32ea337e0d3c"],["/categories/Unity/index.html","9b2326530c79743aec76397d54784993"],["/categories/Unity/page/2/index.html","a9624fc4301b2b1c50b1de2c3b42c069"],["/categories/index.html","3a7173e6f36e46213655a3f397964782"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","66dbf38d804c590036d4b3edd2276f32"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","21d95c31b632b27fbe3447dadefc48ac"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","f4f0fa1c4f9ce61cbdacd9c4bb1b1698"],["/page/3/index.html","33bf15e601604642d4ceb551d95fe90d"],["/sw-register.js","66e23a0cc2fe8999f176cbcb9a21942e"],["/tags/AnimationEventBehaviour/index.html","7c4af998904353b7ea4a3d02f92abca3"],["/tags/ArrayHelper/index.html","02ad9aa6ea46ba916dbb4d7f286c4893"],["/tags/CharacterFramework/index.html","fae47f32065397f35bc7611f23acdb4b"],["/tags/ConfigReader/index.html","3ede5285f1e5d0efc3373cac6be027ce"],["/tags/Coroutine-Unity/index.html","775bc9b4fffa84c3ffd004b163805e92"],["/tags/Delegate-CSharp/index.html","4dbac4f8cbd53bbe6c0c144d4f050757"],["/tags/Enumerator-CSharp/index.html","80f936d2f2a8d077b3d80015814294e8"],["/tags/Event-CSharp/index.html","d68359edcc9c02fb5901dd4839fa7f05"],["/tags/FiniteStateMachine/index.html","111d1fd32cfd5fe543f43b8f4ae896a7"],["/tags/GenerateResourceConfig/index.html","a5317f94d1b4ae2bdc2217cf41ec127b"],["/tags/JSON/index.html","e9e06f1bf24372f20a12d15474209248"],["/tags/ObjectPool/index.html","2ccf951e947add335180aa5f6952010c"],["/tags/Reflection-CSharp/index.html","2e7ce61d68f3dbbea487f6639bbb381e"],["/tags/ResourceManger/index.html","7f0376554cd0812ff2cf01f80e12e24d"],["/tags/Shoka/index.html","faf890b3a8acdc4ef625df17feed5efb"],["/tags/SingletonPattern/index.html","42d3614a483b21113f2b7c79a0d8f950"],["/tags/SkillFramework/index.html","485bb16ebbde4616aba1d70ecd6f979d"],["/tags/TransformHelper/index.html","6c2bc04f35b187148857a905603b56c1"],["/tags/UIFramework/index.html","1a81ae6b0a6c00f0c10270e37d283152"],["/tags/Unity2DGames/index.html","62766ece23de220033ccce593ef65f1a"],["/tags/index.html","0251b009ac3da09b28f9ed83007bdc22"]];
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
