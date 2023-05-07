/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","efb37b34d6aaa270463827e692591952"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","f0e866eb80600d0b6998fc3f652e3b7c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","0450144a6e26c6a5fcbc6f841f49c859"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","638cb20508d698c157e08018990f3c18"],["/2023/03/24/DesignPatterns/单例模式/index.html","b45f7b25c0a2cac083cb0d00448704c7"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","b4ca3aba1a7820d819e60a6b9cdd39a2"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","651c479e7858eae0bc4966180825a8c8"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","6526596c1ed284872507de1277069522"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","53bf889d0dc1e64397aceaded976e538"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","0885573baffcbe93609a9a4a00633224"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","c617dbe90ea1651b46f7b755b208501e"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","1ea7a746acd98cb87039f7bac288ef7d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","9188bfde182a8906da1e2ce2da4a3362"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","a536cdeb59cbbef554e163600af5790a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","35e586bfdafdf5274698abf0c9eaf475"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","b19daabd9ea21af9600af1b7a24b5519"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","b62417c45b46343df443ff42048ecb6b"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","9653f7a06727948dd15470c3ea047e09"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/index.html","e86a4af9678a2f2e44eaaf9ec7f4923b"],["/404.html","775644df6d54fc6341d1cc433e74b998"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","8729090aaabe2e6a87c1d887ade76d2b"],["/archives/2022/12/index.html","72c31c2b5b649569c125d619d3a3c51f"],["/archives/2022/index.html","b53ff7e1104a823d1164e66edae46121"],["/archives/2023/01/index.html","623ecfdba7ed682014ad085d6f7be816"],["/archives/2023/03/index.html","b4dc94ae59ad8c9ef407bed728ff6cab"],["/archives/2023/03/page/2/index.html","b3a14941808b535267f314d8aae65c7a"],["/archives/2023/04/index.html","54edc1ee5155a26c2aca68c5a12181f7"],["/archives/2023/05/index.html","35c8ea673aae7ab323ad3812019d974f"],["/archives/2023/index.html","fb250f887b86afe1105019779ad991ef"],["/archives/2023/page/2/index.html","27376db94632fc6987e01fda5bc23b4f"],["/archives/index.html","bcbf863e205e2d51a796f27eb3113d41"],["/categories/CSharp/CSharpBasics/index.html","524af87e925d9710b431693ff8cee7da"],["/categories/CSharp/CSharpToolClass/index.html","a0d730bc9663c1e88e2c71440983dbdc"],["/categories/CSharp/index.html","97e8846f1ab1c5f91fff507e91c7f704"],["/categories/DesignPatterns/index.html","cfd4b7e2f04e3aebbda6b4c001df1c41"],["/categories/Shoka/index.html","7c3c2e615ed2d9248fcd8b607b99d476"],["/categories/Unity/UnityBasics/index.html","a2a390a718e49ec1a786d4d9dd4a43d2"],["/categories/Unity/UnityFramework/index.html","5502e071abe47420d23a3aeef895a050"],["/categories/Unity/UnityGames/Unity2DGames/index.html","d1fc20d63ca709f4e50a67f973734b22"],["/categories/Unity/UnityGames/index.html","8b22aba9e27c8cf5693c7ed12ab46e44"],["/categories/Unity/UnityToolClass/index.html","1fd50968bd263398ff5452ca784b1b57"],["/categories/Unity/index.html","31a32aa9d2cf4a23fe8866f06e48eb4a"],["/categories/index.html","3b15f46a374ad4801589e0d9e237ad74"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","7fb00171beb651c0fefff47c9be90c76"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","3010538e70c5336d11b43ff748b16f84"],["/sw-register.js","67e29fcc758cd80a043f6ee72bd8bd65"],["/tags/ArrayHelper-CSharp/index.html","3bb30bba30a96d2d1db7bf46d994a89d"],["/tags/Coroutine-Unity/index.html","a5b24a26b14404ed53aea0acaa7754c6"],["/tags/Delegate-CSharp/index.html","aa749ac0981231db1687d05528913a84"],["/tags/Enumerator-CSharp/index.html","9295e33356a70328c7213d993d520eef"],["/tags/Event-CSharp/index.html","3413a2785c952668699d2370e266426a"],["/tags/JSON-CSharp/index.html","4aceb0656cddc6df44bf8f4e32232606"],["/tags/Reflection-CSharp/index.html","177de36cf4551376ee4a161b1b598ad1"],["/tags/Shoka/index.html","23236f277ae391056e0c9378f2fdbc34"],["/tags/SingletonPattern/index.html","9968a9d11f01c514ff8171f3ac89d514"],["/tags/SkillFramework/index.html","ca0b66554a8c0119d2cf70a60280c66a"],["/tags/UIFramework/index.html","cdb7d61e043ab4f58a6a375df9029b32"],["/tags/Unity2DGames/index.html","93b9b5467d8220ef131f4023d681f005"],["/tags/UnityToolClass/index.html","24ab25486d1cdc9100b6966ae3321cbf"],["/tags/index.html","d4293bc1151ff331d401f89a825dc5a7"]];
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
