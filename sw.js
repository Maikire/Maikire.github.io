/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","9d6643c7789db1e085604c55bedcbdfe"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","4241b830ef50dbd3c512f252941b14d6"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","280ff214087dd25d9eb1fa4c625846fa"],["/2023/03/20/DesignPatterns/设计模式/index.html","8a750d425bb6a28250ae39159a6bfa77"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","ae624781bfdecf20af8dcd8e59d55732"],["/2023/03/24/DesignPatterns/单例模式/index.html","651fdcccf9ca21c0460aee1fd24cf34d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","74793c23602204d499ffabf9acbc8747"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","f918740b4f8cbb5cb829049370fb8041"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","98cf87775a5530ab27059c7ece09cac2"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","63041e6b1032e0ef3b8d4a19d4c09013"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ac437a32a84a39ff56ba706378efa147"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","bb5393965c4e3c8763d0d9aacf9c9d9a"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","f12dd0212bee4125bdacd7da6c1ed0a3"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","1ae85ce67ed86f130a6b6017d2753cd1"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","64ec66fb82fbdb2119efc922eb4b826b"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","0191a067af70c6106a130d7a50234bf3"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","84cd010b9f0140e3e0d4ea03f2e5dc68"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","35fc9f9b21ce76445364e026b1dc1447"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","3cd0a08ae8e21145c5e52bd528eed2c4"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","4d22773c4070e36d96cfce0d773c9354"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","30cb2d3bc72ab91d3c540c5e1fab0c39"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","317e52a576b2f8c4e84d632bb930af2e"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","0005c606a1d4833974ad03f28ca368a5"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","2425c56224e057e7b89cb73ee22274ee"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","49eecb668f822dd0c7037ce32b4cbcfa"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","b91a6a8aab3bdac3a8f7d2d1b9f74f3c"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","993bd299bf2b440272f38c97b88df87b"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","48cf80a8c8cff45224f7063c13f0459b"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","5b454c506b4ec5d5fff943f19db38991"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","dba74488ba100406b73131eb24f893a4"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","35800d438e9c4ed50872c679f02c86ee"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","bfea8e920a857b6675275f37ac7117a3"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","acfee6bcd57688066433c31f9315e1d1"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","6290b3f4ba080591c912ab247fe9c6a6"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","ce6d469c8973a9396c4ec6885ce7ca5d"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","2d7a50653630ed45ac4725c25225933b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","f8cb441b3a09ca4dc523264f35cd2b46"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","59ddbc5f0427b3afc2d5253274e13aab"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","85e8245a91a1cb6416ded36a4437f053"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","4e181ba3841175de268dd08bee2d5a4a"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","301bb5e3995437e3796cd717c4dfa735"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","29da4eb6db467d5e45172b16fb368b31"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","006320b46ec7c5870f9a4c4daf9afd21"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","924cfcaac31b36bdca6bd59400498107"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","87b4d4c02b47bd0287228778e3f32618"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","e3db3c6f48cbcd1c7e1fe1eb46bda980"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","d7a70b0cd3ad6bb81071fefedffd1660"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","b1da03142176bb000f2e3af905f51cdb"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","6434fcbda5c713f392c790722d460d44"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","1377fb4ca2a2d97bbc6ec74dfa85dd99"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","ac4708403e3cac6d6b8b1f789ddfc520"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","e68acec5ccf6bbb0b861b7db87324fcc"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","1ac4599143ae2c204132c49ba10cfd3e"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","1a1e5ba24f41b59cddc3a04ed1407a65"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","8b36fa556880062bb6987cf4a8e7b2e4"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","3284fa113e3e3042e2b67dfdcb739b06"],["/2023/08/02/ConfigurationFile/JSON/index.html","5428684e4c2f9a7b0c03e1929c742e4b"],["/2023/08/02/ConfigurationFile/YAML/index.html","2cf43513cd077da9b14c472cf4c20d23"],["/2023/08/07/ConfigurationFile/XML/index.html","7ee3c91b10997bead944b9bc3c417d5b"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","c055031bfccb12524cc3ca30e6694237"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","6e3abe73062c9ad7785fdf4b8dc9f0b2"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","34194336c38e2aca4b4a7335eebb5fa8"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","3539bb008fa76deabd14d2bf567f5bf5"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","11c6b4673306f5740ef0fc1819a5643e"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","1800d0a194c5980e32b51284e5148f26"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","54e3f74e4dd136b6a3a62416bfae6206"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","5dbfd8c75b35109b3dcd97b4155e5ed9"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","53c5de0a56ef9a5154c4628865074f5b"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","add6704901eb82ba7178a5eaec9bd074"],["/2025/01/10/RegularExpression/正则表达式/index.html","67ae9a34736310a04b6ef51b3afc20f7"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","f7f86149d28b315882279a9f0758e4da"],["/2025/02/12/Lua/Lua + CSharp/index.html","9304cc40c4d195a43bc4f86f2bc56c5d"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","c7eb6be9d71b9b9e51f93ae2fc1b7a8a"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","434c155982f892b10ab6b01e97c21796"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","e1e795041d7775ed9bd668e713d0e7a4"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","6d7c4fc80b61f81bbb72d72589bafc19"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","66d11071341f2c42050284c17e7b8a36"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","e78ffc0f46827176b74eeb94e93dc0da"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","46411fab43c399261f3ed09a93dba9a9"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","f8e3f085b5588f96c8b5aae7bfa01c7a"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","51816da93576e4e5f1877f0fceaa85d4"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","31b68db9a14fd04d932c860273b1e516"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/404.html","c924afd8ea09e7ac6fdc1591fc0937c3"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","a975997449284479ac51ea43ea91485c"],["/archives/2023/01/index.html","f3d2b0da24eb12766dbf6e460dcd3744"],["/archives/2023/03/index.html","188accbbfe50f7816abdb6818f51e8b8"],["/archives/2023/03/page/2/index.html","5055168b86800762e877c9cbcc69a5b7"],["/archives/2023/04/index.html","7e8e7d3fb73cf74bd62de37506d11cb9"],["/archives/2023/05/index.html","096b3f9cb6c74e32119cd41b1e518faa"],["/archives/2023/06/index.html","60bc86e12d71cc7de3b68c32b6b22531"],["/archives/2023/07/index.html","19767a8f3b8d1238dac196e199189c63"],["/archives/2023/07/page/2/index.html","9a2e9623eb5cc07197082880099972cc"],["/archives/2023/07/page/3/index.html","7811f10bf96c0f2c13de9dd3a420ca64"],["/archives/2023/08/index.html","45ea01d1432208cf36f5eee1ba7fb306"],["/archives/2023/12/index.html","9666a063d8e07d6e17a7acf0f04e59d5"],["/archives/2023/index.html","600ad40da4c5f365667ef3cd152e7bcd"],["/archives/2023/page/2/index.html","4d7f52c0353d7156a657399f7443db32"],["/archives/2023/page/3/index.html","346ffe7a61f506952716775cdd1e8d0d"],["/archives/2023/page/4/index.html","703cd727fe192ccd05d94360b7052cde"],["/archives/2023/page/5/index.html","6ef51cc964ee33a8d919452bcac93d21"],["/archives/2023/page/6/index.html","f8bf9307ad638ce3284ddb71e7b6c0d4"],["/archives/2023/page/7/index.html","c20646aaef9ef9892a5a477d02b6695c"],["/archives/2024/01/index.html","f3b9056ffce10cfe202a609ea02298e2"],["/archives/2024/09/index.html","6266a79aaf1beef88bd9a5c708015046"],["/archives/2024/10/index.html","d5af27a7818bfe92ea0199f0beab22af"],["/archives/2024/index.html","e90dab2221dca7e23fbb9d659b65d2c5"],["/archives/2025/01/index.html","bf0359aeba1338311d27dba94095995d"],["/archives/2025/02/index.html","56d158095b5c7fdc567321b08abd122b"],["/archives/2025/08/index.html","67956f350c2a6b31c772dfa9f31b1226"],["/archives/2025/11/index.html","7a8c3f332818faea5cffd60f0db89cab"],["/archives/2025/index.html","09729e7be0a6295b4290c39f67f67741"],["/archives/2026/02/index.html","86c260e5166cf840c3b96b9a5425eccf"],["/archives/2026/03/index.html","04d074a8846e9b40cfecf2a0dd2f48a4"],["/archives/2026/07/index.html","d465ef0f9415db2a955ecdec659c629e"],["/archives/2026/08/index.html","510b7ac09776b290977d50110512fb68"],["/archives/2026/index.html","d525e932fe386bb406c595eb60635bd8"],["/archives/index.html","682fbac3cc0957369afc55663f77ae56"],["/categories/CPP/CPPBasics/index.html","6be9fe68177d20ef3169191ca6d6d41c"],["/categories/CPP/index.html","340000c47acc1d01415c7c04993ef3fe"],["/categories/CSharp/CSharpBasics/index.html","1074d85c82a3a96b6b253415f18685e8"],["/categories/CSharp/CSharpToolClass/index.html","895c525ccd1609bbe13c6bdb94a4ef0d"],["/categories/CSharp/index.html","70a0e04bdfc63faf6d51d6aa5fd3a91c"],["/categories/CSharp/page/2/index.html","af159ac8171db422c098f12601ea46ac"],["/categories/ComputerBasics/index.html","457c5f132be4459e2a46734cc28dfe50"],["/categories/ComputerGraphics/Games/index.html","ed8c443095bb6440c7734a4834c7f428"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","f60adabfc2d855c15a48ae6c3b95c2b6"],["/categories/ComputerGraphics/index.html","b006ca7bfb6bbe0f8a1f3f5aa03ea1bd"],["/categories/ConfigurationFile/index.html","a8d61a14cb7bbea00199bff442fba284"],["/categories/DesignPatterns/index.html","bf14291367abc0adac14a5c078b79fc1"],["/categories/DesignPatterns/page/2/index.html","e234a8ec048de9cfc1ea5830050bd2ce"],["/categories/DesignPatterns/page/3/index.html","8d4d58611737ef937ad92aff2934e3da"],["/categories/Lua/index.html","8a7b89f6b555d2c3a55197e5df7584c2"],["/categories/RegularExpression/index.html","b9baa559aa2af6668d6762ede16f04ed"],["/categories/Shoka/index.html","30a77c6ce1032b782bcba25e72e64e9c"],["/categories/Unity/UnityBasics/index.html","a0a3ce61ab22f9993b36f41b3c1b09dc"],["/categories/Unity/UnityFramework/index.html","53a2cf9b0391d8187a0ce088c9af67c1"],["/categories/Unity/UnityGames/Unity2DGames/index.html","8a5ff856372d6945c4e281e6347ec58d"],["/categories/Unity/UnityGames/index.html","8fe635f1814ac2f1e495bb6213837ab4"],["/categories/Unity/UnityRender/UnityShader/index.html","b1cc5df3d7e25fe89866614d95b576fb"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","4d0a65b0ab9339b53b5edb2d72c1f79b"],["/categories/Unity/UnityRender/index.html","d2a3648851dfa453e2225ff1ff6d73be"],["/categories/Unity/UnityToolClass/index.html","908a23b98417f0216138f7c22f4e1a17"],["/categories/Unity/UnityToolClass/page/2/index.html","c22ffe06b2dbc170abf7e8296d3a28ae"],["/categories/Unity/index.html","092f514b035805c018c4b3666892db5e"],["/categories/Unity/page/2/index.html","8f03d2b91a342d82b2fc5fe217a42d87"],["/categories/Unity/page/3/index.html","d1667ff96efd24ae6092ee3b2038ddc0"],["/categories/index.html","8d62bcf7474e04d00f3e24b93850a540"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","aedc0c1edaea44aba3e7b791afc4e942"],["/games/index.html","5fbf5533bad06d4a2fe301061b3d2b15"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","5d60f30d041c479689447ad7b82106a2"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","fb22f4db71462d340fe7a02795514dac"],["/page/3/index.html","93f88b3027dd4981765f4b2bb9817544"],["/page/4/index.html","92bca34dde2aaaa0acff658ce7ffdcfa"],["/page/5/index.html","5bd77a424948c4a47b571d11f63bb169"],["/page/6/index.html","69ba84651e6aee57c79dd0b925c47e98"],["/page/7/index.html","0cccab71800f6919ece12a6b5d184f11"],["/page/8/index.html","ff4f040a1359affc65113dd5b8796ba7"],["/page/9/index.html","c791b74c78d96ce9ce1a360b5eae6f44"],["/sw-register.js","fe085c28947ada756fc8ef1677e5fb67"],["/tags/2DGames/index.html","96a7304fa8913cd947a636fd08dd630d"],["/tags/CPP/index.html","d99b44c2be2c05c34b58d51f8d81da12"],["/tags/CSharp/index.html","a7e54dc0324274d19c5e142ba3327977"],["/tags/CSharp/page/2/index.html","876f9d3d909525345554ebbcc2d50d0e"],["/tags/ComputerGraphics/index.html","2c9572d8e54d79e1b04fb82072ab7d51"],["/tags/ConfigurationFile/index.html","7edbc3befbc7387915fffb9464ccea6d"],["/tags/DesignPatterns/index.html","e622c0bfecea2c8efe2b3db17d827232"],["/tags/DesignPatterns/page/2/index.html","27400263ece78c0a8a145285749f3113"],["/tags/DesignPatterns/page/3/index.html","b66647dd55a56b7b2eb471d3d4fc1aa6"],["/tags/Games101/index.html","c8b51bd44af8a1449046345169f7ee12"],["/tags/Lua/index.html","fc39cc8e40800b1a5aa33cffb684172a"],["/tags/Physics-Based-Rendering/index.html","859bd739c380171e3bb21e766d379fdb"],["/tags/Shoka/index.html","752c1d83248cdd2113ae9ecbf879f476"],["/tags/Unity/index.html","d7cd072f85e54474da88e0ef1e0e0151"],["/tags/Unity/page/2/index.html","4ab2039d63ff3ce6ba667e12fbc1f75e"],["/tags/Unity/page/3/index.html","e03640423abc3ad742a2e8e768621612"],["/tags/UnityShader/index.html","93efc225fd384bc4b19fcb49a133002e"],["/tags/UnityUI/index.html","7e4f22cf3683caff72e9379b0b9eaaec"],["/tags/index.html","a96e609e13378d5d149c8a2dcff56e92"],["/tags/操作系统/index.html","a4bb8047ababe0f969c21caee14fd54c"],["/tags/数据结构/index.html","27b288f813b34f9ff4eeebda74f0949a"],["/tags/正则表达式/index.html","aaff751c12180ff81ca9181895bfc912"],["/tags/配置文件/index.html","ab6f7742f4bf2de75cbfc8a1704b3612"]];
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
