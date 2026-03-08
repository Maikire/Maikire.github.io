/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","faa1aceab30bcb435cc95a17e6154c3e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","69ae901786aa31c82e437b32addbd6b7"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","eab895d256a8670df37cb00d97657ad0"],["/2023/03/20/DesignPatterns/设计模式/index.html","6f2cb255afa8bde0a8d98f9286831a34"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","762e2391fd049c983414e6f4aca6a494"],["/2023/03/24/DesignPatterns/单例模式/index.html","8f0090a97e4305a11fc435f02419efc8"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","47880a7bda9a8b92b5f006db581c3f98"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","12fd229b4394abda3849eb40e2c93f8e"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","c05f0abce4bcd29a34b28b7cc7f861e7"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","39dd6364d69c64f2f91730d3c43ae26a"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","725c9327c31118ac2b4703b3d3a189d2"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","98fa272cf33ee855193aedde60a192f2"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","1af8d6f6ff32540ce1646f3d6600a48c"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","7de89cd71edab04935798eb9b1a614c3"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","89f9067472a29388ebf2004d1ef51569"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","bd55fed7bca34a01cd96882d2cfb8da2"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","f01086983712a0fab0ac9e824a4e5111"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","1b44036e84ae0df111cebf852105d19b"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","56068818d5f04e7d1803f87ceec5d61f"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","796662181f6fb35db88bea0a66d6d947"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","86ff2bff82892b726b911eee691b33d6"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","b72f438e7613a85f08ba346541fe95d4"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","99f94ce7068712a5c90584ccf0401b5f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","daa73aa95fcc88d4594a229841fd742f"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","bb2747d4d5b87b4a6f506efc36b927f2"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","e7ccc9753631811c2a62866d28d505be"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","8b68d65881c5320d498814e6489b920f"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","960a58d8e38dd473219097facb5f8f9a"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","a59a6c47e649adaee8b7aa18e853265e"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","d92b56e968cf1819be8d5e605a798895"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","f26b22aae2e4b77b5040ee8f54b8b10c"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","9536d6c9eb923330d422a7d9605d74a2"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","86edcf1ece251e1cc414cd97e4cf38a2"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","de143b6ab73405d1fd4de048a00f5e1c"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","79e91749fec661e7fdf7c72d0c03575c"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","ecfcd51b3833dfe537188796e8e71e21"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","acd4735530f6b69400b1373361d8009e"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","3436525a5b255135f34a700bf24c1c25"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","5f594d8d38848354c5a79347aa005dff"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","3ec238d29254dbe0e8abaaa1fb4d93cc"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","d7362494d39a45371f6fd7c753262c32"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","813ec83aa6705796fb779bc4f87cb274"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","1110923ecfe10c5298f2664127a60d95"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","019f441e38a35fbe8110966f98185b99"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","63ce2f5292eb058683bb2ffd2f1ab863"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","f6e1d1cad2ac7d292e44bda88bd57a5d"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","547a8047151b430475ed3b6ce83e6114"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","2f19d0a357ca913389c88754a891eda4"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","43194e439b5eccec5c7a7170ed662f3e"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","74862b9f6fc47bab54c900b6817117cd"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","a27ed09baf92a027a52e3a32273bbc1e"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","fc24c795debded204ed8770f8cd5eb75"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","4891905855feef256b4cea0c6e158520"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","c11c960ca589a5783535700604535c2b"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","7438f3b2c0721f148bc30fc0c656cc89"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","4292f7f5291d9753e97a86ac584d62f9"],["/2023/08/02/配置文件/JSON/index.html","e6949374e578f618ad7dc3a582c572fa"],["/2023/08/02/配置文件/YAML/index.html","fa3f63cba3d6669bbf285894f68888a1"],["/2023/08/07/配置文件/XML/index.html","3f3cf4e511ab6c2f997a01860652b651"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","a8cd2529750d7a0439420df995380a97"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","b8ecf8251685da1779546f55d55c87c2"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","93afda53997c58d664f7fd1410d6bb7b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","2a340df8eea801dea0d919d827685f1c"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","e2464ce6350aae57c704b3294114c78a"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","257926db4e390ead174a34a3a95bc5b4"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","55690c904922c959980743c19ab5f113"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","7bb4f90276d017c5a7cb357fc6b1f72d"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","858a76e7cc2597c8b97437d65de87639"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","7a47bbf9918a00755025e51e946772ce"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","653acdda0f2b2dabc512b186e520a7a7"],["/2025/01/10/正则表达式/正则表达式/index.html","e43370b935ed56fa28123ced660919fd"],["/2025/01/20/Lua/Lua/index.html","d2b68778665af0edb8e8887335ca5265"],["/2025/02/12/Lua/Lua + CSharp/index.html","d8de2c54ba69142a11a4e8dad4216c50"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","acc61ff5e68b7efcd08aedf25975c8fe"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","770697c922b903af2920c749d8f83154"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","6adecff4091010cb1e7ebbe1222ba932"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","def40021fe6943920a1b89a2fcc2235a"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/index.html","aa7e05a08b6054c2de987efe87c7fbd5"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","584b53f57859070b085996eb838c6b03"],["/404.html","66a633a6657d3fd4f74c3eac3d9e2775"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","07a2f48f5cc4884b149e864efe944dbb"],["/archives/2023/01/index.html","0ae9d043fabcd8a75b64391c770d5836"],["/archives/2023/03/index.html","8e4eb97806a84eaf62940e827ddd60a1"],["/archives/2023/03/page/2/index.html","da768803b2e1aaba35e71701ee4fbcdb"],["/archives/2023/04/index.html","e2cb77930c865cfba87b9ccf25e50fd2"],["/archives/2023/05/index.html","ec87d421fc86771fa30b1ab9b3ffc929"],["/archives/2023/06/index.html","2521fb2ee8a25032ee56bda94156e3b5"],["/archives/2023/07/index.html","7396c07f51f049f95d52974b737ca479"],["/archives/2023/07/page/2/index.html","124a14809045332e78e9605f98a74b5a"],["/archives/2023/07/page/3/index.html","126b07eef1b8e60557cd96cfb11e0adb"],["/archives/2023/08/index.html","31f014d4de8ae214c5398f9bf5044701"],["/archives/2023/12/index.html","657be8dfc0e835c9e76a6f595ccf1282"],["/archives/2023/index.html","b34b7c4c7904fa1ab05295f11cb48b2b"],["/archives/2023/page/2/index.html","f0b7ee082f429154f2c7d78511ed4ee3"],["/archives/2023/page/3/index.html","83f874ea6ff0f60fca1fb11893bb34aa"],["/archives/2023/page/4/index.html","c8e100d1e095ac3b7271a58acfe97d97"],["/archives/2023/page/5/index.html","1eb76f573603583973f3ed45a005e2a8"],["/archives/2023/page/6/index.html","3720fcea5136e9ae854e065bace36741"],["/archives/2023/page/7/index.html","2dc4ef4bb43d53e59a7afa7d197d8e76"],["/archives/2024/01/index.html","274d2828b16152a376c70ef7ccdc15c2"],["/archives/2024/05/index.html","903ed25267d3e1ed56e550aeec843740"],["/archives/2024/09/index.html","64c8180aad58959c4e8dcf37615143e7"],["/archives/2024/10/index.html","6881c555dc8998caa0d31a32114f5796"],["/archives/2024/index.html","326c1abe9d8ef07ac17af973baafbaab"],["/archives/2025/01/index.html","b7e7eb86c57d8920d6f11837011fac0e"],["/archives/2025/02/index.html","1d034b5dbf3a780f7d7f6dff88a476e8"],["/archives/2025/08/index.html","fc880442207d1b9cea9561f565fea127"],["/archives/2025/11/index.html","8a7ac290443963bccde7ecdc914185b4"],["/archives/2025/index.html","13894304c55277157471fd92249cf6df"],["/archives/2026/02/index.html","c59326ac0ff062f45a600bc2f46ed1ac"],["/archives/2026/03/index.html","b4cb2368912d9bf822cc13cfb9afe500"],["/archives/2026/index.html","9a8358359d8ac971b30349040c9d74ed"],["/archives/index.html","3e06bee128276701f12e8616b44a3837"],["/categories/CPP/CPPBasics/index.html","5c05d52927493de7529fac2cab97c0f2"],["/categories/CPP/index.html","269ac8cbe14f8402d469603839e699a4"],["/categories/CSharp/CSharpBasics/index.html","c91fdda5d4e2ec9d31f4d916cb85a9bb"],["/categories/CSharp/CSharpToolClass/index.html","4bc8cc508f760eb46f8d331122b3bb53"],["/categories/CSharp/index.html","a0a6ef22d6df71acc807a2feed6c317f"],["/categories/CSharp/page/2/index.html","251e6120d48a0e79a0dd5b681d8f5860"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","7822f6f3b38ca70c4288cd3c1ed9ee41"],["/categories/ComputerGraphics/index.html","19dbc521333120340cfcf5cb664f6da8"],["/categories/DesignPatterns/index.html","355286853d992a12660a7ff5025c8aa3"],["/categories/DesignPatterns/page/2/index.html","73aa23c2bc1da7e89d251ce37ade42a2"],["/categories/DesignPatterns/page/3/index.html","669c022cb6acf40d3684bea6f6e79230"],["/categories/Lua/index.html","d2ee833ec4341814e4f0b923c33fb51d"],["/categories/Shoka/index.html","7e864c3ba875b85c2cacbb8f9064322d"],["/categories/Unity/UnityBasics/index.html","2efe7b1f29c07a90455200fa008ec15c"],["/categories/Unity/UnityFramework/index.html","f1652bdd252f5ca535c37354cbc52c66"],["/categories/Unity/UnityGames/Unity2DGames/index.html","ee4d5aa4000b37accd4699938bfea60f"],["/categories/Unity/UnityGames/index.html","3c2be9f42313e7c700f3a72f1e7657ce"],["/categories/Unity/UnityRender/UnityShader/index.html","2b43ed3bc6d9cdb33b40397e8f050ba8"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","c7f34de71e48edff1f12ec770f36bef2"],["/categories/Unity/UnityRender/index.html","4adbe911c4092b7e9782dd35660b82eb"],["/categories/Unity/UnityToolClass/index.html","0fbbcbd5dc0925b3c3e2063049761797"],["/categories/Unity/UnityToolClass/page/2/index.html","4281c7d34210cc8534c0bae327a4d328"],["/categories/Unity/index.html","0154f837c9799b760549461f01b62fea"],["/categories/Unity/page/2/index.html","2d6f83217647ad4fc6ed9515a5b03236"],["/categories/Unity/page/3/index.html","0efe92b9f757ebda71e0d1cdeac8465d"],["/categories/index.html","758edfa7d9fba1a5e969c0969577c3f3"],["/categories/正则表达式/index.html","d114e716988d4607546d3208a3d94ab3"],["/categories/游戏设计/index.html","11f8c6c22cb754bc0ebf0d1350114a64"],["/categories/游戏设计/关卡设计/index.html","ccebff00b3d815f88b08b7a04adc687c"],["/categories/计算机基础/index.html","f96ee9bcb7ec1a23cde52b57f9e1d574"],["/categories/配置文件/index.html","597e49ae2a132e3a00d741635c677540"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","6c26a43db0ec591c85d2dec31ce29ff4"],["/games/index.html","0a30727108215d8a92711742e228f9cc"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","7cc8c652a63491af8a0f7e6ae8e81164"],["/js/app.js","c1240649c47dd37a369169a4310dcf19"],["/page/2/index.html","ff4d1b99be808d777059501093a628c1"],["/page/3/index.html","4d1d24f91c1a986585d62d32e807d32b"],["/page/4/index.html","e777d0292292d32a00a435d791bc3c4a"],["/page/5/index.html","6da0af610e254991e86e48fae466cbcf"],["/page/6/index.html","d75a5eb6f03d5176207a02588a7230dc"],["/page/7/index.html","0cbbcfd4cb227d9259088b889dd68502"],["/page/8/index.html","39942d8a109c1431c8c5cfd28c8214b1"],["/sw-register.js","b9a18038d1d20bbac3f10a9ead157b56"],["/tags/2DGames/index.html","5ee94c61ec83aa524b8bac7e6d69ece5"],["/tags/CPP/index.html","99f64ae362bf35ddd86a3aa723a803c0"],["/tags/CSharp/index.html","91e5f674b24afb3a17b7d224a74b19c4"],["/tags/CSharp/page/2/index.html","c9a972275e069d0b78642d84c06d2fd5"],["/tags/ComputerGraphics/index.html","36ab2a82ff52fef16bc416bf083f9932"],["/tags/ConfigurationFile/index.html","6ad9cc4de24f00d4360e959a7547ce3e"],["/tags/DesignPatterns/index.html","ec24a1a3ba37fe1f1d222947e0a457e2"],["/tags/DesignPatterns/page/2/index.html","2e89e575fd19738457f8e7ba842d6fb4"],["/tags/DesignPatterns/page/3/index.html","5fa001c9dd741c3364e95ca8efe5f128"],["/tags/Lua/index.html","aeb00e4b4a26ae78cadc4c8eee0e624b"],["/tags/Physics-Based-Rendering/index.html","9eeba96cf8c8fd3ed48bbe13ac81a275"],["/tags/Shoka/index.html","5f4acd46bea27ddbbbaeb38c9b3e6e25"],["/tags/Unity/index.html","09d95895d3023d6483664057f8099ffb"],["/tags/Unity/page/2/index.html","6537f8b9773437b6c8cd23fb5bfdc2ed"],["/tags/Unity/page/3/index.html","f31f712c4456533ed83baa88fa3f7c4d"],["/tags/UnityShader/index.html","462e227f0eaf292c13863d04b5ed37f1"],["/tags/UnityUI/index.html","3f886deeca8178bddad3f7d1d1379559"],["/tags/index.html","39ef622a9ee7ecb32079fc1622d1b12e"],["/tags/操作系统/index.html","d415ef1f29311ce6a974a4d6f35d6e39"],["/tags/数据结构/index.html","2db5e2aa0bccdebee5c3a79d78c5a262"],["/tags/正则表达式/index.html","79f7bd29634905c2c53a5d17b0765b0d"],["/tags/游戏设计/index.html","a10b3314262d558d160b9085faf012fa"],["/tags/配置文件/index.html","984aaaff89578deb72d935088ea47a89"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
