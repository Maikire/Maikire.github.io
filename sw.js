/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","d5d67dc2b214c252a40e1b92f9d2a13c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","c6c4aacbc3337a952f28c2b8b421e134"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","8193f0d2733d4b8f7bc5ecf6ad9221cb"],["/2023/03/20/DesignPatterns/设计模式/index.html","9f3d3d761f53bbabbc841cdc657dcf7c"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","be2b85e733532ff7581932191b368c31"],["/2023/03/24/DesignPatterns/单例模式/index.html","307ce555809cc00504e459ce277382ac"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","57e5cb5e0661e59335b29d8feb2d7728"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","2568c61c3d63867bfdf228fdb8351953"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","666aa9c5f42655ad117e7134da896b9b"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","3e2ac17254d24e1fcd672fc610cb82ba"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","cf9dd2b4c615bcad53ddddb10f0153a3"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","1ff1ac7ae025f06f4af7483407931849"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","fe31cdaf03e1b25cef4d78cea6c331cf"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","87e3abbf7f8eb82f967cd513a8ed1c23"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","0969fa8120ef8621cc1c0be2318914e7"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","7f0d26c1cb832c4b7f253bf655913309"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","75b676110bfb595f31bcfa573f3fab94"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","d08bc49c7f6a8854ec73b8312882931e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","c017c249e145635bccaa2ab6ecca892e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","6c60a42ea19aea6ef8c66b37685f1a0f"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","493d0afe7ab002b3b795c268211ddf8f"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","3f1eccd9a96da905fdcd4d654ffb6272"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","e9148272d9f451f5ab5c1a72771db600"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","1a9a2fb02011f281a8fee6ce7c121e91"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","1f6f1a01a2e72a348205f0a435f0acc8"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","e41588d6112bbc3cc690f2a43a37d0f6"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","cbe24a86fa259e3c40dbdfe54be90cc1"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","67f1dc7ed7e43ae73868c703f6c22d22"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","3fe5dabc35ae5a3f8a4bd29081bbbe9a"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","8576f3f90186b5b14774a8a5b8422d8a"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","d09a3c6ee3210b551a8b8989d43fbce7"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","10dae4c9dffce6a34f9f439397a7ea5c"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","f4dcfbacac61a9070d1b68624cdc50fd"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","1dd2eb436feace3b4189c9cd89d58673"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","835de2821daa8a09fa9dad8db03a1749"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","59f2be2753903a9b5d06888985391f83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","fd43c90468b051b6e11fd20451aae003"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","6aaa9d824ec962740c459922f62975d3"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","fd6944870280a21305e43955f44aebd0"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","c85ef13fa33fa81f258c6d86be635405"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","5d83c62fc7371c10b834b597b31a3fb1"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","c1a045eef149f769f382f662bae6a4aa"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","0a9b6010e1fb9117d3420d37885aab39"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","7d8ff1f9cfeae4731a6b4b9151f88cb8"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","f47f656df538b9c9b1dfcbef0f79ee1a"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","a5e196d8076e3106018c6c62304951fd"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","223174a4c9c259edda4024a86a14e8b3"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","52222120781a612a6d7de3a5a9eb40ca"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","331a0f9bfa85ac22b3bd3177ac82d2ba"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","db8c7016b2978b68b1c4e0d1011e89ec"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","329e7b472ad623f4ce17b2e0ff06e7a0"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","d54f52596ccc50c8e4b582ddccce2d8e"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","b1fccd3c24b943afb3cac9c23f1c6cfe"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","3f781e62d7c9649a0c52d7a4e6aaea7b"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","5ddad67f0159eac5ff842cfcedae519d"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","545e930415d5addb02367f9a25ff3f2e"],["/2023/08/02/ConfigurationFile/JSON/index.html","3f40d977239d5aa3023b1c89b0572f82"],["/2023/08/02/ConfigurationFile/YAML/index.html","64804bd47ac3a59702c18b4a3ab73c30"],["/2023/08/07/ConfigurationFile/XML/index.html","1fe0aa83e10956c1cc62e304b5f521a0"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","6678e90dc911a04b184aad92c728bc40"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","d913739a2c1d5a3c244b602b5cf74151"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","0646c83836d1e439ba3f888a7c4f08f0"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","582c00c9d3b43ce81f72824e57f55289"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","ccbfde10aaa28d46b3bc8e4a4802cfa6"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","d863e4b52ff7537fdc36efcc57b93ac8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","9c6ab21f4fdc37d03557f96107c03d05"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","59587fd1828f7fa77d5a1f0050d02a8a"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","e20fd76a19944c287ed3b9d1d801b1c4"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","6b18ac8cd7691aefbb08ab249ba70d08"],["/2025/01/10/RegularExpression/正则表达式/index.html","313ded93e1324bac8662622217e19291"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","0e5118969016eee385b3659ebcdbe934"],["/2025/02/12/Lua/Lua + CSharp/index.html","d7d1414fd53bec5d516807eec4ec76b9"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","01379969cb026c73993b9d88edcecb68"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","960ca96d7813d49838d7eb871db87cab"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","8d277e4243de2874386d18fb0f44b023"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","3cdb671bfd2e0c39bf5e42fa9c3db606"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","da61c4434d2c990504ca76ee126cb5f2"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","e5a11567a0bf8eeb9691dbf492f18770"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","1a6e2080fe9b6f4904c74acb0c16ac31"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","b957cfa7bd64a6c56014b74ab6d66abc"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","153b1cd9b38f9b82a5cb47b6d7fd6d99"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","2bef8f44fc3ed0540729437114b3009a"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/404.html","f18192569dde79b7568ad4646a41fec2"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","4520d70b271c668859ea26536ab20ad3"],["/archives/2023/01/index.html","aa9c3d8b1268f875670233af71981655"],["/archives/2023/03/index.html","9a68c83410aa43d6c4ad2411f7d69852"],["/archives/2023/03/page/2/index.html","4286ef26fae948c2ad6bd03e1f314aa9"],["/archives/2023/04/index.html","ffa24b632ca8176e49d4263f83b91acd"],["/archives/2023/05/index.html","747a0f437fba80440a9a18e5f7c3757c"],["/archives/2023/06/index.html","91834e2c0cbd2e9581fc8524f93fdb47"],["/archives/2023/07/index.html","0c18bb2d319cfb0d38aa9e522af6b012"],["/archives/2023/07/page/2/index.html","d9349365778f6c4f4df12b889518a662"],["/archives/2023/07/page/3/index.html","676e5a1c913e2daf3eee8d502f7589c5"],["/archives/2023/08/index.html","1126b435049703b13181d696df9d35eb"],["/archives/2023/12/index.html","45238561b55491aeeab472b3aa6b2b00"],["/archives/2023/index.html","6ebdd3f3c8e62dd02d1457048549180f"],["/archives/2023/page/2/index.html","9839e693ee158a38d14cea575337b5cf"],["/archives/2023/page/3/index.html","6e34c21c5af8e7a99abb8510ad763710"],["/archives/2023/page/4/index.html","9c53a9573bf67cfc976bb773a8a28307"],["/archives/2023/page/5/index.html","43247003b33302a680bb132c12218308"],["/archives/2023/page/6/index.html","1ca9355f0f6b454a0ba3244ffefccaf5"],["/archives/2023/page/7/index.html","5c84f63e98ea7b2f0a7c31f15d113656"],["/archives/2024/01/index.html","6e6ae844816926c6b70f17312da168c4"],["/archives/2024/09/index.html","70f33e17241877cf8eb5be4d50d28544"],["/archives/2024/10/index.html","e0bf151a9f146df5f90e8538fc1c83a0"],["/archives/2024/index.html","fd3f8635b1b44477c420deae7f040790"],["/archives/2025/01/index.html","db3b65950e5feb6cf3cc3bc7d5e4dcf9"],["/archives/2025/02/index.html","fe1474b229016b640dec0152f285709a"],["/archives/2025/08/index.html","b5bde6dab02f1f50b8383d9ef46b7e1f"],["/archives/2025/11/index.html","716bec7d30109eedc082c23bcb995c81"],["/archives/2025/index.html","cb7a42e93d54eed5ebc6287ea0333e51"],["/archives/2026/02/index.html","8aabe6c1ab47d496f472799cbde2c37b"],["/archives/2026/03/index.html","342a482504902ae6c31e4fcb4e0eaf25"],["/archives/2026/07/index.html","a5e5c0a0ea30d1c48a6dc18fedf499ee"],["/archives/2026/08/index.html","76cddb6edf33ec57ad7e677af0cf9bd0"],["/archives/2026/index.html","29812de48b28181a1e13c5a98754a6da"],["/archives/index.html","a0745f320c8684e4ffd861d9a82385db"],["/categories/CPP/CPPBasics/index.html","70bb9962b9ee51e6b6e0ba1a5625d31d"],["/categories/CPP/index.html","6262a1f5360134d85f0dbd01acf9a860"],["/categories/CSharp/CSharpBasics/index.html","c9784608dda2eed668a7fb31f40d505f"],["/categories/CSharp/CSharpToolClass/index.html","addb351309c00c2294a565088e6ee0f8"],["/categories/CSharp/index.html","c1fe605526dffb2876312c5299b6cdde"],["/categories/CSharp/page/2/index.html","99298dbee9d706996492364685ebf769"],["/categories/ComputerBasics/index.html","f8d42782b66f8f7bd9dc060730bb7a9d"],["/categories/ComputerGraphics/Games/index.html","5b889b387e71cc80938766f5b6c34467"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","96e3a28ba581a0b690614ee1d09c1cbe"],["/categories/ComputerGraphics/index.html","d1d4c65ddb6a562340db8556cb844888"],["/categories/ConfigurationFile/index.html","c55b3ea5f788279fd8c3f5ccf55d9c61"],["/categories/DesignPatterns/index.html","5c5fa2929ba7816dfc97b58ece91e683"],["/categories/DesignPatterns/page/2/index.html","a0f50f82d8e7a9b1e33aecf2b8a39b6d"],["/categories/DesignPatterns/page/3/index.html","e6b332fbbeb30be331386b3c758fe3f4"],["/categories/Lua/index.html","0928ff121b1fa240375bb7267f6d23aa"],["/categories/RegularExpression/index.html","071153fb46766571f7b976fe521a34d3"],["/categories/Shoka/index.html","b19eb156665c0ab4ece3df11001a7263"],["/categories/Unity/UnityBasics/index.html","ea096fab2409eb29f05854f4ab072e80"],["/categories/Unity/UnityFramework/index.html","6cad401fcbb5a0aabb407bd08581bd6e"],["/categories/Unity/UnityGames/Unity2DGames/index.html","5ac34feb9c81af752c9bf4b54a6a6bc6"],["/categories/Unity/UnityGames/index.html","9adb0171c76038d79c52a9a1b6d7a7e1"],["/categories/Unity/UnityRender/UnityShader/index.html","a775360ebbed11a0cc764ae33950f17a"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","f6f974159714449d081de4ac4cf2273a"],["/categories/Unity/UnityRender/index.html","4e401a14f02c1d5c2e9f78582fd6db51"],["/categories/Unity/UnityToolClass/index.html","71c67f61d0cca4dda1902df601cd75c8"],["/categories/Unity/UnityToolClass/page/2/index.html","75599ead5afbca5872c235922e1d5991"],["/categories/Unity/index.html","bfee3e4af2988bd5e665a293e46dce01"],["/categories/Unity/page/2/index.html","30021c1a29f0bc22c0cba5bc899f0aaa"],["/categories/Unity/page/3/index.html","be1b33f2daa918d9708a98be134ad18e"],["/categories/index.html","f7266a45ffdf597068f21d5f3312f0a0"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","346571b58a8c3f9e09db09cd4254650b"],["/games/index.html","65b533da180baeb56987b9bd5cd7af40"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b2f60d39c2ccb74e897c8389399ce76b"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","acbe6e018589ed502ce67cb87071817b"],["/page/3/index.html","3b79df3a979a24e1d34141d623c21efe"],["/page/4/index.html","84f2a443e88d16087c8e4edf4dd044d8"],["/page/5/index.html","a4cce7ff9f98711b5cb13d1479f4b44d"],["/page/6/index.html","a67ba48130f778c36ae1e2f42da83f87"],["/page/7/index.html","8883279d061250f031d71723641e3813"],["/page/8/index.html","88051b5a1e30b9d6cee4fc13da4e6848"],["/page/9/index.html","ea47102646c3eed70ffd45d6f049a868"],["/sw-register.js","51c21d28c1f81cc42dd3d9704d180095"],["/tags/2DGames/index.html","a2d946fe9cddbb8f2e8a0a38ac12b353"],["/tags/CPP/index.html","ead99561999b8ed385c1e8fc5221cdbf"],["/tags/CSharp/index.html","3f8334fe4c3f38c4f59d84c773ae3c61"],["/tags/CSharp/page/2/index.html","f6a1eb5353148919300d56fbcceb2723"],["/tags/ComputerGraphics/index.html","3ed8ea2c1bcdb26ae74fdfc29455dbda"],["/tags/ConfigurationFile/index.html","4ff87b934e491d958ce441b91859ffec"],["/tags/DesignPatterns/index.html","85c6ff3303b6806f5f1a7bda396cc145"],["/tags/DesignPatterns/page/2/index.html","c48ef6b377fc09476b8319545910b986"],["/tags/DesignPatterns/page/3/index.html","86763d4e21a7a5ed6869fcc0bf050080"],["/tags/Games101/index.html","605e723872055f6c2e28bfe136f059e8"],["/tags/Lua/index.html","52f2e2e165f600049868779a1c7709bd"],["/tags/Physics-Based-Rendering/index.html","4e1e625d78e43e363df416661fad8c16"],["/tags/Shoka/index.html","3d0ffd42f695fa4d1100cee0147b7871"],["/tags/Unity/index.html","769b49c72fd6518f79104c0a327b3405"],["/tags/Unity/page/2/index.html","4b7e98b8cc488813932c6374ae2f6fb5"],["/tags/Unity/page/3/index.html","d075b8b5c6c160757ed33a122ebf2390"],["/tags/UnityShader/index.html","2cdf6b2861051467b0892a0ce64414f8"],["/tags/UnityUI/index.html","8e511d7d35193bf1daaa49b5bd342151"],["/tags/index.html","87fa7ac6d5235d5ca6c7c0198b2b2f2b"],["/tags/操作系统/index.html","365d5253294f6f3324bcb5168e900492"],["/tags/数据结构/index.html","48f8d76ec37f732b0ef59899fff50da3"],["/tags/正则表达式/index.html","29c9fcfb581052fb51f495728d804d1b"],["/tags/配置文件/index.html","1294e59c3791a3940bafc749663abf58"]];
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
