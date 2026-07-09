/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","27298cb4dda7f6081bbae6f501ffcf17"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","0dd96a1b89701e91a60e7c26a04ca4fb"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","5142f57dd53b6ef7847d1ac74bb88aba"],["/2023/03/20/DesignPatterns/设计模式/index.html","ff7b442e988feb390af8ae9f71177bfa"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","0f076a0343fa61c7352c97dc8b96aa6d"],["/2023/03/24/DesignPatterns/单例模式/index.html","5c48fec21686ef04c7f865f7465ff6fc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","87274327785e5f46e95137504da41644"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","bbd20cd61e8a0665e3c70b9c71b8e9f8"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","b24971cc4ded1b1755afb827e15bddb1"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","79e61eb25ab048eafdbdff500765789b"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ca5a33595a5f5ed612a32c55703aad70"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ddf72fa82489333279236e7de5fe0cd2"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","7985e7984eec9ef215da29282cf87e42"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","0986bbea64cb50d415122580480dc35d"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","c27c905d192749c0a5d65922d1a3d693"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","5c1ea777b4e37ab8657505bffec8ebc1"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","35956726cc20a1386539c0847bd29def"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","d74f27a85be8977e2aa821be08a3e5f5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","c1f8afc92067ca8366d5e1c3a7599433"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","cfa7f9c16e5c491c6825787732cc064a"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","85e7dec16bc5e33e467f33cd61294f49"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","a3d074b1175b4ec8e779d2e9316c6184"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","ac31f1f49551cfbb85482e1109d8d239"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","00b52908bc051120d67b16726229d6ea"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","33fbfc88b07f30d1b4fba8dfda3e7507"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","216b0c9c0782d8ed5830fcef758d1b59"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","f21b9839c95967a837c3b3afa7513a5f"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","c128fb4cefed53fca351e04e6c8e9ccb"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","f0fb182c8bf6517ee2f70d6e40bdd0b3"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","98d8a19d87890ab722a6c61348151170"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","28a83275c6fe4afd7072578f735097d3"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","910e209aa8639eb58acda6e3c707a5c2"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","3b6593d258c5e1bbb21091c59ffd40fd"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","e685f60c5d43310efee1991b0e11d1d9"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","648072fa270bd158743f344a1dfb4577"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","e3eae5b50462eb6942ca750f840e1842"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","efb6290d83931c44fb14c36bfe00027d"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","5cd59bebd93dc9c206fdf21b0d988714"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","1759a4083ddf38248df5f3abc480153e"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","a7999f659c9347fd2438605bd49f7d53"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","bcf6f445d0b644190f1c951eb3928047"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","39a279f807425586b224db6dea5b4606"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","2c56d3944e15b61f4a324a0db3bc3d8d"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","fa1deb270b8007be07892bf3b0cf5875"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","34e108bb74fe86d3e8c683fbe4273655"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","6185e983bc0b43a19dbc19b7be22ba3d"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","e30098e908f8ca8f613325c0570853f9"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","117a14de935e93543c1460e3e44a1291"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","acb77604891c1ec25b7c19cbdc553ca3"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","3dfcc3e52842587d742fd47e4dc2e84f"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","7de4661b7023414218207167fe6e39ba"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","8160ab21494064b65765179de7fa9c7f"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","f700f4ed6a8fbb315619988389bc0935"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","2a1ee43b4f4f61402a794fabc2a561e4"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","f00d5ca9edbc36e40c00ce8e6af9bc49"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","0981541aead9280e3c604b0f3f22dd6b"],["/2023/08/02/ConfigurationFile/JSON/index.html","e733d5be82615b97c338cc9bb0a968d2"],["/2023/08/02/ConfigurationFile/YAML/index.html","3d1b4f1da6fbc9830699686ac7553d8e"],["/2023/08/07/ConfigurationFile/XML/index.html","56afd6721cee048015151e09fd6b9709"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","573dfaff2c3838eb365bc9a18b6377b0"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","6481b62b8cc7b505804752a9608089b2"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","4e7d19c31e1decaff3e3832dc028fdb2"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","4148966fc59db842904538dc2a02d9e9"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","a83c2c816c1c81418f9aba76918dcf8b"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","15a5b6b08f8e38bc2e5c618719cd6626"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","6d9c09add18e8e88ccd05c480ef1d037"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","13b240292fca36d5bfb9641b7d513c73"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","68ea849af5d010df574531f917703431"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","876809977fcfb17f7df4da6c2c0c8ae0"],["/2025/01/10/RegularExpression/正则表达式/index.html","aabb480715298ec46396ac935c844104"],["/2025/01/20/Lua/Lua/index.html","af42989115e1fc384faa37d0d7bc3b6b"],["/2025/02/12/Lua/Lua + CSharp/index.html","c380edf48714a6f1c1b7c1ae44347878"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","abe89a505fd20d36116a573db61142f5"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","0554ed345765a63f56967fbf6d128357"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","9ba0b4b0f64b4e08b978b565542a969e"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","9178d2cbc2ec702a5562af9fdf1aeff0"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","e842e607012a3f379ed8bec24c4c6a0c"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","6c7c9a6643b3705832cadecba2ce0418"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","70f4c64d99a32a43f730e9aef27e91b2"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","4a1c60ba0ccb9ae68446b84ff3028db8"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","7de74c27dbd0b416cfc224c9a6179743"],["/404.html","6315bb39b8444daa55e3ebf6dcdc129e"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","c0449eb41a1b7131b7665cef3a532003"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","73137cfced34d14763ad8161a3433cec"],["/archives/2023/01/index.html","0843ded80779bd50ace87ac1c855910e"],["/archives/2023/03/index.html","f564cd35610206e9f378bf6954175224"],["/archives/2023/03/page/2/index.html","75cb4a1af6885a1bb31d6f96ec4196b6"],["/archives/2023/04/index.html","f5d91865a6f0d564ec5e2398f5f89ae5"],["/archives/2023/05/index.html","cc20897b418946eb698d948f276f870c"],["/archives/2023/06/index.html","f3abb04b87d2763ae4214981f8baccda"],["/archives/2023/07/index.html","50b86728060dd6ce8f7ae8c0727c16f1"],["/archives/2023/07/page/2/index.html","c0aa854355cd1429064bb0de231052c9"],["/archives/2023/07/page/3/index.html","0049574ab8ba511bd03f16a8e5ee44bc"],["/archives/2023/08/index.html","3ebbb88b7db96f0dba9eb03298137f57"],["/archives/2023/12/index.html","2d450ee151f68b27268996b412080dc9"],["/archives/2023/index.html","139d451788b6e87e974ad3a75962fb28"],["/archives/2023/page/2/index.html","08ad438c60767790f1dac0e78895e69a"],["/archives/2023/page/3/index.html","b87614b629961ad6c71f7ecebf649784"],["/archives/2023/page/4/index.html","0aa832bb683aff98540bb73bd440ffd3"],["/archives/2023/page/5/index.html","c5c9943a260b03bdf129d1c424036b28"],["/archives/2023/page/6/index.html","c58e253b4b91a1d8fd735e8c7db847cc"],["/archives/2023/page/7/index.html","134b7c679a5c14f81379e7b30076b69a"],["/archives/2024/01/index.html","107ba9117200c5b22b4b8eecacc639dc"],["/archives/2024/09/index.html","64d4f448ffb230dc79fb0f6a036c0d8e"],["/archives/2024/10/index.html","f319e77499c0d47e3e57c1d68ac5cf27"],["/archives/2024/index.html","489ce90e7a4cedf3dea9509800ee4b19"],["/archives/2025/01/index.html","087f425c58a2bf4bb454dd51d2a9aa38"],["/archives/2025/02/index.html","a7a8386e781d2b1cc2e42c37312bc432"],["/archives/2025/08/index.html","aace5f46c5ca8332da69d391dd2e8e3d"],["/archives/2025/11/index.html","d7ab977e3aa2963e2dffffcc6f1a268a"],["/archives/2025/index.html","198774fc2004baf42c7b08155e196b2b"],["/archives/2026/02/index.html","ae9d8e6a4d115e1a9b7d7cdd7f0e7365"],["/archives/2026/03/index.html","53daa4644c2d6a570f81f1989a295c1a"],["/archives/2026/07/index.html","e66663ef8283814b8176c01bb9d40e97"],["/archives/2026/index.html","ae8a04e4ca993c2eede0709704820a91"],["/archives/index.html","b2c4cac6092334b71c02e709f2d7141f"],["/categories/CPP/CPPBasics/index.html","b50aa1f846c20b6266520488c8a4431f"],["/categories/CPP/index.html","192f185ea91b3317b5ca8451c76a15bc"],["/categories/CSharp/CSharpBasics/index.html","afc4aff4341776dec518bb9f6bb517df"],["/categories/CSharp/CSharpToolClass/index.html","decf20984890f12f5a55f253baa0f266"],["/categories/CSharp/index.html","5bd6b2733464cc7fa7e286e4ea6a8fd1"],["/categories/CSharp/page/2/index.html","28c25a2f0b2c66bf4792438d6ac5076d"],["/categories/ComputerBasics/index.html","fa970f93c9e6707717b1bd3950813a48"],["/categories/ComputerGraphics/Games/index.html","e64c34a036e2339f8a519bf9d8d7b09d"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","621b2f109daa135879839d9c4957c582"],["/categories/ComputerGraphics/index.html","1ed220387665e8b4e1cec0f80a18af7a"],["/categories/ConfigurationFile/index.html","f90fd3f10267b8f67aabd9b8b582725b"],["/categories/DesignPatterns/index.html","bbd39bb33c5974c89464d9b869511ff5"],["/categories/DesignPatterns/page/2/index.html","8d4825c14cd2df593f66b986ed51b3e3"],["/categories/DesignPatterns/page/3/index.html","89b4c4a31c56a78e70017eb0b912bccd"],["/categories/Lua/index.html","930baae6851eedae04100d6c8e3e0abe"],["/categories/RegularExpression/index.html","e43dfd42cd31187925fbc1380a14f11b"],["/categories/Shoka/index.html","58aaff402138c39a65fdb7ce6154dcbc"],["/categories/Unity/UnityBasics/index.html","90ab3326160243b17dc07de89a0bed1b"],["/categories/Unity/UnityFramework/index.html","250f5c34aeed72b370ed295da437db98"],["/categories/Unity/UnityGames/Unity2DGames/index.html","d7b927b9d390250ed298c40547ae1344"],["/categories/Unity/UnityGames/index.html","4dc535be5f593212dbfaa1d92921310e"],["/categories/Unity/UnityRender/UnityShader/index.html","923e2494634d760d0a35872b4b70d573"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","0d5f5ce14c0b261495395c3ab0dd2882"],["/categories/Unity/UnityRender/index.html","2f6c772b5b372e41cf643292ad365fac"],["/categories/Unity/UnityToolClass/index.html","72839b22fb42196a6477b9f69a927d57"],["/categories/Unity/UnityToolClass/page/2/index.html","94e1ad97960761b6684943e52e4f15ad"],["/categories/Unity/index.html","081b1823a2e448a1de3c68b914c8b227"],["/categories/Unity/page/2/index.html","2f6ed225b8ecae60140076d79005ce40"],["/categories/Unity/page/3/index.html","dc7a1e263654947bf2347895db32d757"],["/categories/index.html","9c01ce96d0cfa0c1a41606dec71463b0"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","b6572e9d5c02a40c41342b0cd8c398d6"],["/games/index.html","4289ffba19b316a82666f2a5b5910691"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","dbc9851fe3b2421131caf0c0f47f1b0c"],["/js/app.js","9b788d2d502b4262e50618600e182d8c"],["/page/2/index.html","cfd8b5efa5df33c8cfc2941e28594dd3"],["/page/3/index.html","aadf647aba2a6afe378a7fd6ae62205e"],["/page/4/index.html","7493b74ccdc246feaca7aa926e12488d"],["/page/5/index.html","d100992fdb7fb70c2bbd3f11eb7702d7"],["/page/6/index.html","2489a343815bf763f2f84c83f04bbf23"],["/page/7/index.html","c3f4a5a2b9832e837eea63fa86c7c9c5"],["/page/8/index.html","4b72d9d5415cb9fd567092e6dcbd6af8"],["/page/9/index.html","04976b0678879e1b4f1c9c25ba6c89bb"],["/sw-register.js","02205ebc13bd12c0ef55ad812e607274"],["/tags/2DGames/index.html","462f6d27683a421ff6447f0dc8a3a556"],["/tags/CPP/index.html","9dfdf1abc171fc3d59956784f5c142f9"],["/tags/CSharp/index.html","abf44515f7bf3927fb2a784753c70def"],["/tags/CSharp/page/2/index.html","2e485696c147d9ead94ab734f6016ab6"],["/tags/ComputerGraphics/index.html","8522143e4b6ce5a9b70a645062b5f3cf"],["/tags/ConfigurationFile/index.html","9c61da22991d5f130dc76cd4047a00f4"],["/tags/DesignPatterns/index.html","21550a291d1cb7816c219e49203d68d9"],["/tags/DesignPatterns/page/2/index.html","5184b444d399156a78e46b0bf4cf6f1a"],["/tags/DesignPatterns/page/3/index.html","68738a042c772118120e9b797cf78755"],["/tags/Games101/index.html","89a333e881eeec97c9483dbb6cba1ce3"],["/tags/Lua/index.html","41ef90bf07652a1309c003a667a3aa93"],["/tags/Physics-Based-Rendering/index.html","faa2d597982e6f36762debf14699adc2"],["/tags/Shoka/index.html","6989b7edb87ceea178f7df8740f20fa7"],["/tags/Unity/index.html","0ddd0fc7107be7bb54c790f739bcad8d"],["/tags/Unity/page/2/index.html","51caab4981d5ca4d7619b50ad577d153"],["/tags/Unity/page/3/index.html","7e022f2126a45d6ab887e3e7247aea6e"],["/tags/UnityShader/index.html","9e22393fb10656ae6d525c9bd5e95561"],["/tags/UnityUI/index.html","c1e5774228ad444c0ee9e05781e4cb7d"],["/tags/index.html","1b43e101eb8f8315d445fd702c161814"],["/tags/操作系统/index.html","339dffa3bd50d46684b11b1d7c617476"],["/tags/数据结构/index.html","77b83d0cafc0874da1f5c56631463f6e"],["/tags/正则表达式/index.html","56ab7d8c8f5367455762bb55fc7dc484"],["/tags/配置文件/index.html","37c2e641881d3dcaa40f2177aa8926c0"]];
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
