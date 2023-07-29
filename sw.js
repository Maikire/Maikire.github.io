/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","e3ecb7e1d4e0f7786676cb926058f3fe"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","14533ec77d11c77e27c3bda50cf5c0ec"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","2feea7987dae3e78a6ccdfde6bdda619"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","62bc2d48a59d66b8ba2b4a8a9cb88e43"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","7c8e5308b457487c56e210b3c0e0c4fc"],["/2023/03/24/DesignPatterns/单例模式/index.html","edeb30c2b009e41cb1db4efb0ad184ed"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","41a7de0a9031a281dea478e58ced71e4"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","97af6234c8c4347de760b2e90093a1db"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","33b87bc8d6ab54178a6f3cc37808b5ba"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","8b80aa844bd9c9302ffd8f4ae2d381d7"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","7807cf4085a0be33a002fdd6682afc98"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","7017ec16c25e24b5a44d1d8b29f8b3fa"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","e1ea448fdfc11ea5b5a4ca02ce73612c"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","5ee3b3fdce7d752557068502236e85d3"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","473db03cb2ebd5f4931eb288ffadba02"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","8bad20c7d9a2155caac1c8eb2ba3a7ac"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","1025e1e88891d127291aa2bddd119093"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","e2ba59bdaeb5b5adbd8bbfaae3244eb9"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","8ffc4847254e58623e84956d55a238f9"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","5104ec3b08dc99ccac13184c400ec2a7"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","6d192b3490ce2b53d9e364f275c78286"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","5b53b5a6a44f7407d91ea7ef05bec5a0"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","102d769f6b498be44d5631e47d93869b"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","7307aece9e05eb692caf531f3034929d"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","de0fed068b045c7f93c206e73b4130ba"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","82bdb0d66607d8b5a398a037539a85b3"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","7fd0491d784f5ae1a9da1123141324ab"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","eb8b39143a44d7efa95a98a55061974a"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","9104656aff2081a602197bc0ab12738b"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","c42a0f3115f9a9c7ccfd829b370febfc"],["/2023/07/17/DesignPatterns/工厂模式/index.html","e35aedae85f1d139652243c2d47729c7"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","126958ac084bf8be42e48710cd4d2417"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","eef9c0c921252809828f4eef059fe681"],["/2023/07/18/DesignPatterns/策略模式/index.html","c4df403ed1c0f0082b79deb72b456bce"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","d889fd4f2ffa878069615e7457cd29a4"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","b4514528c709fb3044d981ddede33fcd"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","03f817979905de10bedfe4a8d3b6dff9"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","5048de2f96f948e8859414e2da9f8e3f"],["/2023/07/20/DesignPatterns/原型模式/index.html","feb6079e681ebaf81a82dd37ce5b0703"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","f092513eeb7de1a906e7312ce862e932"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","dbd46958ebba65b8aa851455c8912d2d"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","8d00010428c223ac82a1dc96ea6912f4"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","d60c779f185778ed3ff52bae30609195"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","4d346d2c4778c7ed13fd88886b8e9eb9"],["/2023/07/22/DesignPatterns/建造者模式/index.html","526dbf32d1cab59bd26a0fb7f0d2b479"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","1b3c3d9296011b072376b5bcd64ea4a7"],["/2023/07/23/DesignPatterns/观察者模式/index.html","5e8b59e135638e1899d9a3f152d574f1"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","cb15b3c41dcbf9e09c094a6c32618c92"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","c1cc1a6a1b3e01376265a38179ea1bb8"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","5b597e99af0ba620c3866447c3526687"],["/2023/07/25/DesignPatterns/状态模式/index.html","9be4c4bdc4febcff5cd32fb64c482a8f"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","9c1b03d397fe567f3f3aa72d407efc71"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","ace89e1a7ad0ea633dd3c38de083b148"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","ad466f005388c5b0fe2c8eb70f7235d2"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","56e58fd6ebb8f2d32b43412020bcff2b"],["/2023/07/28/DesignPatterns/组合模式/index.html","a4225b451f3f6349a37c638dcbd332e9"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","df99754911b27714be31a32ed4e14377"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","c4dc6cf963d7a31c2ac6ea5e02e5cc1d"],["/404.html","b1a02b611a39a642d2288e32a7bf41bb"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","0e3cdf211bc76f076219e0f775dc5583"],["/archives/2022/12/index.html","f30560fb56ea4645b5d6186c9d2423c4"],["/archives/2022/index.html","3d240ecd94dc10d0bc8f46d83f5f4151"],["/archives/2023/01/index.html","a86e383fe1b136a268268b42ec323663"],["/archives/2023/03/index.html","479465bdf080276c29e0f079b91e1148"],["/archives/2023/03/page/2/index.html","c240dbca5d31fc62843615dd5a5c4d00"],["/archives/2023/04/index.html","4e049dc1634e3ae6b18bb858c5791241"],["/archives/2023/05/index.html","1b4379ec35a3818b2372bc0dd3d24fb5"],["/archives/2023/06/index.html","733d6374f383064eb20b9c442d53eb40"],["/archives/2023/07/index.html","34b9401d950e9e85604ec9040e0a248a"],["/archives/2023/07/page/2/index.html","2509226c6e63869ee3997a1c802858c6"],["/archives/2023/index.html","d514ff02c7301fef02828e0839c1719d"],["/archives/2023/page/2/index.html","be0fca5bd1ba76549c4f0b357f1c303a"],["/archives/2023/page/3/index.html","29d3e66bdddfe46047d9217853020c55"],["/archives/2023/page/4/index.html","b7778b11453e3983eb8ff333faea77eb"],["/archives/2023/page/5/index.html","6d9ffe48e0e40ca715f0612e19fc6a93"],["/archives/index.html","e9e69faad4920fde3ef631e854c1338d"],["/categories/CSharp/CSharpBasics/index.html","e92d18e29f1758ed878c10873d86f5ac"],["/categories/CSharp/CSharpToolClass/index.html","84817a3661a84e3936d4de6423f23ff4"],["/categories/CSharp/index.html","bbfa4ee5813e223cd9e15b51cad2df19"],["/categories/DesignPatterns/index.html","efaf1f5933a9ae7a068159384e3771f8"],["/categories/DesignPatterns/page/2/index.html","dd19d012dcce50b377bbc7214f6b1a97"],["/categories/Shoka/index.html","af5dd5864614d1d4df42fd32fdeb4e11"],["/categories/Unity/UnityBasics/index.html","a9434526b392489f1174d35d54322c11"],["/categories/Unity/UnityFramework/index.html","ca49a5e4834bb804d01292d32e29ff47"],["/categories/Unity/UnityGames/Unity2DGames/index.html","1d4990e346cdc8464f1cff79620a4f58"],["/categories/Unity/UnityGames/index.html","345a8b64b3afae3864990a6a3a855bc0"],["/categories/Unity/UnityToolClass/index.html","487a063989de010851a6fdedd76fca10"],["/categories/Unity/index.html","27b48955f370e38af7fa96db57196981"],["/categories/Unity/page/2/index.html","1c3df1c7fc56b6507e2a73f0e891181b"],["/categories/index.html","74895f82af08bb80901a0c5e9575a27a"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","65a7fae4352c8829e9033217eb705cbc"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","41994f6955100d8077e5818eb01bbbe8"],["/js/app.js","d69628b1071cfab075d94c5670bb1661"],["/page/2/index.html","cccda87f2497cf9a2544007337c3f9d0"],["/page/3/index.html","a8d1bebad275250aa3ec51ab5bbd3a4c"],["/page/4/index.html","0b560940ef110ee70dc4674e074b88c9"],["/page/5/index.html","9c06fd43a99e2b4fa5b1c4734519d91d"],["/sw-register.js","8951282a8e744a495dfcb266a6e32b2a"],["/tags/2DGames/index.html","53ae9daf6f88d60ba85164a40a8fb51e"],["/tags/CSharp/index.html","938fe56ad8fb5d8ae6bf49a83a58220c"],["/tags/DesignPatterns/index.html","c0f0fd9852bba9c1595b845670c8d747"],["/tags/DesignPatterns/page/2/index.html","1a7bf9d9a6223bab0e931ef49ef4a4ee"],["/tags/Hexo/index.html","b643cc6433542e40cbea14e0dc40b7fb"],["/tags/JSON/index.html","dc2a4aa5ba7d9df48637ab86837ba1d9"],["/tags/Unity/index.html","4b33d8fd45640b0926cf0efb2bf6798c"],["/tags/Unity/page/2/index.html","b9c4feea1ed6f647afd2bb30c750395c"],["/tags/UnityUI/index.html","daf37d799504b03692a66b89fb54ce41"],["/tags/index.html","13ca03631910cc1d10fbeb4ef139c94e"]];
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
