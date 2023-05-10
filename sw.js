/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","6602a642184bc26106339b90c32b71db"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","f7a8f5a4ee5dc7d43bb5afb522f820a8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","785bc0384f46fa595651a5878e399616"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","bfe26a762a0dcaa63c8dfabf9ef27df3"],["/2023/03/24/DesignPatterns/单例模式/index.html","375e15f4c156cb00382b2010e3a7c9a5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","0ff020cf7d65dbef113be5d67de59eac"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","77c65591ca70b2cbdb159630bf2790c9"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","f929d77dffc1c9b1d44e17c4d121af28"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","02e7382c0450f49216a0c5f435351465"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","0db4024d4d1dc70da4cc1ff3420dfe03"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","70b018a4de31b55180291dcbdb208ee5"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ee6820f98cff70e31f001ec86da8e44e"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","9f08da2121fbd18ea01481685b451f77"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","77ecb5625f8c45c8ed5c6500165ff179"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","d9565d1214e82f04330d941a9a0659c4"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","5c2aaa3d517f2e70da4eaaabac7b64ab"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","b202892f24b59b32143d63c83d1e437b"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","5c5de5d95e46f7cb0144a0c381d1c153"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","bae09d615bb02ebb3f4b7d3d33e2b6d8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Character.png","825dc4ac547c0a6a3536652bc995bd2e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","7e8639cbca594acde6c4b1574a3dbbef"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","1054cd7865c608c30f6f4e45334da53c"],["/404.html","858fafaa76a89656a686aaa322edbb20"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","0da6edf587a4ac8de78155ca337f15bd"],["/archives/2022/12/index.html","b36552006ceebcdf5d41c59e2ce3609e"],["/archives/2022/index.html","45e8bdafbd41d89ded7da80e8e6785bc"],["/archives/2023/01/index.html","7860a9adbc8b70dd9856e3283937665a"],["/archives/2023/03/index.html","b0191d3dd8fade27082657b56d12aaf6"],["/archives/2023/03/page/2/index.html","4de908b329869a6ba97f7b2895a4cfe3"],["/archives/2023/04/index.html","c31b6590487df56c06377f39e1e0962e"],["/archives/2023/05/index.html","c6deabbd16c9e441a51c9f8dbc181594"],["/archives/2023/index.html","7cc0e42f4ac5cebbd52c2f4677167773"],["/archives/2023/page/2/index.html","622de8c54f8bd6f949b1c40551e1d89b"],["/archives/index.html","c98546581ba8d70f02353e183ddb39e8"],["/categories/CSharp/CSharpBasics/index.html","66143bd9300c5062ce4b5fc5d0206745"],["/categories/CSharp/CSharpToolClass/index.html","d0a2238cdcdd18fe1d4e1e0f3adfef13"],["/categories/CSharp/index.html","154b0f8e7cf5d8924b26ac940941a771"],["/categories/DesignPatterns/index.html","e01c6371451e9ca57b8e3ba494023cc4"],["/categories/Shoka/index.html","8b0c9d5cac2074d95832c23789fe8952"],["/categories/Unity/UnityBasics/index.html","34f6382e5d56d40221521e2123a8706e"],["/categories/Unity/UnityFramework/index.html","cc6c2e7fa41177c4713877ddd4b05820"],["/categories/Unity/UnityGames/Unity2DGames/index.html","bf0bc23f0d5e7aadcb8b8f353421569c"],["/categories/Unity/UnityGames/index.html","98b970c2239a754c067ec929f7d12d05"],["/categories/Unity/UnityToolClass/index.html","7c5de8967362f43761f31d06a638f350"],["/categories/Unity/index.html","309688656c77bcb1913d3f690832fb04"],["/categories/index.html","51a855317a448aec8a08be5416a190f9"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","b143d58cbaafebc99e5fe8645300b7aa"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","0e06528c62f20582384daf1a621c9a6f"],["/sw-register.js","5c1ef30e30cc65b8ec402fccbe2d9df0"],["/tags/ArrayHelper-CSharp/index.html","41eb4901a99dedeb890226c1e664dfca"],["/tags/Coroutine-Unity/index.html","e858ac91e4b2e8279dafece6339a93ae"],["/tags/Delegate-CSharp/index.html","5c1eb66d79f8334a51f5fc48d12de02a"],["/tags/Enumerator-CSharp/index.html","89d397849a89913039fe3730bdb6d733"],["/tags/Event-CSharp/index.html","5a60a2ebba33889ccd82353b826a2ea9"],["/tags/JSON-CSharp/index.html","e4137e9660823e349c279e28b059ebfe"],["/tags/Reflection-CSharp/index.html","288e1f6a1eddfa4cff7d91e6b37d119c"],["/tags/Shoka/index.html","26fceaf92e39a4928cb9240c99c648e6"],["/tags/SingletonPattern/index.html","a09e54ab60e79f9c317cda5ce551b936"],["/tags/SkillFramework/index.html","b71cb9486979e209a050c018a676841e"],["/tags/UIFramework/index.html","d7d1f09146d8c4bdd6a0d064c92f9409"],["/tags/Unity2DGames/index.html","f91b8d5f78143677cad725faa046bee7"],["/tags/UnityToolClass/index.html","eee3ea37b2d944dad3470131e1a3cfa4"],["/tags/index.html","0e8bdbd3dde13e1bb8533e69bb95b0e3"]];
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
