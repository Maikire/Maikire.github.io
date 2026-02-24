/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","00c506d5b4c784404f71c59ecd31ae41"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","67d265d7e0c267980259c1264e33657c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","ee21c95180fbd28275c27863064d70e5"],["/2023/03/20/DesignPatterns/设计模式/index.html","c9ccd5dc93182079179981f0cd47f98d"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","dd1c765923335955cec96331d5709024"],["/2023/03/24/DesignPatterns/单例模式/index.html","cc13a3f1838ba2f43dcd9ee6dd934d99"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","1417c951311a86879add08cde96504d0"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","168415b9ce9b2fa907791cd23b62ff59"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","91df8875dfc547692376eb3dc577f6a6"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","ecdfc807c3be86ba595c9f0e4e873910"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","81ed06f91db20080a5092ea8a6f630b5"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","a0903adf11efff1d7211c7cbbcbf265f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","65ee604842ccd56eaf1b6f47447248ae"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","89aa60ccfaffaba1f405f904148e0c98"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","64d519ad43f4114f83991d55e672f915"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","8cca38fc5045d018a488671f22e7607b"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","b5afad053b9624193a107c93ebcdb344"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","4bd2f81ca44283f939a95c7aa64fb8a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","045d13547c19d69c3bedfe1174441a19"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","9f4f9843aca4f81cf5c3f66ae4a10e7d"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","44273a888cfe95e560a99d05cd14b553"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","92870a57211860563a7d95deab51cc3f"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","e48f3ef86cf3a06f04758c310c6e127d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","7db0e76ff8e755dad3b7f6de772c3646"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","6793785f2c25708ddae55c9850163bb3"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","b2b7de1979ac2588382dc62a72137362"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","ded1bfc7a9cb252e821de10333ee7ca5"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","8a292bed73c996fd48595ae6c5110549"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","ae0a000169f1b0397ca3fc6965a76d46"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","c308a95c1183232274741222adea1a4a"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","3d483d744b6260485bb12d297036cd8c"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","ae05cefabe92da835af5af20d65a1c39"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","2df83d4996f4e0d10a801c4ef7d5711a"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","77b74bc2e85aa979cee8c7e16022bff6"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","4d58e998affba53bba39aa13d9c7f9e7"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","e7815c51fde9b63c491aa444be516056"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","622e240f5678b71a1965c2766d167a40"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","686e7ef7b155e2e22a0115b17457d502"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","047d39535c1cd68d09d98616bb62498a"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","06f71667837d84b7049204a81b240364"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","6386c3ada0b9c89bcfc90650af4a8151"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","b75b1719fae6e2fee2536fbef34c177e"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","d05d8df8c7424dd07f3259bc67795f0b"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","b46648b17bc72efb767b328ce2052c1d"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","aaef073f5ce854616e7fc5e7bc87fc28"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","88458433c02ba444191d487ec7bdfd8b"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","f2d83229f92c77624306b664a53b441d"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","590c8449b5dc369d0ac8a56464a5cd64"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","037c4f15b7075c321ceb1342e132694b"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","0906870de6e5f027d84d0ba8454ebb6b"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","12177cb98f89350dc63ea4f1057d79c4"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","463d8ad3c21f8415cc86426fdaa4582b"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","bd28b795360ff9700a06e8a30901d998"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","24027a751f233c8c1fbbadb08000a4c3"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","adbeeea4571236caa09f7f7e7096e20c"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","245a77882f928b947b86fc46fa0275a4"],["/2023/08/02/配置文件/JSON/index.html","daf8e20ed15cafb629a01f67d0fd1bd4"],["/2023/08/02/配置文件/YAML/index.html","60a352f7fb4b2df888a62d1d074f83f9"],["/2023/08/07/配置文件/XML/index.html","89c7ea60727a74bc5e95c6321e89f1f2"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","195dbf0c232181e5897bafb2fe247b58"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","425aa14a9c75e06c632ffc2fe6c5e17f"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","a06c06b2e8b1bc9b797af8f57f1b3a79"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","70bb3ba4810626cd086053b3350f0b87"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","7e662f7daae65dee9adb3dc5152444e4"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","16cb4d250b55fb2fca28997fd9c737ec"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","5f520ad3d39e6ff66fdd48d31d89b3e2"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","4eeedaac909cbce3cb7617fbb9254821"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","cf96eeba662ab02bd24481aa1171178f"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","f0a586586bd0e47d6347edadd52be3d0"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","585025c58fc0b9030989df6f544fbb0f"],["/2025/01/10/正则表达式/正则表达式/index.html","705faf0da7153339ceb0b6392fceb02d"],["/2025/01/20/Lua/Lua/index.html","98d8ec13fecf4299174b19d3e26a5a36"],["/2025/02/12/Lua/Lua + CSharp/index.html","322b55daed6c040f32359126e3ba0df2"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","add37472b117279e0b5734de2f94e0bc"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","5f0751517c63699bf2f866e81bb3906e"],["/2026/02/20/Computer Graphics/Physics-Based Rendering/index.html","bb607d6ee67ef818ff2c682c14567bcb"],["/404.html","6439888d906f030164e92f2ebd72a17d"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","44c2e073b361af0d8d8a54e3834ccac0"],["/archives/2023/01/index.html","552cd3423042cd884cd22fcc984c3bbd"],["/archives/2023/03/index.html","e2e5c9d32468991c16eeb3d6aa032cf2"],["/archives/2023/03/page/2/index.html","7996f2b0649e74e542e5cf8cdd4d7a5d"],["/archives/2023/04/index.html","2be99ba1479b40aa0cd93c70f73de0d8"],["/archives/2023/05/index.html","361a9e5e858504e692a570b796debbf1"],["/archives/2023/06/index.html","108188ca56161a677a30388db015e0c3"],["/archives/2023/07/index.html","0d5e32cc47bf53e8bf339d7c74b10b1a"],["/archives/2023/07/page/2/index.html","eebcde610d1f9e80597961ddcf488622"],["/archives/2023/07/page/3/index.html","afb593b3b759cbb8d4b8f5e0741d3b09"],["/archives/2023/08/index.html","61022df345b39d3dd0e32114931751c5"],["/archives/2023/12/index.html","a04e9d46ad5eca2d3acadfc1ad04ae8b"],["/archives/2023/index.html","f8506a23b40cef1be024a41cfc3d811d"],["/archives/2023/page/2/index.html","20748f4c8dda9db42fc30287df7fcb8c"],["/archives/2023/page/3/index.html","40d41cf31a6d7f5250d3c45393a824f2"],["/archives/2023/page/4/index.html","ecb6767930c4132dae60c0a246cda3da"],["/archives/2023/page/5/index.html","c0ca62a0d44db8eeb7e405fb1f2a2370"],["/archives/2023/page/6/index.html","f18a77abe709c4e699c47386a93b2b6c"],["/archives/2023/page/7/index.html","c0a26e4b4c43333b3897889cbc33bdbf"],["/archives/2024/01/index.html","75dff48cd339a13567093a6a147f4d8c"],["/archives/2024/05/index.html","8c3b8a62031f74cd586d6f77b58bedf8"],["/archives/2024/09/index.html","9168ad22c023f48705bdad0f11d00b2f"],["/archives/2024/10/index.html","28026b49eeb764c2344ea80f66c432ac"],["/archives/2024/index.html","8a8007d047eeffc973a50f3fcd167315"],["/archives/2025/01/index.html","079a2db92b1a090d21b239d850575893"],["/archives/2025/02/index.html","71668ce3a0dd5da895a3c0fe48ae5391"],["/archives/2025/08/index.html","c80d172ae6cd57661e86a5472f703e42"],["/archives/2025/11/index.html","751db2f425f6f74e211769c7db9fad52"],["/archives/2025/index.html","880882c97e970351657a1078594ebccd"],["/archives/2026/02/index.html","6c5b84c4e4aa002b77caa870fecedf92"],["/archives/2026/index.html","76e5c7c7961aedca464244f02a33038b"],["/archives/index.html","cad8bfc824b317343c4bdce62f98aef7"],["/categories/CPP/CPPBasics/index.html","7d77287d88dacaaec310a0efd50679f3"],["/categories/CPP/index.html","57b5f849ffe9c37427e7aad9608e754b"],["/categories/CSharp/CSharpBasics/index.html","72380157d7caef6844eab0c993e3357c"],["/categories/CSharp/CSharpToolClass/index.html","c3554a7bb10c3a223edcc3b92a16cbcf"],["/categories/CSharp/index.html","46c466b1736cbcc39a290cd14f50c1f8"],["/categories/CSharp/page/2/index.html","0350f25d27d2f10a31fbbc4a0dc9f0d5"],["/categories/Computer-Graphics/Physics-Based-Rendering/index.html","d369acc7bd1247ecf875cc9581320e5f"],["/categories/Computer-Graphics/index.html","60c77da8d93ce66901e07b92d480ed99"],["/categories/DesignPatterns/index.html","02c1b67c3150acb090b2ca1df9d729be"],["/categories/DesignPatterns/page/2/index.html","5a6271ee28ad3f53cd9c76615480ed65"],["/categories/DesignPatterns/page/3/index.html","41b089d9a2489dda2c25ed2265f9bcbc"],["/categories/Lua/index.html","2833cecbdfb6fd247f2f1694fe3a310a"],["/categories/Shoka/index.html","3f739590f250594d64732d5071e07740"],["/categories/Unity/UnityBasics/index.html","63535cac0d04b93f8039f20a32a03275"],["/categories/Unity/UnityFramework/index.html","8fc364dfca0d2f5493233d41fcb6897f"],["/categories/Unity/UnityGames/Unity2DGames/index.html","2c38d1122d9d85b04e95c8ed86388027"],["/categories/Unity/UnityGames/index.html","770a4b460adc685400437af1fe16345d"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","6ef02df17626df6ff53469f0cc63f513"],["/categories/Unity/UnityShader/index.html","159b259071ca3bc1ce8383a6a421d490"],["/categories/Unity/UnityToolClass/index.html","a6f04cfef402ce39992896bebcba4b4d"],["/categories/Unity/UnityToolClass/page/2/index.html","1d5ce542ee8323c239564fd0167e1749"],["/categories/Unity/index.html","ffbbcfc9f3fc29afc3ba44d95fb2fdf8"],["/categories/Unity/page/2/index.html","1a0e5b12d88d5b603147ed8143a1d7b5"],["/categories/Unity/page/3/index.html","85aa4ce939cbba6ab7222fd86256a79b"],["/categories/index.html","15b713d85afc2a113f107c7a1d06222b"],["/categories/正则表达式/index.html","2d783a761f116be61698b122b31a37a1"],["/categories/游戏设计/index.html","0e7aa85fb998740be9fbf0cfb3a96b15"],["/categories/游戏设计/关卡设计/index.html","61e9c6ed4969ac5ed5298c1be056e83a"],["/categories/计算机基础/index.html","b72a012a851660f751b4b51119a375e1"],["/categories/配置文件/index.html","39069d190ec8bc09854c979c394dcfa9"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","4967c90a2e8718aed8c4ea2e7929dfce"],["/games/index.html","d9b0934be70e618f351260cdd86de9cd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","5ad31b6473914b60c373bbdd3502cb97"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","c08e1f9bceefc7815def1f35a20b418b"],["/page/3/index.html","3262c97a0569fa2c6d313439539ff13d"],["/page/4/index.html","a1c171731854e7b4604a33ff63acb75a"],["/page/5/index.html","2cc4d6d9caa0ea57189ff2fff4d9ab08"],["/page/6/index.html","b4d86cee1bc36e350793059a658dac24"],["/page/7/index.html","c6ff5eb26b9d76621174e2f4d8253591"],["/page/8/index.html","af4db34561a1dd7c79171858c54c00c9"],["/sw-register.js","55f4fd277fe23dd39ec40e9d2bc02faf"],["/tags/2DGames/index.html","66b6e3b9d7995b0b0a641471564a5f1e"],["/tags/CPP/index.html","45fb26c4ec08ab4af9cf3b6595719ea2"],["/tags/CSharp/index.html","42da6367502c230d5c92acd65c74647e"],["/tags/CSharp/page/2/index.html","67fa58f1e8bb592887e8a6ae7f15d488"],["/tags/Computer-Graphics/index.html","aba2a34246eaa0502fad9378b5c90251"],["/tags/ConfigurationFile/index.html","7bb618fdb762d9d1896fe86100f005ca"],["/tags/DesignPatterns/index.html","0374428abd89b006ce0f2e510ce2958c"],["/tags/DesignPatterns/page/2/index.html","1455bfc7e5819e0279ac6f016676d28d"],["/tags/DesignPatterns/page/3/index.html","c4068897f0369620111a8a41a1ae8b39"],["/tags/Lua/index.html","30087f1d32f7d2df9a707d9d9590d2aa"],["/tags/Physics-Based-Rendering/index.html","3153fa007cfb323cc3aa4c012642f700"],["/tags/Shoka/index.html","0d664ce43967f181b3cab5172ee57a83"],["/tags/Unity/index.html","3f65596846db82065be91c12578ad9d1"],["/tags/Unity/page/2/index.html","10705698727644b34f23c7ed79492d09"],["/tags/Unity/page/3/index.html","670e87a4f53156f855c859208ccdd596"],["/tags/UnityShader/index.html","367134266ab547600d8791f180bc752b"],["/tags/UnityUI/index.html","c4e14d7a99d778dc7ffc7287b5d44f5c"],["/tags/index.html","050a258882c655c2b4c64357e034cb0f"],["/tags/操作系统/index.html","84c7e21a3523024e7165461967b4bb8d"],["/tags/数据结构/index.html","7c23bfdd9945e026f021a9f2bb4492b0"],["/tags/正则表达式/index.html","ddb9e98397b1fd75c635c5e3001c482b"],["/tags/游戏设计/index.html","987d892e0a1295c23ccef69a64694c56"],["/tags/配置文件/index.html","cb114206825e80ed5d2ca8fba2e810bb"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
