/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","c8021dc19b3f6c23b5667bc34894616a"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","0e565fb8b919e76bcac8835eaf18d6ff"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","1835a79369256364b32a889f1526777c"],["/2023/03/20/DesignPatterns/设计模式/index.html","5a1056c2bf4553460c3e24fc26042090"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","711aef5da0a08fe4c76fdf80578ab32a"],["/2023/03/24/DesignPatterns/单例模式/index.html","d4f86f3b3b17cfd3248b7c87c35c4709"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","a26500371a44745f08697af82de6bdd9"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","de2b903c69bf0f20ccfe09f26f7baec2"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","3849c60c5067709500aa37dbfdbaaa0b"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","3debcd7917f572a5e16d670e97b402eb"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","a29128d4b934edea2b164cfb0aeb80af"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","0bebc5937352d467e61535515b7aeb0c"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","184073a5ae2d3d91239dccb424b7b808"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","3973230c2c8b088a01303f44e00c5077"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","01cf4a1c98942592dd2fc3028d24be13"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","454aa4cce049a0d89103862797ce416d"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","718a909be796fe17662bd2c67f8d8274"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","52e21dc9353062dec6e4b1ef8a8f6c86"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","f27ae5ce80258603ee0a07d6d65a3790"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","b5724c8b9418f1e24b334035e9b52abe"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","e47c1e2d84e86caa87682de7a56040a2"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","d9bf05bff9b0b5d3e02f98aaedab2406"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","d0a00cf6217d1bd36ee4a8b80fe2ea28"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","5fa486943d15939fed0186de32aca156"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","2a285a5f6d6c3a92f4fee383ad7c6a0e"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","f77f1571bf1839feb3a36e604cc3e723"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","8873c6911494265e28007e7cd3b78191"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","d4fdf9f46e8b5007fdc2e293e774fb62"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","b56bc4b31f14e4a858c14ea1e2fc890c"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","70625f20f8cafeb032a7e6ee00ce1f0c"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","b5a7d10809366d4fddf3a436340c051a"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","c8efc0340a68a505d17ba994e0e962c3"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","684d9d64819bad0125aaa5623720f9b1"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","94de063e1dfe3760b738f0ed661cbeb8"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","024e27cd905009d3741be291a05a2eb1"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","4b36b767055c2b057e38a4268a999e6d"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","46a3f9095f0b6e088b190092761d3a25"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","2bdaf826a1585b3aa789b1386b9c6838"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","dc715a8c9d9564b4bd2669078db829ce"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","3ae958e4e06a369f9186e0a1d39c1196"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","50aa3bf9b86adad2a20fcf0398215b83"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","c07295d4e0a3f24ccf077d29e68923ff"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","ef2508bd346c4d998d4a2d42c1834b97"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","2d1e100a758a312d06c9fa4086d31b8a"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","7b12863c4cd2091324a3402a1d1ab340"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","94319006a8ad98597c1c2c86597028c0"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","09b5cc7f793d5fcc8edf99c21569d4ab"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","99b78964989d57f91534533980d28d33"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","db1a10401befe7127e927b89d2921805"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","d5c5cd3145f2dcd7771daa94991a7354"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","1fff31f800f9867d33d963d1977cccdc"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","6b30517ce99d2481b01d4c1acee37350"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","bb559c01ab0100d05fb901eb915b56cd"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","3dd240a44806ba08b5a9099729adee51"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","a0778cc8fdc164f5c9d93a9319ce6a9c"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","5424b052393e7d92b596cd9d391d3481"],["/2023/08/02/配置文件/JSON/index.html","af6c4c7a04d62c2fad9b43c678b810f4"],["/2023/08/02/配置文件/YAML/index.html","097f9843c06fb2c08cc3aac2fbb2993c"],["/2023/08/07/配置文件/XML/index.html","3836214c256c6582f1effbad780a90ad"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","31302be77bc66ce5f9b44b419a70b9d8"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","07da8b71dff0671f8581e2997981653b"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","4db0c7bfc520a184fe33776e7e23c833"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","e525e248fc51659d6e8ea291147bbe80"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","a8477499843562c772c24ae78ef15104"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","615aaea992a52d0c7b3ac3ce343e5509"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","742dc17563d8ea5146dfe7c6f91ec415"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","983cd424a11ab3c857dae82935cf92a8"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","881c350a08fc3f29a3e4fb3c0647a59c"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","8973670c6b2b11ea8415429b9ccb38e1"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","d27b51e592955cca2bcf734e0828a166"],["/2025/01/10/正则表达式/正则表达式/index.html","85ede59caa1d2ad1c629f26234981159"],["/2025/01/20/Lua/Lua/index.html","cdbac133e120e5efe3450ada9accad31"],["/2025/02/12/Lua/Lua + CSharp/index.html","cb8f1ee9287df6f0173e70cfd9888f1e"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","235852a1ffdcd39e1e84c0da94df9223"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","86d06558374ff255ed732a1c85bc2f4b"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","bd90c1f6cb7e5e01483bafefe8d9c51b"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","3d01131204039b20d3d703eab85fda6b"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/index.html","fed625e90c4bd8faa0e3141dc58e8d83"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","082ec214739b88cd088392f0237765ed"],["/404.html","9f0c4c74144fdbdd8a33a25aee93f20b"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","131fbb65df2de4daeeabe5cd489bba5c"],["/archives/2023/01/index.html","98f10386ec790496a9446a79b89a3add"],["/archives/2023/03/index.html","f7f517be6cbedaa1394ef747b661cb80"],["/archives/2023/03/page/2/index.html","ecee4bcfd31bb4e3f3ed69b2c9e69da1"],["/archives/2023/04/index.html","327b8e913b818b227f235aedc779784f"],["/archives/2023/05/index.html","7eaface1f2f216ab13ad6b72faf066e6"],["/archives/2023/06/index.html","c637588c7db498e2938081093b5f013d"],["/archives/2023/07/index.html","e3cdcf6aea6881698a698418bfa4fb9b"],["/archives/2023/07/page/2/index.html","8b240257e6d0e8ab6e9715ed0f0df867"],["/archives/2023/07/page/3/index.html","8283de0da3259b54d88ad8a1cb6a7196"],["/archives/2023/08/index.html","11b68c2a2f374b9b780cbc957ff80fb0"],["/archives/2023/12/index.html","a849f003bd1dd1eb51fada455505c122"],["/archives/2023/index.html","45e195c32dfb5e79dd44de6b75fb809c"],["/archives/2023/page/2/index.html","d00e256bc0f68c92759199e803de2d14"],["/archives/2023/page/3/index.html","64f43cd1aaa8c15c6c451a3ffc44c242"],["/archives/2023/page/4/index.html","a0b4fb4c98b7d3f33e44ba3228924c85"],["/archives/2023/page/5/index.html","998b3865ddbd25fb8d9f653565aa8922"],["/archives/2023/page/6/index.html","8f44aabcf1d75c1b9d53a138f0221afe"],["/archives/2023/page/7/index.html","4cf07ada66400b624d8eb453d11180ca"],["/archives/2024/01/index.html","6dcb1168e654be80f6f56f10907152cb"],["/archives/2024/05/index.html","e37bf1b9a2f5e2666740ecf7a7a82dd3"],["/archives/2024/09/index.html","a55b2b902cc2382a3a776c5480e962a2"],["/archives/2024/10/index.html","fb10e6f30234184fb8776084f6e8a4c8"],["/archives/2024/index.html","c70bb64044b1d37ba6c3128b4bdce9aa"],["/archives/2025/01/index.html","f035d0d0e7052376de8f4bcf8ded2c20"],["/archives/2025/02/index.html","488f6dca11e25ca48d2bd77df7e1a7ad"],["/archives/2025/08/index.html","137680046033e06724f4e46d62438bbf"],["/archives/2025/11/index.html","706b7d7b8d5a79e34fa1b53ab9ebbc9e"],["/archives/2025/index.html","1c5dc745969439dfc68ffdf0d3add9fe"],["/archives/2026/02/index.html","6d7497e72631dfd339c142369aa56622"],["/archives/2026/03/index.html","328921fbbeac284e6c06419d0a5ddbbb"],["/archives/2026/index.html","9712148dd31aab615b841554af5b95c0"],["/archives/index.html","1b612c4060f98f49ebaded4da0813b06"],["/categories/CPP/CPPBasics/index.html","771eb760e99accc604c4d5518d5fa447"],["/categories/CPP/index.html","784ba04e12827fca7953a553a4316306"],["/categories/CSharp/CSharpBasics/index.html","d34239cc8af1b4c91a985256f6d2d32f"],["/categories/CSharp/CSharpToolClass/index.html","9a34573e22a62837ce689cd37265953e"],["/categories/CSharp/index.html","f4ac1c235c0303b80e2f09960391f591"],["/categories/CSharp/page/2/index.html","fa3ad77885607989c5fadc265a722813"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","ce9f91882fe69be4bf9c79d4f185661d"],["/categories/ComputerGraphics/index.html","e89c435d08d732c26e4d1e0d83363fc2"],["/categories/DesignPatterns/index.html","5583cba8d72d705477e38ececc053cdc"],["/categories/DesignPatterns/page/2/index.html","aeca990514a84c9da2ce6f86aaa5c24b"],["/categories/DesignPatterns/page/3/index.html","c506709cabcda5fcac356aef4d6b201f"],["/categories/Lua/index.html","5dbdfe2ef78555615d2db3b69a664834"],["/categories/Shoka/index.html","fa70dce897df0622523972b5406f32d0"],["/categories/Unity/UnityBasics/index.html","365d18e085d81a39ee27e22043c0a12e"],["/categories/Unity/UnityFramework/index.html","812f1defabbba501ebb5b9ab271cad64"],["/categories/Unity/UnityGames/Unity2DGames/index.html","db56e1b9d1249c94d4ff231a5fcadd5e"],["/categories/Unity/UnityGames/index.html","df1f3c10e239e069d76827b32644f5a3"],["/categories/Unity/UnityRender/UnityShader/index.html","088f59c11bf8f78e7f09b8b6db5c6b68"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","4353254006add05cf79cd7bab593a657"],["/categories/Unity/UnityRender/index.html","a896cdf0855d25ec1a5a05a58200daf7"],["/categories/Unity/UnityToolClass/index.html","23b47071f9ac266d220a5b604e1f9ae4"],["/categories/Unity/UnityToolClass/page/2/index.html","aa2f2ba29157cb2b0b3c724e1807781d"],["/categories/Unity/index.html","0b76c4e1b39da61e701a3e432dead80f"],["/categories/Unity/page/2/index.html","59428ff9447163580019d7c9c395ba86"],["/categories/Unity/page/3/index.html","b17b0b46df62a48a80309664716ea354"],["/categories/index.html","78e6e7434e6aa36685bb4c8c76a5d893"],["/categories/正则表达式/index.html","5e7148b9f53e3b526921d43d7300f6d8"],["/categories/游戏设计/index.html","d6cb631fe1377fecf1a4652f35567ab3"],["/categories/游戏设计/关卡设计/index.html","bfe1a3d7e538b84ea0e1bf78a79ea44e"],["/categories/计算机基础/index.html","89806b70c4ad0377b283244a480c3e99"],["/categories/配置文件/index.html","d108babd9154c43a8d601e87e769ddac"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","253988dd9887a9ef34eb4a471767e960"],["/games/index.html","55deb65279a1c7093d49a3842c80b477"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","3b40b6d37b77b55111235db0a5f56da1"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","64f1cf34f4e2912ae5443b8680f80d9f"],["/page/3/index.html","f4a0fc943e882aa570597e5e7058c85e"],["/page/4/index.html","7cc7aa5f198256e7f3208cf76b127a53"],["/page/5/index.html","b333e912389d5de42a99a3fcbd7a69f0"],["/page/6/index.html","6780c773ac8150e7997cd2286ebe48ff"],["/page/7/index.html","9e3bb1541ace1724054df8ec9784e1c0"],["/page/8/index.html","5d7daa6c0394f24a6d93f241eba01755"],["/sw-register.js","55406e2c0d13916961ed218e69de70c0"],["/tags/2DGames/index.html","4b2a7ebde57363455e78d53039eb2d36"],["/tags/CPP/index.html","6f4243389e94a8ccaba7edae42766fd5"],["/tags/CSharp/index.html","67487854d46e7b0b91dca5743c31e0fb"],["/tags/CSharp/page/2/index.html","43f3c3656af39a0d3eede5be3495ada2"],["/tags/ComputerGraphics/index.html","5258d5d80cc831bd0cbc238790690ac9"],["/tags/ConfigurationFile/index.html","2de5a74032795f22378199069a6148c0"],["/tags/DesignPatterns/index.html","3f4841f4ee95efc42714ff0ee244fc94"],["/tags/DesignPatterns/page/2/index.html","b557a8fcf91295bc29031f923a2d67e5"],["/tags/DesignPatterns/page/3/index.html","d55ee38312aaeab340f800b2b9b827f0"],["/tags/Lua/index.html","5b673d601926706851142d75c008a444"],["/tags/Physics-Based-Rendering/index.html","f0c046b4ff760d6179120989731c0ca2"],["/tags/Shoka/index.html","6f4562af808709c268789b517dde3332"],["/tags/Unity/index.html","3442742c0102ae8f01eedb1902b03c3a"],["/tags/Unity/page/2/index.html","bcc04131f5232cb5cfa5d6bacff4ba11"],["/tags/Unity/page/3/index.html","fc3515d187d2b8ca38e71dc2787a2d7f"],["/tags/UnityShader/index.html","9f338f186c3859ed13fdeac8d6159263"],["/tags/UnityUI/index.html","a80d6cf2f704dca6f044dbb227f65ed3"],["/tags/index.html","74c7f1309e31dbef038f2b7d13be8fc2"],["/tags/操作系统/index.html","72fee232f47b5ccb2700982d0219a6e8"],["/tags/数据结构/index.html","d3c37e33da25d06fc138c2ecaf6d0971"],["/tags/正则表达式/index.html","57d65a8a572372299a4dca7792025cbc"],["/tags/游戏设计/index.html","04385d3f731cace62bb162af8b37fe24"],["/tags/配置文件/index.html","25a05f960ff8e898a324bb429fb899c5"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
