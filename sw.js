/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","99b06e7f919e0847dc745e6cc44dfe24"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","a446c96787373aaf41f7718cc5639b03"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","6a7b238ded7e882999f81f6a7a86893d"],["/2023/03/20/DesignPatterns/设计模式/index.html","dda15eb442ab8e85e18f8aa13a8e0e91"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","2fed6582529cfe8c246e80fea344c7f2"],["/2023/03/24/DesignPatterns/单例模式/index.html","23a94a10f18373979faa1d4554ddc49f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","d5fb244dc014d94b8a9d7e3b9b20a5db"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","9c7210101e1ba58c89da969d60c2d8af"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","449bd2aa600e1f606d3bf23dd7507432"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","75914fbcd19c6306f8c7a25ec99a72eb"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","f89304fac4061348cd5b81be638d360f"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","00a31f9dd6e94618c506617539f3b954"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","a23e11601df60911e48bea91797e8be9"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","9e7af2843dab3f1becfd2ae75c3c8a16"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","161d08a38d88e2bef6dbc9c24f903d57"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","23a3768147521759356aac16168c2ec6"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","145833b1929202c89e94515135a0b6bc"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","c4b14864016190977c26ead79bb44238"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","faf8f89a52d694f05cb749a3da99b369"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","599218e8f772c424cc7425fbb14e7663"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","6dff7fd5501448d593261ceaea242073"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","82d37cc24a91d9a28af78fa144473c90"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","2e1f281601f7da39d94c9545fcd0e0af"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","a72e934c015985daca5f97d1e92729f4"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","7da712417199b44fc8395cea271bb4df"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","b6ce2cacebcb200ad738431df0bb556b"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","4d33bb4425ce27acb9b21bf0b3c602a1"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","fe47c38e54b70a0df1bf8920d0dcc6e0"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","fb6b7590b65287a1d902bfadf54cf223"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","ef7ef956b469b731cf6c0f52f5e27cac"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","0a2724ef931bb4f3f13f2e537b829141"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","fcea798487a71f933ba9c4ee31785092"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","2c1473d25c0a4e4d63dee154da0c1924"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","5aecd8107978573716b2574eebe378b8"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","96f041ff0cfeef6a7b458010038111e2"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","61984bf4c814fb3e176c273f1bfcaab7"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","fe6b10272c1110b10ff52fecd8c6c432"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","35e8b7fab9419f83a3be240b550488f0"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","3e5325953224d9c307fa8610ef2939ae"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","5b0568685deabd5c50acfe5456b661df"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","7be56216b4c3a72b467f61e342e50887"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","08b17ac04faf1625cc7f328bd3983372"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","ba4aca13a34abcd459246134a8ec294a"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","485e8a6a3b7062a07760cbdfbdb250c6"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","6bed4603a8653a762caf1ce5346ab8e0"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","e0aa8caeb98764cb6330f6871762625a"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","49c993eb915c5d45c862835167e57a93"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","8c47bab4e00ab63818f462acfe9e6dcf"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","6d54ee50d0581128ba50cceeb8c64e37"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","12d6a3a2258ea037890911469ebe29a9"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","031826b8711caeb6f6acac4e701462b6"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","7b6f8258a144c190d20cc420f4ebad40"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","d65438743fef133ba78c3c1b68656512"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","6ed3b7f2ea4e814f963c227516ba5848"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","06a4f1f420a2c6b3c2133a92ba9c987a"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","5966818f64e6351c61f91e1b8a4b4e48"],["/2023/08/02/配置文件/JSON/index.html","fe8884a788824cba6b72023fb8e96aa2"],["/2023/08/02/配置文件/YAML/index.html","1858c3a710939afc66528c5c22b1c864"],["/2023/08/07/配置文件/XML/index.html","5fe3e56878061e3605b730b3377e67ab"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","bc9a2bc35b73a3b61d868e9a984f2138"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","d4fabf634517858eb87561860bb343d5"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","40cf403628c258d0f861ea1cf355bbd3"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","f82b44b619b52604b1ad64995dff0469"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","690cb1db8795c8fbe7587ced9cda4514"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","9c9d0f3207204a0189b1fef3c385bf20"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","182bf2896b1bed024b508751268d44f1"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","015908d7c32a685f633de5504f52017c"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","99cd086163165ccd9c6ad3f64f358ccf"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","5b4423c7c2151477179e79aa68b8de0c"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","36e7e6afac2c756117838a4597baf2ae"],["/2025/01/10/正则表达式/正则表达式/index.html","35e054bdd998bce549db2d7fca1d2947"],["/2025/01/20/Lua/Lua/index.html","8b518674140b86f9e639653613f08cf3"],["/2025/02/12/Lua/Lua + CSharp/index.html","5ca162204b8cb757420d8c5286de162d"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","3367aa1eb846af2ce25a554ddf4b0eec"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","ba82e4e83456b056c0feb9bb2dafa842"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","642609962be9d8b553ab2e36267f61aa"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","5dea5035718880a03f12f7dcefc6703e"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShader/Unity URP BRDF shader/index.html","2730b0cacb61edc190588eb08d09be1d"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","1ff1570a5b09d46cd04ec3547b8bda20"],["/404.html","6f496cb890a275be3063eed52bba0143"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","603a94b399f932673987fdafde72f8aa"],["/archives/2023/01/index.html","a40c7278886bb30f81108968f77f3961"],["/archives/2023/03/index.html","da5467931379790b8363668586acce07"],["/archives/2023/03/page/2/index.html","b938b2b882d87a75974155a2080b17d4"],["/archives/2023/04/index.html","7bcbd1a6283b4eaa4cdf3fc318ac4f89"],["/archives/2023/05/index.html","fc07f6c10fbc3071a91cce1ce296f2b8"],["/archives/2023/06/index.html","2283011ee17584794dad9d3880996e2b"],["/archives/2023/07/index.html","be5fc059d9bbf44dd53dce541aff6b5f"],["/archives/2023/07/page/2/index.html","faa366a8babd7ff37ad4a77fb375679b"],["/archives/2023/07/page/3/index.html","8d969a4f6753515cdfc1f25aa905ae0f"],["/archives/2023/08/index.html","996a5ab7e3b252193c0a2c41ff432fee"],["/archives/2023/12/index.html","cf85adda77287a860feabeb9d23228d1"],["/archives/2023/index.html","ae04014cda03a36c3c1f7d50119c783d"],["/archives/2023/page/2/index.html","e9c22089b8701ecc041e79f9857efddd"],["/archives/2023/page/3/index.html","0c9ccb1556c46c11d51c22f1466976b5"],["/archives/2023/page/4/index.html","c7df942063235998ed54038e3bcd1910"],["/archives/2023/page/5/index.html","ff75276bcea479480ce0b8e72a320de0"],["/archives/2023/page/6/index.html","469e5c9a406b1409661bf8c5398f0f54"],["/archives/2023/page/7/index.html","eaed2246ab1fea082a4908e1d8ed42b4"],["/archives/2024/01/index.html","d474bf8893736ecd020e85f8012534a0"],["/archives/2024/05/index.html","f8eb175558012148a158f31ba9298f38"],["/archives/2024/09/index.html","c972864c77af6356e3ee0ac4409e3bf8"],["/archives/2024/10/index.html","75f888d5b8b0dbb6ef35b7f80c77671f"],["/archives/2024/index.html","af9f3e78ba32de4de87e65ceadc30c63"],["/archives/2025/01/index.html","9bc65705162b04fef6030aefaa9a17cc"],["/archives/2025/02/index.html","97f6c2a92f96ef6d1b11c0698099cd47"],["/archives/2025/08/index.html","b07b45fc10b9fde6d0e2bad8ec6a3128"],["/archives/2025/11/index.html","0af9e07394b0590ed6eca498b6272a3b"],["/archives/2025/index.html","91780559b584d0b2b8db36ea622eb436"],["/archives/2026/02/index.html","5c8d4150b43e99b91ffc5a75a0f0158e"],["/archives/2026/03/index.html","37c4c90b205fbc50cd8a955f853bfe39"],["/archives/2026/index.html","7d8fb04ce5ebc6001a4c3014a02cf977"],["/archives/index.html","43d7972c09e22ae4cb1d98175ef1e218"],["/categories/CPP/CPPBasics/index.html","44f8af1a8cb4fa981a6256ee3b73c5d8"],["/categories/CPP/index.html","f1fdf7c04d5445fa4762eb65abf804ee"],["/categories/CSharp/CSharpBasics/index.html","e3a045550d1203c1de3aa8d587c0ff22"],["/categories/CSharp/CSharpToolClass/index.html","43c809fbc16a9877ff96e91f5e6001e3"],["/categories/CSharp/index.html","0985c25b42d0043a9e8a1100ff11af85"],["/categories/CSharp/page/2/index.html","beb60ccdab8ca477dcaac2478a636e29"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","c074c1d9259c36aa55981b0c5b8fd718"],["/categories/ComputerGraphics/index.html","0aa312b0e2264165168c2488b1fa3f79"],["/categories/DesignPatterns/index.html","a032a71025113aab0992477c40dda342"],["/categories/DesignPatterns/page/2/index.html","35eeef8bc75d4f918a9167d6b39bcb27"],["/categories/DesignPatterns/page/3/index.html","62dfe74009c93c65128632f9b0c86460"],["/categories/Lua/index.html","770000fc0718b9b999b81b00401d67eb"],["/categories/Shoka/index.html","5002d256b57a56621ec7931b73f90a86"],["/categories/Unity/UnityBasics/index.html","740d65827e2f5233253536b68664692e"],["/categories/Unity/UnityFramework/index.html","f9961db5e40faff0431bee074550dded"],["/categories/Unity/UnityGames/Unity2DGames/index.html","1abd5e1b9d5691772e8f286abbede597"],["/categories/Unity/UnityGames/index.html","9d643e0ab271cf4b046c0146388e8f3c"],["/categories/Unity/UnityRender/UnityShader/index.html","c1784672871ba4f41270567c16c56be6"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","ae37de3dddd2d85f2fbaf555bb454437"],["/categories/Unity/UnityRender/index.html","de8a3fbfde0f5e8945ada1337991a85b"],["/categories/Unity/UnityToolClass/index.html","7952cb7338f9ae8497f68362c82f9e0f"],["/categories/Unity/UnityToolClass/page/2/index.html","133ade4151243c760fcbd79ecac5a277"],["/categories/Unity/index.html","696307cb683e7144804b5d2bc35a7809"],["/categories/Unity/page/2/index.html","c4f7e206e13156f18f276479b58f1594"],["/categories/Unity/page/3/index.html","6627aedaccf0c628e6d1937e9cd671e5"],["/categories/index.html","f9fa3c2f5598f738b81836a8a0df1fb1"],["/categories/正则表达式/index.html","e4342c6f42b1040c796714e1c6486d29"],["/categories/游戏设计/index.html","b8314cf90cf36787b67898798aaeffe2"],["/categories/游戏设计/关卡设计/index.html","aa9d4c7f70f17c753233e97f8fc68523"],["/categories/计算机基础/index.html","05e67e9366d684aa640cf21cf1ec5d5a"],["/categories/配置文件/index.html","cfa633914867d02d2d883a667e75351b"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","9ee9be0ee3eb2e77ec5db77dd4ff34a0"],["/games/index.html","eea988448eaea753e4fb81172c728feb"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","3cbfde766edafa88cda4834e3992366a"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","1c71e2c5a3acddd19e278fb0a589ef08"],["/page/3/index.html","b71b4827580e519641332006f1c8145e"],["/page/4/index.html","fc575ccdb630e53cef5982614502b846"],["/page/5/index.html","ce834e60fddbd6ea55fa530b9622a29f"],["/page/6/index.html","e39f02775bf85fb140220a621f539e39"],["/page/7/index.html","cf663f68e665c45b70a43c3b92ce24e4"],["/page/8/index.html","a5bcc14a0c18f26b6be468d6b3b21862"],["/sw-register.js","c1a4496fc1221474d149acb096d53574"],["/tags/2DGames/index.html","fceb3a3d0e5bd0e27c0651df46c00699"],["/tags/CPP/index.html","c6a76f410e0e8b7f708292e6d665aef1"],["/tags/CSharp/index.html","20547065da9e6a43da3d73ede6cae6d0"],["/tags/CSharp/page/2/index.html","be62304bfebf5a84ef29b57fb447755d"],["/tags/ComputerGraphics/index.html","f7920f6c70f0bb410b215cd70e39499c"],["/tags/ConfigurationFile/index.html","119a2e97d513cee1fb409ac8c4e5e021"],["/tags/DesignPatterns/index.html","fdbd7ac402cbb4e1861729874f51b31c"],["/tags/DesignPatterns/page/2/index.html","0d9e9937500c7f18bf7b3942638259c9"],["/tags/DesignPatterns/page/3/index.html","5ced3bf6e5c6aec41a80cdc2f900be7b"],["/tags/Lua/index.html","64f11e92adc44384ccd834f8515f4dd9"],["/tags/Physics-Based-Rendering/index.html","593d651480f9aa6af3af100110f00e7d"],["/tags/Shoka/index.html","8efe88653b0d31eeb16a97813a632ab1"],["/tags/Unity/index.html","93f04beab0a7d97f9dfb6080028124f9"],["/tags/Unity/page/2/index.html","7cf82acbef3e9fad95e0e370fb9c8a4d"],["/tags/Unity/page/3/index.html","004d0188187cf9646a113b15b3bd44b9"],["/tags/UnityShader/index.html","5f3269c6c583abc3a0474990c911004b"],["/tags/UnityUI/index.html","44930669b4b01102aa8a4ad7feaf52fb"],["/tags/index.html","e64bf087ba3b2036b2000a4a7eb61b92"],["/tags/操作系统/index.html","73b86e82d2222f4b233e4c6465625aaf"],["/tags/数据结构/index.html","b816fada8f669175e6ee6d6fd0f8170f"],["/tags/正则表达式/index.html","564d1f8db31737959c74e3e836b39d44"],["/tags/游戏设计/index.html","1d0768befef2a97f180e9926bdd3ff7a"],["/tags/配置文件/index.html","48d2c33cb53771236583588d68f90cd2"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
