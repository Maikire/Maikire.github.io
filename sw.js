/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","227c8e66241dd376bbf1a29ae4364a13"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","d8c45f6119f59394c227777630502184"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","1b7421035120d930f7cd2539a9aba3a1"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","2a10d153d6fba454f66ef57c8bc15651"],["/2023/03/24/DesignPatterns/单例模式/index.html","f2bbec5cf3718c909a10dab462e022c3"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","2de38c361620a3a0bde48675e8a4ba55"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","38fdc4b43c76466d788c56cf46cfbd24"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StarUI.png","8bbfa058e034f64721c03a0180f6e65f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","c207c1a030aa4d9da8becb0a1a50bcc1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","cfd2ad915c78286c569beff6ddb1eecc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","9c223519d9d326b9d4b81dc9ce5c51e9"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","51085ea546b901009fb82b017abc5989"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","cce3470aeb87fa9169c091a2904763b9"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","f41afeb9f73937d8e0daacb1e364044d"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","c9ca7315b3dbf7043be376bdf5f6d426"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","fcd3b37960735eaddea3c62761cdddd5"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","6ad766890a6a2acfbac51ea671094669"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","c26edbc7128f8900d0848ad66095c0f0"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","84bffaa442a108ab565615570e8dda6f"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","09f2b37e1c8dcab120441c2e34a213f6"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","295b1c8d2c09cdad2d397c2973a39ed6"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","edf08424cb2b7bb85d246fcbf81ce081"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","a8a587f0bd52949d7a8bb250481985ba"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","0a0fe5cf69395e92f7f95086fa5a6ff8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","c04c200c87552e83b24d154f6e426209"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","cc19d10e47b2aa0f92559f0af8d3a5b1"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","4a633299c7711fe19f181f6bdbd5828d"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","3afc673b01c918892f7377e5e83248f2"],["/404.html","f80da79278ffda8587a71a32457742a5"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","2325f68280b414a0e03f32f6b8ebe5c1"],["/archives/2022/12/index.html","40426ba8fc921c8427a54f75225bd438"],["/archives/2022/index.html","40e1a045c35c9bfc442f361ad74f3ebc"],["/archives/2023/01/index.html","b0737130a72cf283c731120f3caa0c2e"],["/archives/2023/03/index.html","59f2a6570a43eb5a669f2675f3c6b12a"],["/archives/2023/03/page/2/index.html","168a2b56df70f06a68d22b187971e141"],["/archives/2023/04/index.html","2db70408839336656ab8da9762a6d50e"],["/archives/2023/05/index.html","3dbfb280eb20e95331c3cde222979560"],["/archives/2023/index.html","ea961fb161325155fed163c665e8517c"],["/archives/2023/page/2/index.html","177ee351bfbc0894839001d611588da9"],["/archives/index.html","71e7b057b893ae6ee93c5aa2e41db000"],["/categories/CSharp/CSharpBasics/index.html","37d26682e7b958ff6a795b19b67ee206"],["/categories/CSharp/CSharpToolClass/index.html","6d97fa7fbe21eb6d7489af96270f9811"],["/categories/CSharp/index.html","812a4e8a357fde911451d14e6b9400dd"],["/categories/DesignPatterns/index.html","edd65465e8fde51fe06e79c5bf987408"],["/categories/Shoka/index.html","e085553cdefc70c581853962e050470d"],["/categories/Unity/UnityBasics/index.html","4197913e3b70bf1378409076a122ebf3"],["/categories/Unity/UnityFramework/index.html","0a3c940b8a5e83bf4fb9d3f3f5e153e3"],["/categories/Unity/UnityGames/Unity2DGames/index.html","b45cad6a17cbf6258434f944ca6f4a5c"],["/categories/Unity/UnityGames/index.html","cc7e573212a19985f9185e1815cd957c"],["/categories/Unity/UnityToolClass/index.html","fa07a6d18448ff75920c92637f8fecf0"],["/categories/Unity/index.html","1c928c338ad7fbd018a12ea32906a9e2"],["/categories/Unity/page/2/index.html","ab92adbb70df2399ea8d0eac81cd89db"],["/categories/index.html","41168539e9ccd018830c1140676ce9ba"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/catch-the-cat/catch-the-cat.js","49dcced11d494ee37f75565fb19477b0"],["/games/catch-the-cat/index.html","0b307d36d22762e7990b4276020756d2"],["/games/catch-the-cat/phaser.min.js","d8a4495f34efe550702977816f7ba73a"],["/games/index.html","533c14061ea9401954024f7eb6a2b701"],["/games/jump-game/Build/jump-game.loader.js","2af853a4bbca4dae0e78fa81a5bc987a"],["/games/jump-game/TemplateData/Long175844.png","fd4e6c2796fbdd58e02ec1f39fc4becb"],["/games/jump-game/TemplateData/MemoryProfiler.png","90178b1c01bd4c66a21b9f2866091783"],["/games/jump-game/TemplateData/fullscreen-button.png","489a5a9723567d8368c9810cde3dc098"],["/games/jump-game/TemplateData/progress-bar-empty-dark.png","781ae0583f8c2398925ecedfa04b62df"],["/games/jump-game/TemplateData/progress-bar-empty-light.png","4412cb4b67a2ae33b3e99cccf8da54c9"],["/games/jump-game/TemplateData/progress-bar-full-dark.png","99949a10dbeffcdf39821336aa11b3e0"],["/games/jump-game/TemplateData/progress-bar-full-light.png","9524d4bf7c6e05b2aa33d1a330491b24"],["/games/jump-game/TemplateData/style.css","033095607e94108b3505d05a4f3a4c6a"],["/games/jump-game/TemplateData/unity-logo-dark.png","5f00fa907e7c80061485fc64b62ca192"],["/games/jump-game/TemplateData/unity-logo-light.png","daf8545f18a102b4fa8f693681c2ffe0"],["/games/jump-game/TemplateData/webgl-logo.png","0c09503c39e9a26675e5f56d82f061b3"],["/games/jump-game/TemplateData/webmemd-icon.png","e409a6f1c955c2babb36cd2153d418b5"],["/games/jump-game/index.html","197d88710998c831da46b2467d03b734"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","a00d4c8b53bfab74a93ec0576ace06e7"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","7be2e391ba5fc6f95172f32ea31a4e49"],["/page/3/index.html","2d3e6e5bf4a372cf7f43d84ddc33d48f"],["/sw-register.js","c2c1b0393d6f5492c3ae6b47da19af72"],["/tags/AnimationEventBehaviour/index.html","0dd12637036dd2ed6f4b05a575757fef"],["/tags/ArrayHelper/index.html","8e0ee855b2898e27dc6811fad9872124"],["/tags/CharacterFramework/index.html","7a616d0c56e033e8496bd9561dc881f5"],["/tags/ConfigReader/index.html","25f6b00f913d0fca286378b2d5579eaf"],["/tags/Coroutine-Unity/index.html","e28c7a0a2376d140ead2a482d533609c"],["/tags/Delegate-CSharp/index.html","4b6979b44e2eccca19c0b6a0ee03f841"],["/tags/Enumerator-CSharp/index.html","e97f942833e581f451fc683c416971b8"],["/tags/Event-CSharp/index.html","b016d0a74046559914c03a5562724839"],["/tags/FiniteStateMachine/index.html","3ab49420326148bc9e175d9d159ec567"],["/tags/GenerateResourceConfig/index.html","1e23c46b936f1bcb61776ac371d45bb9"],["/tags/JSON/index.html","702d23cbf1cf7dac7a9c42944bd959b3"],["/tags/ObjectPool/index.html","a4c4a9458c4570c136aa2b55e7c5efa9"],["/tags/Reflection-CSharp/index.html","d524f959c2fc9e54060c279d6175c50c"],["/tags/ResourceManger/index.html","da6cefaa5b515d0506da40bfe1d45a54"],["/tags/Shoka/index.html","182deefafc33ec802fed05c3d3b311b6"],["/tags/SingletonPattern/index.html","42b1a7dba6ba7b84c33857e6f989a917"],["/tags/SkillFramework/index.html","0981eb99096d3a2eccdd218a7f0e411e"],["/tags/TransformHelper/index.html","fde42fdf6a31492691798794b1824ac1"],["/tags/UIFramework/index.html","a4ea0ef61f316e43e1fbceb17b62286a"],["/tags/Unity2DGames/index.html","d0e6530fe89300448ed78738c5413e2e"],["/tags/index.html","3221c9b9ab95b31e3a2f36792dc33de1"]];
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
