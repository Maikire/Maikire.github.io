/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","6681945b0f0a42eecfbd1f643bb82704"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","fd036ec218d8b8e9b94988b407f959c8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","0bcc0c4aab8d7131379a998dde40e6d2"],["/2023/03/20/DesignPatterns/设计模式/index.html","755371dc591421ea268472f6ddc14b56"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","1698e980af5cf66d9af0c69aa90b5ddc"],["/2023/03/24/DesignPatterns/单例模式/index.html","0ea7caf88a356a03e4475b52b077c970"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","63454ce79623c26d20d45ca45797939d"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","771af01acbc6275f052a544f0b463618"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","a15a702eb5981d9e671c6cd2462406bf"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","ed9c8a476f4d90282d9f18644d5f81d1"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","414ce93ca7dc44c41af993c22a9acff5"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","4cc85dad1e701e4e1a32826dc1612f8f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","bffad2fbea1f04930461ddb1e36ceb4d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","c228b430dcee1b3dc033eb7425f16e76"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","ef09512cf7f9d0c8c5fa90f048e31958"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","ff3a7b7861b6aa1c6d087ca41cb611fb"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","848472bf7d0953a49aa2fbb06385ae06"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","61509c27f494c1079c53db2c121b7c21"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","1989e44504f2ac1109d65813d4dba7ee"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","e67751781b3f80a5074ad41b925d74ee"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","f770f7c95884674b0b27eeb78653034a"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","6ff03602a9998031245bd32f2dfbcce5"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","11a228733cf337c5c58570db370be0e0"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","944334c58c10b505c891c847bce6f010"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","8fa0b5b7e79aa66944ec2760c9d9ae70"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","3f538b55464629ab5e93e0b9037d0e39"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","0c3015f73dea52d2afd4f4ba91d6ef7b"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","5378cd7adcde5357c9a2414a646ea7a1"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7d57f13aeab099764fe82166bc51b7cf"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","88b939ffbd408436b4a4575bff94a8c8"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","8ec07a4fdb0fc1b4ef2c449556fb5ef0"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","6674b025c73dcf68c44da58149a42c8d"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","c70c2248c0e7731136eb40d88c2380e2"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","e66a8d4de5a1b7b49af7429a51bfb816"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","057a42797c86b64e690be4464747f39a"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","29ef46857abaac9695b7702223427979"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","c63e9ae0a36ce4a3ccbe9876dbccf575"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","6880b22405a4df186ed837ac971c9bde"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","fd1ee6ae175499825b7f74b438a0af22"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","1697b9a92494df573364efa10ccbe4c1"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","614ece31dcd2e66f928b9d87ebc80355"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","9f65502238f0f784840bb263ed376ba2"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","107408b3d9cf0929edcbb702eef8c946"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","65d274bde8e8ffb2d37d643b0a39d94a"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","cdc45adfe14d759b19a11917017827fd"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","17805028dcab30cad1b02ff937f85e5f"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","555a98fff42fee0aeb875b08d5217756"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","494b4630ae612f6a0865aaf2f43d10a4"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","ed55eb20a0e6e618b78cf21697397a77"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","737f2fea47747946d0b48a08828584b9"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","c6e1206194524f0f5097834ea036a559"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","4d40d7367d772c0d72a0dd07067d7ab7"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","63344ced28d5c0c67a2737da5199d72e"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","2c76e6b2a743fa63b03cc4a3bfe3983a"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","db10be75d79418a4cec068f5c514f61f"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","8681447666e1631784e2b35570ff664c"],["/2023/08/02/配置文件/JSON/index.html","70c13bcfa770fcc053682b5317133c72"],["/2023/08/02/配置文件/YAML/index.html","ef9e27c636c5c3be8b41b317a22a6910"],["/2023/08/07/配置文件/XML/index.html","7333b51f9bf353a53ae8b096c74cc0e0"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","d3784b1463cc5dae11d58cf66cd84c92"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","a5906cd1d811959a7dcbec0ff72bf8d7"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","ad70403af4aab8f5016320bdc57405c2"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","fb8ea5eeb8fa95e68e810008950b99df"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","96c20006d344a5b8ade17c18d79ba661"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","d1a7349dcb5859fb9f3ca7326121a4c4"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","42a60dc647d0a47592bf1524a3d35951"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","14cbbeba074ca11593cbc2acd21a66d0"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","d90e77597df4991edb382a04c3ba21ff"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","5ac550ed6a3997182fdbc6ff678d69d7"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","0f969d75068c333114143bb68a333858"],["/2025/01/10/正则表达式/正则表达式/index.html","597fab5237e806288da12f8c21853fed"],["/2025/01/20/Lua/Lua/index.html","7a9366b3fbec011380a72fb1ebd3813f"],["/2025/02/12/Lua/Lua + CSharp/index.html","3106f869e7bd6ddc61faff0028a6ac3a"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","b3e862dfee8e10169e9facba2875b8bb"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","fb7bbb47cd3d3421bb540be3fe397f63"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","adb6c46e899b929e1e952e56dbb17632"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/BRDF/index.html","73d1ff5ed671a0abca4b674ceb7df7e0"],["/404.html","c28721e1dbe8e7801560fb0fc01ac82c"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","c389bd07a1f20d415fdcccd1a07377be"],["/archives/2023/01/index.html","f6b9474991c4b1a4263425df14c64521"],["/archives/2023/03/index.html","c6b732b0e4816d6de1b8f6bc6d43b41f"],["/archives/2023/03/page/2/index.html","f9b63f1faf9c45b349f13018e974a551"],["/archives/2023/04/index.html","c40db3d77d8eb94e5bd0e8c4e253d709"],["/archives/2023/05/index.html","567126c21bb0cb62340d552452e0d801"],["/archives/2023/06/index.html","07aa162d720eaf41068b40a21f20dd74"],["/archives/2023/07/index.html","e001ca37dc3725ffd54a74bdedf18476"],["/archives/2023/07/page/2/index.html","bfd2eff0993ffdc4cee72b34c6d7a2bd"],["/archives/2023/07/page/3/index.html","fb74651071786aaa5f49a55ceacf91a6"],["/archives/2023/08/index.html","2107d2ede31b14faf6c486789418360a"],["/archives/2023/12/index.html","b549a218ccf8456f08c3a6a09679a8f2"],["/archives/2023/index.html","8acbc9602b0ed99ace2f88180381591e"],["/archives/2023/page/2/index.html","77ff0b694f4b2ac33c27355371c950cb"],["/archives/2023/page/3/index.html","604b0529681d26be9ce0a7b83da5b0ac"],["/archives/2023/page/4/index.html","839e35da9462f1fc578f5c9189148b4a"],["/archives/2023/page/5/index.html","16b640b14604375ebf3da5513dd0e07a"],["/archives/2023/page/6/index.html","a74c6db79d59fd6399f17408f077f495"],["/archives/2023/page/7/index.html","ac085c7925731997af4b23c21e6e438b"],["/archives/2024/01/index.html","551f6c1b1aa47b68857653340ad41b48"],["/archives/2024/05/index.html","0aca093c40aae21f9995f196820e7e2b"],["/archives/2024/09/index.html","0decc69f1dfa719fa440e75b082bcc63"],["/archives/2024/10/index.html","f65b5b8de87df326f353bd34d2ec126b"],["/archives/2024/index.html","01dd67442c53aa4281a5357c1119da9d"],["/archives/2025/01/index.html","0823f6b5e1ba951cc2490bce7f457e63"],["/archives/2025/02/index.html","0d8429ce79b0458a056d2fedac7e88ac"],["/archives/2025/08/index.html","90c9103ea3085f7414d191aca9077ce2"],["/archives/2025/11/index.html","23516421a8ea1f4c5cc827eb2a6a4272"],["/archives/2025/index.html","9c826c664e5e39cb2f2868f45cebd1de"],["/archives/2026/02/index.html","fd4dfdc48c28b7804af0953d7906a979"],["/archives/2026/index.html","86232e4636b683fb85bcdce6f6f65dbc"],["/archives/index.html","5f68d4ba327a8488889eac2573fc3030"],["/categories/CPP/CPPBasics/index.html","ba4aeaba75c9f9b84aaeb0534cca39e5"],["/categories/CPP/index.html","da41d459a0f12cd6ca2a289eacfa9010"],["/categories/CSharp/CSharpBasics/index.html","07b9aec9b23824f5f766bd73d0f511b5"],["/categories/CSharp/CSharpToolClass/index.html","31114c4ffa01d911dcb0d5c904d7a8b7"],["/categories/CSharp/index.html","c694d65b7eead8b9284100631d8e5368"],["/categories/CSharp/page/2/index.html","7956522d1fc66e97371e471bc32e61a7"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","b8e6b483ff8519fa346dfb078641f410"],["/categories/ComputerGraphics/index.html","2bb7a95dee7f6182d04a39ec6fef2118"],["/categories/DesignPatterns/index.html","3080f2c3e33bfe945db02f8bab685e60"],["/categories/DesignPatterns/page/2/index.html","ea6314613bafcf0d50d5ffe97665455c"],["/categories/DesignPatterns/page/3/index.html","6132efb1755dcf5f4058e8f6b6b8f4c0"],["/categories/Lua/index.html","a25279b7538ae27506254dc4af70ea28"],["/categories/Shoka/index.html","47c77b8501dad94240dc86df183ac163"],["/categories/Unity/UnityBasics/index.html","ca2a5afe45ba2b1134b8989306471ebf"],["/categories/Unity/UnityFramework/index.html","6170523eb9caa487eb9c215b1ea75a82"],["/categories/Unity/UnityGames/Unity2DGames/index.html","df6c1e581c31727f1501a92a34edef24"],["/categories/Unity/UnityGames/index.html","06eb58098fa6d02fd2b605c66fb15ff7"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","23ab8405c2a6ae2f048df162fef326c8"],["/categories/Unity/UnityRender/index.html","bd1970340716146adeee503ed6de1b6c"],["/categories/Unity/UnityToolClass/index.html","262b5476f618dd4dffe85dc7a88de8a1"],["/categories/Unity/UnityToolClass/page/2/index.html","e59d3ec30835f9b95f8aeb15c308ac13"],["/categories/Unity/index.html","4b9d0d8e68559c777ecdbc79f7bc7f78"],["/categories/Unity/page/2/index.html","a8f1060a7cedb0431a59910f5fed0c4b"],["/categories/Unity/page/3/index.html","041218cef4229d37ce3860b536bbaad8"],["/categories/index.html","4d63ec8c44cd62e928aa57465b3e6d42"],["/categories/正则表达式/index.html","c0d3abc94987b1e3610c4154d05c93ed"],["/categories/游戏设计/index.html","32d6a7e9e280ed703e2eedce4ee1e65d"],["/categories/游戏设计/关卡设计/index.html","d27de45d918845a91829ac8b97b5dd3e"],["/categories/计算机基础/index.html","b1f1d3eef83e689ec2a82a2abba942df"],["/categories/配置文件/index.html","8678887b90bf5f8a98d2c9c67327a5d4"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","cb36ed894939a24b2fc75e665f127da7"],["/games/index.html","74046316f07a6d815556f770359a295c"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","286d0d54b2a0aff7fd21c9208ed36c4c"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","0eff9afa7befbd9bbe44c9a9c3ee78f9"],["/page/3/index.html","f902b6911b57298108e792bc62af008f"],["/page/4/index.html","4f588e577500e3a0b7a778ca08345eee"],["/page/5/index.html","45734abd8376df7f41c484a834c8d5f2"],["/page/6/index.html","28fd9eeaf3a178528a327ddd4d1857d3"],["/page/7/index.html","22c5291c45cda1df6326be2e3b0cc04c"],["/page/8/index.html","fbf64e433206dec9876c04a54f30131e"],["/sw-register.js","9039f5e633307f9656de45bd0dd6455e"],["/tags/2DGames/index.html","a60f059e0033c2ae70de66c3f0f30346"],["/tags/CPP/index.html","37ae28657fcf4cbe0da014ea8fa7cf2c"],["/tags/CSharp/index.html","d733c39fb5ae3597259dc064d6374f75"],["/tags/CSharp/page/2/index.html","e5e71f04882646ed3c006937c2e0918f"],["/tags/ComputerGraphics/index.html","48a26262945d72187273d4a6b98baa81"],["/tags/ConfigurationFile/index.html","8587f66d0134edec054181286f7ce77a"],["/tags/DesignPatterns/index.html","08fd6def44d87be752e70895bca7b7d3"],["/tags/DesignPatterns/page/2/index.html","06c75fb1d3b9666b4b3f30601181825d"],["/tags/DesignPatterns/page/3/index.html","966c6bb0895c2b5446a3996b01f27278"],["/tags/Lua/index.html","a2429eb1d0f3d5784d716cdebba07339"],["/tags/Physics-Based-Rendering/index.html","4b4ad8d189f24ae912c01e0bb0473add"],["/tags/Shoka/index.html","4fe264fde2673fe08ce5710943dfcd69"],["/tags/Unity/index.html","88d4994de27470e81694f1d4f7693c90"],["/tags/Unity/page/2/index.html","4814e4a72263cd7a44ec8879d9ae7ca7"],["/tags/Unity/page/3/index.html","765bc3204c61e5a70a3378e46bd0de9d"],["/tags/UnityShader/index.html","606608909df2d5d54c915a4e5f170c25"],["/tags/UnityUI/index.html","eebe649c980eb2c04bc5bcfdcefcbf14"],["/tags/index.html","e8da13ce78cc00a56ca4d9c5a7274cae"],["/tags/操作系统/index.html","7bfdefde401a9b497edf7893804c66a2"],["/tags/数据结构/index.html","e6fe2e36a4f8b51160c48947d494de6f"],["/tags/正则表达式/index.html","f1343257d64b720b21828a2a0e45c90a"],["/tags/游戏设计/index.html","30c4039aad46f7f1541b9220d98e1ece"],["/tags/配置文件/index.html","c706e6c62fb98920ce0e2e38ee6b5bf6"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
