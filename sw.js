/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","af8997ed3859fd07f8742fa6a6265a5c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","7fc0d1ef895050cc78887504b7c6d20a"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","4f1f181f7da29699ff3fd72b1666a59d"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","8d833dea1ff67438ce1b788c1f051257"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","b68bacb2bfc14f10d5837847d1d24530"],["/2023/03/24/DesignPatterns/单例模式/index.html","9b8c4dfdf9005cc44025f33fddf8a5a9"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","0e1c2751c41c1ee204e9b748888b57b6"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","b67d0730b15a7fc3ae33398e8134df7c"],["/2023/03/25/CSharp/CSharpBasics/CSharp基础笔记/index.html","3318a6b8623737d4e19c2c0f78ccb473"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","fe769f8fe7eb3b73d068c2afd2227797"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","a9c0e5fe414c39341d6d4c053c416003"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","7c63836229e3580ac3a715371987a804"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","50c1145a28ee03a836662259a964b3d5"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","b965f54bdc5ca16e07ba54625ddd1b59"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","5b1ab581b35bfceb439c98886778ac88"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","a8cc64df3969e85392183509a93f3c8d"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","a4c6ad0e06105aea6345a0a8bb6a991a"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","760990b1ac6a2fdd0a9864e149f06c2d"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","600d0f4f531666408e32a02efea3f2fe"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","5548ceb58921b478109b78c657d8c686"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","fa76f08ea6c10fe1aa2b1c85f3c7e7aa"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","d71ccac9a450e9e0756ea501722e33ed"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","a6143cd52e685874166b4579005ae069"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","360cf3f1b67f20d2d2f72cece5570edd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","2f44dbd5bdc6ad68a865b08782116afb"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","49dc096cf38a2505a7f29acd639becce"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","2e7fc58b7b6b2d4d13436debb011b042"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","ea64afc11c53e0de236fe9d1a2c2abe5"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","34726c0946f0bc6ceb3b00490c1f560d"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","ee194b5d7844dd28256c3e517e2734db"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","5abe5b0d546e7421e87a21e60f504802"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","9c40d2095fede2dd4ceefb267277bb1d"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","3f9d824ca898ebf4203f4184d43c60b1"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","e397e5cd148c8d9eb2d4da79e67e1b8f"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","3171f653653871b361430a04f3004683"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","08ccc6e4cd6b00ebc14a566daa30c641"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","f9fc8995ab500f5e0296293f26dbca1c"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","9348b8c87352b8648a462a417e37b08d"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","f9fc0ec56c27384c3b75fe5097ae88bf"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","2bdb193733d5772ae2545496f4986131"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","caf46b4cdab87cc8373ef39bbf8c0c20"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","1bdb8e12265e2a85611cf3cbb0784f44"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","f92dc83d147f31d7edbf6ea72a00a894"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","9414fa1933bdac6275d6a27d4dc783f8"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","b8f0070abb7834946361783a8391d924"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","2812df464dbf05e9666b0d0beefdb98f"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","eafa956ec04206be77db8dad4332a519"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","25f7591b852b82e0e368bed945d2762b"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","b98e71bdd25d5535468961d30b0fa1fb"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","7b80a49b11e943cd1737e8492c29c953"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","52f0d7fa3fabe1208c64d312d0737ddc"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","1ca251fec5ec06f17e2cd52aaded95ea"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","bd13e447d79e4f1fe8a25706d22d8e18"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","5303249606fcdebba98c4b44752ef636"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","e736ac14cc3ec0d1f1625c9fa4be1f03"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","a89fe90ed757e6d6b4b120c1fe345083"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","f6473399b870164e6da95caa343386e0"],["/2023/08/02/配置文件/JSON/index.html","235a756ec722ed4bb2a2506baf7f788a"],["/2023/08/02/配置文件/YAML/index.html","9d92246ebcfc9bdd01035cd5512f7a78"],["/2023/08/07/配置文件/XML/index.html","477f3cd204d77a7c6d89f9b901a21a28"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","8ebcabdc0b0df68a09b517caa0984205"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","887f234dff6036d5544c28c2fe399da5"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","5456954671cb1f68d39755ac2341edba"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","857765a4328adc2820de229d3f8fdcc5"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","a59ac4c2de60b47f1e7f32b5609c5880"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","d8e2eb42f1a0db113429bf769fa5cdbc"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","b0b1499486d77efae470b1475f7687c0"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","aae54e744a0020ed12e2b5e8342b0b62"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","de79815871b1734bce4404fd761600d7"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","7b583067a39692c7f42a07566bcb8cc9"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","88bed16e57f04d3519b4719d663da169"],["/2025/01/10/正则表达式/正则表达式/index.html","49efd55862ce6b457f4bdd64790275fe"],["/2025/01/20/Lua/Lua/index.html","693364da44268e15d007359ea78f831b"],["/2025/02/12/Lua/Lua + CSharp/index.html","b448389f1cd7197acfc1204a0cef7dbb"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","0b34eb3d42a13f2295ce90a1b3e3b7da"],["/404.html","e89466f9608fa6fb8c75ff71a9a4740c"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","29c6f470a941f6de366e87f3b62f1286"],["/archives/2023/01/index.html","302ab0d0fb6b86987de0868936a95932"],["/archives/2023/03/index.html","07e8f01d6a7c5362ede2f1d98f774a97"],["/archives/2023/03/page/2/index.html","463c8be44a9dfeae04f946578dc17008"],["/archives/2023/04/index.html","4c7f70b87df2caeb1f0dcf0a03246071"],["/archives/2023/05/index.html","b722769e18e5c0cc8986826ae159d980"],["/archives/2023/06/index.html","7bcdb260dbc7ab132b4d5397cd6440ae"],["/archives/2023/07/index.html","f4fd497bda1dfa67a72bbf039b8e08db"],["/archives/2023/07/page/2/index.html","83c50bcf513c03f3bd5a47d78aee2892"],["/archives/2023/07/page/3/index.html","6d7369af51dad7eabbd1fed52bfa06f0"],["/archives/2023/08/index.html","b28b38d5a1840fab0c4305507938ac1c"],["/archives/2023/12/index.html","68bf49bb34490bde44f500ae9ad3605a"],["/archives/2023/index.html","1c8cc531526890f78f2aae866d855b79"],["/archives/2023/page/2/index.html","cfdf4041a39ea1af0e7b0bb861de67ee"],["/archives/2023/page/3/index.html","0c608f052827241e125ac98d26cf5601"],["/archives/2023/page/4/index.html","46769d1e392eb9ffa0a5977c35f09e62"],["/archives/2023/page/5/index.html","7f87ec87316671db4b984cef6088628c"],["/archives/2023/page/6/index.html","acf26dee5e65b90c63b8263f0047a3b4"],["/archives/2023/page/7/index.html","0ecfe4f1376a98ab3af73a396819823a"],["/archives/2024/01/index.html","c23b5c57eeee99ac2088998be1378780"],["/archives/2024/05/index.html","4ae65062a2b0f511a23f916941b8ec80"],["/archives/2024/09/index.html","bb2d4dbba3f744d4dd5ca0e2daf9e1a1"],["/archives/2024/10/index.html","38a158af8e6b8d115abae99efc3f9051"],["/archives/2024/index.html","1d873e237895c5561284eb04b294ebaa"],["/archives/2025/01/index.html","3283b67e72879ad943b4ee2ae856d282"],["/archives/2025/02/index.html","3f9ae476fee65ceae5263953069384a9"],["/archives/2025/08/index.html","e838cfbb97ee24bffd3d318064c3521c"],["/archives/2025/index.html","2fd3c54c1ed7b5601f59217616541f1f"],["/archives/index.html","b55d16cde0fab5f690fff5028674827b"],["/categories/CSharp/CSharpBasics/index.html","db0fec51cded962fdfeb6c9b38d01e0a"],["/categories/CSharp/CSharpToolClass/index.html","c2407070af06cd20e452764507fb284d"],["/categories/CSharp/index.html","2ee19d532486665fae5cf78a99224ebe"],["/categories/CSharp/page/2/index.html","3a35cb4754632693daab05a04450a89b"],["/categories/DesignPatterns/index.html","09056d9be9855e18729be972dc17f567"],["/categories/DesignPatterns/page/2/index.html","382fa15b5f0d4ad3283b64e0f35ed2c8"],["/categories/DesignPatterns/page/3/index.html","d1298f6c5b30ebcfd12fecb8b3295658"],["/categories/Lua/index.html","a9642d5572447ce918afd8ba448e77df"],["/categories/Shoka/index.html","8d38450be9a8d0b39d07fb4924d9c061"],["/categories/Unity/UnityBasics/index.html","af69d4ac2f7c7842f224df7ebe35bcf4"],["/categories/Unity/UnityFramework/index.html","c02c0cab813132fad0ebaabe6cd00c97"],["/categories/Unity/UnityGames/Unity2DGames/index.html","fd81a1bb6bebdba7cab616d976a3192f"],["/categories/Unity/UnityGames/index.html","80ed75a149e5c0dff156eec2929fc055"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","f25bf31b1ba8b74ecaccca53cd97a6c4"],["/categories/Unity/UnityShader/index.html","9e937ce232c7a69055de8fb7a4ec64bb"],["/categories/Unity/UnityToolClass/index.html","30761712274804069d8e1a80433d7542"],["/categories/Unity/UnityToolClass/page/2/index.html","94ca8afdd303ce32d7b8ace734f5314b"],["/categories/Unity/index.html","a186cae17a208cc6b73d164da69a08e5"],["/categories/Unity/page/2/index.html","f55ad52a01b8d8eebd1f72a88a309589"],["/categories/Unity/page/3/index.html","d13db0fc58780391c1d9ff4d27bba386"],["/categories/index.html","f5033543911abf454f3c00258a9f2efd"],["/categories/正则表达式/index.html","4239b744644ad752f62768e9e3fbd1aa"],["/categories/游戏设计/index.html","a596c1ef4eef9a93bca632648a41fe4c"],["/categories/游戏设计/关卡设计/index.html","9c38bb241bb127df9c7db37d52b935a0"],["/categories/计算机基础/index.html","168982f96ed7ceb7afaefbe70c6c86c1"],["/categories/配置文件/index.html","e4a6a79607fdf1b692a753cae96c1789"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","8b0c182fcf9067324ec25554a3813a3d"],["/games/index.html","c8a0183de67542159e23b2c37685b1cb"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","3595d487acff21a59239a0ad81b4be3d"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","2130297753568a4107827992102170bf"],["/page/3/index.html","1b55be4a0d64d8f8eedb86130663a90d"],["/page/4/index.html","cb762610082ab0140bd481ca850a139a"],["/page/5/index.html","f07bca0c6cfc1bc369699e48788f8ab1"],["/page/6/index.html","77f8133b093de8703e14462ff1a76178"],["/page/7/index.html","83a7dfc80a5566466f486313d1175395"],["/page/8/index.html","e45e1c325f255f4f310cbc7803bb5791"],["/sw-register.js","d234348740151d6bca51f2841f0c8011"],["/tags/2DGames/index.html","852f94295a716414e47a079cd4c2addb"],["/tags/CSharp/index.html","e3e2b496fd795d74053a647dfbd1e2da"],["/tags/CSharp/page/2/index.html","962c88697baa6c7e1a0b1d91628bdd68"],["/tags/ConfigurationFile/index.html","ed3f81b340ad7ef103b2f849b38d05bd"],["/tags/DesignPatterns/index.html","f0ee0f2f5781e7b2b025b8c1ec3f3e9e"],["/tags/DesignPatterns/page/2/index.html","abe6bee96546e21feb18f300141e424e"],["/tags/DesignPatterns/page/3/index.html","5da6ccaf5a51075a2f0720f840c941e2"],["/tags/Lua/index.html","35b5d354c55d65ac6c73f48d53020586"],["/tags/Shoka/index.html","590899bea0860ee7d762e1c2d6d9d939"],["/tags/Unity/index.html","3a21a5fd5857d8e44b9a9f913a971098"],["/tags/Unity/page/2/index.html","96b998ba973a2af52ec9aeb54bb4e22a"],["/tags/Unity/page/3/index.html","19a9c8bb94322941e3f9a0ba430e2054"],["/tags/UnityShader/index.html","89585f0d000a0d2e76eab2399a1aa692"],["/tags/UnityUI/index.html","576ae8d7efa4dcc16f20b5fa59c2b0c7"],["/tags/index.html","befb912370fae706808d7492fc12deb6"],["/tags/操作系统/index.html","4fa4d7fb0acfb01cd936999f44bf6a7c"],["/tags/数据结构/index.html","953ec0b18d3edc31a61eab4305d87fd4"],["/tags/正则表达式/index.html","41d72b97d27009b3e60a66f9457b804d"],["/tags/游戏设计/index.html","c9544987e7dd70979418518541c0ed5f"],["/tags/配置文件/index.html","88f6f4b397c30e53900cac20cc71372f"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
