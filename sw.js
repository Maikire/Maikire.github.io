/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","51aa876013fda3e37c5d5e6218b7a96d"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","6c406dd3c1c7fc279a2e6e2fc54c9c93"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","c6b6f34abc9e91097bced8f8adef89d1"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","cc24243d7513d13fe638b41479a2a2bf"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","a5b7d9d6a3c058b9a6f56b7437e5f1f4"],["/2023/03/24/DesignPatterns/单例模式/index.html","12bd4d6b32ddf9d186790e6fc54b5a27"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","502c5cc5faa4ade32e35a06f2113eccb"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","764d5d7333163d11945024852b2c2f1b"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","5b5f84662c1bab1d4e5024d78b3edfc9"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","3038ad739c5f9471bd5f9655d6f68c37"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","afba6108283b6f1666436f259079028f"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ae1054ab54d7928dbca78e8e32545c2d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","9698a01913cb41489a5ff5b824efd528"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","2627bb200d19b9750a555095aa43873c"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","196ac8850c89003fe98affc240bfdd11"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","a47577318cbbdca7f4d57bcb73daf5cc"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","78a3617517353832da1e57c2206a9b53"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","4e133a74a45d33c9f502bcda0987e375"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","ca77c2e6274894a08874766ceceb497d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","1d391667b00a3972356e121a4cca40bc"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","fe318005f3f0aeb4481f0a52b8c51ce6"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","0b2d47259b21a37bbaf320bbb6c79d17"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","d77980567cd05174b7a3fcb217bb3d82"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","f578ca9a7e82788f2cc7233db125d73c"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","d1108a37d54feaf2b6c51d29ef431921"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","8f3b36f2f8a139695b401eaf47a7210d"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","e20079d260e06cf77a7e23c39521c75a"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","8bd84b9486858ba3353a76b1bcdbddba"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","7aa42ec06f3bd62f90aaf6c8aee75970"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","c42a0f3115f9a9c7ccfd829b370febfc"],["/2023/07/17/DesignPatterns/工厂模式/index.html","701167c8580761722857c01b795004e8"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","cf3f85f365e38816558f24c23a760535"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","eef9c0c921252809828f4eef059fe681"],["/2023/07/18/DesignPatterns/策略模式/index.html","9c6f9326def9aa33da835f01aab19efb"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","d889fd4f2ffa878069615e7457cd29a4"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","c5fab907eef2344798826314a0ae7dbe"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","03f817979905de10bedfe4a8d3b6dff9"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","5048de2f96f948e8859414e2da9f8e3f"],["/2023/07/20/DesignPatterns/原型模式/index.html","0b5866fe2c20cd5d82135285b74d39d4"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","87d56445c2590cd0dbb0325641ae26ae"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","469fde2240a7e1a2d7d3fbfac9c241f0"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","0dcd4e68e7dd6600de69414d46ba86c3"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","bab3a501b758435ed4b39533e7aef55c"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","4d346d2c4778c7ed13fd88886b8e9eb9"],["/2023/07/22/DesignPatterns/建造者模式/index.html","d39beff75e8a25f748411acfd0c80c92"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","1b3c3d9296011b072376b5bcd64ea4a7"],["/2023/07/23/DesignPatterns/观察者模式/index.html","cd5e4507cd60f3eb11695871c216cd16"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","cb15b3c41dcbf9e09c094a6c32618c92"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","9db0d914dd7513003847f9ef5afdcd94"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","5b597e99af0ba620c3866447c3526687"],["/2023/07/25/DesignPatterns/状态模式/index.html","1e6a0a3d2ed4a1764e0e320451f98e84"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","2277735dbe2d47638aafce371cfbc37c"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","ace89e1a7ad0ea633dd3c38de083b148"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","041af6e0bc2958e4a15754872311ecff"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","56e58fd6ebb8f2d32b43412020bcff2b"],["/2023/07/28/DesignPatterns/组合模式/index.html","337d0ba446cd6b920e9fe693d7bc7c55"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","74754932c89f1befaf4b7a3103fff80e"],["/2023/07/29/DesignPatterns/命令模式/index.html","bb1811634d965321a68d7db8eedfee04"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","2949fd1fb89666b02104ddd262944946"],["/2023/07/29/DesignPatterns/桥接模式/index.html","8ea8b834b9d73a140f7291442d8c744c"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","df99754911b27714be31a32ed4e14377"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","304d7b4b970b49d0a216453f95623e6c"],["/404.html","ef6e4d5178d8f6ee109a0f5455082c36"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","b3faa0a3baaf41078d17fb18893bb97a"],["/archives/2022/12/index.html","34b2bea31647f1536593416c0e8c28ff"],["/archives/2022/index.html","5d4cee3467edc0c7056ad9376a941b97"],["/archives/2023/01/index.html","0db450f8d012c771dccce4467ba1bfc6"],["/archives/2023/03/index.html","8d234013d7a900a22be04f7504dcbee8"],["/archives/2023/03/page/2/index.html","52c1eb0d46c475a89cb7f7f03b1745a1"],["/archives/2023/04/index.html","77da744f71d9d0516d9f81c2a35f7dba"],["/archives/2023/05/index.html","51f70c3b5cfbb274f7eebe6227e62472"],["/archives/2023/06/index.html","38c6f07814ddea9cc7850c606bf7a295"],["/archives/2023/07/index.html","e8467c5065d68c01c22e516f5f5c979a"],["/archives/2023/07/page/2/index.html","017337baca979957372758be2ab72133"],["/archives/2023/index.html","a96fef3c7edb7a25a7a79e39fb6af954"],["/archives/2023/page/2/index.html","b50c4b6b2b09b84a5832a484ef1860ec"],["/archives/2023/page/3/index.html","d54d2ab191a8e2d7e070c4c2c576d01a"],["/archives/2023/page/4/index.html","630393b9f1b7d3cd9c78920b188c54f5"],["/archives/2023/page/5/index.html","aada5a703330d66b6712ad6f7ebe6731"],["/archives/index.html","86b9cb6aa054d6a4e161aef0554b1fc5"],["/categories/CSharp/CSharpBasics/index.html","c6a8251f27eb2f91bf5b9d8ee20232e2"],["/categories/CSharp/CSharpToolClass/index.html","ee03eb76f62668e4d10a6a7cd663ae36"],["/categories/CSharp/index.html","d55b617876f1211bf5a4349e4c3eecc9"],["/categories/DesignPatterns/index.html","ad1a5e6b1a5d68a0e99fff9d52e79139"],["/categories/DesignPatterns/page/2/index.html","63ab429ca46b731b84a18e4412c8110d"],["/categories/Shoka/index.html","ad2bcc6ac68df32a8b49c267d4958016"],["/categories/Unity/UnityBasics/index.html","ee1997506dddc09e6ef9ea7d3598c1ef"],["/categories/Unity/UnityFramework/index.html","ddad9d3e239f8d1b698a3ef30739079a"],["/categories/Unity/UnityGames/Unity2DGames/index.html","7c4297bf715a7fd3817ec0e02f7ec081"],["/categories/Unity/UnityGames/index.html","fbf7580e787d55515fa848f279ca0479"],["/categories/Unity/UnityToolClass/index.html","7babf096f58a6820afab9a7b4e5c8552"],["/categories/Unity/index.html","d983d820f3764fb17419a03906624123"],["/categories/Unity/page/2/index.html","5718bb1a0457a0e22fc334a75a2599fe"],["/categories/index.html","c21f20e265f747e1f213f52599dab8b1"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","2fcb5fe1661049f75f143846b5558feb"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","adaddff8acb38bf6675c2d90f1b78d72"],["/js/app.js","d69628b1071cfab075d94c5670bb1661"],["/page/2/index.html","b796118cd7ddd4f39e183faf87a094cb"],["/page/3/index.html","023898b48189d58990fbb0411f9ab707"],["/page/4/index.html","a07b02b2b9513935136c8213698f970a"],["/page/5/index.html","54c72a03cab15fe160ca9e503fab87e3"],["/sw-register.js","d6b88812393ab9c13efed298019ae91b"],["/tags/2DGames/index.html","c5800494cff8a029af1c94ff09961769"],["/tags/CSharp/index.html","343f14833d66b816cf3f1703968f85d5"],["/tags/DesignPatterns/index.html","bb9ba13b504d921d07ecf4ed124b2fd4"],["/tags/DesignPatterns/page/2/index.html","09226a61b65c8a0e1c93b48aa9c72994"],["/tags/Hexo/index.html","d5ffb6fbe67e3cfc834202dd42aa2a6a"],["/tags/JSON/index.html","2709b61413b7305fa2581cd269f0a5a3"],["/tags/Unity/index.html","5318ead806eed122648fc4b427323c79"],["/tags/Unity/page/2/index.html","633aed1c3a21febed0a4bc022ac977d1"],["/tags/UnityUI/index.html","97cf7499c121da46dd707132813bb012"],["/tags/index.html","f91bd45c1d01546e81570e0bcca1b760"]];
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
