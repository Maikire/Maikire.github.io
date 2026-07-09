/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","ab5f010a927832a49fb98d0fe497ae3c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","f79881e84b2a18ea3919b47b788ace1c"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","4808dd9a5e26fefeb261fce0f4e1f628"],["/2023/03/20/DesignPatterns/设计模式/index.html","3f4b9f832645166dfd2b52abb2fc58f5"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","2fccac0a21460da2d08ae6b334f78dc8"],["/2023/03/24/DesignPatterns/单例模式/index.html","cc2b66e96451577d948f12d79e1096fa"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","05cb116663d0090df108e9c9b5924383"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","17cfc36cac409264fce15755c041851f"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","aebb26a63111716bb062f0eed09e0429"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","310f08793217376ea901ddf9035f53df"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","92a128122f9fe1aa53ad4a3c93acca34"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","d90fe3e3803713415ea5477c79bdc22b"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","079608f6bc043e03a675c5c80bbc3b5d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","cbfb295c85f6669cf9abbc1cda62c567"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","e0f7c36d3a17d0ff68cbe38a48c752f9"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","c92dcfc9de0def6cb407b98439b324f7"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","2b38808489ddfd110719b49ec8e17e17"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","a213a98b2ce27ed935f68d308bffb45a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","a201a5a90e2ac39e6bbe43db99dff8e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","5a95b8690cc7bf4120bc9e3725c4865d"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","56e220c8191001b6f623781f00eb9dd5"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","8fead48b7a9abb5691fb7e2e968b973f"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","3191c0a4b330082610ab1ee59002cfe4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","bb650cd5eb17c4c3cfec69417f566d83"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","73370ee2daab3af5a3a3f67d996d906b"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","f90ee8a253e0a907176f5ae2eb10a696"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","3c21c5c4b6a9195c261a088c364c9ded"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7025cc5e3bbcdacd10b746131ac0817a"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","b3e33b14af262efab0d8f3f63eb14976"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","ef5e3c7cea88af81625fdaec58e0f122"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","668b7c659a0e126d053d24530f2d0eef"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","1cf49dd775927112b1b15924bc29d958"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","61174e46a3c62a8a273376942e0a63bd"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","9b28d399f8d7a34e3e6ef7f9d1da4550"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","bbc70e7e247e4ebb6649a80715aa33ae"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","884427e1e893427bdb42895c0f5efe21"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","9556abd0476883c8014b8aecfadb77ea"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","1475bd4bb20c05a124410c25035fa50a"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","7831a25f03781b89a1f46a0b3319bac3"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","df8ec1aa9c3eb6d3a83251c2b512a48f"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","7fbad26df6862547cfa5ee93b6de63c8"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","fd30e86581f26eb16316ea050d4c25c0"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","b08b89879cfd2a34a6aac70780f09e14"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","24f6a0092d6368693a3fb44bb33f5396"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","d132c933f2ad3292226eb5c068c13054"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","8ce8c13f37110cbdc8e17953a9a77b5f"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","7a6793a25e2bc25ad61cfa99a59b138a"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","4c7b7fc0fcec4e07538ff6d43f77ce21"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","8a961b4dc9cc1e07feab676d71c82708"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","7a486587cb7966aca265a487b41b9c1b"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","e797131896628aee725832fd74256bd2"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","d998d82c8da911d16a0b4f5137df6d25"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","e0910ee85d80abfef8913ad5de3f2dc8"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","be1d8c43856ff19dc3729ce52d225359"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","80c353fb2f15e13e307dfa37c8a05681"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","269e557b17839d4f05d413339edfaf98"],["/2023/08/02/ConfigurationFile/JSON/index.html","cacc3452f6da79aa2ae9bf04fed6324c"],["/2023/08/02/ConfigurationFile/YAML/index.html","d88230c0490cd4f5674b977a578804e2"],["/2023/08/07/ConfigurationFile/XML/index.html","8b1e81bfb91f5ea2d6be7b83e9155a1c"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","2e093e185552c210c178dda36538b1b3"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","766af4427e7b6e52962236731825a9f5"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","e6f1edd6f1c29318d4fc1c2489b77766"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","12e2006aeb10ca613930ec531d567762"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","a7e50ab474b456b6c63811484a5f9c0d"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","66d701b894ec0ee5d40cb75c7da1c465"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","494bf4b90c9fb70b793e17f7d235c7ba"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","cbec7059d4ca978851265b8dd2f8759c"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","337674dfcade77eded07ba0e3bec0a24"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","006d26800061f61722cf63a825f5cd36"],["/2025/01/10/RegularExpression/正则表达式/index.html","135f292d2964d4c08d8456881dc30f9f"],["/2025/01/20/Lua/Lua/index.html","d43a8d381ea8d4cdc404066636470f5d"],["/2025/02/12/Lua/Lua + CSharp/index.html","c4b40adca7cfc137fc1626bb0f4e7968"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","75c76f240dadd3c88726f84ab1cefe1d"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","ba11261479f393f7f47778e04402beca"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","c35741ec0a674970f19a29b9f4021b40"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","3ea7b4be06e9451b45aa5881007b94c7"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","69271e8eb5c8fb3fe9cdad45ea3adefb"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","15d5c5410c89654595a2684ba4d03998"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","b929bc0547987c65f2f20888c7089916"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","259a3ff023c8f0299f20e49ab9a211cb"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","890bb915ad9be5b6747e90411b7dd8dd"],["/404.html","243097d7134b4dbc152ebfba89cea3fd"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","c0449eb41a1b7131b7665cef3a532003"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","990460841ff1e7770270f12db5269a0c"],["/archives/2023/01/index.html","5ce8a11fc4df2c15150e6b151834d4e6"],["/archives/2023/03/index.html","fbd27f20d4f024b2112ad98011d8144a"],["/archives/2023/03/page/2/index.html","cae77853a6592aa40aff714cd481f2ba"],["/archives/2023/04/index.html","def4455ef02f3bfda50114a5e306977a"],["/archives/2023/05/index.html","8eb77ebb450d4da02e063d6734cb9624"],["/archives/2023/06/index.html","c3322ad10cb604d9ce99ecc2e9b24785"],["/archives/2023/07/index.html","fc94b66a7131143574966cc29489dc87"],["/archives/2023/07/page/2/index.html","7d784ca59b004a3eafdc94bed5a5cb57"],["/archives/2023/07/page/3/index.html","8ed177ad8e92d51615f0e4713100374f"],["/archives/2023/08/index.html","e0df2d3dc39e774647008f8485804094"],["/archives/2023/12/index.html","386e149f4f775f8c993bb00106fca5a1"],["/archives/2023/index.html","0ed2314c81d4292e33f0e33045174475"],["/archives/2023/page/2/index.html","a2d643387c71ad016658ed1bb0047aef"],["/archives/2023/page/3/index.html","a7b4d868f951c93bd87e6a8a08105a58"],["/archives/2023/page/4/index.html","9dbb0362b3385a1deed720ec874c4016"],["/archives/2023/page/5/index.html","09388ed0f7f1bbe822a8764454ed7f2e"],["/archives/2023/page/6/index.html","bac612c087f2598d1d69b519d6165839"],["/archives/2023/page/7/index.html","208df847e5495ffdf7e7635ab2ea77e0"],["/archives/2024/01/index.html","9329cbcbb9e9f77970bf2ae4db54e503"],["/archives/2024/09/index.html","b37a3c0101051a86bebd227efbd0777e"],["/archives/2024/10/index.html","c376844cddf4060c1f929e9b697e6f40"],["/archives/2024/index.html","1fc2d953a7b3cdb9478293d48873e0b4"],["/archives/2025/01/index.html","930b99f7c3d396a0d8f19504287c6a0e"],["/archives/2025/02/index.html","174985b93671af62393394f865a0d19e"],["/archives/2025/08/index.html","2c14f5405b4f6e573635efebad5c763a"],["/archives/2025/11/index.html","af055c9fd35e6f54866d33fd46e933ad"],["/archives/2025/index.html","877a9c65fa9a3ae04eb9458799003428"],["/archives/2026/02/index.html","34ab93d14ec91600f86f26ece982d6d4"],["/archives/2026/03/index.html","473e8d943036dfdf67ce4d29d0590bda"],["/archives/2026/07/index.html","ebbd846b2580ad6d16faa03e8c2fed00"],["/archives/2026/index.html","068bf5407b9127762a5a6e9730e76b22"],["/archives/index.html","039461483fb57708a42d0c181104ab4f"],["/categories/CPP/CPPBasics/index.html","160f038695692edbdbfd8841468e98a5"],["/categories/CPP/index.html","bd906d3157c2f683a038d383542e735d"],["/categories/CSharp/CSharpBasics/index.html","fc7c9003021f5122c2827cd5a8914539"],["/categories/CSharp/CSharpToolClass/index.html","247552a16ea08c5605a7a560a0a4edfe"],["/categories/CSharp/index.html","9ad23933aab35f2e67204fe770caaa97"],["/categories/CSharp/page/2/index.html","42b65df64cd9e0005cf4f1b4537a6ac8"],["/categories/ComputerBasics/index.html","e9e8f5d6d5eefce6878ef96da6b3df2f"],["/categories/ComputerGraphics/Games/index.html","3056048310548650a525f4b137f952df"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","28aec05438b866ed2f04ade1ba7b0720"],["/categories/ComputerGraphics/index.html","058f9f6bb969fc4ae8eee92d8a382d16"],["/categories/ConfigurationFile/index.html","63c2138c4448203a54546a946b7dc77a"],["/categories/DesignPatterns/index.html","bb17f107ac924e7a5e153ce7d010755f"],["/categories/DesignPatterns/page/2/index.html","41bc0c53e84d66958b6b9e4e7bca965b"],["/categories/DesignPatterns/page/3/index.html","9f255ddcf669383b6b0833af15fdf7a2"],["/categories/Lua/index.html","78c133dd43f73b2679d92d8c975cd560"],["/categories/RegularExpression/index.html","3963c5c114c82ca91a64a19c7bbd21aa"],["/categories/Shoka/index.html","375b6b2a217a4e5e0bc6e98bcbd9e665"],["/categories/Unity/UnityBasics/index.html","12b71e6f2575bbe98adb6b6290d31879"],["/categories/Unity/UnityFramework/index.html","849a9ef1aa4f8393be6602d33d5a5709"],["/categories/Unity/UnityGames/Unity2DGames/index.html","3ba4fe06420a51df66a037f146abb140"],["/categories/Unity/UnityGames/index.html","be7f2154652bf4c1fe18791454441609"],["/categories/Unity/UnityRender/UnityShader/index.html","40ffcbb2ab17cd4580e67ed103b3cbd1"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","d28b453ce9892ba9a90eb41be6e5a915"],["/categories/Unity/UnityRender/index.html","05a25e80e92b46141a37496b6631b5c8"],["/categories/Unity/UnityToolClass/index.html","826da61afc44ee82b1fddff8c0b7afe0"],["/categories/Unity/UnityToolClass/page/2/index.html","42675837f49cfee5cfb1d9332d9c31bb"],["/categories/Unity/index.html","0892703878b465a5820d9b2cd8a644e3"],["/categories/Unity/page/2/index.html","2a9e522f7803802725dd27061fef5747"],["/categories/Unity/page/3/index.html","6276d704e66e8a6eb92075034df0be8c"],["/categories/index.html","76a58568cc0668ba28324ac95e83e6d7"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","3a11f473972dacbbdf6c918707361906"],["/games/index.html","3a22d38aeade320f082bd5ec413f7a93"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b2849d58c0ec1a58acaf9178129d4c92"],["/js/app.js","9b788d2d502b4262e50618600e182d8c"],["/page/2/index.html","6850922153eabd4409a89621912045c3"],["/page/3/index.html","9644d766a5f728fc9b1bd11358873f37"],["/page/4/index.html","84a384f18010ec19dd38a377fddd6b29"],["/page/5/index.html","fecd6d6a36b1f2ff9695c6fb3d824c5e"],["/page/6/index.html","372d6116e21f733bd480c02f9aabfc01"],["/page/7/index.html","f977d767974176e5f480a758d7a8637a"],["/page/8/index.html","d9f551028bcb4c8b9a066db18bbdd79d"],["/page/9/index.html","b56ab3c8ea5207fd9bbb2eff501b770b"],["/sw-register.js","168db74bc9a9993a2687e24a2e7358d5"],["/tags/2DGames/index.html","a25d2d842a3998a54a034c72c1d2934b"],["/tags/CPP/index.html","06e29bbf5e355a273553b1fdb3b169be"],["/tags/CSharp/index.html","99719c9fcde98ad2cac7198e47dd30eb"],["/tags/CSharp/page/2/index.html","f2a55ee41b0646c402f800399fb1b0a9"],["/tags/ComputerGraphics/index.html","75494c91b5e39a8b22246d4405ac2a94"],["/tags/ConfigurationFile/index.html","ee78d696d39ac6a062bb9fc35e05411d"],["/tags/DesignPatterns/index.html","faf5d1505cb8cae26fe0b5c28b668465"],["/tags/DesignPatterns/page/2/index.html","72fc7234cf38af3ea43a2d92631bd05f"],["/tags/DesignPatterns/page/3/index.html","e4cec3b30fa0058a298b46120aa14897"],["/tags/Games101/index.html","e452637226ca77db8f1faebf8ffc9ffe"],["/tags/Lua/index.html","fc4632d4ce428e8c5db1a6d115940b86"],["/tags/Physics-Based-Rendering/index.html","d851bca238835e9cc7da02a7a61e1bf4"],["/tags/Shoka/index.html","e16d75c8dd04beb63e8927af96e312c4"],["/tags/Unity/index.html","273800b5ca1aa5e23246a59a9c1e40dd"],["/tags/Unity/page/2/index.html","4b4988bb58924d5ef51ae09af102d08c"],["/tags/Unity/page/3/index.html","e6f6a1a06e9241ccb50dad9921aa7094"],["/tags/UnityShader/index.html","bb5c41658d2f9adf6f368fda2ef6c221"],["/tags/UnityUI/index.html","62b4215e5935a4f65d4bad8406073dc0"],["/tags/index.html","fd260b1f8f2872924b761cb4bcb2431a"],["/tags/操作系统/index.html","6102a86decfcb0c21140f4333e4bb935"],["/tags/数据结构/index.html","d223b1d1869f48e60892f58f40538802"],["/tags/正则表达式/index.html","9b7f13cb602af3970d6843e1e2430624"],["/tags/配置文件/index.html","38925f06d2a2b257968b8fd54aefcd33"]];
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
