/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","70a015f2091790c390201c7d2d52bfed"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","204004d33f8c4c1abc7c007f9b99fdcb"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","7b416958678b42364ec20329e11b947b"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","4ce9ac6cbf36da64837fea0e94ce3c0a"],["/2023/03/24/DesignPatterns/单例模式/index.html","c95e321e473a0b4f6b1b869f1209bcaf"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e0814c95705e655cf309dcaa4fadf209"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","b908db254d3c3af69b7367c118841630"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","cfd6a75a3b01e8acd259c47aa6d1aca1"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","53bf889d0dc1e64397aceaded976e538"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","1a30350234afad6063f4e9ce69ef5bfe"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","bfb73ca4a09369db1906f4a57fba98ed"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","03bee097f5dbd646228f91343ddb9774"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","2069817ad3bd1f20087f8e0d5e5e64e8"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","68fa62b94c68b95f855e6ed7a4157f40"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","1fcd35a3ae963c85830bbaa48c006027"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","7e61cab929db64affc62db3b24a49c06"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","bda821156f237af0cdb27bd1026d1934"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","327f1fbf9fe1493647492c02b68f17ba"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/index.html","53b92740f3fc11dcfdff9d40b58d29ec"],["/404.html","fb4296f58a99aba2895813294b713a61"],["/CSharp/cover.jpg","f89f6bbdbb27eca819cd9532df45d0ae"],["/DesignPatterns/cover.jpg","9a94fc0b334f66ee48b851e8b524602e"],["/Unity/cover.jpg","dbb00a874d8d684e1b1ce17df2ea4c33"],["/about/index.html","c397ef4a727524c5c208fe915b4b2a70"],["/archives/2022/12/index.html","3cd045f53f01c048cc68b8f41902bb3d"],["/archives/2022/index.html","59be70ccdbc3eba260c9c09875338fd9"],["/archives/2023/01/index.html","1a58d3cda4ff1e26a60d90217c16d9ac"],["/archives/2023/03/index.html","1df1809c6dd6a21bd0ad3c9f770e555d"],["/archives/2023/03/page/2/index.html","754a5fb1b928d95baba3ef373fee35a4"],["/archives/2023/04/index.html","e1699e63a541cbd5c62b5dba93759902"],["/archives/2023/05/index.html","6b11747391d40f3710ab55a810096890"],["/archives/2023/index.html","9aa1a7954b400873fda9b7f28edc3e56"],["/archives/2023/page/2/index.html","3ef551ea77bd0fff94693de91c5f19f3"],["/archives/index.html","acedfa0ed4f113037db1fd4368a4fa97"],["/categories/CSharp/CSharpBasics/index.html","41b04213a99fab7396a24ce143b03185"],["/categories/CSharp/CSharpToolClass/index.html","791d64f50cc7501cc706498e09a3ab38"],["/categories/CSharp/index.html","c29ab5d2f1b6b748e41f6409413442a8"],["/categories/DesignPatterns/index.html","bbd87f91204615b5a22962efc616f633"],["/categories/Shoka/index.html","9db813939d126d0f76af7a48b8eec812"],["/categories/Unity/UnityBasics/index.html","73a113e19527c1cdc3ac48d6e2b4fb62"],["/categories/Unity/UnityFramework/index.html","4a44d1a7b91037d63e98ea11f545d180"],["/categories/Unity/UnityGames/Unity2DGames/index.html","ce6de449395f830c84375f83109ed60b"],["/categories/Unity/UnityGames/index.html","ef19630b29d9dba22f7f3192c9fb311d"],["/categories/Unity/UnityToolClass/index.html","3b7e2c02e91bdcd477ce9875978bbc02"],["/categories/Unity/index.html","39755e59e8b4b22351bf707e76ebde72"],["/categories/index.html","35e63516d8bf47b16ce8cbc84c782d26"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","4800f734ab70e4b23cc56ff111dfcd92"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","dadefc63e51d3ec51a8511c2bb6e025f"],["/sw-register.js","fc77bd19e272f4719f9cce4c012173fc"],["/tags/ArrayHelper-CSharp/index.html","0b6e11a11c7fcc6278545411d7814913"],["/tags/Coroutine-Unity/index.html","3d439948267cf7c4bd1a58477106df1a"],["/tags/Delegate-CSharp/index.html","a22abc39695018f62405bc41d932d14e"],["/tags/Enumerator-CSharp/index.html","7cce5fd70f40ff60c3470834481fa55a"],["/tags/Event-CSharp/index.html","2fc9f22491257db3df094e2112b5a90f"],["/tags/JSON-CSharp/index.html","9ce12c968189dd211e15547d0ffae508"],["/tags/Reflection-CSharp/index.html","2f3ec594bcd798c494f17c070674b117"],["/tags/Shoka/index.html","048cf0875be8a98fb831aa522ed4d6de"],["/tags/SingletonPattern/index.html","4f16c5b926b9f10d19330c51df8da3c8"],["/tags/SkillFramework/index.html","c67f0925ee12a40e68b3dbe052455d67"],["/tags/UIFramework/index.html","fa0f3b69a1e7f5886cbd0d709b4042cd"],["/tags/Unity2DGames/index.html","422c2598c1c353666ecca9c18576ee40"],["/tags/UnityToolClass/index.html","8ede0086bcc728a29ca7c7ae4709aa09"],["/tags/index.html","1db935138ddcac3d675b65137f6d432d"]];
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
