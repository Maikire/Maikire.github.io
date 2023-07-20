/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","5c63e5bd6f908df85bddf4a87125774e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","c7756aca4838153cc5031a7b78d46af8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","3d1584b2824c1eed9463834187650177"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","1922614dd6126e725788c4ecaa74f1bf"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","162d1b00f737e3aeda1ddb0b51b818a4"],["/2023/03/24/DesignPatterns/单例模式/index.html","667271e3a1ad7d3df2b1629af2f0916c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","047bcb4912bfb50d9712cebaa8cf80a1"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","72b84f824ffede6f11ab9fd7126f831d"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","a89d6bd1825ccc0f526400401ebcf50d"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","7e439a179a302b75f8f0443003d4210f"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","489cec9977c81538ebe98d5af35bb63c"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","58312839336345ae23d46a9c0d6ed465"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","a6f3f4eb12159ef9fa59a58272b936d6"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","7911a6860511979d3a44fdbc924df5af"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","4d4c4c1319fa248ac178ed3e02fde879"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","7a683eb8b3a4c49b7a08943fe12f42a7"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","9c6c93f20e03240fec34b66b08f0c94c"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","774d468a1e416e61bbfd3e3e0c54e82e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","86c4a0ff1756573d5a4d1c0d069fa431"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","f5ef1895fc92e167f9ee010d27e4b807"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","e3320be1c7d9ce93e22026703ba789cf"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","c1c172b14deb3d2c873ef17d8c3c3773"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","e49a9c002732f4647800b63514e72557"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","201474eb75aef8bc984fbecbf4841f5d"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","c9a9a2d2cda491b634766587ac7137cf"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","165a6af013ac50e618b5297a180cf756"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","896f638398dd3ffe252448592f4e8e2e"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7e13b9997f2575f81e72814db360f308"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","099ee37ad2a3131e54a1ffc20a6c8864"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","c4a5199e94d6addedcac7b1d91606dcc"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","1dfc48e994895454d25160e782d705b3"],["/2023/07/17/DesignPatterns/工厂模式/index.html","6cb15619aa25350d02ebb2c24d6d3400"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","38e5f7792323e5fd641af4499504b61d"],["/2023/07/18/DesignPatterns/代理模式/index.html","7c9a17d27f17f5e3f003a70862ce0c7a"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","947e1c3bcdea729b164a8d9d2a20d920"],["/2023/07/18/DesignPatterns/策略模式/index.html","da59392b69ec33bfd36bcc17ce6248ee"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","99855b792297f32ed0743759091fc7dd"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","60e3511b0f896dca4d42268484d73c6d"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","65598790fb30d09f3d41fd92f8a9637d"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","32818838fdee48faea768d60467a5c50"],["/2023/07/20/DesignPatterns/原型模式/index.html","ceef529b5bdf807167826cd44534c05f"],["/404.html","a93f54b7ff5d696a31a943c0b470f865"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","b3c1769647b9b2d6f096d4e980ca0298"],["/archives/2022/12/index.html","ba361f86e23e273f0944d48b5ec08940"],["/archives/2022/index.html","b680beac67bd42342e8e84a961fad8e5"],["/archives/2023/01/index.html","b5bab7fa0f1094dd9b80d57b90197299"],["/archives/2023/03/index.html","7d4abb9f45d5d2bd8a81a382e85e1df7"],["/archives/2023/03/page/2/index.html","ecc273438ee923928f4ce4731ddb78d9"],["/archives/2023/04/index.html","1da2084045c00d98a9dcb40162c41d50"],["/archives/2023/05/index.html","4c07b2d7d3d6636d27774308ea5a7327"],["/archives/2023/06/index.html","e89d88ecfe239bd6bf16784387615dc0"],["/archives/2023/07/index.html","d25c53bd81fbe89722c4c24787a014a3"],["/archives/2023/index.html","531bfc9d0e4e3a27f78d7143c8d94530"],["/archives/2023/page/2/index.html","fe9e489e1b745e81e76899db439345f3"],["/archives/2023/page/3/index.html","94ed86b8ff140cdc3ef3bcf35ab6759a"],["/archives/2023/page/4/index.html","9032eff75dce45226fc95258d708672d"],["/archives/index.html","3292a512027919dc7b11b134cb439a3c"],["/categories/CSharp/CSharpBasics/index.html","de96ee0d78069f5eef390b98eda519d1"],["/categories/CSharp/CSharpToolClass/index.html","12e9819dace1301471c538a62b64767a"],["/categories/CSharp/index.html","8de53730b4b66b4bd70d804c0fc51836"],["/categories/DesignPatterns/index.html","df263bafe1069d932e46b06240c132bc"],["/categories/Shoka/index.html","8b3993219dcbede9343fad2d0a675d97"],["/categories/Unity/UnityBasics/index.html","cad217cae87912eb249a50bd062df34f"],["/categories/Unity/UnityFramework/index.html","38a96f5eeb7f45b5bedeb6d134888066"],["/categories/Unity/UnityGames/Unity2DGames/index.html","b3a2a37db268c336ad4a866031e67397"],["/categories/Unity/UnityGames/index.html","69b312dbf5cb5ac442192823f16ee043"],["/categories/Unity/UnityToolClass/index.html","60231c6a7cff1ed2d8a8eddadac84a68"],["/categories/Unity/index.html","26581dd916888a350ffc72a649342748"],["/categories/Unity/page/2/index.html","8456cbf50e4a5221eda9427588e4f5dd"],["/categories/index.html","336523cce297cae097d6002272452324"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","2fea3b78653a4eeffaf432ea602187ac"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","79381a5aa904ab50db1e19e36f7a3465"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","e717eafdd13dfda279a2e370914f2d94"],["/page/3/index.html","b41b83add124c9c1ccbff127a71150d7"],["/page/4/index.html","a4181844de9b8d19c04c5528c435ec08"],["/sw-register.js","e8841fec672871973bf2c0ade755afd0"],["/tags/AnimationEventBehaviour/index.html","9061a6e69e5176b045835e819c1a3359"],["/tags/ArrayHelper/index.html","56799bb69483a8f48d91445fcdfc67b5"],["/tags/Attribute-CSharp/index.html","8787ac10f4f852225b82f650d0493a7c"],["/tags/CharacterFramework/index.html","502beeb09e3ac06c088ef8ef5f9d4579"],["/tags/ChatDemo/index.html","ef13be615ca9df7787bdbfaeaecedbfc"],["/tags/ConfigReader/index.html","52b16d6577abf9d4dcc122d2e97131b1"],["/tags/Coroutine-Unity/index.html","56c58a3fc27c669cee916435c0906328"],["/tags/DecoratorPattern/index.html","0f17b19a8c14a98c29e9c32d9a74c03e"],["/tags/Delegate-CSharp/index.html","0079c6e3d2266d6991f0cab0ae2b061e"],["/tags/DesignPattern/index.html","f2c68d4d59e22dec739b2bf988e1c794"],["/tags/Enumerator-CSharp/index.html","27bd8fff2524cc571cb87ef5d3c6df37"],["/tags/Event-CSharp/index.html","1fcd93d1cb579e0b7f0126850cf21ea6"],["/tags/Exception-CSharp/index.html","f5f1aa53d4b5f136e692b2fda3636112"],["/tags/Exception-Unity/index.html","cf520013858aa40171b45af9dd3b7b5f"],["/tags/FactoryMethodPattern/index.html","fe84c159dcef2cede81878a27f4a836c"],["/tags/FactoryPattern/index.html","c85e1cd0cd9f4bd1e3299c0c9e707de7"],["/tags/FiniteStateMachine/index.html","8bd4ff8cfa8a3c0a0ddf7deba576a40a"],["/tags/GenerateResourceConfig/index.html","7dc54ab106493381bf0b4944e8f4e0f7"],["/tags/JSON/index.html","6f09d8f0fcde60da9cc2aa2823f6c328"],["/tags/ObjectPool/index.html","98bc51736ac905765311d56415dba509"],["/tags/PrototypePattern/index.html","3e0c86de306f4ddd74fefffec4091d32"],["/tags/ProxyPattern/index.html","d7c5ecc087bf6408d5c49c1dbeb48873"],["/tags/Reflection-CSharp/index.html","88712087f44ce9e201855b76835a9d44"],["/tags/ResourceManger/index.html","3817c2db4a63a41e79a54b507b13f363"],["/tags/ScreenFade/index.html","49f60cc322dfc38a20fafc085a25336e"],["/tags/Shoka/index.html","d9066c403693c5c4c7a2a53f0bfb74b9"],["/tags/SingletonPattern/index.html","e071f0829ec30f1ff1a5f150050d5117"],["/tags/SkillFramework/index.html","abf7bb370828dee86bed5326890cb756"],["/tags/StrategyPattern/index.html","63d7a4b9a0917406e8eaed1ffc49abb8"],["/tags/ThreadCrossHelper/index.html","4a21a50ea7af125bd58779df24e85e74"],["/tags/TransformHelper/index.html","87e954ad849548bb1ec9a075f54cb784"],["/tags/UIFramework/index.html","08c7ba7993c37f8067c50eaa399ae54d"],["/tags/Unity2DGames/index.html","df0f188eb8d69efbf73e53cddae5e62e"],["/tags/index.html","d93e1222875ea3b708bf516f5f910134"]];
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
