/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","48087799953ed24ff4b3ed1a981c5276"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","58dbc40c02bb9e5856a2842c87003e01"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","fb63d75376513c47bbee670ffbb620e6"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","3b2c71bd8d3199d65f393bfba9c26a16"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","81c93c31e02cb56cbb4b6c1ccdf99296"],["/2023/03/24/DesignPatterns/单例模式/index.html","0f36f0bcc8613a1e95ddb87df14aeab3"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","9850f077566f013f32247c1f899542ee"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","efdba7e40540ae763830eb2ee11d0e2d"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","9c9774d8ea88ea9fb49c53dc2c3dca78"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","91fc0a0eb30c19ea65ad630f61da8ac8"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","45163dde1cf9e408cc4e383655e79f63"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","4dd549a36e90c105a795f4a6d3ae9c19"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","4bc3ee32fb2e60177c6cee5245e47ce7"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","f4b116c7c81078da0790d75a100ea6fc"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","ecc167882d1d1c0e9bdcfc2730ae78c4"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","d70927c9052f7bb7a58dd41e4bbbadc5"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","02dd80ad21c7f76df97cfe29dbcb5bbc"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","b2ece13cf85d6058d05e2c16f4aa112d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","d47fe2a252fe425459c74589ecee484e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","1d1d83f2fc6e499653d438c7250d0ec7"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","34551bcf8d2068a088bb7a1679dad2bb"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","cb80450c5d854000797ef214f7bb725e"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","cbaed08d3f48c0c007afbcbe50c0033b"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","ca5cfffaa1eaa3460dc66066d80c0df0"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","e5d9a573c1b7b56e64754a67d5febaed"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","de083664a201ca6a56352980cbf1ce82"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","3c024a248b88c2361c37c7ae05891200"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","6507bece753ee1e83c38e1e2693be680"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","099ee37ad2a3131e54a1ffc20a6c8864"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","6375a4f6f4c57f1b0437c624f3bd563d"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","1dfc48e994895454d25160e782d705b3"],["/2023/07/17/DesignPatterns/工厂模式/index.html","1ec29a6495c6f863189be11de01aebed"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","38e5f7792323e5fd641af4499504b61d"],["/2023/07/18/DesignPatterns/代理模式/index.html","536cb6a5b5fce2cd1a1c8de6e4f6f09c"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","947e1c3bcdea729b164a8d9d2a20d920"],["/2023/07/18/DesignPatterns/策略模式/index.html","ae17edc2fc3b4a3dfba22836dc2fba38"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","99855b792297f32ed0743759091fc7dd"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","830bfb47e41864faa1a55e0ee31ad6c4"],["/404.html","9fb8400895f8a7e49c097716c6ef1d35"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","fb6494fc01c7e99ed220290e8fd562ef"],["/archives/2022/12/index.html","c1a54729d6e411949cf74aa834691be8"],["/archives/2022/index.html","bdff6503085afc6e122bb93f17e3404d"],["/archives/2023/01/index.html","bf0f5a4dac6e21aa9ccbac95d8294e0b"],["/archives/2023/03/index.html","851e853e97324d28952826bbe4562973"],["/archives/2023/03/page/2/index.html","bcec383fec77698452c55676c86b54dd"],["/archives/2023/04/index.html","59f9915db675558b9bceff499854a7ff"],["/archives/2023/05/index.html","a27e0f962b71d8e12c7a57bb1a9a7224"],["/archives/2023/06/index.html","ca77fd24d7842fcb295cb3b3f585d9ee"],["/archives/2023/07/index.html","d719dd082a98a81517224af26a398d99"],["/archives/2023/index.html","bdd7d6231137edba34c8e1920e6d0160"],["/archives/2023/page/2/index.html","e0464508d93b5e0ffd1574de455f6c45"],["/archives/2023/page/3/index.html","7cbe52238635f7f5880061f3f93b5e1a"],["/archives/2023/page/4/index.html","9ea14ad625d727b615d394afe5d36ee9"],["/archives/index.html","802423e074a2743ed948c5e93582ac64"],["/categories/CSharp/CSharpBasics/index.html","5b86f0385c782c0c85cc29706aaecec9"],["/categories/CSharp/CSharpToolClass/index.html","45e9c1058ea02ef4aa96585f3a73a9c4"],["/categories/CSharp/index.html","bc690be9cd1118ae106ee266b2129fc3"],["/categories/DesignPatterns/index.html","9d4dc32d4b10fa7614ddffeaf1d1907d"],["/categories/Shoka/index.html","5f955bd894c82463cbca4d18baea406c"],["/categories/Unity/UnityBasics/index.html","e895665f6ab64ac36414aaa5a6175c7d"],["/categories/Unity/UnityFramework/index.html","cd014c9210304451968c160e0b9ce67b"],["/categories/Unity/UnityGames/Unity2DGames/index.html","b242051d6dfbd0c8e5f5ccc9e50d660a"],["/categories/Unity/UnityGames/index.html","15686cfd9c313ace37be04bed5403797"],["/categories/Unity/UnityToolClass/index.html","755aa25a5caaba8b0de2034c86aa1e38"],["/categories/Unity/index.html","a15c3c4b6f91c6fc59764a70698832c6"],["/categories/Unity/page/2/index.html","4e7de94c5c8cf4e904906afd9bcc2e9a"],["/categories/index.html","7906add02ba3f49f15854042fc26db18"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","2ad3b86eba75f5d14a866cf29878f142"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","c3ca56469446e6ee7b09904a78ff8fe2"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","0523ebe31ac44c35e8f77714bee5cab1"],["/page/3/index.html","4481ace605a9129462d51de46d33a8d0"],["/page/4/index.html","2611b3585a01629e88eb05c94e66b361"],["/sw-register.js","ac5b3de0d3ea917422b5e96578e0baf4"],["/tags/AnimationEventBehaviour/index.html","aa3467978865811cb394787e99441cb8"],["/tags/ArrayHelper/index.html","440bff4ef936187fe2ea9505a2648c7a"],["/tags/Attribute-CSharp/index.html","beef8aeefe80b9e00133aff4183d3869"],["/tags/CharacterFramework/index.html","91780b40fe0ceb00d8a985fbee51c65a"],["/tags/ChatDemo/index.html","0adf86559f6520d30f056a2e51dab5c6"],["/tags/ConfigReader/index.html","d1210de36c2b5f68757961e0526d6de9"],["/tags/Coroutine-Unity/index.html","662535762f222db3982adcbe64654146"],["/tags/DecoratorPattern/index.html","91aa90c3b997a886b60eb2b44f28d60f"],["/tags/Delegate-CSharp/index.html","81f39df97f61bf7d9a49d34e7a8cd6d2"],["/tags/DesignPattern/index.html","53e1555ce2b6c3614c01642a80eaa888"],["/tags/Enumerator-CSharp/index.html","ff53b62514d59e4054fa880d2e78a474"],["/tags/Event-CSharp/index.html","0afa04038779e2474eaab1b5b9cc30b0"],["/tags/Exception-CSharp/index.html","c8ea737d4038b7124bdddece0fc04e84"],["/tags/Exception-Unity/index.html","e6970d88cdbd684100205a1e4e1a8629"],["/tags/FactoryMethodPattern/index.html","4a08981925f574cbdb5518b629aa72d6"],["/tags/FactoryPattern/index.html","9ee06e5c19c22195ee33fcee4a90bddf"],["/tags/FiniteStateMachine/index.html","ca03fb3c2cb88d413ded9346f4024df6"],["/tags/GenerateResourceConfig/index.html","56ddabbd1362d3c682a3e7cb84401e23"],["/tags/JSON/index.html","68092e1be94c80310e4bff9a2de679ab"],["/tags/ObjectPool/index.html","2a2806b15970eeaf7dd81bea28f11e6c"],["/tags/ProxyPattern/index.html","480fd6b503616f4306823240dc39a071"],["/tags/Reflection-CSharp/index.html","fec563141da9ba5874b5d21489942db4"],["/tags/ResourceManger/index.html","fdb457684daf78fa77de1459fa6ac14b"],["/tags/ScreenFade/index.html","9e5dfa58dfbf528a930f7cb610f749ff"],["/tags/Shoka/index.html","a69c169ad1fc21d4292a1bf011749e5a"],["/tags/SingletonPattern/index.html","e93e6d6a5442202982a5000dd225e81c"],["/tags/SkillFramework/index.html","67a25f3c66f87a5232f7b56917d4f761"],["/tags/StrategyPattern/index.html","8abd5eb282588c72663090eadec009b5"],["/tags/ThreadCrossHelper/index.html","b90a11ee8bc58f5f4aeef601afb207f6"],["/tags/TransformHelper/index.html","9605dbe51d41cb2ea7063b0277ff0559"],["/tags/UIFramework/index.html","7ede0cf8d4b194f46a3ab698231c8b15"],["/tags/Unity2DGames/index.html","97cd9eeacad7b844006f1898bb9480e1"],["/tags/index.html","827274651d68376859bd515504988be3"]];
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
