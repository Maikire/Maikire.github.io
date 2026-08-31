/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","56cb648d01d25bb886d88c2bc47a33da"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","945ac1d65c1813e548c04e3491713df0"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/CSharp/CSharpBasics/CSharp基础笔记/index.html","a0df5adda31b867ac370a2170a863cea"],["/2023/03/20/DesignPatterns/设计模式/index.html","bb0491d01662a42913e1e187ba783a76"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","faef49123632f877eb8f2368936e29e6"],["/2023/03/24/DesignPatterns/单例模式/index.html","45f36bcd1d19befad87da6e2c944c209"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","e3b3d394f89a66c45797f88104b30569"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","bac344b161fb4c9e01c9bf536495e562"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","8a0cbec01df2924b616aa285b88ab453"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","848ebc7bdccd33c3f0ef96ecb7420c79"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","fe4ea3d0ec21f5f0385e62cf9d0b02c2"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","1ca587ee47c75f9e42bad3662323e130"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","0fa409bd704c5a42c4a42e766a61f077"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","1f280870d6a6d0f94ca16d9d82dffa12"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","47c9294c8ba7862653ed5c249b26e98a"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","326f6feffeb1ec2c296ccfb39e2604b7"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","28f137c5823111460b6b76dcbbc18045"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","ca9a80f9faf200690c50561eba9c9f5f"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","9a8450861d4be4039bd29cf49a3b4e9c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","b4967729b201a2cc1a4ad6e1dc6fcf6b"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","f3eee6d911e9781f2124321ab3bb5b13"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","43f929cb93137a270ec1748f44cd8b31"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","ea54c43a706a3cd5cf9dc30d599d56a9"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","89a457238e8c8794fdca17109516d236"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","c5c71edbeae8124d8767dc89bec277bb"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","e62a6570fc8c00c39b2bd9ca297a2f1b"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","bc4e9ea5531de2d8f35893ef36391f5f"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","a46abd25e4212ae92ae79a8d7b434b78"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","ee1a2e68a9992acee88486b05cd5c51d"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","01ff5f2b2a09d9183c85b2706051482c"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","46d67439d3dabad8e061f4a724389b39"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","e17f38624e27fdba481f1f72f567bb02"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","2228eefdfc41794d0227e2237488cf8e"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","b4cdc7777d9bbc148c66c5e0189717ea"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","e3c1803d4d1ac67acd324c931fa9a356"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","614f0458ca15cdeaa1c7a71bb16e3522"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","dc9e7e32e49bdcb6997bff5ae1f1f8e1"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","d67a353120e6c94ba33d5af178ccf860"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","5f103482cd18bd04674c081ad3b6df7f"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","4becf3828a3cd5094c79de10ad81f21e"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","74ff926c9f04fd9ec329e1ebc3be3e1e"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","3bd8d8a559dad6378bc75d1519b638a3"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","a2cb87a5a0e46bb99ffed983af193a56"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","a97498cf95ed53840bea94adb979bf28"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","2b27c58118e1d85e5ea79514c047feec"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","230e6256f29c9b369be1fb5a0e464169"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","0b0af64fdd8f82fff5ae8a595fac297f"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","c850dd378817b807d902fd22627f7f98"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","4b6274879dd622606991ab5dcb958188"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","66e084ee745758c785242fa4e83fd133"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","7ea8df86911bfb700ee2a89c71462b34"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","5909e3592b2444bf8912a8dd12415a47"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","3887f9efe540ee6f32a63f9f19e840f6"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","64143a3174e1880f14638690a386cc10"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","17202b48dc852da76a9d2924566d0d88"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","054bd62ab94ae1780bfcc8e193934549"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","50258769c581861d45be90ab745523d8"],["/2023/08/02/ConfigurationFile/JSON/index.html","94bd247def09cfee5e0e2f9d217876a3"],["/2023/08/02/ConfigurationFile/YAML/index.html","151087cddd0df33cd1ef837dc0457be1"],["/2023/08/07/ConfigurationFile/XML/index.html","f681c6dfacc35ab6c78633fe29c11055"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","1845d9209aab53804ff786cf9f4054ad"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","0be7d55716679ca51727912b783696ee"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","3ba5238c88df1414650eb8d7923e3335"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_10.png","d255ab7b0bed1fa0ea70bf7115d35186"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_11.png","aca91059e2b3c1723737446409e2782c"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_12.png","7b77a0ef9df8394e5a8fe696c7a27b65"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_13.png","768e584c40f1e579c1d66904a8266cfd"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_2.png","437f5ab67fe8c88506ea3322e7d2a35b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_3.png","52fdbc9d7da952352ed35959364977af"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_4.png","231fad4b2db021fc1581501a422eaa9b"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_5.png","fc3d4897f693e95ee02b219f7e033faf"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_6.png","cc2a8406db63f3b13e4d4c3d1971d018"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_7.png","35d8346f38abd4c92611292fee319a56"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_8.png","157fbfb62dea1c39ccb74c49bbd30d97"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/Pipeline_9.png","87442d4255bcf3f4d697ba857b96a655"],["/2023/12/01/Unity/UnityRender/UnityShaderBasics/渲染管线/index.html","93673c03a6c908e8c42f6433d3c46cda"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_0.png","bf706d1b76f6746d342c208a6a40a621"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_1.png","1fde433ef6991c592a1d13c2048a7376"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_2.png","e6d1eff651021d0356f62a0a7fc25386"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_3.png","24b8af01496eb16163a89f2818472d51"],["/2023/12/03/Unity/UnityBasics/群落算法/Boid_4.png","582b3d2371da5be24ea6298967136ceb"],["/2023/12/03/Unity/UnityBasics/群落算法/demo.gif","1902bc6ed15f85e00a5d343fa09d11af"],["/2023/12/03/Unity/UnityBasics/群落算法/index.html","9bf4ee45c279afb1484b3fbf33dd494e"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","bfe36af3d09cfcd1be21fe6a19a11132"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","78db0d13141c31d265f85ea40a73336e"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","a7ba9dabbdb3a8d98f64742c52e4d923"],["/2024/10/01/ComputerBasics/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/ComputerBasics/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/ComputerBasics/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/ComputerBasics/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/ComputerBasics/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/ComputerBasics/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/ComputerBasics/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/ComputerBasics/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/ComputerBasics/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/ComputerBasics/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/ComputerBasics/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/ComputerBasics/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/ComputerBasics/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/ComputerBasics/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/ComputerBasics/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/ComputerBasics/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/ComputerBasics/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/ComputerBasics/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/ComputerBasics/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/ComputerBasics/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/ComputerBasics/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/ComputerBasics/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/ComputerBasics/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/ComputerBasics/操作系统/index.html","831afa73132e23b2e2f372a8e29a87c9"],["/2024/10/01/ComputerBasics/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/ComputerBasics/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/ComputerBasics/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/ComputerBasics/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/ComputerBasics/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/ComputerBasics/数据结构/index.html","51f8af43a4499b0b8b6c20b4080fbda5"],["/2025/01/10/RegularExpression/正则表达式/index.html","051a5550c9ef5c4d98e9da164e49762c"],["/2025/01/20/Lua/Lua/Stack.png","206e1d92f046f24ffca051e54212f52f"],["/2025/01/20/Lua/Lua/index.html","0427fba85b4c2e761ff056271abca01a"],["/2025/02/12/Lua/Lua + CSharp/index.html","faf411a1e4cf82f64446f7db5faf87f2"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","bfca85092c6cf56092f44a73521f4a20"],["/2025/11/11/CPP/CPPBasics/CPP基础笔记/index.html","a542f5a88c964d0b9315eb4f349b1cf6"],["/2026/02/20/ComputerGraphics/Physics-Based Rendering/基于物理的渲染/index.html","86f9f40d731eeec63110dfd198458aee"],["/2026/02/21/ComputerGraphics/Physics-Based Rendering/双向反射分布函数（BRDF）/index.html","777469e58310d4e75c5dbb6fc1d53e92"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/1.jpg","a4b46edc96c3134ad66ee6cc7b30d5e4"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/2.jpg","cc9b335484c3dfef43be777c3d82aadb"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/3.jpg","617f43aa73c15ed9a9d70d5f5752b232"],["/2026/02/26/Unity/UnityRender/UnityShaderBasics/Unity URP BRDF shader/index.html","688bcaa1c2844869bb42dd5110b01902"],["/2026/03/01/ComputerGraphics/Physics-Based Rendering/Kulla-Conty 多次散射补偿/index.html","8d22df7be23b77b0ead8c07c4eb53a19"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/1.jpg","5b5b0274aadafbd7854f2fed2b34ecd5"],["/2026/03/09/Unity/UnityRender/UnityShader/黑板效果/index.html","111b7e1a1a4b3f7e081cd32e502be779"],["/2026/07/06/ComputerGraphics/Games/Games101 笔记/index.html","174fae913062b327e3f7225016ee5674"],["/2026/07/07/ComputerGraphics/Games/Games101 作业/index.html","d5905fcc4b571f7ae470b9f8481be387"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/index.html","9034d000f518f067ca5e479fcc808634"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/machine.png","86daac4da0b1e49f620c73b5be2b60e1"],["/2026/08/20/Unity/UnityToolClass/动画事件通知/test.png","79ceb2fcd2e969da36f63f705e0f4e3a"],["/404.html","609d425c927f8e97466753d74acdf9a0"],["/CSharp/cover.jpg","8b14a18669706db1ba7aabf6262122df"],["/ComputerGraphics/cover.jpg","c0c7944442654e509d2f38e63e5ba125"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","17d00c4689afd0ab38d77574e56db49b"],["/archives/2023/01/index.html","6288dc388e05b3026b4e583020f30f26"],["/archives/2023/03/index.html","6980c3668677843272d00c8387b9d04d"],["/archives/2023/03/page/2/index.html","39269be6416788a2bdd8bb303cb1d3dc"],["/archives/2023/04/index.html","49731db2cbdb399a6a708e50f9392eac"],["/archives/2023/05/index.html","634c02768174a9758a2954d412118c73"],["/archives/2023/06/index.html","27de0822e2c413a4f837aca424edcfb6"],["/archives/2023/07/index.html","0b4207193370f69672f6c94db4798fe0"],["/archives/2023/07/page/2/index.html","8e7a376443f45a87d5cd571745beca45"],["/archives/2023/07/page/3/index.html","18a99a89edb4fa420d61218cbb52f210"],["/archives/2023/08/index.html","51305b43911e53159c73ceed677e0c50"],["/archives/2023/12/index.html","8f20d906495f741936532cbf6ef3b369"],["/archives/2023/index.html","c5506f25eac201f60177e0d513b12b2f"],["/archives/2023/page/2/index.html","237591e9a0a8b49d1c3b7fa0f826de0f"],["/archives/2023/page/3/index.html","3de1ddc5d6db306bb1a60639a0ac8858"],["/archives/2023/page/4/index.html","97671468d2a3c0b6b7bf5be8239c5a24"],["/archives/2023/page/5/index.html","f9cb73086fcfb71f54d122d380e259cf"],["/archives/2023/page/6/index.html","3d53e6f792ac9ec069e5f42543166b95"],["/archives/2023/page/7/index.html","25cd881ce86c11447f3c334be1f6cdd3"],["/archives/2024/01/index.html","2aeb6db232736986db2723d344846277"],["/archives/2024/09/index.html","94ebba593953c41a33e8dfa4330b03d1"],["/archives/2024/10/index.html","235b8ffb2e40c21d3b10e60ac5294320"],["/archives/2024/index.html","33b5cf7fad90f6018b7515cb46a00be3"],["/archives/2025/01/index.html","c8b1bc7215998f7d04ebf57a9687d001"],["/archives/2025/02/index.html","e79d66af6af2658e2818ea3e6c98cbf7"],["/archives/2025/08/index.html","3de8bcad7cbf871a1fbd1dd9925f6e19"],["/archives/2025/11/index.html","37fa896020a8bcc5e96f6d9adf7537e1"],["/archives/2025/index.html","d3a69dda419fffe7f5ac930bdb831cca"],["/archives/2026/02/index.html","0c3a26b3f17b29bafa143940d8f6d02e"],["/archives/2026/03/index.html","3c1fd237387d63b1384cb3c79b44fc5c"],["/archives/2026/07/index.html","6df213eb9794b55771b7255798c7f06d"],["/archives/2026/08/index.html","c7fa4fc6d52a9fadde41a9647425f17a"],["/archives/2026/index.html","0a598319608ffe67d6ea5864be5dd12b"],["/archives/index.html","ed21034faae486463bcb6220f456acbb"],["/categories/CPP/CPPBasics/index.html","b8641cdf0eacb657eb39ec0a875962cc"],["/categories/CPP/index.html","990249160940c0b0e89f80e6f53804d7"],["/categories/CSharp/CSharpBasics/index.html","50acbf74403a0b6d0e70a4fb0bbfcad1"],["/categories/CSharp/CSharpToolClass/index.html","d03ec0aafa6ad02c5e8d44b368aad05e"],["/categories/CSharp/index.html","1b89908d2edbd700e6ffc9ce79437040"],["/categories/CSharp/page/2/index.html","f4f4ee88f87672cb9d58490530010cf7"],["/categories/ComputerBasics/index.html","f8bcd9d8c64b34324d83049667745d35"],["/categories/ComputerGraphics/Games/index.html","dce75a2c24756284da69dbd55b67eefe"],["/categories/ComputerGraphics/Physics-Based-Rendering/index.html","5c5a6a79a3fdd00629851fb8b3e20058"],["/categories/ComputerGraphics/index.html","65ff7a352aeb9c24e810df9e6ae9c749"],["/categories/ConfigurationFile/index.html","e16a514e6e2215f77b353cb6a4a0ac1c"],["/categories/DesignPatterns/index.html","3164145faf0a56155c2a75758b7fbeb0"],["/categories/DesignPatterns/page/2/index.html","601a50fa9359048d071489cde939c584"],["/categories/DesignPatterns/page/3/index.html","a1c868ab3a5568a2c230690b822c553e"],["/categories/Lua/index.html","e3f8defd630aa7cf01ee78d039b58918"],["/categories/RegularExpression/index.html","4c5fd22cad5bf3b9a3eae6af5996f351"],["/categories/Shoka/index.html","0763445998d8a125b9e308108aab8813"],["/categories/Unity/UnityBasics/index.html","d9155e200db3b4c216e2f5675ea86a17"],["/categories/Unity/UnityFramework/index.html","bc1d8a466fbb24f6010ae814ff3dc838"],["/categories/Unity/UnityGames/Unity2DGames/index.html","3bb2efeac9b13d70b165c4ddd418ece4"],["/categories/Unity/UnityGames/index.html","979a1598c79625584dc86d75dd5fdf93"],["/categories/Unity/UnityRender/UnityShader/index.html","fab65897a1a1246643f23c68d0fe425b"],["/categories/Unity/UnityRender/UnityShaderBasics/index.html","3f52eab89e153ec9d5aa6943d8c919db"],["/categories/Unity/UnityRender/index.html","dbe181dcaf16f437fca2948daf287561"],["/categories/Unity/UnityToolClass/index.html","6bef15e2d7e782cc852bbd7b1a503dd9"],["/categories/Unity/UnityToolClass/page/2/index.html","3b6141321b585e4548f3595653613d21"],["/categories/Unity/index.html","76db68a482735486f606a4599b4deb29"],["/categories/Unity/page/2/index.html","b24e811fd1ea6719c05df1dba5b78b7a"],["/categories/Unity/page/3/index.html","d1fe2770775f822de3d3d5e75983d1c2"],["/categories/index.html","e388f6d76e89e0b056a6cac64c88efe9"],["/css/app.css","31e2c5482e9a134bf08cb0c53688b95b"],["/css/comment.css","986b0de1d0f4b1d97ed59c82fb2259e6"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","2d24ad5aaf2170a61812e3b10827e2e2"],["/games/index.html","31af27b37a98d9d913938871b0990d5f"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","e5758f7c4db23655fcae6038c566ee1a"],["/js/app.js","a113d4a0fcf522e31e0484a0c7a0708c"],["/page/2/index.html","022810285811484cb22d7ad279ddba7c"],["/page/3/index.html","06d507f97c15b21f9bfaf4151d4e16ff"],["/page/4/index.html","45fc7f80b5cc8d9bdfc2960dc1138892"],["/page/5/index.html","bbec57f9c48b172e9c619618b16a2ea1"],["/page/6/index.html","3fdedf83f53b1fe2bbb8299501089bf0"],["/page/7/index.html","e17b62638e990a41e9ec83db82661f48"],["/page/8/index.html","f1a4904200d23ff61d3d27e20092ae19"],["/page/9/index.html","f5c1d5280ad607f8c10d3c2ef9e81668"],["/sw-register.js","be7e4e7c7d882f318d77c1887dea0b25"],["/tags/2DGames/index.html","cd3334a6fd08e936b373b9de9e7fa2ea"],["/tags/CPP/index.html","b0a0229d12d2e9d8522bc2878a3099b5"],["/tags/CSharp/index.html","9372e845efa622f52d4807f52d22c36b"],["/tags/CSharp/page/2/index.html","952c72e62b9c34921bab20b19ac5f7c3"],["/tags/ComputerGraphics/index.html","2f33011a2ad5d70a865203a648c05b16"],["/tags/ConfigurationFile/index.html","97cc5664f2908e63c30dc29fc3736200"],["/tags/DesignPatterns/index.html","a61fa93a99c5658f1c392bf6e740bea7"],["/tags/DesignPatterns/page/2/index.html","f17bfd0c97fa6542bce9df49818dcb20"],["/tags/DesignPatterns/page/3/index.html","640c445508c6a85928388ed7815a124f"],["/tags/Games101/index.html","6f915b7cf65d20f84a7676f27ea280a7"],["/tags/Lua/index.html","d31728888ad26461c361db50c98f2f2d"],["/tags/Physics-Based-Rendering/index.html","5bb6027997c8071541896aecc573891c"],["/tags/Shoka/index.html","1fd262d52a7883e9a8b0538afa81109f"],["/tags/Unity/index.html","c201964ffebb9627c5bb3edeefe46ba9"],["/tags/Unity/page/2/index.html","f958cc5088b1ce23ab3ec430c0ad0fb2"],["/tags/Unity/page/3/index.html","669758b25609988adec21e9eca96029b"],["/tags/UnityShader/index.html","a6c2849ac128e4686e1431bc989b59b9"],["/tags/UnityUI/index.html","03d41e5f37e413a84d620039a969c724"],["/tags/index.html","8ba756847ef1cdaa32786f51a43a5ae0"],["/tags/操作系统/index.html","0940356afa54808683fc8ce17d1a1fa0"],["/tags/数据结构/index.html","a93ea36083fb861865dfb0296e2899f8"],["/tags/正则表达式/index.html","d87bfac9c53a208f7c4872936f198d69"],["/tags/配置文件/index.html","df635514f4d82de527c760e7bfa3548d"]];
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
