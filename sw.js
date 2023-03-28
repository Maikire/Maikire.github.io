/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","8c8445a0d1bafeb1730939d950b186ea"],["/2023/01/12/Unity/UnityGameDemo/2D Game/制作2D小游戏01——飞行挑战/index.html","2b0c08b1792b63118d60e9e7e920c9ab"],["/2023/01/13/Unity/UnityGameDemo/2D Game/制作2D小游戏02——防卫城堡/index.html","ed0f9e9d44646c0a0594020f0530ec9a"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","bf6fc0038d1753aad016dc81bb493e22"],["/2023/03/24/DesignPatterns/单例模式/index.html","4e62b61b8cc4568ca631a9a0f1ec4d78"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","f58bb5a75784997b6b232c8e96ff71b9"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","37a93826b973c913fe136434e87a3dbe"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","d2e39bb641148a2d04da090a34be376a"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","6119865e5f80c4eae88f8a707304e872"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","451e131ce771ab2c4cfa68a8e624b93d"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","27d611cb81ebae5ad899ab7d82a0573b"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","648d8c07523061b7ae576cd38e3c9396"],["/404.html","88320e97110a3cbfe5631ebb5219c93f"],["/CSharp/cover.jpg","5244f822fc31cf2d9148131b3c442282"],["/DesignPatterns/cover.jpg","51aa73dd65b15939e7314b9cc9ebe672"],["/Unity/cover.jpg","44fcc3d3d21c26460a6cb8f1aa4ec0b6"],["/about/index.html","c408500d4fcdc7c5949e4cc59645b546"],["/archives/2022/12/index.html","724489ea1c56593c18f97c1cdbccfbf6"],["/archives/2022/index.html","c956156db6366fab931a34d9d3a33948"],["/archives/2023/01/index.html","c85ca9ab30da93ffb51eff89e0bb118c"],["/archives/2023/03/index.html","a484f95947c346233ccc949d865a6dd3"],["/archives/2023/index.html","0a6063064b181acf9667d0b3724eaf09"],["/archives/2023/page/2/index.html","0a8b91ba27af91c1e5f1afedc67f63d6"],["/archives/index.html","c508e837519e5a215be8e151fc32479f"],["/categories/CSharp/CSharpBasics/index.html","d8eb53e19117c9f200eb50afb24d94f0"],["/categories/CSharp/CSharpToolClass/index.html","1ed7b32c95c582a28be715cb37b76b5d"],["/categories/CSharp/index.html","cbae8cc97f511a1d635b5b6a35fd5a21"],["/categories/DesignPatterns/index.html","a20f3e62a7f1339a8d1d80a838adaa84"],["/categories/Shoka/index.html","e1d1a74396b70819468e1eccf301c64e"],["/categories/Unity/UnityFramework/index.html","2f458cee7dc28b8ef7913fda51b63767"],["/categories/Unity/UnityGames/Unity2DGames/index.html","aeee4c99b40ab2e46e76265c4e80f491"],["/categories/Unity/UnityGames/index.html","99311ad70a1d8093334fd47cb9c612c1"],["/categories/Unity/UnityToolClass/index.html","41c8deca8389b7440de0727fe114cdf2"],["/categories/Unity/index.html","065a7550f916a8973680c250cce52e41"],["/categories/index.html","e6e6c5d144955141ace6b138017055a9"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","6cb2e7302a8ad346e6f79b0af2c729da"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","8aa833b042f6afe515c1307e5d115db6"],["/sw-register.js","8cc35602dea34e540a5129cb6b4c6551"],["/tags/ArrayHelper-CSharp/index.html","c3bbbfb5369560d2a456ccb5e69ca8e3"],["/tags/Delegate-CSharp/index.html","fdae2a330fd4d4f4d379ee0bee1cebf7"],["/tags/Event-CSharp/index.html","8e544688fe6ec318d2d37bca3b4c7fde"],["/tags/JSON-CSharp/index.html","21d90bb92a03bb8ece0441836729dd4f"],["/tags/Reflection-CSharp/index.html","0a084c23683241a2b9b2af8e62a83830"],["/tags/Shoka/index.html","385970eb37561f6252b0e96d209d76f7"],["/tags/SingletonPattern/index.html","0d4e3f9c9e0b22486081212adbdd8c2b"],["/tags/UIFramework/index.html","daac16a8a9b0aef95a0a6b6b5a6ccbd7"],["/tags/Unity2DGames/index.html","4a4ad14a38b1eeb4b214ba03ef95eab4"],["/tags/UnityToolClass/index.html","dc5fbf15422c006e421a4df5011fca39"],["/tags/index.html","135eb9412a8ae271652bac7b9ed9d6b9"]];
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
