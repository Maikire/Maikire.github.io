/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","b810d5be955141b1eda346671ab8d476"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","2428aedb9173e3546ff20b77b5b912b1"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","4a91793a836807aac9d781ab05c8a63c"],["/2023/03/20/DesignPatterns/设计模式/index.html","b9dca29dd76cd1b52c639e6358652675"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","53726ce12fc27443ce71f1933d3b703f"],["/2023/03/24/DesignPatterns/单例模式/index.html","7668c5fa114938c4babf0be1c1f579bc"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","0f39ef07dbb9eaa2cc28b4c18d078e3f"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","b44bb9f1440e5c4d48e3ed4851d92b29"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","6c7daae94334f9687dcfd4dc6a1e88a7"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","b220cebca17325fdf8c37b480995e840"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","1875a5f1dcf1f0ad94fb78978473454c"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ad2d3f94fe480bf6811b12177584eef0"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","5fc3fa8cbfcaaccd908e15c026b592ad"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","65498cf7c2075fa0f631464b835923ba"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","124ad140eb0512671e84d9c7220fc532"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","2792001f29191c719b89ea26ca2b6499"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","969b908f4b1480e929e1a65cabb3802b"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","c5d106ccacb76aa507a79dc201e4f1ef"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","b2ef6ef411efe7f96a5cab0621dcffae"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","bbf3943e8b30a8c944af64871bd9611d"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","4bc5a07a98015c977d613593302b6ba2"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","3fde0a34083f56e6555cbc3278996192"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","2d020d97a19160841edba643e3eef287"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","fabf7317a410ee857a797bf0509d716c"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","a375dbd4fff388b7619b95e3216b5afe"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","bfb53c2cb91bfe5e6446551eb2496943"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","f5d6e8e1def10f1b32d8bfd00eec70d3"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7839ac7cff14b7f51baa3992f02c27b4"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","b1c1e5194c46add3524092fa9cdc44a5"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","8d8734f6900d2e44a95286ea5be5b291"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","e7ec384b382c939600c55e11a691bbdb"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","e94a4f9fff6dc0dc34c79099d7b03996"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","41864e3289a0fcb54b81a04f18ff9280"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","8d9cb560a87a850b64ead36f27c0205b"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","68284d9d01dee75fdf461ae22da6a8f0"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","4e588bbac952cbc2f7117dd28035b2cc"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","9c9f3eba0183386c3e5f92d6c0449e95"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","826db49be3e5443decb176633f95179a"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","4662a33c0ff9c967f3688ca0eb83d36b"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","0e54756a07226aab824f8d8e24707316"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","622c3c9c352e6fc96f311156c345e224"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","e9e63919d87d668f7e74620064e32377"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","cef4dd85d2eb94a59a6ed1aaebfe4aea"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","0199669c28048825a1490117eddd94ae"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","e726c00a0f17a65757be0af15849534d"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","07cf12fa68fdbf9291c3fe7ddaec5aca"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","a6bf15ee8e2d876e798b69920755934f"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","975f6972146650ace97621debad1f56c"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","fbbe1f1a0c7a7d13f0573b78514eeda5"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","41a374240ff4d7434943fddbf6bde428"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","857fb7979792dae0d70c0b10ddf04f6e"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","f6c33f4e041da5984440fba16a714a91"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","82f2482c86061dea8cee31334c18dc51"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","f839603698aa127d25cf9e442d50d89a"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","a6845af154b5bae988c482b5c3990d15"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","af40e20740ea6b7840f850671e0123ac"],["/2023/08/02/ConfigurationFile/JSON/index.html","cfdc07a593cec20b3e2e75f04898e933"],["/2023/08/02/ConfigurationFile/YAML/index.html","dbe70bbac505899c71ead1aa9953ee83"],["/2023/08/07/ConfigurationFile/XML/index.html","6556634d578f073677f9a36746dd79b0"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","62ec183f26e642e1d258bdf5800e6cb7"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","76335a5991487daee8fdc32138ee7490"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","d5061ee2ee2a05a921a6388e632c044c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","5859e16b384a25c955765c1c0da37248"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","31ff76918730b8cf0da5f0d20ee7f75d"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","4c7ecd88998b7c8501d280bdae9b7194"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","1ccbadbcef8d43cdbd4d14703e23240e"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","1971eee7318b1a6881b87dd9442cb2d9"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","b076c27338e82beddeecd41286645602"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","26bbdd86523155c1d846a36333b43aa4"],["/2025/01/10/RegularExpression/正则表达式/index.html","e98f69ab33160fab75a25eba16e0e9a1"],["/2025/01/20/Lua/Lua/index.html","2eeed0c171af71dacfb135d8310959a9"],["/2025/02/12/Lua/Lua + CSharp/index.html","3388ba8a160e524f8716ef46af51413b"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","196c0230bce671bb2689730b54262fde"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","6f3e0f6e1ae6e63c981335991a592f62"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","f52c0fa8e1f06f3fa01429134ec4142f"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","7a2aad58bb5e6059bf9f187e14bb288f"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","4b2ec691dec03c46623760ce6c46f3b6"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","4af8221205c43875eed7f74d23e034ca"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","2d6a974e757b7d066dddb43fd4d76afe"],["/404.html","e67f753ec090185fff06cd545b2c2623"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","948adfc668796daebe3d8c380cf90c12"],["/archives/2023/01/index.html","b6ef2211b8c237474382730a3440d88f"],["/archives/2023/03/index.html","7a31cbdba983ce8622b649561a9d15d2"],["/archives/2023/03/page/2/index.html","d8e4c25c4942caf4d3ba294233b37fb6"],["/archives/2023/04/index.html","37ca8affc0033b66ca3d45880a6e16ff"],["/archives/2023/05/index.html","565a218611b30cc57b64ef07b3850f13"],["/archives/2023/06/index.html","61231e049a05735385dcecc0464b21c0"],["/archives/2023/07/index.html","729a47ae6cea5b01e535eb81fec970e1"],["/archives/2023/07/page/2/index.html","dac5fc6eb6b2924cce6042fd16f47339"],["/archives/2023/07/page/3/index.html","aa0d3b71d9c2dff575a07191ed57ea77"],["/archives/2023/08/index.html","e353c5593dd6a7870014b58c2a371053"],["/archives/2023/12/index.html","d75f832434bb4406439a4ba0dcc9de97"],["/archives/2023/index.html","6c00b504381522fd41b77b41e477345d"],["/archives/2023/page/2/index.html","36eb3f186e343f2b922cfef7c660b7ac"],["/archives/2023/page/3/index.html","3d111f8cb66cdb444e48de79e97f5b06"],["/archives/2023/page/4/index.html","f80bcf5b70272bce563118d3306515cd"],["/archives/2023/page/5/index.html","d4940bad9770844d3c2e2ce3271c2b5e"],["/archives/2023/page/6/index.html","89c874e10bdd5045f950ca7abcaba572"],["/archives/2023/page/7/index.html","bab6e42118383ccf226e00c01621e0a4"],["/archives/2024/01/index.html","ee5061c97d30553c0067c3989dbc9466"],["/archives/2024/09/index.html","14092348de01f00df5eb18d52dbb6390"],["/archives/2024/10/index.html","71e84540e94433d03fa10d9cb4d1c929"],["/archives/2024/index.html","782898a9d82367c78b48b6cae0c8c208"],["/archives/2025/01/index.html","b975978f217ebb961079316b14148ac2"],["/archives/2025/02/index.html","85c8ac54b66d0d669af46a0ff4f0503b"],["/archives/2025/08/index.html","71e1c1f04885849f53af278702d073b8"],["/archives/2025/11/index.html","536d868ffb9420bc55cdfb3a8c6ee216"],["/archives/2025/index.html","f86066cd15cafb38e8b07e43c55af3bc"],["/archives/2026/02/index.html","9afb7d5f7b63591d632eb2ec0be355da"],["/archives/2026/03/index.html","6f83d3c0d98f23e085332591c541070f"],["/archives/2026/index.html","321fb10a24de2007e4aeac85d9a3f7cd"],["/archives/index.html","0e5d218abc459b430a82d8216078609c"],["/categories/CPP/CPPBasics/index.html","a6532d658165de7b4c463957ca6fb7ce"],["/categories/CPP/index.html","d15013ff6470f66a7eeb06250ed2d114"],["/categories/CSharp/CSharpBasics/index.html","bfe0e7a931d50ac79b7696fbf81516bd"],["/categories/CSharp/CSharpToolClass/index.html","850652fc7f2663bd6a201b42f6ac99b4"],["/categories/CSharp/index.html","cf717a51ea17aa9fcda02cd9c4c6591c"],["/categories/CSharp/page/2/index.html","95db58bc49e5c5d14c4a497975814029"],["/categories/ComputerBasics/index.html","a7bc9ace4be7ba931bcc3e53cd4d5972"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","63f329f1bd10bbd30a4c4b13bdc9892b"],["/categories/ComputerGraphics/index.html","bba250ea72db525575f555afd50a3991"],["/categories/ConfigurationFile/index.html","cd08cd9514883fde3a6256a1f2a1727a"],["/categories/DesignPatterns/index.html","956d6aad57cab7a09d464dd2d76f1ccf"],["/categories/DesignPatterns/page/2/index.html","b8e9dff9d4c2f0f32ac7012dde1cde10"],["/categories/DesignPatterns/page/3/index.html","64f3b8363f8aa58b1fb0054e859dc241"],["/categories/Lua/index.html","1a9fbe0d03d8ce7757b76977175055b4"],["/categories/RegularExpression/index.html","1d7ea97453474def78104374435b9d69"],["/categories/Shoka/index.html","83cb3cbd2fbc2ad5da00d44d6f7c874a"],["/categories/Unity/UnityBasics/index.html","fd5f14fd44ae99a1e0e15baf30edf607"],["/categories/Unity/UnityFramework/index.html","bf45aee9819837f4c0638760baa0d9ab"],["/categories/Unity/UnityGames/Unity2DGames/index.html","d58120dd5bd214b244d7c6d0ee34f109"],["/categories/Unity/UnityGames/index.html","8ba8ce1f3c5d2d3f536454bc484ff856"],["/categories/Unity/UnityRender/UnityShader/index.html","5c4c17edde4dd331e3545bb66482d3de"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","11a35bfbd7d511d0625ddf2c2537cc8f"],["/categories/Unity/UnityRender/index.html","cede34b0274ad5308ceaf69e7f044245"],["/categories/Unity/UnityToolClass/index.html","154771041235baeefab6a040354b9b93"],["/categories/Unity/UnityToolClass/page/2/index.html","1456ca96b3e2cc40652f91bc7ac7505f"],["/categories/Unity/index.html","38d0b22319bac4d0b66e879aa20fb588"],["/categories/Unity/page/2/index.html","96972c496ecfede6a909533cbb40d6a7"],["/categories/Unity/page/3/index.html","907cb9d15cec0c6698e09eceff134d4a"],["/categories/index.html","80d9d70204ec5030e02ed01cebc653db"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","ba30300c4f30d84283160dacb33c4209"],["/games/index.html","6159252d28c5d570b019d78267a51ea9"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b9626cfd1646b831e71d9e35c191cf74"],["/js/app.js","c1240649c47dd37a369169a4310dcf19"],["/page/2/index.html","4f4e0f669a193e5b818a47a68831d3fe"],["/page/3/index.html","a96957058e5a63fbf24b17923fca9e2c"],["/page/4/index.html","a0a914a4e74d022ee7b9c18726572f86"],["/page/5/index.html","b705bd693edd7d8fc7c8740a6b7d3b09"],["/page/6/index.html","52d4127b80d5020a0b1344dd1e2d8688"],["/page/7/index.html","a00400a43957b43c4402e75de66bdc9a"],["/page/8/index.html","dadf320e9658b835e6bc46692fcaae78"],["/sw-register.js","e88f8139d87d1d69374668baa0d40ef8"],["/tags/2DGames/index.html","91571450771b1592a694ccee5370e517"],["/tags/CPP/index.html","0eb79819de014354ded58d8ea40e38b2"],["/tags/CSharp/index.html","520cc0e357ae07cb7c737217b60c4e21"],["/tags/CSharp/page/2/index.html","7c05a4a9467ead89c838cdf09d726f05"],["/tags/ComputerGraphics/index.html","d2ff8e1aaf3c3d875e754dfb35c88f39"],["/tags/ConfigurationFile/index.html","c7188c0f4041d110fe076c4d74a7c70e"],["/tags/DesignPatterns/index.html","e5d8369ae31eb9962c8dd72b093d9ba5"],["/tags/DesignPatterns/page/2/index.html","1cb412ec268e6317dacf2ba9fb1c453d"],["/tags/DesignPatterns/page/3/index.html","9cbc11e61b1c2dd9e74e642ae13e3b5c"],["/tags/Lua/index.html","258d6b93e497b090bf2b29beb197bd28"],["/tags/Physics-Based-Rendering/index.html","88484d0424aab95f47f4d5512d96cc77"],["/tags/Shoka/index.html","221b28ea06ae6478440ccb763c2f6523"],["/tags/Unity/index.html","8b0da1d3bfd125891c3129f87490eefb"],["/tags/Unity/page/2/index.html","eb5c762d261ddc2542271d4dca70a0fb"],["/tags/Unity/page/3/index.html","5c5286717ca3d676b092927c0c199d08"],["/tags/UnityShader/index.html","2bdf8ce3395d2f4daa575049a3c10740"],["/tags/UnityUI/index.html","1985a94647c0027564085760ab0f43aa"],["/tags/index.html","4b2dcae36d2571fdbbd07b1cc6926530"],["/tags/操作系统/index.html","dc4865b8930ef774f32544751d7d419c"],["/tags/数据结构/index.html","5c2918942032754d9c1c8427cdd122b3"],["/tags/正则表达式/index.html","b641907bf14520887c98fb83500430b2"],["/tags/配置文件/index.html","5df544c599fe1a14212e4b908d8a80ff"]];
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
