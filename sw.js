/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","4367458cc411f574c294feaa194959f2"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","174f1946c56c23648fe561552babf7f2"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","333644b541f983df7216fa6921707bf6"],["/2023/03/20/DesignPatterns/设计模式/index.html","60e49b49f8cf223a32f3fdc2d2f63e77"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","f8ed3ba88da14d6d840cafdd37bf7036"],["/2023/03/24/DesignPatterns/单例模式/index.html","12e24b74ae1190fa11dc7bae005ae3ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","5ba5bd6c6b0ec75596cd6127d510470c"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","c200f00f8e6551d9c10cabcd859fecfd"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","c5076b987570cf4c446216aac7ce6f1c"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","b696ad03739909f2b7ede71af7d143a3"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","273c6cdfbc5e6a20fc5d55cae57276e8"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","82ef49c5569c5940ccf36627a619f19b"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","7b52c46058472142c0389cd8f8f0fed7"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","e60672ea4812d0d6580e643b57a7ae45"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","161b5a3084c8ab392374c1b0ad6ca867"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","2f57d684d00e9eeb7985b624858f87bf"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","e6e0e3a144c5ec5a0f02e23966cf7158"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","1cca1464c2b5c09aeafc1ded329aa93b"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","2b5414ce793bfe675ec3d3e67acb2a7a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","59164eebb14474c9a79cf8ec90cac7be"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","81b524d7b80b4eef8310ddd0c7759829"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","2582084663364f3dec8a99681ef165b6"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","dc45d58ad40d93b3ce0bbe729e80adc9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","10241082442ae6ce673b78578dae0b0a"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","9126d06f224f6850c5c85b8ad19684f0"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","ba32f51bb5d34ee25658fb94e44be703"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","6f4241221094b0dc16cc36444f514e06"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","acd148e707a525e64ff0de35425cc64e"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","1bd18715f35953165c8029829029329e"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","32ff845df858871a9b4f22292907896d"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","3c6aa006dfcd2daa8ebecc017a542803"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","d98aacd57ab068c0b573d3687495abe5"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","f6e22eab197e07d203e70c7f517935d7"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","a36a8320abb2c0ea420ebe51ba0e9744"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","0452cafa35f0a9fe7f06aaf962f1472d"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","b61c65c38d38ebf0c98f0ca6334e12a4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","cd467bcb29c0d759833a9796d8b725e5"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","3a54f27601606a199f88a72c205222e7"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","43c72807c2dea8bb1eea6ddd4f7c8716"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","4b30537be89125ffa7a00db31357fb52"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","c4510ca0d9061c0d779cc21ac434fd47"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","d2523063600f0c39d61c015af740c31f"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","49f1ffffd50353e175694f1bac40f95e"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","4c508b956db44b7953d119aa75917638"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","1d203e6bba8488a0681d3cd7a3d79f11"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","5e05ed702dc700d69f31c51c59eba8fb"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","1f21e86aa9f8cf3f4cb3231132f0e334"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","a2d1f6e56c411f60fdca61b97f1308f8"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","0f15b878e4e867ee2ef40ca7ce12ed30"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","50eefc0f18bc69ba05342ff4b14b48f1"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","2819c92574bb9ae8203fdeb308c3de10"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","fd10037a82ca0623e5b6006d39b83971"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","db86d324efc7ec5c911d389dd7ab9a10"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","291f978c3b774b99c522d00443ac2017"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","a76d21a194550dd8d866dbc691610ee1"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","603b6577a7a02d5c7c02070f9989aff9"],["/2023/08/02/ConfigurationFile/JSON/index.html","aeef5827268691ea3dab2938814042bc"],["/2023/08/02/ConfigurationFile/YAML/index.html","57ebb121d423bff90416d7be4aa376e3"],["/2023/08/07/ConfigurationFile/XML/index.html","e52fcdcb93dea0b0f56f55d727a93ad1"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","26b6b16fc065e18e615e91dca8009d99"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","859f93f1dba025e768af04e4df49e3d0"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","9a16bc4943e9355da37615a638f1ba32"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","ded188a3911816f4c6173a8a1b471769"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","3f51768668e31e76aadb231d516b7b1f"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","fa58b1e05e7fd57d2523dea9cab9e14f"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","a3d2c740596b68cbd4b227f3b9b73180"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","fb4aec93153d91d64da255f14b7c00ca"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","2dbf77b0e1be001f8f2d58e752d78da9"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","e8e282cdd2dfd319e19930cdfe98c571"],["/2025/01/10/RegularExpression/正则表达式/index.html","a48d4f0a0b0aae1172d17fc5159133f4"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","cceab403a2f1e1e399582d2fb6241352"],["/2025/02/12/Lua/Lua + CSharp/index.html","c72556dc0022c37ef2aabbd380b8ad2c"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","9f6d9f19b46297ac5f410222b88a1f2f"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","6c6465eabcf1a68ae7cc763492dfc1b2"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","c973c7974268e2bc191fffaeafda9a59"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","ecbc3bd9366c0078f31eaed837eba556"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","11b8a3b6e0fa4d97b09e8332c2299bb7"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","a9ff83358e30936379a384ba3a6e659c"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","442b749ef0753ed706f846232f9ab979"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","ce690d204d2d75aec982d59ffbe9682d"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","73a12a97d2ae9b4d109ab458b33e1ea6"],["/404.html","90a084dc405940609cabea603e4f5b3e"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","7b39a2a50505c2e236c93af8e5e12017"],["/archives/2023/01/index.html","95cf85ba34fe62223637d2cd35fbcdfa"],["/archives/2023/03/index.html","93240535046af9b9a9b6781b2568d4de"],["/archives/2023/03/page/2/index.html","dcbe4c24c9d164d42ca48d9737844949"],["/archives/2023/04/index.html","92ff9ee480cde9d7772f0e83257c1e27"],["/archives/2023/05/index.html","562e7f6f60cc6ff8b1ad78cd3f6ef4bc"],["/archives/2023/06/index.html","46bd194b5f8ec6b7eec9ffb5cbe08586"],["/archives/2023/07/index.html","890622c4eb99ae702b4cd95deadf35fb"],["/archives/2023/07/page/2/index.html","2ed48a08e82a2072244ca50de8b28fe4"],["/archives/2023/07/page/3/index.html","fc7364e6c61cc1494cd013300945a6e8"],["/archives/2023/08/index.html","50fa6c39423086c6d9b8a762061c0b20"],["/archives/2023/12/index.html","9269619f6ce91eee2ccae254d32d894b"],["/archives/2023/index.html","285fab8b85634f71d56a4606cc5b41ac"],["/archives/2023/page/2/index.html","1f6c100820b34496089f1ffd46e259d9"],["/archives/2023/page/3/index.html","8682cd05abf198e92f3f1d28ebb5bf0a"],["/archives/2023/page/4/index.html","732bbb09aa617653a87b61f5e0f2abda"],["/archives/2023/page/5/index.html","7160b526db44546309f0d33b8cd13ba6"],["/archives/2023/page/6/index.html","a3b433df7d69e56b27f93431527d97d3"],["/archives/2023/page/7/index.html","ea108265a943e6d0517cc615fb4f5488"],["/archives/2024/01/index.html","5075ee1778a8132707167cf3cd804de8"],["/archives/2024/09/index.html","769a485ee28c446d817d92bf676093ee"],["/archives/2024/10/index.html","717115392758ddaf618d5e1e280458ea"],["/archives/2024/index.html","2369ed3f674702ec566e88d675842529"],["/archives/2025/01/index.html","5fcf678423c77e381ed3d878d2d5832c"],["/archives/2025/02/index.html","c6e9dc6302a58158d0f3f87c539ededc"],["/archives/2025/08/index.html","6e55e622f56e168e8c43de26ab896f35"],["/archives/2025/11/index.html","d46635004e4d2173c8979da36c43e7c1"],["/archives/2025/index.html","6243039af3eff4899a5c946889a950e6"],["/archives/2026/02/index.html","cc6cdc79c8b6a400cf9b5db9aa093213"],["/archives/2026/03/index.html","3a6c8051378576610d35a4f6f360c731"],["/archives/2026/07/index.html","def634244197a2039a4e5ae657e72f75"],["/archives/2026/index.html","9784f4ae7ec1b1089a33e212ec12fdb5"],["/archives/index.html","b9bfe1c4756899faf864f73144fabced"],["/categories/CPP/CPPBasics/index.html","0345207e2602926485366757af557cd4"],["/categories/CPP/index.html","d9c7faee4d6cbaa578bb0d1c3b081bcc"],["/categories/CSharp/CSharpBasics/index.html","c3bea2646024134ef38bb34736bdc483"],["/categories/CSharp/CSharpToolClass/index.html","18965fe99967b8d4c4a119fd9d360b6e"],["/categories/CSharp/index.html","489f54b439a7ffc950f9afc298759788"],["/categories/CSharp/page/2/index.html","5975613202a5701e45f2824eadaeefe2"],["/categories/ComputerBasics/index.html","4378ab0acca256b4b73357713e3269fc"],["/categories/ComputerGraphics/Games/index.html","8069417a1f8bed56c211050072b87bf9"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","b0d95cea2c16b2a7d8afde6ff9cec125"],["/categories/ComputerGraphics/index.html","513ac401e4a785a63d58965dc5970150"],["/categories/ConfigurationFile/index.html","10d2674766d6bc431b5e905ee2dc8035"],["/categories/DesignPatterns/index.html","3f87b5542a08f05061b5a1c0bdd3d238"],["/categories/DesignPatterns/page/2/index.html","5a89fa330308e75415cc7d591402e73a"],["/categories/DesignPatterns/page/3/index.html","b681c803f39e111ec48de77ff5adce86"],["/categories/Lua/index.html","8642b806a73ab4d7b9d48339ada18027"],["/categories/RegularExpression/index.html","eea97ed86bf517aa30c12ca629f5f288"],["/categories/Shoka/index.html","e762479c45c46ef3f32601a0bb195e1b"],["/categories/Unity/UnityBasics/index.html","a8c43f91ed88b403f0b7be75e40bab40"],["/categories/Unity/UnityFramework/index.html","40b55ed4b48a73cedac6884735ae9fcb"],["/categories/Unity/UnityGames/Unity2DGames/index.html","7b624dac80b52288ab467136860c6139"],["/categories/Unity/UnityGames/index.html","e066eb8ad01263f4891ca0b68fa5a657"],["/categories/Unity/UnityRender/UnityShader/index.html","303da9a6ccc133b2fc574304b6d6dd48"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","bff5f958bed4b01698d21fec937d83ef"],["/categories/Unity/UnityRender/index.html","bc34727adc0cf18ccf488152bbd7855e"],["/categories/Unity/UnityToolClass/index.html","5e17303a693d4fe5d0e7de7f0d6a48b6"],["/categories/Unity/UnityToolClass/page/2/index.html","009bc3c72bba4daf94cec3ba351ac166"],["/categories/Unity/index.html","0ff97a01994667f6d498a134db08cdd2"],["/categories/Unity/page/2/index.html","064caca4c613148c33c8d4ab9cd77da4"],["/categories/Unity/page/3/index.html","dd8bb8957bdebb082fe2c44eeec1fa5e"],["/categories/index.html","08ca4a457fd986e94fe6542cde2e64a9"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","d890ac3092a538eb98e2d1d2dd0b40b0"],["/games/index.html","b9eb4e2689d2bde8f713de856cb49018"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","fa3461b7083cc33cb97e082115efe9b6"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","dae895a2cd135bec33530d2dad4424c9"],["/page/3/index.html","99da0d929366c47093b3d95be40c7804"],["/page/4/index.html","ba3b73fa125d0b4b26bbc76ea668d770"],["/page/5/index.html","b41eed402a535ae09e7738b2a6d89a6b"],["/page/6/index.html","806d825c5827a4a36e0696bfc008325d"],["/page/7/index.html","ed3c180e6d371b828bf6c65bc5d8edd1"],["/page/8/index.html","a97ea01e53fb94962bfcd0b4ec8a2f3c"],["/page/9/index.html","f2461e4a77e99d646c1851f09efe8812"],["/sw-register.js","05a2cff4f09357e6360804e002e90bcc"],["/tags/2DGames/index.html","4bc035dd1ef054fb4e05d77b6f8372b5"],["/tags/CPP/index.html","9531fc4ff459a2a6a00ada2cdc813167"],["/tags/CSharp/index.html","5517f2a3e2c55c956bdc7d13956efbad"],["/tags/CSharp/page/2/index.html","c83ad6ca05811134e12d1d31713fcc87"],["/tags/ComputerGraphics/index.html","5e2c5bf9de3655ed94996de178f1de8f"],["/tags/ConfigurationFile/index.html","4ef60310cb93727cab8fb2611c8db8a7"],["/tags/DesignPatterns/index.html","e96d992a4ab46a4bfe71b1a2b3c15b6d"],["/tags/DesignPatterns/page/2/index.html","0c2c691c43b3fd9ba59f26d64d46955c"],["/tags/DesignPatterns/page/3/index.html","4c7019caf9e14bd130e32a4a7d6da2ab"],["/tags/Games101/index.html","afaac56ac80827e7717b0218cf13f930"],["/tags/Lua/index.html","2899714384d5a3da0e8674c236081886"],["/tags/Physics-Based-Rendering/index.html","0d58ce25b05885757caef68ad257f12b"],["/tags/Shoka/index.html","62b492e2dd877786e7be472e21cb445b"],["/tags/Unity/index.html","3a1d6974594fb5f7cb942e721d5ae3d5"],["/tags/Unity/page/2/index.html","a9be269eea52f76e572d4cd354c2431c"],["/tags/Unity/page/3/index.html","a01d1d8f36c81ad197dc6aa196a0166d"],["/tags/UnityShader/index.html","3463b68be1ade56c6f5ae70f358542fb"],["/tags/UnityUI/index.html","897899b0e202e0a38cd099ce57aa36dc"],["/tags/index.html","0af52a033a8fcd786d01cb119f08d126"],["/tags/操作系统/index.html","b1b347f8cbe4e57be53adc329fd6f72a"],["/tags/数据结构/index.html","0dcb7bcd994eb8e26f055751a89aaccf"],["/tags/正则表达式/index.html","b7aab8eb5c3e2bd4a532c3b108a56b91"],["/tags/配置文件/index.html","4640344736a5cfa255f1afc70252acc5"]];
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
