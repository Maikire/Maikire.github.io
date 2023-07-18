/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","c22730b2fa418783910490a8cdbc68a0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","92c57a77e7c568dcf4d0f5ea31b050c0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","9b62f0ef4c691f34f367642158f5dac0"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","eb7327f00898e6f5162fc179f7248391"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","a3c66b57205d8e657117e77dcdfd5529"],["/2023/03/24/DesignPatterns/单例模式/index.html","2d5d4d8c00362ef863fa2ff117e3d762"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","d70c4c5b22f92aafff49d4f3484a3658"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","38fe7f17693d80cd5bb71532a6e0bb82"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","5ee0969264b81486c28ba2f13afb03ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","7e84e059e8a3a9442c632a2a710f34d1"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","a0fd11aa917bc7c0cd19affb51c4c0fc"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","12c7b57c342e0e4da8f66423243ac5c8"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","9e5de07e04c68383287d9084c4399b64"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","d700284fc17290be6cdd358dde661058"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","a3ae1733857fa446e9b39689ebfb76a3"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","74a2bb979d2bb8fa6000025685cd5273"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","1f7a5c208daee1d34a612b222f2bfbbc"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","c5911bd56455ec2a3d24015a47daf036"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","92ed0cf23ccbc587add594df7ad2bc01"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","7ef892c343858b4c495ea06b73e075ec"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","ecaf8a6809cfb154591748a1df4a1e64"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","5452ed2ce890c02a9f633283aace3a88"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","7ab5653f4707d310dbb36d33948a2388"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","786553b6ab091f01ec961eeeaec1cc8d"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","3d6f61e1e5bea346bbd620655a15e52d"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","0eac8321775d3827fca31c57a231092c"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","6f0d4abbbff67bf5ea071e1f05bb3aeb"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","982487d69c2b24868cba240e3ed2f822"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","1a1a017f9bed247010433f29ec96b12f"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7a663e9d8d7c3dcadd95aa41e3abfa41"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","6510a967664fbcb417f5e47603d23129"],["/2023/07/17/DesignPatterns/工厂模式/index.html","d5c6ce1c17eece94cf59cb75c53ccd4c"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","99433a03b617a023195e505622deaba0"],["/2023/07/18/DesignPatterns/代理模式/index.html","9ef46118f09b7e8df9860d437e61d647"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","8d5a16ff88f34ce68e4acd101c5aa0eb"],["/2023/07/18/DesignPatterns/策略模式/index.html","849e3960450897f24f14093832f7e7ec"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","201c718e0ca9c65b585854369db35170"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","f6e5cadee132487188510ea50196d49b"],["/404.html","be5e266f79ff38d8aa9a1e139cb5756d"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","03bb64483744726aa2f3e310d8179c5b"],["/archives/2022/12/index.html","dfdeaecd7808fd7f2416cc6f65b031b6"],["/archives/2022/index.html","81a010bcadc2115636239c19eb98849f"],["/archives/2023/01/index.html","518c6c511d46f2e0a79a76f732d4dbc8"],["/archives/2023/03/index.html","ffb69834b79a736db10556f86c3eab7a"],["/archives/2023/03/page/2/index.html","e1281e7857c82e611a8b6199d15da204"],["/archives/2023/04/index.html","72edc82a0ab38058b513caf0e3890c9a"],["/archives/2023/05/index.html","aec0c226b428b36a09ab0f626a833575"],["/archives/2023/06/index.html","ec2416be733430fcc189c6ca4603861a"],["/archives/2023/07/index.html","29d826b4615e7d50fc7b4d04e75bce10"],["/archives/2023/index.html","0e795cddb3ff8e02ed1476758fee51aa"],["/archives/2023/page/2/index.html","cedc5da1e9c425c03d8bf3e859bdd34d"],["/archives/2023/page/3/index.html","eb6e983ea8acdd8d2517ee36cc46e11c"],["/archives/2023/page/4/index.html","15319407df4c3c09299c9ba8d85e32f6"],["/archives/index.html","baa1a21d465ec2919ad1da4c678a983e"],["/categories/CSharp/CSharpBasics/index.html","5f51f54b706171ce578fd0cbe1e36ef9"],["/categories/CSharp/CSharpToolClass/index.html","434e0210b99c5a58a3a56a4e5c05aba3"],["/categories/CSharp/index.html","00d612004df45fcdbbb954793bd59080"],["/categories/DesignPatterns/index.html","8806aa1065cd73edcba600c1d4b95a3b"],["/categories/Shoka/index.html","df33371094a4a099830a6c8c653c1a82"],["/categories/Unity/UnityBasics/index.html","804058a8d9f7fa800fcf7ef1cdef1ab2"],["/categories/Unity/UnityFramework/index.html","9781cbbc72f6475abe19c0451d72598f"],["/categories/Unity/UnityGames/Unity2DGames/index.html","900e5e931c6551efdbf0b3068f3b2405"],["/categories/Unity/UnityGames/index.html","1f812196d865ff59d26cd270a12c3214"],["/categories/Unity/UnityToolClass/index.html","94fd3369711821a06c5f0957a13c9a53"],["/categories/Unity/index.html","02b3d553da18f49d49f236a1a4d1f94d"],["/categories/Unity/page/2/index.html","9e11b0c6b3a5603cf19dfda8739784b0"],["/categories/index.html","87a41192229e29cbb3165917192b98fe"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","387229b96d6ca0e2f643d2dc5b3d5034"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","1a197a559aa4c691e3b94a3332359d05"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","67a8630402a4a0315c235fa534702bc4"],["/page/3/index.html","282c1d896ce708c5496ff0ef9fabf4d4"],["/page/4/index.html","90903adc181235d7f2db5a6f0d86535e"],["/sw-register.js","49cbc648fcc737d4a9cde21832d5f0a7"],["/tags/AnimationEventBehaviour/index.html","acfd7b278b4baf8f43b492437d6d8207"],["/tags/ArrayHelper/index.html","40343b8db6a7bb343e35bcf449d9bc12"],["/tags/Attribute-CSharp/index.html","bec8ba2829e7bad0723fb717e4a490cf"],["/tags/CharacterFramework/index.html","cd60e81d0418f2956b9173979e153d57"],["/tags/ChatDemo/index.html","28f614bff00e79b8e2dde0c9b9a9a1ba"],["/tags/ConfigReader/index.html","fc0fff242800e61f6208a18607a731c9"],["/tags/Coroutine-Unity/index.html","475252f48924d25e1531838da13906a7"],["/tags/DecoratorPattern/index.html","4c1dca8cec9cbc75018b8a08fcff6998"],["/tags/Delegate-CSharp/index.html","3e82e825d4a1f53ef5e328d3037d49b0"],["/tags/DesignPattern/index.html","1ee424305814a0a9a9124677eddb1f4a"],["/tags/Enumerator-CSharp/index.html","86b5432e9e8ac73e8f3fe80c90fed5ac"],["/tags/Event-CSharp/index.html","9780013de930b6ce2bf45b9f894f0abc"],["/tags/Exception-CSharp/index.html","734f0dfc5817450c8d2631d699e7f5bc"],["/tags/Exception-Unity/index.html","e49fce83fbac52b43beed79edce788f6"],["/tags/FactoryMethodPattern/index.html","ad319fe8849288c26a9fd8c0e0dcb908"],["/tags/FactoryPattern/index.html","3ca544d60cd6fa6ea9d8b906ac5213bd"],["/tags/FiniteStateMachine/index.html","598ce28c080119b171122a6e22c28621"],["/tags/GenerateResourceConfig/index.html","c5f69e6d48560468647b3432b9fa135c"],["/tags/JSON/index.html","e3152e9daec67eb4fb36d454321d8a13"],["/tags/ObjectPool/index.html","2ae26d81894846ce77f089290aab58de"],["/tags/ProxyPattern/index.html","3e7d187b4c9ddbfe27ce607103d746c1"],["/tags/Reflection-CSharp/index.html","e0ace8aae8c035debf2f15f88ca3ba5f"],["/tags/ResourceManger/index.html","89e090aa6c4cb852d321719fb186541f"],["/tags/ScreenFade/index.html","f35680cb94560372850c1804b33342ef"],["/tags/Shoka/index.html","bc0d6c4fa18a49fb87d1ec0782c8cabf"],["/tags/SingletonPattern/index.html","17b60f25b3b7373894935d819a34a817"],["/tags/SkillFramework/index.html","4778c50c61a538800301b7b7eb829249"],["/tags/StrategyPattern/index.html","0a00138b1095e3b1feb0d0f09988cafe"],["/tags/ThreadCrossHelper/index.html","8b640afe64907c44fdf8d0edbf86d1c1"],["/tags/TransformHelper/index.html","83d884ca86ed796046ed86e24926f17f"],["/tags/UIFramework/index.html","b981248442713fe13ff105e26e494340"],["/tags/Unity2DGames/index.html","eae4a815c0ed1d84052c2bfe8bddb70c"],["/tags/index.html","9c06407e2c60b91243409c94bd5db22c"]];
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
