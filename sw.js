/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","7b84e5f5e6d5d9f885ed3218f909a964"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","1afa4d5197bb638f404846012be06db4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","3d6afeadfdee7e3452527e30fb6a8053"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","30506a9586a8e0f6defce681a962654b"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","a574b529bb9f3cb5b9e4d46f53f084d8"],["/2023/03/24/DesignPatterns/单例模式/index.html","f355d24716e36632edf028bc6ba9a2eb"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","cdf281ddff6f7197867c215a103f0d88"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","01db0e49edc9ca900362c1ca12f5d082"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","4c80290b5576cb0f24f425c7a9a6d2d8"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","50e3a64eab80de099f894612ea47832a"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","16d7e1ee8beb0d7e45196ba5619abe70"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","61039ab567109a392dd04fe406270f15"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","053e2a46c7a5380967fd8e1774ba5fcd"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","e45245349c0800e3471711b9aa137ddf"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","f7b7d43395f4f98ee0ee0366cf99d728"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","9d5ba3b43ba569182d1d6ce30490c60a"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","93bd0d9c55a3f1d4bfd9d1f9c9d3247a"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","07d0d5b460436ed8564e83253118584c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","b1be7b5ebc7e09a72c12dbc5d34000de"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","f0ac1e310f98231f3e2b24cca468864b"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","9be0459839cbd108e091818f502f64fc"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","c2583b2da8f2a10e8cc9d8869f19fce2"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","6095d786155f5a4fd8ee9c4d62eac5e5"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","d8aa45711c64c742b7507f493542a8b6"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","c4f826974b05d1e35b7fc1e225ad177a"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","275db49118b915c8ceb3ab3a0e800228"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","0debc9de04522c1d6433857eab014874"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","e66a316fb85f84438bf46c9d625a05dc"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","6510a967664fbcb417f5e47603d23129"],["/2023/07/17/DesignPatterns/工厂模式/index.html","85e71bc649feaf888a8fd09626f5f759"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","99433a03b617a023195e505622deaba0"],["/2023/07/18/DesignPatterns/代理模式/index.html","8016bbdbf67d51eb8f2854cbb49faa9a"],["/2023/07/18/DesignPatterns/工厂方法模式/ClassDiagram.png","1a1a017f9bed247010433f29ec96b12f"],["/2023/07/18/DesignPatterns/工厂方法模式/index.html","2ce14c8f0adb277524d4028568fcafb8"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","8d5a16ff88f34ce68e4acd101c5aa0eb"],["/2023/07/18/DesignPatterns/策略模式/index.html","87a605ca753d658a1f80c9d67d6f0ca8"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","201c718e0ca9c65b585854369db35170"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","92bbc252cebe10dfeaf69e4d6e7bb736"],["/404.html","dd30fc1ab2869f8e36f8d8b84f5feef6"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","95de4efbb891f3fb8154f6997a476fb8"],["/archives/2022/12/index.html","36ed9bd6d9d5b69a0679852c0f5f157f"],["/archives/2022/index.html","f2aa728acb5cc47fbef043d392a22e3f"],["/archives/2023/01/index.html","406bacc33556b414c7577f25a98c28ad"],["/archives/2023/03/index.html","79f8ac7f39a7da29e4934ce06ba163de"],["/archives/2023/03/page/2/index.html","38ec1af53b1cf357b2e7c7da2b01327e"],["/archives/2023/04/index.html","75b7b1112a44c432a6c4839bfeccc5ff"],["/archives/2023/05/index.html","d2ce8fc9890fcf71197144128a419e27"],["/archives/2023/06/index.html","985053dd92f106a53fdafbca883d941b"],["/archives/2023/07/index.html","94b3b5c4233242ab778c69405dcff6ad"],["/archives/2023/index.html","dbd5584789be511d0271bf52191224aa"],["/archives/2023/page/2/index.html","f76bf607b7de50c22e238d9d90577aaf"],["/archives/2023/page/3/index.html","9d127dfda140a8f87042a3ad5d154d5a"],["/archives/2023/page/4/index.html","102e65f3f451c534ff90982f8b98e229"],["/archives/index.html","20efdd3c0c23b47938666177ca518c3c"],["/categories/CSharp/CSharpBasics/index.html","c35e32addc35bf09230b22572db88d2e"],["/categories/CSharp/CSharpToolClass/index.html","aa635fb074bbc87bbe2a31d852bf3d15"],["/categories/CSharp/index.html","776f5c1ae53e6c3068e4a493a94bc001"],["/categories/DesignPatterns/index.html","148c169f6d08382a2eccf456f1fddf96"],["/categories/Shoka/index.html","98af991b11461498a36077953b104f7c"],["/categories/Unity/UnityBasics/index.html","7f0f2368f1afe0313404722a8df7ffbf"],["/categories/Unity/UnityFramework/index.html","08314844b536855f3e787c353ad783d6"],["/categories/Unity/UnityGames/Unity2DGames/index.html","962c699c672bae5d853d258d58a028a9"],["/categories/Unity/UnityGames/index.html","32a0a4a9bebd60c1cfbcc88ac2207591"],["/categories/Unity/UnityToolClass/index.html","7cde417f3967c04aa17d85ab5702de51"],["/categories/Unity/index.html","a6481da874c84c07cda4c873bf963de2"],["/categories/Unity/page/2/index.html","7812a5153d12e6eb36bbfbbd33b8704e"],["/categories/index.html","f0722e89e64c084ab4bff3ad5c50fbb0"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","03128bdb244e21259971a70160e1a035"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","7434f9c7cc98e2e0f464a1258e770e4c"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","c424a534d6a35cd276524b10ee8dc3f2"],["/page/3/index.html","805a08f5576acd12b3cfcdd1f256314e"],["/page/4/index.html","ac768fc12a34a8f09d3bb4681fc219f4"],["/sw-register.js","04430822cc59ead27df71b64d2731e43"],["/tags/AnimationEventBehaviour/index.html","1da95a28042ae596f730a71dff19994f"],["/tags/ArrayHelper/index.html","bc39695a3adcec6b4470d60d8ae5ab24"],["/tags/Attribute-CSharp/index.html","67320d97bdcfbf810116817712ecd77f"],["/tags/CharacterFramework/index.html","9f700c03fae58ff558765eb974ba6164"],["/tags/ChatDemo/index.html","423ff94e9173ff408db49af5f546218d"],["/tags/ConfigReader/index.html","588db53fcac44186f63f16594d443810"],["/tags/Coroutine-Unity/index.html","42f25bbc7c16e4794d3f707c24699bb8"],["/tags/DecoratorPattern/index.html","0d40e72500973448a48e1219649a3354"],["/tags/Delegate-CSharp/index.html","65337e0c8d55d2562601aeed1bca783c"],["/tags/DesignPattern/index.html","a15dacfe4a2996a5b6b5dcf9816610d2"],["/tags/Enumerator-CSharp/index.html","cf2b5e69bf129d7f036dd5bfab831bc0"],["/tags/Event-CSharp/index.html","765ec33c0de71668d9339df164216347"],["/tags/Exception-CSharp/index.html","0dc8dd7f937e506a68dfc8001c358607"],["/tags/Exception-Unity/index.html","0b985c6119eb4e3b28aa281e9a8c1efa"],["/tags/FactoryMethodPattern/index.html","45c8f03659bda50da4d4a1eaa5f8a3dd"],["/tags/FactoryPattern/index.html","71466f0258f49b748c3f84513b1cb747"],["/tags/FiniteStateMachine/index.html","bc6fa622909b12649d1c11113cfe08ef"],["/tags/GenerateResourceConfig/index.html","07c68f6a2587278a3f8a86c7c65ad17a"],["/tags/JSON/index.html","1e88cb876e509d814616946eea6ae03e"],["/tags/ObjectPool/index.html","2f56d806ab0980793de5c6ea2f6e9160"],["/tags/ProxyPattern/index.html","1c563ec47d38e3d856542576ec134573"],["/tags/Reflection-CSharp/index.html","4e5fb353857e2ddc2f8bb71be7e245aa"],["/tags/ResourceManger/index.html","c4d60247d60593653f50fb64274dbc57"],["/tags/ScreenFade/index.html","4689c8e5c4b0428de158a70097e918f4"],["/tags/Shoka/index.html","c22dac5d81f198e57278a4abfc209927"],["/tags/SingletonPattern/index.html","87c7c64e1d2e38c227785ddf4dfe686d"],["/tags/SkillFramework/index.html","6f23372b07ea3f64d65e4049c64e1c6c"],["/tags/StrategyPattern/index.html","b436068b5098e97760c75be9c92707e5"],["/tags/ThreadCrossHelper/index.html","f818393e6ddfb050151fe1a07ad7e6ac"],["/tags/TransformHelper/index.html","a14586cd3de4b9ac924cbd5c5a463154"],["/tags/UIFramework/index.html","ed9d538d6ce2f5c49aba19dea8b6c477"],["/tags/Unity2DGames/index.html","090fc9c9e4e5a034c55d2fc4071991a9"],["/tags/index.html","012b1d0437b2dba3ce7e2b67daac2152"]];
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
