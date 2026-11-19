/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","c027c287a97583f755c2503ef7dab3d0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","30f1bce1f4fb22a075315d8ab4debb3e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","ee5ff3db64581604139c53c004a5f79c"],["/2023/03/20/DesignPatterns/设计模式/index.html","3d391788073362812f3d5c6a8dc1d1df"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","08b7f7e849d87654327e48811265b9b0"],["/2023/03/24/DesignPatterns/单例模式/index.html","b5eae469af13fac539a265636442ac23"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e855733216c41209eeef1b7079154206"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","3193ca28574173edc11a0824279ad617"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","bb8134dbb9149756a77c2cdcc87902b5"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","60724377eb5c5266dc5a0dfcd4bc4d04"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ff4ec0e5e49aa51137407dd9a8c5634b"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ba7456d241a8b449763543bf2801a631"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","8a3a7ef34cef91cb8630d282f2607b97"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","fe927b388fad004a46bcf56c52572d5b"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","1e15bca200b06df07ab66b3e0446dbd5"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","3f9226866ac965a9ed2d6ca43a9fafb0"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","c2cc5ae1da1ee93ecbba1324c90ab1aa"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","06d67005572837af1822ecf381b2b0dd"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","e85fba5ee419326fcc24a13a814d3022"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","06ee81043364cb26f64503197f67f309"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","797ca8b1fd052553758fe533d9a6d6da"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","ab62183972599e37dafefcffb77380ac"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","58acb6fd0eb05613c720c5b7a01e18d2"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","a10877f46a69f800fcbf11ae35fcf896"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","c0b41e2c328d2a6a010a5be135b1118e"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","d49c75eb6c404519953c755665d00fdc"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","0b98fee56bfb1baefb5b0c50e0ccfa2b"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","477a408aea83a8196d49d84e79efa56e"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","d750844cf9873fda6b6d20d103d6917c"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","29f3e5a56f4ca3d185948d55ebf245dd"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","7b3832b3e5b8682c38dabdf67ff8da1c"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","c1248b771f3a3953bdd456233535cba2"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","88ca117806c5c9ba86c836c7439027b6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","d64b551f3f87d29e1ab4e44fcf793b0a"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","9ff795695b141eefae863d7904c5813c"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","e2bb021fb096604601b561d27bd9cd5d"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","9baa2cd7c5809487c59bccfe07e63434"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","791c83a613891b40abff9f85e6071509"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","5c6fa8b9fc648e578e45276b3ab53519"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","136cb7506ef3bdb78b7ee573bfe54363"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","841467b3017cef6f7af0e078d90a9330"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","0cfe11a5e7c51b5230f5c1f2895da0ad"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","0bdf4679e1ee785f4cee588b7327a1c8"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","b1f30253f4a7c0f4136442e921c85dc6"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","4fbfaee2dcd6785e36f07540c12d809c"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","14dda65e0baba2addf312c549f086755"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","c54aaf6a9115b0517ec46239d54934db"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","b8c11e1c601634dbc9fcade254f5b9bc"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","a832b021414fcf89cf70bff735a965e3"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","7e2ec3660ed09d97f55ad585b3c1c366"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","bb5652886e2a7483b00e78b8fa9fb121"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","93b032f314a1827db9e2d2e866514925"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","2044b9ef6efe10555dfc6cf0f2f539d6"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","7e2e21f28aa5df5e6e2360be997a81d0"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","b5eee43b7fb99793048cfed86a747449"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","57895402781721b67ec7ec9dda920fcd"],["/2023/08/02/ConfigurationFile/JSON/index.html","ada7bac41528003a92ad7ac5b111fee8"],["/2023/08/02/ConfigurationFile/YAML/index.html","7ab1139b2292f52fac13ac6b6aaebb0f"],["/2023/08/07/ConfigurationFile/XML/index.html","2e50c158c2c0631a367747f20df5e528"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","4a3e6a96aa928e7f371c7a02116a870a"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","802f3ead3eca6ee4bfcb1e0233e70af5"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","bc3649e6f0295340cf2e8a065a652a13"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","74fe6b2e5b66051620ce9eb0d782255d"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","6fe322efc54447494ed9abec90bd05e4"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","46c72c99db219cc8bd01a806ffbf755c"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","90492ff41275447988d61ba4a993296f"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","39ccb47273cb4981ee58418a27f81a4d"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","72fd6bac438cda788fe285f799f0f3c8"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","cbd119408ebca9ef37fb58dcbfab405f"],["/2025/01/10/RegularExpression/正则表达式/index.html","464e5be7b70978b889e2a3d85b421597"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","1e366ed03a63d3b4a4452e270999df7d"],["/2025/02/12/Lua/Lua + CSharp/index.html","5be1d2bd3dae6b5a0158f81b68364386"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","0903ea1297092d38162ba2d8198ed03e"],["/2025/08/20/Unity/UnityFramework/行为树/component.png","31bf183eb61fbc43f122c79a1ed086e5"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","25a9ac9a6078ffaf462dec7f79ebc6c0"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","106cdc3dcb46be653e17568e48926fde"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","822df4f3d60cdb79dd33563f5905d8f3"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","5e3300308d72207e92eb58f7d8e8bac2"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","19a22fc10ba7fbf95bba2dde58fe1601"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","dd96c7cae6b2cb52d0c56e255286966a"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","92ef498b502e0cf216c8c749f1cb56e1"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","c570693d26fc4d02f6033d8d0c16ad39"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","a236e3f9fafc9d7e2c7e82496943490c"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","cf20cd7fd4938681e9804b4aa435dc71"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/2026/10/15/Unity/UnityFramework/存档框架/ApplyRestore.png","b9410f8df26437c80acbf963125847d4"],["/2026/10/15/Unity/UnityFramework/存档框架/ClassDiagram.png","9aa39299e885f38f11db3f9374ef2ee3"],["/2026/10/15/Unity/UnityFramework/存档框架/ModulePartitioning.png","f8387e9c9d63032a345ac1507cc78d49"],["/2026/10/15/Unity/UnityFramework/存档框架/SavingProcess.png","efb9273ace094e717330271b4ddeffaa"],["/2026/10/15/Unity/UnityFramework/存档框架/StateTransition.png","e99d244f3bf87a00905b784a7fadafb9"],["/2026/10/15/Unity/UnityFramework/存档框架/Web.png","33dc6a47d6fbfaaf039491908326e89b"],["/2026/10/15/Unity/UnityFramework/存档框架/index.html","bd952075bb14a3ade792d9da81a54ad2"],["/404.html","107830e51d38101b51787593e98cac1d"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","2fbd55127320c878ec8a08eb08f69514"],["/archives/2023/01/index.html","0622e3d9c5d76b04b02e4a19588e2e9e"],["/archives/2023/03/index.html","018e01526faa5e8a57a9ee69d65b13ae"],["/archives/2023/03/page/2/index.html","306e0c0af0553d0b32a0fdcfd9bd1ee3"],["/archives/2023/04/index.html","27358cba3baef669945bfd82745fc9e0"],["/archives/2023/05/index.html","9bc8d357d6c3394893266a7cb642b4df"],["/archives/2023/06/index.html","86cf65e317bdf059bfb4d27b55d884a2"],["/archives/2023/07/index.html","ef0e10d0ad18b25b90a5af30472557d2"],["/archives/2023/07/page/2/index.html","5e4235968ddf1f5d99cf5c7e76dba3d4"],["/archives/2023/07/page/3/index.html","d2634d9d309fba6ce7655b2aac99b954"],["/archives/2023/08/index.html","de162cdc1da92f6ec02b15fbecefe275"],["/archives/2023/12/index.html","98575654f4e382a0662d6dcc0448b10b"],["/archives/2023/index.html","ddbd48fd484b53e9ce0ea8b6307bb389"],["/archives/2023/page/2/index.html","5f48975d29f07f5b362d633a75013a3d"],["/archives/2023/page/3/index.html","8277e30f31fc8319141f4493321e4038"],["/archives/2023/page/4/index.html","bcef2a04ca17e9a15b06439da012a7cb"],["/archives/2023/page/5/index.html","b7c8a4c4f6a0c98e98b0c3817c579435"],["/archives/2023/page/6/index.html","b98eabee96f1c82fb13bf7d44e3cb138"],["/archives/2023/page/7/index.html","efc2bcc5b28aeaf50d1fd2f06cb1236f"],["/archives/2024/01/index.html","fcf8ee7bbc21b3591eebbebd637a83ca"],["/archives/2024/09/index.html","2b9b42a11cf685300e44623a5152ab7e"],["/archives/2024/10/index.html","0aeebde3a6b5a701e5e53fd4c7d8d901"],["/archives/2024/index.html","b329d4432bea379ffa8e9da354ca6908"],["/archives/2025/01/index.html","c73d72b3a0dc3b52d23c1c173b900b8b"],["/archives/2025/02/index.html","92bdc9eb8d690f36837331a7ab90de8c"],["/archives/2025/08/index.html","17a86445f5a4c7c9baae7f0d3b625c0a"],["/archives/2025/11/index.html","3da27bd8397e746691da2c81426a4c23"],["/archives/2025/index.html","eedf785a8f447c8f6913f0acf10a0b92"],["/archives/2026/02/index.html","a424850b00615bdca2d19eb8b6f34730"],["/archives/2026/03/index.html","4d61e5874fe959eded5c06cd17c7a87c"],["/archives/2026/07/index.html","9cf02c1039457c6c50334ddf3ac2d2f5"],["/archives/2026/08/index.html","c77fc48f25cc1f56c52417aaafd069be"],["/archives/2026/10/index.html","508ba6d99e21c442a9c88362a467bb50"],["/archives/2026/index.html","3014685b4f1ed901aee06951d3200037"],["/archives/index.html","8b0e891ac73d9b9ec81661731e13c385"],["/categories/CPP/CPPBasics/index.html","5f8f2ab35f3ec1fa499bb5367c447fd1"],["/categories/CPP/index.html","e8ef59b14886590019a10a95999fbe9f"],["/categories/CSharp/CSharpBasics/index.html","e9ae68759415bc8423af34d3bcb97e27"],["/categories/CSharp/CSharpToolClass/index.html","4d8142578cb3be5e8ecaf19ddb5c7ce5"],["/categories/CSharp/index.html","43ba042e7a206975f6c21a0002fcb1c9"],["/categories/CSharp/page/2/index.html","945aba01df781fb5591fa6d772b91e83"],["/categories/ComputerBasics/index.html","3776886fa6631bc19a589d4b26661556"],["/categories/ComputerGraphics/Games/index.html","19c2a10e845fcc9cc768d45c9dcdae5d"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","cc9ae43170dbf423d644e76ddb1d4810"],["/categories/ComputerGraphics/index.html","f542c85dae745a6fdf829dfda7a9078c"],["/categories/ConfigurationFile/index.html","1ff7b543c86ef85035ec7360ee1dffb6"],["/categories/DesignPatterns/index.html","25602a09438e208161edc90d80322da7"],["/categories/DesignPatterns/page/2/index.html","748a0f1240bfff6f03ba7fe23a9139af"],["/categories/DesignPatterns/page/3/index.html","c648218dec190e3a6037a5b4fcf83462"],["/categories/Lua/index.html","883426fc471cf4d49713305f25d845e4"],["/categories/RegularExpression/index.html","4e1cd1240e04c2461ce6b4872a713e6d"],["/categories/Shoka/index.html","321a9add9356e55f564b2c99c8fb32e9"],["/categories/Unity/UnityBasics/index.html","ee67e95ec57151fba7c55e7cabc4a0ef"],["/categories/Unity/UnityFramework/index.html","5d77ce58bb742f3b1e70582ab18544f4"],["/categories/Unity/UnityGames/Unity2DGames/index.html","315348c5d8e454bbf838f612717388cf"],["/categories/Unity/UnityGames/index.html","8d22081c2c2cc59ece06940bba274b59"],["/categories/Unity/UnityRender/UnityShader/index.html","b6ce972e2a6206c720229207ea612228"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","bf25082b8da7fc2cb225d1d835635108"],["/categories/Unity/UnityRender/index.html","b222b8f0a302392040797080b199c260"],["/categories/Unity/UnityToolClass/index.html","8d293843f81c9544668797af99ccced0"],["/categories/Unity/UnityToolClass/page/2/index.html","f775ce8493cd7c1357562960174232ba"],["/categories/Unity/index.html","62f800a286ff234a0adf552e77eb901c"],["/categories/Unity/page/2/index.html","dc4b3ee6bfd7d4cbcae883502e9fc877"],["/categories/Unity/page/3/index.html","c73d5dd575a35e73d4860651d9385e2e"],["/categories/index.html","d7d1493503f760938183d3a6c940abce"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","76f1da0a26db773eebc356e8757153e6"],["/games/index.html","7664c38e3cedbac0267281b38c3ea042"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","2ba2874290e76cc26c3f3c88662b117d"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","4e5b1d30076aa52f765db53b6e320d6a"],["/page/3/index.html","d797b859ff0a9f197bc5aba9bb71e426"],["/page/4/index.html","6d4370e9f9580ac7e461285eac80394a"],["/page/5/index.html","2f0ce57050d49d652a7fc7ef13247a6b"],["/page/6/index.html","8e65c78822a2ed5a9e7a99f504014e83"],["/page/7/index.html","d4d541fafbd137c34f35a490422ddca5"],["/page/8/index.html","56774e8159cebc7f2fb515e8e0a3d929"],["/page/9/index.html","3ad8a4f95dd82bc0983caa5318485c3f"],["/sw-register.js","653c8da704aadde094225dadced05eb0"],["/tags/2DGames/index.html","580078033c159c44182e835999765ff9"],["/tags/CPP/index.html","a35f3bd2d2a32b9ba67ffc479b1385d3"],["/tags/CSharp/index.html","6c2d56974242d8cc8329b792eb9b35b1"],["/tags/CSharp/page/2/index.html","8a5e1f9a3fb26dd18c1195b83b7a656f"],["/tags/ComputerGraphics/index.html","6839fa0f35e9fcf264be5360b1ce53ef"],["/tags/ConfigurationFile/index.html","afd64b410b6d89255c9bbd896372bc6c"],["/tags/DesignPatterns/index.html","dd3f555263d6b0316d493dbc4c475d51"],["/tags/DesignPatterns/page/2/index.html","5dbb9ae30879cdea2c60d6cf03a6c009"],["/tags/DesignPatterns/page/3/index.html","c90f3617f3aae1486d8d04e8635daad5"],["/tags/Games101/index.html","ef065b5f6b40c6d3a3d2452b28e062f8"],["/tags/Lua/index.html","aa2b6485434de469ac4babdf7ac50e19"],["/tags/Physics-Based-Rendering/index.html","4918ba956698ab0778685ecd6844401b"],["/tags/Shoka/index.html","17e34238274c47c7684c17383b7e4534"],["/tags/Unity/index.html","97121856ad718ff18fc5de4d7f75ca26"],["/tags/Unity/page/2/index.html","4edd3517e8c132843d5e057916386a69"],["/tags/Unity/page/3/index.html","71de63490bba026c1fabe7713b8251ed"],["/tags/UnityShader/index.html","52530671054977d1fe40cd74240b6154"],["/tags/UnityUI/index.html","1d87ec15412752f36809d429368a23d3"],["/tags/index.html","f0039c8f820dc397f1947af4280fba5f"],["/tags/操作系统/index.html","0120c8dc77ebce4b9f7b5aa34654cf52"],["/tags/数据结构/index.html","fb2fac80876922312b7eeb771ac9418a"],["/tags/正则表达式/index.html","e889b4d5375fe6250f8658d80dc806b8"],["/tags/配置文件/index.html","48a50da81e98f3cb0c6cfc95087a1cd1"]];
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
