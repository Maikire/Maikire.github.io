/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","4dfcd9b5e701b5fabea09c1e2e0de89e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","ad0b413ae95dd0c47b3c67b4ee15be3f"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","47b17a8b4d221a9ead95c3ae98e3ff80"],["/2023/03/20/DesignPatterns/设计模式/index.html","636699274b5118dc1f09f54e79e8828b"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","e2bc20feaf50925835e899fcda62db29"],["/2023/03/24/DesignPatterns/单例模式/index.html","d245463e83abe4189fb7472e19ab36b5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","1c61832b501a5b647ddcc62849a80242"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","8b75635d6ffdc4239675743451bfbf0c"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","b8831a0fc4150c77fb55f4f4073bcd27"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","4e6b3af5f3c5f952cf75cfd6afa5cd24"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","b3b2748a1fc01fba9451955d4e993aa9"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","dbc79a4bf120fe960fa8b6e560ad681b"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","15856e3fa4ea059fb300e75614d49763"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","dbb69ff37042165649e23ae6fb8883ec"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","0ffbbf5caeda7c7124cc5c5164d5268e"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","3f74edde836406d0e1dc7963c49b50b0"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","aebfb55c89b9d5d74b681e17c3480745"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","ddb010151a66875f11a543462c94b59b"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","67c2b32883c06fa5dd9ea236b819efdf"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","94ed328aac9e5d4c30df107ed3071d89"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","6f93b1576f8b913593d1d99f09af0356"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","ab10febf6687766f07f4d30238615452"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","a09c34418ac9a4dbd1cfec720831cf3f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","81221b64381a4d21b2272a3dfe28f5a1"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","21226aa1177c838958f3a9f2ba6681e0"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","91c149c975dd1b68defc52bdd8b26a52"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","396416bd54b51e856491e65129c7e0b0"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","3b2b72ed9effc857c2f79c9551a19c15"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","fec587716c592aa5045ffa934dd5104f"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","240c604ee51b09e94bb2a1ba3c6dceca"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","177b67b8116a00dc3fcdf2b7ed3e238e"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","ebd720a90bf126c3af6ade6dfd9b0d71"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","5c7334c7cbaac79f10ec2ded083fcfb9"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","9a3567eb2a223f2b94950d4e11fcb9ec"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","ab4735434e01c2aba5cd6df93ffeb693"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","a428510d8db987f4c137d883bb233584"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","379b32208227a2219748764f9793d530"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","003ad522e5d7e4ce1eba58ec8b1e0dbd"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","961f4e73bef05e61ee8c06fe67fc1f2a"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","d67bbb5052ce85508e3c1e72d2b1d9ea"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","878891f6f8216c54529eb569b853c4d6"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","f0f24eebcac4c5bfe925af2a5dcc202e"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","63c15789c3561ecda9d2e581d4959a7e"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","ecb79c857bcdd231204b0111fbe2561d"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","c620f7a99fefb6e774395995e35b0f17"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","12deb5015e7e01ad939f2d19a0ce5bb2"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","f47e366c563944621be87f1b36770185"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","d45c5b5b26437db11c20df9455da3091"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","f3feea5b71925a61f3c3441fd7f42610"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","1d1a9fe71e3c7bd74c4e5f3f571ffa7e"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","9b5ccce304de83fff0b9b1726bb42515"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","c4e7e7dd4c30fd8e3962e718a384e9b5"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","8b3ce76868629c2e9080b6e353095f61"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","d5982f5b4266dff3534f80a34d1704a2"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","6aea00992741c1ca7b61e953ebafa385"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","7e5f35209c0f162ee24a4a1f57568a04"],["/2023/08/02/ConfigurationFile/JSON/index.html","497a2ce1c6b1cc4d2a26101efd323a5d"],["/2023/08/02/ConfigurationFile/YAML/index.html","eafc122dce754d03c308e920adbd8dcc"],["/2023/08/07/ConfigurationFile/XML/index.html","08d1ad34a2f6c803e509e8080c6da056"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","f678c68e8be925697a82a9611c6d2d89"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","b1e8d37feb077da1d2609d7634b329fd"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","749ea918bc74f90279c2e4e0dcd17b1c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","5035784d86677f4dbfc174642b5def3a"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","f728267a41e73cb26b14836fc07edc88"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","2b3aa1dbff99750a5f0a7c93c59b4441"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","025215ffb7099873a62ddfd8dc803204"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","4c1c675108f671ef81bf24de8cdc805e"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","d0b2b393270912f3e22c011352e4e3ed"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","c777b506b2fc2b0616c671f9a6a8a69e"],["/2025/01/10/RegularExpression/正则表达式/index.html","fbb12b7f208d73dc886397c649e2ec66"],["/2025/01/20/Lua/Lua/index.html","d5c44bd4c0e4d1f7a7c11f8a32a30a34"],["/2025/02/12/Lua/Lua + CSharp/index.html","7cc04fbcb693704a57f9618cf3226579"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","69865b2312ddde53f7a718cc652605e9"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","611545ac4365b15e77186f584c6b4551"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","9034df07af03da6f837fccf583624058"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","2b97cbfb66f0c719c72bd2f50604ee05"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","8d3e2561f7715b32030ab5308b3e2348"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","9b67b4dbdbcb1099133b2bb501f2be6f"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","c371c9d597211a863a49d03b31747015"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","1e382a948350983d147e9af54cb0373a"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","b4dbe50e4fd2fc2ef001de6a16137138"],["/404.html","f7d973736b52951ef61e03b51df9d285"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","c0449eb41a1b7131b7665cef3a532003"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","23a1ca5108f5b70d0f8f4e8b243d451b"],["/archives/2023/01/index.html","f906fac5f55d806de7d57e89e46dd2a6"],["/archives/2023/03/index.html","af659f46ae8d219961183071bead5318"],["/archives/2023/03/page/2/index.html","00ccc24b746bbd09a1400031b1508db2"],["/archives/2023/04/index.html","3b76df2d63347a90c33dc698094550bd"],["/archives/2023/05/index.html","c5a5ee07f96e9efbe9ff495923a9297a"],["/archives/2023/06/index.html","19c49ff6ce528ce2d8424caa2e1e1b04"],["/archives/2023/07/index.html","a7663bfe9f73ec768503f8ddaed7faa2"],["/archives/2023/07/page/2/index.html","9f1b47d0f64a9b340e52f305a559eb4f"],["/archives/2023/07/page/3/index.html","8c75d6d4ca823bfe42e4335cafeda8f1"],["/archives/2023/08/index.html","6f334187f5f5bde80f02e0cd4661195a"],["/archives/2023/12/index.html","65816bca33057819a2b7f1545a58b618"],["/archives/2023/index.html","94a2d2e1e0237919604045e8e0a9d703"],["/archives/2023/page/2/index.html","108eaa568453d5b5631c07c5ec3cc5ef"],["/archives/2023/page/3/index.html","ef63d4a086d16696605936617aef6834"],["/archives/2023/page/4/index.html","1cf60570248954743bd4177e10d026ca"],["/archives/2023/page/5/index.html","baef22ea7f4b21e9508072ec9a8a387a"],["/archives/2023/page/6/index.html","da76a3709355840126ed8dec41673367"],["/archives/2023/page/7/index.html","41f7096017c315c6d15b0e28acc04452"],["/archives/2024/01/index.html","ef6c2ffa8dfbdb5d0774398602235be5"],["/archives/2024/09/index.html","ed7cd20bd8c38cf25dceb03d7b4cfdbc"],["/archives/2024/10/index.html","11445237de28b765cf9a499974beb2dc"],["/archives/2024/index.html","1b567b28e40bd71106412e157e42ab05"],["/archives/2025/01/index.html","109ac3d622605e6d7706adbd83590955"],["/archives/2025/02/index.html","ff5da9808b99e5ad68babaecf0cfd794"],["/archives/2025/08/index.html","60d57556768e8dc0d8ff7ef44e22bf5a"],["/archives/2025/11/index.html","70e3bdae0c550ebe96068ff1b1725931"],["/archives/2025/index.html","e472ced4d3f07f11722954fbf497cfd4"],["/archives/2026/02/index.html","af0cbd90a19c446680263f20e09e2c33"],["/archives/2026/03/index.html","9cb41f56754515f2d1924fb4e933335f"],["/archives/2026/07/index.html","3fdf0d9d150096296e00cd01fe912a9f"],["/archives/2026/index.html","8a6a7cb69955fd07b5d6d2ccd1cb8418"],["/archives/index.html","c7672d330108b13ff9b01cc7918925da"],["/categories/CPP/CPPBasics/index.html","ef0bb3bae66fc13ac136cd7b1c01ac8e"],["/categories/CPP/index.html","623188e4308edc824504528add5c95cc"],["/categories/CSharp/CSharpBasics/index.html","9dfb941ca1b6fcc469b099cb1a681412"],["/categories/CSharp/CSharpToolClass/index.html","f3c07265396e4e76467bdc83127594b5"],["/categories/CSharp/index.html","0a40f7d664ee6941215887bb168e924b"],["/categories/CSharp/page/2/index.html","6e500e1ba50633382124a5a7a0fe9df6"],["/categories/ComputerBasics/index.html","f47f6d1a0f4269d6843fe4a46f27cc16"],["/categories/ComputerGraphics/Games/index.html","90f9b60140a9105a48e222c2f1a11fef"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","6f3888c1e253b8f8f2d4d88d0ef33cf9"],["/categories/ComputerGraphics/index.html","bb96e13ec4f9b7a65fcc0db25fdd12de"],["/categories/ConfigurationFile/index.html","8ea027028b7d3be5b98d9142fa25a538"],["/categories/DesignPatterns/index.html","1b6a64131845f90197284e18020789c2"],["/categories/DesignPatterns/page/2/index.html","afb4a721f859798c308be22b4a5efe84"],["/categories/DesignPatterns/page/3/index.html","4c99da33411b680de4dba8fd6d3a3273"],["/categories/Lua/index.html","1d939c072c5c04965026ed5143f6298f"],["/categories/RegularExpression/index.html","6768d33eda61216f21ab3b84ef10f047"],["/categories/Shoka/index.html","c921c52ad19dce0ea3e0bad7bdfbf6cc"],["/categories/Unity/UnityBasics/index.html","83c1c7ee90b3c2b2238cfa7941de5020"],["/categories/Unity/UnityFramework/index.html","1de3671d2e32b4e963f78c4b1c17c552"],["/categories/Unity/UnityGames/Unity2DGames/index.html","fa677c2491a45b6b36fc9da06ab74921"],["/categories/Unity/UnityGames/index.html","88db0ed24485e8b3cbffd374f634947d"],["/categories/Unity/UnityRender/UnityShader/index.html","5e82819b366784af9f2bb1db38541175"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","608569c2c042307bc12d29e1e7e78245"],["/categories/Unity/UnityRender/index.html","b47d663218c612970d097e0a9fe266e3"],["/categories/Unity/UnityToolClass/index.html","5bd23ef75e2605d21c44f7b1e65caa9d"],["/categories/Unity/UnityToolClass/page/2/index.html","a7e252b01759c3ed9734370f0ce56a1f"],["/categories/Unity/index.html","0cc902bbaaaa40e8563923d1d4831c49"],["/categories/Unity/page/2/index.html","70d21c6966fe5dafd97e6b9ba3396d86"],["/categories/Unity/page/3/index.html","95c4fc7778f855fba723f89a70939c1e"],["/categories/index.html","8ac7281c2f420e23794641625af2139e"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","92905af699b77b1abceff9a1eaf2d74a"],["/games/index.html","dcddb6b91478c5cd7649ac82942f637f"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","65b4917461b98a0864a2b689f5dfcbac"],["/js/app.js","9b788d2d502b4262e50618600e182d8c"],["/page/2/index.html","8a5d343ad90133b5864d0220c954e60c"],["/page/3/index.html","e7999f63fa9d74bba30601f4952e1233"],["/page/4/index.html","b7fc3d3799b2d3deb21ecfd6f46172b5"],["/page/5/index.html","b2b0655cbf333ccc8ffa01a61b6410a0"],["/page/6/index.html","f08e7b281acbf8afc6619c505795c3fa"],["/page/7/index.html","2a4753656bba574aebc50052230a2784"],["/page/8/index.html","9810505776498ebe720372b06087ad34"],["/page/9/index.html","5159e82d70f8df35dd833f19f7c55559"],["/sw-register.js","5141c46628f2cbdd155f333f40c69bd0"],["/tags/2DGames/index.html","a5fc63ca8a108c74ebcc77510da5a481"],["/tags/CPP/index.html","9e5ee62ee0d082a218de610556e75aa5"],["/tags/CSharp/index.html","e61c71a5cf4586281e9de4897c8b83f7"],["/tags/CSharp/page/2/index.html","6cfd531d2259c386cdccfd2f8d4f87e4"],["/tags/ComputerGraphics/index.html","3b1eb4c988ea8d610d11e25af28153b1"],["/tags/ConfigurationFile/index.html","94e497e57db8b389c42e57656c5d5be2"],["/tags/DesignPatterns/index.html","b47155ae0f1a0a6d96ef290f76f587ca"],["/tags/DesignPatterns/page/2/index.html","5bcabce7add8a8c0c1d97520252a3fa0"],["/tags/DesignPatterns/page/3/index.html","d28e2211e78505ad90fb0cc06109343f"],["/tags/Games101/index.html","691b5473aa7e9372c4e1702708a312c4"],["/tags/Lua/index.html","0625549b26011628bcfe83c3f8bde08b"],["/tags/Physics-Based-Rendering/index.html","dc2efae5f1bb648ec3705adac4127b38"],["/tags/Shoka/index.html","e4b64d70a4d252a8f32e7231484f1ec8"],["/tags/Unity/index.html","a409e911ba2777730cf3d42fc9ebb396"],["/tags/Unity/page/2/index.html","5f37be1dfe52317f9ddd25b15f6383c6"],["/tags/Unity/page/3/index.html","e73658299c03175ea10a33e690d87f89"],["/tags/UnityShader/index.html","75b3bcae4183d7df20c99d0d8ecb797e"],["/tags/UnityUI/index.html","b19c63d5c1892d10d6a9e662fbe9a5ce"],["/tags/index.html","34115f000c150e06883c0667915447fc"],["/tags/操作系统/index.html","a12e9150fe074d8bd3270b9741a4533a"],["/tags/数据结构/index.html","236fd0ba6606f6b71d6a601004b1bb3a"],["/tags/正则表达式/index.html","ed0a7b46d922033ac65450475c9b4ef3"],["/tags/配置文件/index.html","cba2bbccc4a4f2e36afe2b3cb660c946"]];
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
