/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","a09e09a9b5a4d04b4389caad4743eaab"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","bfed354d9ef1f3be33d048d67e9a5288"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","e9371bf1fdccd32f463c72b4f45967a6"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","9fc43d6769b0c226a328082c16283009"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","6af5cfe9c04dd2fa4798c84b3edd350c"],["/2023/03/24/DesignPatterns/单例模式/index.html","7bfda0c908f30db9abed7a92f0e83c9e"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","bc498738cf1d09f4e7d644af822beabd"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","ea4342543d6ab092d9c6b1d9d558f460"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","76aa18193ccd67d596604d6d3612885e"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","3d3cc664ff71c39a50efe0973260dc0a"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","43d56481ea044f088d662e8ae751ea3c"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","1d1d04eb8e766f86ffbf505f6b3d9577"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","ab7f9b9ea592596f1b295b53effdb397"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","2d84f72db88e3be06bee5c7053f74769"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","190e31f911443d89e89b84a5149d6660"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","4105ed701afa2dc9b328b1e55c19f7b8"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","d700a47eaf4c26c06827a046e02cb6be"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","5dc8cbc512de072cb3e4fb444090df0a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","9eff73dbd81f6b733aac0d019aa19a9f"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","58eb09cc4a8ab6ac735805621ef042e2"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","af414082c94e65102b4132257226430f"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","143da83b3d703fd6afc93278bfad7a18"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","681fa67311f39331d963a20dbbe915d2"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","14adf8ef4df3c539443471beaa1a96e1"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","c08a6a5b694dc954f7b036a966351e41"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","ddf11805252befae7c4c54ea54a269ce"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","892e8db94d14f206e9524833cdd1e9d1"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","998f8eb37bff5ced68073866beebddcb"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","f1390e946d29e396399dd9518072d7b9"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","4f4df3efe33950e73d1dbe2fb2e53767"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","be137cdeacbf2edb378d7b4fed30f60c"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","9b1a8c9fccfcf894d91ef3f9967111cd"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","76eda1a8ed66cc353bc47c9fbf5941f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","00083b7cba4d4b925f500656f0474823"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","a391bdc62f8ec2f13d3614e43f07dd65"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","7416bc7273e74d25699478ad55e30bdd"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","7f01dab83bc8cb5323c8b29e94810d2a"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","dde6ce0be331427e2be6eaa892f92c8a"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","18f3eed8598b1546bf20f1f07d3c8d81"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","eb10f0dadf92e2e94e9bb0b91a39f6d4"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","f6154cc95fd71af832df8fa5e23c7326"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","b6c5bcb420d8c18c709f7204c059d7a8"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","22148a9d2977971bf45f9ee01ddc1318"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","c1a21c3621bb78ec68772125f1a7bb26"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","5a4d733b50370e68816f4ead7722d9a6"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","8923e01815e6a863f7920b1b2feacfd1"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","2701c0f073fa6cddd34f379fd3eaf97a"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","a4297311132b81f4f4990e0bc99c77b4"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","63f445030fc8e42e57d3602757c65841"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","4b2342c996201c7fb778547d26642997"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","43ab34a1da64780f33e7da575ab2a79c"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","be57679dcce5c693a3e6dca192bed0d0"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","02a15a498c1bc1978cac364d8e89651e"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","012fb666a22d19f49d483f10eba982be"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","f0b0b977aa9ac813ebc5ead8e095aaee"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","1aeb34482675052d43565e1dac15c878"],["/2023/08/02/配置文件/JSON/index.html","ad70fe3539df6daea34534be942dadfa"],["/2023/08/02/配置文件/YAML/index.html","b3346214b7534f6ed2c20ad007831d7a"],["/2023/08/07/配置文件/XML/index.html","28f247da468e1673a4eab9d5b10a951e"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","ab0e39a44b780c2686f8c1ee7b86d358"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","8f1e24b7dbdee6d1e479fe414563fc31"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","f2b4567871958442d5f9334ceba3d304"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","857765a4328adc2820de229d3f8fdcc5"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","d0859502ce5f9d5d6b978f0604a596bd"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","dce1121c5eb60ad49b64516e0d88506b"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","fa9daaeb0eacc731a83c3127bf350150"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","a26a010361ecb5edc3c4be307ead90de"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","ce43ba5d494c7824af3d242733b4a1f2"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","ab2824f3c797f76787afd6b46c588175"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","00385d35184c1e58d814feeaff9456fc"],["/2025/01/10/正则表达式/正则表达式/index.html","a1e7cea2896c168e0ad37ce51073bb6d"],["/2025/01/20/Lua/Lua/index.html","fb894053da0360c442dd1167aadb099c"],["/2025/02/12/Lua/Lua + CSharp/index.html","34bee38e196df01ed4eb43bba96f0f65"],["/404.html","fbf66bb254d6784fe9a5cb5826259e4b"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","963d22bcb4f9a19bbec007a409f6b331"],["/archives/2023/01/index.html","e46dcb68f16554d5d09b1466675c9232"],["/archives/2023/03/index.html","e09070c20ecf224852fa1dfaf395ffb7"],["/archives/2023/03/page/2/index.html","ef98d9b6a51c88e0154c2064d4eb71f2"],["/archives/2023/04/index.html","f1402b6197cc00588c8c9cc9fcf832b7"],["/archives/2023/05/index.html","c19655043d136a0eef9178eac0a12c3c"],["/archives/2023/06/index.html","67d9c45dc6ce85e426b141f9d4e5ac00"],["/archives/2023/07/index.html","54506a66546dde27c721c5c8c71ed86b"],["/archives/2023/07/page/2/index.html","e0427a1b881b9235bbb75cfae865f056"],["/archives/2023/07/page/3/index.html","25f29d247c79bdcc35f55f5dbc415acc"],["/archives/2023/08/index.html","e921d70ebd9e0ac46fbb0e37cdd2ea6c"],["/archives/2023/12/index.html","c1576d2eeda9028189a4bb5d9bd5fdaf"],["/archives/2023/index.html","18246893272da71efbe8a07ddcddeb81"],["/archives/2023/page/2/index.html","05f8df863312023cb08e244d8d7003af"],["/archives/2023/page/3/index.html","f35826033a862bb9dc0148c90bafe80a"],["/archives/2023/page/4/index.html","aba430f7e3d74bf1df3a28ca9da2225f"],["/archives/2023/page/5/index.html","bbb3417da1324783f7fb94a92c3d77d8"],["/archives/2023/page/6/index.html","d2ce8998a4d4b4e2bc4c9d2ed93ad485"],["/archives/2023/page/7/index.html","9f6aa5fac332419055bfd943aa32849c"],["/archives/2024/01/index.html","6f50ba5620dd8902f1503426cf93bb9b"],["/archives/2024/05/index.html","9f6603877c87259f8c118841ad309795"],["/archives/2024/09/index.html","945d963b2a1e84f42429cdaea86e8bd0"],["/archives/2024/10/index.html","55231d518c4ebbd480503d07b093a35c"],["/archives/2024/index.html","ede8243baf7fa3f40d602754d6ec77cd"],["/archives/2025/01/index.html","f45436d2fe56250a139584898f304138"],["/archives/2025/02/index.html","48d6476da33017fa525bef8402e5cbaa"],["/archives/2025/index.html","d8859a6a527ce590ff0884ccb5cdeece"],["/archives/index.html","f059848a7caa87e35a4d52b7c5733e41"],["/categories/CSharp/CSharpBasics/index.html","f54cc03fba83f22c093bae343d0a9329"],["/categories/CSharp/CSharpToolClass/index.html","db308b28c8f35e7fa6ed05dcdda432d1"],["/categories/CSharp/index.html","ad82b1ab2db339e2804d4d193faea03a"],["/categories/DesignPatterns/index.html","8bb5de2967a516a2014a67ca38d7439d"],["/categories/DesignPatterns/page/2/index.html","c958b7e9a8e262af12aa3d5262e5614b"],["/categories/DesignPatterns/page/3/index.html","f5769c0a1bb2d8ff87b6a93b66088b18"],["/categories/Lua/index.html","804be4fe5bae8b654b4c0dda57b0bfe5"],["/categories/Shoka/index.html","24d47c3ba29e00ca391e9e91b16c019d"],["/categories/Unity/UnityBasics/index.html","249f2a417e5bcb9a05ff53af5189640f"],["/categories/Unity/UnityFramework/index.html","c75ddab68060b1b095c0825ec7c5909b"],["/categories/Unity/UnityGames/Unity2DGames/index.html","94742bc9264c2d78ac07d11a4ea277c3"],["/categories/Unity/UnityGames/index.html","122de2c7c8e76e9c33dde4246248cd0b"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","c51307758abfeb3acf9e97043976ab0a"],["/categories/Unity/UnityShader/index.html","38c72b0e7e19b7f4f33afb82c58b7fb0"],["/categories/Unity/UnityToolClass/index.html","121b30e8a11cb924599042a920c52559"],["/categories/Unity/UnityToolClass/page/2/index.html","a8a6de0668ec0eaabf1f3be928d2eadf"],["/categories/Unity/index.html","e6448668202b813f153f0f3f649a1114"],["/categories/Unity/page/2/index.html","be570759ac0ac3aab78dc2fda9f6c6f5"],["/categories/Unity/page/3/index.html","fff182f21aec4b6f3c63ae8c9976cab6"],["/categories/index.html","82ab97f0d3ef64e962f946be4af5373e"],["/categories/正则表达式/index.html","f106edfb40aaa0966b43249ca4817492"],["/categories/游戏设计/index.html","11581997bd32654e892d174398baa682"],["/categories/游戏设计/关卡设计/index.html","01ef4cb8ef4f9bf177bb4d3cdf62d023"],["/categories/计算机基础/index.html","2fbcb25921d1ca29838a02eaf187e9fd"],["/categories/配置文件/index.html","d86a8f77c6e54086a7fb11d5e91eec04"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/games/index.html","be28e2fc63e0ed9bbeed84c0c73c13ef"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","b5cf0c217f08779c5205ad2fb52bafdb"],["/js/app.js","e82d49d496985ae085d8b0ae957a0ffe"],["/page/2/index.html","94755a93c9cd513985b17f4ccc48836c"],["/page/3/index.html","3e457e24a0299b848269a4410445ca06"],["/page/4/index.html","e875ca6a435644fe6b0db38318e4061e"],["/page/5/index.html","e6410882c88a8f0535abaeeb95a1c275"],["/page/6/index.html","7b05423949b37ff75989367c81e7d92c"],["/page/7/index.html","944edec9aab09dfc5838840369cfdcf2"],["/page/8/index.html","cf32a9cc462c0a7c48b33f0b53b9303e"],["/sw-register.js","79a923b678def9a7c9c05234263db2b6"],["/tags/2DGames/index.html","e6b7ba4787bc495a19d0b128cd45f8f2"],["/tags/CSharp/index.html","98bebd776df1f501a5e3588cad907e02"],["/tags/CSharp/page/2/index.html","74361f09c7756a6bdfa8c8ffe9b7af9d"],["/tags/ConfigurationFile/index.html","a0af3c245c9c8cbe8bb0f2eda22adca3"],["/tags/DesignPatterns/index.html","0a73cfe4fb8fce776a80b3983c4cefb0"],["/tags/DesignPatterns/page/2/index.html","09ee46d8d6e86d6533ad138df13bde08"],["/tags/DesignPatterns/page/3/index.html","0a773e15141670e2decbbf5406f33507"],["/tags/Lua/index.html","e005bfb76ea5211254482392984bcb37"],["/tags/Shoka/index.html","424e371d41bc50b91df782f0f08f8fe2"],["/tags/Unity/index.html","8032b8ffabcada64e5868f35591057e2"],["/tags/Unity/page/2/index.html","d49f7f15c882b64cf24eb16c11ef7b2b"],["/tags/Unity/page/3/index.html","966b369f83480fc1bc3cf57c64a33af0"],["/tags/UnityShader/index.html","443a821afc65e6c5b1a94109714638a2"],["/tags/UnityUI/index.html","8603b46289f4cffbd0c0e119e02c689a"],["/tags/index.html","e188cd0ba678faf929d15bc2af2a8a70"],["/tags/操作系统/index.html","7e795668429b70adabb0801eec2e4e55"],["/tags/数据结构/index.html","9ff1bb7bc72f895ca208c9d45e828663"],["/tags/正则表达式/index.html","36e1330ead6c54ef23cdfb18dc1415b6"],["/tags/游戏设计/index.html","d42f290e36a88e125c47db0fa7cb7a8f"],["/tags/配置文件/index.html","b967869bd79a67b109dc0b35f7c58997"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
