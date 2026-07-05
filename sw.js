/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","8e2d9f7f95142a74a687e97fd9bc0e0d"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","a5eb8909533c616c5677c1d723d3d869"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","df4a77aef31f21149224c5bdfb7bea9a"],["/2023/03/20/DesignPatterns/设计模式/index.html","ef8351317a7dff4b96560b09f5f71e0b"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","4648fb3f48ad4fae29518e5ef3fffd2f"],["/2023/03/24/DesignPatterns/单例模式/index.html","cb7dbfde4c061822c22e7a0b2badf0f7"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","1b50f05ab28125ffa6b315705083747b"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","cab81ec75c8fb55ca1aef8168cd69937"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","5995d201de5017f71808309a40676a9b"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","716dbd5d67966366760a18305c4b8663"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","8388626d3f9c73781b757eb90c71df8d"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","7cf9b5f1d21408bf4077605402e6b687"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","131fccc842d580ba4af31583f9fd77df"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","a25b14e6023c04a4d9841681b77ffb1c"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","6442f29ac203f95e139a7d73bd431d9d"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","e5351f62ae611158e58375a2728486df"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","fdc557f7ec840d32e91a5ee64658e47c"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","1812de5c9ba791338ec8a02e1a61f7c6"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","1d47d48eef362371c6738ba319a2f8e4"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","7efb9f3acdaebbce24ec59bade48028e"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","add65b58e36b663823ff29235eb4bf42"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","4c8226c287cb74e5bd24f66a6af21d5e"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","78f9b5100db2fb58f1da95d7118d8abe"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","4dfaf2a6fa82b5cfa4c4ca31960ec40b"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","6c8e4b8f90beb21e9375c661d3fae513"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","df34b85f9cc608a88ea060242710d974"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","760c53cdba7023caa848e1af1ebe7748"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","6df634b85820b3a87ab9fe6b5e8dc81d"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","b157664ff7de8a0057b20e63678c5870"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","ed02a7a60026a0ded2bfd0e0fa1d1152"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","292b018c90fe84c8e7265237431c1e81"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","fb536438154099a67d99936ea4f279a6"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","d3ce8b6efb34b99e5cff7651fc0420ba"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","556b4f6dcad3a35859c825253ecaef92"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","9f2a960564b94d45d741e740da20c4d9"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","c7df6b7e283afcd35dfcdc4ec25fb328"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","33675a61801f5ab852478e0864da13f7"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","f08dd79077e70ea48e0722655049825f"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","3ea4782e791021999476ebadeaf0e364"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","0f09a2b0ff2675bb2f76858259d62591"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","ffa0743aa0002c9247a187ef2225b32c"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","02536dd06f239abcfab400f98ca2f4d2"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","5275a43d481bd879df61572b858d7663"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","93e8450c2a6bfc01f106839b1838d654"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","b24a666e885b8edb06577d3abdba2866"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","e4ed8bc0536be27808ceb1984340f269"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","608d884543e6a8d95d92e76dd5577da6"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","8a2a06f9fcc37e9dc11e339f1dd73e74"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","c775a00228592f40654628e044086bdb"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","e6a6219ebec1115c62f84bd020db32a5"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","a073d41647cbd21ba93335505b2b312d"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","a6306bae3f229e7c916dbc34f23c8a9e"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","10134a371779aaf54471d2efbc5e31ef"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","6018eaeb7e4ddb05286089aa49b01572"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","1ec33004d212be0d53eb1c4e2bd2e397"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","b1c73b919ff9ae944d4214a030e0405c"],["/2023/08/02/ConfigurationFile/JSON/index.html","9509be923218448e72b29cfa03a9082f"],["/2023/08/02/ConfigurationFile/YAML/index.html","85569d6a8f99d94ba889d0cfa7909413"],["/2023/08/07/ConfigurationFile/XML/index.html","d4435ba4a9a1e1226bd6d4c2ec9a77f3"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","5dd3e9d6cb0fe38bcb3de67dcd38b343"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","3169138f548a672e6b190bacd2218156"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","9d359c403412d12e868b863705441cd2"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","0efd5ff8d186c58c4b314fc91bf5445e"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","edc8b6e8225e0d576c173e314b30d4a6"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","5c921652defe58fea2887a57f8baf6e6"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","df5741a2c222bbf03cf893f2ccc90f28"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","757b0f52556c83e02e48643484ab6a99"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","69175c710faa36d15691f685a36557ac"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","6fb7e6062969c56b0f21e28ee537a2db"],["/2025/01/10/RegularExpression/正则表达式/index.html","145cfa0bbc020d7752f177fe5b047dfc"],["/2025/01/20/Lua/Lua/index.html","b9cab746d32a2aa464e473829bffb424"],["/2025/02/12/Lua/Lua + CSharp/index.html","51eb59589509f8f86ce7f737d482e2cb"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","250047ada731c794ebe67d534fa56a6b"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","64ebcbe9e0246032b4ec16b0dbd9a5dd"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","2db8c0f5aa88ae159f334df4bc62939d"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","4e6fa56842579d0aed5f9b7b2343a94e"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","8536d0832ccef7b36604f4cb4e235dbd"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","07dc14f94d66d63ec2266f3bdfc0ab05"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","4969442a72716bf34ae34c9a7dba6b2a"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","f533ac56512f17fbd2d1fd5940d89391"],["/404.html","57a6b05262078090cd2e7159626a0727"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","c0449eb41a1b7131b7665cef3a532003"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","0ce9d97804d9277fddb0750808e6b792"],["/archives/2023/01/index.html","9255b57ba34510774b75156dc5d72e6b"],["/archives/2023/03/index.html","64f0b22f4d199ff227c92d770df21da8"],["/archives/2023/03/page/2/index.html","74ed70132ae10d1ed5da1f05210351df"],["/archives/2023/04/index.html","60b95262f83b909a4d6052d35df597c5"],["/archives/2023/05/index.html","ea1f606cc30fbe322a24c3a84125b64e"],["/archives/2023/06/index.html","e5a8957cb706be42f6c31fc79ca62c4f"],["/archives/2023/07/index.html","438a2c1cffe0280a335e2ca167659a0a"],["/archives/2023/07/page/2/index.html","bfecb07c24966fdc3ab71c9e9322d994"],["/archives/2023/07/page/3/index.html","47bcda306b9bf70de76dda9c30e99f16"],["/archives/2023/08/index.html","be4318b00d6f31dd530a36a0460e7a1e"],["/archives/2023/12/index.html","bb8ffe7c614e6d599fb2cf53d74282dc"],["/archives/2023/index.html","e339f1621439e83b29d6312252f9460a"],["/archives/2023/page/2/index.html","86bcfb5bfcc56bb898df7fefa3503b77"],["/archives/2023/page/3/index.html","f6ef4ed3944f7cea704e4bf9c37fa7ef"],["/archives/2023/page/4/index.html","ff861d9f202d91fc317a6245839c8fd3"],["/archives/2023/page/5/index.html","25ce07689a75dd9c604aac08db33ff81"],["/archives/2023/page/6/index.html","44d37ef01da93721e9f0cfd88eef8156"],["/archives/2023/page/7/index.html","20bb8dedfa7b33508578b47cd47d2884"],["/archives/2024/01/index.html","5b6d2ecbb09d7071d893bcc547b21c0e"],["/archives/2024/09/index.html","d57f0bf6e39af6f956e1c685121e38e5"],["/archives/2024/10/index.html","da7d6491797ce29c55135ef6f51d82e6"],["/archives/2024/index.html","7c7e7001e7c49e662c1a8a99d773265f"],["/archives/2025/01/index.html","0abc7524cfd2a4bf36d4c31ba4afc48d"],["/archives/2025/02/index.html","8a4fcf35a11199140e2a612eca5a1aa4"],["/archives/2025/08/index.html","b5513d8d9405a07b70e63b668655ffbf"],["/archives/2025/11/index.html","7ec381e3d4c74197314450fb9a6c4edf"],["/archives/2025/index.html","b26b3349ad16b1c78fdfe0f80c262545"],["/archives/2026/02/index.html","005507b11a9ebce651d16683a69013cd"],["/archives/2026/03/index.html","2e6144ece65f28d226c054ad97dfd485"],["/archives/2026/07/index.html","d2982216af64ab42a4684f19ed008b2c"],["/archives/2026/index.html","e92d6eb109d2cab74a122f6a52218c97"],["/archives/index.html","82583577012fa7066178faa5437b6616"],["/categories/CPP/CPPBasics/index.html","404f4793ce6d37a9b280f9285620bdd4"],["/categories/CPP/index.html","395be9012ec999546deceda4d1b913ca"],["/categories/CSharp/CSharpBasics/index.html","202ec97e2d1ee92851062388f8660b06"],["/categories/CSharp/CSharpToolClass/index.html","9fbbf6f18683ec4afa11eede35cee710"],["/categories/CSharp/index.html","a2e52b82259729977c31e21444710490"],["/categories/CSharp/page/2/index.html","0aace4a8d9965df8934eb962f59427b7"],["/categories/ComputerBasics/index.html","3f71744c00daf511d7640739cafe6c4b"],["/categories/ComputerGraphics/Games/index.html","0f6771093afc12aa85022b0116532492"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","ac3cee39afd4e8fdd0a2ff235d72f665"],["/categories/ComputerGraphics/index.html","1343753887f14f3b25747e1ba8611ce0"],["/categories/ConfigurationFile/index.html","4e1efe83750705309162782376be6ce4"],["/categories/DesignPatterns/index.html","ebc781cc2ef48ed335e23e32cad1d9fb"],["/categories/DesignPatterns/page/2/index.html","d8b7e8c72d198716f470cd6d05100fe4"],["/categories/DesignPatterns/page/3/index.html","a9027ed692a90a7caeda35964b6101fa"],["/categories/Lua/index.html","737ee6e96225d833eceef0d80c94e110"],["/categories/RegularExpression/index.html","d7a4dd3af5c5237a94e5a9c68fdbb282"],["/categories/Shoka/index.html","798a22a18013f3f88b347625115ec9de"],["/categories/Unity/UnityBasics/index.html","a5cc3d06aa931cb77446cf6782dd5783"],["/categories/Unity/UnityFramework/index.html","4f9e5911be4d7817154a71bd8ae6a00b"],["/categories/Unity/UnityGames/Unity2DGames/index.html","d43c3a70c46dc3bdd422c87f2da3be29"],["/categories/Unity/UnityGames/index.html","b71787f99c3b73c2780abdac6cb2cc2e"],["/categories/Unity/UnityRender/UnityShader/index.html","25df1eb2e3c3b3321dee680d7d84ee58"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","fe34b48a4e7db45518c5fbb9a581534d"],["/categories/Unity/UnityRender/index.html","95c8f37590b057ba79613eef642551cb"],["/categories/Unity/UnityToolClass/index.html","155c37fc80e8e658daca16dfc6185f65"],["/categories/Unity/UnityToolClass/page/2/index.html","393263b83a8ae20d04347bdcfa137aa6"],["/categories/Unity/index.html","1e5b867995c94d275bf8492c915e8d18"],["/categories/Unity/page/2/index.html","91ea3984a887d4a261fdb076282816b6"],["/categories/Unity/page/3/index.html","8097e0920745777cbcc42d70fb2e376c"],["/categories/index.html","2612a22f4b78a017150b4db92567c78c"],["/css/app.css","b4f69f9760f52590bf2e5e5202f97860"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","b12d222493942b34f7ad986434b439a3"],["/games/index.html","8e83bd54e3bfa0c38a29444d1caf121f"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","e91659b2845237886bff91179b71b8ba"],["/js/app.js","9b788d2d502b4262e50618600e182d8c"],["/page/2/index.html","7ab4d45bb9cbac34eed38213703fef66"],["/page/3/index.html","a37a77ea47d3b3ef3b231612676f7e98"],["/page/4/index.html","e2ecfaff50c991400ef229a6c6719d3f"],["/page/5/index.html","8cda61c5f83f7931a9ee84d9c34e5e4d"],["/page/6/index.html","885443ce73d3ea787932a93d8dd63231"],["/page/7/index.html","39bba4e7cc49649497bdf5dd524613d1"],["/page/8/index.html","27dc54ea05a8a76dfa717fdcf621c3fd"],["/sw-register.js","dea75df0f42ca57ffa98ed755ebaa1ec"],["/tags/2DGames/index.html","e2804b8190a673661348c7893f350971"],["/tags/CPP/index.html","de79ae387ca6bd897d272ab86297ddfd"],["/tags/CSharp/index.html","709e725575f11aa4abd32a1b6f645aef"],["/tags/CSharp/page/2/index.html","8523e91bc6fa961f5697b99f81763282"],["/tags/ComputerGraphics/index.html","305fe3d04d39ea299ae99419a71ee3d3"],["/tags/ConfigurationFile/index.html","3ab5ec16053428c6f817760fc1b2fb11"],["/tags/DesignPatterns/index.html","2d30eadcc9eb7dc88cf0efe11ea3e39f"],["/tags/DesignPatterns/page/2/index.html","ad924ae824fb3539701e50b4b11762eb"],["/tags/DesignPatterns/page/3/index.html","4e5c57cc66ab5d19b5c39bac7dbf1489"],["/tags/Games101/index.html","2bcef82b367722d9ab0f64f15c5dab07"],["/tags/Lua/index.html","ade4c94c4ec2c84fbec94b73d5143eb1"],["/tags/Physics-Based-Rendering/index.html","c2249c7e67b54950d2555ec7b803c485"],["/tags/Shoka/index.html","4fcb0edbe0a84d370435406a269deb14"],["/tags/Unity/index.html","2bbe4480cbebaadaf52ed3a0db5f517f"],["/tags/Unity/page/2/index.html","85b2cb74816fadad6aabe6f05dba4304"],["/tags/Unity/page/3/index.html","e3ff78c862682b587a48c793d77846ea"],["/tags/UnityShader/index.html","4aa376927fe2a9f974dd7e645bd11231"],["/tags/UnityUI/index.html","8291a0e9422a6e07f1f57893b68e8d5f"],["/tags/index.html","0271650b71b861daf05ddce4339958b9"],["/tags/操作系统/index.html","ba93589fea151eb9fa08650b8fdeadb9"],["/tags/数据结构/index.html","214c232fd68f11a25cb042e51d5c31b7"],["/tags/正则表达式/index.html","5bdaad1676c0d0103d870bc808f79947"],["/tags/配置文件/index.html","0cf1cadbc89041026322d581326c3909"]];
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
