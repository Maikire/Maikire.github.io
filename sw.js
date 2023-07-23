/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","cf09a14d5660fb002a574a7fc7d97d91"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","48a404d0fc6ea35ca952ba85954ec202"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","313a927cf35db9f495f6dc21c9c989f9"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","0bf03d720e46d6b0006e83a06275696d"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","c5e798e0cee6ba94aa182c5e02146452"],["/2023/03/24/DesignPatterns/单例模式/index.html","7d3fb161915de5df2013a0b66c918da3"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","117554149d304feac1b872a1a7443dad"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","a24fef12208ac9385dd7771ba1d279b6"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","5e2d1a62b5d147222224bbaea233d337"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","1758f4734eb36003c1ec69f07170d59e"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","3542548b215d9b32c8da71087931d8d5"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","f6d78a108b86ecda0e11f9c510b23e6d"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","60f4aee3a9efa26283700f8e5a506cdb"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","b4ac4720d2ab6dc4803df4406daf32c5"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","4e0e95304b38e1ea340aff1d85fa91ae"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","7f09c264a3ab0537292f3d6446a9a454"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","f61a5f70d9f006c8c129739e8cd1eaba"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","0990aeb8dd45bce3a1bbc0d7f916df1b"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","9257a224cd3b977f7573aaa37094caec"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","ca78a0ff959968e14e6a223e4144febc"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","f71a5d4d9299df097509b1ffd3d9583b"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","22a82419146acb6cd6893a47df2cabf4"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","261c74978a1c51fcc3ab668766b30380"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","6b78a2fe7786f94963e8de7874af07c7"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","36e83b674fb990629d1f25519d9da878"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","49cf105d9847b463503836fecfdcc62a"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","0852d14a96119eb9e4a7bbfcc8494c74"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","7b2ec7d12a063910aacc01f4c59f7854"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","099ee37ad2a3131e54a1ffc20a6c8864"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","38fe3ed38873eabea671e7fcba8eb4b8"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","1dfc48e994895454d25160e782d705b3"],["/2023/07/17/DesignPatterns/工厂模式/index.html","d94c5b1b7ea6991c3b3b7fd406b2a51a"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","38e5f7792323e5fd641af4499504b61d"],["/2023/07/18/DesignPatterns/代理模式/index.html","fc5908edb26d21ba69bebe3995cac7a7"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","947e1c3bcdea729b164a8d9d2a20d920"],["/2023/07/18/DesignPatterns/策略模式/index.html","7b11c8215dbbfc7f7f98975a40928636"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","99855b792297f32ed0743759091fc7dd"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","22445ef02809143ab687545e97414fbd"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","65598790fb30d09f3d41fd92f8a9637d"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","32818838fdee48faea768d60467a5c50"],["/2023/07/20/DesignPatterns/原型模式/index.html","6b00e92d0943df44f01d1f228fdf2f63"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","a2ab2a3cea87b9027b1ca1421ec63b09"],["/2023/07/21/DesignPatterns/外观模式/index.html","3adb22e7e25360b3e3ae0cd6def7e5d5"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","ebdc5588d44d53357887391c755bc307"],["/2023/07/21/DesignPatterns/模板模式/index.html","ebe84e0ad530b63d64769d7e60e1778e"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","740987c5b4376461e6f985752f520092"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","20fe6e0d0d9df8d7cac194daba6015a9"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","1b99b13cb9ae959093973aac956b639e"],["/2023/07/22/DesignPatterns/建造者模式/index.html","0e8ec5abc735c7b3ad0aa2cd6aad7d1b"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","af448a5d7e17ca19ef07c7542dbfff03"],["/2023/07/23/DesignPatterns/观察者模式/index.html","852a2b7e6101e8b5cc3af71a2a7b2758"],["/404.html","e3ac924fa1a7b50d5a045196e6b92a20"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","a0ee0cdb5bc2a8bcb5d9434ef73870e2"],["/archives/2022/12/index.html","8c4b11784b0f1939424b2bd382d96389"],["/archives/2022/index.html","9ec9e03454fb7223d7ac3878e9afdd13"],["/archives/2023/01/index.html","14e2f40fa067ca99d7c31dfd509e216a"],["/archives/2023/03/index.html","7aae57d4742245d5427c2e4872ebb707"],["/archives/2023/03/page/2/index.html","a1f78b49d87890b7b006171c6bcda522"],["/archives/2023/04/index.html","907f1f91ac0a886df20de5185f2a1a65"],["/archives/2023/05/index.html","ab301792ef5356003465ecb681dfbb28"],["/archives/2023/06/index.html","dfd8cfd021ae14e36061d605b7750720"],["/archives/2023/07/index.html","979963885736517cec0ae2b5ae0b8450"],["/archives/2023/07/page/2/index.html","82b49d08cb290502f6c0643a68c2bed5"],["/archives/2023/index.html","e70a688c73e164a92bdc3af0220e7a5f"],["/archives/2023/page/2/index.html","376a6e7c1360ebd5d97b4cb569ffacce"],["/archives/2023/page/3/index.html","ded72941c060bd493ac8286b6fa142bb"],["/archives/2023/page/4/index.html","87f14f004ef369f99bb40748d40e99d4"],["/archives/index.html","6fb6f91e2364db8975cc1608da5623fe"],["/categories/CSharp/CSharpBasics/index.html","915b56899ec5ba21176276d06b1687de"],["/categories/CSharp/CSharpToolClass/index.html","42dde4a7a3316ca7b04a06fcf012ebab"],["/categories/CSharp/index.html","660148c19e51cdd0e834d8f47256aad2"],["/categories/DesignPatterns/index.html","e48ee8ba1fc55dd853070e6e2300d039"],["/categories/DesignPatterns/page/2/index.html","1637ce1fa3c0443579fa4a3a2a81e9c4"],["/categories/Shoka/index.html","53cc224e291e8506ebea54a44f41d5b4"],["/categories/Unity/UnityBasics/index.html","d97d026c2f835cc84d974eaee7488438"],["/categories/Unity/UnityFramework/index.html","6f6c0f759e68938de6ac0ab86de46543"],["/categories/Unity/UnityGames/Unity2DGames/index.html","99fdeb8d01cd3c61959a6e0065da99f2"],["/categories/Unity/UnityGames/index.html","178e3aafcc5d9d19d3ec3a8e8e379a6d"],["/categories/Unity/UnityToolClass/index.html","c2c0aaf190e95c5b6ded155d2c1d305a"],["/categories/Unity/index.html","a0c5df800c67e0e259b748b2dca9ab11"],["/categories/Unity/page/2/index.html","9700cbf7e19e49e6aac23fc7a14b1c58"],["/categories/index.html","a9fdf0c78236a985537cb6b273cc8284"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","4720b8d68c9283eb67141c2b8b3fd1ae"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","1ad1df40faa1cfc099ce43caad85b641"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","dc2783010d720e24633e8d715596c9dc"],["/page/3/index.html","42bb14aab63520fa83862a5b9cd73dcd"],["/page/4/index.html","c2847d6b17f12d74c8701e2de9db33ae"],["/sw-register.js","62f10c9cd89835d039eef49f09d486a4"],["/tags/AnimationEventBehaviour/index.html","1c020def218420c7a172ecd4a717cc5e"],["/tags/ArrayHelper/index.html","84d662cfb147a375c14e60d477c1a330"],["/tags/Attribute-CSharp/index.html","a4144fd5773a5d63ae7f29104d41005c"],["/tags/BuilderPattern/index.html","f532c02f0e8a1b9d6a0eeee3bb6298d0"],["/tags/CharacterFramework/index.html","c65ba2aaa1ac598f624441513df9d955"],["/tags/ChatDemo/index.html","f8014c8221fde6175c2ea372ba20251e"],["/tags/ConfigReader/index.html","838196b821ddad002bc562b085d3ebef"],["/tags/Coroutine-Unity/index.html","a290dbec10be0730e2543f91490a706d"],["/tags/DecoratorPattern/index.html","535869a0c730c93962f4795093e1805b"],["/tags/Delegate-CSharp/index.html","dbdf661037fff668834cf9751ee1a04a"],["/tags/DesignPattern/index.html","a45eac75685ab247f3434d7038b3ff1c"],["/tags/Enumerator-CSharp/index.html","ade82ae331738e2482caa630650f2540"],["/tags/Event-CSharp/index.html","cbb8a858fc21b189e8772fa4bdc543bb"],["/tags/Exception-CSharp/index.html","04a33f88d97bd5ec933f5e2c7e3fa9c5"],["/tags/Exception-Unity/index.html","fa1729b5f4d77864055cb10985c2a78f"],["/tags/FacadePattern/index.html","c2a898c0708586c3ba4c358ff946a5e6"],["/tags/FactoryMethodPattern/index.html","aa5df3e5ccf58152e41f3f411ca4d34c"],["/tags/FactoryPattern/index.html","eca47b6974806f1160d0a5c791921eb4"],["/tags/FiniteStateMachine/index.html","74254d5e608be09a07ee55445cce69f6"],["/tags/GenerateResourceConfig/index.html","93810c2281e6ee3bc4b2832e9e67acd3"],["/tags/JSON/index.html","93e0ca682af36887c0dc188b40474792"],["/tags/ObjectPool/index.html","554b665e23b5b04683826d06bdac252b"],["/tags/ObserverPattern/index.html","ac589b790a3e2433bf684a4beb933c60"],["/tags/PerformanceOptimization/index.html","5b8ca502075d8f287dd74e70fb052f7c"],["/tags/PrototypePattern/index.html","120f5077b47965556c34f092b3c120fe"],["/tags/ProxyPattern/index.html","cc5daa9716783992e8fd6ee933aab9be"],["/tags/Reflection-CSharp/index.html","473dc326539d6852cb224655392df401"],["/tags/ResourceManger/index.html","2c676c7e9d24d715f7e8bc420350d4a2"],["/tags/ScreenFade/index.html","8ac9eba7f88cec9f229f35675cf423bf"],["/tags/Shoka/index.html","741c80ecd1c98f642c777d868b9d1889"],["/tags/SingletonPattern/index.html","3ad482dba7070c477b91c31d6934f4b1"],["/tags/SkillFramework/index.html","a5b4c051d6b772cf6e447bdf326e1ee0"],["/tags/StrategyPattern/index.html","8ee3060cfaa90b4321314a2c5fce6d24"],["/tags/TemplatePattern/index.html","987943b8d61064521dac1aea60396a98"],["/tags/ThreadCrossHelper/index.html","b60caff2963124a05d95fb33a8ffe0d7"],["/tags/TransformHelper/index.html","bac2d20a3f95d44170573b01b64c934a"],["/tags/UIFramework/index.html","96164eb13a442da28567ab1957192f59"],["/tags/Unity2DGames/index.html","75256f4eb68b12c838b45b776e63199c"],["/tags/index.html","1de2f48d84573c2f5ffced81a0e2487f"],["/tags/meta/index.html","6993b4e2d87eb41062b35250312d31b7"]];
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
