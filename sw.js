/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","3621037f67dd6379191bc87dd510bde2"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","18f920e57e8ce36aabe898fe7dd89452"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","457a4531850160683ccdd508d07093f2"],["/2023/03/20/DesignPatterns/设计模式/index.html","6da7215c103fa89730bac70d303b4aa0"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","1b77a46cc67d117242b73bbadf805de3"],["/2023/03/24/DesignPatterns/单例模式/index.html","d462bdfbfbaa2ad0279e91519f5091f7"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","ae08d01ad0526fe439a1cf0b0ec1ecd8"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","46acc4d8ceef23ad45ceb688276ea220"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","a2ff052e0260aac2ad8287342847852b"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","6310dbe343da681ac090fa5ebfdf0944"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","f67efd6df76ce70057e16e1c9dc884c6"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","1b7a26234f39bdc7df8d4c4e40b0c6a3"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","327fa6e348205f3fc6680595a3468196"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","37b36b076b062445f2d6f58e5852a97d"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","9d7ba568c15213aa402f1ac6366733fc"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","23a909421856cae3effa812d4cfa49f7"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","e10ea99ef13439ca8053c22d1e509e09"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","b120f6f5802a74bd1e57e20a6bcdfb5a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","f9b85a5ffa9a1eb48ac2e8521093a9b8"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","5040c3a5e015e0ab9b0ec2e213931b42"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","2850810be9f32c337bf780bbe56dd97b"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","a1692403fc5a97a0c438a44dc8e74c12"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","6337d7115fca2a488a9afef4c00da4d8"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","527d78d8b17c8431e57443d1f488c7b9"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","76462f10f2b7d2768d96a82f6de61bd3"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","c271e81279e5d8e4c8020da3d7eebe42"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","0453cc1cb5003b7eb8c92e5694386ab7"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","5e39d45971751bfc4bc09914d7df0fff"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","f7f26dd87317eb827512958ad2895d73"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","921b6321041a182feb124e1851a87f7d"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","990cf8fc1c135af2dba3e2509b9ac23e"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","0337ee6f9d796a5cb75450874edfec9f"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","3186b01a584219e9d0d12d55f6e51de2"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","f5e8f3e7f987b5e0c6ad850cec2f5255"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","1d0293e4daa53a623617f38f2c4a2f26"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","2dfcdbc9ff02a0d602cb29e229572fb4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","e41f073275547c119e5e12ebcdfbefd8"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","3c8674140eac208385d021c70881d133"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","0ca17a7f9caa424bf69a9c475c29e568"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","8f0b8b7ac9226688884b994a7b8f2d08"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","bfce42c4e376e985fe652714864416e0"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","22b8e281cf75f1f38cb5b0bce71d58a2"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","a0746cd0956b75cbb34bd5d1c12f619a"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","9903d87a3615c37cbfad62fc795a0b26"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","69a19e38332ab31fd8627cb6418e7292"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","6cff5222daf3e4774ff7119c5fba4b40"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","f0462dc34fa47d84613b03f1bc2ec6ce"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","67c0933488400fa25e72f85d4d11581c"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","06defc67865948ce4461b3a295f770cd"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","a0de8258b7d81bf26396b712463b2c8f"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","76a2793477e72122c520666d98409141"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","17251f1a83c6cdb7296a9405cb648d73"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","81860ac8dc9f9857ed967b221427fb87"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","027b5422da082cba8c45807e837ee470"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","585cf1b4e39e98f1fcd254c6dd18a3b8"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","55267b130abafde153bcc50a968e0469"],["/2023/08/02/配置文件/JSON/index.html","19fd9bc6798bcdf277b45fd4b957a2e0"],["/2023/08/02/配置文件/YAML/index.html","f3d34a5a66d0e499ea4275fa34e2b820"],["/2023/08/07/配置文件/XML/index.html","6d4756a6ea0fb38a0bb62625bbf64a8b"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","85c13874d878516b3961598aecad8ac9"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","890bf52d080bed413789ef95e76457d2"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","98d70f143327b339c5b314cecf0f859e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","27e88ae5538d5f5e37de8ed15debb935"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","d06125b4409d02fc5677f41a60f8d697"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","b13455e7905c6da93f85fed37ff3a26c"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","3cf0a584f17053e259518bde2cb94050"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","359692a16d99ac75578c053922b1c61f"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","3589feb786d4c0e6ce94b0c700298e3d"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","bc072981992604b43b93bc8dcb2e65af"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","f629bcf7ab2e567adcaa9cdae6a5034e"],["/2025/01/10/正则表达式/正则表达式/index.html","238fc794bc9377864ca08e0330c260ab"],["/2025/01/20/Lua/Lua/index.html","be4d19d3fe0e9bc892fa0967645bfcb7"],["/2025/02/12/Lua/Lua + CSharp/index.html","131f25723a21cded5708d1bf4a91ce1c"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","6aafd87d464824390bc8a93920d61f79"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","d0a92762593c29423b890463cbf47a9d"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","50e4d528694cb3a45ffe50ef9e6d808f"],["/404.html","6840d2bbbb6aeab1ab254c177549d373"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","421c5da5be871d19d127495b2b471208"],["/archives/2023/01/index.html","b5583ac28091e49bfc96dad6dee7a9ee"],["/archives/2023/03/index.html","329438aa979673e3726cc917992c4a61"],["/archives/2023/03/page/2/index.html","84904effb5092cf451a9870ae2b269e4"],["/archives/2023/04/index.html","879593a7d12486bd392310ce20098ae5"],["/archives/2023/05/index.html","0ab98ed1ab3a4fe0ada301bd09f54f64"],["/archives/2023/06/index.html","d1d3ced14c7255232eb9dcc894fe9012"],["/archives/2023/07/index.html","8fe530968b8ae2ce4c1789d4ce9facc4"],["/archives/2023/07/page/2/index.html","9a14feafd44483fdf0de175f511619e9"],["/archives/2023/07/page/3/index.html","03841c7a67adb71144340b826d46d16f"],["/archives/2023/08/index.html","37a9fbc391058520d9d58ced913364f7"],["/archives/2023/12/index.html","17d821e572d0ced6fa9980ac02abc13f"],["/archives/2023/index.html","78749f1580638d0e02f16ee169de1ea5"],["/archives/2023/page/2/index.html","bcf01f8f3f146684205b9d40aae2558e"],["/archives/2023/page/3/index.html","e032f6d7627c9abddb4794b37b47bca0"],["/archives/2023/page/4/index.html","02eaf2ef071c8335cd1390d851c5406c"],["/archives/2023/page/5/index.html","c26269a4ee770c1891becccd2be6a29a"],["/archives/2023/page/6/index.html","9b59231308efd80946e8b1c9a1afe484"],["/archives/2023/page/7/index.html","88ef30eb06a3eff2ba1174216eeaa938"],["/archives/2024/01/index.html","f5fecd83d8fa7054039a7b02c99015c6"],["/archives/2024/05/index.html","274d7a516af72b29daf08cf72361ee9f"],["/archives/2024/09/index.html","76bbf633762b72a914f503caedc5bd4d"],["/archives/2024/10/index.html","86059a2be308709d2b93fdb35abb2365"],["/archives/2024/index.html","eeb91d85a52017b84999d4372a8ac374"],["/archives/2025/01/index.html","43771fe75281437040e41e6f9501ba0c"],["/archives/2025/02/index.html","ced812be5f53697b2b0887247776e105"],["/archives/2025/08/index.html","63d972455ddd584b01336ecd3efec164"],["/archives/2025/11/index.html","1eb1a3bdefd81ecee0c461f3f59fd742"],["/archives/2025/index.html","3e8cc2ac2e84eb337fe57e40c5f87b24"],["/archives/2026/02/index.html","5f9c3b0f97bf2c7c7d1386c1160d14f1"],["/archives/2026/index.html","99fcd25ace0eb65e118f661e6440af15"],["/archives/index.html","3db344dca487fddbe77b01abfe8e48e3"],["/categories/CPP/CPPBasics/index.html","748bf95c431d61e44359f30096aceabe"],["/categories/CPP/index.html","1fd1ed7f5a39d930c55721a4e3fdfd70"],["/categories/CSharp/CSharpBasics/index.html","c349d4199f74e67fe776952e00c47b05"],["/categories/CSharp/CSharpToolClass/index.html","681d2ad2afe25f9b6565d649e7a5f812"],["/categories/CSharp/index.html","68211f92ecb6fabea673904d4b9f08f0"],["/categories/CSharp/page/2/index.html","3f1a31aeeed3e07df9d06cbe743c01b0"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","8883c500d97e94ff96feade9d0410f76"],["/categories/ComputerGraphics/index.html","3c7ddbbb7ba41c690606035be1341fb2"],["/categories/DesignPatterns/index.html","5fdfecc53392bb2472d2ff03cee65cd4"],["/categories/DesignPatterns/page/2/index.html","ad56803c2671939b664a1e59ab680812"],["/categories/DesignPatterns/page/3/index.html","7229f275633b102e370c6451f9bd37c3"],["/categories/Lua/index.html","29876d529123dc5e28f027e9285bfb78"],["/categories/Shoka/index.html","dd7447da8919f821f09dddb4692fb0b3"],["/categories/Unity/UnityBasics/index.html","8f3d859e4bf461556a4030ad96528c6c"],["/categories/Unity/UnityFramework/index.html","67d587fefdb6ca3d2a04333515e061be"],["/categories/Unity/UnityGames/Unity2DGames/index.html","318f6f1e782c52bbbee14d6d7261f1d0"],["/categories/Unity/UnityGames/index.html","11c7bfd66da10f7fd23e477951ba4b47"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","49b97c55c22bc0bc503bd18e952aeede"],["/categories/Unity/UnityShader/index.html","ace9a7e1cc256084b5b201da2d57006c"],["/categories/Unity/UnityToolClass/index.html","a00df10afbe9c2da5195ced4f6689d00"],["/categories/Unity/UnityToolClass/page/2/index.html","4b9cb0de6ea743f1760dfe331a821d26"],["/categories/Unity/index.html","a3243871dcbf2c7b83af32c7a305690f"],["/categories/Unity/page/2/index.html","a1aed83ff920bf79d3dba1c90cda3082"],["/categories/Unity/page/3/index.html","3d7c5ec6bc2575b46dc0a080e1a6506b"],["/categories/index.html","8b8d70efb42dec67a97bc33a700c7043"],["/categories/正则表达式/index.html","1d7f482dc92642838352d803896384d3"],["/categories/游戏设计/index.html","21eab88b5c16f6d61ffa62d9f018ca73"],["/categories/游戏设计/关卡设计/index.html","fc144ad6c03bc2fcc0141bc752a695e8"],["/categories/计算机基础/index.html","30296f1d692f567cf140daa846536062"],["/categories/配置文件/index.html","7dc0b1ba30997996f507a9c91260c743"],["/css/app.css","a46c8e88d0a37394af3cce9e3ace8f8e"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","645c660231ecf40b0b25f1dd52966fb6"],["/games/index.html","11a1e9834af18cb28386b67b522da855"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b9e683723c72b155cd3a5f6bbca8fc55"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","a2928234506badbe6472d3d400179c66"],["/page/3/index.html","3fafb48f5d0894891b414df1d1e8dec9"],["/page/4/index.html","71ed17f464ef0b0c75e0269f26d7fefb"],["/page/5/index.html","e4febc6b4d7eb09b7eb888cf90538abb"],["/page/6/index.html","ff478aca6b5624bb267d2ce41f0437bd"],["/page/7/index.html","cb958d0ef5f177e0c3a30d7bd364d9b4"],["/page/8/index.html","da44ec6e2bc1ece137c68f744a708759"],["/sw-register.js","b9748662af7bb10c2e1ddd0a8c90ccd8"],["/tags/2DGames/index.html","bd44916c458891038da0922321c398e2"],["/tags/CPP/index.html","389d29130e93c41d3550ce18ed85090a"],["/tags/CSharp/index.html","ea7c92d841f584dacf928fb0e1576d63"],["/tags/CSharp/page/2/index.html","e428adf425b34df16c347316bb780460"],["/tags/ComputerGraphics/index.html","5feef43c179456f20229603dd0dbb45d"],["/tags/ConfigurationFile/index.html","8fce1c41cc497d506130ad7d79c32bc1"],["/tags/DesignPatterns/index.html","9522aba638c6668286c9f9e95f395b5c"],["/tags/DesignPatterns/page/2/index.html","484cc8e1bb40c1ac3a2e982076dc54fb"],["/tags/DesignPatterns/page/3/index.html","8edbb52b422600c49ffd15da3a144684"],["/tags/Lua/index.html","47ad15722e7603fb53be77904e5d5a9f"],["/tags/Physics-Based-Rendering/index.html","68a4c5b631d0a7875219d8dc307f9cb3"],["/tags/Shoka/index.html","5256e9669cd2d95f52d4b2868620ad17"],["/tags/Unity/index.html","25e3516750c550d06f4c8fe7891c08e2"],["/tags/Unity/page/2/index.html","c81fec7163096af5db90fa19c350b1d7"],["/tags/Unity/page/3/index.html","3fbbfa7d780573f1d9c753d39d7e1597"],["/tags/UnityShader/index.html","c13cbbcf55fd8d4ee02ccb9eb210db2c"],["/tags/UnityUI/index.html","ed04f67055c68296dea067b770abd8d0"],["/tags/index.html","3980d135b413a04d86345d35a30c324f"],["/tags/操作系统/index.html","1706a6119ef1263694b5012e47768670"],["/tags/数据结构/index.html","8980984be333b8d7c2394e91f78a5f2a"],["/tags/正则表达式/index.html","ec5b621b5fb8cec142c0974a968ede05"],["/tags/游戏设计/index.html","cfcbaa43356d0de6aaef01d663812e15"],["/tags/配置文件/index.html","1448d7fee1780505dca9ef4fa235334f"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
