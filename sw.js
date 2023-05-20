/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","2322eb513b77ac0b0ffd85ee2c46b4a4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","76a5ff14afd2ebaa216f4407d853132c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","6d3accbd27c61b3f5b42b93c74c3ee5c"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","401bf1eff0665d315a9b661e1fa42448"],["/2023/03/24/DesignPatterns/单例模式/index.html","f02497df46be61afa0ade379548ecea8"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","d8a6fbe5f9521f1408af270d6de6f6bd"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","12aa45be3c41ac231b1738f7e8176fdf"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","1580f2170fa1c44932e094af9bc69336"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","408a49b6eaa0f5accc5532e277d0cf37"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ca39d554fd4b50da13a1796622c986a4"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","80caac94d3f2eee4fd98821028051fc8"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","fc1b6f335e96442dd88f1db9ebf3a921"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","3ecafae1bd7cca58427ced5f0f434965"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","f3ac4792ee1759a372e8b653a3cc094e"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","12fe660c9caad41f403c72c5e1996c7e"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","c658e2354b8e2d283ddc93f3efeaa93e"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","5fb425a1ad276b6e963d56b9bea24d85"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","566aea4bc1879c5993dae2d3171636fb"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","21207e976d2cb5f208f86ecfdbc5c0b4"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","dd4e9f31c7c39ffd47148ff28c293cfd"],["/404.html","317fa04cb17a18032c59495ff02b277b"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","a4f497bf37a2858a260b772c8cc46eee"],["/archives/2022/12/index.html","4d47cfbbc847551740de248f1c1553f6"],["/archives/2022/index.html","830c22648e099c8ca771920220354456"],["/archives/2023/01/index.html","fe001e771006f813a6d2728b1e9d1e8f"],["/archives/2023/03/index.html","de4c35237b7daa77d2e2737d5e41106e"],["/archives/2023/03/page/2/index.html","7f07bc04cc363275e9d6b4143c29f4b9"],["/archives/2023/04/index.html","009133c9f79aeb2672b5a8a789e24696"],["/archives/2023/05/index.html","c78975738a59b8d501c8adcee29b6da3"],["/archives/2023/index.html","92f042b430d049f406d9e3ea209f3a97"],["/archives/2023/page/2/index.html","c7bfe607261cf5b1384d748d9a329298"],["/archives/index.html","c8bee90e980cda5e12cdad8759ebd581"],["/categories/CSharp/CSharpBasics/index.html","12c3fa2bfd1c151578833ce61de84576"],["/categories/CSharp/CSharpToolClass/index.html","8c168d07afd98e4925af28b36e30f49b"],["/categories/CSharp/index.html","4ef2d61a8dbe132ca90a93dbc9be540e"],["/categories/DesignPatterns/index.html","9761440419322147609f71aa8015abc0"],["/categories/Shoka/index.html","f761a8656bdd383005e4f2d99b193410"],["/categories/Unity/UnityBasics/index.html","91b6e45ad6e67f2b574df411b960dc7c"],["/categories/Unity/UnityFramework/index.html","e6f72c5d1c69e50f6aed7274e5fae24e"],["/categories/Unity/UnityGames/Unity2DGames/index.html","602a21fc69476bf44fcd8b42136574bc"],["/categories/Unity/UnityGames/index.html","ec7c028fc5d89ebf60e98ac2b7d7acdc"],["/categories/Unity/UnityToolClass/index.html","f54201a0baa3aef0da59602dbf39f0ec"],["/categories/Unity/index.html","3bf0a63fcb3e3bbcc851423b07543cac"],["/categories/Unity/page/2/index.html","f780a690f9670c17b1c03dda23f23f8d"],["/categories/index.html","f9ea1b1b2f8d06e76b65a44144aacfd7"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","ebec894f64a1eed4f4917a3d0b8fb0a2"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","c9836eaee7f9421a347906dd3a28ec4e"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","43fcbd59c93f298a7bdb3068c05287df"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","b1d33fe32c87d56b4faac83a8eaa9e1e"],["/sw-register.js","b589ad1fbd65636e979b2333cd90a435"],["/tags/AnimationEventBehaviour/index.html","d2d045c91f99d51a6edcc1664a532920"],["/tags/ArrayHelper/index.html","fa7cae51cc62dc60862eb3de1aaa10ce"],["/tags/CharacterFramework/index.html","626aa27f9fe101e64a60de7b33125bcc"],["/tags/Coroutine-Unity/index.html","b6c43f9dbd9bcb9f709e078b118a66ea"],["/tags/Delegate-CSharp/index.html","13e67cc06ce7d31f0bf265c4e6a51504"],["/tags/Enumerator-CSharp/index.html","2c3ceb71af05cb5cb16ba59a2201bfd3"],["/tags/Event-CSharp/index.html","7e649833b8089d9df4e507655744a43d"],["/tags/GenerateResourceConfig/index.html","e08fba52e2f34608948eeb0240d7f6da"],["/tags/JSON/index.html","4dfad928fbfcf201b74d9abc07619799"],["/tags/ObjectPool/index.html","fda83d9b9d625e8a604d4b3f8651f71c"],["/tags/Reflection-CSharp/index.html","514bb461c77ff3bcb072d7098d94b90d"],["/tags/ResourceManger/index.html","7aa6dcc5e296b7e7a9437bf31da555c6"],["/tags/Shoka/index.html","3859682f9262fcf7cfaa305976cd2880"],["/tags/SingletonPattern/index.html","5d9ad2a1d65cf1bce0133d38d20e63f0"],["/tags/SkillFramework/index.html","192311b8f672ea25603b9130506b1b8a"],["/tags/TransformHelper/index.html","eae06f36b7a59186307124ff55d0178f"],["/tags/UIFramework/index.html","0e0344f6838ee922434c111607ec766d"],["/tags/Unity2DGames/index.html","f763e4154c7c790675bc197e01fdf0f8"],["/tags/index.html","c316b5b4d2ee5e2a02c4c809dbc97d67"]];
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
