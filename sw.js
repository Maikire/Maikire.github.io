/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","994d2397ed2a5b38cec86c8a91f877fa"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","058b3d403dffa1fc1e323ccd7b61888b"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/DesignPatterns/设计模式/index.html","c44da53d53cf26ea8e26ecadb919446a"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","f88b197f8d5fed931f69b133a8b46c1b"],["/2023/03/24/DesignPatterns/单例模式/index.html","96d251603db37ffb59cb18c57130b8b8"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","58cfefb21acd70baf321288bb9a47524"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","4f537feb1715f7bb65ddffb2a745de4a"],["/2023/03/25/CSharp/CSharpBasics/CSharp基础笔记/index.html","611f96bb240da420b1a3981c154ce176"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","120249847483b228e6895b69b8c56e0b"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","d7cb660255f4bd441ed1d72d271c71dd"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ba051206468011978b3c622a6f3c46e6"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","a16b7d4d3d2a8ebf8ed8cdb5fd25af9f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","30163d6ba6604fbd8fe3befd9c1e6817"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","14d03d3b7b9b223f8b65941d0ce2fa74"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","5b7f1611e098474f3312df64accdd5de"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","41766d4c947e4f05255b1709b869119b"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","bef1a5d19ad59d7fe04f5dd837347860"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","dba5caec528ccb9053353dbdd1fcc10e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","f2579bedf77c047e7377bf817604a8ad"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","d208cfc21d38c6059bf59e404c1cb7cb"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","cb84c3df514adffaba4a2dd38fd3024d"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","5c47ae5dc0a77674fdf5d519db205583"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","2660acd836ebc080aa3330f2b3669267"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","c185bcde6d9c2d7be80e6754d4b9aae2"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","3d02eed44aa3de8837e82682db19dbe1"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","2be694d3b526e6084fa87f9e675cd52e"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","67fc0ffa4c14ebab9ecbad2c6ef80930"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","cbfcdc59db6c242b8149f85cee15846e"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","e08c0ed0fbaf0a81168f122dc493bd9d"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","9e06f813ce86e7bc5de4eb5f6b6f1f3f"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","4c604e363c71db34d127abee73336040"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","cb8684dd2eeeda92f4a77d0c7c6624ad"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","6b818865c2505bd32bf230f4d2d08ced"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","72c77a76bcf769f6e5869f3e37566862"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","8e6c9997afc4902d94919b75e0ac4089"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","36a1258ec1dc1075a1ce27c6474c7346"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","7155feb7c89ab5fbfa159e8524c34bd5"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","96857e00c35ddd3e028a3b009fbe5eed"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","b19f58182774cea95416b1c5392087ff"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","a5c9e616dc56e1109b6f095c4b02ab02"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","ddcdf6070d8a7c6284ac792bf52394d7"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","10362acf0838cdc095f3bae96c89886b"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","3ea485d26dbc6fe6e0b72aed8cb63245"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","e2aaa6aa6e455e72f77274bb513ae781"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","0f583074ef653ac32d5ade30dbfde64a"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","a51a755d6e10ca87bf208588e05c880a"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","cbf19e4cdb8b2fe85a95cabea67a10a8"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","d8a386d2246c7e7fac5894abbd141721"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","9f7c7db0c7855f1507ba3d4867e96bb8"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","446d28be98dc0040e775a5ad209601bc"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","7b39210e544fa70edfe382ebf7a55a5f"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","a9b745c1f0a91a5b7b41aa6edb23f130"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","35f0390989127fb187b2da169021329b"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","5b58b8f4e2df3068adcebb85a5cbc50e"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","223fb9ca55dc5c9d254bd9eb4d3caaae"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","dc01da83174ac1d1bc229286bcbb3768"],["/2023/08/02/配置文件/JSON/index.html","b3aca613659bf725cf67cbb60cf28113"],["/2023/08/02/配置文件/YAML/index.html","038d5c47e4bfe3c5fe9499413ccaad24"],["/2023/08/07/配置文件/XML/index.html","ee7e0fe0711d27f03de25a2728721669"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","74b41afa550aaa72dc3fbf63354ca930"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","84540ea87757b558516615070f706635"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","6b34f9943db92b592f1ddb1a29ff5a29"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","9702814ed66ac0948d8e6a725aa823fa"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","2e8be6b51c328b6d517d757fe7a23aa3"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","ba0ece8c232e47beaf2d99740b3c49fd"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","16cb2f3d26b841f5f0d00738995c0712"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","216d5fccdbf3ec6858f177963e31fd8f"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","8f49e9cf93ce1c3c4c2e059184450e8c"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","c6ec6297f92952b87acf05ab9b37c26b"],["/2025/01/10/正则表达式/正则表达式/index.html","d4cc4f2fadeca905841efbba642f07df"],["/2025/01/20/Lua/Lua/index.html","6ba55fe6862a8b6f5003d7c46cffeb8f"],["/2025/02/12/Lua/Lua + CSharp/index.html","94e8c32c6eb25c7580b04c863e2c3bbe"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","67196c40a34b9e12985509305960c278"],["/404.html","1889db3664df073f2fb6797a6a58c437"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","bb21e703a64f765ff427aa3c32929a8a"],["/archives/2023/01/index.html","ea8bbb55b489d99cdf8016b8c8aa58be"],["/archives/2023/03/index.html","d8feb273e88760178e12ec86aa9846b5"],["/archives/2023/03/page/2/index.html","e364ecfaf8989a1dc7493f36cb46a219"],["/archives/2023/04/index.html","d81174c99f70e2767587f2d1b99ca67b"],["/archives/2023/05/index.html","4ae67b9c5b522501db97b5cb5e0f6bd1"],["/archives/2023/06/index.html","4b9a21d66d8c551522b56ee745ee0efc"],["/archives/2023/07/index.html","6efa141674876e6f24c2799cc4402ac3"],["/archives/2023/07/page/2/index.html","94867a8ad137f3b27b14a32d626e5cd1"],["/archives/2023/07/page/3/index.html","bd486e36f049ac040ee1a70c3abc0ba8"],["/archives/2023/08/index.html","7c246befb9a5a4212588e9d15c1fb08f"],["/archives/2023/12/index.html","9e5d191b6880ea3ef10c735cc6fd56a7"],["/archives/2023/index.html","b1a3158db6b34dfea6f7abe3c2e9b83f"],["/archives/2023/page/2/index.html","b808690c0d75c2b7f0e38d50d47447b4"],["/archives/2023/page/3/index.html","0a0df1fcef1d07b0d3ffec6db63697cc"],["/archives/2023/page/4/index.html","1ba850f5ae8320272ec569f40aaad1b1"],["/archives/2023/page/5/index.html","6a25a50210bff336d77348d4ab84fe47"],["/archives/2023/page/6/index.html","41d393b4ea36aafa731af4fb31948132"],["/archives/2023/page/7/index.html","ea0133e787c2e51febffec72ab9f66b8"],["/archives/2024/01/index.html","0096d60820351be7b99748921112a942"],["/archives/2024/05/index.html","7fd235b47b4f537a78b6e1f23ccaebec"],["/archives/2024/09/index.html","f24d4b9ee0158ffd3b0f3e4edf50f0a8"],["/archives/2024/10/index.html","c5b934c2d4d79ec110685177ac09f491"],["/archives/2024/index.html","1f7484a3e2f20dc2796b327e292b3c59"],["/archives/2025/01/index.html","3890255deb56f38679e8308e701c6a1e"],["/archives/2025/02/index.html","4c793e6b84006afdbde907e11a1a8293"],["/archives/2025/08/index.html","be2404b155e90b0077c3e40e52aa6770"],["/archives/2025/index.html","7adb17b1b2881b3c396378212767f84a"],["/archives/index.html","e0de7fee950913be65bd5a8fd46fa2e6"],["/categories/CSharp/CSharpBasics/index.html","2e278971121eef714f31d2882ec66105"],["/categories/CSharp/CSharpToolClass/index.html","0a3c11586b954ec5414448e97689535b"],["/categories/CSharp/index.html","2f8263d470be4afda2ed1522f4df56fb"],["/categories/CSharp/page/2/index.html","4e435eeea864bd2e99fe3aad10654f2e"],["/categories/DesignPatterns/index.html","8cb4238b423f0f85f762b17c1e46d084"],["/categories/DesignPatterns/page/2/index.html","e371bf864ebbaf6fe6fc00aa5f39094d"],["/categories/DesignPatterns/page/3/index.html","943a7bfd20b77e829c8456399580705d"],["/categories/Lua/index.html","0505fa7935c29bb8e08b8f5b53fc9b6b"],["/categories/Shoka/index.html","c02e90d5410ab9216cec1a7155b09479"],["/categories/Unity/UnityBasics/index.html","66cb880ac11a39ac2200bb276dc21c8f"],["/categories/Unity/UnityFramework/index.html","bd96fb0ec9766172e9971e091e15072e"],["/categories/Unity/UnityGames/Unity2DGames/index.html","a539abe9fd0df8f715f940c980361b3d"],["/categories/Unity/UnityGames/index.html","1aaacb801084380f01c2c202bfced46c"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","33634b719743998c2cd882df3df91e32"],["/categories/Unity/UnityShader/index.html","db6ea4b383f01ed19dfdc633f7deb3aa"],["/categories/Unity/UnityToolClass/index.html","0a87caae80471da09aa0ec76a46067d0"],["/categories/Unity/UnityToolClass/page/2/index.html","ecb2cb94fc63177f36537ec37d524ff9"],["/categories/Unity/index.html","826dde34a7d19a7e34cdb07bfc6b91ba"],["/categories/Unity/page/2/index.html","9250decb8ed2fcdd440e58636410ac7f"],["/categories/Unity/page/3/index.html","96ab28d667f6a2430d34429b226d117d"],["/categories/index.html","de787fa86650d25cb3f35cfe9bf29f10"],["/categories/正则表达式/index.html","19f6a1a93f4bd834cea47a313ccb06f1"],["/categories/游戏设计/index.html","2578516c803577c4427f6c2f040ee1a3"],["/categories/游戏设计/关卡设计/index.html","2cc233de6a2a05966ebb7b829f5deccc"],["/categories/计算机基础/index.html","2f3d2913b824c5bcce407defc1eb410a"],["/categories/配置文件/index.html","426ef2eb1023c1f42ef81d65548e4b0a"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","8a6cb2c9df4709584e39c3e48ce28e11"],["/games/index.html","13fabe84d32f7513473c5bd4b5bd1977"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","85502cdfdc8bdf329d9b58e191c790a4"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","ef811708abe61af1eca3da7f13eeae80"],["/page/3/index.html","f4b7fd3e1902ef5dc492bb681df7a8c0"],["/page/4/index.html","b44c6223bba74b2ad84c79d04a266a1d"],["/page/5/index.html","62e7791312b698bfda63e2530cb9abce"],["/page/6/index.html","b586cfad20728aa8c3268aeb7891516e"],["/page/7/index.html","882c689c20593c0c41c26c4f52b22dcc"],["/page/8/index.html","34ee4cf1d6dc50cc7b78af08b36330ac"],["/sw-register.js","89becaf4d41f8bc8f452149a62a449d9"],["/tags/2DGames/index.html","9d3865617635b6ce9e2233a573d08f09"],["/tags/CSharp/index.html","fd6865bec5479ac7f168bb15f35e5be0"],["/tags/CSharp/page/2/index.html","8908a2a75c20001ea621542a7cdc766e"],["/tags/ConfigurationFile/index.html","39cbda10d5b5424867119f99263b8d26"],["/tags/DesignPatterns/index.html","f06a7e5e0f8a7f630af8e9c033b3a679"],["/tags/DesignPatterns/page/2/index.html","844ee034e5e98cccd3a9239347e7d708"],["/tags/DesignPatterns/page/3/index.html","54ceab67a95831c3313f293c1fb6e1f2"],["/tags/Lua/index.html","936f880ef4d7846ee86a061eb26ff51c"],["/tags/Shoka/index.html","599b36a333d4f208cfdb059cc356baa7"],["/tags/Unity/index.html","5bc96bb9e079bd97fd1727e80411ea83"],["/tags/Unity/page/2/index.html","50421b189099e5ed08195838689b48ab"],["/tags/Unity/page/3/index.html","3ac384a493bbda6f5a39b1976f9116a1"],["/tags/UnityShader/index.html","be9c11c1f802a9170d3b231948bd9fa1"],["/tags/UnityUI/index.html","68976448341c66e73f641322a062c0fe"],["/tags/index.html","1df1c574bed49a11a57ecde4b9c0c3bd"],["/tags/操作系统/index.html","fd0e52277a7c9807808bf585cbcef9c3"],["/tags/数据结构/index.html","8635e0db23f741dab24ddf14619e7326"],["/tags/正则表达式/index.html","477c386bd7f04541e570ba8984b30950"],["/tags/游戏设计/index.html","b85fa2561dffe2a6bc04828c00264952"],["/tags/配置文件/index.html","f7d9302f2a25087ed93d9d62faea5224"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
