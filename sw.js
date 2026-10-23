/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","01c38eee9f3227728cb3daca1de32762"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","2ec1afbe64c8c1baef1312dc31d962d0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","130cb7b36e1134ca8bb1b00624327cb3"],["/2023/03/20/DesignPatterns/设计模式/index.html","39a9f9ae47fd8aaced79cf723e84c9cb"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","c8f423977003c1f248fac7d2cbdae196"],["/2023/03/24/DesignPatterns/单例模式/index.html","47501ba23634f60de359ad47e9a4392a"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e0d3eae95eb85d1857d04b417d143009"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","bd72f490faba379822bb3ee6d45c7eec"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","1a18f67cacfda448ed7964d8a239be34"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","ff9915433f00fb752db39607fc1b4e84"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","df1b780180c1fcc06e33d233c4a12627"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","f128a03809beb7c186fbea133377c272"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","ef67579555914c704a6e9d704c4f68d5"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","d92a1f8fa304275e97b2749382adfca6"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","5510220c24cb41cc4c51967e02957263"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","4e98068bb8f424cfd9d412c0b31b5a35"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","95804d06930ded82e206487019f62d12"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","f0672e14b386f7eb7369b0ac296ca7e1"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","cbf9dcb32f4753d0c10e48aff5e8977d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","aead7b3306fe8d0bd5837d976f8f2415"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","2c7d4a3ed5063fd2beea196a6db49698"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","23e9165e20c710eea33be95a08a21e47"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","4e4f53fe5735167859acb1288e620179"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","1e60af14ccb78e506dee2fe596c45abb"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","8006a1b4c99553a79ce34f449b3456e7"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","219cbe52f2e8685d8b54a5c074097837"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","4f1c98e7df2d251e0b19d686704d9e18"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","9d7e9a00a85a90e20aaf4d461b05a5d7"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","8d36e1087405d880adab12f7190a2e68"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","1aa60ea84dacd302ee7c5a1ee0f8eca4"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","e357bbf8e2bbe627d4c3fba2251452d3"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","7f9ea928d2e1d59d4b4ff2e51903c2f1"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","cb811a2ed28e2ebd12c3bc9a544cf115"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","b966ed617d7834e378f94b062a62350a"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","253071ac7a547bf8b827df70b95c60e1"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","c50a83e0a5491ad63dd4d5c65158f347"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","3656076b321f965bcf58a0d9763924df"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","218e412e3b0c013f7a4ea557e060015f"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","9e246dc7c50a2fc8a1defd4dace91f63"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","29d06044c43ab12c32605aa38b06642c"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","e3a64d8d3ea297e1b0234c42f883108a"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","f1a6e52c0dbcf6b5fee0c98399cad681"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","06fb86c8e1d332201fcc138d4ad8f829"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","6fe5a4c7d94439a659ac9cbbbd3530db"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","9d30a843119a491d44f797935cec36ac"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","d3df97c54e41d03943523fc3c97084cd"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","af472dd4c2b73ada4055fdb731e8be03"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","7f137f158eb50c3c4d4febfb286e640b"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","252a3c8e604d624424a5e19873e0a6db"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","c344ee3f07ba9b34d547614c24bf2c90"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","b1b5a22e921211dbceb4df204ef2144e"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","73290bcb3aad35052dc4208d75d73992"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","e8219938e207826e3aebe70849b6d7be"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","ba8e9bdea59546b041a43b44b56af9fd"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","ac94011845cb30893f495f736d688e83"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","1fad9fd884c020c6ff78c12737241f34"],["/2023/08/02/ConfigurationFile/JSON/index.html","609f2dcdecd4f412116f048dcce2daeb"],["/2023/08/02/ConfigurationFile/YAML/index.html","9bcb7c5d1a8b139d16b2f3d2364a6357"],["/2023/08/07/ConfigurationFile/XML/index.html","8d966635437e9727eeeee30a272e74c2"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","43cb09831ce1f0c4398a90fd2a63f009"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","622f9ecb5740573b3ab88ceeaaf9d4d0"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","f40d90a5a8faf1e9213389251cb0fa8e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","0368a4226eb0b3a94f89904e7e05c4c2"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","554b4693e50cb1d71d6146fe5b2f2865"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","f84fd09235910419f4fea999e8d986a0"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","a6aa388f94858f77de9daee9b7ef4ed2"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","c1ac5b94dd70ad24b79407d45f153d46"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","dc694118eeeab9e342a693e53df19665"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","007ee39e4c98ad4272e69cba19191061"],["/2025/01/10/RegularExpression/正则表达式/index.html","889c91c1ea442c009c5738e9a646c801"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","b673fbacdab3ed8dad509be0f7af6e88"],["/2025/02/12/Lua/Lua + CSharp/index.html","b0acb2ecae365c21fcba0d5321d5c14f"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","0903ea1297092d38162ba2d8198ed03e"],["/2025/08/20/Unity/UnityFramework/行为树/component.png","31bf183eb61fbc43f122c79a1ed086e5"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","79415966bfb8257e8799783ddaa8d26f"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","1963488eba0ca656a7b57e707a1578c6"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","4e4f249ccafd38e32e6302eaa6810e1e"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","6ad9e69e371b748883fad54beb912fed"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","ff3055f262b74ab3d110cc98339cec8c"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","9d79e0fe1dd03a487d2033ed25d0f103"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","da996927bcdff05aa278aec02161d829"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","ffad6738a6976e72ee1068bda5a8654f"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","0f1777a74b004b527f9ee884561ade5f"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","0e4ffb5e935f8a7fd81e2b7d43818c02"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/2026/10/15/Unity/UnityFramework/存档框架/ApplyRestore.png","b9410f8df26437c80acbf963125847d4"],["/2026/10/15/Unity/UnityFramework/存档框架/ClassDiagram.png","9aa39299e885f38f11db3f9374ef2ee3"],["/2026/10/15/Unity/UnityFramework/存档框架/ModulePartitioning.png","f8387e9c9d63032a345ac1507cc78d49"],["/2026/10/15/Unity/UnityFramework/存档框架/SavingProcess.png","efb9273ace094e717330271b4ddeffaa"],["/2026/10/15/Unity/UnityFramework/存档框架/StateTransition.png","e99d244f3bf87a00905b784a7fadafb9"],["/2026/10/15/Unity/UnityFramework/存档框架/Web.png","33dc6a47d6fbfaaf039491908326e89b"],["/2026/10/15/Unity/UnityFramework/存档框架/index.html","e960fcf2830b0efb2c488bfea825e9ca"],["/404.html","4260d82ad9f6c8bdd67b05df12cb6f69"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","9431745b9c5eebeb165368c9ca3e9809"],["/archives/2023/01/index.html","9b474bf5f8847157da7ea7e0afb1b102"],["/archives/2023/03/index.html","aff3702a520cf930a84ec23c257a9831"],["/archives/2023/03/page/2/index.html","8980cad54a85a847edf7279f1bd07ae8"],["/archives/2023/04/index.html","9bb02286d748cf1ab9e916500d82456f"],["/archives/2023/05/index.html","ac57e612f31885fe18faa5782f1285e3"],["/archives/2023/06/index.html","0b81ee86ca0c594b6043107e9f1b7271"],["/archives/2023/07/index.html","af4105ee6f90100a40d6b2d3bc232003"],["/archives/2023/07/page/2/index.html","efaf8c90e997b1e358191f478c81c544"],["/archives/2023/07/page/3/index.html","fb16d9ae6b8ed92c36f1aec9d3e781e6"],["/archives/2023/08/index.html","aec3d4e50aca3701814b624ca1c6e4fa"],["/archives/2023/12/index.html","7209eeb3b6bf4858473b597296f2ceea"],["/archives/2023/index.html","62c50855e38aa8f17514231447961fe2"],["/archives/2023/page/2/index.html","4186451edf96d0d833cd8ac14276b39d"],["/archives/2023/page/3/index.html","6409ab0967ee07723c7cfc3f9051f63a"],["/archives/2023/page/4/index.html","922e6b6def5b35ac551ff90165c7a848"],["/archives/2023/page/5/index.html","d0e458be273a878eaac8309a78865d4a"],["/archives/2023/page/6/index.html","80557895549dcc81f18af6c9af2723c6"],["/archives/2023/page/7/index.html","fb0ae6b0bf81320d01f0a9a53a75bc4e"],["/archives/2024/01/index.html","cf3e2fd0bc79a55f6ab6efcacaa72601"],["/archives/2024/09/index.html","d88f8f20f3aaed010a492b45d26e203d"],["/archives/2024/10/index.html","9ae6a8d8022c3305d0d457e94d919b64"],["/archives/2024/index.html","d9630810b4930edbe1df61afeeeefab8"],["/archives/2025/01/index.html","1db9a0ddded657a2684ba6edfb93c310"],["/archives/2025/02/index.html","6d48e19d165409cb26438e4168fa322b"],["/archives/2025/08/index.html","ac904f42378e9d6353d22fbc17c2a735"],["/archives/2025/11/index.html","26ad1223c8032c08bcc0b1bebde35089"],["/archives/2025/index.html","cac4c8e725039e505c1a09f3d319f086"],["/archives/2026/02/index.html","131469462f1991612cd8e5479d73cd4e"],["/archives/2026/03/index.html","996a3fdc312ff00f636cbac1058d7702"],["/archives/2026/07/index.html","55956a4f5706770885cdd56a2a3a8942"],["/archives/2026/08/index.html","699b9f51ce524dfce1c7cfc2815d2a6a"],["/archives/2026/10/index.html","18bea2f2dbc6ed2c59ea71edccc42862"],["/archives/2026/index.html","53d3f7f8475a85c8bd325d35aef1a311"],["/archives/index.html","ad91c51dce84e1f09ba34b23b8253c13"],["/categories/CPP/CPPBasics/index.html","323e310ee44bf2ca4fa1878c22e3e8bb"],["/categories/CPP/index.html","70ebf69a5ea5b477153ea636a9b6ff4c"],["/categories/CSharp/CSharpBasics/index.html","9eb75fe89542a8ae6b85e408c169d817"],["/categories/CSharp/CSharpToolClass/index.html","af96d99f2f3099644845d5f802b84fce"],["/categories/CSharp/index.html","a6c304b66fe14dab03af2c8488cb2abe"],["/categories/CSharp/page/2/index.html","77a1b1c46a85731276a817e306d08184"],["/categories/ComputerBasics/index.html","95bf2c4fe0507f084d37217b1d3fee14"],["/categories/ComputerGraphics/Games/index.html","c5addbc9c982e9ecc439b16adc3e1fb1"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","dd5f8ff464aabcf82e66c63c8ce54323"],["/categories/ComputerGraphics/index.html","7763d3cf1de17f8cf77cbfff2b06aa40"],["/categories/ConfigurationFile/index.html","6bb519baf30435cbcfc942aeddb9187e"],["/categories/DesignPatterns/index.html","ac83d280be44f7bf53eabdaddc69a2a0"],["/categories/DesignPatterns/page/2/index.html","39596266ccbfb2ff3b2a3c78238897d0"],["/categories/DesignPatterns/page/3/index.html","57807b32ee58c38279f93bc890f63983"],["/categories/Lua/index.html","49ebcf26cf57a8b07659b9da70803b42"],["/categories/RegularExpression/index.html","cc72f76a10aa252939997fb1a53fdc98"],["/categories/Shoka/index.html","e53f5c8358fadaac5ce9be282bdc04ba"],["/categories/Unity/UnityBasics/index.html","f7bb1a8a4bfae3890e840b697f85a42d"],["/categories/Unity/UnityFramework/index.html","e06a4da4bf0dfa5a22612afcdc0afb3e"],["/categories/Unity/UnityGames/Unity2DGames/index.html","c15d7a46c129aab7cd948f5ebe831447"],["/categories/Unity/UnityGames/index.html","595e51741009510f8be8bb5c69330570"],["/categories/Unity/UnityRender/UnityShader/index.html","a19d9a2718e99f7476a19fb389975a21"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","9eb0b4e6c1a4b55c396775b8a58f37aa"],["/categories/Unity/UnityRender/index.html","139f142ef25ff3299f4fdd0254e8f465"],["/categories/Unity/UnityToolClass/index.html","98482bfb5f70c1c163ee18e844e25155"],["/categories/Unity/UnityToolClass/page/2/index.html","da588cdb058e0638647a20c133f5da26"],["/categories/Unity/index.html","fe641d365f4122322f6ce53b735781fc"],["/categories/Unity/page/2/index.html","d8d3f33fcbdf5be5f2a839a7646093d4"],["/categories/Unity/page/3/index.html","a7bf9c55803467f6ff3d33b6ce0381a6"],["/categories/index.html","4fa2e1e387a6c8afb8f49036369c4459"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","cd4c6da611338214ab828b222b4004fb"],["/games/index.html","7285ca77b639c04af1b501fb112c84b6"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","d735fae33c3e4e72678ea5f754b9df35"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","b662dabcd4d519d7e0b425157b173e06"],["/page/3/index.html","db8af492f4d2b6709715f7d80c29da53"],["/page/4/index.html","19de8efc5d5995a3987c64159b1f2bc6"],["/page/5/index.html","ade115831ee67d4b11e8e08bdcbf9491"],["/page/6/index.html","30b760e385acae1d8996aecdf9d78f29"],["/page/7/index.html","20c0ce17583765d420b43c9da98d87de"],["/page/8/index.html","badf8bac7eff60b976cb4141ca12df2e"],["/page/9/index.html","9271f8ebae7f9047c89c7e9e579cd8ba"],["/sw-register.js","fa56e9b4ea7b3f48d5b48e866b12b6f1"],["/tags/2DGames/index.html","6366f7ee19238e145282a7cdaf23edc7"],["/tags/CPP/index.html","b47e9ef22d8835f689d6007d7d56c157"],["/tags/CSharp/index.html","ff3cef431c8127312aca72554d4b6441"],["/tags/CSharp/page/2/index.html","ec12edd56010e2df55f37c75e8077d0a"],["/tags/ComputerGraphics/index.html","e3d7fdcdae84c176b842527680c102d6"],["/tags/ConfigurationFile/index.html","f55a59af42b33d7c77e2a722c94c4536"],["/tags/DesignPatterns/index.html","bfc5e09d0c81d50bceeedd2187e51ddc"],["/tags/DesignPatterns/page/2/index.html","de524cd6f0e26c92834b8ae46aa8af91"],["/tags/DesignPatterns/page/3/index.html","ce48edc48d5342f0d0bec3967500106e"],["/tags/Games101/index.html","06dac3eaacc23a44352aa95d1c42151e"],["/tags/Lua/index.html","c341c756a29edd12b2ba950bb036cdd1"],["/tags/Physics-Based-Rendering/index.html","662d15f782f3051509dd8df7f9e59c86"],["/tags/Shoka/index.html","499a75ee8f45a40b9708452e04610a09"],["/tags/Unity/index.html","130ddd81d0c9cbcb64da597b0b075f8f"],["/tags/Unity/page/2/index.html","f936eac30abd5907d0a520e3905cf22b"],["/tags/Unity/page/3/index.html","265ca211bafb8d4b1e3c921cb30fafb5"],["/tags/UnityShader/index.html","63368bb96ffaa1f9832b7a6a19a9439b"],["/tags/UnityUI/index.html","fe846fd7906b213c7414f9cadc81a02e"],["/tags/index.html","726e3c2b1ff74ef537af3474e7f1ce34"],["/tags/操作系统/index.html","92d7a6cb715798eb32be928454614c8b"],["/tags/数据结构/index.html","9494267bc17a1ab8e86f063459dad9cc"],["/tags/正则表达式/index.html","36349f396e10839f124b9caefa40854e"],["/tags/配置文件/index.html","d4f5abbc230168dacadbfe8204b08a33"]];
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
