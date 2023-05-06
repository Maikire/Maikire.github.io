/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","e50bf3098092f2e2e1888e2522bf6acd"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","e379b7a52c5bdd405767176c0ea28579"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","effa9c6ad5f2d680a164642fa07028a6"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","08e44c2dc0b925973696db25d4543af5"],["/2023/03/24/DesignPatterns/单例模式/index.html","40c0b91927643655299283284d160ef2"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","dfbe9f39cf21718bd15afdd5d565bd70"],["/2023/03/24/Unity/UnityToolClass/未知层级的情况下查找指定子物体的变换组件/index.html","3ec289983bb366bc15ba2c4fbdb125c2"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类（ArrayHelper）/index.html","2d2918c5e5b526644c861929d4a1b6eb"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo1.png","53bf889d0dc1e64397aceaded976e538"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/Demo2.png","798e998bcaebabdf0124ab6cd2f04e2d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类（AnimationEventBehaviour）/index.html","52c0b3ef27b554b4a96fb0badf4cf593"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","bd2b63daa02eb4b2485c4ae02d151913"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","50990d7781d2bce738d395fd16e65a66"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","0a46c95e9a6753e8449676fa8562c9bb"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","5793fc0a7d72afb7709cb713ab68081a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","90c71d619f6c31fba328c511a47fd383"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","0f107295f9fcffbc0a0eac2da88c9d53"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","48dd440ed91c07bd9a96896142106694"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","3d31b668ddbbf534f8fef37e3ee4651e"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的技能框架/index.html","c978e9727b6aed8b36d3b7c9b77c65e3"],["/404.html","641fd3ad0502c4dccdb132201b69f0ec"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","61955ec3d8e09717290a71fbabcb5567"],["/archives/2022/12/index.html","3af9d9468ab395e300db7f8b45c91a20"],["/archives/2022/index.html","ef59a4116d1adc53404c21a340b033d7"],["/archives/2023/01/index.html","a5d4ca822f06c1bc710820bf67d0a559"],["/archives/2023/03/index.html","41574b6f71753f3076fba686aa9b91a8"],["/archives/2023/03/page/2/index.html","1410d176b56f8926218f18c2b7755ab9"],["/archives/2023/04/index.html","5989bf8cbce335ce08e983b0c7b50206"],["/archives/2023/05/index.html","3ed05911023a2832bfa981976908cf2e"],["/archives/2023/index.html","5dd537ab3275173ea1780d96319aa00a"],["/archives/2023/page/2/index.html","afe8f330dfe3580afadda8f6fbe8b2e2"],["/archives/index.html","e4e0e2cf1677cd4b8d191fe462e29246"],["/categories/CSharp/CSharpBasics/index.html","188d5acf0cfd48c39606e5fda2646fa4"],["/categories/CSharp/CSharpToolClass/index.html","39ebf60167a83ce324dd239d4363f37d"],["/categories/CSharp/index.html","9f496c421608578a14dd3a83ab109161"],["/categories/DesignPatterns/index.html","0ceea23334a3ded6fa877492a0ba50f6"],["/categories/Shoka/index.html","acb6cdf6c2a8a8e6a9707c27788c2487"],["/categories/Unity/UnityBasics/index.html","c953478b6dd109cb6b29b02d919a75bd"],["/categories/Unity/UnityFramework/index.html","b3d625d924c20b883826f594497907a1"],["/categories/Unity/UnityGames/Unity2DGames/index.html","653195b939d1a9f5d800385d304b7865"],["/categories/Unity/UnityGames/index.html","f3df84de6410802ffba6d90acdf7fa67"],["/categories/Unity/UnityToolClass/index.html","8a1e71667d1e0316871a56857107c1d1"],["/categories/Unity/index.html","c167a8bb7760022e84aae55faee26b80"],["/categories/index.html","4f787ad8ece3658ffd57d351be2d4975"],["/css/app.css","1e4a6c4f664e1be66d276ee4fb54d770"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","905c0d3045696f28b594dc12b0b06f25"],["/js/app.js","993dd3820de0cfa1bde6499dc028bccd"],["/page/2/index.html","938aa9e9ecf4a5a47c9d082a5a5e7198"],["/sw-register.js","d5651a122bc312b6dd792e78b126bc07"],["/tags/ArrayHelper-CSharp/index.html","7aec8efa7ae7137c9485aef403461303"],["/tags/Coroutine-Unity/index.html","f3e405e63c40ee18c345feb2a1be114a"],["/tags/Delegate-CSharp/index.html","a91f9ad90bb525bb9fe28453b22a0627"],["/tags/Enumerator-CSharp/index.html","a548b310f5bf3f0a8fc41357c64b5cc6"],["/tags/Event-CSharp/index.html","320c6faf23b090413947548aa7600e8c"],["/tags/JSON-CSharp/index.html","12630f17e1dfd7a6f528ab3183568c8a"],["/tags/Reflection-CSharp/index.html","8fe9b570aeb9eb84a8e5b7d4b2fcd3b4"],["/tags/Shoka/index.html","d6c69ed6d593062ff11815fb4d9f0070"],["/tags/SingletonPattern/index.html","2fc9d6094c86147d22587ee26c5ed952"],["/tags/SkillFramework/index.html","cc85f15aca68aac84a6b150c0e7f825d"],["/tags/UIFramework/index.html","5cd648792fe41db7352eef9972b80bfe"],["/tags/Unity2DGames/index.html","1abfd859279f251ffb3a16a990eb2c0c"],["/tags/UnityToolClass/index.html","7ad78fdaf75077465171b948325eacb6"],["/tags/index.html","692870dd1e2ed9ccc4002ac13acf34a3"]];
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
