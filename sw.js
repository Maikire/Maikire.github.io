/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","460f9da73d191bb9b54a2ae364d3cf88"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","741b5e413611bf0ece26158290ef4397"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","77d80b8c7c1a7418b748ac4c73756a19"],["/2023/03/20/DesignPatterns/设计模式/index.html","fef6d0349e38e72cc7d2c5caaacb6911"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","2a0da9657a9843dea5326da188f0a792"],["/2023/03/24/DesignPatterns/单例模式/index.html","167d91f51e9c389cfc6a76fc62bddddb"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","a741073ef7a206261a0d88eb370093e2"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","27a95ebdb07731ea04dd0b7bbb8e6d25"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","aea2e3636f2a1f6d0f37032598a044ae"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","ff926a064ce3022aa55f83b499f4b6d4"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","5d4dbfa2e4cf35bbecd536da09ce629c"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","8bb645ebde5a94bce3091cd4f43756eb"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","83d0034e6090b71e517ffeab28b2c4f9"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","ad8305f2dd86f0c56d00a885a74b1e64"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","347a9a6da8864f4e693f7751114555bc"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","62bd1f2fecceede37ab7e17396b66b60"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","731c6543e6b48348881179ec7756bbc5"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","df775f4d19aa850de133ef5d507d6ad2"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","b3cbfb1c812c46a97cd6c2da19c9a5dd"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","afa8ed00a1134e0d95d77619c5111d28"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","a2e48dc489a5834985ce0b8d31ec3cfc"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","746a1df638c6fd5e45253a136058b8ed"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","1ffeec943fc0160f69e0133db20dde07"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","b09deb2a96f591eba1e42c55c4beb046"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","7595b3625435089083d4cb1b20098e08"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","3bdd0ab86095332c93a27c71bf6db3d4"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","07f7afbb6a00047d2a6b407cdf8df854"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","723cf0d0e88c6ea2c8518365f2777478"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","e40cd08836489ca4c85d52836d463278"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","6c7157c9b48a31155d9a7eb7b985a3d2"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","7680f1014306243b3bdd695a114f40a4"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","8df4e24bc8e805961f2c1c62f07b3b68"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","cabcc7868db266d7630dc5ebfc500e44"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","d092ea491595e9c1403032225da43e20"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","ce393f13f4b0acef4b69adc6fdb84038"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","494d84745feaece8082c0136963fc185"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","5e419be2aa7de5de1392e09d98763cb8"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","c811326f16cde6833dcdd358f432def6"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","20eded4a7e0310f75e52a9f45f9c3d40"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","586e28e04a94bff9c130fa597ae57719"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","0aaf4f21d8bf8f4aaf7a21b26319e406"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","3c8d54abf699dc5420d554e90e7660af"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","cb4e2e9fdd8b67a7522ff0ca53b3412e"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","e50b8b6cf92ac3dce6c16ae3df859ddb"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","a6428765cb9bc400f8f8eb1c183d9508"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","19ef33e47e485615269535f648631938"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","cd987d3712b59fba1d9ec839b72c0fbf"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","f37f8b3bb1d9acff4466eba811726b11"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","ed056c0ee47524ca97cb023d3c8fca90"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","f954fc01bc75372343d0440f2f8d9408"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","a8db920e79d48744578193356da05704"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","93641fe4b2872a61fe5cb634835ebf6f"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","eb3220aa948fe8d4a9e5b58eb3b1fc3f"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","f8466b7c029eafe712cc6ee1f237d5ed"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","664ee2313b141db57c466d48cea710bb"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","fb02a09bdd405d1844aa2859b4702bd1"],["/2023/08/02/配置文件/JSON/index.html","d4674a8212b346d10bca1b59ba247196"],["/2023/08/02/配置文件/YAML/index.html","fde89ebfd9f8712b8f0bffb29e1f070e"],["/2023/08/07/配置文件/XML/index.html","880aef726158edc2aa3ed57d2455e859"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","ac3d450af5b68699c7842f49369d6dfa"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","856c67df9f655f38c8f376cb9e44cab7"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","25d6ea7cbc9bdbe8f5e69cf398169e14"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","d83f40a62bb7b8266b1541cd729715de"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","98b59fa66e43908cd56451ef371e38bc"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","7596b8a6945e2d8d7ccfacc93f4110ce"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","6215fcf4972c28fc08f3e41c66a65a09"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","6a133fd92cdac70e4c1ed746616e3032"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","40ab196bbf500a121028da31213cfee1"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","38c1e73fe3106d774f634428f81585ac"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","de6134733b5fa34d72867ae75c6d3b99"],["/2025/01/10/正则表达式/正则表达式/index.html","7f1e02d3508ffc178556b86a35d5cf10"],["/2025/01/20/Lua/Lua/index.html","02c851a3d2e18c6d052f503bed11108f"],["/2025/02/12/Lua/Lua + CSharp/index.html","2fcc498cb9e056921aa2ab22766fc5e4"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","d3a66e1ce1ee8b2b63e67f4f90a3e94c"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","380915028e4b5e3e8b0d76bbe744ad07"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","137861572b5e85cb34ed05fb3230d9d8"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","d475a975f88ffe7b22cd8abf9d66619e"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/index.html","c312d6acd76210b213e94a2f29132c55"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","7cd4c4956c2409c3a1eb2bac2e91bd0f"],["/404.html","05cc0bf479b12ec000b03adb890c0da7"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","6e1ada61b9b3efd271c55eae070665b2"],["/archives/2023/01/index.html","13c39b86156699b6984ca205db10f466"],["/archives/2023/03/index.html","8637291e66fd3e38bf962c13a0bcfe1c"],["/archives/2023/03/page/2/index.html","fac0622a5e610a53fa58d649070973bc"],["/archives/2023/04/index.html","848fe4844b9eb90972e8be654f266c5f"],["/archives/2023/05/index.html","49aa2b5ee38e02a9af9ed4c032828153"],["/archives/2023/06/index.html","7aaf9695b628cc68f4f839d0620f019f"],["/archives/2023/07/index.html","f81b5830345f071652a6fc417ed00d92"],["/archives/2023/07/page/2/index.html","348d0f1b988e1cb77bb7c1ca45893b65"],["/archives/2023/07/page/3/index.html","d2b834e8028d27ee08c892ab9057c116"],["/archives/2023/08/index.html","832ee872f5ce5256125cffd8c27a3058"],["/archives/2023/12/index.html","c2bc6b3bccb5b3efde65365107c05632"],["/archives/2023/index.html","442182032f3e0f5597375249b19a7c35"],["/archives/2023/page/2/index.html","0789f666defe5d63dc6b9039019b207a"],["/archives/2023/page/3/index.html","3a03bc4a3168139390421022519aa41e"],["/archives/2023/page/4/index.html","ccf3e9f408868f5ec6f527a16e9857fd"],["/archives/2023/page/5/index.html","dd87c6f8cb23011299ea26bb91207123"],["/archives/2023/page/6/index.html","988be41f9440435004f3404ae4818e59"],["/archives/2023/page/7/index.html","5d420a8bcd31dd00e918b08c85eec984"],["/archives/2024/01/index.html","71c9753f172daa8857e1b753a69d459c"],["/archives/2024/05/index.html","f75f7e6808ee505878b4415a32a4d68f"],["/archives/2024/09/index.html","eb43e21ba5867c6cd2585eb81f3b9d04"],["/archives/2024/10/index.html","1edcd9df96ead8476a4dbd170827ef8d"],["/archives/2024/index.html","1d378b8e6941b16fcb6f682328d345d5"],["/archives/2025/01/index.html","f2a11000937520e01f217a7ace346cba"],["/archives/2025/02/index.html","8a1f61b5fff0337629493eebe31c1187"],["/archives/2025/08/index.html","1c98c0dfc0095c53bb1ec6a0afd43ac5"],["/archives/2025/11/index.html","4757950e9581ff3b9dbc0b3db947cb04"],["/archives/2025/index.html","7090316890a398befe61d9636aa2e1e1"],["/archives/2026/02/index.html","37a35c6d491d1540a9eec001ba2a81dc"],["/archives/2026/03/index.html","1942abd286722590e7055d47282e9377"],["/archives/2026/index.html","ad5ecdb6e071662a0ca72fe7e93a190e"],["/archives/index.html","797e5f47212c39a3243c0769b45f617a"],["/categories/CPP/CPPBasics/index.html","48a3ceef51fef21c4e835b3dc30dfaed"],["/categories/CPP/index.html","ee80928876201b38dd97c567df6ecedd"],["/categories/CSharp/CSharpBasics/index.html","3ad24928940bd04becce8287e9bbddf8"],["/categories/CSharp/CSharpToolClass/index.html","fe1392b47ae9cc731cf3207892289212"],["/categories/CSharp/index.html","987ff58bc6222bb5195be7bfbeedfd56"],["/categories/CSharp/page/2/index.html","7f4beb31759a0f5bf8e7f2b90c09f3a0"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","9669ee97f0c0a9ce101abe5da6fece96"],["/categories/ComputerGraphics/index.html","2c6dc7d5dc153f56c702a36789b6bda7"],["/categories/DesignPatterns/index.html","35b5d1e0289b04ba5806b0caacecaa63"],["/categories/DesignPatterns/page/2/index.html","3a6b87a695433dc32c1e91e8821e7d4b"],["/categories/DesignPatterns/page/3/index.html","502ce023fe95f0a85b5fe6c0f76b2a62"],["/categories/Lua/index.html","42b50746e04624c40d6b5ffa58fc9eff"],["/categories/Shoka/index.html","e978e0bdf3aa6d0ec4dd1298ec268c02"],["/categories/Unity/UnityBasics/index.html","669fc7aa5b2618aafda7a359654313ac"],["/categories/Unity/UnityFramework/index.html","10cc7ba43090382d3ba9493abe862110"],["/categories/Unity/UnityGames/Unity2DGames/index.html","e1de1d66e014f832e5becd61de065fa6"],["/categories/Unity/UnityGames/index.html","f1b24ba0baa82221fd1c5b54018c0cd2"],["/categories/Unity/UnityRender/UnityShader/index.html","24145c1056811c51c4e70dcfd5f68c93"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","e44a05c326048e44223dad7b3a8dbfa5"],["/categories/Unity/UnityRender/index.html","12b685ae6f59e9fdab50d3aee235967b"],["/categories/Unity/UnityToolClass/index.html","90f4a6c3e371e8b59d5085cb0538699f"],["/categories/Unity/UnityToolClass/page/2/index.html","5338bf61f93db79a2e9fbedfc8758b38"],["/categories/Unity/index.html","9ba580e20e5299e012a4e4365da3940b"],["/categories/Unity/page/2/index.html","f2ca6d9a80380b23044ddc46543a89c8"],["/categories/Unity/page/3/index.html","36c1e7b5c89dc9c5ac345f32bd4122ea"],["/categories/index.html","4ececd274fec2563373c2daf426754e4"],["/categories/正则表达式/index.html","6f3e7b0384aef2fefa84f9b6d0e60fda"],["/categories/游戏设计/index.html","3a2238b0773e8c6b5846b4dc35a296c8"],["/categories/游戏设计/关卡设计/index.html","ec6b9f410b19a70aab64eb5b5d7a3bc2"],["/categories/计算机基础/index.html","a58b9dab7823cd525c39575625d3fa7a"],["/categories/配置文件/index.html","2d75e929a6d5c37a8c56219dbfdab42f"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","040a3c1b5893fabcde018188f6480e04"],["/games/index.html","19693a26799aa7a2a68080a014ce33c8"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","5b3d2b3d3c0e01a9726fdc3d097d44d1"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","2dcef690c0ab72b4e49b267b487bfaef"],["/page/3/index.html","fff66e23707c2ae4f8902077c691991e"],["/page/4/index.html","60c461e8d137292771fd363537463675"],["/page/5/index.html","1159b3dcef14b1ebdd0abc6c1469f0d9"],["/page/6/index.html","b1fe00a34653ed784fa9bbfee1298c6c"],["/page/7/index.html","df4d3a437d4fd11a1cb7a364238ff127"],["/page/8/index.html","3d25190ff80e8d95a1a7aecced374f5c"],["/sw-register.js","0bba7de05cac0211e576e00ad793e230"],["/tags/2DGames/index.html","4f1455b8b226c92b8abc753b2c7021cb"],["/tags/CPP/index.html","df8ed2b4c1bc4092b50be360ec2612d7"],["/tags/CSharp/index.html","b3c97d1afb94015b4476c34a78059880"],["/tags/CSharp/page/2/index.html","059b02a4ee3fa86c2d66a194449a3a2b"],["/tags/ComputerGraphics/index.html","34e0de5dd7ee46543065fc1af72d55ce"],["/tags/ConfigurationFile/index.html","8e5767bb7d0ea5df86e72916de2285ef"],["/tags/DesignPatterns/index.html","fe1de6408e80401a354ce48c2b029232"],["/tags/DesignPatterns/page/2/index.html","6a472f188e80a1d4092f762979c87338"],["/tags/DesignPatterns/page/3/index.html","cc3f065e23d353d41fa2c6ebc09b6abb"],["/tags/Lua/index.html","613c8b2b7db16f102a9df5188cea7515"],["/tags/Physics-Based-Rendering/index.html","db61d1177b7e125e3e6f4031cb5a33c7"],["/tags/Shoka/index.html","a776a42d21f4c067ce2a8a1a76d8fbc6"],["/tags/Unity/index.html","69661664b37bbb2303f97c544969d76b"],["/tags/Unity/page/2/index.html","f5941dbd503b54398a27536357991e65"],["/tags/Unity/page/3/index.html","69e58bf1a6c3c8abde7750a75951f01b"],["/tags/UnityShader/index.html","90e20d5584a9b948e11742f5bc44597c"],["/tags/UnityUI/index.html","7f6a7c497ae01d775311655e47c65701"],["/tags/index.html","e7f2b6f1ce0bc68575e2b9e97310d0c8"],["/tags/操作系统/index.html","1fc8d8f06204e93d012347e654fc3e31"],["/tags/数据结构/index.html","2533347f9ef650ddaf0310259c9ab9a5"],["/tags/正则表达式/index.html","5bb1d1c5997b9d476d8898428c75e6b3"],["/tags/游戏设计/index.html","814770c2037fffcaacc675cddfb1271b"],["/tags/配置文件/index.html","9c4a4e1752abda10b3b2150331f0182f"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
