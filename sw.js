/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","2d6d9eb22abe9dcd9f88b12e2570e191"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","e927797c8ba84b9b3225fef14087118a"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","9453f8dcf2f174c7af4c196034d5f0d7"],["/2023/03/20/DesignPatterns/设计模式/index.html","2a1c0c7354cbc6685fff24cc3ed18a2b"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","a33f0d1c19d7f5c074d55b31764130c9"],["/2023/03/24/DesignPatterns/单例模式/index.html","0e0e2c242aa3f4a87b5e6f5e0f5feb97"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","8cefe7fc92b725ed719921c22da87862"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","9816a6b4a555719992e8dd85667f046d"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","93745dbac36ea006a81a4984f2c8ce81"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","38d677276f585711a3d1563006e9907f"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","f95fe28e17d5fcdb0ac4fb07217e97c9"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","b033aec2e1d56495e39b17809200cfe8"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","3666618d60e4dba7dd07e8821c93478f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","e0c5fe62f00aadf56cb0bef333335f4b"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","cbd2735eea768c343e4a2fb05ec62553"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","26ef91968a4a2519c0808c20bba4161d"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","d0037d0a8a135bb5bf3f86a08d71e810"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","b3288da424624ee7314e2987f8936ca2"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","ab6a28234cd0fe53a22fae91eab86e38"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","494e7f7644c12202545beb219674d3f2"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","46b615614189eb5ef31205b47f0c9f18"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","26104f14cb8566b25f83743e5e0a1753"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","d456ff4cb942c72d8d3321f9217fc049"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","1bfc7d2c1b7379b7da3d582e9d96c01e"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","e0e83b512c24d0f7f4bc669fdff5d342"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","09122924c9cd88e60f8540e38785a39b"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","b0eb72b88c655ea138733254ad75e8d0"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","8e8e6061b9cf44ffaed6666f849020f5"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7df1d6197945f2b7e674f5385cdddc37"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","286c21ebbd18fd7444f48d4ba166151d"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","7a9684108e774b1ef48622539bb1b834"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","833e6581b3a624b6622c11c18bf1dc04"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","efad124d33dd29761074a074a0c3c82a"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","41ae7ca60958da2ddc7d50a7676681c6"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","aacdc90820c29c193b5172acf16ca118"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","594cc47494321fa8726c76e07b531724"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","1fd6cabf4976f56b11e5cbf3680d2762"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","1435abe6e671a482e670e49708d59503"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","4d784d697371b79cfa5f7dea2d20976b"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","f31cac8ddb60db715df073287cd081a3"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","17adca8f3b64622f118e00c2a21851ba"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","6dc2a3a60494cf4d3f1c7f3f30a9c299"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","798eeb7a27081b05b51b29cac0f6e29a"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","273b7799ad707cda2b6ca261818c8bde"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","88ceb3f26b1bbf96e638c1e9b39980e1"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","cd36fbae9b25ee9ff4485e98f8b6caa6"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","2354bc926756f5c9f9427b605a0eff2b"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","1a8da8083f124a56ab4e106007f79fd6"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","eb4980bcc1d8baf6d0c98a6c880486a7"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","f3e69215a4427ba819cbff06dd1e07fb"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","621e29811e5925139a6dfa544f464323"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","721c81ce0957a2449a2f7b03d0455a39"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","21ec62bb060dc287566c2577e64c1f84"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","8e2200436b91da97cf022bcc58f0623e"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","50cae1ac052c70f352807705604e258a"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","141f4204071c6bcd6026f1956a61406f"],["/2023/08/02/ConfigurationFile/JSON/index.html","5ffe3b782e6e687dd86536a5d639070d"],["/2023/08/02/ConfigurationFile/YAML/index.html","cc14909464b9a05975d3280114bc1a20"],["/2023/08/07/ConfigurationFile/XML/index.html","5e82dabd48632e9000c32df03205c45b"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","e4fee712953603e613cb5c32cc78a047"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","c1e569a00c8e24f61a6996bbaa597fab"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","3319f6f54ee7081266628875ced1d874"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","1127fec2b7d72873ab0ba03a72976edc"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","e903537e965d51e023bb7077631000e9"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","0d40d11002731d5d123a8772dede81b3"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","dd90da3025daeef9c3f82b15b4eb3b96"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","6866a4b17f2ac9ddd3cb59f2eeabead8"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","0669c86e1f9e80b7d103053805603bf5"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","0a60385aaf1efe9f2cca20cbde2221dd"],["/2025/01/10/RegularExpression/正则表达式/index.html","80d60e92704958dd51511775b0c27b21"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","14a555138018a7ed707e516191be38f2"],["/2025/02/12/Lua/Lua + CSharp/index.html","afbdabe4b91b0475654d4fe60d0f9ae6"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","874192eaa2b53b5809bf88d0441f3857"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","299380d17cadaf04800f5d4a607b870a"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","ae112e3c9856af6817feb616f2638816"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","d340f9e5dafd6422b29a947639acab00"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","9e96c14282c532faeac06b64f4d14010"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","2fe8ea8d4e0f7a318cbdc2709a3d67cc"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","9578d578d0be695a43d89ab6d5c4305b"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","265120db4188b14d0a45f3edf56e713c"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","1c4eaa37703cc348086e43aee386ccdf"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","01dcfb93a1a5b78cabb1b1f6f172ddf7"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/404.html","b5fa8115f36accfc3dfca522660c62b9"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","718a49d06540bf4711d78b90b967ed8a"],["/archives/2023/01/index.html","db6b25a3df96e0f392cd4b062dc32adc"],["/archives/2023/03/index.html","ad85ca6430a862b0cf6658a1205c7b56"],["/archives/2023/03/page/2/index.html","20d99fe16cf787be238163201d73065f"],["/archives/2023/04/index.html","988dba33f5c989bd0717ddd396a20323"],["/archives/2023/05/index.html","73d55f0acba377e400ea268d2da1065a"],["/archives/2023/06/index.html","e7d84cc39c70f3b554277ec51f94768e"],["/archives/2023/07/index.html","eccd393379567f00f6599eb9fad3c359"],["/archives/2023/07/page/2/index.html","eac200a40dff3071440b42ae749a56b3"],["/archives/2023/07/page/3/index.html","197a6ea5d8f17bc865a2ecbd2ffa79e7"],["/archives/2023/08/index.html","a5d08413eacd3f9ee1eee0a3edc2d659"],["/archives/2023/12/index.html","33905d406f95f33eb19b7f8e257df398"],["/archives/2023/index.html","d66607505c487a428273b885540c71a4"],["/archives/2023/page/2/index.html","3b80219a8ffa845d158fbdeff54579fb"],["/archives/2023/page/3/index.html","4e4a6c718e7d0c014259329f889d7f5d"],["/archives/2023/page/4/index.html","9c78c1571e955a6a122fd30aa93a4d1f"],["/archives/2023/page/5/index.html","a17428cf1b8a3541b723fe0ead1e5d47"],["/archives/2023/page/6/index.html","ea5b92444334a9b93fb814c7f1d15402"],["/archives/2023/page/7/index.html","cda7e317462dc8f18c133dcfe49b1f14"],["/archives/2024/01/index.html","4ba913b585bbc497e8c5128d284bdf79"],["/archives/2024/09/index.html","c75c72d0661e4ca0540d173501001b89"],["/archives/2024/10/index.html","d4e79365881f82dbe9867362502b5a5b"],["/archives/2024/index.html","80d0a2c68d8a075c4f55d1dca9776dd5"],["/archives/2025/01/index.html","23e7e8b286e444ab79df432dc7d2e7f7"],["/archives/2025/02/index.html","aa53d80d05b5ae9a771d2041b7f61e5c"],["/archives/2025/08/index.html","642f00a6ebf8ab857e090e7719abbcb9"],["/archives/2025/11/index.html","c9335ab9017f1d17d50bb3be99831983"],["/archives/2025/index.html","bcc303dc27621347d57dd762bf463408"],["/archives/2026/02/index.html","76201f6a91f00bdfbb6495d4dde87d71"],["/archives/2026/03/index.html","0c365e1db67bdcf05bf813e294f5c367"],["/archives/2026/07/index.html","ba4de1d1175b35b61468cc8870cfaa9f"],["/archives/2026/08/index.html","a7114c999301f9bde570ee264b432d1c"],["/archives/2026/index.html","51e3d003200d6302b3d95d192ec100b5"],["/archives/index.html","5e4a3b44663262fea4c64958964ea472"],["/categories/CPP/CPPBasics/index.html","bd316113b6d6e7b5dfc48d4811c2b24e"],["/categories/CPP/index.html","5c36529a77b5bb08b7c8bf622fba431b"],["/categories/CSharp/CSharpBasics/index.html","1d577904d31602d50d2c43da779fd037"],["/categories/CSharp/CSharpToolClass/index.html","f131363b4a185633802256a8a373c81e"],["/categories/CSharp/index.html","c4c7429f117a325d34685e51e32d59ca"],["/categories/CSharp/page/2/index.html","9ca3b68728a78da8e761aa2db44f4dcc"],["/categories/ComputerBasics/index.html","1b0f24d87cc4757460b8b9142acf8e87"],["/categories/ComputerGraphics/Games/index.html","878f8c4067796dada99dbcc66b9b06d6"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","4329bda1741b8aa14aef07f10af34820"],["/categories/ComputerGraphics/index.html","234cc6c93922388ce91733c5120e9a80"],["/categories/ConfigurationFile/index.html","198cddc3c669ffc141d455eb8db3b036"],["/categories/DesignPatterns/index.html","504e258a7e177a67b74d41eafff818a0"],["/categories/DesignPatterns/page/2/index.html","244a85c21d40d896861317a70ec9870f"],["/categories/DesignPatterns/page/3/index.html","bba533e4c41fedf7121ab3f1dfe97555"],["/categories/Lua/index.html","dfd23aff87c0ccc964e327c34a091d47"],["/categories/RegularExpression/index.html","d6f7a0e44f320fe06d31b99dcdab5e13"],["/categories/Shoka/index.html","2ea1e9cd53c4df544c6b4df576e9f981"],["/categories/Unity/UnityBasics/index.html","c5b63ac05afe3a01cd987e71dedd8abd"],["/categories/Unity/UnityFramework/index.html","875a00a8785029713e844fb82e8a719f"],["/categories/Unity/UnityGames/Unity2DGames/index.html","1c934bf63e8c196264d47f1b91cb7f20"],["/categories/Unity/UnityGames/index.html","1b4e4e285caefc61fac1bf724f9f0e5c"],["/categories/Unity/UnityRender/UnityShader/index.html","59f81b9999438874cc19e62aee8b1d1c"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","d5df74c33ab8c91e3f20de651425dba3"],["/categories/Unity/UnityRender/index.html","951720d6aae090b839e9ab68e1e0c9d2"],["/categories/Unity/UnityToolClass/index.html","64ddfa39f8d82891a672477b56efc933"],["/categories/Unity/UnityToolClass/page/2/index.html","4446ae5cec4bad11540db72a68d2aa27"],["/categories/Unity/index.html","15e4aef7f17156b93a3e4ff2027ffdb5"],["/categories/Unity/page/2/index.html","2c2033ff2917d102c8c437fba6c55cdc"],["/categories/Unity/page/3/index.html","c1d49d158441327482f8bc5195806673"],["/categories/index.html","455c70a468cdeaa6f3964f8087d69fdb"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","242a976eeb4270e62897b43492547732"],["/games/index.html","0222988f0d56401ac8bd57750cb330d2"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b389d62655e82d8ea6f35cf8b66240ea"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","63171a02e5eb549aa1551b196b6205a4"],["/page/3/index.html","32dcb783ecbcabe45df81e88a5f0d17a"],["/page/4/index.html","ca1b20a8fa887faaa974682060e995bd"],["/page/5/index.html","949eba41e0b68ff5cffebd3aac460f3e"],["/page/6/index.html","b119321d830e4c1de26cc2c005eb0da6"],["/page/7/index.html","04b2877d7050743b056a1c19eb602773"],["/page/8/index.html","3e79a7fcf18c141941a736ff67f0c8d7"],["/page/9/index.html","4671fad31d680540df96804dfa40e439"],["/sw-register.js","a3fdb0845e668848800b1ccbd5b23e49"],["/tags/2DGames/index.html","e2b07d7e3aa129e1af4df182a16d12cb"],["/tags/CPP/index.html","8fb5026d2ed0c39136b4cf3b60f923cb"],["/tags/CSharp/index.html","c3f866aa726c2fcac8afe2967609f81f"],["/tags/CSharp/page/2/index.html","bef315d24d2d75590a420cacd27b1c6a"],["/tags/ComputerGraphics/index.html","f29214ceea1d4145847e750610d5b662"],["/tags/ConfigurationFile/index.html","7af35ec1e79dba6e4fb2f091aa10e69d"],["/tags/DesignPatterns/index.html","eb1e8d323074053d7988938f8ebd6c6f"],["/tags/DesignPatterns/page/2/index.html","295e19e4cc7707ddbbfe9b61ba5591c8"],["/tags/DesignPatterns/page/3/index.html","7650fe1b59e05d87e65632976f1b9541"],["/tags/Games101/index.html","d23738c3f3c886517533457939e114f9"],["/tags/Lua/index.html","17e03be86eaea4bd9d6ec349a2e5ee38"],["/tags/Physics-Based-Rendering/index.html","a2b62623923fc489e40eebc3a062f668"],["/tags/Shoka/index.html","e85fbc72096796bff3c5c5019274df60"],["/tags/Unity/index.html","64fe169fa50bdb9db488c7a5579c6bc4"],["/tags/Unity/page/2/index.html","9691c25d29ac7792ce614c510250c85a"],["/tags/Unity/page/3/index.html","4ff0d56cfd83b23ce16a7e41625bffdb"],["/tags/UnityShader/index.html","f506ff48336dfb18dd9f0433a30f3016"],["/tags/UnityUI/index.html","9c2a0e930f62bef9da608e16661271ae"],["/tags/index.html","b836f9df69230da52e5d1f30b48302ed"],["/tags/操作系统/index.html","5ab004e18b4abbb0b604309d3506ab4b"],["/tags/数据结构/index.html","20bc2d7461059ef13b1d963c7398b4d7"],["/tags/正则表达式/index.html","9067facf748df1873b8af992baf9367c"],["/tags/配置文件/index.html","42ae0c811d446350d43ed76a1aa2aaac"]];
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
