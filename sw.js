/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","47139a59b6bb5ff8fde2e8ed72aaaea4"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","583a63ea0120baf9c8d87bd8b136f9bd"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","7b19632eb1604e59d23aef64ffdc578b"],["/2023/03/20/DesignPatterns/设计模式/index.html","49ba860a7a29f4e3f667075bf2737092"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","63879cf0a82cf9a88cdf62aa5983790f"],["/2023/03/24/DesignPatterns/单例模式/index.html","a5adb87607df62bc1126ca5d253bb00b"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","ead94864ba4da664f76911481c6c4a71"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","d00b552efb29827d812aea592e810859"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","ca1577b05faab4a390e05e46da8139c5"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","c60f5b55ca20196f3a06305784660513"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","c1fb7bddb6b20267f698304a7d39406a"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","d6cc4b96210d3821bb46b01474f1eafe"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","8ce8c0dc1560976e35096b3d16c2db40"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","3b56900aa89337f8c94cbc76e83f99b3"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","db069945633676862e6791467ed0ebea"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","b35fe15ffd5d355132bd4baec4f71878"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","67979d3b72a9e33dd9c83acf3443e4f6"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","b54289c965926dad5d65328c7ff7c9af"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","9f79c4ec519899ea27c31311686b0990"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","9a24c7c7b02d2b12c72d19711848fe9c"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","81ab88855aa8e9c1340d8e8b798bb61f"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","abe3de30ffb8bc08fe713779b96fd03a"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","58ee5ef92dc9fa7ff0da84a6c31212d7"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","e4b9f8452202a82a6b97817277fceaf7"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","76833cc3dd54a2bb36171413c522efe8"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","2c0a710bbc23731ee3d0cd6d07b20f3c"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","3a4b55865199a9fad42751e95d4ecf62"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","020c0741d0553f21eedbd2f6138ce0b1"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","09da627ef28f8f382a801041c70feb43"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","94c82cbe67860b84bfc6f421a8c7b094"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","61bb2f13b7bbe5bf4f0c4a0e1a6377c5"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","066501a36261a260219bc03fc878c691"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","cb31c111740b4935ca550779027f18d7"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","701cdd53ae7c3de65fdeedee1a133dc6"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","4d580464e71dc9b51a3b87e3675602df"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","3ea52f08ae0f0413461b9e528d28a7f4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","946c7991a6e2d4e1349258c0d51b1279"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","67addde3852e0a03872ca46b5fd2a075"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","9835eacfa6abec3fb9b1a542f62616df"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","f4ed67d5bdb7fe9b5fb97cf191e05ad3"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","62d3fe226059a0029bffb43d278b873b"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","5e31806e579ac5376066d8b28b0a4a66"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","9885fabdf6d3241fc7027d8c1f98af89"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","89a30a431e9c750cc60c32ebb14c0153"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","9bd442db6946d0c2657d39d545889bb6"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","7c5de4ec7ccf265d542ab257e08a5048"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","d2f214e478d5cba0b9de3f8fd941fd12"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","032b4ed8c2805d56c97ba529f214ec5f"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","9bcd3f8141ab1018c58b2a2d63a029ef"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","2c3e1971841e9498f829b65e7b85292c"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","1eeed8857620a56e62133fbccee21993"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","008d9c0ae1ad87d92a072cdc39b36d1d"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","fd15ab86901edf5d9b13d93a4ec30d11"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","ff830f26bf57f05bd945794b1d547f2a"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","98eb1460e24ff21baf4cc26a8394612e"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","5b7cf9ecb525aed8ec5430aeed63dc9f"],["/2023/08/02/ConfigurationFile/JSON/index.html","dcb7659061a4ca571b8100662c3f2076"],["/2023/08/02/ConfigurationFile/YAML/index.html","bfcf8e1c9508cfc33499d5b4e280f180"],["/2023/08/07/ConfigurationFile/XML/index.html","1ae269e7b122e5e982ffa8a0ee167ca0"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","daefb5cef5f5cdf1964600c31ca754e0"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","7231292bf3ce5649fccf72a4cd09d6e3"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","91de472c7118440c6a5d98c9774be768"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","f069ffc098307fa1dd69e60be4cccc3e"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","22d16846ec0de1aa808c84cd716495bd"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","e0abde43ad4a337a3f99f4d31666c85e"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","032ce8b8efd3ed36cd042500c4dbc071"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","1f6e7fc6c950343cdd88b04867945dd7"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","6c6c1577dbda9ffddf6c8fd7526feb11"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","06802f66cf231f9affc39a24b913c6fd"],["/2025/01/10/RegularExpression/正则表达式/index.html","89093c80ae7d37cbab83d70e003acbfb"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","40ab2f32484e9d5d6f454bdade482a2e"],["/2025/02/12/Lua/Lua + CSharp/index.html","a2251ec8d9ca66293946e1dbcc18f0ef"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","c7f4cd51c954daa52f4fcab3ec979ff2"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","768f9653e7403cf96c320c346085285b"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","ad7b09eda08b036c81279d845bdbaf36"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","f2d49205f52b1fac125eceee1377e35c"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","4493707741d2ed77975def53d45c9eb7"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","3e8a79637ae350c20c849e6af01277a3"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","faab132f09d58942cd86af5b984763d7"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","7cf0d1c2007ee5211eb4fc94fe6672e8"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","6e95df5412d5029c14c71ac40ee0b513"],["/404.html","65bf419b824b9def1a74446c6202bb4d"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","a44784e4f4742bf66c917bcc2600fe53"],["/archives/2023/01/index.html","b44007845e21d56d853a10d46f882ef9"],["/archives/2023/03/index.html","1825cb7cb4a7ff114be51f7d53fbda22"],["/archives/2023/03/page/2/index.html","80b3e1987a8ff36b2d4ac23d81fe9b38"],["/archives/2023/04/index.html","6ff7b518e562cf26af64967ab1703cce"],["/archives/2023/05/index.html","0be9712580ec9c00ab05a35016d1c5e2"],["/archives/2023/06/index.html","6c69c79f2f2ef7f4691f1ab85dd4d60e"],["/archives/2023/07/index.html","ac39c481f26f8841881534171a7e7b23"],["/archives/2023/07/page/2/index.html","f1627237c912ab19519de22256c52084"],["/archives/2023/07/page/3/index.html","0870cb825f87bcdbba26830b5266a983"],["/archives/2023/08/index.html","3c59e426c5a75ced05976bacf1d94fde"],["/archives/2023/12/index.html","75b71b72322a84037144e345e5f6b43c"],["/archives/2023/index.html","6add665e4ba2dcdb30841a98b33220b1"],["/archives/2023/page/2/index.html","3c1e9c619b07a6ebcbb45a71fc7e94ff"],["/archives/2023/page/3/index.html","f8d725d112d55daf55f8225d15b2383f"],["/archives/2023/page/4/index.html","83904ed4374362354513cbc52908a15f"],["/archives/2023/page/5/index.html","058b90010e2bdada3f35ca9bd946842c"],["/archives/2023/page/6/index.html","02f6ba2fd0eaeb484381d2c5c0b38f73"],["/archives/2023/page/7/index.html","19d924e724a7c530938c365a585f3687"],["/archives/2024/01/index.html","750fb5fa4a9797eca2f366daf8c3277d"],["/archives/2024/09/index.html","48ea150c7e47c8d4fbb60f2d50810939"],["/archives/2024/10/index.html","780a345b46de12bdcb41fa43030bfba2"],["/archives/2024/index.html","cf1f5e6b5c9aef619dc0363fdc2bdb82"],["/archives/2025/01/index.html","081a2a0e34385cb085c6a9099e9ad89b"],["/archives/2025/02/index.html","c3f10c93693f672d668c3c298c70e461"],["/archives/2025/08/index.html","ac2c17b98e846efa1d1ea7d58c862a17"],["/archives/2025/11/index.html","53d72bc4f3f750060047b46ccb71a003"],["/archives/2025/index.html","8b3c9267773103b903638ee6ae2e7d32"],["/archives/2026/02/index.html","18f72f211cede97d6630b9adda7fb85c"],["/archives/2026/03/index.html","efc70037933cef9a83674c598960bdce"],["/archives/2026/07/index.html","0f1d1b294c1f034ff01ed09e1d3d4e39"],["/archives/2026/index.html","f797345ed98482e9bee9b8e9061a492a"],["/archives/index.html","ec4b3629d9ad7e6ea212ee13f26c90d3"],["/categories/CPP/CPPBasics/index.html","6045211cfc7e33d9a309426ce4a9d104"],["/categories/CPP/index.html","3f6fdd908fce3604ada2326b73051139"],["/categories/CSharp/CSharpBasics/index.html","e4436014447f693230586ae3ca500fbe"],["/categories/CSharp/CSharpToolClass/index.html","1e0bb21529b18c16127961854873e1e6"],["/categories/CSharp/index.html","59cd2963a7e2192b55af79657ab9f2f8"],["/categories/CSharp/page/2/index.html","bcd0e89dd9b0e6d122f3674c8887b955"],["/categories/ComputerBasics/index.html","b17f2398d0c472ac7d840d51fe7d86fd"],["/categories/ComputerGraphics/Games/index.html","33b24a088125a8cc28adc763a79ca83d"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","9bc5c7ae619fcebcde7eedeae0840fd5"],["/categories/ComputerGraphics/index.html","b962730251115ca7a1d072257950d3b9"],["/categories/ConfigurationFile/index.html","576fb9b22632b5fa32daf3d12f08e99c"],["/categories/DesignPatterns/index.html","873f48084adf8e83b28044fee209d32d"],["/categories/DesignPatterns/page/2/index.html","d9256068524d8d2d2ff20f763048ce47"],["/categories/DesignPatterns/page/3/index.html","24da4d3f1c86bd722fc6b941846b3e10"],["/categories/Lua/index.html","4340b31b512c137152f43f967974b55c"],["/categories/RegularExpression/index.html","fffd30219dae492b2a957aeb9604f8a1"],["/categories/Shoka/index.html","ce138ee68b66698730bbe8c0cc2561cf"],["/categories/Unity/UnityBasics/index.html","472a4c86f5a62191ac1aa7368de1bf2f"],["/categories/Unity/UnityFramework/index.html","53f07cc8aad68f3a2e71498b63a47777"],["/categories/Unity/UnityGames/Unity2DGames/index.html","385fe066a27a087cd024c8daebb90452"],["/categories/Unity/UnityGames/index.html","7c14961d7d743a16314f90962a862a60"],["/categories/Unity/UnityRender/UnityShader/index.html","69655efdce6c175bc32ca9cd3607bf99"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","a16c27d4529df7a29774628123f8331a"],["/categories/Unity/UnityRender/index.html","a3d0d4283e45116329f315fca922a022"],["/categories/Unity/UnityToolClass/index.html","5efb7d9511acc57070b79da50089bcc2"],["/categories/Unity/UnityToolClass/page/2/index.html","e37253c5334a5490d4f0a1b6ae414d6a"],["/categories/Unity/index.html","4e8f226d00920d294a75c3da838b9b6a"],["/categories/Unity/page/2/index.html","0fc4d6ff3a534687b0f2c69e5f21204f"],["/categories/Unity/page/3/index.html","6acd15a357ad9c9d2e8df15de20c41db"],["/categories/index.html","e261395d488b50b1ab4ea47d1ba85fcf"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","d9e5e0cb08d25c7015ad25890d605e9a"],["/games/index.html","9923d4d8fa7da91f31e2d74844efec01"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","829f903ff3c96fe8eb12bd436ed2a556"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","760834bcfe1e585465c766d55a4cc5a8"],["/page/3/index.html","38ba0cc093070a7f74310cf70c9e516a"],["/page/4/index.html","3b86afd62d14c6a27a2e78f229f6c145"],["/page/5/index.html","5c71f931624fcb132e232beb0acb1256"],["/page/6/index.html","2ac706c8f8a97908df5d4c8c7b1a31c5"],["/page/7/index.html","6846792b736b5c48bec1a061422b9521"],["/page/8/index.html","cc9236603d8be1c6b10aa1ed03796bde"],["/page/9/index.html","95b8760735c68cbbf34e44570315f616"],["/sw-register.js","297addd78936eded1d8e913f654c2f4b"],["/tags/2DGames/index.html","68b845b7a24ca171af88b410d9b070cc"],["/tags/CPP/index.html","2fa6846772361a6ea6bfc122cb22690f"],["/tags/CSharp/index.html","d466d28ff8934ed6e7fc285dc2b1bf4f"],["/tags/CSharp/page/2/index.html","2fdfe527cad577d6304da2c4997c338f"],["/tags/ComputerGraphics/index.html","e188aacf9d2c62cf53903976afcb721a"],["/tags/ConfigurationFile/index.html","9f00e71f8c8e19fb39c1aebec7e11919"],["/tags/DesignPatterns/index.html","00058cca037d9766c39db27e143fce0f"],["/tags/DesignPatterns/page/2/index.html","288d2a80b49d3e73549019e69c129b71"],["/tags/DesignPatterns/page/3/index.html","01c10c419fa4f3cbd72eb4919d7addce"],["/tags/Games101/index.html","03a7674eb6bd4e1ddebc895bd8c075e8"],["/tags/Lua/index.html","821e58ac24d924bcf0052f8e5dcd1602"],["/tags/Physics-Based-Rendering/index.html","379ad3af6b09467341587ec22d8f7a92"],["/tags/Shoka/index.html","7b47ec83b2e9a2100732605e081ac7bd"],["/tags/Unity/index.html","52247352a7bbb276a7e0067867d05a2b"],["/tags/Unity/page/2/index.html","5cadbba0120248eca6a521eb5fb2d4b8"],["/tags/Unity/page/3/index.html","9d8536614ab0d8599c1c9b2287ae8ff2"],["/tags/UnityShader/index.html","81c2063e71abf1f7bc473eae0d15ecc3"],["/tags/UnityUI/index.html","bdeb3becc1def66d6c4c4b5a9eb14895"],["/tags/index.html","8867b768d5da4be7966b97a4e4fa6bea"],["/tags/操作系统/index.html","62d2e891dd283c66c87f42182a31379f"],["/tags/数据结构/index.html","24c157ca4a000f3185e3dd960ad01163"],["/tags/正则表达式/index.html","95231303e3464783de7cdddf8284268f"],["/tags/配置文件/index.html","5b949e03b0d551e7f3851c7e27d65d2b"]];
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
