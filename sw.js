/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","e922d6042e90a456471104c966793b6c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","82c354ea6f4bb4a01c11f5331d3e3b53"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/DesignPatterns/设计模式/index.html","21be3004c4366d728744e29378181350"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","9608a48b3f147bc752bb92c54715282f"],["/2023/03/24/DesignPatterns/单例模式/index.html","17254a368ca3befcfaf5b24bfe41dcdd"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","3dba2cfe909dfb7239525170605765dd"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","774535d507625d29ea6e59ae4ace9509"],["/2023/03/25/CSharp/CSharpBasics/CSharp基础笔记/index.html","ce03f3cff2633f8f47f731c323fe214b"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","a42062ca292b216992daf32f468d0853"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","767c6f7205d26f564f0c066d1427bdc6"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","908bd26669ff303af64eec25fa5d09ea"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","287125bc7f81f1e8959ca82fb3fba5b4"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","d64d58bde9f757365e8249472915e723"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","9906960de52201b37d8177da368353d1"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","c6e733ef82b9758b302caa6d45ba2813"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","222770a6d5ff32e570db651596e744b4"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","12956ce9d7ce3079160b32dfbb168b08"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","81cce9a63c78deb5f7d33f603e879a65"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","5eefa705320385f5d9fa304cb3513ac5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","c51d61294a6195a197934091e316fb26"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","01faa5eb2dc94b6d66ef4bb4865ed326"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","a9bf5e1bc5adaeb6247a437cd30fb9e4"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","afaef94f197887efa949373603e32da5"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","b4d0b2ff65008ff12abf90119a02ccda"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","d47d0cd762a318600159f740c9b629c4"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","63f5b88b9042acfaaf188b16b9cc18f6"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","91e1c9a523fa7c843c8b5dd76cf108df"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","a7d17dbb7cc7085d80b79557cff0e643"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","0c70f58f37a15f6540df393264f1d6d3"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","de617981c78fd65ada375970a4d7ba6f"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","659b7d342e2dd9ab09aaa5be2e7ff032"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","48d7cadfee6ae9df5126f07b8a446007"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","2c386b892486b7bca68f60ac86cd9120"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","a0901a3c8dacaf7ec5eb4e70dfc6e76f"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","2dc0d8b9c5592d9e9e34d7e6b6591c58"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","ab9d25c5809c0773cd25a3b752748389"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","a6f8a80f36231604708e380d321ec037"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","cf5b27fb5d20a043c38812499783b98e"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","a0c1a078e024978e1876317d20f0adda"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","46790ac16139318c4fa15dfb74cf417d"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","87efeb10d2fec4132d5b39dcdde1f4c3"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","856e2599b78b8980f29397b1a758d57f"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","d0428d6b3b64d4a7a3df8d4772987fbc"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","4be8e531cdfff9be3866587fa15f5406"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","2cfbf897f01f1c7bc60dfb531f0c0d62"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","deac12869bcc559abf9b582743fc98df"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","9523ab442fe13c9c142e30f66e99fa64"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","b842eb2d9506cb7290131eb639ba5cdb"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","f8c10a63eaf88ea22bac57d9f8d6d8d8"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","085f55e47bf8e7808c20b5ad9ef8d7c8"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","cd0a7eb85866a174f55046e2a92fb735"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","0e5852860bca43241f280e2eac39bbd5"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","fbccb1b0f19ec80537796ce06495cba3"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","89aa987af4a308b742e4e57cefb40049"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","62fe0daf000bf853e2eb5a203f9db949"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","3592d7a2f37b6f4e52dae062974ff334"],["/2023/08/02/配置文件/JSON/index.html","444c7f707cd3abeea0319cc97f0ba22f"],["/2023/08/02/配置文件/YAML/index.html","2b8acf649a7a31d918a6913ad2f76723"],["/2023/08/07/配置文件/XML/index.html","8b15edc24e5aee1a6bb905c702b98ed7"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","6993b91f5d69050141b3b0cb34c733a1"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","dc68aa88aafefe9eec7ed6cf2db29ff0"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","8bcb6caf4f4c728cf094ca9dbb30ebbe"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","857765a4328adc2820de229d3f8fdcc5"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","faf8fa8fc2b9e99be2443c0ba8146b10"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","998aef4670b890ab56ad6e846166dbf1"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","cc17f1c6b91026177ff427d79848863b"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","79d04bfa02f81d6b45333a360d4371dd"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","1bcb1cd58549f11694070089663bfb20"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","2bf7e87be1e4ea0511d44b675e1a9eed"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","940d0f862536352ed76f0fa9778623fc"],["/2025/01/10/正则表达式/正则表达式/index.html","3e06cbc1c7640d72803d31b47feb0f40"],["/2025/01/20/Lua/Lua/index.html","b444ec3d944db22191b695872720038b"],["/2025/02/12/Lua/Lua + CSharp/index.html","a13ca526af67d14cf075d3a347566037"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","f3606f712ee33838a195acab142d8a45"],["/404.html","3a6e6e9d716c5c4c452aa7f8d15d0888"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","13f5af8cdce63f4f1112bea2ea677b21"],["/archives/2023/01/index.html","8ea72d1f31dbed24c85dfd42b8306e4b"],["/archives/2023/03/index.html","c9aaa2a9c0de0688053ad97281a9b12b"],["/archives/2023/03/page/2/index.html","9d95c5f672fc6a6a53ce43b46e0f2773"],["/archives/2023/04/index.html","68508f577eb891249ed9b5833bc28f23"],["/archives/2023/05/index.html","5f494574618ea86cdda27cb616c064d3"],["/archives/2023/06/index.html","6021966812de160a8c110c2df1519c77"],["/archives/2023/07/index.html","55309d7fc88077eee1cbde570a56da1d"],["/archives/2023/07/page/2/index.html","19edaffe844262da005b4be740b89816"],["/archives/2023/07/page/3/index.html","1fc37f156cc78136be9979fddead01ea"],["/archives/2023/08/index.html","81e5e2bd94ff03778476407e1feac095"],["/archives/2023/12/index.html","53191dbe54f8894a19b0d861b6e957ed"],["/archives/2023/index.html","b3cc0308199a05b23cb973bd39d4e943"],["/archives/2023/page/2/index.html","843c8ea25c0968858028824b66cb2d38"],["/archives/2023/page/3/index.html","1a0d2e9c5e0833f9a21acb0926ad59bc"],["/archives/2023/page/4/index.html","bf0b7edd02b764fd4dcdbf0a0628d48b"],["/archives/2023/page/5/index.html","7392df915e73903cb2db5d9ee3c1aa63"],["/archives/2023/page/6/index.html","6aa98293f590996605aa5fa4b7859c07"],["/archives/2023/page/7/index.html","ef334c4d37757d68be6f3e7b01f64599"],["/archives/2024/01/index.html","367c87e0dedc872fbf5b89cca2391dc2"],["/archives/2024/05/index.html","62aca92422008d52db160c2d0ad8e439"],["/archives/2024/09/index.html","574102f47a249cd4f6887afa4abec27f"],["/archives/2024/10/index.html","22d8356d345eba8fe685d0d9b08abc80"],["/archives/2024/index.html","bca7621ff1c25d4c8884ecab95677d04"],["/archives/2025/01/index.html","48cc14429f61a217e3f6cfb2a507baa1"],["/archives/2025/02/index.html","2661e78401316204a5ad0e92e8817476"],["/archives/2025/08/index.html","6bf48e83324bcd56473a80e68e839f7e"],["/archives/2025/index.html","73531a769a29403326f51154a295f61d"],["/archives/index.html","09e0c55a3209f787668ed52aecdfca90"],["/categories/CSharp/CSharpBasics/index.html","a9435652948f59ebf5abc216a4d46642"],["/categories/CSharp/CSharpToolClass/index.html","17ca9314aefaf93e5016362042773d6b"],["/categories/CSharp/index.html","1795ced569fb1fb56ebd48eed35ae226"],["/categories/CSharp/page/2/index.html","10cb13f5f39f84f82301abff52411e7e"],["/categories/DesignPatterns/index.html","250ae18058fc7ce389b9e1e2c89391b4"],["/categories/DesignPatterns/page/2/index.html","87a9e85ec3c88e0f8819ddc5254d0cac"],["/categories/DesignPatterns/page/3/index.html","eb9604932e072b00fab171db6c803a3c"],["/categories/Lua/index.html","d7e9cb31e81a094380fc013a6924b48f"],["/categories/Shoka/index.html","4b8229a5fb519520a5ff3bcca91e9861"],["/categories/Unity/UnityBasics/index.html","517271f52584c587f255d89db5903bf4"],["/categories/Unity/UnityFramework/index.html","8047cbc9f2a9525fef34a625a057de40"],["/categories/Unity/UnityGames/Unity2DGames/index.html","9eacbb0f651174216f357e0a50e3cedb"],["/categories/Unity/UnityGames/index.html","531a2c3797d6bac5aea8959ae3884972"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","39da88bf452d835664f31c4c507a1183"],["/categories/Unity/UnityShader/index.html","d125646c7d3e68b4b63c5f756ef4856a"],["/categories/Unity/UnityToolClass/index.html","1e5b7c34d39d51a12ec4140977ff44ab"],["/categories/Unity/UnityToolClass/page/2/index.html","65610715cd462f47e52c4516e9d7225a"],["/categories/Unity/index.html","2af277bc68ca73ad7bf53de474e86d63"],["/categories/Unity/page/2/index.html","795ef7a0b3956cb78f824611b347682e"],["/categories/Unity/page/3/index.html","93ea07f1e896ae727f61f1746ac90bfc"],["/categories/index.html","9950707bbb81e05bc3d052ee5b755184"],["/categories/正则表达式/index.html","c5bec780ae0de55837471b9b7fdd4b61"],["/categories/游戏设计/index.html","932bc4770de925540832b55d5de3e9a1"],["/categories/游戏设计/关卡设计/index.html","b7b6b571ce1906fcc614a1bc8f97c8e7"],["/categories/计算机基础/index.html","fb11332ad60ee25d2980d692fa0b8786"],["/categories/配置文件/index.html","d48b2f93a6c0e313c320422687a4df6d"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","97e951215653ef8c7525c7790955c749"],["/games/index.html","d1e7819faffa4156913a7f39237f3d0a"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b4d22fe1178e2663be72926048a6824b"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","56fc76b626447efe97489d2248e60e9e"],["/page/3/index.html","f5f5fde19040e15ce56bee26c2f72631"],["/page/4/index.html","77732e2498f0034263582b7f8e3fbe62"],["/page/5/index.html","620257b906076bbf36f27ccf70f5b6dc"],["/page/6/index.html","18ca8903b8e8eaf27525bed777a2b92b"],["/page/7/index.html","7d47db46a9d22081cfa4a85582df0cad"],["/page/8/index.html","991f8999c7f9ee63b7f05509cd629216"],["/sw-register.js","df30b93219bf5d4be087fcc45283e792"],["/tags/2DGames/index.html","f6d85ad1bb09244780cfe683c5ed8559"],["/tags/CSharp/index.html","b48f19f9fb8f24d1f2d0e13b5e23b2af"],["/tags/CSharp/page/2/index.html","b939e544aee65695a89440cbc1fe1706"],["/tags/ConfigurationFile/index.html","91fc6bf051a0dc3064514d9822e2e69d"],["/tags/DesignPatterns/index.html","02cc21a91b4237b93d0d4087fa72aedc"],["/tags/DesignPatterns/page/2/index.html","da164d5f6c4eaaee5b6fa370e5deb024"],["/tags/DesignPatterns/page/3/index.html","df3cbe4a5c7aaf9cf0d99d2c99099b78"],["/tags/Lua/index.html","907f683bcc73739f80170e02c6d21dcf"],["/tags/Shoka/index.html","89e7869b00c9a5f439316816148fcf74"],["/tags/Unity/index.html","2df10b427fa01d8d36fbe981adc55e47"],["/tags/Unity/page/2/index.html","b2a82822782650649c4b80fca756b299"],["/tags/Unity/page/3/index.html","e7ba9414b03a85423d31465a6fb57b92"],["/tags/UnityShader/index.html","d8f78ed5a4d70bd7bce9baacbc7a5746"],["/tags/UnityUI/index.html","51575e2e00323f2bf71c7693685dc670"],["/tags/index.html","9900a889d7bf756cb4c06de39430b7aa"],["/tags/操作系统/index.html","6597b33d7681874e6462d22fc7fa440c"],["/tags/数据结构/index.html","83af56e8319b8e2eb2da760f0293db39"],["/tags/正则表达式/index.html","9091340c56e7a15e710f0581ee645c0f"],["/tags/游戏设计/index.html","7ae0a78f11a97fe3e019b48225817208"],["/tags/配置文件/index.html","e84096f611940da7fe405982bebd49eb"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
