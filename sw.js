/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","0809008f2d316c3219678127727ea63d"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","6045318e2855d2c2cf019b50abd9d99a"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","d8734a5cba53f1fd0cb0b4d55a20825e"],["/2023/03/20/DesignPatterns/设计模式/index.html","3c493a39d4e1d08c2cbee7f77d19ad17"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","c667e9abfc9eb7346981e4c20540ae49"],["/2023/03/24/DesignPatterns/单例模式/index.html","90695f83d509775707048f552eea4270"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","217edb4061b3a01ee9d433b1e8f9caa9"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","4ce725fa145519c8674ce772db50f67d"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","fb80c652f13df2803ecd2f6084e6fee6"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","094351d735b5c501e75559d361090677"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","07223aaea5dd4677bb1044c39c43a590"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","a85dd208ac79bf3b98596d4dcaf25f9f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","ce98ac77d879f1906d0c0a94a7be5ff8"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","2788396104224c6606f3ce44d5189d81"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","c3c446ffc93b799153607aa4ae151a66"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","94f650fe7922354b638372cecbc22c41"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","e982b8f211a5150cade92a612003402f"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","de1c4db06d6a084bad6041bd79168b92"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","cba2c3d6f1d5b60a338d7847baf93800"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","b37c02a1d0c4af8e7ff4cd62a742a222"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","eba303830711c00501207a54d012bf01"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","c4732e459c1a2b7ddc7b388523861525"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","9e58e26c82d83f8abef0cb4c686ecde1"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","fd49f6d84e9961de6a468f4040f59cf4"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","1306a94c97c910dd95b4124a0bfe4a5f"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","e6ec63158f0c511ff13286bc6c4b1735"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","44b0fee0be98162e10cf6128cface65b"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","32632e179c2c83ecf7ea6eea5ea66fad"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","1f5e84991f911b560149620dc85eb81a"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","2368cfb0224eecb13a1e968de6a91caa"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","c9c52ff26c800ca16dac3dbf78bf1924"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","b8e74d69bd71e977677b5eda7793a69c"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","d04f1ee819bf551cd5c67d84c22405ed"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","4ff32b94618f88a3024927b2f5289fad"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","90b9f41836870b3ecc27e4b581c57f39"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","0e8b131a16e59e7d094558c36fd32ca8"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","2d9ea905747a2f599adec78e1967de31"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","504510365b78fbbd58b2fa6359b08432"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","d476a00d69768be28d390198e75b0eee"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","9c7b9bbaf774422c6920e464b2466f52"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","f51587307c4c9be834da3b3177ddc3f3"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","3bd761412c860ca1e1b17e6f7fdaaedc"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","d74ab14055f71e180941a515351291e5"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","adc70570786a92a7728f41618a07df67"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","1ea9ddef1ce1af225dcf20acde15f004"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","f8ac9697bf0ee06d80ab6d7d8295e160"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","dbf1aa6b8088a7620b5f3f06b89b6c8a"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","628a524dd004c9833c4da466688ee13e"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","22cbdc9508fb5f8fb458efcf3f1fb331"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","980123de6f87b0074b85da8e84f794db"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","368406d53d2729ab76b54c3a42fb47af"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","030b4e1579210fc6bc6cca4f383201fa"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","7fe97a408b1e68aa740828eb77591e33"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","91d8ab015e9378bb139b8e4fe7ae650a"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","81d328bf8ec1f2b434cc50fd7b0977d6"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","8bc71f959e29880dac630b57060fdc42"],["/2023/08/02/ConfigurationFile/JSON/index.html","2e8dcf9c1d6413e61771b09889695740"],["/2023/08/02/ConfigurationFile/YAML/index.html","6952783c2aefffca430bd3e6c13e98d1"],["/2023/08/07/ConfigurationFile/XML/index.html","9038d410caf10fd05e92ac03b77906cf"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","a9f3cc5258e308f7465e0aff01f7cd58"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","8cbdfc13daa0534ddeba63c525bb90de"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","87a461302796d200e83dcd9ef65b3e9d"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","146769f38510ed08a9ac35736ffd76b9"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","133683cd6ebf4b9c56ea34176f8e09ec"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","25cdf682ec97b9480286bd6456a6134c"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","6677e8e83fbbe18478c9babe366966cd"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","5b0b4b4f519bf840b737da6769ec129c"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","72fa6a1023259e4107ddba73e0344dd8"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","dd3c14adf9987665764e8c914a524333"],["/2025/01/10/RegularExpression/正则表达式/index.html","2a5f7f2a3f1c4ebc518f14a1185ec9b0"],["/2025/01/20/Lua/Lua/index.html","a17da9ec30806b2927304e45432db976"],["/2025/02/12/Lua/Lua + CSharp/index.html","37097be3070b05776d4f71ad9b94f43a"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","64f6b9d3e40309c277960addd6713d8f"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","1befa866f47a56ab39b015a25159c8b7"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","f138d54e532885ae4bd61fdd2ea2f14f"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","30772ab8230c80b77c264e271af82421"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","998cc56f616a392ed95e79e778f5c393"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","ff07e6dc9d159239d4e4005e1d369735"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","3b8f11f61f4609ad0f2643249766a027"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","270617cb1726aca8cabd63262e36a22e"],["/404.html","73aac7d71d500ed31192480e6ecde6cb"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","c0449eb41a1b7131b7665cef3a532003"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","0cbf137a5fff0921480e1d58d59d8395"],["/archives/2023/01/index.html","980d1eb3490dcc0134d70e6553732993"],["/archives/2023/03/index.html","b9311f4c674a98d49fb3a48bbfc5934a"],["/archives/2023/03/page/2/index.html","753ff1915e643137415c39b7d20a58b4"],["/archives/2023/04/index.html","018c6169cad8b05ef739f2916753a86c"],["/archives/2023/05/index.html","e890a53522ed0523792e0adc7bdd0af7"],["/archives/2023/06/index.html","a6c11f4db1b9f51fa728278172851ead"],["/archives/2023/07/index.html","808abcdfdc3ed63ae288f5a897a92c2a"],["/archives/2023/07/page/2/index.html","165ba7e1317ed82e3b0cbd2b8c85e86c"],["/archives/2023/07/page/3/index.html","b303c7160ad5057807572a18349e8f92"],["/archives/2023/08/index.html","e60221d05fffc62efeb9f66aff4d33f2"],["/archives/2023/12/index.html","01912f35d9fc7deed5b0eca446c6c5b4"],["/archives/2023/index.html","3371e81a7230c4cf5269814af5b8930a"],["/archives/2023/page/2/index.html","05368fd0ab086ff91427c32e660f43a8"],["/archives/2023/page/3/index.html","fed6ccd32eeaee8edc9f8e4df259b3b1"],["/archives/2023/page/4/index.html","7b80ded385b525e3ebff3f0d041360a8"],["/archives/2023/page/5/index.html","172a1f92f8611b3da5a466122fc37ad1"],["/archives/2023/page/6/index.html","157ffa0a0e19d0ce6672c6519a6c45bf"],["/archives/2023/page/7/index.html","d2d1edf54865cbe80cc216fd21f3d8e2"],["/archives/2024/01/index.html","b7e5287fd358484e2fe6296f779aa456"],["/archives/2024/09/index.html","1a91330495a3cf133013c9275597e01c"],["/archives/2024/10/index.html","e99d02e6930147d5292c32dc3568c774"],["/archives/2024/index.html","e6e81366f6f8407698831ab071a7da2b"],["/archives/2025/01/index.html","8719cac613360a864d575021d430119b"],["/archives/2025/02/index.html","bf8aafc8d3c815eba1ed12511a437e2c"],["/archives/2025/08/index.html","ad148f6506cccc01b8b11f539424a068"],["/archives/2025/11/index.html","96da7dd550df5306bb3089e6cc4742b4"],["/archives/2025/index.html","4c8d8b2af0edb15c436b3c04ad02ec67"],["/archives/2026/02/index.html","b3313da074876e949acb14574b119926"],["/archives/2026/03/index.html","7d35d5260ed3fd2c62f4ee748eec4a60"],["/archives/2026/07/index.html","b3e123c98f157468599c78131739dc3e"],["/archives/2026/index.html","8faa32819419268788c0761040f6ede5"],["/archives/index.html","5360f5a683c7bebdd0a5b5975031d3b3"],["/categories/CPP/CPPBasics/index.html","476108d94efe08f0bf364df9c1a4e362"],["/categories/CPP/index.html","a39b0946921cf25144c1e65482bcc7c7"],["/categories/CSharp/CSharpBasics/index.html","644ede8f3a1136b47f1c15526417926d"],["/categories/CSharp/CSharpToolClass/index.html","43a750a038c9f8eb7a545fb166bdfb05"],["/categories/CSharp/index.html","701f1090aa4732b20e5c24445fe1c404"],["/categories/CSharp/page/2/index.html","08cdeb3cb09bb6e369ce0b28cb064c0b"],["/categories/ComputerBasics/index.html","f0d88991541daec2e67b7d0dd11dba1e"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","b19ad84876e997043b3a61410053704e"],["/categories/ComputerGraphics/index.html","64d887dde49ddfa4adcd55c6b77e9e0b"],["/categories/ConfigurationFile/index.html","5189a47945e23e3c9cf31e970ce66164"],["/categories/DesignPatterns/index.html","e36ee0d01f5530e2f2f453b59c3e3d7f"],["/categories/DesignPatterns/page/2/index.html","67529525c62c51a92b595704e3aefdca"],["/categories/DesignPatterns/page/3/index.html","428e20fb2f707123c1e94820dedc8f71"],["/categories/Games/Games101/index.html","b35e113c15589fe33cd600ce531b7fd4"],["/categories/Games/index.html","c6f30d6e3f92d071d723a78fb0bd6ee4"],["/categories/Lua/index.html","f1cf4661e9466178e7089d7c55cee663"],["/categories/RegularExpression/index.html","090f50fc3ebbe0858944250c25c68225"],["/categories/Shoka/index.html","d309459893453c7f26845d9db3063a76"],["/categories/Unity/UnityBasics/index.html","0c305d0c47ce6de645fdff93a332ec30"],["/categories/Unity/UnityFramework/index.html","fd6535c08f9ece3185b9b40e02cf730e"],["/categories/Unity/UnityGames/Unity2DGames/index.html","97a83868893b39afec9f2eff7d1b6bd8"],["/categories/Unity/UnityGames/index.html","6c0278515cb5ec60ebcf125a08abda1d"],["/categories/Unity/UnityRender/UnityShader/index.html","f45089c1a964e34562aa0815fc87bfab"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","e0ab88dc125c411e34ec0e54839ce7d5"],["/categories/Unity/UnityRender/index.html","b965f9a379a423517b77eef79b04bdbb"],["/categories/Unity/UnityToolClass/index.html","2876e5a40950777e249833ee0a7f6d53"],["/categories/Unity/UnityToolClass/page/2/index.html","e01aac3d9013e4da687357734b2d7846"],["/categories/Unity/index.html","8fbeac9d322e753de48c2455c30a6ac6"],["/categories/Unity/page/2/index.html","985648e7618bd7733c9fa5c6fb10e7d7"],["/categories/Unity/page/3/index.html","d122ccaefda8bc7550c6fb10d441bac1"],["/categories/index.html","33f7875fcdd8e0bfa1721db9f6444738"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","ec36f0414cfac0ee989102ef50687848"],["/games/index.html","56cbbf0c352dcae4f6ad3ef9b2acda73"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","1ada3308d7131da8a1a912018a876f2b"],["/js/app.js","9b788d2d502b4262e50618600e182d8c"],["/page/2/index.html","404e51a215a06ce7f4b534d21fab0570"],["/page/3/index.html","b9ceacc96ac2135d747447ffe7b1eda4"],["/page/4/index.html","344fd67aa285f7d88cfa9d518d4dd1d4"],["/page/5/index.html","126268b39b0d129fc69277610aa9324f"],["/page/6/index.html","5187015ef878f0c8b402655ee2adb023"],["/page/7/index.html","b4cead11d469cc86c7ae46a2cfd81cdf"],["/page/8/index.html","ca2eb19397b33272aaede28a56a5b5ce"],["/sw-register.js","4b790979747c04b8e69e76fcbf653f5a"],["/tags/2DGames/index.html","10786b6b983388abd92163c7d775fd75"],["/tags/CPP/index.html","7f3df810d20f5ac1ea2b36bd9636b135"],["/tags/CSharp/index.html","7312cce4604a92ebeb77a044376a1936"],["/tags/CSharp/page/2/index.html","729d8aa8063f27525e7a656d4cb32dd4"],["/tags/ComputerGraphics/index.html","3ce50e2764d09bf24b898b71e2a89144"],["/tags/ConfigurationFile/index.html","47c68fa545218b4d6281f4c2b499e26e"],["/tags/DesignPatterns/index.html","7e0f9e9c5ea3861e12b26473820d2a19"],["/tags/DesignPatterns/page/2/index.html","8f144779299964f7d6e4b813bde27fdc"],["/tags/DesignPatterns/page/3/index.html","8528aeab9ae4263e0daefefc12549168"],["/tags/Games101/index.html","0d55c090ab15fe0bc5ef18c83791f454"],["/tags/Lua/index.html","018d760991112b65bb79c8c5d02ea2c8"],["/tags/Physics-Based-Rendering/index.html","1659c94072166b823852d94f75b23358"],["/tags/Shoka/index.html","d0025175823a7f3470fa7e20cf36a546"],["/tags/Unity/index.html","f2e0b12ff3c95a3a22094c3ff81738f1"],["/tags/Unity/page/2/index.html","bf45fb6999eebcdd6ac5d1b953044935"],["/tags/Unity/page/3/index.html","b2954f579ed5675e5e39a45b3fbba983"],["/tags/UnityShader/index.html","e277345b0679161b8dc2a8016f67fd0e"],["/tags/UnityUI/index.html","9ce91142475e421c6474fd8cff2318ca"],["/tags/index.html","0faa95884e44904f554d67c94b6501d2"],["/tags/操作系统/index.html","1fec22dae0962c1402beef49c721cfaf"],["/tags/数据结构/index.html","e38b5bcb4681f244cb2d540bee621983"],["/tags/正则表达式/index.html","335924e38954a8047e1a6d107ae4bda8"],["/tags/配置文件/index.html","4b19ff61187291dccdb05db02fe3c205"]];
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
