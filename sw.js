/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","3b774cf54b260477aa4010d9e7575471"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","2d72738ee5472d508bdfa8869c98c409"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","ec06e530dd29046e96f32766e429dbbf"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","852bdc0ec81c02c7f31da5f5bdf9bee6"],["/2023/03/24/DesignPatterns/单例模式/index.html","2e8625114db54c6d5b96da2dab03b9a3"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","a4adc07cc4b506cfeb1d34cd392d277e"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","603eb941cf5d0f8c77664f0b9d0bb5da"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","d5d91a667b2f710d745114c8fc359f0f"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","ab69d2a3970e1d4fb97816da38442a72"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","2aeaf2a047874b125fc7d3196b1f1145"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","79741a0158cb5813c74864793fa6ff5f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","23ffe3b94c077de100c6cc0aa2e219d9"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","bfbf32933fab30a4fff53e9bd4bf3ada"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","4dcd3e063b7d429d56ef9b0dd3702214"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","481f26485842757f2e96af4fdc07a8a4"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","85813726490327514f45affbf3ec888f"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","b154ad385468a645999ac0305d22b5af"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","bae09d615bb02ebb3f4b7d3d33e2b6d8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Character.png","ceff8d2b551c0199e8fcd1eede3b73c9"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","60653bcb15fc9834ba2fbfec47b71f9a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/404.html","aedca7a6b0db137c1b18f85083cea753"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","3612feee1e226aa00198a8540ae781c7"],["/archives/2022/12/index.html","ba95e2904c49e0b3d5a3f8d3acf85ce7"],["/archives/2022/index.html","b305abfc6be892e6afbf28b086c7a313"],["/archives/2023/01/index.html","831a1239205fe48fb1088eaedcfedcdd"],["/archives/2023/03/index.html","69344b410a15050d0df193fc41b9b2b7"],["/archives/2023/03/page/2/index.html","f99a2b320b82649230ab679b491a9be6"],["/archives/2023/04/index.html","aa35243da29fec0cd7d161942a67cf09"],["/archives/2023/05/index.html","fdb89902a9c557d7e147b829a9ed6329"],["/archives/2023/index.html","dfb32c02070b18836a7dfe31f59f07fc"],["/archives/2023/page/2/index.html","cdd642994cc2243bd1c9f5ffb4559b8e"],["/archives/index.html","ef4c7662619977513b3919fbde21eb58"],["/categories/CSharp/CSharpBasics/index.html","990ac8716ed1c917189aa544c177cb6d"],["/categories/CSharp/CSharpToolClass/index.html","6948515608191a49be28c16a84b93308"],["/categories/CSharp/index.html","1e520c7d29b169bf5edcdda0a2e37556"],["/categories/DesignPatterns/index.html","403e977508a952442705202e68a50852"],["/categories/Shoka/index.html","3324f077552c38e93d966027209cfa76"],["/categories/Unity/UnityBasics/index.html","c7b2fd9e8fcbc2be97ad518b639621f9"],["/categories/Unity/UnityFramework/index.html","0de9bf31d587051baa10ebaad8002072"],["/categories/Unity/UnityGames/Unity2DGames/index.html","e812c4446cf8cac01bc787450678f294"],["/categories/Unity/UnityGames/index.html","ea473414f47b53ee6b76ef10b2ebafdb"],["/categories/Unity/UnityToolClass/index.html","b8a760ed7379735d9d4b79d3c432c42d"],["/categories/Unity/index.html","3e7e970dbbbf3a85e909751bc7163e4a"],["/categories/index.html","b83a7cf42ed45b42c51abbf25241eea1"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","e3e50c80fac4071f1a155cd553296363"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","76a42f26c3ce267a4a33092af1fea88b"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","493ad6e92ec1888667eea2cec907379a"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","39451c07fab56c1bf1a7a707a08cd06d"],["/sw-register.js","f954b8957f6208cad7a4ff110d88b98d"],["/tags/ArrayHelper-CSharp/index.html","c72c55668eb315647d1bfee676e8de10"],["/tags/Coroutine-Unity/index.html","0a5e2a7e63e734f9015f8041d45c8d38"],["/tags/Delegate-CSharp/index.html","f35b4ed395c58c918ee1bf9f2d81edcf"],["/tags/Enumerator-CSharp/index.html","82a55ecef284cc4a5f316bbb1c5d8256"],["/tags/Event-CSharp/index.html","7e3139a51f19f5daaaeb70bd3695e720"],["/tags/JSON-CSharp/index.html","8c21b902ded984c92ad0f0484ce90c2e"],["/tags/Reflection-CSharp/index.html","eef5ff5d00426b407d6043ecfa5cce9c"],["/tags/Shoka/index.html","d082ff1316bdd0a5f625f1a4c70f6be1"],["/tags/SingletonPattern/index.html","f80336034be1c5b4aa7d60a31e55364d"],["/tags/SkillFramework/index.html","5f1b4a83e627d999c00539a0a63922ad"],["/tags/UIFramework/index.html","28dc4a8c55535e10dd577bdf60e0ae37"],["/tags/Unity2DGames/index.html","33e418be24c4b274ad36b947889f36e8"],["/tags/UnityToolClass/index.html","a53576bfd0174950d9c499734beafe79"],["/tags/index.html","46ac95735edae340b62b0be214eaf759"]];
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
