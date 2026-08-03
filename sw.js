/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","012b673fe069dabdd524587a8ad5b533"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","a53c1bd078f1c2919fc02d487fe11ecf"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","0d36ad74a48d2a79c78155dbe1fb8522"],["/2023/03/20/DesignPatterns/设计模式/index.html","47e1a96d036c132c03c601b0b29a6e69"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","a3155179ad0b059fbeae426ebd1df964"],["/2023/03/24/DesignPatterns/单例模式/index.html","ff3ad9251a0953496a6c4f2922e6f31e"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","991a1ab860890a3a12d330596b88c442"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","0ddffa2caf6eb0cff2dbcae4e0cae83a"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","10c17d3dfe08a697dcd051cb015445d6"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","bf0e0f39ebde4648ed6765f2c19f245e"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","45bbd72f9d6a8031f28134ae2276915c"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","e2d6a762f90bedc73552b716e161fa78"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","532483041d01023c804d7fd2883beee7"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","caa2d8c38826cd65660ac85d871b540a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","2a12b98ecc3e3a20a7222dab90dca732"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","5586737703b6679a9f7cf116ea97f750"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","c21916baf08745449c32eefbe722bb9e"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","9f63bdfd207e824bc88a9abc3d22925a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","54d5b8cb04a90d374849ce4ab8a40d91"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","6929609f36acc8fcaf74ec9764d1bf1f"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","70b43f2869dae46c18cfaae60c236232"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","8500d68817ca82ed5909c72a7bddfb6b"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","f0a8746d69d576024912a9917c8dc2b3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","36c5726e60e244556d4989269b10ca17"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","d45febf998028ebab1ff50b2900fd508"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","4bd0e208e21f7efd2bdbde162cbcbb09"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","92f5a154a631cf11d8ca5136da0842bd"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","468aca18b05b869a4aff1d6be637b8ec"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","9e5a4ff174eeab28c6aeef1b1c04e785"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","a12c693283009ef32badadebbeb03b04"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","738d33262a5f5b18a591fd67d05e5bc4"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","2a5bdbbab607c64cf1d652bda6896287"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","5ba665c7f4e25ffd5e4d622f98a75ba0"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","392a9433408fcb6b52cbbcf038cf2e60"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","89cd353038dba14311a1d92750ff7109"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","19756642a8772fc4a3857566e4942ded"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","3379358a2b06cae325313b7f88f7028a"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","38a39625fae54902674864f8c38431a3"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","6100b6a414c2cce50fada08752ef86ef"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","e4a3deec22fddbd4481951b1be239568"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","0bd2ca39608d1c7e622a0a0c1d00ae7f"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","e1f792bff4a95f3f26b25e64922959df"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","647fe7d8a9a1b44373214ef405760bf2"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","b8ed946976c93f42883cd413b3bcdbb7"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","72e1673acb4c6dd1620c717a540cb76e"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","cee79504bcc0f1d77a0a3bf2f576bbc5"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","ae04207a7b38c6ee1287806cb7cf1d33"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","38a0c7013361793074dc0d25ca32bff8"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","b6d8f5281cccd416b0bef46e890f3ada"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","3b8d74685d0541298ac025fcbb267c18"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","e2b4a84b3981df194889688cda9369b5"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","79d9c9295c2fb4be63f952b8a009d135"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","1d4d24f992306912739dbd1f889fb754"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","e6be697e83c9d62353e75922f78941c3"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","e419c8c6aec35d898edf2181ace644d9"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","1e681c852847fa9a4073e37294546d7d"],["/2023/08/02/ConfigurationFile/JSON/index.html","40e37c435c91a686d1f7592a086fb7a5"],["/2023/08/02/ConfigurationFile/YAML/index.html","af464b2590d8ad62245806f7f8680dc6"],["/2023/08/07/ConfigurationFile/XML/index.html","aeffcdea050a786bdf440dd07f698305"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","a9efb64c038d1950edec2f3d191507b1"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","034cc234a0310b88d6dec3765b35eeca"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","43ee8cec03b7435ff824eba29a72d67f"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","d7e516ff662ea0a4ec304f758e6ef190"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","35d55c3384dfb2b732b7bdca43d204a6"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","a80fce523569263892d41e7017456a07"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","046ef156106e5fcbaf522c21cc08df85"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","f6ec6f702f83c01793f5b50dc9a01cc2"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","843a42b5ed9326f332be7c7b22f5f9fa"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","53654c3bd76906d7ef8bb34a68d7fb6c"],["/2025/01/10/RegularExpression/正则表达式/index.html","6bc9e64f2741144a57ecf75e0840acda"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","166c791c4472320fd9d98cb505babd1a"],["/2025/02/12/Lua/Lua + CSharp/index.html","4193b098ca050b32538e63ca30faaef1"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","6b0bc6d4d9abc75ba1c80595b39cd15e"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","644210e1674d126f0356bb185b3a2980"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","08d93011935928fa266e3b53577e05ad"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","0dc457993d4a056e1ed06cfb8c34deb5"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","5f9983b8264f612c47c4c7aec2523667"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","1417a4e04e331a893039d8a3eae668d0"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","71aec7ae5d83bc9abb06c669fd0d2b4c"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","99188a360cb3269196a43d74c1d9822c"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","675dd107ab2faa2a76869c88ad967cb3"],["/404.html","14375f18949b9c7fcd9fae796f586a95"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","3b67944106804fdb74ef7ad0d3919b0c"],["/archives/2023/01/index.html","5831384f6fc5b2ac8c38a6c09f8dd6d2"],["/archives/2023/03/index.html","21a63646278950733d0b1c0db35e8aca"],["/archives/2023/03/page/2/index.html","0e0760b264376ef468616c3f863c52e0"],["/archives/2023/04/index.html","d5d8a9ffae828fcff90ca8fab888fd44"],["/archives/2023/05/index.html","ce54d044fdcb6ca7b389a3e0fde5fe11"],["/archives/2023/06/index.html","1203b4707cf98fdd1243f2ccb5dca0d1"],["/archives/2023/07/index.html","e353ba4088832f3ac3249c76177e9fba"],["/archives/2023/07/page/2/index.html","103ea228c01bf67daf2b68c529d6ef3f"],["/archives/2023/07/page/3/index.html","cddaba36d8f8296bd1390fb7e09ce28b"],["/archives/2023/08/index.html","657f553c0fadb43cb72dda7869449ea7"],["/archives/2023/12/index.html","480834636063eff0e997d7fffd5bc3ae"],["/archives/2023/index.html","33b3bc5a0755e6d7d3459bc22ddc54a5"],["/archives/2023/page/2/index.html","a1464b4ea4302adc5835fc59d2e7d7af"],["/archives/2023/page/3/index.html","cccc9a69b6aa5d87652ef940e2a42d97"],["/archives/2023/page/4/index.html","4c06411a0b83c3a90a15136763a33b1a"],["/archives/2023/page/5/index.html","8eafc98d25897272e71f6217ef3a93f9"],["/archives/2023/page/6/index.html","025e18d90c8a903fd1e7aa03043f3870"],["/archives/2023/page/7/index.html","1f262498f17cad045024834dc74c520f"],["/archives/2024/01/index.html","0cbb3691ceb8507d59b48dddf30368ed"],["/archives/2024/09/index.html","01fbefce995bf789b5f875ce0b175ab8"],["/archives/2024/10/index.html","a717379c5b148c3105b8726b61d4c119"],["/archives/2024/index.html","61afa3a7f118f1f3677eb03c395c030e"],["/archives/2025/01/index.html","f5d5fa50669fbc0606af534110601d92"],["/archives/2025/02/index.html","6faa03c1d858142aab528f18ab9c3de3"],["/archives/2025/08/index.html","6124dbd2a3108320a525ebe379f55adb"],["/archives/2025/11/index.html","f09ab79f35e6648c446156f83b366c0b"],["/archives/2025/index.html","f1c06c49dd64747ca8d36ca3fd6f83cc"],["/archives/2026/02/index.html","94a9e923249787d885c874532175006d"],["/archives/2026/03/index.html","2bf351d147179709aef4f3435b5ba377"],["/archives/2026/07/index.html","fc67c73f51adfba1639de3b937bf9f10"],["/archives/2026/index.html","fb68f5a7fb2755c7b69cc4e65f35af17"],["/archives/index.html","19c5611c41be1bd2f53e9dad84b31363"],["/categories/CPP/CPPBasics/index.html","fc96339b65e2b58221b8c2e3a8284d28"],["/categories/CPP/index.html","a54f5eb95f5b060f09bae0fcfeb73068"],["/categories/CSharp/CSharpBasics/index.html","5492a9fd2f7e711e4c438508ebc77e30"],["/categories/CSharp/CSharpToolClass/index.html","13bb413fbb31d95ea18585180bfafaa8"],["/categories/CSharp/index.html","84b46235157fe4d2e89d7ad3925a8f42"],["/categories/CSharp/page/2/index.html","73f57932d1baf9eb3fa78918c4ea9eb6"],["/categories/ComputerBasics/index.html","d10e29f672366e6f1c85ed6e85051f68"],["/categories/ComputerGraphics/Games/index.html","89d868d8fff51a19922ac0e19be67a1e"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","dc645e5cd4019e920be776ff7eec2e5b"],["/categories/ComputerGraphics/index.html","e5efe4df4abaf76395e93ce5d16c79fb"],["/categories/ConfigurationFile/index.html","d68fa93cdebc0ba50720e94c69ac0bff"],["/categories/DesignPatterns/index.html","565c2ff735f2eb7c7c9c56a5274efc15"],["/categories/DesignPatterns/page/2/index.html","260e37f628b26992b4b5e82e0f94bfee"],["/categories/DesignPatterns/page/3/index.html","7d999cdb79ed407a9f3dd6c9d8911d4f"],["/categories/Lua/index.html","6382eb2e88e67c9c41b48c72b61b263e"],["/categories/RegularExpression/index.html","5df6676fb246a0ad1b78a8bfe844716a"],["/categories/Shoka/index.html","1f0fbc21adf899e832bf92e2ed0cc888"],["/categories/Unity/UnityBasics/index.html","5ace94f749cea076580df8fc0bee6b3b"],["/categories/Unity/UnityFramework/index.html","617084ac2c2b18e77b780cb095b44d71"],["/categories/Unity/UnityGames/Unity2DGames/index.html","8e5fc13d64c485fa2d8de5cb6e7206e6"],["/categories/Unity/UnityGames/index.html","78eb94e5d62eb3064632dd186031f736"],["/categories/Unity/UnityRender/UnityShader/index.html","c5bd2612c7dbd88d7999340fefae4106"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","596af94d4dcf37dbc4aa54a7be7485b9"],["/categories/Unity/UnityRender/index.html","fd9c8b6b37e807782f51477707a09970"],["/categories/Unity/UnityToolClass/index.html","d3a12b72b8f1d69e5b1e9773d24b11dd"],["/categories/Unity/UnityToolClass/page/2/index.html","ec1126f2714701dced5c75c6a497b212"],["/categories/Unity/index.html","2069df289be8793503d584998307ba97"],["/categories/Unity/page/2/index.html","5392efc0b175e2c663ffd8b8ae7011f0"],["/categories/Unity/page/3/index.html","c155ee80ab089b13c43c4cf2d2b1ef1f"],["/categories/index.html","52c47ccb7cb8fbef7bfde193a4438dfc"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","f8ad8cf7b2a9d7685aa97d50fa9b75ec"],["/games/index.html","0134f3a50c9a4882037533dfd4fbb784"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","e2552c79ac3edba9b6b346497198fa0e"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","705ba710b2d83dc838e937958b9512c7"],["/page/3/index.html","3e1d265a1264e286b82dbb0310318700"],["/page/4/index.html","cbb76a147c649c3527329f379b5fb8ef"],["/page/5/index.html","239e5ef5ddacaa9994cec939e9cb308f"],["/page/6/index.html","3ec5139b2893be0932512b0954ce7d99"],["/page/7/index.html","e3601e844699ff9854511f87c3856573"],["/page/8/index.html","9654eaa56f2df9f985325fd730373a9c"],["/page/9/index.html","54ac2447e09a157da7bdb296720af484"],["/sw-register.js","508b25b980c85b55eeabec8889c9a239"],["/tags/2DGames/index.html","52a58d16dbb0ab96bb8a1d4f63c327d1"],["/tags/CPP/index.html","c7bd9a539982b75412e36e8de9ce8cb9"],["/tags/CSharp/index.html","ecf00faf48bb8b8533ff00bc06e15826"],["/tags/CSharp/page/2/index.html","f667728eb202fee132db5525f1fbf7c6"],["/tags/ComputerGraphics/index.html","f353f6b8488aa6f63f7dbf3a950dc390"],["/tags/ConfigurationFile/index.html","b1b316e7e4ef9de61686fe1d3cb468f6"],["/tags/DesignPatterns/index.html","2ea7cf78d6e5c43d7b50c9eb68752e85"],["/tags/DesignPatterns/page/2/index.html","04fe46d7f2b1a344420d812d36e17acd"],["/tags/DesignPatterns/page/3/index.html","1eb67aea4bafc4962a0325560e8c155f"],["/tags/Games101/index.html","1479f716d3b97054438a055cc61ddf58"],["/tags/Lua/index.html","bba44a50062e3b7ae65d563f123c455b"],["/tags/Physics-Based-Rendering/index.html","d977c68894b0b715cf7ab59fc3af06ab"],["/tags/Shoka/index.html","d4d10db203f05e8c9683c3b82d83a912"],["/tags/Unity/index.html","b269bddbb73606a5a1ff65794e01261b"],["/tags/Unity/page/2/index.html","d956b96f2e58a08fcdb4f4865ee064a7"],["/tags/Unity/page/3/index.html","4cb10c9715b47d436393b87cb7be5553"],["/tags/UnityShader/index.html","38225d8379b4f4fbebb44ef674f776fa"],["/tags/UnityUI/index.html","d16b37fe22ccbbbaba575fce84ee0919"],["/tags/index.html","1122fa9d822a88adaf45d7202b4ddcbb"],["/tags/操作系统/index.html","dc65978501c3b09670d85084fe95760f"],["/tags/数据结构/index.html","732540afcb60d02081a105818df89662"],["/tags/正则表达式/index.html","fb0f0c6171672c253886fe65bd753cbd"],["/tags/配置文件/index.html","245ee004ca83ad5b97f515e4b5034246"]];
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
