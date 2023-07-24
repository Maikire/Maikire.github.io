/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","d0b0e6ea3675bc9d244b6a4b27877e54"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","35bb128289ff51d43cb35188ef12121f"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","3fd5d82c0433deb41f12fb4a9659e9ee"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","5b01d1f84c539e8a6389b876277c0962"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","3eb2e63e331192dacd0c1d86bd4f07f6"],["/2023/03/24/DesignPatterns/单例模式/index.html","6a54fc1ba3da7449347c5da3c75b2e92"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","c95a21662ce518e5e3a4e33b3efaf4ba"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","b9b6a0e09b800b5974fa3678113f500c"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","8ba6602d66fc438093e9e48acc855ecc"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","93241adf4c3184c7c68a3235b900c115"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","ac48770a3f95529fdc872380841cfb73"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","db1eca499aea07e41637fe945e74e974"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","dc9bb6b22fab1146261db02ab34c6a9f"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","28e42f317cbeb1be7e422d8d0bbc57d2"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","da5aa2d5f15ee3b63e41af6cda5df5c6"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","03dee24d581215ad0a857204315b775b"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","9ebd7204da15c8a5c51d6b9bd75a1e2d"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","17b83331680e55fcb24063b070c2f7b5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","9931a00b5c675f1b5360db5c16beb9c4"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","4c3155e4234c104031875562ae4cdea0"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","82e40cb1795dbc51e85a73d6309ed1c6"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","30ec10a925121710a7ee2c29bf68e0d0"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","60f599eeeb3caa81cc377db0c824c506"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","835fee94b08875d0f6262feeb55c0fba"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","74aff466f7069789371d909b03898996"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","8dc9984befa43f6c2ca4e3c9f863d8d2"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","8945dc48fc49ff956b8fd2dd9cf7d747"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","1387122b312cdf765efc5e97a70f95d5"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","9e604864ca998767c7236cb53e17ae53"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","c42a0f3115f9a9c7ccfd829b370febfc"],["/2023/07/17/DesignPatterns/工厂模式/index.html","e940f214ba62ddda76573f70b5264ba3"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","d22c31ff91559e7d8b50d5e23b4a7a72"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","eef9c0c921252809828f4eef059fe681"],["/2023/07/18/DesignPatterns/策略模式/index.html","ebc2ad83452856fdb4cd117a319bf067"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","d889fd4f2ffa878069615e7457cd29a4"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","085988a734e1b2d31810a12b1d979db1"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","03f817979905de10bedfe4a8d3b6dff9"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","5048de2f96f948e8859414e2da9f8e3f"],["/2023/07/20/DesignPatterns/原型模式/index.html","04cf7cf775483023748ca80043c791be"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","2953e76535f4a3eede085a7e7ac2e112"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","01dcc5ffb25731d0969ba2cb177903ed"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","618beb2d4eecad677e742cdcc5eb1a9d"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","dbc6049b54b26bb3e22fcd4985ec2189"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","4d346d2c4778c7ed13fd88886b8e9eb9"],["/2023/07/22/DesignPatterns/建造者模式/index.html","08567187264d2ed139f9aae0f4cb93dc"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","1b3c3d9296011b072376b5bcd64ea4a7"],["/2023/07/23/DesignPatterns/观察者模式/index.html","f352dd5eadd167840315102c61b26b15"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","cb15b3c41dcbf9e09c094a6c32618c92"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","cbbae40d53b0bd39c5ca2b79058a04d0"],["/404.html","7d3726aa92ffbc82d3fda7630a257c89"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","804c0ee60585b630e7ef6a6c6632e819"],["/archives/2022/12/index.html","725e18f53469e14c2cff7096d0a1bb7f"],["/archives/2022/index.html","300829fadeec7b11295be7b16768c127"],["/archives/2023/01/index.html","d9f1812e28813619e2af4c864c0ca9ac"],["/archives/2023/03/index.html","3e6e1337c0c78ce6fba2910dc1eb7f62"],["/archives/2023/03/page/2/index.html","698e8c04b582c2b373be527048684c7e"],["/archives/2023/04/index.html","5855bb22204fbaf847437a891f4100fd"],["/archives/2023/05/index.html","8358d6bc5a674e7ce1cc562d9cc702bc"],["/archives/2023/06/index.html","7b5372b09a0aaf07ab2bb1e7d73b0d89"],["/archives/2023/07/index.html","61c9f3c1c4d10e687af3965e9f377333"],["/archives/2023/07/page/2/index.html","e042995064b4bfc1d1c77f098d0ef8ab"],["/archives/2023/index.html","455e7a472df3d33133a181d4639ad278"],["/archives/2023/page/2/index.html","11bb2e0008e179aee3ea0d589d298c47"],["/archives/2023/page/3/index.html","08a185906bac6397838f1cfcc60a3562"],["/archives/2023/page/4/index.html","1db897bc14311ca213436af78d098ae8"],["/archives/index.html","81c859bade66ae8eacfe3f0e33539027"],["/categories/CSharp/CSharpBasics/index.html","dfab1903e9f69028afe1404557d2906c"],["/categories/CSharp/CSharpToolClass/index.html","7d042dacc03d32f9f7a854e7a4d73405"],["/categories/CSharp/index.html","8d6c5fe9db5bb23a908ed267ac48a123"],["/categories/DesignPatterns/index.html","1876183f1534bb0ca6f4c17a59cab4fe"],["/categories/DesignPatterns/page/2/index.html","a2f4a34e0cbbc5f3e3208d646a23a75d"],["/categories/Shoka/index.html","0298f2b28a3c3c778fee1f896b36b1ec"],["/categories/Unity/UnityBasics/index.html","1dd6dd82c0d5e550e40cccd78761804d"],["/categories/Unity/UnityFramework/index.html","ca666e28e0e2190d89c44465b56b6c5b"],["/categories/Unity/UnityGames/Unity2DGames/index.html","7c211f0e37563a790336a7b08ae0edc8"],["/categories/Unity/UnityGames/index.html","a723b5773689d5ff841370755fe351df"],["/categories/Unity/UnityToolClass/index.html","913cd5279bbfbe70dad10815772ec1ed"],["/categories/Unity/index.html","797cae7df95de595cbf99f64c55ccfe6"],["/categories/Unity/page/2/index.html","62cf10e5b5046826940825c60518de25"],["/categories/index.html","b31f342a9fb9d18914283bba33361e78"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","6bda0f8949eebceb814afef54cd07203"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","2ad7add2e52ad3da5c7f69fa6b856d91"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","842e75bfca791e0674c561cb7b8a13b1"],["/page/3/index.html","459baf74b4fde4da9813fbc063464dbe"],["/page/4/index.html","4c110ba0f6f0b3d457c8f143e52dd48e"],["/page/5/index.html","8e152a9a294cb9e5b9d4cac428e7a876"],["/sw-register.js","51b19749c96f379fb51e26b28e774f3e"],["/tags/AbstractFactoryPattern/index.html","84dacb3d8a7a9b5feb9b7c49933664d1"],["/tags/AnimationEventBehaviour/index.html","77f3123253c5a0f1275211f61b21e892"],["/tags/ArrayHelper/index.html","7873861b21b2191983e9c9d69e6f164a"],["/tags/Attribute-CSharp/index.html","fba732bcf307205f80db0b3fc3e11e41"],["/tags/BuilderPattern/index.html","b09bd4f2452e01931ed159db098bfdf1"],["/tags/CharacterFramework/index.html","27137caa2e5af774c22e41261c2a5565"],["/tags/ChatDemo/index.html","cc13c0ae5c9064f06030bbbba9e14e91"],["/tags/ConfigReader/index.html","a6bed9570c90de1867da84ea01fcc1d1"],["/tags/Coroutine-Unity/index.html","b9df9efbe27972c3e4b782f5d1653e09"],["/tags/DecoratorPattern/index.html","332145f2c01ac64704306dab5ee23f8a"],["/tags/Delegate-CSharp/index.html","87964ee059714f32646b766847833680"],["/tags/DesignPattern/index.html","556645c8e9d1af3e5119b68a7aa69393"],["/tags/Enumerator-CSharp/index.html","20c4d0ccef3cc7330c808b91d517c275"],["/tags/Event-CSharp/index.html","21567b0a8d9f6dd29ea00ad5b2db3a90"],["/tags/Exception-CSharp/index.html","d3a8c7e562c36dc734b174e62bf2d296"],["/tags/Exception-Unity/index.html","05b930c9b2841de84465b494f24e880f"],["/tags/FacadePattern/index.html","c79976e2cdd7e00e68fe9fd7dcab5828"],["/tags/FactoryMethodPattern/index.html","31446d7cad71368f2f703fdc39d16e2f"],["/tags/FactoryPattern/index.html","f518686ad73cc57596c77f6b065a476f"],["/tags/FiniteStateMachine/index.html","0742648225da69f26dc79c1df939dcd4"],["/tags/GenerateResourceConfig/index.html","1e9c0e1e9fa962b0802ca4c3cfd0c023"],["/tags/JSON/index.html","ee3c9e3e4b4a3d34b8aa001e50ff5d1c"],["/tags/ObjectPool/index.html","ca2045c4e7ab97f3403abe712d1bc740"],["/tags/ObserverPattern/index.html","50a289159b7ad44dd7c21b5448fad736"],["/tags/PerformanceOptimization/index.html","651783123814461991d527ef66b94a06"],["/tags/PrototypePattern/index.html","83185303047e59a8d265618ada9af838"],["/tags/ProxyPattern/index.html","da7ca2767c9410fa29ca7358dd74ea55"],["/tags/Reflection-CSharp/index.html","97d342f1c61d6bd4a1fd039b6fb934fd"],["/tags/ResourceManger/index.html","bd1f3853a45cc94538768739125a0768"],["/tags/ScreenFade/index.html","6a92c6b1178797117e2aaa2395984606"],["/tags/Shoka/index.html","9f2cd428688ac86f0db1b06db5e7b455"],["/tags/SingletonPattern/index.html","623928a6100e2022e396c81fcc3d6b61"],["/tags/SkillFramework/index.html","32f775abc96b1b7a87b59ca1e3f80a2c"],["/tags/StrategyPattern/index.html","9aa565dc357b0c9f3662a0deb8c4ff39"],["/tags/TemplatePattern/index.html","c7ce0aca337f14cd6a2f47efa609baeb"],["/tags/ThreadCrossHelper/index.html","4cac94b229befbe7c37be13f7eb88980"],["/tags/TransformHelper/index.html","fee6d25568dc78471ed09103a61d8cde"],["/tags/UIFramework/index.html","1f258f15714a3cd6485efd6304279a4c"],["/tags/Unity2DGames/index.html","a29627948beb875c25c2773047e99ce2"],["/tags/index.html","46434c92c85d09c6c9c264c98eca55f3"],["/tags/meta/index.html","928d0f5973c47df954249f9b9dcf5729"]];
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
