/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","1017bf4ac096d88fb1508933e76033a5"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","111eab28022315ebf011c88621e81fb1"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","9784102f680c8626d08988750c2d67c5"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","a0abe4304a6561838ae62d61932e9a44"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","b5ccb7247bd38667560364b966612867"],["/2023/03/24/DesignPatterns/单例模式/index.html","16a30fb9adcca18117cdeae5cfc34e07"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","7d5eee1dbc0d22011131ad5e2a1a4f8b"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","34db55e4c9856b1b06fd00b6ab974408"],["/2023/03/25/CSharp/CSharpBasics/CSharp基础笔记/index.html","b814fec0aee1a6f5c338f4fe6a555224"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","ed5ed21ff3a6791c107ca56c5a6c245c"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","bb5a219ea870c7ca6baa376861aad2b7"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","d006c519dc5cccf03016a206fdbba989"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","770a4b3e5dbf1c64ea6ca2004152d88d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","d3b659c29806478f63bae491b8f5c742"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","fe62140653f09f17becd126cb3a0fd2a"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","0c948eff308a25bbe596be7069a6c304"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","e5421e82931ed39317b848903f5fcb0a"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","dfc31ab7496a4344d2066ad190b0994f"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","ca7fedccefd506c2076a9f35bc0a90d8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","daf9fd2e9c0c649ea458803caacc14a8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","de0fcb28ec57d0aa432d4736a0aa23af"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","c9341e7e0889177f10b8836419bc7c86"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","d1aadd88830f4e7c1c7b4aaf4407d8a7"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","7d12287d2c1fb07d9e0270ed72a2d5cc"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","017e0a55af371cb1f27f41171d24d876"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","3d12654d8a8e9819a14dc08bc72c4474"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","113d2a0c643ed24f8c6856c714476360"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","e69f4418cce1c86dbad931f9b7fabeb2"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7deb34021665b562784a0eb6c83c6d8c"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7ef0b415da421226414f18d9421f96ad"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","16fe3963bc05743cdb751ca5411b9120"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","077ba091beb9f686a32326d3926d9366"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","51138ed4458ce9b59cd9d6bb65b47e0d"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","618514b9e8439d7b821d3fafa5979da0"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","cb3a78f50400d93db979833508b6f34b"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","9b421706a8ba3284d4c5d2bb1fa85604"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","05160a880d79d5ecb097dc3d0dd98ebb"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","c8afd6ca24fd2172b060479c39b05ce1"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","8d82ccc5f604f6f9f5af07516132baed"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","b191de63aebcd24cc3acb2824b11082d"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","c75bc62b8fd7c23947f1193fd7fe4a9d"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","146e8d21524dbeef7fe515aa2c6ead3f"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","06ec44180193ec86183b56eda81f78b3"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","b5fca93ee83780524c86786ef03fcc80"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","8efe19b812483c38a201df0327397ec3"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","622e0370e7e19b3f3efbaf7ee913dfeb"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","58a479e48885f2571332a6007d61e7c7"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","f65db88bec1987c5c0a2c92c4365b966"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","e261842daa68fca50b29bcab6183800c"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","aa8770c586d1d87a848c594038e9d6e2"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","a352fb840c69b99ce5887c7d3c304618"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","c9d4954c309fec1cc1aa2acef832e1df"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","cb09de50b38f45ce9ec6d8e1ed883f94"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","1dcb0f55e3c73f62c51a05f8f04afa0c"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","2651cf22294610b90ede9d1d6ff68e1b"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","b069cae03655d6bcd057513fa6fd1774"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","b69db9d747f25d7eccf17735abf369f8"],["/2023/08/02/配置文件/JSON/index.html","ce3c3a28d85b36e54679b576ab518295"],["/2023/08/02/配置文件/YAML/index.html","475600be98b290a36a9e5a007ffa39b0"],["/2023/08/07/配置文件/XML/index.html","9b0deeb9cedc83890d5d7bac19a6b059"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","3746a6768227eb998fad7cb0a458fc4a"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","1cb90bb52d88e140ebf23bae3a757d12"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","e83c4ebdf5fa9d88b1bc20f3b905e3f2"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","857765a4328adc2820de229d3f8fdcc5"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","abe5afab84ed00b5ccb6d0598ff6e3e1"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","6521c6c4f504d028563062dc386cbaad"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","677625bb6ce5de3b0d25a3b21b3b406b"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","602351a29d9f63e1a8aa5ab772391c16"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","4a7c568654e759d70137e78e34643714"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","e3092388e8fc1426c8286f180025a4ff"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","48255f496a11fd0ce08eb054664ffaa4"],["/2025/01/10/正则表达式/正则表达式/index.html","6f20796412bfc95107d342b2a90570c0"],["/2025/01/20/Lua/Lua/index.html","b1c56eb7e5a39fad4e3b8aca5ab2821f"],["/2025/02/12/Lua/Lua + CSharp/index.html","5f3d4b17397e6b228c5686047e2385cc"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","d4bd0e8df2f1e8d1c822ae6773137370"],["/404.html","898c96d49992266ef92e4a866e2e2004"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","d202350bec431669d2d335611298536c"],["/archives/2023/01/index.html","fb4b48003c3a57eaace687651e5db5be"],["/archives/2023/03/index.html","84904904e81c3dac7cdfe542f4786fb6"],["/archives/2023/03/page/2/index.html","303fca76dcce1b8b565afcff3d97780f"],["/archives/2023/04/index.html","0aa3105d2cd8980007a3a5691c583b8e"],["/archives/2023/05/index.html","d537062e3612abb4f9f831e2c4801e93"],["/archives/2023/06/index.html","b3d46cfb84c997d49ac558a363169d1b"],["/archives/2023/07/index.html","0a9a497823276bba93f4ca74b8e4552d"],["/archives/2023/07/page/2/index.html","fd88766d775dc86dc0ed62ec1a5b59df"],["/archives/2023/07/page/3/index.html","0f9b116a35b55fadd393f1cdd8c2721d"],["/archives/2023/08/index.html","7f08c84095f13d41e8b6d27773e4c197"],["/archives/2023/12/index.html","a1c6435e54ee5f6870c01b633bad771b"],["/archives/2023/index.html","b1fbb0f60fb644a2b759326530eddaf1"],["/archives/2023/page/2/index.html","5d3c1c91dc4b96ae8c5ca51b7106efab"],["/archives/2023/page/3/index.html","455744060c437f24f43ce198c3d60207"],["/archives/2023/page/4/index.html","c55518ba18c2b2c695568f046cbb794b"],["/archives/2023/page/5/index.html","7d3b951b9a230a80bfeed0af62b166b8"],["/archives/2023/page/6/index.html","fec2de9fdb65dff14af2fb5afb4762f1"],["/archives/2023/page/7/index.html","d280eeb520f18d8431741bad5a75a197"],["/archives/2024/01/index.html","f82f560d6fcf90c11be6bbd4d6174f33"],["/archives/2024/05/index.html","b98a91e2638efc83e0d1eb617bf99706"],["/archives/2024/09/index.html","7b8903d8b5e8c630a13ee3a6c6d6e91f"],["/archives/2024/10/index.html","4a67646a666eb3b8600dbe2f09595544"],["/archives/2024/index.html","aeab4780fa54e4ff74146e4b9e5f524b"],["/archives/2025/01/index.html","720b54e55ceb812078258a3a68822de0"],["/archives/2025/02/index.html","d606a602a8b2de63ee845248c579a347"],["/archives/2025/08/index.html","d838fae7d4ccdc3a97737e0b43083098"],["/archives/2025/index.html","d3055937cd84c28e193e3cef0a52b01e"],["/archives/index.html","4754880dfdb3b8da2ab284667538f816"],["/categories/CSharp/CSharpBasics/index.html","82439b64907c5a8c59cea94776ddd7ca"],["/categories/CSharp/CSharpToolClass/index.html","40324f0969e1578e1ef36a9fca020d0f"],["/categories/CSharp/index.html","1019de8c89e8835d91aababca394138c"],["/categories/CSharp/page/2/index.html","d3e534d75d34d5b96d7b94acfcc5f538"],["/categories/DesignPatterns/index.html","13a04ed1009c515cc03d27a7c6f8e389"],["/categories/DesignPatterns/page/2/index.html","e9ead4702fddac8db3dc5f3311567070"],["/categories/DesignPatterns/page/3/index.html","205a1a4a21866314c83777e09c2d6648"],["/categories/Lua/index.html","7e6572d6eb3f06ff4e2c05fe30c3acc6"],["/categories/Shoka/index.html","2bc85bcf8a55cd44e25205971ff86bf5"],["/categories/Unity/UnityBasics/index.html","6b4a27ca38ef3d288a1c0e4875dfb7d4"],["/categories/Unity/UnityFramework/index.html","364cf52fce970ad8168311baa9afcbb3"],["/categories/Unity/UnityGames/Unity2DGames/index.html","488a20f8fc41379d634f9d59d6b6d17a"],["/categories/Unity/UnityGames/index.html","37a775bc8b5bc2f1a6d5347e2ed0e7c4"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","ac6706b36470a55785d9e8e8d85d0388"],["/categories/Unity/UnityShader/index.html","9c59b70e63c92700eff0dd75ae0c921c"],["/categories/Unity/UnityToolClass/index.html","eb19c4e7ba73b13f7f963184932567b0"],["/categories/Unity/UnityToolClass/page/2/index.html","ed59af500ff9a56b22cdcd101564ef5e"],["/categories/Unity/index.html","816bc53af3ef14d84551ac35504745df"],["/categories/Unity/page/2/index.html","b2f6e86cf0252d36bfdd2a0e327048c7"],["/categories/Unity/page/3/index.html","1213fdc61fdc8e3afedd3d494842bd84"],["/categories/index.html","c6d88a4cec401df2b4c4aeb2203bff0e"],["/categories/正则表达式/index.html","b5c87989aeccc2dc8631d48e27651f1f"],["/categories/游戏设计/index.html","6e624c2597f4ee0ccd2fc33e693e8aa4"],["/categories/游戏设计/关卡设计/index.html","e75ffe9fc5ed1b500e23d29d8ae71899"],["/categories/计算机基础/index.html","3d141d2147561c3066a226b04963eeb1"],["/categories/配置文件/index.html","8c6b7019495cb09aa70048955b5e022e"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/games/index.html","4659f7cce2156c26bdbe8032591e4b14"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","62a348753635eada69dac4a3cd85de05"],["/js/app.js","e82d49d496985ae085d8b0ae957a0ffe"],["/page/2/index.html","96f0af68929e3e5c23372ea6b4b81acb"],["/page/3/index.html","6d99dd1e5623ba240210e434d709b917"],["/page/4/index.html","95f3add17fca0dd27c6363d22b3a8d71"],["/page/5/index.html","f851e76356a3a8bc517d38ff5fcf6e06"],["/page/6/index.html","b614de6178e7ae0544c2eb55e144ada8"],["/page/7/index.html","b38a64846d23acdb75693ecc2da3e7e8"],["/page/8/index.html","03182325c884fdd32870eaa93ecd69b4"],["/sw-register.js","fdb19765ef559d161ccac18156386371"],["/tags/2DGames/index.html","89ede7ace0ba6eaaa23f4e267bba40c3"],["/tags/CSharp/index.html","069eedde1468604b5c487e9f95bde749"],["/tags/CSharp/page/2/index.html","d80e7e9c867d459a65c704aeb3d4b90e"],["/tags/ConfigurationFile/index.html","1de332e29d2afe564713582037ca3f3d"],["/tags/DesignPatterns/index.html","f6def085b60e475cbaee10fd7a24509e"],["/tags/DesignPatterns/page/2/index.html","206c2b01f321c687399a359302a6c4fc"],["/tags/DesignPatterns/page/3/index.html","ad609b68367d21934727af8e96ead19f"],["/tags/Lua/index.html","6175e360b4043e130e909dbb39b28e26"],["/tags/Shoka/index.html","a8774f12cafcf396fc61811429581218"],["/tags/Unity/index.html","16fb17b2d8d6a26e6fe77ef4a21f82aa"],["/tags/Unity/page/2/index.html","788eb5f6ea56ba14cc79512f4c04512c"],["/tags/Unity/page/3/index.html","72cda0d7f806de771a5f8c0c4b288f76"],["/tags/UnityShader/index.html","113ca1b4f482edb96a5faf6f1ec95922"],["/tags/UnityUI/index.html","1a29b627b6cfd84ece7bccd64465042f"],["/tags/index.html","356869ad32f9abe59b637d4b183f6173"],["/tags/操作系统/index.html","be6d8d5a7efdfa76ecd9de29d90bcd18"],["/tags/数据结构/index.html","4e9c4d7e32871210b068a7e734b8789e"],["/tags/正则表达式/index.html","354bdd73592e7d352d5ffdafbd8c76f8"],["/tags/游戏设计/index.html","3a78ca4eea9f84a98148aae983a5c5b1"],["/tags/配置文件/index.html","5684b9ee9c1e84c81b16187a658e5b2a"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
