/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","dfb19f374e69f5fba1b55818d8242bb6"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","d06c5492b85bd350dc85a7a2762d8086"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","35d9da0516c365fc5629b2d58ecd5fec"],["/2023/03/20/DesignPatterns/设计模式/index.html","6b9b2ef3995ccc9e192827c76a41c167"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","8b6b3b4251cd3ef89b044cb7390956fd"],["/2023/03/24/DesignPatterns/单例模式/index.html","b08ac968a67e9ec1619610ca738c96b9"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","f072de64f96237fcb87d9ffe1bf3e6ed"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","5627933878f25e2b3373ed402636802e"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","c3b5a79b513f4fb6e5ba2085254a4433"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","fe8f9c313128c31912976a80fed62b62"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ff8146be01aaa5f2d5cba243b1189cd2"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","159be9ab386c86b2cfbf28642c54cf9a"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","793bc67f726cdaa119b32efe8c86876e"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","6914ca42e58bba226ada8ce594d91873"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","085f1c839597ba72e4f1fd53f151bfa3"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","55c72c5f090f608e1d4cfe951d6e7acb"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","b64cc45927a8dfc9e2b8cf06bd579396"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","f2d12849bfbb7b5a91216c0e22666333"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","5075c881130f8ea4e1daccee88b1ff9f"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","3b2ecc07df248ccb5b0005c717651293"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","cda69ee04af80b8d85260cca076eee9e"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","d3eda7ac6c2dbc6c09d98d4b1f3cbd1c"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","2e674dbfe4719d552b16603438c88c59"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","f6c9073f5df2471f5b5bc4d30b47014f"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","a6da65500bafc92874fb826701443bb3"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","631a861b8bdca7edbd7531739c08ab3a"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","773bafeed04254a830fe0cdd0a43f9de"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7b4b81666d23fbe71417d55fa0c67f8e"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7033dd2e736293eca703a59b02499145"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","8432a92bfdd0e3ce6915fb7cb412bc5e"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","571dc8079df70f069dd31119b7fce0f2"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","524b859cc699f2313125e3e54a5878ce"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","b71cb03b9ce01cffcea3f568b8138052"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","a9e1bbd4b3df4bb0745e8199927a18c9"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","cd8921324e7ccc5698b0f9027cd7d7c6"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","3770e78a713c07008b33fb497ec72f6e"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","0838fb7162505287a4db4105b4b97400"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","d93e2e1e1d742c54190303f869f3b8fb"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","c6bc1c3c5ca29b27ac943207e4203ccd"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","24b8d4173d9a2490a974bf3bbd7f8801"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","a83c0c098358603a182cbecb6f7d6942"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","a95c89a3e293dcf7c17646afbbf03b29"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","d22cf2eb8f63935f32af7e3df46b1852"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","d9ba930d06da287915e62de6526785fe"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","95f0a84d3d8b0f03b480e4e5c6456a6c"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","033e4e9a2299a4beba992e087aa4e8b3"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","f7640c3113fb4c9796ee5431b66f2dda"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","a57d0d192126d8f04162eed6fb22c179"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","b8c2c67620de899e2c95a81d45a36554"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","da4cafd22016b1529cbb89ba624b1bd4"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","69dd462cc86b22635287e1eae656c3ea"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","417d36b84bef227e0780ae083ade6bd8"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","08f78d92be8adef6c6144615c315e93a"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","f18b1863eb5381af58228c3e3416e8ad"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","c2e4ecb8353ee81fc44cd738936ad5ad"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","19b4bb531469343b42e9ab50671b1b74"],["/2023/08/02/ConfigurationFile/JSON/index.html","0a9a37b213f7428c3ebc0b688df6b533"],["/2023/08/02/ConfigurationFile/YAML/index.html","bc34035f63174ba278a4443ac7048ff3"],["/2023/08/07/ConfigurationFile/XML/index.html","78524316195e9707174faa850b8690fe"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","7e162727f1c76548ed7b0b5a91c56d4e"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","937bf40b988bca08361cc558c311ecea"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","129b9dc3ba86c728ca586c0e698d3d65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","7136c8eceabc78cee05107a125c3d9ab"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","46d456d86e79c9c77d2d8f3e08b9c5d1"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","eedcd95f5ca55490926d4b7a30471d46"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","a9b1817914322698d174d92dbd45b500"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","fe5c7c96c331ad86ed567465702b2256"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","b17724bb4485f0094db492454e334a93"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","92aeefc0832dc90ee886c35a026d9f79"],["/2025/01/10/RegularExpression/正则表达式/index.html","61c049217dea7578697e173163b039a9"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","8f776918ac1061a39ee767ca9684c105"],["/2025/02/12/Lua/Lua + CSharp/index.html","705b33a0136036ca4ad532f93d2d63f0"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","a29e8534281d989104d0b5189c769f0c"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","859f264cfedf117c8d3197f746a88f23"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","b1fbddc4ee046729790e8558c82435f7"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","09580ac55f8cbe34ba08af10898dec01"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","e5289a0a3e1ad96596dd5ff04c08294e"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","f16861a5e333adc0c2d227a834facc22"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","7d7b4cd12edd330529c98078e63e8dfc"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","102490dcd45db61ba1471c6165435e6e"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","dbc0b480c115a6b19946b5b718e490f7"],["/404.html","65a7f5c763370389f3267caad8d1c714"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","200019b91f8c5f2f50ea614c92b5d233"],["/archives/2023/01/index.html","3fce83060d392b2312c8adc9cf3659f9"],["/archives/2023/03/index.html","10c5bdf0183c773b11fbf6241480297f"],["/archives/2023/03/page/2/index.html","f3166c8c714fa022ac51d92cbcb6245b"],["/archives/2023/04/index.html","9d0850a66f8ad1f8da8ae3af505beffd"],["/archives/2023/05/index.html","ab38431ef12caee76dc093f58ee6fd61"],["/archives/2023/06/index.html","c20197cd5b7b3cc06bb87d6f15e03521"],["/archives/2023/07/index.html","3c920725de5ff2dfc9fc0a3687dc3796"],["/archives/2023/07/page/2/index.html","eb006c967587cdb2b87ad74982a97a85"],["/archives/2023/07/page/3/index.html","d91edf2c37f8d470362a5eba39d93f90"],["/archives/2023/08/index.html","c219f1ea0dad0782ffc1d8d4beacf5e1"],["/archives/2023/12/index.html","7f0eb3c8c86511eef1e8423478de2cfe"],["/archives/2023/index.html","bb94a4062398e16d426f7a6ec65f7fe8"],["/archives/2023/page/2/index.html","5d14909d7358be2b4001eb2d8bafd5db"],["/archives/2023/page/3/index.html","1ef32e941bf3704a8a3852f938e5c87f"],["/archives/2023/page/4/index.html","27e036d950f13da5eb7a10e2e58ec74f"],["/archives/2023/page/5/index.html","261837e95e5a216fdc8b6818a7847478"],["/archives/2023/page/6/index.html","c24308510223775ca22c42b324509b63"],["/archives/2023/page/7/index.html","86fe96d1fb10536a7bca30650f0461a8"],["/archives/2024/01/index.html","80bd61f1275df24c44878f9fa6fa28a2"],["/archives/2024/09/index.html","2ae9c900e83c51544b2d83d9fda60d36"],["/archives/2024/10/index.html","3981a736fc340c504770e1e9e421566b"],["/archives/2024/index.html","f885dff3b3422068ee6de17ffd2013cb"],["/archives/2025/01/index.html","35039dba983758004ee710ac6e5b7b5f"],["/archives/2025/02/index.html","4fef1918ff1b87598513386f17cbcd40"],["/archives/2025/08/index.html","dbc70c3fe4db93f7955374315ef96ff0"],["/archives/2025/11/index.html","b5ecc08ae589f579ed856dce8c1fbdcd"],["/archives/2025/index.html","7510db66ed1728f5c0a0eaf4ccc987e9"],["/archives/2026/02/index.html","d557f953cca3520c3a925234b60611c8"],["/archives/2026/03/index.html","1d73eaaddd1ec8ff791970cecc1ac255"],["/archives/2026/07/index.html","54989527b0296ec2e7bc76d11c910cb8"],["/archives/2026/index.html","da6ef6915db304bcf4107563990107fe"],["/archives/index.html","485dabcbe50befeedbe52efcfed93525"],["/categories/CPP/CPPBasics/index.html","4768940622a36ae39234a04ea8162709"],["/categories/CPP/index.html","db02d935b82dddb9320992e094f3cfc2"],["/categories/CSharp/CSharpBasics/index.html","b4bfb6cb35f0cf6f44fb1eb68a9f0568"],["/categories/CSharp/CSharpToolClass/index.html","9eb477e0e2acfa086298c9794baa4d44"],["/categories/CSharp/index.html","5e970da5faf259381b7498fe52b3d515"],["/categories/CSharp/page/2/index.html","5fed743068719eae71fcc50568201425"],["/categories/ComputerBasics/index.html","a90b921646c3150ae5205d9647097dc2"],["/categories/ComputerGraphics/Games/index.html","e89850a152f360b48ba4018fa9118064"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","6ca9c31afb0c711d63eaa48c3351e475"],["/categories/ComputerGraphics/index.html","ae3526594318eaeaee8eabe194570521"],["/categories/ConfigurationFile/index.html","902ecb2c6ea38e1d7900fcb95e1d65ab"],["/categories/DesignPatterns/index.html","2c6d11ffc39491abaaf70a4451511586"],["/categories/DesignPatterns/page/2/index.html","a4f49c01e4f8b5ddc96308d85a77d27b"],["/categories/DesignPatterns/page/3/index.html","aba0277257cd2067b2e96858e5a98bf6"],["/categories/Lua/index.html","8f62e044009c897954bd93609b40a9f6"],["/categories/RegularExpression/index.html","85e8734f709ee2e292fd5bb7aae4b87f"],["/categories/Shoka/index.html","dc44d62446f8ed3929ee032d6fff1753"],["/categories/Unity/UnityBasics/index.html","299769ed729ca1b98b926b71c699c860"],["/categories/Unity/UnityFramework/index.html","39f43c19cb34174c614540d3c2b023e6"],["/categories/Unity/UnityGames/Unity2DGames/index.html","b131d0addf06f0049bcdda5e7e70cff1"],["/categories/Unity/UnityGames/index.html","cf65677cf93ddb18d714356ab2b8f504"],["/categories/Unity/UnityRender/UnityShader/index.html","a5fed9d1671c0c7081b7522dc6978709"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","f2a990135b31187674e8acd7ab8d2304"],["/categories/Unity/UnityRender/index.html","39e1838e8900898cd7146f74bb39443a"],["/categories/Unity/UnityToolClass/index.html","160a05af3c95d17807ace44c030e0a4a"],["/categories/Unity/UnityToolClass/page/2/index.html","c7bb6897b121956663385e3def9d267e"],["/categories/Unity/index.html","c9375abbee3621f799a45ee03664d3e6"],["/categories/Unity/page/2/index.html","1947c0176272973aa31e801eca923b0b"],["/categories/Unity/page/3/index.html","d774a1b481d7e783ce7a94a5261daf40"],["/categories/index.html","7c704ccb10bc8a8b2f1a4503f273daf1"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","05ec916412fa3ea25f73f53c11b77429"],["/games/index.html","55df10a4780c6e3043b038a341cc5161"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","8c9004835d5f7579e9dd2e71b45bbb1e"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","f384a395a2b64df521f75c3a27239a10"],["/page/3/index.html","3c59e964d8fc7a2c92808087c4e00df4"],["/page/4/index.html","fddde43c5dc2ff7cf0cfa8b6183ec08e"],["/page/5/index.html","66d470e2100c516ef3fc4e37b5a39450"],["/page/6/index.html","f9c3e4c5c17accac9a97e2b3198ac388"],["/page/7/index.html","492ba056de1853b2e1046dbdf6b51077"],["/page/8/index.html","4aaa8698132e5edda9518124046d8a41"],["/page/9/index.html","1400fe1e753a55fb86f3c83ebeeb715b"],["/sw-register.js","3fd4f8bfcab369b1ba30e5fabba56b84"],["/tags/2DGames/index.html","4365f63074bebc4f13fe5e23ab799632"],["/tags/CPP/index.html","7d5ae7a49abc4bcdf4c72e26297655f0"],["/tags/CSharp/index.html","242ddfd32484f770c15482409bc5b9dd"],["/tags/CSharp/page/2/index.html","1fe50d77b9959b77ba3295b4e959099c"],["/tags/ComputerGraphics/index.html","9da363599f4fcbe65f9e1ab954cc606f"],["/tags/ConfigurationFile/index.html","e0f0e0f22c608d2ae31c3670790940b2"],["/tags/DesignPatterns/index.html","5fd57c34d395f6fdbadbab5bda5271d0"],["/tags/DesignPatterns/page/2/index.html","e6a7905ee0d404ccd506985e8c01387e"],["/tags/DesignPatterns/page/3/index.html","4acf6debd96353186a61a8a52e6a6638"],["/tags/Games101/index.html","0fb2bd21b50987356ff1a679b448f513"],["/tags/Lua/index.html","528a3efa82a97825ef9baa2ae52d7ca6"],["/tags/Physics-Based-Rendering/index.html","2764c242c013c62b98e8c6b0cf93d403"],["/tags/Shoka/index.html","21cbb6d9aceb65b3826427b8aa84c56b"],["/tags/Unity/index.html","bfaf659111116638abfebfb25fb935fb"],["/tags/Unity/page/2/index.html","b6bfb5b4a621ef73be192c1b6380c528"],["/tags/Unity/page/3/index.html","a2e540384b28170ffca980beeb3ba6d5"],["/tags/UnityShader/index.html","7e4aa0b4e79b6d86d5b9986488a8fb42"],["/tags/UnityUI/index.html","e4fb1ad9aeef7b301c7b37d232f83d88"],["/tags/index.html","0aca4d161f243b8ad53e20dbceb40ac2"],["/tags/操作系统/index.html","20264f75dceaf2470d7df7d9134f9087"],["/tags/数据结构/index.html","19ae4b26e066a42755691c0ca2ac1d62"],["/tags/正则表达式/index.html","5d1d7a54ae268effd5ec89c6eddd8f58"],["/tags/配置文件/index.html","c1d2351e4b173812187f0bc5e1cdc858"]];
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
