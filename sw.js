/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","cba6f9ab3562d6f076e225feac9a68f2"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","0b2909caaf3c911303daaf27ad6f1dc4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","eff66a0f5aca948d2bb5cdbf7677d783"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","8311a18f1f331df5b5430e5350ac328a"],["/2023/03/24/DesignPatterns/单例模式/index.html","32781dbb11d6c94dc736ef34f093ea13"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","3364ae91eb02f49c0ca4d14d8ef1451a"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","bbe74067e196f4b55387e84425c9f84e"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","736d295b158ce9b63446833127f67154"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","02e7382c0450f49216a0c5f435351465"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","ebddc31e511ed52745e4f5c4cecc1cf6"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","eaa008422cf9f24ae665fc0dc4764c03"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","a4b486f0a1e456a845cec27e68323685"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","6571f33f6f85845e1423b5bcd5138236"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","e586836b51ed0ee51724cefb5a200345"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","663bedf4ab736512b2a5ff0cc40e5a23"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","be95e0e24fe6cc19eaf8971ac8c134cc"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","98c59f13bc4e3be062af2ec9a58dbac5"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","697ae5932b76f5cb345218f0117e0ec5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","bae09d615bb02ebb3f4b7d3d33e2b6d8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Character.png","825dc4ac547c0a6a3536652bc995bd2e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","7e2388ed7ffdcc3c6e3ed483a3d8959d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","8b6802fa462a4c86ff578439a2f3f84a"],["/404.html","a62df1b81f446ab8f94eb365bd5b6d69"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","237f2cf3f33e0afc78e7121817e78839"],["/archives/2022/12/index.html","98d8bb3cdb537c71985db12d21628911"],["/archives/2022/index.html","33d0e6a592d091a5d17ad0c361602b49"],["/archives/2023/01/index.html","e449319ddaf60365ed79dd004333e7f0"],["/archives/2023/03/index.html","56837de7fe0de3bd8ae8dc8ad5651fcc"],["/archives/2023/03/page/2/index.html","e852aab7d304994b24da5ee345fea132"],["/archives/2023/04/index.html","99d8a2e86388b5cac091f51655072c15"],["/archives/2023/05/index.html","aa63ed9e35c1375a0527ab3d6c65a98b"],["/archives/2023/index.html","4e537ad170543c2e209eac42357b29c3"],["/archives/2023/page/2/index.html","816025956e681a0d2a6dea92c6923b09"],["/archives/index.html","1172517b83d9c806f9b851b63a59d755"],["/categories/CSharp/CSharpBasics/index.html","3be055189570af91d2a3dbc3e780c89d"],["/categories/CSharp/CSharpToolClass/index.html","100deeacca41a7e1ff3dc0405c222723"],["/categories/CSharp/index.html","8c85e38e8effd263975d96d50dd0d6da"],["/categories/DesignPatterns/index.html","b2b36fdb8dd375290207b373c9a8e159"],["/categories/Shoka/index.html","f40f7dfc611abae61d406e200d5ee764"],["/categories/Unity/UnityBasics/index.html","2f08e2572788afb289b4352e342a1523"],["/categories/Unity/UnityFramework/index.html","18d1021eec8c5cd64fb24019c52cab93"],["/categories/Unity/UnityGames/Unity2DGames/index.html","aab0fc705f4e66d479bd8e7d219357e2"],["/categories/Unity/UnityGames/index.html","8f24984e01401279fbb3d43fc421f3ef"],["/categories/Unity/UnityToolClass/index.html","b8823ed762eee5f835a8d16f7d57bba0"],["/categories/Unity/index.html","4374196ad2392178f1d7002c3e188a34"],["/categories/index.html","9213894bac06821cbb05a4422a5b0ab6"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","1fd1b233767e3d2b5192845b7854440a"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","5cec9b5a8c0a512c65d55b2dd8c52eab"],["/sw-register.js","8ba74f2cd6f8d38a59e49b5e2e6e486f"],["/tags/ArrayHelper-CSharp/index.html","32e330401716d70cbfbc9f5fbe224cd0"],["/tags/Coroutine-Unity/index.html","b005148a1f339bad8ddd7a5c7bdb63c7"],["/tags/Delegate-CSharp/index.html","45763228dde7ae77602b24b66f4f9a4c"],["/tags/Enumerator-CSharp/index.html","c8500fa2a25b1e32f14b4d9e3c97a08c"],["/tags/Event-CSharp/index.html","6380f1bb622089acb9231139d22a4f7a"],["/tags/JSON-CSharp/index.html","8ed6f38d90f83d8dc7a614c3d1e141c4"],["/tags/Reflection-CSharp/index.html","a35a4f3ddeeee06e7f66250e08383c4d"],["/tags/Shoka/index.html","1bbc21da7a636a3f5c0866c9b6f55787"],["/tags/SingletonPattern/index.html","25d25f2ad9b8860c4bc5733e468d2afb"],["/tags/SkillFramework/index.html","856aac8b49a9163c590bfd7b496609f4"],["/tags/UIFramework/index.html","d0bf95c83962e646db1ac5aee5bb67fb"],["/tags/Unity2DGames/index.html","4dbeabc212795de38bd0a6c686de3fe8"],["/tags/UnityToolClass/index.html","43bad9896fe09ca97d285be83cbd2fc7"],["/tags/index.html","c50a46628d5703833045a3babddb8690"]];
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
