/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","8c045b35073e5f9c01dc5cc5772dd093"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","07752a928ce225dc354a193c89866ad5"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","bd86a128fb32f7b81b147be72a2efe46"],["/2023/03/20/DesignPatterns/设计模式/index.html","b766048c5c5ab593d053f854a29aa0e4"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","9471db77f3c403ab898f75bc366e8433"],["/2023/03/24/DesignPatterns/单例模式/index.html","6b41bbe2cdfd755244d6c62fe1ef525b"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","f74eb2f47b774d49552e630b776c27c3"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","6e79538695164ca06e0b86938b87652f"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","5a8ccfea0164e81d66bc31dfe2c1889a"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","1a623caac4544942c872c5887e7ac8fb"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","48d5f039f930a4643f9ff473961e35cd"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","db8dc11c6bd23f2a8411d299caf14c9d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","5cb062a180ff896bff3bdb9389f46736"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","0b979a713011619d87623b76a6a1811a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","9434dd854ca34d134f7794e21460e401"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","07e4c57e7ec1b4434ccd0be7b40b1237"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","132dcac31fb908c31ba4ca94ab48e240"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","99c1b0c7f9549bab9d6b3409930a93c8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","0344ebe94135760d06eaff3b26d7b9fd"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","b1f8b8459e7ee13886fa71e06e946098"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","c1ce8f9270e60d4da88894d8e20290e9"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","1794b786cafdd4c170b64ed1b5bf589e"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","a9fc07fbfd76f7fba191b0043ed40e76"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","46ed9184eb94e83f07ca6b9be76c1724"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","540b213f5876925dfbf5e6aadf2aeeed"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","fd49ef6c5d399c60e8dd5b6f4d8e22da"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","75d689ee0ef8f80e29695e4ebf6307f9"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","8efcc03fe00832341e6d099d1ee3294d"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","598e1f51fe7fb8c67e8878e4ef57b788"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","bee159ca9a45e0b7acb3c90bd3e4c6e5"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","771be9b2d654c9659c5fdd3d983a6ac6"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","f61f04e7e3e7a76ef28350b245250bbc"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","72de87430ee42add8e353ea60b996a5e"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","3ded2a7e6f3062ec6abf0594f5547e2e"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","9134a750879bc852235c15a6c624ed51"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","72f6ae092351ffc2497f9d1a7a903201"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","faa1befb532bb80c8cf0b90db720ee09"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","4c746eabbae2a04db0082b7ab0e7a29c"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","34f7eb03a658f4ace04111d227ec5de0"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","87c659a7f4f85bdd873559edacb64251"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","48ad737f7301d18be0c3aaf07e74dac0"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","960051e2d5e80d8b6512e11325773660"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","c45bb573072b5c103ebb43d652097701"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","e5c2e0a7913e6c4887d1256d47831010"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","15a42eb1ebd8291c62913728ff8d1516"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","6b5d51171e557b4d2eef8929501920aa"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","7cdacc78795708214ac320f482fe2c49"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","55a6da72fb4292bba0bcb3b85b42c0da"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","4f99dd8225a7feb7a123173392b1cd54"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","5ec3f498979ff9c3deddc943e4562ae6"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","5abd7494a4183741fd71c3c9d62f36a5"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","e74de9fdfcb68c051e740922ddb66070"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","b5782c658f0817f5d04de04f0d6aae2c"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","8804f0e672e4b1b49b2047a22a80957a"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","60a9d43ef50e0d58d643779a895a1022"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","42cca13b4e74b736d1bba268fb4ca947"],["/2023/08/02/ConfigurationFile/JSON/index.html","3e13ea775aec99255451d19d310b0513"],["/2023/08/02/ConfigurationFile/YAML/index.html","03e00f0867029ebda3329f180bcf6a0e"],["/2023/08/07/ConfigurationFile/XML/index.html","468fdb90b0ba023e1857224cda38ebcf"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","aa47956d067c19da87581505f0ec06f7"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","f881c740736769548b9f6e9944a2a27b"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","b6d3b35b711a766ace365ada5ec0c9b5"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","76e57e630ff6a89f7ae20d1d560c3ba7"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","146d6a4d0b77b30aca2cd12c130a33b1"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","af0332ecb258e5f8c633b4fd2ef4fdd7"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","a8a9a1c056743ffef7d9f65b3e74181f"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","76ff3d6abcbc9d0369e740672d9bac6c"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","7ac4e3531135b859548a472652de68e7"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","0f3abe0c0559fa0afc122f3be50675a5"],["/2025/01/10/RegularExpression/正则表达式/index.html","85e3a90eb9899bcb9942becb974db3d1"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","3924fb4e321d5c477e9c853477a9fb89"],["/2025/02/12/Lua/Lua + CSharp/index.html","e727984c60d3fc38281fe1328520e2fb"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","56a18f8685eb9f079c81a27cf6a87066"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","f3cdb8341a762c1bcabb0489ceeab405"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","224cef3ec331de0ac394403f5f8a4bb9"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","5c16aa26b15b74183ceade6e174d5554"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","d136c13a9e766376091836d3b7bc1163"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","a3ec67ce884ccc3b0a40fba37b3c969a"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","c18c8ff0f873797d1901b03490cca09a"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","510c265c673ea030e5cedda37d05ed4b"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","3041236a987db59b89b3f33841170297"],["/404.html","bb7ae4baddf011de24c4db592799f9b4"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","b47b528f621238cfea0e43a6b48246a0"],["/archives/2023/01/index.html","4bc724fa6f69541f74a42c71c170b9ea"],["/archives/2023/03/index.html","d21d140735bbd496c6e1265965e882aa"],["/archives/2023/03/page/2/index.html","43e7cba01d5828f374de9126239d36a6"],["/archives/2023/04/index.html","62b12e86fe1c6cb1160b52dd0ff594c0"],["/archives/2023/05/index.html","8cc7cf48c8a46e596a0a7dd5b91a96ba"],["/archives/2023/06/index.html","73d11c381d636d137cfcf1776fbc7b39"],["/archives/2023/07/index.html","a2039314170b7ea71155875f231046ea"],["/archives/2023/07/page/2/index.html","78d233fab0a7e98779161b770ea8f789"],["/archives/2023/07/page/3/index.html","2212d004fe0c189c5f67491dbb1c347d"],["/archives/2023/08/index.html","020d7366707cac5c4561d5631af8f9aa"],["/archives/2023/12/index.html","6713d9508f8b3812273e062bf01d2ea9"],["/archives/2023/index.html","caa5b7b08a94f3fe13ff848f77a94ee8"],["/archives/2023/page/2/index.html","0054ce3339353089a4705a2f8e0795d1"],["/archives/2023/page/3/index.html","60ca5ecc51e60d1310af8315cfd43800"],["/archives/2023/page/4/index.html","3d1edda35e714733b71fdbe264f8bed3"],["/archives/2023/page/5/index.html","a53d0856a3dabc618aa1c394b8022f47"],["/archives/2023/page/6/index.html","9e81ca03e0c7bfb36fb73403ffcaf8ca"],["/archives/2023/page/7/index.html","af262a75c5da065d4625ed71851957dd"],["/archives/2024/01/index.html","d356e39ebadb4dbd3724ead84faabbd3"],["/archives/2024/09/index.html","74ca5ac8e59756d6b1b974dbc9a6a70f"],["/archives/2024/10/index.html","748dc1d4c82a4d2f1b484b40fbe80f82"],["/archives/2024/index.html","f3dcde905ee72291376a6027769b8cd5"],["/archives/2025/01/index.html","d089331787f391da9c35e4fa53edea54"],["/archives/2025/02/index.html","7e685f62d48a73ff9b2d2eedb89a968a"],["/archives/2025/08/index.html","7b0f831d656fbe461b08d38b844918be"],["/archives/2025/11/index.html","c6980f7c00226bbfe1280d87b83285d3"],["/archives/2025/index.html","8062902b7f4376c9acda0fecadc46888"],["/archives/2026/02/index.html","8af197adba53cc008eaef1bfaa26873c"],["/archives/2026/03/index.html","5f131f945968e117145cad5b4963f66a"],["/archives/2026/07/index.html","0716bef14aeb8dcf336c41183dc4604a"],["/archives/2026/index.html","bb167dcdf393245c4344a0ee44aedec6"],["/archives/index.html","302d924f417434afa69d386f227de1a0"],["/categories/CPP/CPPBasics/index.html","cbc9e061f7b2dd7a023d2360ff9a9a80"],["/categories/CPP/index.html","c8ad72dc9a6d6a2e758256e657045800"],["/categories/CSharp/CSharpBasics/index.html","b621b19c6eedc9053d534f3f2c692407"],["/categories/CSharp/CSharpToolClass/index.html","c2289e6e776ea8ebaa9e0263fb69a29a"],["/categories/CSharp/index.html","334de2475d6362a11181a07451ff9328"],["/categories/CSharp/page/2/index.html","90d00ac5aafc1dd3f1e7007c524868a3"],["/categories/ComputerBasics/index.html","74b1430e7f54cc63529f6e3daf80b1db"],["/categories/ComputerGraphics/Games/index.html","76a22545c08dbf73b110ced4ba0d0cd4"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","99855c115485bc245bee0a1a282ccdcc"],["/categories/ComputerGraphics/index.html","2b20fb2b18ac0a6c7fe74457ad508542"],["/categories/ConfigurationFile/index.html","d247258989fa606d1a176609124f9ebd"],["/categories/DesignPatterns/index.html","0b138798443b46f12ad6857123ee556b"],["/categories/DesignPatterns/page/2/index.html","f1ae240111905d408c1c09fa6f26056b"],["/categories/DesignPatterns/page/3/index.html","68b04be543b13b1650cc690fc49e2d94"],["/categories/Lua/index.html","d3b224ddd74681bc33bcd64af02324aa"],["/categories/RegularExpression/index.html","55786fc51bb9822f77678b1758e2822d"],["/categories/Shoka/index.html","2c9fffeeb43988bb662b2b34be57dee9"],["/categories/Unity/UnityBasics/index.html","7b0a4b83c6e64e9aac6c2acb1bb3d8fd"],["/categories/Unity/UnityFramework/index.html","9c8685efb6e9116023bfc25c5298d5a3"],["/categories/Unity/UnityGames/Unity2DGames/index.html","18804a20c62ad886ff3db45a3ccbfd83"],["/categories/Unity/UnityGames/index.html","7b642aba3a4ac9f838387fbaf6308fce"],["/categories/Unity/UnityRender/UnityShader/index.html","707b7394fbafba85b2101c420432a406"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","01fd7bf35c255cc533cafb38b0d8d82a"],["/categories/Unity/UnityRender/index.html","1aef2b85e5ed991dee52d869018c07a3"],["/categories/Unity/UnityToolClass/index.html","b6c774964e978264c04f5ab12a5c09e5"],["/categories/Unity/UnityToolClass/page/2/index.html","fdf70a9c24cd4da9f8e13e209cccda28"],["/categories/Unity/index.html","6998ce6ed81e660c9d6582985dedfcb3"],["/categories/Unity/page/2/index.html","ce7f47a3e3d426270f9ed90b9765f446"],["/categories/Unity/page/3/index.html","237c8b97281ce1892e2a1202a6a9bbfb"],["/categories/index.html","c957b58e1082edfec02f577495a9ada5"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","51af088adc06d576761e6675aed8c1e1"],["/games/index.html","1de47f0382c1dca3acaaa0ee6d8d2b1e"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","0656c5f172db42eceeaa55a9ef2b36d2"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","8214138caf112f1f31f35927207bbf99"],["/page/3/index.html","e3781d6c094dd5e07a74f0e33a59b073"],["/page/4/index.html","1c3f9d461b59c24c029c6786cb7797c9"],["/page/5/index.html","39ffa4b95b3d5b94d135fcc5a69bfee1"],["/page/6/index.html","3c1d87fc98b764f3e26e8acb38296e5e"],["/page/7/index.html","227dfca03dd02f2523b00d926926e233"],["/page/8/index.html","4dfa7c00fef92a149948080c062c1d73"],["/page/9/index.html","ae08829ef464e75cb9865742981483e9"],["/sw-register.js","f9bb79aa6af7334a47bfe203b336826f"],["/tags/2DGames/index.html","9e4ebf7e90047c63a4868edc00d3e3c4"],["/tags/CPP/index.html","243324f905b1ee7f6854a26b01c2886e"],["/tags/CSharp/index.html","6ee8341fe059d488def3231b7ca00ac4"],["/tags/CSharp/page/2/index.html","3eb1498f827351ade72d5fc830782e6d"],["/tags/ComputerGraphics/index.html","c9f181e1921d6e6c5b0819ae916aefb9"],["/tags/ConfigurationFile/index.html","12e2b4346f2c59bcbff9308f5b9b5747"],["/tags/DesignPatterns/index.html","03d5579f3d7d799f62d73d8661777e5f"],["/tags/DesignPatterns/page/2/index.html","7665dae27f86a8959fe2b509b5e4e681"],["/tags/DesignPatterns/page/3/index.html","b364ac9a5833fd1098712d96c764c6a1"],["/tags/Games101/index.html","f90e22e1e42dc26a304cbb6a99decbbd"],["/tags/Lua/index.html","8cc2f74fffb01cfff58a82ac34cdf84f"],["/tags/Physics-Based-Rendering/index.html","bbac0e253d3c9c642b6458b6a568ee32"],["/tags/Shoka/index.html","d5461b2258d3ccedcf30d6f65e66a3b4"],["/tags/Unity/index.html","58eb978351f9aeefc53fb35caa5553aa"],["/tags/Unity/page/2/index.html","40ec91f8e3033e095db45b2eae751cbb"],["/tags/Unity/page/3/index.html","9de6177dbba9c521147b35ae633d8136"],["/tags/UnityShader/index.html","be3a8e1ba936f5fb7cc9197f05a92582"],["/tags/UnityUI/index.html","eddbefd636d96e7652be62dae2f508b9"],["/tags/index.html","8915e16d1a2307f5c026e66636d1362e"],["/tags/操作系统/index.html","29040d390a6e475840c7aec3219346ad"],["/tags/数据结构/index.html","98a7d4564d504282a602579f1c21c7a4"],["/tags/正则表达式/index.html","da2fae09498d4a2fdfe7b282367e9800"],["/tags/配置文件/index.html","4ea234e49d02213b9605b94e042a087a"]];
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
