/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","38cdbf48029893ea33eff694a9f9bc51"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","f3b0365196f4c094513518983bf271e4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","8593ca892d1724270f7bb2ef4cf45596"],["/2023/03/20/DesignPatterns/设计模式/index.html","95224664aa1c31a4d9e2bb339afe903b"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","7959dff2ece216f1c82eb2c3c5a48f6d"],["/2023/03/24/DesignPatterns/单例模式/index.html","a7c58b743a86bc74fc40f961ac40d46c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","efe7c282496ef98062a5c0aa4de65c31"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","a016e3bc708164f62c1a90cb0a8adaa1"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","3687456ea020fbb268857cc887dae88e"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","2e56b0630a8d689d4a7774e26ce45f1a"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","813a6094437f9a0f74180c1ce32e64c0"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","62fd92e3a4b1d40945291882ea8faae2"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","b2c9f31c5ddbd4faa4024f92c22744c0"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","cbd9215ff2c1c007731e37d24a79ca8c"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","fb04696800ace57614d023e8a38046aa"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","6b5dcef5e5c8f5c904a42889197a8fc5"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","a8c8354c16d86b9fec05debd7acf37df"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","416b286f3a37f6f7f035de9eb252ab5d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","562db8dcf679cb656b02a6c2f721e68e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","91ebb6d67b0d33dae8809d77e6bf6554"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","2db20b7b4fd3001148ffbc24c414e3cc"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","e2b83e8cde34dbfd1c8f4f477527fcfe"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","d6761747d4c67ae1dbd09affd3f63417"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","e30b4ddae08218b41e1aca40bde68a2e"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","6ec1c5f041a922a7f392ab586b6fcbaa"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","9c30e9dc6c57bca41b8024e41266ec0a"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","a3c20dfb520846f5983136033cb14144"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","50f85e4a0d13c06de75ce30e4b3a3ad2"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","9de1c5534435245ed344fc3fdf3906e1"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","a51e65caba5c65712814b0b6e48a0f83"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","1432c8901e1176b797222a224dc5c895"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","37f728ca5e90943467e4768ef52bc991"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","6d418910d37d08e6c12d28b4f6383fc6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","cb1309ebf8672dfde34b44c630f6e3d1"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","9df852092ecf69074b04d1c6d8f986d4"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","28e3ed1e3a6fca22bbb3ee3cac409f73"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","b0b07c978eaf7a1f2054d0d4a978d4f7"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","b304a89959398160419752d196e9049f"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","cae31d145bc98faf90c630509c3077b3"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","cdaa5e2e003d9d24af30573319973a2d"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","4f6830ebfe93a727966af0ab99523a5d"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","7d495b15ac9ca5c629b0a30fc9b4d868"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","a2d7d089b422013851552b27e90f3b5e"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","1a2c7ba062d23cc6977c06457a77f9df"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","ffaa072eab9bb1fa18c1b385e5d0700e"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","1d67aa9f86e82d68f0c7f27e4483b229"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","25ab3393007b49faa2d2bec72d43a1cd"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","651d27171c2031a6704db691f6d06528"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","f986e807a012a34fdd30eecca568ff59"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","5f0873ca47a2e7dad6dd8680d11bb74f"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","440f6f58f5fdc457720ccc54225d117d"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","23a342384456f64b046433f420499f4d"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","bc2728711d780c0bc6daf76a2de512e2"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","81d41f2495b86ee33ecb554f72005406"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","9afa2b90cce5cebbba6b6ec526eb55d3"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","cd481ec1d4601e5a781e754829a15c42"],["/2023/08/02/配置文件/JSON/index.html","61ac797a3cb98e355e602576a56269ff"],["/2023/08/02/配置文件/YAML/index.html","e48ba4b77ad6bbd01eb4f0ec219f0be3"],["/2023/08/07/配置文件/XML/index.html","2f03f71e042b2ce7b3da0293470c7046"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","25d9e00aba987143e29433a7f20c0186"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","20ececf9e733ebee0ac03cb2839f5253"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","a239fc8c03f162cd4ab53f20b7849c1e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","9ede26835ec77c8ad7f71496b3419c87"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","a9921e22e93d676efc495b6919e11efa"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","303bcb512a3212861c39daad79f41b1b"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","f09a0ccad290e0c9fe1d00b1fb0afc0f"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","ae3788cd927dc9f2cd5097bc8228905a"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","c27896d762d8affd65f9686da98e5cb1"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","738c8d83f4fa8eee76f51398c08460af"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","2493173720b63e1c348ce168f04da178"],["/2025/01/10/正则表达式/正则表达式/index.html","d020cae89cbc1f0b9fa5637184e41677"],["/2025/01/20/Lua/Lua/index.html","ee14815f10508d29de145151f466eca8"],["/2025/02/12/Lua/Lua + CSharp/index.html","b633c3eead23cab46f40d5e58574859a"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","cf8985aa56b409eb8d88c4fd8345a733"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","21fe933a770c180b121586c95d02e59b"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","07f8243969f64792570cf82cfb4f95cc"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","448e7008e842901ecd6e043871fba088"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","c718ac5dd4bb0b5d70017de3104c9340"],["/404.html","e0a6c0c5fd35bd3f3f1140c8619f7655"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","ed19fe305248d6f3aca389dc7e53069d"],["/archives/2023/01/index.html","116a298432140aa2c9200e5e6f70728a"],["/archives/2023/03/index.html","82364637e4ff2f9c411686e874bb3531"],["/archives/2023/03/page/2/index.html","3f90de01056e933394236abc081b9148"],["/archives/2023/04/index.html","34b336492ead2ad28d2adce6e1e5b246"],["/archives/2023/05/index.html","aa8637cbfc1aa962fc10a176931b7416"],["/archives/2023/06/index.html","75c16edf5e15a83d847402a879aa6f99"],["/archives/2023/07/index.html","f7ff225c92fb939e8507e847d4ac2702"],["/archives/2023/07/page/2/index.html","865222043752ccbcbafe78fb525313b9"],["/archives/2023/07/page/3/index.html","984501bccfb86b8c7373e038c8a73d7b"],["/archives/2023/08/index.html","0f9dac244dae99b03d4e923b3789a2bf"],["/archives/2023/12/index.html","4c8e2694cccdc0f4af7f162b8d78a9d2"],["/archives/2023/index.html","57c5aacd6dd8810705ead1e4ea5d5669"],["/archives/2023/page/2/index.html","e24eeb7c27e68cb1fcb92ac95f8240c1"],["/archives/2023/page/3/index.html","7ddf7802c2748e7cd10642dbee0cdc52"],["/archives/2023/page/4/index.html","7ba5606b7339d551a230b4d74972b8a6"],["/archives/2023/page/5/index.html","44a1e1f7aa3b5ae858a26f085845a04c"],["/archives/2023/page/6/index.html","444b18f1ce64638dca99f5a827769114"],["/archives/2023/page/7/index.html","1c3168579e63b7e3f39068659d52e2ef"],["/archives/2024/01/index.html","c8cf6ad73a05b233020703892641945c"],["/archives/2024/05/index.html","5779c46a926c9bc88e6e052820c2990c"],["/archives/2024/09/index.html","c1e7fa8d3cbcb8e6456ed3c9c8111e97"],["/archives/2024/10/index.html","5caf4b52cce70929b312a8861e2e9ec5"],["/archives/2024/index.html","a1eb16c6f5a5c71539e0f5224fd7b50f"],["/archives/2025/01/index.html","e7876cd44bebd85e74d5ca2c15861780"],["/archives/2025/02/index.html","47289c98e76317901e5280f41adc968d"],["/archives/2025/08/index.html","255f4ff4dfe637d56bd2ae7eb73e2658"],["/archives/2025/11/index.html","53c66d60debfd2cc66cfe664349d09cf"],["/archives/2025/index.html","a530324c6e2153c6292b9bd0eba6d09a"],["/archives/2026/02/index.html","e1e900b02984a47534b8df6438fcda6b"],["/archives/2026/03/index.html","ff7007a20382804626e3b1309e25d1fd"],["/archives/2026/index.html","ab77d0a71edbc4192a5581a65b8ce1b4"],["/archives/index.html","41b32d36bed8d9d51f484ed5c2d2b48f"],["/categories/CPP/CPPBasics/index.html","a825906e84e70e3d9418aa3b4d107cfa"],["/categories/CPP/index.html","6f17c8ebcb295e311544eaf936d82a0c"],["/categories/CSharp/CSharpBasics/index.html","d980cb32d1137dfbaa2bffbef764d8f5"],["/categories/CSharp/CSharpToolClass/index.html","d698693eadaf169c2b71e3b0c35d414e"],["/categories/CSharp/index.html","4b3e5809982e21831abed18a0390e875"],["/categories/CSharp/page/2/index.html","6ff108ca8a76a92b28b38cb4d3e0bce5"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","5acbe4e3c36b9928376b0382ba36f12a"],["/categories/ComputerGraphics/index.html","91bd3f751a443549489fef4e89bcc4cd"],["/categories/DesignPatterns/index.html","80db69c26134c778129144d268207de6"],["/categories/DesignPatterns/page/2/index.html","deff36c63bde694012388e7782d00223"],["/categories/DesignPatterns/page/3/index.html","b3278c934e42fb741329afdf43d1db68"],["/categories/Lua/index.html","a12da77731e8897b191c8e159b3ecc4a"],["/categories/Shoka/index.html","095abf6f465715a5a1f85fba3177c0b0"],["/categories/Unity/UnityBasics/index.html","b484ab6496dc2f6e5e0fe411ef0b7134"],["/categories/Unity/UnityFramework/index.html","e429318af9d726d7991d4fa59ed704d1"],["/categories/Unity/UnityGames/Unity2DGames/index.html","4837b8fc43ee8665b111da009931c6c2"],["/categories/Unity/UnityGames/index.html","3a33966483d19a1c9484ba1c52032f8d"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","ec2baf1ededfb4308b0a08105fe39f16"],["/categories/Unity/UnityRender/index.html","2a3450a7ef5dd494631092d9efeeaa96"],["/categories/Unity/UnityToolClass/index.html","3031beab71e4bbd79d6c3ecad36e3a2f"],["/categories/Unity/UnityToolClass/page/2/index.html","7e29beea9acf00619e3807ad3c8160c1"],["/categories/Unity/index.html","688c86db8368a83172e1d287f80c3045"],["/categories/Unity/page/2/index.html","ee7322232c9fa6893de40362086a0d25"],["/categories/Unity/page/3/index.html","7adc7e202eb0f06b4000d5b32488414a"],["/categories/index.html","bd77146c796e867f81b1a7c252b04a0b"],["/categories/正则表达式/index.html","ce1ef122e37670e481f0abcfe68f9d15"],["/categories/游戏设计/index.html","5a388ceea6d23307c8d580406ba9f87a"],["/categories/游戏设计/关卡设计/index.html","0430beac4f1e22f12fb562e0f1178b28"],["/categories/计算机基础/index.html","84c6bb6899b31d6c3b9ab48a99769b3e"],["/categories/配置文件/index.html","c4f8b9b5145d2fab3eae8acf44c988ca"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","60f1864054067e0ba87c5f7f9439aa09"],["/games/index.html","1e7e0a095187708accb10e573654da02"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","3a12f27960d3ec68c85ee89ad4380d65"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","de5b696f3b3115dd38265ec53a406d34"],["/page/3/index.html","8b0cb0237fb7ee7c01ef5bd30235fb2d"],["/page/4/index.html","5aa6c71679879beb9fc57eaecb24637b"],["/page/5/index.html","b557eb95a9fccb2ee3233191e3e048df"],["/page/6/index.html","f7770da738621d3380ea2f0e2541227a"],["/page/7/index.html","ae05202e5335be4ea1ffa70653b4eb1c"],["/page/8/index.html","ec23977125608e931cf15abaa012dae6"],["/sw-register.js","c6e8c5995ced8bcf7cfa1705e61b43bb"],["/tags/2DGames/index.html","04fbd82cca7c27f83ebc623a8515a583"],["/tags/CPP/index.html","f547cb4821bd392316c15af7e4d9834b"],["/tags/CSharp/index.html","3466b0e1c6b464a3d5a174430c66a81e"],["/tags/CSharp/page/2/index.html","63dda19e5b55b43f4b316d6e533a9de7"],["/tags/ComputerGraphics/index.html","56cf622d5e0f905d8e36be9f7d45c4f1"],["/tags/ConfigurationFile/index.html","9df24a05537ca5393d2ed776a4dd9bbc"],["/tags/DesignPatterns/index.html","f08703508400639517cc2e5f37d02d69"],["/tags/DesignPatterns/page/2/index.html","5f8cfbe80ac81e1270bc6e48e9ddfde4"],["/tags/DesignPatterns/page/3/index.html","9f5e0553c305befc2c900e88a185d1e5"],["/tags/Lua/index.html","32e5c11b6d48eed5e7b9a1233d7dca10"],["/tags/Physics-Based-Rendering/index.html","1653212709e8ffce0b12a85d98b9fdf3"],["/tags/Shoka/index.html","0481763d32b1094eb371ed29743a71ae"],["/tags/Unity/index.html","503453de1af12d2aec37d69696cc2fc2"],["/tags/Unity/page/2/index.html","5a532f019b96010d0c04b49270c5eca2"],["/tags/Unity/page/3/index.html","55263a1f8268aee7697c41447ff69464"],["/tags/UnityShader/index.html","1004a54bc4ceea8856daf6622dc7bea0"],["/tags/UnityUI/index.html","6fbf7652e03d78f8cc5a5bee4aaffc2c"],["/tags/index.html","7f4067680848dfbeec723ae3220a8fc9"],["/tags/操作系统/index.html","3f7dfedb4f2b68331ccc1672eea8ba58"],["/tags/数据结构/index.html","057647fc693db2b4d308480d1ec68a36"],["/tags/正则表达式/index.html","2687c5f967fa43d7982d3491ed560fad"],["/tags/游戏设计/index.html","489e9563a6c934523c169e8d6d0b3d99"],["/tags/配置文件/index.html","c95a69bfbdf1bdc78b3acbf2dee977b1"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
