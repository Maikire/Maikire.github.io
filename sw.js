/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/07/Shoka/hash of email/index.html","ae0bdd7fa97fd083ae4c7c3774293b9e"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","de378a3be869b20773f26747f4ab1436"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","092a3b30f97a0f04b8ba19312613d7b3"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","93b4ca81b4e57018f66eca41bf2b311c"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析(C Sharp)/index.html","5c55356e0cf3c9894e10cfac22b04b1f"],["/2023/03/24/DesignPatterns/单例模式/index.html","2f9652192d7746020b20be697046fd2f"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","dff25f2cebcacef50bac98d1c01458d5"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","4591ec51f114cd954e8ec17652b5e1f9"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","730de0f08b83ba72e707311fdc03eb09"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","0c20904ea17de766a53f8b4ecb3b6338"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","b70f9559ce6748777e00116fbb0f0817"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","8e1e6bcb774b18f9ea6a87012ce998f2"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","2109fb09ec8f18eed2db0fedb120fe29"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","ecf15c966c15923f5f3480f4e2746155"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","504813bc577f748b8ce88dc1a85ddd81"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","a8e6d6bdc28ad0d0795fce0f5c3436da"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","2edb7e51240c77714c463e32faee6619"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","d5d0e3cb7cc6add2bb9b1ae2ac48c84d"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","32cc536a371a5458f64cc145870258bf"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","16c7da37ffc39709d163d9c751a6b33a"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillSystem.png","16bc31747d8bf39786593422f22b07e5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","6e39582227e3d2172e6192c95259604f"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","a2b20f06b39899248d539daac8a5fa27"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","ab1e7f7f130cddb11280c4cab893344c"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/FSM.png","08b5d324d154e701034eca1a760adec3"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","a490fad0b04422cdc7738484033dd4f4"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","50f7d28f71b402f38592e3a3d00401db"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","47b188edce926161b449ddb5e8005dbf"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","9b5994a7b1215cb36c72d5960da32125"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","72b4532b3e79ce0b8ec3a94d5b80c87e"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","e241c287ba742bf26803515d9be039eb"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","46e933bcc15615534193b7efbdd59dc7"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","2de2def88d57b7f869945a4c7937d8dd"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","099ee37ad2a3131e54a1ffc20a6c8864"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","6b22ea4988dd974afaebb1b0307a73e5"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","1dfc48e994895454d25160e782d705b3"],["/2023/07/17/DesignPatterns/工厂模式/index.html","0b17e119a3b395609a8e4817fcf5f66d"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","38e5f7792323e5fd641af4499504b61d"],["/2023/07/18/DesignPatterns/代理模式/index.html","93bc67ba6d132db4b3faf01729f2d117"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","947e1c3bcdea729b164a8d9d2a20d920"],["/2023/07/18/DesignPatterns/策略模式/index.html","4ff65330b1c1639b4c23f7d0a451634a"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","99855b792297f32ed0743759091fc7dd"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","3b7c9c545ab59e834fad9871c5bab6d9"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","65598790fb30d09f3d41fd92f8a9637d"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","32818838fdee48faea768d60467a5c50"],["/2023/07/20/DesignPatterns/原型模式/index.html","7e714c9e89925c41c1a3605db1961604"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","a2ab2a3cea87b9027b1ca1421ec63b09"],["/2023/07/21/DesignPatterns/外观模式/index.html","49e6c87a930120f55d6ab5f17d8dc396"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","ebdc5588d44d53357887391c755bc307"],["/2023/07/21/DesignPatterns/模板模式/index.html","98455baa3f4c6e10bc24d45ee3c422b4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","708dd80b333440763dc1c4f88dafc5d3"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","18a14f702c3f675231038c4d524632da"],["/404.html","9210c21839cf1cf2cec4bb7b22683492"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","605fa56d5ea62683cccca239ffd2ffe7"],["/about/index.html","8932859466506b970ec063fc969d5fd3"],["/archives/2022/12/index.html","9e61d3acfd7c4c64f773b5bea8917ede"],["/archives/2022/index.html","b602445da8ebb90899a60f4b49695f67"],["/archives/2023/01/index.html","3f5eb2778d07a55265cae63f0acb0751"],["/archives/2023/03/index.html","9e52446759291c205aef8eab6f6bff72"],["/archives/2023/03/page/2/index.html","604db5d5288148e8ed3e7039239c48e2"],["/archives/2023/04/index.html","29722ddf9c01c10498da3f85881e5f54"],["/archives/2023/05/index.html","edc5ade4596b6387e5613f78637e0f7b"],["/archives/2023/06/index.html","cc322ef4708771357f32135594404398"],["/archives/2023/07/index.html","b7565b2069f704be4a3ed996b2e51aeb"],["/archives/2023/index.html","2aa37ce69da9bbdafbb910e5ac4b4589"],["/archives/2023/page/2/index.html","9d01cbfa60a1c06b847d93b5a099a939"],["/archives/2023/page/3/index.html","a3b80bd97d90c5df863054e8516cbfb8"],["/archives/2023/page/4/index.html","0990d98e2a08405d398af9a31d11e2d3"],["/archives/index.html","11d9198737f5d85e0232d3349073c944"],["/categories/CSharp/CSharpBasics/index.html","4f02ae706085651b6bb452fed9e939f6"],["/categories/CSharp/CSharpToolClass/index.html","f9ad922ad317b1955ffe79a6a49e6dd9"],["/categories/CSharp/index.html","58c0d3e1584f9f5fde77efb72f6772a8"],["/categories/DesignPatterns/index.html","7a41664052687b371d648d4815fcf08f"],["/categories/Shoka/index.html","94856d8ab9f56fe1cc7b19db9c0bf172"],["/categories/Unity/UnityBasics/index.html","8f8c7a60876b52b458d21a90a89446ff"],["/categories/Unity/UnityFramework/index.html","07196393813494128eeefca675c51c52"],["/categories/Unity/UnityGames/Unity2DGames/index.html","690d86c3610cf17e3e1fd65a2aad9f34"],["/categories/Unity/UnityGames/index.html","601af28ac3fe066303a001f37592f138"],["/categories/Unity/UnityToolClass/index.html","dc453a68aab0b68aba4654b9710877da"],["/categories/Unity/index.html","b48a4d0fd80b774c587ed74048e58a7d"],["/categories/Unity/page/2/index.html","7a6c7392156c9055a542a84bdcee6c7a"],["/categories/index.html","2e733c885190288bc6a517713518354e"],["/css/app.css","e29dab0c222e7cb62b931b5c6be1c1e1"],["/css/comment.css","ad7a38d35482b1ad6e2f6b607a3544cd"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/games/index.html","4a1956bc94bcea855cbfab190cad6476"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","df9ce905d2c1bd8511ebee531baae0ab"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","ad941c61e2db1d2cf7c96fd622dae50e"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","33d5059cbc10c7f30cf7472a3f3fa2ea"],["/index.html","2c2a512aab4dda2923b64afb62648a58"],["/js/app.js","47675128ec619079da04541ac58ec202"],["/page/2/index.html","2de96578d1742876711657ad405171d1"],["/page/3/index.html","d9ca044afe61bd817670f7068565b138"],["/page/4/index.html","d7bce94daa32cab9ab506dae1427e024"],["/sw-register.js","e8d78cb3dae459d769aa326605f690df"],["/tags/AnimationEventBehaviour/index.html","e45065c27b6cccb4dad123e5c89295ca"],["/tags/ArrayHelper/index.html","974155bc2887bfcb1ce65af76a3a9189"],["/tags/Attribute-CSharp/index.html","3788df6ef252cb145a83d72e07c9813b"],["/tags/CharacterFramework/index.html","1f0929a6da802f0cc6a0946feedfb373"],["/tags/ChatDemo/index.html","590995d85d5941b37bf0716746d6cb1b"],["/tags/ConfigReader/index.html","d4464624559a3d49f427369c7a934a9f"],["/tags/Coroutine-Unity/index.html","da39d22b679d167434d01f3a5f944634"],["/tags/DecoratorPattern/index.html","66897bb2bac77f51c8bf6b411d93249e"],["/tags/Delegate-CSharp/index.html","2a40a272b422ab45d57e5740f933feb1"],["/tags/DesignPattern/index.html","8e34aa6161ef8dad2ed7b1e0dcd69dee"],["/tags/Enumerator-CSharp/index.html","24e23d82ed308729a4b1d7c2daa7d152"],["/tags/Event-CSharp/index.html","4a7818a0be2af0388e2e58504c2b8d4d"],["/tags/Exception-CSharp/index.html","dd97f9fb21a11bd4c8991b7aa76dc38c"],["/tags/Exception-Unity/index.html","e130d305b41fc37db73ca997a070084a"],["/tags/FacadePattern/index.html","b25e8af6ec5b741297b7342c8e88677b"],["/tags/FactoryMethodPattern/index.html","104f99f7c7a072be0c55d740bb66befe"],["/tags/FactoryPattern/index.html","1a3ac7745a68dcea3c591332e4f625d6"],["/tags/FiniteStateMachine/index.html","f6e768108563891bf0a53d47505ca13a"],["/tags/GenerateResourceConfig/index.html","1c71e1baeb40239e6e7e9c3f2a41b8a5"],["/tags/JSON/index.html","581728eb1f7d968f04233d8550e290f4"],["/tags/ObjectPool/index.html","2be84f467627e337e1ba0991d056285b"],["/tags/PerformanceOptimization/index.html","5f855d6462f7b51cccbe7e3250a30432"],["/tags/PrototypePattern/index.html","81678cc4480ab87b827d4f690668601a"],["/tags/ProxyPattern/index.html","ca99f1df4443b5906551af358843a1ff"],["/tags/Reflection-CSharp/index.html","8f1ec253b02c8315e878acad78676ac7"],["/tags/ResourceManger/index.html","6b76d35f87e1f0292a08693a88688ffa"],["/tags/ScreenFade/index.html","655f321a6abc7e4315f03db7a8a78d65"],["/tags/Shoka/index.html","5e50a0e03dfa6d4052f7a16569782fe6"],["/tags/SingletonPattern/index.html","34f74a469cac44f170dd99ed053e8b6d"],["/tags/SkillFramework/index.html","e71a8487adb0eeec710304eaa83d1ff3"],["/tags/StrategyPattern/index.html","fca3eea46a214b9a5ac915a370d74ec5"],["/tags/TemplatePattern/index.html","886a83bbf9c973798e247e0b0da93e55"],["/tags/ThreadCrossHelper/index.html","fefe4d0ea8d0ccdf29f0ba105a256d59"],["/tags/TransformHelper/index.html","36b77e66fbf761f5d312783ad19cc688"],["/tags/UIFramework/index.html","312d8c3c90f042bd7d1639fce4124520"],["/tags/Unity2DGames/index.html","5add59baf1c696d1c8cb647e6f81e006"],["/tags/index.html","089c10d89908fec026e47674a27af5ca"],["/tags/meta/index.html","85617fa610cdc02022c7f8242d08d9a6"]];
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
