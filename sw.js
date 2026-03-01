/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","484fdd04c74ba6272d0f70289aa317d3"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","e96e4e117a81a3a83432420e933dfcda"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","43ee1abb8bb4a9de2324b477287b553b"],["/2023/03/20/DesignPatterns/设计模式/index.html","6642956cd9bfd88242686a06a04b52d5"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","5acdcdb25bdec931e33bc07205af8a87"],["/2023/03/24/DesignPatterns/单例模式/index.html","aa33c1d47fb68eafe236473beb5354c1"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","00699a56e0741909ea1b9765ecc9e7e3"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","4f7632c346cf11e4761fed0eed9bb3da"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","9c0993b6bb34db694e77f9fb4e12acf6"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","20833ff18f21540278c6309a4abf1c0f"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","16eb98e49c0b7162030d150d59d0d1ec"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ebebf8e4d41ea5368be40676188a7c4a"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","c475731515717a2f036fe8e7b14a4cf7"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","13f4dc383527a5e73970426aa0584c09"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","a47bc65ed808d6e484fa42b63b7a4467"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","013081bdf8201683191f1f9344235416"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","d98e61c1989803e385403da8584a0bc8"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","507b22def455a5ef063748a2247aaf19"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","857429badce7b9dc07b04fbfbecc90f8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","890a544478d2c6ca6d9833abfad83174"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","a47fdb00b8849813a35990610ebcad89"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","ac3525200fd7e6bfa137e40e4288ff7d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","fdd740724735f8e32d5193dab43109c8"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","7f8f773442593e7e2637ad6e56ee0b19"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","0ed10d41689285e09161005df76d1f18"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","c11b5fa9002bcc7707623912fcd97e30"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","790db33deebf98c7e8d1389412b04b43"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","dd62ddc4f6ccea68896ee0ae5a618ad1"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","ee1ddfaf582b8aac2544b2a530030490"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","f3172e194b44ed1d529433c0a1f33961"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","86898fbff2dd65b28114c0d6456cec2e"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","94e6e04b5f9d482725821a7e19f02a7a"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","4d9577c4d9a3eeddc9d6b5d43d6761cb"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","a67a4c000f7cbc7fc2f39ac370152bb3"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","c2dd5ac6a35de4f2b119b39843f6a796"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","582fe6bf2fc489e9a6941457f2877709"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","122b7da9dc97ec450dcd2815a962a515"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","64d14306bf4ba7aa152edf828986ea64"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","5ece27859e791d9afd729055b4c5e918"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","52ac0408cf026db507ae5c645a66a3a2"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","44a0116665b5d10e49619ec9d46c158b"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","afe7c67bf078aaaeb49656ed919978e0"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","89847ba26b0d7651a3c48f7e16648f8c"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","92e15a18cf8a72567e3a2e2f70cacbdc"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","76756ad138ad046d629b3291614b8c60"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","864af80f7e02a04eaa1266c83f1b22f3"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","27ef4e655ed4fbbfe1103c0d9d4f7a1e"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","4f2fb9323df88d8d3f5c089b3e20b5c6"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","ce65feeb566ab873e738a4bdb1bae355"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","3550976d7b3c0dc693b9c654f2b2e5d2"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","ccfae67c0c6005d3f6049b0216631640"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","4858ac293ee4425580b9935a000e3fde"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","2edf26c7709d80afc60ef75e605bcd91"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","2a5d1c0913edaf9c70677bc53b302549"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","c595f4cf8c3e990a5261afa5babc6553"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","23f7e4734c6caef48c4c25bcda7bc07f"],["/2023/08/02/配置文件/JSON/index.html","c30801d906153e1407d8563987194f48"],["/2023/08/02/配置文件/YAML/index.html","450f6e03057bd1d2bab4a8c3b8fe12f5"],["/2023/08/07/配置文件/XML/index.html","f28fa570b9392c7eb46e4e00710a2233"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","5c5771792fded79c70ffbe8ada4bd0a6"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","336c7d8254f98c162558da795a4cb7ea"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","5c74cc2e31373458926d882eaad27467"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","e698809e61d81df936b502bc5a2dde26"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","5360a448b898aa71dc850b16968c8fc6"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","7d28c58409ae2bcabe089e3a20004583"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","83557cba579d2e4de14839fbcff9a5ce"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","9b9683dcf63a10a510ff360c0539a4b3"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","e3b2cdc930d13c8de352189f260aeb7f"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","bdf242f2a7f3bd36366469890855f426"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","31f994a0c18e2bb17ce00ab48c55dd1e"],["/2025/01/10/正则表达式/正则表达式/index.html","6d71928c4206efff7a59df5609fedf07"],["/2025/01/20/Lua/Lua/index.html","7bc2e87d80a82aa9f05643b59cdd5a66"],["/2025/02/12/Lua/Lua + CSharp/index.html","701356472b0cb2025c080c1797a54413"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","09e60c556dad5f2f21787dc25e1b83db"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","22d9155d1b7203f0d7324b1d1a25f4af"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","0394c9f4b4e82e0080949428dfbb32d6"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","9dfceddb00bb19acbb79a2ee593552c1"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","a792bcdc498c4090d1bb88fd314d52bd"],["/404.html","59539c9a1a361813e5827e0362667f0f"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","8ca4f77360a56c1b85a1bc0cd009b6ab"],["/archives/2023/01/index.html","2dbae0a4d80a2e5731d16df5de163373"],["/archives/2023/03/index.html","8c8d1b1296dc5542b5ad0ee45cc8f6eb"],["/archives/2023/03/page/2/index.html","4846f9bc950740fc3aed243d42caddb7"],["/archives/2023/04/index.html","82b3eee9d4e0120cef6df5ed9d404abe"],["/archives/2023/05/index.html","67759ad02c5cc080eced8e34110dc0d9"],["/archives/2023/06/index.html","79ba82666f13b63f4a5d9fe560fe7e37"],["/archives/2023/07/index.html","da6323c1a097e1abd5a325a27014d067"],["/archives/2023/07/page/2/index.html","4f647383fb69570177266949de0f1f94"],["/archives/2023/07/page/3/index.html","f49db81e825b94d4f84a5b10c58cdfd7"],["/archives/2023/08/index.html","99866778650383521cb5b27a6f0ce95c"],["/archives/2023/12/index.html","2d6b62bda7009b1e56d7dd06351fafb5"],["/archives/2023/index.html","daf2d391730c75da350251ee5765080a"],["/archives/2023/page/2/index.html","5f43d3b3291ed778c927817e614bac14"],["/archives/2023/page/3/index.html","540ce931587dc146a49c706d522869e0"],["/archives/2023/page/4/index.html","35fd0012a12f2fc9fa16a6de3fcb75d2"],["/archives/2023/page/5/index.html","9f14323c72ab4d8210fa354ec0e2de0b"],["/archives/2023/page/6/index.html","d88f1bfee3caf8aa52ab9cf9767879b9"],["/archives/2023/page/7/index.html","7adbc8887966df5b6b58e96155061592"],["/archives/2024/01/index.html","db96345e76d8770e1b59297c5050c655"],["/archives/2024/05/index.html","cd16bf77f2242be1258fab2048cf2c3d"],["/archives/2024/09/index.html","e1c33db85117b00b95f9e7e933112818"],["/archives/2024/10/index.html","b7329feb5b33a660bdb7ba7ce740b235"],["/archives/2024/index.html","a528ad8f05c7dee3fa03dcf0900e01b2"],["/archives/2025/01/index.html","85e3a01a6ae37a8d57f5cd8046121daa"],["/archives/2025/02/index.html","ab7a3ecb01397aad7aea015211d0cf21"],["/archives/2025/08/index.html","0415145eeefe7390a02ebd9fff3cb2d9"],["/archives/2025/11/index.html","8f6c0b4e83d0d8a83ccfe779f6c74d06"],["/archives/2025/index.html","92293d457eee1f0fff47363b224db58e"],["/archives/2026/02/index.html","5b5d727c37037cc558d4aca049fa523f"],["/archives/2026/03/index.html","bf4d801aaa6e83f2ad102ed8a50fdf11"],["/archives/2026/index.html","9fcc72f0a894dae6efeb2106893a9085"],["/archives/index.html","13d82c3e164ba14545b7597182f64268"],["/categories/CPP/CPPBasics/index.html","6f4dfe6a17d96359da5224b29365b77a"],["/categories/CPP/index.html","51bc81d78c014db45fe02468f7714c43"],["/categories/CSharp/CSharpBasics/index.html","4d47afb550d94766cea565efe1000b97"],["/categories/CSharp/CSharpToolClass/index.html","a6e51cb9f81626410aefd4c03e10db27"],["/categories/CSharp/index.html","3b7f5d0d86d3542b6aac2b1497c0c860"],["/categories/CSharp/page/2/index.html","9e7be3035e6c8dee01d7b45b8952bb0e"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","94f1dd221c3f167df798466e3ce0e878"],["/categories/ComputerGraphics/index.html","5f8602606b446851e29521e469a3d544"],["/categories/DesignPatterns/index.html","2e51e7e2f25b66c3acdb5871fe9003aa"],["/categories/DesignPatterns/page/2/index.html","0361fe3cf8351d40b82c82142f1af8ce"],["/categories/DesignPatterns/page/3/index.html","e571a3e3fbc7d04174492289f6e06c6b"],["/categories/Lua/index.html","91ae2d229a32a5864be3c7746a0dd9ea"],["/categories/Shoka/index.html","6f2659a28c6ea6e5cde6a696face7e57"],["/categories/Unity/UnityBasics/index.html","68f337e0844f856140443c44deb7ef9b"],["/categories/Unity/UnityFramework/index.html","c4567a50150476bfca56ca390f3fdf0c"],["/categories/Unity/UnityGames/Unity2DGames/index.html","d67303c7c2fce044bd840460c64da782"],["/categories/Unity/UnityGames/index.html","49472bd6e077af349a855e8ff2c0a704"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","a16403ed9278e1ee52d7e6ae98b3f3cb"],["/categories/Unity/UnityRender/index.html","c81655fbbd86b61d3ed2e0c7a4c4ac9b"],["/categories/Unity/UnityToolClass/index.html","b51527ca35b4cf5d1a59710d3b2fe239"],["/categories/Unity/UnityToolClass/page/2/index.html","c18f43fe64f977e5dacab877267d22a4"],["/categories/Unity/index.html","47a122660c9bc3e8b304dda10225cc96"],["/categories/Unity/page/2/index.html","204ca58ac84753904d528bf346adc1bb"],["/categories/Unity/page/3/index.html","696cbd8793d2cfef1e4401d5511e4c4f"],["/categories/index.html","5f57dc7b8d35fcdc21985e1da14e89f5"],["/categories/正则表达式/index.html","c07bc091e3c9cbecc4d20e1b8ff46088"],["/categories/游戏设计/index.html","ff7dbd2a11e6a87b0907991a11c17b45"],["/categories/游戏设计/关卡设计/index.html","dfb1c4459ab29a08f4aee80bd0dd80f8"],["/categories/计算机基础/index.html","9ae9384a5a9fb8ebc92ce8730cf121bf"],["/categories/配置文件/index.html","f55458ae8ce2f90a9f2e2d4122a84577"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","5c0c622fbf58caca449b75b6e5e4f71b"],["/games/index.html","057cea7d5125381e1fa9454ed7c9b22a"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","dd26abf8047b7957e7449505e6369494"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","6b3934f1cc7ccc680fa9e688b2314fad"],["/page/3/index.html","c56d28a68e9a22dbad5a5f928cbe3444"],["/page/4/index.html","ee3d1a7e562dbf3506e88497319fdd9f"],["/page/5/index.html","d5dfe33ca08e4dfcbe67510671de0583"],["/page/6/index.html","b9f38ad34f7da8217d368ceb1a7b0893"],["/page/7/index.html","b63b6576d5a0794cb0c545a3733b7e22"],["/page/8/index.html","68628c6f7fa6d138787f1f82357bc6a2"],["/sw-register.js","57f26e6197f0ba5fad9c0fbe33690d85"],["/tags/2DGames/index.html","ab06acef109b835621b6ba1cd99e7b41"],["/tags/CPP/index.html","a1b86e57d422dfd886c1dcc0faaa1bee"],["/tags/CSharp/index.html","e600afb48a21d700e8bb78dca806c128"],["/tags/CSharp/page/2/index.html","ed8b77349f0860a5536d2b7bfc85d15b"],["/tags/ComputerGraphics/index.html","3ee5fb1b65428e10473dc00ed451e3eb"],["/tags/ConfigurationFile/index.html","33cd0cb2b22e947f25412d01ad780e39"],["/tags/DesignPatterns/index.html","2a4c17592c4c8847fef45b075eeb5c02"],["/tags/DesignPatterns/page/2/index.html","a11a628155c45c4a4f62f24a6f8ebe5d"],["/tags/DesignPatterns/page/3/index.html","4a394ad5cab8df5e7b0fee1e721ef72f"],["/tags/Lua/index.html","3dfd9a375da15a2bcffcccb07fdae453"],["/tags/Physics-Based-Rendering/index.html","c7a4e5810f6e58340d3852688f1fc15a"],["/tags/Shoka/index.html","b67fc71ec59017cbb420bdc598e5b04d"],["/tags/Unity/index.html","3400ec098cbd4cc35e3bab9ab97182a5"],["/tags/Unity/page/2/index.html","f645150d50e65493304f60e871fffee6"],["/tags/Unity/page/3/index.html","9cab784aeafa70424ce7d7ada74f7116"],["/tags/UnityShader/index.html","4f456d75f55183faf6775a0789aaa963"],["/tags/UnityUI/index.html","1053d2df5bec4f0d255d77dc98ba9c85"],["/tags/index.html","2416e1d9e40b292b2117145856731ff4"],["/tags/操作系统/index.html","03fe88934781b049704c7ce0b96246bb"],["/tags/数据结构/index.html","47da9268d113fe7cfebef40330dd9253"],["/tags/正则表达式/index.html","17740fe43496ebe11858db416b282ce0"],["/tags/游戏设计/index.html","150158e4cc34e50b999600be7e0be81e"],["/tags/配置文件/index.html","debec7e85b9fb7a2355eea7a8c19c4ba"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
