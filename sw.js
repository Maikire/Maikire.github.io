/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","b96589fbe76cf5486a7c2dd7be62fbab"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","47b2017a41820d35d7a9eb42e47f2943"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","7bb97e0bfbdfea39742cfa1bcf98e07d"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","82d0feb65b0fbfad9487a967de8e152b"],["/2023/03/24/DesignPatterns/单例模式/index.html","0c287f41e9f6ccf4dd66beae88e68d8a"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e7cd2a39ac4a8f4dec60b3d9a10771cd"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","f50571c6f0f28bc43eea29a22087da3f"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","1d75ffe272e72ac8fd8c2a9d5cb7b72e"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","fa6ff9523fbc2f3ba6669402a511a786"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","f2968eca9c2bcb50b3496528a8906088"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","a1a529eba310f8135b335ab9874cd36e"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","25fddd84b2c208a526070d2404a06391"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","f4906d6f3bfdbaa60cd4df478645a290"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","22a563d98c7525d99da733832fad27dd"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","46ac973cea1dd1d8f31f7b14c05daebd"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","f07349ff68fe560176fbb0967fcd1494"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","709681d3e0c2fbc07df47c57e613442c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","c9bca03ba217892eab8978c1c971bda6"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","b670474e256292d628d064235a06d8ed"],["/404.html","d4f3fbc170a0599f0dcef67362ed4582"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","8907c4896f755b23cddf628707e9e49d"],["/archives/2022/12/index.html","4a6ba70320ce224c8f23d9fdb2a910df"],["/archives/2022/index.html","ea0df75c3e4da3e68aeef1acd7066b9e"],["/archives/2023/01/index.html","326c815aa0cc16ccf2085c7cc1523cbc"],["/archives/2023/03/index.html","8b381aa4bc600d4a175ab9052e0fd2b2"],["/archives/2023/03/page/2/index.html","1a3ed9023fa6691cb7297c19bc5675be"],["/archives/2023/04/index.html","6435bcfcd70a9c74b4d29d1448bf840f"],["/archives/2023/05/index.html","0427037e69e051c8c7596b5bd321ca92"],["/archives/2023/index.html","9667bfe71c67b53644c452c24f58572e"],["/archives/2023/page/2/index.html","4a723f648a938aa9541d81503b02cfb7"],["/archives/index.html","7c42a41139287bd61b1c79b40d74c9aa"],["/categories/CSharp/CSharpBasics/index.html","ef180dac05f3dbeeedecb46a458ab40f"],["/categories/CSharp/CSharpToolClass/index.html","4ab2e2e2c23d7cb7a741fae30d742834"],["/categories/CSharp/index.html","94e648cf61381eb757fdad2c1b11edb0"],["/categories/DesignPatterns/index.html","5e1644a943a11a5817cef407b2a5f215"],["/categories/Shoka/index.html","931efe605e91124987a2c427e1123fc9"],["/categories/Unity/UnityBasics/index.html","f3958c6c742f8ffb2580609d114cef2f"],["/categories/Unity/UnityFramework/index.html","1b6eea0da32bf2352bdbe0f1be3413df"],["/categories/Unity/UnityGames/Unity2DGames/index.html","58305ec5d0e17e443bcd5af3ab809b3f"],["/categories/Unity/UnityGames/index.html","aa9cd5e5e6852dfc737d388521d0e1ed"],["/categories/Unity/UnityToolClass/index.html","5638c21758c42dec3384b056807e4093"],["/categories/Unity/index.html","0c982f68bd560b875847995c49968140"],["/categories/Unity/page/2/index.html","40b92a0e48ffb49e93a93be9f9cbffd7"],["/categories/index.html","22a9cbed2b4b8a61af819757bc7ebc24"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","9114507e4b2d9d6dc8187180b5ca6ef8"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","2684c4220914db754950063b0d6ff2a1"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","e063bc68e3500db70438b9ad3bda7128"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","37f921ed975acf6301d7d20b5f8ccd82"],["/sw-register.js","23f86c2da53cd8854c28b20d1b82e9ff"],["/tags/AnimationEventBehaviour/index.html","ae37feae0f15b20ed069128027d35fae"],["/tags/ArrayHelper/index.html","b7301bdf3dfaec936c0b0db83e97d371"],["/tags/CharacterFramework/index.html","a90e383e1ec73c6fe17f9109afb7027c"],["/tags/Coroutine-Unity/index.html","9008810f37b0caffb6fb595edea651b5"],["/tags/Delegate-CSharp/index.html","8c2a2c60282d9eba5a59ccc368d63960"],["/tags/Enumerator-CSharp/index.html","6f7704102fed0f02e364bbbfaa5eff4a"],["/tags/Event-CSharp/index.html","cd3a3daae4adac5853d7c4d3eb70e111"],["/tags/GenerateResourceConfig/index.html","67e11dae20bd9634f9da93c498289bd7"],["/tags/JSON/index.html","59fc1283579a03cb98674ecbb2f9e03f"],["/tags/ObjectPool/index.html","bfef67b9a861f8f1a89f4f81a4893d0c"],["/tags/Reflection-CSharp/index.html","d3798f8721e19044de3abd8b62740c95"],["/tags/ResourceManger/index.html","c9f7254a61479ae27d698ec697b759ee"],["/tags/Shoka/index.html","8ea4a6c6c95b2587f9f8892815b21e1e"],["/tags/SingletonPattern/index.html","b0a42ada4daa2fec507cac6a6bd0ca21"],["/tags/SkillFramework/index.html","70c44d3cdf0e1b574a0e98f1f481b346"],["/tags/TransformHelper/index.html","f6022da897b26c41a60c04b40aea62bc"],["/tags/UIFramework/index.html","554afa6eeca0c32114c45b7e8322cb2e"],["/tags/Unity2DGames/index.html","f43e84d3c8ae8f46fb89df5b11d61a33"],["/tags/index.html","7dfdc58832b5126ff2c42c264ecdb4a6"]];
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
