/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","ac3d3564b552e229916fd2c81ba8cbfb"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","5256880cb96d694078e6dc0347eb26d3"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","abca630e6b3b8de089668b026932a172"],["/2023/03/20/DesignPatterns/设计模式/index.html","462be2f8ec8829ca10cdaef107625073"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","f6d65a14a2b68dcb2b6c5b0ef603199e"],["/2023/03/24/DesignPatterns/单例模式/index.html","9ce1436b07fd2f17f81ebfe302f39f60"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","4b25545fb3b71694e95c0dd10909fbfb"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","7767b064f8b15f8f5e08ec52373e997b"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","e7abc92e9f118774af10cca72850e11c"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","b7b377b14e8fdee0221e4f7f0fd44d95"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","442537a77735e746509b7f2528cca8ff"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","fdcb0cc8c1bdf818bc2cdb456c820299"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","d39c9c2fc0f04c6d61dd6ac3ecc18139"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","5212970b64d30b1c79d8d63ab85a93b4"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","38320576357b8df4ecb546fae3db301c"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","4b636bd5c247638066c612cf73076770"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","dca3021ad70a86e74044c85f302dbe68"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","f14384aeaadc86092420bc35576a630f"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","a492fee2f089bbcd0fe1029d13e26425"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","a3a8dec79ad14c160cb1fb30bb951e88"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","1f0e6b8647cc25066d3e42f8fd88f5f3"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","876bf6144d0b44633aacab1f6ffdb5f9"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","647d2d81ed9f4e9cd1334619d997288c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","05803bff7e4fa45fcfc9821701223e04"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","5ddbfceb904ca6b7274f77d595ab1bed"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","2638b0a945787630832afb6a578e52ff"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","e82538a0b8b2be2565a3046dcf5df720"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","c82bc00c44afbbf5646243dd98fcdd16"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","8fe37e780e6c0edb5d3b707d14c75751"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","f3bd95d36bb3a582eb8ef0cb50d47ce9"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","d5c2e28d7835fc25213231b3af84eac7"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","bc5fe43a5ddb57e3c820ec0bce56753c"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","bc88575ea54abb4ce55aad7345763bb1"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","1c159ce5f8618173823d5edb8f092c0d"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","1409b4cfb349bb03a4449292da623120"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","f658d067054b4addfaeed19ce9895555"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","76239ce10f79b1ad522c0581d8148347"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","1d939790ae5c1dafca83994774d11a20"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","24c7f41fe33e1d4363f5052fed1bde68"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","18d1c093c15909f30a789cf231e3f008"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","3444ae3b261c636165fc6d1255bb04f0"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","c7b76ec875cc6841a880cdb3fe1d73df"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","081e1cb2071903746f17e8d173c6ef49"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","e09985c45604601296dfadc5bab07e8e"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","ca6627080d5692448e2cb281677a1859"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","26d851e7450e3301018b4df5835f4354"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","be57fa991b1502773a9136b3ae7e6608"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","269fafec1303508d0b9d716e5795c2d0"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","9aa7a6e27fb3bc196d4e06ba550e37b2"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","ae1d706fb153346056af256619004a4c"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","fb64b564a01d09317dba8d8c3b1cc1f9"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","696354be857c51c9f59d4076a5130b12"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","fe521775c29405fa4d9252261309c319"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","ac5c71a1a267146c85e7b89ad2119a1c"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","a27f1d3682aa89b209549d2e7f17bb79"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","3f29f28ac3af5b4090e74c599edda365"],["/2023/08/02/ConfigurationFile/JSON/index.html","2b3e0cf5942253335008e91969358de7"],["/2023/08/02/ConfigurationFile/YAML/index.html","0304cf6c536f51d037038345156eadb8"],["/2023/08/07/ConfigurationFile/XML/index.html","334afb9a215f21a4638562f37e74de73"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","1983641e18fcbab787e49d02ced85621"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","c26ae1d46b06c1f7c3da3ab184962f78"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","04a5cd0c4131869876e53a6a4cd8cde6"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","b7042075b393c96f3fa8b2e8be7221a9"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","dc6c80422e5ffb3d6d5bc5b2eba98df8"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","c5fce948d525bcafbf4183bdf39ca29b"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","92a7a4271b58928ac031e3526a0852a6"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","05eea72b131db3b275bf1499ee03a59e"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","c388ded5e6545ac3c8556c3ca95f9a0e"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","82508ddd7e9135094372af4b5b5ee6de"],["/2025/01/10/RegularExpression/正则表达式/index.html","fa429df0b6269e44580e21b7363473ff"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","afc9b83d83a450e2de8e6696e5d5b6bb"],["/2025/02/12/Lua/Lua + CSharp/index.html","0433d073b13ab56e9339f51bb9130cd1"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","857b975592f0f1b8a4ddd0380fae3c34"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","cc0b6cfb70720ccffb4d68406ae5866e"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","04cbf985e1d32b10fa4d0bdd3bd4f8cc"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","e5c8511a2288d31189b48813e7e2c39d"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","9ac7e207c047bc6f76bf244ab658dbaf"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","988d4aeb3815bfe043d86fde44d2b09a"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","5b1cf28467afc7b3ea12cd11f3af31b2"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","cc5e180c50e06816a901ad6fffd29d6b"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","7832ebae3efbba7188339fbcd183ff48"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","4a1821fe392ca8d6ebd6bbcf9944a98b"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/404.html","7ae3da1635d87e8f33acb28224d9bf13"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","c52bc13348c5f8d9aeba1676b186500f"],["/archives/2023/01/index.html","21698d203cbc2f1f56470de667ec27ff"],["/archives/2023/03/index.html","c30f86cdca4a62845b82a49b877cccff"],["/archives/2023/03/page/2/index.html","dfb83770156e0ddcd0e29eed13054453"],["/archives/2023/04/index.html","1b0616433c7a266cc892ca33f194348b"],["/archives/2023/05/index.html","f1b7e7a110b95707d0044d6aafb6f32e"],["/archives/2023/06/index.html","5951f714f3fd1ecf097e3f569f0cb94a"],["/archives/2023/07/index.html","b203112769c923391364f540210b085c"],["/archives/2023/07/page/2/index.html","92d61d08fc6354d9fc12b3fa5fb02ff6"],["/archives/2023/07/page/3/index.html","d0cbfafce0bce60dfc725a7aa6d136fd"],["/archives/2023/08/index.html","92153fba8730047a1e51a61035744b42"],["/archives/2023/12/index.html","33a57747bbabdf73674e632fab7b6e71"],["/archives/2023/index.html","0fd3053d700ea994b5b4a62c6de58945"],["/archives/2023/page/2/index.html","163b9d9859a26a1df2e00a48214072cf"],["/archives/2023/page/3/index.html","19e791902bbd607237f9cb7cad7efc55"],["/archives/2023/page/4/index.html","53f933456c801d7d54c52e26532282d1"],["/archives/2023/page/5/index.html","55be7ce13d1f0101334b6b7ae48c2df1"],["/archives/2023/page/6/index.html","5b3fc12329da1b7f389e5535e850dbdb"],["/archives/2023/page/7/index.html","be045f775337a3145e8f679905047fad"],["/archives/2024/01/index.html","8b00fcf073d75d5431b75f8735e8fb5a"],["/archives/2024/09/index.html","b7e96fbc670a0775de9a0a63683e8552"],["/archives/2024/10/index.html","8dc861b81842e2a38506124a411eb970"],["/archives/2024/index.html","d7e0565c86807782ba8b854079bfe72d"],["/archives/2025/01/index.html","3ed64419ce25cd6c802586fb40c9cad6"],["/archives/2025/02/index.html","987e2aed289c5642c18706c1c1ffc188"],["/archives/2025/08/index.html","da28a06c47c9f858061b5a9c8292657e"],["/archives/2025/11/index.html","d7323967d9ff3613f1364ba13342025e"],["/archives/2025/index.html","f28e60e8cacf5040e57f1ac008050353"],["/archives/2026/02/index.html","060f72e425113f093beaf71333414154"],["/archives/2026/03/index.html","62e0deec4f961a2431708b5e1116d8e5"],["/archives/2026/07/index.html","485f132f8f4338af0839a2917bdc6aaf"],["/archives/2026/08/index.html","cd230ad74a95553ab80751294f2c90b0"],["/archives/2026/index.html","bda5ed18b7f09618d22728d0d26e1a19"],["/archives/index.html","f8470ac765a6476056c9b40f7b7d2635"],["/categories/CPP/CPPBasics/index.html","d0bf0787324752444a272e169fcadc24"],["/categories/CPP/index.html","9ff8ca3dc073f81ef25158021173a1fb"],["/categories/CSharp/CSharpBasics/index.html","aa2952166cc1eb6fe462cf5a9cac9a28"],["/categories/CSharp/CSharpToolClass/index.html","e05275b3b5da45e08c1c137f4905ff29"],["/categories/CSharp/index.html","1fd2a9ddec1daf5b52c2621e93e18d79"],["/categories/CSharp/page/2/index.html","6e5d166623294f640da0cdb6571959dc"],["/categories/ComputerBasics/index.html","a1bfe4345e01adf688df4c3368963eb7"],["/categories/ComputerGraphics/Games/index.html","54327f7a4cbd2f580c67d9b71a32c3fb"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","5fd65484ac094ca3ed0e0344b5a871e0"],["/categories/ComputerGraphics/index.html","c3dd169911309e3e40e85279cb8ebee2"],["/categories/ConfigurationFile/index.html","49300f97133b3c21ffb0211db9aa7682"],["/categories/DesignPatterns/index.html","d704558352b446483c1cf6488e244d42"],["/categories/DesignPatterns/page/2/index.html","19a29e0bb6eed0f48c16e7adecc45be8"],["/categories/DesignPatterns/page/3/index.html","6bca775cfe8503dd2a3172042419a35b"],["/categories/Lua/index.html","1d1f637c637f05c71aadf071f30a7304"],["/categories/RegularExpression/index.html","a7c1d429b890cc797a1ff2d91ca6573b"],["/categories/Shoka/index.html","7b06bbfd035ec3d5207b502a487666c5"],["/categories/Unity/UnityBasics/index.html","ac08349cabdc60b830032024564dbc84"],["/categories/Unity/UnityFramework/index.html","fd91b890b1da35027fe1495722e84d85"],["/categories/Unity/UnityGames/Unity2DGames/index.html","9585da061a97c334b96aaa348ea52971"],["/categories/Unity/UnityGames/index.html","f6e570d92f25a3cd497db908971f40e1"],["/categories/Unity/UnityRender/UnityShader/index.html","5735de589c94aac423acc83819f2a05a"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","50ff12073379de6874fd4d42e9b79a30"],["/categories/Unity/UnityRender/index.html","38eaed68d3b79eab45609ae84b24dc48"],["/categories/Unity/UnityToolClass/index.html","9f5989440a87b0735951efa31a21dba8"],["/categories/Unity/UnityToolClass/page/2/index.html","f67c26171d2deda878fa387c89696cf9"],["/categories/Unity/index.html","dc17125fbbd46a483510c9a7b0c0d300"],["/categories/Unity/page/2/index.html","055a3749ad17a6d736626dc0d7ac4ebd"],["/categories/Unity/page/3/index.html","1dda9db138c39887d8a6eb9400c8a794"],["/categories/index.html","cfffeaa941b131a7bc22103bb81876b1"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","9abd66d466f7f5df1d1c0aec9247b7c8"],["/games/index.html","83a676af2d57bca9ea5a2a5be799db82"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","568ade1eccc71157e2f5659703668163"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","9396143794b653ac3c80dc4804f89ea1"],["/page/3/index.html","d5bec470642eab45e0b661504a90b4ed"],["/page/4/index.html","00691bd58ce5f543a75e390bd6f8753d"],["/page/5/index.html","bd6964cfa4c0d3d1db005e9ba090cdfe"],["/page/6/index.html","8755822181665910f2f25006160dac0b"],["/page/7/index.html","acc3fbc9393d23f130ee95ce60717624"],["/page/8/index.html","ca72ad6fbb5eca0ca7e9d638ebe6db83"],["/page/9/index.html","a02b5a97c919fc7f150da05bff6fe5e5"],["/sw-register.js","7c0ae1cb8dddc71d76499da4916b59eb"],["/tags/2DGames/index.html","6da277f745212087774793b5e92ffeb8"],["/tags/CPP/index.html","dbfbb8f12ae4e876603aaa059299b28e"],["/tags/CSharp/index.html","06374c19b975304a43be73704fcc60bc"],["/tags/CSharp/page/2/index.html","386cd7a66dfe6a6eac4558690278dd25"],["/tags/ComputerGraphics/index.html","2b0306ee77a0742fac156613de34f2f4"],["/tags/ConfigurationFile/index.html","5120e321dd15bb5cb8611c0ea6bf8011"],["/tags/DesignPatterns/index.html","fc01ed0be2c868eac2760bc96c03fe79"],["/tags/DesignPatterns/page/2/index.html","d446ee6b9681adf2146b937e7328b8da"],["/tags/DesignPatterns/page/3/index.html","f86a64a0febbd1db23c3a2e402e1eca3"],["/tags/Games101/index.html","f577acd2e6d761e83134d8ce4c2b169c"],["/tags/Lua/index.html","6a00a07d184249f9ac3769b9bf559336"],["/tags/Physics-Based-Rendering/index.html","3169f2cc41e3c642f613ed020bba5e66"],["/tags/Shoka/index.html","36508dada935eac0f60fb6c26c16efd1"],["/tags/Unity/index.html","89c3f5905beef7d870f3881524a49e42"],["/tags/Unity/page/2/index.html","46dedcf8ae7a13e0105e0f2561a7bb4b"],["/tags/Unity/page/3/index.html","4f778e446c6876a8eed23b4f67066013"],["/tags/UnityShader/index.html","4a13ff4ccf77566f11163fb17f10b145"],["/tags/UnityUI/index.html","6fe3b9462b06b41c357d50203cbcf480"],["/tags/index.html","bd718b09b1fca22d5f6afdaf7a398290"],["/tags/操作系统/index.html","bded4353c72c2806d2a6cfa88166c966"],["/tags/数据结构/index.html","7ccbfe23c858f176b4d8d7f85a8d132d"],["/tags/正则表达式/index.html","e8284fa76fce253e4e9d4ca2ac90d448"],["/tags/配置文件/index.html","6be90d9b8a0ffcc954311264555dd60e"]];
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
