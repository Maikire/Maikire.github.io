/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","c542ec8693b1201e203f48d4f67f918d"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","a21989450c749960e4e2d42caa78b7a7"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","edd34c8be09ad7065ccd50f2d0c6e662"],["/2023/03/20/DesignPatterns/设计模式/index.html","5d9305e7d66ea931ee45cc9650e146da"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","9c4813e8a4602c92df153538e90eab57"],["/2023/03/24/DesignPatterns/单例模式/index.html","20ef9f9d88aaf27779187ba0f87ee96e"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","d700ef8bd6604895c2cc82e1d1487b46"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","edaeb16c66a30c3a8d05ddd5b1dbc0e4"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","1ab15de91d5b14b41dad953e49d1baa7"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","700407cd6f88af943b8ef6e5316b9fe5"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","9eccffcfeba22ee5e0ff77501e405c54"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","54554bb18adce0078b62fea185db9571"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","aabda0c5fe6566cc45e1dac78a74125d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","96b56ba71e23e93d4c16951a55b0154a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","fb471fca51680c4ae57cfb6d457636b0"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","ff4e5b033f88f280b153bad56b082890"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","6f9955cdc5e417c008c1992eab026feb"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","1f0b749e23ee3e8969d0469b63749617"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","f042547a10d943354a3622e2adb11497"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","8db3251cc177019f9ffe82d207cae530"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","bca8ef4c9df9b91eb3d443cac36433a5"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","dcedae66c1fb1bd4c45e0bde79f54aae"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","79d7d1d964abeee4fc207bae0ebc72ef"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","5afa486e4a3d9c149e86d4e8c981f37d"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","2b53630b20fb921a2e3084c5ad414d7d"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","c63f429fd6aa9f72d4d604a3958ec670"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","ec34681057d9cb3230f04924cf163c56"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","8c9ab4f32a440046731064fc292bc8ad"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","d6b910a090743bcbd09ae19555e43c52"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","84fab3328d159b23335e26e96fb2e9a1"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","0cf29f3fbcfe73663803362ebbe83920"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","48846014f2bfdc62f7db726d3399f781"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","1847458258c0f8de6083dea1d94e4098"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","45f90c49caf05c99ea5e8be74442351c"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","5724a3cc79fc23fea6b42e0898100588"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","f0a286466bb01e010725f8c3847981cd"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","ecbc6fec9514f1e9551ae6b29bf8a5bd"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","b7fb1b4b27249172d268373cfe9f0f1c"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","25d72313485e80e4bf7998c72daeeaeb"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","8805cdf49530079b63e4115efe2f5a9e"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","d1152ff39e249f698886c4d49e979f31"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","25c13c037006565d92ec8fa23dfd5ce0"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","7a9cd72ccabc7224c768a95a4fd5aa42"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","0e6a3a4452f6203938a7837495978cbf"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","9330313a48230d2ab2a5810280545d82"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","98bac2864c7831c2d3ed82dca1b403d5"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","d99663a0893a11709aa0a67923dc080c"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","35c626361819e41ac37bcf47c2c71ffd"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","1386db94355247267c676e599f6cfbb6"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","53a80d98abbade50a73ca162180f0aee"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","4d75cac67006e4ee65bd40e5cfa9451d"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","ad2f7f18b91475ed1e214e0c813d0620"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","ec35cde8f91bf91719457618408e7163"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","cf81c4830aab01d1de8ba059a1397556"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","81c6253dc7292894e30a0709b8c3ffd8"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","22312277637cba1a61c7edaf7a8da500"],["/2023/08/02/配置文件/JSON/index.html","8b1bd1649bcfc7aa5ad5aa4bbe495a44"],["/2023/08/02/配置文件/YAML/index.html","2acc403a3e4643ea7060d81f5b2fbb96"],["/2023/08/07/配置文件/XML/index.html","ddfaa8e62fc5d7ec8a4976bf77b06f29"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","21dde58366e1ec8aa1055b29801a81ab"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","bb293f3dee2457a55b79a1e892c4387a"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","42cea7521a7965d59afe58db5ef8fe1c"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","eed2921cdc84e781722217e01615bec2"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","d26c52748c3b7e7ab783e415529e1780"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","5168879876f8ddf81fbe31cd3e96c4b2"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","db13891d86229d62271baffc9c79f68a"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","d3f39c7149be1391c9348dce42e4bc91"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","e07fdabc9ce368b32a86d5be503fb013"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","f82d0c4789fbd2a92b37db9a761f9102"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","d1a9ab9ff5695a70e24e96050cbe4e00"],["/2025/01/10/正则表达式/正则表达式/index.html","7534249899d7541bbefe0d26e7a60b30"],["/2025/01/20/Lua/Lua/index.html","25c20266f5930c670d53281e068b0275"],["/2025/02/12/Lua/Lua + CSharp/index.html","426b72acafdbd77bd40eee4b26c8ddcd"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","756b656f21320f7c85bc7ed5f49f6282"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","88272fb4cdf76fb8a70fd97bcbd65f66"],["/2026/02/20/Computer Graphics/Physics-Based Rendering/index.html","2123740edfc8342caf2561f4a6141b31"],["/404.html","8dd629793c32e69df68bf347ad4d7a1d"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","a5699e95b274eace2577b34558d8af2b"],["/archives/2023/01/index.html","0be5f42a2020622038136c6c5f95f00e"],["/archives/2023/03/index.html","5031fd4e67ff619f0605a463d1ba3f8c"],["/archives/2023/03/page/2/index.html","12cd70126adee6af202e9e4dfad1d058"],["/archives/2023/04/index.html","35490e59dca8e2f957e0087dcab19994"],["/archives/2023/05/index.html","37e8475753422a47686996cb9a2f68d7"],["/archives/2023/06/index.html","81c07549b3378a635bbd571cead815c7"],["/archives/2023/07/index.html","6c46ceb9fd5c6be072dc36ad317ac952"],["/archives/2023/07/page/2/index.html","828f5b50f88ac16ffe72276b603f7609"],["/archives/2023/07/page/3/index.html","474eaa698a3f667c9dc61e328f3b7c57"],["/archives/2023/08/index.html","5c57c8eee17e3dd332c47afcdf2c0e36"],["/archives/2023/12/index.html","6d6cef2b297d7e989bf1fc0ba218a30e"],["/archives/2023/index.html","744738357200ece6f8a27892ece60cd0"],["/archives/2023/page/2/index.html","7fd7aaf64285be75b89787d094664d86"],["/archives/2023/page/3/index.html","7b62b0bf9663289f7c0bdc9b8719fd65"],["/archives/2023/page/4/index.html","9e390158192cf01449b8b56edf0ada4d"],["/archives/2023/page/5/index.html","255125da4002a8e92f2e2b0295bd446b"],["/archives/2023/page/6/index.html","21f492119a76ee1feb877e76c73af76b"],["/archives/2023/page/7/index.html","0036d12a9a5f51f9e3ab8fd80be88562"],["/archives/2024/01/index.html","cb5aca1e35f294ec3eccc88c07e1dcf7"],["/archives/2024/05/index.html","a0b471f98ee1e0a021e1a9ff08169a3b"],["/archives/2024/09/index.html","514280d28683ef6bb56fe167ab86ea42"],["/archives/2024/10/index.html","1fc8d36ca3e07763873a52de906c07fb"],["/archives/2024/index.html","13a4c6780380d769e1bd67c8afd55906"],["/archives/2025/01/index.html","099a76d1b93e45bed96e505c151b32b8"],["/archives/2025/02/index.html","518a45a94a12749f261cc2d134234167"],["/archives/2025/08/index.html","144e94fd0d1b9108a3fae7c479134c58"],["/archives/2025/11/index.html","7cc41114389dd232f73096447664eccb"],["/archives/2025/index.html","093f5672c62942a755a36542043585f7"],["/archives/2026/02/index.html","dbc18778e6cfe1ff2887cdd8af2cfbed"],["/archives/2026/index.html","877848a89f2ba9cca0dfeb150220041f"],["/archives/index.html","0754e1fcb6686737394becc4dc959956"],["/categories/CPP/CPPBasics/index.html","8ec49ef8ec52c316ba3b91c12a5602ec"],["/categories/CPP/index.html","5df432e4cce4331cc013fdb11394bdbb"],["/categories/CSharp/CSharpBasics/index.html","075347e5532bb81903e04ab464d11a94"],["/categories/CSharp/CSharpToolClass/index.html","c0eea20a11dbe9d9c5c250bde387d60a"],["/categories/CSharp/index.html","86e195648090a9cf634f547a0be63973"],["/categories/CSharp/page/2/index.html","16a879cd41d8321ddb5459fdf30890eb"],["/categories/Computer-Graphics/Physics-Based-Rendering/index.html","97c5d043a367a480b28d5ecd48d00e33"],["/categories/Computer-Graphics/index.html","a08062e85600eaa90e11038e71eb34c8"],["/categories/DesignPatterns/index.html","e2645287d4322ea576b7ba660dac6d3f"],["/categories/DesignPatterns/page/2/index.html","d50430b7558e69bf5a47b922d6348256"],["/categories/DesignPatterns/page/3/index.html","55f863022192e94ee1d15bc3e01e423c"],["/categories/Lua/index.html","27d15419a9b9673a5b7b4db80ae7be20"],["/categories/Shoka/index.html","1bdd7ac78a6fcc792e07014c481c2cf7"],["/categories/Unity/UnityBasics/index.html","fe09127bb3124d87fc4675239212bbef"],["/categories/Unity/UnityFramework/index.html","a39e58cd96f9d988ce61455126f334a3"],["/categories/Unity/UnityGames/Unity2DGames/index.html","c69998d78d45a03f1e185aa2ec309989"],["/categories/Unity/UnityGames/index.html","b2d6d838b84bd1cbf2f97d16780bf6ef"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","c074868bb957dd3c44837be8927b6aed"],["/categories/Unity/UnityShader/index.html","2f3ae160b8a272053352a376ae8ffad6"],["/categories/Unity/UnityToolClass/index.html","667ee5261b286a0333db5af34479e97a"],["/categories/Unity/UnityToolClass/page/2/index.html","24bcdf6852bf0f49e30a22bfe01aa123"],["/categories/Unity/index.html","a8d07de9c5a48ce4bbb9b06eca6bfa69"],["/categories/Unity/page/2/index.html","27a0b0e94df1d52a3c1470bc9d0c63d6"],["/categories/Unity/page/3/index.html","c8c995ce99b74097e41a05efde9b4f60"],["/categories/index.html","200e1c69c53dd9020bf44b576b5e1a55"],["/categories/正则表达式/index.html","91edf11488b3c5685286cb7c2e8f14b3"],["/categories/游戏设计/index.html","d0d4517ff5df58fcc4433123f2509fe1"],["/categories/游戏设计/关卡设计/index.html","aa1f9ed6f967200ac61f977fa1db9cfa"],["/categories/计算机基础/index.html","245fd730aeb11ec3dd353c1d8757ce74"],["/categories/配置文件/index.html","3c929c8f1d67652c69da93ca29bbfb35"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","383c4b21f03d7dedab7d1e39e2739e59"],["/games/index.html","47c4b497f00bf35dd17cfb4e02e7300c"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","9c694584d1d255979a1a3206a62ffefb"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","19e51923482db3ff4243604cea3ee93b"],["/page/3/index.html","065b64fe75ca5858b29f5fba4861fcb9"],["/page/4/index.html","6ef00abfbaf765496c48a2ab8350e5aa"],["/page/5/index.html","64e79ee6dd39087cf61d04dc8f595abf"],["/page/6/index.html","e666338fcab85fc65baa8f972f1cc052"],["/page/7/index.html","b0652c939586a0f4d14daa346c69831b"],["/page/8/index.html","97250fbaa0c1bb9255152add137f8480"],["/sw-register.js","8ae9bf24c1294f87fd1f232cce494c72"],["/tags/2DGames/index.html","a3a5df753e287810407baaaba2b045e2"],["/tags/CPP/index.html","10b462554cdc9e0ad4c8ed9f70ea3765"],["/tags/CSharp/index.html","3a993b2913668a4df96ceee5fbd1dc52"],["/tags/CSharp/page/2/index.html","fc4457f44581daa9f555cdc2968c6348"],["/tags/Computer-Graphics/index.html","c27aa4ae40e3a0ec93f2316ee74bd932"],["/tags/ConfigurationFile/index.html","f84ef64d0e1fa3d3c9266ce33a871ff7"],["/tags/DesignPatterns/index.html","112816abe772796910d7cbcd8474e25f"],["/tags/DesignPatterns/page/2/index.html","ff1bb2b44caaeb56effc1d5b290fc4a0"],["/tags/DesignPatterns/page/3/index.html","c142dad7cce2c64ab780bb8f165226d4"],["/tags/Lua/index.html","a3876ca45f72470ef9a4e10f77b9a5ef"],["/tags/Physics-Based-Rendering/index.html","b806ad5eab9ac200e942b69ac66e1d67"],["/tags/Shoka/index.html","94c0812b24dec74864118381f46c26b1"],["/tags/Unity/index.html","985a9cd53e4bbd30680495b6a21207bf"],["/tags/Unity/page/2/index.html","623591d613fc052eb5c5d5bd6f5986b8"],["/tags/Unity/page/3/index.html","2244ea86048d0e4e1cdfd37f68d5aab4"],["/tags/UnityShader/index.html","4d8894d9929f79e5f077664448a0852c"],["/tags/UnityUI/index.html","da13b96e4d820e4b0c64b2d7ccbe3276"],["/tags/index.html","e14f985aeeee32d9be843166556cf623"],["/tags/操作系统/index.html","16c8383f02b601a87c3e2382a3ddccf3"],["/tags/数据结构/index.html","7d43005374527e2b04d97371c96dfcea"],["/tags/正则表达式/index.html","40a1452c4f54318b5fc3eeeb2035c925"],["/tags/游戏设计/index.html","0a63f9f192589d75c456246b6bb40b87"],["/tags/配置文件/index.html","06152ff03650875ca8474fbe6a8822f8"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
