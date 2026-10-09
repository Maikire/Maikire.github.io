/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","14688fa7da5dbf4dbb0181dabf5fc5f2"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","cd3d868b57825e195ed6506f372a7c40"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","c780c7c392574f1c07c5ee4f5650f744"],["/2023/03/20/DesignPatterns/设计模式/index.html","f256b71f9fd4428c4944c7c1f165309d"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","27e99ee79b4b09a1cb5b8a13586bb3da"],["/2023/03/24/DesignPatterns/单例模式/index.html","faa7fae8a645cd1d364d33f96cbbb432"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","ccc92895ff084a091a52dbd0a8e76e2d"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","7463d02f72dabcf5ffbb9470912bea8c"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","5e7d796dbb9b5fcfd39e8ad18f88d1d6"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","91f6091228d3460daf7ea11823568913"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","3180498cd89acf8cfc1e164a87b2355e"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","456adf0758e8547b284e9ee0f802d650"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","cac3a64c1b4b961cde7a7eb03c8eb1ef"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","930856f059d76a9ed24333ded66eab5d"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","2f4d25dda0a7407a6256d0ee5315db5f"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","adfa5b20aabad2a67e526a2ed2839f93"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","5b32ea8e4c1013b269739b0338ed7e21"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","8f33fe5e2c115f07d384c441b172015b"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","ab6ca5a65658d6c53664d19a9541517b"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","f5d1cff201f6eea7180b63202f4613e7"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","400ca0b4f902a4a08866f1940dbafeb3"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","34054b60951b6760dadb5390f29be693"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","d8ecf58a8224405c5afcfdd075ad0831"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","d3fa576559d3156189eac56beb1c6e23"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","e53a8b2c4ddb86d9caf71e7c9947db25"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","f1814283aa19116c28dd12cdbd1d8fdc"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","1908eb6bec0ee8fd7e9979be04549dff"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","b5459a3882f229750eb50b13dd078940"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","27b64c71bb8f9599ca35924e9258ae93"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","18a60fe4d0040b21adf2985bdda0f3cd"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","b0b327ac401530a179e625e54adb02a0"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","1ffa0dbeba834de59d3df2cd065315b2"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","619b3f130ea5ce2d36ec07d2fd36b487"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","25dcbe3844c85e88f826e841dae84ff1"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","91de7b28e9ab0c72179301742001d296"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","7aa3f8fcfe6093429a9672692264c6a5"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","f60b3b3d4b857499c1f0bee18d96bf85"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","b546ee8a471394c8011cbd039e0f5c0e"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","adb23df84a58d55fa78ef00a448f0db8"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","26ed9da579d7716c9199225856ae6eb7"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","7170ebc060c5af8e8a94a66e6eae0823"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","785edd84fea5995b9a247d14bbd36236"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","44c34f2c571a183fcc27357f2ec772da"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","77675891a75901cfd719b822be79b582"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","4d19880f0fd2ddffac07a13d2c49e6ae"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","e8cd43977534cec4b52436f35a57add6"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","6f2dbb8abe0a97638bab31a3742e9731"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","673db5b4c530a0bc3d93ee62b265159f"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","3d360b0bd6fdacc513639c00e73d60a2"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","adb0580add597dd1e65a618a2221aed2"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","0d5e19be63f4d4de4d1c20cbb90c18c5"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","9f60277e1b0c7f7bc2444642c792d2d5"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","640c71f7c4051cda0c95f7418e83ec32"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","64049ac9282631184049d81dd0007cef"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","52c827b65318eaf818f3841b298dc6e4"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","e3856f9f692ed10263e9b5afff5c5ad3"],["/2023/08/02/ConfigurationFile/JSON/index.html","eacbc8543dc7dbc2285ae09687452ccb"],["/2023/08/02/ConfigurationFile/YAML/index.html","e8b9ae15ece07a98e13043378df11348"],["/2023/08/07/ConfigurationFile/XML/index.html","1823d0149dafd3c39aa6799810da7fe8"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","207389023b04837874b420673a6449ae"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","0c9e42f5c4ac8395113b2435a464a839"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","60855e6e58dc50c697ca343c95cbe8c9"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","cdc87187c050f5f48c118f891a2e8e56"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","b435c51c328e974b1bca2395045f6f9f"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","fc25020661d8e2472263e404f6b31c32"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","40f01b25878631120155c15b74135a80"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","2b3d04ae48ce49c9e28d1f98eff66abb"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","e3f0993495abf7a0a569345e2af5a4a2"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","36a4c450ddb4dc4668ddf2fdca2e1728"],["/2025/01/10/RegularExpression/正则表达式/index.html","3c63a8562476f767327c3f8bba54b00f"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","197d4c542f8eb62c85bf6d5e05deabf3"],["/2025/02/12/Lua/Lua + CSharp/index.html","1a9497a1514cdcf83ac770db44750861"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","0903ea1297092d38162ba2d8198ed03e"],["/2025/08/20/Unity/UnityFramework/行为树/component.png","31bf183eb61fbc43f122c79a1ed086e5"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","017459d22daa1f0bf039fafe82a2a2fc"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","9370ee6eb535220d74dc4b5f191e4c6a"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","f18a9a761aa62190c865256ddecc26eb"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","8d03614d4c59ce502938e00709b4598e"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","a93ee1db371ffcb70fa1c5d83b02fca9"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","cddb803aa579c1c143690b2daea4c871"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","e329405d5bd4f9710478ead1f48870ab"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","8b8460d774b725479750a62284a0609b"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","f1fd0112699ccd003e5b0e23041c4f36"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","ad86f1626ebe0182dc833b81a4ff13fe"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/404.html","05f57684bc31c85f9f92afafc6a9aa12"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","216b9e85594ef33d1d5f607fe1bd6876"],["/archives/2023/01/index.html","31932af85fd05b3febd83544c849a2dd"],["/archives/2023/03/index.html","2723e51baa8b35f22d4bf6eac9dabc4b"],["/archives/2023/03/page/2/index.html","4682309b614e56eb552d30a85e3056b9"],["/archives/2023/04/index.html","f2d50ddf43285999d9a99696bb0f34ef"],["/archives/2023/05/index.html","691caa9668291ade6a0285bd74f6d408"],["/archives/2023/06/index.html","1fc4c86401dcb45e41b09f3d7ecac62a"],["/archives/2023/07/index.html","7c0099f1297251df5306769ce81e05ef"],["/archives/2023/07/page/2/index.html","7d0ff43b4f587d6ad79dfd83ba934945"],["/archives/2023/07/page/3/index.html","13cd66cf56fba173f7f018215809b3ab"],["/archives/2023/08/index.html","f4f2538713b1caefd0c374e9d059ddab"],["/archives/2023/12/index.html","db6cdde0f4d1edea879c2da36ab39545"],["/archives/2023/index.html","8fe633673198b342512ccc33668126e9"],["/archives/2023/page/2/index.html","bc24053f6404c071d5487bc7f9f996af"],["/archives/2023/page/3/index.html","64d56e5ab8ff6eb0bb1906b20aebf563"],["/archives/2023/page/4/index.html","589d73d615b8f1c4d40a5dd1033c41e6"],["/archives/2023/page/5/index.html","a1730f8698333d00cbfc621a47480053"],["/archives/2023/page/6/index.html","6160f5e0f5b85778875a083e1607afb9"],["/archives/2023/page/7/index.html","5db3eb80be168632b907fe73f7b23d4d"],["/archives/2024/01/index.html","09cb58f0db263ec94721a1cab45ef94a"],["/archives/2024/09/index.html","66027d396ece22f3cf81262dcf8372a8"],["/archives/2024/10/index.html","0ffdf8ac7d6c3f4c23dbf8f91431d866"],["/archives/2024/index.html","1bf4cd5f2616d2dd0ac4236dd6f897bd"],["/archives/2025/01/index.html","4a01dcf325439198b479f89e9404a0fa"],["/archives/2025/02/index.html","dcd70ed890bd3ab3f3212a14429429bf"],["/archives/2025/08/index.html","508f19da8a8f8fef27e26de0a833db10"],["/archives/2025/11/index.html","5268213587d3e4cb69c4b707cdfa4485"],["/archives/2025/index.html","da97d44c424e511c5d2d6b8582e6564b"],["/archives/2026/02/index.html","fb5ed9fee355ca6a04f5cef08792c131"],["/archives/2026/03/index.html","b74d38ac1f35c11ce9bb92c9b3f83777"],["/archives/2026/07/index.html","b54b2c3c4d0c29f73b44925dc7c5b777"],["/archives/2026/08/index.html","5251a010cd126ed48e424c8798d07f93"],["/archives/2026/index.html","d04cb9f9046374b8cc446e25df46ae3e"],["/archives/index.html","4f9ed2789a996bc4c061ab0d008edf7f"],["/categories/CPP/CPPBasics/index.html","942398a2e27809f5885fa33eb24eacb3"],["/categories/CPP/index.html","1df48b2eb091fe2367272e606c1f826c"],["/categories/CSharp/CSharpBasics/index.html","7fb9b2fd0533aa98cabc8bc21fad725e"],["/categories/CSharp/CSharpToolClass/index.html","59825fcc574396b9e6ac7da976a9769c"],["/categories/CSharp/index.html","8038e54c8937b4da942e81067ddd2f9d"],["/categories/CSharp/page/2/index.html","dd0f79aef6bbf73e46579c4a60864bb1"],["/categories/ComputerBasics/index.html","1561b16d65a6c2139fc5f8b0584b69e2"],["/categories/ComputerGraphics/Games/index.html","2eecf244705c93e85f2d6603fb136bdd"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","d186fdd5d83e9f1a6362ed02eed1604b"],["/categories/ComputerGraphics/index.html","ca41355950490076c6fe167c97952350"],["/categories/ConfigurationFile/index.html","503b275bb00aecf3aa49f4d84e88cee0"],["/categories/DesignPatterns/index.html","285c9041bfc2627111907a53667dec5c"],["/categories/DesignPatterns/page/2/index.html","e37b5a9cf78651c39ec7c8180564f208"],["/categories/DesignPatterns/page/3/index.html","a3e80cbff88379ca46aab856589f6089"],["/categories/Lua/index.html","32885bea44817febcf21186680d7e768"],["/categories/RegularExpression/index.html","5b2eb1af883d1bb0ee69d3f425f9bcbe"],["/categories/Shoka/index.html","d5d0cb150d91db05d831912b2b88b93c"],["/categories/Unity/UnityBasics/index.html","daa77fc7b2fecf334d22345d86d87033"],["/categories/Unity/UnityFramework/index.html","00b78b14bb7ef47c28955571fdb6a52d"],["/categories/Unity/UnityGames/Unity2DGames/index.html","adf861256397d768e1cd7bbc67f74823"],["/categories/Unity/UnityGames/index.html","1366bb42c72d556afc818f9c8a605d4b"],["/categories/Unity/UnityRender/UnityShader/index.html","dcd274430d8a52914b90ca148a618115"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","92e3aae278cbc69851d79be9670b7f6c"],["/categories/Unity/UnityRender/index.html","3e41307b9fd456bc436b8d0f72b97c5e"],["/categories/Unity/UnityToolClass/index.html","3eb726c0db626866b7869a9614515b0e"],["/categories/Unity/UnityToolClass/page/2/index.html","84aadc3ec11dfef39f270146151fa0cb"],["/categories/Unity/index.html","96c369550e0ba593f3a065aaae231a52"],["/categories/Unity/page/2/index.html","1ba1c9394e542d0bcce3fe3f56ffefc8"],["/categories/Unity/page/3/index.html","44d7a76d9bcb6093647b0fc194e6f953"],["/categories/index.html","c8da48e71376d2f36cdb4be5bbe6f5f6"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","6e6ec3e74a4c8f259609527df49e10ee"],["/games/index.html","ff771ebe50a9f82cf2663d8991d98fdd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","883f77fb862dc93f385c07bce623e061"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","dc7d45b144a32e3d88197835c696d7c9"],["/page/3/index.html","30948ad27a8e0d063acb06bb7d1c0f67"],["/page/4/index.html","93bf14a5a326a8547f01f15a2904c8be"],["/page/5/index.html","a8e8f2a3ddf01dec03d6e2fef5fd2a9f"],["/page/6/index.html","31eac4567fa4cdc469e3387fb0577fa2"],["/page/7/index.html","5d2ffd187fb8398f8b9d2ae1e7f062b5"],["/page/8/index.html","0cbb58152986b97507b5054179a057de"],["/page/9/index.html","3385ae05a08864e4f81b8ae1c588d127"],["/sw-register.js","370b0f41ff9f14d9a0b4fec52a55cbbb"],["/tags/2DGames/index.html","acb79cbaf79f529baf09f49e2ceb2b7c"],["/tags/CPP/index.html","eb042c1e5ca3db593496a3d1d16e578a"],["/tags/CSharp/index.html","302e4b212e04eb86edbbdf774a28b1c2"],["/tags/CSharp/page/2/index.html","ed6fbc30345705cf910a9e5e0029da1b"],["/tags/ComputerGraphics/index.html","5d288e7693212b523dd2708a1257736f"],["/tags/ConfigurationFile/index.html","5bbe0358f290aa8de59b3ad2b5168ac2"],["/tags/DesignPatterns/index.html","ba1fbb114c15333d1dff88a07d055d61"],["/tags/DesignPatterns/page/2/index.html","839fe3d2a8f12d9f2f68987bf5594624"],["/tags/DesignPatterns/page/3/index.html","04bed2e3af7968a0128dc3b4d5bd68a3"],["/tags/Games101/index.html","33a831aeb2a662b793dd53cdb09ad0cc"],["/tags/Lua/index.html","ebe6d29b8b68d14a1d0d64e09a4e141d"],["/tags/Physics-Based-Rendering/index.html","9350c721c6a4de2100746df426658de6"],["/tags/Shoka/index.html","b29672b0c23d94f802dfd5cd5931ae07"],["/tags/Unity/index.html","9df8cc6005d61862ae09d15e062a3afb"],["/tags/Unity/page/2/index.html","f78d52788947dd8784a652ccecc5acbf"],["/tags/Unity/page/3/index.html","8f32aca408a7eab1703639db7f6fdcde"],["/tags/UnityShader/index.html","3f229aaef14396b8d15dd9724a103d9a"],["/tags/UnityUI/index.html","1966536a267fcf852add66213395ea0a"],["/tags/index.html","f5c313a6d640a424bd84e98576713ccd"],["/tags/操作系统/index.html","321ee357e2cbc4e6fc07da4842da0050"],["/tags/数据结构/index.html","4cafab4b07517955a8009fee2f430b12"],["/tags/正则表达式/index.html","a1e1fba952e9e02835301fe278372f00"],["/tags/配置文件/index.html","09e802def3218015f17bcf7314de9b7c"]];
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
