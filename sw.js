/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","877b05848f8cea50fbc02ebf1e07a6f8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","ce93b9bb788cc78bd6d328c6e7ca97c7"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","1c9a5770b5a8b5318102fc94d5edaaaa"],["/2023/03/20/DesignPatterns/设计模式/index.html","a247978ec9f5660eb5dbd34af4a265bf"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","22c1000a1028882d2b5462501ccdd85c"],["/2023/03/24/DesignPatterns/单例模式/index.html","13125f5fe3025de4492dc547944255c9"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e87878be0466fc5c9bee2c33eb9314a1"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","a23567c610dea1136cc62613f3551179"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","53dcafae3a3ca119813a7d00151aba91"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","924486b036f0b0f748e1d964a12f6e02"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","dda9787505f5f4ec29ad91bd3e744287"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","bd0a3b6f1f14c28da3b65d0670706153"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","bacf7afcbf3a41e58becdda7205379bb"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","9adb859b4c45d01fd4713cd1d4e1025a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","8febd12af64214fac0d184f5f9927886"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","58bc5fe8423306fbb992b12ccb065194"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","d07b66384b29a3e500273a95f8fea9e5"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","d4d94d91f75ce16007bccc225b331e47"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","363e3f6b932479a4a7df5612dee6c16e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","e18d77c28550ca7f3dc5b49e3d4a47b9"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","388e42c967af07f0ad8d79aba7332388"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","1f305e49cf5d919867f223765e296d64"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","2fdacf4ef8e98c1586552eab53ca9714"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","16b37512e64021d23cc2f6bfeebbd08f"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","2c67123a6c771166279b655ae55017fe"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","33cfc43f1c4655cbea94f1e2e77d4134"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","44cfc7940db72b78c0f6fc0fbf0520ec"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","6bb0107160004569148ec008478397ac"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","686b020343feb6dbb6c0727158d943f4"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","39f8b25ef27d8f18b6eb03c1ac914691"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","45ea60172866486ffa28303c11f0b1c1"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","b12968d5d3ad9f34cf005d6c9a12020a"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","6f28987f7d8770e6d6d08d1b61845cb6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","9b8da1e02f092362a7d8ddd3945b9cdf"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","fc451d96dde40cce0721cb08155ebc73"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","78aa22d8efc57421b19cc8b902d46de5"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","b609c2d1555d4be7f80c8743ed4f3a1c"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","ba3ad76e0dde4fd9b63bc725c1f4fe34"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","9c1946e6cd26f2db6e6a4d02f39d57b0"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","843b1e66140a02fd8bd80e89f28c7e48"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","7ad497958f799de70999b94c96627648"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","7d0f5334d5593206cf8e8d6936a930e9"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","04e421fdfe5ab3e13023a1e67e63d778"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","1d1734c3be8032286546cff5f6d40507"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","d4c2ca844542c36fcaf987cce04edbcc"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","56da1336ebf90a86492a8165dbf6169a"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","9ffedda526a141c713bf4b79c93b4e67"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","36db5d57b955924bc818d6a2d400826e"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","54d1ee33ad24012e8020f72afca00e1d"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","b939f51953bae22cab5d667c64b1861c"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","25bd4cbc9aaa56a616136373a79b626d"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","b56a39d652283149c2c62d2d37756d07"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","63c9d93571ff75fb470ea3ae5f1c92ae"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","c75ced0f00d16d5f3fe0dfc526d8d489"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","9422410c9c06d42915184e5dd6e4c0d6"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","c27e5b3f259d838136c7294a57124ec0"],["/2023/08/02/ConfigurationFile/JSON/index.html","8a2840e665a9d9ee7be27957964ec642"],["/2023/08/02/ConfigurationFile/YAML/index.html","805dcacea2b72bac179c23db9b81f69d"],["/2023/08/07/ConfigurationFile/XML/index.html","92cc5dadd452a07ee70f1d24e0adaa57"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","a8de4423e02482f079f60dc0a5737327"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","e4efa9ba8df19264bbbcea25d95bd8a6"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","8de40745b68458c0ca4b983f70b7b6bd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","edfcaa898928809c12e6579c62197d6b"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","a1de3ae22685341082f5dcf9bc3f4d6d"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","0b2fff8fd72b4e687f8caf241b0aebf3"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","fd281c97081103b50d4624372a35da43"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","60819040fb87c3a97be6c7006472495c"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","0c0b2937578b8f2116b3d50cca523749"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","0c47d446003414bb84fadcdca194bc6a"],["/2025/01/10/RegularExpression/正则表达式/index.html","120ad7fa80bd383624ca0642a77e687f"],["/2025/01/20/Lua/Lua/index.html","14e123ba54dd5a3da84bd55ee3bdc8b4"],["/2025/02/12/Lua/Lua + CSharp/index.html","b5c0c4bca886c8a30311b45ce0e69a71"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","34a0f4c2f72dec6e496583656627b4b4"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","0e6c14575df33eb45b66cb2af4d1a930"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","476f053f5084c9b3a99fc07ba57db7fe"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","c58983744b1617afb2bf54e51c81d7f9"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","d4824e190157bcb7a22d2045efab5807"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","1e311cfffa5f51f56edfd3bf8c0ef17b"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","476dd417dfa3acdb991f3b4ba339fac9"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","6f947c7d115f58d8018c41bb9fc051ed"],["/404.html","76bf11d2804701f0ab90c84d7e14b71e"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","c0449eb41a1b7131b7665cef3a532003"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","7bb42d6396164c0420c6c410a30871ed"],["/archives/2023/01/index.html","a2001a42cfd20ebde6e1698ef5caa362"],["/archives/2023/03/index.html","6356b6f94fc01034839af209debab8ac"],["/archives/2023/03/page/2/index.html","e646782e65556536b0dbfbb6eb8ac5c4"],["/archives/2023/04/index.html","f5c0ed6dd9099956d5ee2d4c80c51b61"],["/archives/2023/05/index.html","6fa0a6996d022ba28bea34088a9908f5"],["/archives/2023/06/index.html","cf1e0fe8167e71b5abbc074c07a5317a"],["/archives/2023/07/index.html","bcb8cf83c929d2279cddbfaf17510fd9"],["/archives/2023/07/page/2/index.html","68068a3fd07a83381586907b79debe67"],["/archives/2023/07/page/3/index.html","faadd3e06a3cbf1dc01cc3f6beb32ef2"],["/archives/2023/08/index.html","85dcb5e0f06d253323ad86a2811e9ba6"],["/archives/2023/12/index.html","03ed3d0c7408609cd3babba09beb18d0"],["/archives/2023/index.html","73e446aad9fb1e9a75c87d39c398bf6e"],["/archives/2023/page/2/index.html","26602ce707dd1de48521c4510aa8e513"],["/archives/2023/page/3/index.html","1799fad1a904b1a5881c786079848206"],["/archives/2023/page/4/index.html","73da458c766ce4da884cb34a982de7b1"],["/archives/2023/page/5/index.html","416eb62e0391b55a76b5416cf8d7bcaf"],["/archives/2023/page/6/index.html","89919ea2344bd4cc5bfe0942c547c7da"],["/archives/2023/page/7/index.html","688cd42451031934082be2f109478ce3"],["/archives/2024/01/index.html","a49e141c4a1518b674243cc664125a3e"],["/archives/2024/09/index.html","595d8c9dd0109475701ec12c01214de2"],["/archives/2024/10/index.html","e5354d374feb25cef8dc149f103c4f98"],["/archives/2024/index.html","0ba59161be0dc85eb7597f9cb2d48ccd"],["/archives/2025/01/index.html","84a9aa1d8a104f484b117984395327cc"],["/archives/2025/02/index.html","2e06cc526fa7d251dab4903aeae4c911"],["/archives/2025/08/index.html","7a3b5d29024a5054eb720bdba7fd6891"],["/archives/2025/11/index.html","5f7b17ed3cc8b5fc0e6905e36fb20faa"],["/archives/2025/index.html","f980f1b492d8b434d5850919797e3010"],["/archives/2026/02/index.html","0da57df05c7ffc27961d06c23fe295d9"],["/archives/2026/03/index.html","2dc9c99a77304a7179fdbd549615123c"],["/archives/2026/07/index.html","adb4d084ed92ed46adb126c87fab7b57"],["/archives/2026/index.html","22635c5193f35970f4115cc93b4854ff"],["/archives/index.html","d7f5b7dc5f155820a58656fbbeead7bc"],["/categories/CPP/CPPBasics/index.html","60d1c57592c348ba2a4eb9a6e905c19f"],["/categories/CPP/index.html","536dff8b60810c30f40df25fd1e1d3ce"],["/categories/CSharp/CSharpBasics/index.html","f0dfd8b7c970a3da4963be463c4cca93"],["/categories/CSharp/CSharpToolClass/index.html","5e489761bd7aa12c22cd0718ca44c164"],["/categories/CSharp/index.html","b81cf786910b29f6cdb27273a8fb2e9b"],["/categories/CSharp/page/2/index.html","736c6a38bf0aa86b812c3b92674a02a1"],["/categories/ComputerBasics/index.html","740771fd3520759c22b0424312fe0dde"],["/categories/ComputerGraphics/Games/index.html","ccfe14622476d6775be392908e5325e1"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","00a89d07f3d0d2970416d7b679d36dcc"],["/categories/ComputerGraphics/index.html","3f8fad8a1f6301765194beb64f86b06a"],["/categories/ConfigurationFile/index.html","ee12f567a691ffa6947aafc1b368192e"],["/categories/DesignPatterns/index.html","e1c5b1c2ac4a668c80c36e43eed0e7f6"],["/categories/DesignPatterns/page/2/index.html","ccb5aca4f0e6fe2614bdeaa545bb1f8b"],["/categories/DesignPatterns/page/3/index.html","e2d155c98e9bd7c7e310721d1718e475"],["/categories/Lua/index.html","1e03d7422917a336cf80d69970a6cdf3"],["/categories/RegularExpression/index.html","2dc5c17e9c9367ad825e2f53ce86829d"],["/categories/Shoka/index.html","095450903045c8b1f998101b6ea8b973"],["/categories/Unity/UnityBasics/index.html","d92b2aa3e1bc6a09ffa7eff13f18999f"],["/categories/Unity/UnityFramework/index.html","0d09acf3ae2cbfb3fd4e80a0a63a6bc1"],["/categories/Unity/UnityGames/Unity2DGames/index.html","5b732d053eabaf21245720adfae6a6e4"],["/categories/Unity/UnityGames/index.html","91ee787bcfc0bc0b1717d3d611c04429"],["/categories/Unity/UnityRender/UnityShader/index.html","0c8509af4997fd3eb3aa1fa6d65d37eb"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","8a9133cd9cacd0625397c6af8cabbf11"],["/categories/Unity/UnityRender/index.html","75d71d7acee77b12bdd3415f004251c7"],["/categories/Unity/UnityToolClass/index.html","a568ea8d4447a8e80bc1765604e5c02d"],["/categories/Unity/UnityToolClass/page/2/index.html","e35dd793d384aa7f52408b1fb5db6903"],["/categories/Unity/index.html","4cd2820db0f8a97be27e77693db7f11d"],["/categories/Unity/page/2/index.html","3d6ce0a1bc7495d3f5473e42dcdaab64"],["/categories/Unity/page/3/index.html","97c5b4f0673b1eaf45c9fa1e57457023"],["/categories/index.html","4c18a81a6b0cbd33fd1c8aa733b911d3"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","e44cf65cd45e1ce44a40e5669d4bf61e"],["/games/index.html","8d0d47e68227b70f0266b74c6538fe20"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","3f34af0c88283dff2c9f661c2a6c3d9c"],["/js/app.js","9b788d2d502b4262e50618600e182d8c"],["/page/2/index.html","b71b3c2a8f137f616343cb7d049e60f5"],["/page/3/index.html","2cf5a156811cccffe319aaa7f0db770d"],["/page/4/index.html","4f3ff6a2b7d0311bd01c78961dcdf66c"],["/page/5/index.html","4287bc5a6ac91edd18464eec373999d8"],["/page/6/index.html","31e5b6d73326fa033bb50d3dfe8077df"],["/page/7/index.html","09e4db3eba6838415f4d72bdaabe7e1e"],["/page/8/index.html","05cd72be5dca8ea1847a2a88abcdfce8"],["/sw-register.js","a9a98e61e1994055b4a9de59d0d561e9"],["/tags/2DGames/index.html","80e4d0c2ae2d11add735492bc56b7cd5"],["/tags/CPP/index.html","22ba9af74be8424b18d6536958230d77"],["/tags/CSharp/index.html","0013bbc499914553f8eccb8666f4640b"],["/tags/CSharp/page/2/index.html","abcbd9d4d27e4c77f9ae43b1dd01cf49"],["/tags/ComputerGraphics/index.html","d17e3a8a027a76b9e040346b88251d37"],["/tags/ConfigurationFile/index.html","b3d9fe971143221134aac388c83d1087"],["/tags/DesignPatterns/index.html","43697091f63581cd4f73be74e6bd8dd5"],["/tags/DesignPatterns/page/2/index.html","de63df482adcdc3e00cd42a75598d41d"],["/tags/DesignPatterns/page/3/index.html","74ad53130f0d4fede13dafa7c68fefd8"],["/tags/Games101/index.html","9bdf1aa37ba8687b393124a6b2c012bf"],["/tags/Lua/index.html","8af3a08056b81d7e3ceec5acc71f9ce6"],["/tags/Physics-Based-Rendering/index.html","616931933fed2531b806d6d5b1629df5"],["/tags/Shoka/index.html","da92237ab092dd88ce826c01608c194d"],["/tags/Unity/index.html","24fcac211dd9152ba77492a8fb01d985"],["/tags/Unity/page/2/index.html","c796b98ccaf010ed38350f4966327479"],["/tags/Unity/page/3/index.html","8007d588b2ff81502e72ab9a8e6d6159"],["/tags/UnityShader/index.html","dd829e29a6a2915040c700545bc50124"],["/tags/UnityUI/index.html","f30757f25d10b43e7c7713f5d7c3fb9b"],["/tags/index.html","a56a44d5b2b7544b4af85185d999ecf0"],["/tags/操作系统/index.html","25d6febdfe5319d3c2c964b62f4431c7"],["/tags/数据结构/index.html","d4e6be503f0e62473743286edb611be4"],["/tags/正则表达式/index.html","6c94ff4c9f1303a9e3183baa1745acb2"],["/tags/配置文件/index.html","ab07d2a61bcf99d10e43c3af77dcce7a"]];
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
