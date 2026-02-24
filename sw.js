/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","4e978f5896bb6798fc2030462f951839"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","cc288ddfe8fc27a209d393014c54fc0e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","0fbd6d02f2b1ef98cfbdb25d5facf796"],["/2023/03/20/DesignPatterns/设计模式/index.html","e7ecf7fdb477acbf2dbbc8d0cd4b540c"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","ba3a88ce846c8f7e482bf843e81cefd5"],["/2023/03/24/DesignPatterns/单例模式/index.html","02aab8d983773a01e941ee5999f46edb"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","c9bebd3ae4ad51ae37c3907b332728e7"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","541c63a5cc7da54436682eb6d573f90b"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","d43c444236e63cee30cbe3ee2374c53c"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","9c9cf992bd4ead8a7fcf09930fb7897f"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","4dc19e767482c3b66b8e0525542f64b3"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","df37c7b79937002815d22644bda3a209"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","0b59ffdd8a32c117f57fd5350453bf5d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","ae9a6c1d6a7fe601057f00537eb4ac93"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","2adb03ad415253d8be7d08c2930aa4cc"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","4b6d9e7bbb1e30a288f42051efaca726"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","56c535eb97e2d3c548ab4cdf073be42c"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","f82c2be3b82c8755bb25a2b60e7c6a60"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","a74494503086a1af2f8d343db4e64378"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","57803dca0fb0457e49c14fb4a4bf1e0f"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","c17c09c5c0d2d7a59246f797d23c4a0f"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","8cf01d1401455e4a8e52e1825c9c67ba"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","f644e6e0ab02062b0a3804ccf55c1a08"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","856f991957a1b0788590f0954cf5f70f"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","187f5c692f1157e2ac477d1d6b29e97e"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","f27d6243393bebca145ec2ef59ac424b"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","0001a09b7deef53a09dea91462a1ca56"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7922ddb6443ec072694d0d3abf8a9848"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7bd5d73c3ad7150bf3b0bcbc117bcd89"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","b90899073a5adbfeab3f081c42f10cb8"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","01e857a43fbb6d9366792731b1900a29"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","98675d4e4d497076a2f9d0e2749df554"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","2dac47ac57e24c5d09b77c000973cd04"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","02167bacfe56a4efbd66d1f05a7979f2"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","a4f43b6ada6c8f22170ec0d85ad41818"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","7d16af141f3c658028110e43ac751084"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","5aa0bad0bec53641f8bc8c333eadec65"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","61a917697ff8085d60b25ee7a4e0dfa2"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","b0880a6f60f161bcae7c59287f137809"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","e6dbec72afbd4b02574b89a6b8f5f4ac"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","de71426463d8a15581664306ae31f916"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","b5185146c7b24d3cf7d6fbcb9b51f249"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","f1a1bd8a2c1c59955b18230a706052d6"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","89bc9d6af9e2ae5ab4838e97e6f055eb"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","f6b51ff6b80db6c2c0e94f22b6e6c92b"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","8f0c5b00a976c6dfc0b10423b3696834"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","65404ad9cdf2dbd329acb6fabbffb025"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","9702e5e75439528d8565153c80d3968b"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","fed8939a03a41e409924aac81539f612"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","a5c2effee35543c4f68b1830dfc6b956"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","034bec7b3ad46b1752bb5c028e7ebd0b"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","142180df0048ab12d299eb25baf89aa7"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","847f4703e0b688e00307a91ed35bac9b"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","28b0fdbcacbed5b431d0bb8a0674e676"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","3cd994e08cce3c02175a670fc7e32c72"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","8e47c77c7b38e55ab4630704c41837ba"],["/2023/08/02/配置文件/JSON/index.html","4d90e1f1cc5b4707df139a45ffda2c23"],["/2023/08/02/配置文件/YAML/index.html","cbc4933b8671414da1f48ce6db40f25f"],["/2023/08/07/配置文件/XML/index.html","d80c79e20e2aa8e3f524e2a6f99438a4"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","9c40bddcaebd03c6d543e0c7db444e3e"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","f4e7b2154dc1d3ce2d6d943d6379198e"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","227d6895bc0820b70ae55e79e0afd6d2"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","63b9b31babd1e650077590723743a8c8"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","3aa7346bb0efc8d2a6005d3545e2154f"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","a077a0fe3326a78ec95f02f88720611a"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","dd57b5b8c1bb39e9a04f463a78ac5d68"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","da8cf87d630253b3389dfdb4bf3635bd"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","cc5c560e55f27a6b9e93e16f20887f88"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","2ac9090238dc29a8eedee1ea20cf0851"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","eba9d72d4664f175d731e5dedbd40d1d"],["/2025/01/10/正则表达式/正则表达式/index.html","b1a277daea29ed0e83982ce0a37db086"],["/2025/01/20/Lua/Lua/index.html","81e6d5ebcc95232b17c976ebf1c7e382"],["/2025/02/12/Lua/Lua + CSharp/index.html","3c5dfb0778d3d93c6d4d0ce61f959e80"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","6343233f2bfd2b41c564ac093adc5478"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","99b2b610b3b8b03d03fce8c605c197fe"],["/2026/02/20/Computer Graphics/Physics-Based Rendering/index.html","08c83b436de301abfd63cebfd3b65a08"],["/404.html","a041164cb4148bf49e90d0695724a71e"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","710aed5ff408e3c502cf5f18790e48eb"],["/archives/2023/01/index.html","69bb8172597240d5fec9aeebff91690f"],["/archives/2023/03/index.html","f723412655ee6ed3396bce0449077306"],["/archives/2023/03/page/2/index.html","33ccabb7aaa21982d951090a0affd253"],["/archives/2023/04/index.html","33bcc5f73b48de44e3b4e967c4a00e08"],["/archives/2023/05/index.html","7ad80043250ed09735e18561cdd1dfe7"],["/archives/2023/06/index.html","9a0aec1087239916c0782276aec6fee3"],["/archives/2023/07/index.html","ea290a8ccb2e4da2974cadc50dec4eb8"],["/archives/2023/07/page/2/index.html","7b414916e691e887faa141b5e67162e0"],["/archives/2023/07/page/3/index.html","1fd1af2cfd5b09532b35f45f13d456f7"],["/archives/2023/08/index.html","1b3dc7b23bf1c7559783a82c98cecc69"],["/archives/2023/12/index.html","8ce014bb58c13b26e568e1bcc43a11aa"],["/archives/2023/index.html","0e9d251bd23d5387ff9f6df6317fd6e6"],["/archives/2023/page/2/index.html","b50867c5012e1f84365f31b4956cba86"],["/archives/2023/page/3/index.html","09915697edbf5360c81ebeb67fde95fe"],["/archives/2023/page/4/index.html","580c69fb643c00e813f8412e7cbd295d"],["/archives/2023/page/5/index.html","ccdcc6f666e99317dcd443d215e5d10f"],["/archives/2023/page/6/index.html","72b31118bda09b4c353906d8ec669dd1"],["/archives/2023/page/7/index.html","7eff385e334cd43dd80404618e0575a9"],["/archives/2024/01/index.html","9b456f860f1535bc1381c96c3b56ff3e"],["/archives/2024/05/index.html","5c7b8d46f1a75bd4ffe9cec97f9bf7af"],["/archives/2024/09/index.html","aec6323b105c9d42f9226b548f0b97c6"],["/archives/2024/10/index.html","698cde01f5c8e4771b2d43d5c8e8ee7d"],["/archives/2024/index.html","cd0cf44cab3c919dd31d5c7b9eb678da"],["/archives/2025/01/index.html","e340e637a242ff007ea3c277081fc242"],["/archives/2025/02/index.html","3a70ef0e8602d09975b13bdd59dc27dc"],["/archives/2025/08/index.html","ff61b15f513925b03833ac086bf34eb3"],["/archives/2025/11/index.html","35049344022ab7b9651a45bc83766b72"],["/archives/2025/index.html","e09a22c100f43714d95a51e5a059a40a"],["/archives/2026/02/index.html","9484a526284d4a2f3d0ef8ace61e874e"],["/archives/2026/index.html","621011778cd7f0271482474dbcc71ee9"],["/archives/index.html","6edbc7af2b74a1c0ef43a9d9043b5805"],["/categories/CPP/CPPBasics/index.html","b70d883859b95311073d8cc027fa0a93"],["/categories/CPP/index.html","28b504e51e674835979a32d52a2364aa"],["/categories/CSharp/CSharpBasics/index.html","39d52dda0c4f7a737255b225317e7e7e"],["/categories/CSharp/CSharpToolClass/index.html","1f16fa22115b8fbdfb7ece1edbfec556"],["/categories/CSharp/index.html","a97fe3c252f40d65b4e397b379eab75f"],["/categories/CSharp/page/2/index.html","71c70811ecbfeee3577a5dc71e39d351"],["/categories/Computer-Graphics/Physics-Based-Rendering/index.html","47e2b9fd13b6a5781132dac61aec200b"],["/categories/Computer-Graphics/index.html","753ba0b37e13f9d9e9a1355e8c2d2bef"],["/categories/DesignPatterns/index.html","4445950440ce972578d647925fbb93e0"],["/categories/DesignPatterns/page/2/index.html","4799e3b648d950441c916646c804b49b"],["/categories/DesignPatterns/page/3/index.html","11a871392cdfa5cbce605a873d522180"],["/categories/Lua/index.html","5d58149b720c24cde7797442a627a640"],["/categories/Shoka/index.html","974b7c491ce0422252afce84de854027"],["/categories/Unity/UnityBasics/index.html","bea2b7c21c845380962dad29ff86bb36"],["/categories/Unity/UnityFramework/index.html","73dfdd6c55c7a706dc961a38c90dadc4"],["/categories/Unity/UnityGames/Unity2DGames/index.html","5d16a0ef3df1d8b460d6ea4e5abdba7a"],["/categories/Unity/UnityGames/index.html","db1393032ac4fbfac33d8205ee80c6fd"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","4a827f43d967b42139eaca7de406e393"],["/categories/Unity/UnityShader/index.html","28523b718c0ac47642d6cd42f9208452"],["/categories/Unity/UnityToolClass/index.html","715db8700f5ec89f9e0649ccf122b98d"],["/categories/Unity/UnityToolClass/page/2/index.html","ba4867cd65d40ecd666e260e9355b9bd"],["/categories/Unity/index.html","c6d55fa94ae74331ff8c1c8f774a509a"],["/categories/Unity/page/2/index.html","586760b34ce6ea5a7e105140b20132e1"],["/categories/Unity/page/3/index.html","4314edf9eafe893aac00eae03a58172a"],["/categories/index.html","8d3b296813146e9fe851bf85db2d6d85"],["/categories/正则表达式/index.html","c1077dce7a2cd07a3a9c369caac9e78e"],["/categories/游戏设计/index.html","dd1949c08f0360ad94f61b53d70e72eb"],["/categories/游戏设计/关卡设计/index.html","5da49ed4b3899c2811b8c259b2bf873f"],["/categories/计算机基础/index.html","fdbee1b7132e3034a4665a28aa67736e"],["/categories/配置文件/index.html","c6b60a8a7a016c77139bee562e4f2e49"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","d97d2e2192bc174cb53ddc67fb838a6a"],["/games/index.html","f32f0e218625abe670f2c60c1bbc0ce1"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","7a2036204e30e5cd90dfdd95596cf001"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","f8d264ccec1da24d795102faa714d3fa"],["/page/3/index.html","94eb25e8b0714824926e9d5cdbe0f661"],["/page/4/index.html","868c7c7bdd1a50b99feef1bc65aba28f"],["/page/5/index.html","36d4c604374df9e78c8ea326e6ad5d5f"],["/page/6/index.html","03aaaee4026f512152090c1c7d10b4b0"],["/page/7/index.html","bb12db3db168ba90f264446c03084e46"],["/page/8/index.html","5a0a1ef5b68eedf70508debc2ca3ce0b"],["/sw-register.js","4d86a6a7666bbe0be5ef58100bc0c1bf"],["/tags/2DGames/index.html","f47f062d9fc44824d7324ad0b4e23001"],["/tags/CPP/index.html","17d1c3c856fe798424e8ac51fd5a2895"],["/tags/CSharp/index.html","8733bc700c8101558c1a8e324a7cd222"],["/tags/CSharp/page/2/index.html","ca9f184d489790e3dff9efe649dfc659"],["/tags/Computer-Graphics/index.html","35b9258b78889e69243ffda387b6cdb5"],["/tags/ConfigurationFile/index.html","3948d54f013f091691f18923a373728a"],["/tags/DesignPatterns/index.html","d8dec95f005511346d1dd81b057530d0"],["/tags/DesignPatterns/page/2/index.html","31bf30203cf562bf28fa4e62d282d61b"],["/tags/DesignPatterns/page/3/index.html","9911f1042c8c6353a37801821c16c93e"],["/tags/Lua/index.html","8f19bcc5886f68fb5de0b76baea3502d"],["/tags/Physics-Based-Rendering/index.html","98ddf5db3890432286ce5783ffce00ee"],["/tags/Shoka/index.html","9d21b91a9fffe5b78384d7d9710f6f40"],["/tags/Unity/index.html","47ac8529364c9d88f1a2919f2264e1ab"],["/tags/Unity/page/2/index.html","99720c537212aaa425002093b05f7259"],["/tags/Unity/page/3/index.html","c24f696d421d9a2fef67cd0fb43841c3"],["/tags/UnityShader/index.html","6a76ecda8002a4c7d442cecf7266054a"],["/tags/UnityUI/index.html","5062e62e41c043ebc8c6c672256cac72"],["/tags/index.html","0e4a321e11e55a648af28d3bec665c5e"],["/tags/操作系统/index.html","3b88eb9cdbafc05ac5dcbb99219ce840"],["/tags/数据结构/index.html","a965ef3586fcf28036cf2bf58970993d"],["/tags/正则表达式/index.html","56fe4aad2d6afdcb69b1eb58f60c11f3"],["/tags/游戏设计/index.html","f6739bf69f308238ef2bde7ae79ec419"],["/tags/配置文件/index.html","c1f0d973dd84d3d2b666a2dd463e8e23"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
