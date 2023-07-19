/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","1f06259367fe710c26492537c0fc5544"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","b9c6fa07c18b632ab2ee89d4b85b59d2"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","957b93591439a26bbce18da833c30067"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","46f5c13d549028efd121786a03b9f7a2"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","d84a75f483679c0b56e1bfef7f8f3cfc"],["/2023/03/24/DesignPatterns/单例模式/index.html","da0e2dcff2d601daa81e4262dafbc7ca"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","af86cb92af45b847a4915bafac4e1e45"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","cfa4d3ad763268662c16c1f733f4e300"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","e31c598a743250e58591bb606851b5af"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","7efc3c5e07397740894c5a08ac733676"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","d6f53075b3e453c65083bbf41b517155"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","2da17f1bf5c8bcab8c57854ed7a68c31"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","f6919d5675c2795b3a2c62474123b136"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","311edcda7365bfb75529f8594041da7b"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","8d186d7295fbb48e7e1c2e8f4c6e0343"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","c3ff5bb6e3ba4e713165a84fc42b2fed"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","aee9a19bd911fbeaad0f4723ac861d3a"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","f7b0419c6675785a9d16f8845a5540fb"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","f5ac8f21140b059281c9a1a82b4adb5c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","2411936d2ee34b4a17b580c26f757758"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","b441285a086d2e4b05c65fbd7646d06b"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","33cb796443c56d8414f33536ec12e44c"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","8fb3916a6921bf0652e2fc4b5a2a2d89"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","f802c12b640fa890e00edce9e56a4ce4"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","7029c4fbcc2c5fe917a360ce273c9f37"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","83db9a57477d6ebfc3e9b8dbdc21bcfd"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","9dc69ca2170a6d3d1ba250e4e2bc5bb5"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","3644a59ead2cfdf54c84cd7b88957f9c"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","099ee37ad2a3131e54a1ffc20a6c8864"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","91f10f1b8da9507d21bea6737cbb81e5"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","1dfc48e994895454d25160e782d705b3"],["/2023/07/17/DesignPatterns/工厂模式/index.html","4d2f072d28ec3b98d1732e2c51fd9b8f"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","38e5f7792323e5fd641af4499504b61d"],["/2023/07/18/DesignPatterns/代理模式/index.html","44b75cc6ff5bee50a39f4ef9f11e5853"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","947e1c3bcdea729b164a8d9d2a20d920"],["/2023/07/18/DesignPatterns/策略模式/index.html","75365d2feceb24b96a557a80a318851c"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","99855b792297f32ed0743759091fc7dd"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","2758f34e2cd7d5f528ae1f083a93a4f9"],["/404.html","a0b75d7c6f9936db12dcbf14ef3deb9d"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","b22d642827548df437b31a5222730ac2"],["/archives/2022/12/index.html","21d7f57aab712d0f0dfc4ed9a850f9d9"],["/archives/2022/index.html","3a1790d7d9156f8095872a035390680f"],["/archives/2023/01/index.html","ca510a131653d926ff965b3e4e21238c"],["/archives/2023/03/index.html","bcb00276cacfa221b7a1846d9367decc"],["/archives/2023/03/page/2/index.html","527b52198eaba2f4992f4f5d3279adc7"],["/archives/2023/04/index.html","6b47bebf46fd7e8097c261dc8c5a68c4"],["/archives/2023/05/index.html","ae41732d4163c2b1fe67b3bc25d1a5e7"],["/archives/2023/06/index.html","be1090b1c5d905cc9c0c82cc81cdcbf1"],["/archives/2023/07/index.html","19666005fa7ad39a95aab5bea9816812"],["/archives/2023/index.html","92f5928cc0082e38f0412ac3a8ab4c37"],["/archives/2023/page/2/index.html","0b76370f0960fd587dff2e9a47c7a6e2"],["/archives/2023/page/3/index.html","0b44a447faa2f08d8f328a596ed09a5d"],["/archives/2023/page/4/index.html","6328fc24b20855bbed49709c3f970698"],["/archives/index.html","9fea93744dda1d3239222471a2426402"],["/categories/CSharp/CSharpBasics/index.html","ea8c61882b6d3759c134af0cb1db64fe"],["/categories/CSharp/CSharpToolClass/index.html","07bc45d42b3a01ee0be39150a7d77737"],["/categories/CSharp/index.html","c7bd1095f82461c0b43f247c067a79ae"],["/categories/DesignPatterns/index.html","120867c9f33763a1d43dcbe2fc132a46"],["/categories/Shoka/index.html","3ea99586adc188613f38530a68c23916"],["/categories/Unity/UnityBasics/index.html","d4c0df6e95b0095319042af17ee7e109"],["/categories/Unity/UnityFramework/index.html","bb6bfec3a3645ec933c5c60a1c10c2aa"],["/categories/Unity/UnityGames/Unity2DGames/index.html","3a406c54032d6997261fa2acfd26d497"],["/categories/Unity/UnityGames/index.html","f93db00a1470e1b253a876b2a1a562b2"],["/categories/Unity/UnityToolClass/index.html","61ae95d3ec3e866165519a7013652689"],["/categories/Unity/index.html","217bd164f0b1ff148ea0d3b730ed5837"],["/categories/Unity/page/2/index.html","c16c810f6e45e571aca497e45adda1a9"],["/categories/index.html","10f857ec5b241aae318ffc0001437181"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","39ae85bb0312deb3ee07dafa902eb93a"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","89b4071aaac0e53a56469c126b501a0f"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","2671ea693cbda58ff4ea4d2d9710550f"],["/page/3/index.html","3c5ce44f134b64b97d16245ef7caf26a"],["/page/4/index.html","7b74322112d7114b6c94e0565725e787"],["/sw-register.js","9a30b301f0486f4b4e6d8ab480a44e53"],["/tags/AnimationEventBehaviour/index.html","6a32c59130727d3a7ba5bd6c2f09b1db"],["/tags/ArrayHelper/index.html","4988c3cf0ad652492d7e6e1ce4f60d57"],["/tags/Attribute-CSharp/index.html","778ad1d360698ecdf2f75eab56e1142b"],["/tags/CharacterFramework/index.html","f7f607fa47531ae21418216fddd727ed"],["/tags/ChatDemo/index.html","ef9f901709466d37631cb9317dc705c0"],["/tags/ConfigReader/index.html","0284c7f0a42901f2047fcd6aa35a8a04"],["/tags/Coroutine-Unity/index.html","213b54ea3b3b6ff2b5b26ef4aec79143"],["/tags/DecoratorPattern/index.html","a6a70291a86edc33bdd209d76f3bc810"],["/tags/Delegate-CSharp/index.html","69d43477b05699fe88f58adf5648db8f"],["/tags/DesignPattern/index.html","08f2ce4c2d9698d53bcb603b3e8e0ef9"],["/tags/Enumerator-CSharp/index.html","9094ef796013366703214d90e7aabfe5"],["/tags/Event-CSharp/index.html","26c92d1090ae47e5698503b6ad88abc1"],["/tags/Exception-CSharp/index.html","ada35b3ed43b178d3ebb1517f30d1582"],["/tags/Exception-Unity/index.html","0b0f8c43565164913cfc68f6cc66867f"],["/tags/FactoryMethodPattern/index.html","0dc7377aa3e9f3792722cffe7b2ac69d"],["/tags/FactoryPattern/index.html","446f37e61e16aa9ceff03febeb50cf17"],["/tags/FiniteStateMachine/index.html","841b8c5cfb00fd8645daebf03b657b65"],["/tags/GenerateResourceConfig/index.html","e8a0290d36f421d691d208711f59a0a6"],["/tags/JSON/index.html","ce713320726993726969cd34c79f49f4"],["/tags/ObjectPool/index.html","2d2f1e0c736e659238ed5cd6b0f04341"],["/tags/ProxyPattern/index.html","637ae141f0ced07d5e5cc29636f9ab07"],["/tags/Reflection-CSharp/index.html","98043cc6333b7891596ff524b40d6168"],["/tags/ResourceManger/index.html","ad304f7e661ca1b393c4f4eff5914733"],["/tags/ScreenFade/index.html","e36c9c6711cc5d8c73f0cbb876b3b438"],["/tags/Shoka/index.html","660909a92282a99892311d3a492b0dd0"],["/tags/SingletonPattern/index.html","7f3028dfceb47dc1e163c15c0a5e3c76"],["/tags/SkillFramework/index.html","f35dedbb4e7f4c75a9ea0866ee231259"],["/tags/StrategyPattern/index.html","ff99a2a6209112b9a02d459799737fe2"],["/tags/ThreadCrossHelper/index.html","ebfa772c13151cfbc843ee3ab354bace"],["/tags/TransformHelper/index.html","af72c2e8d51d955945326c985d648f77"],["/tags/UIFramework/index.html","dbed9d28db74b597a425c1939e8bb606"],["/tags/Unity2DGames/index.html","7a4c2cae5f56923b6b929a1962b5a756"],["/tags/index.html","e0c0998b4088639445b5a9ba4ccc606e"]];
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
