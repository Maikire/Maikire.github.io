/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","f68aadc3bd27234fe1a257230a458cde"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","8f86fd9ad231e46bf509fc7ab14566ae"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Behaviour.png","99dc8af9f223a55f6252b2294caa0dc7"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/Player.png","cf91fbb0f788dd6a29f5df39f6a11f17"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/UI.png","b3e32fd05159c66c2eb0a8b0df6abed8"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/index.html","e3e0aac5b874d8e0958c402dba1a3e99"],["/2023/01/13/Unity/UnityGames/Unity2DGames/制作2D小游戏02——防卫城堡/interface.gif","4588882a00de27d2629906799e601595"],["/2023/03/20/DesignPatterns/设计模式/index.html","b7458385d8ca57154e75b04c0a0734f5"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","a93346e81a92a96cadb4dca00dbe80de"],["/2023/03/24/DesignPatterns/单例模式/index.html","c9ee89b1f2f4452b54f4b82b71c6b26c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","2fcccce2eef8c909841a6a6fd31f1514"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","cd5115c06a14c81d2fdf9e84856e0703"],["/2023/03/25/CSharp/CSharpBasics/CSharp基础笔记/index.html","c0aa6f7070671def321ab2b06a915d6f"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","3ff743011377c2b3e98fe3a8909503c0"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","938466fc255bc4ea6172a028d06c534e"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","89d24112055fac61602afdfff2740686"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","706bcca8e84d3276edd8a15384b1f593"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","a82c0bda2010baa11b461e9549a22c56"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","bf6276816864b807d50ebd0bf62f81e4"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","c8b937877053d059d621c0f640360e20"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","2da07e3c126e05dcdf8f424682ebb418"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","aef9419b0f131904f477075b3fbf8523"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","09dedeaf76a5bdf18e7f784ab6e8e704"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","7224b77c6f483f39d04ac277f2f2b742"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","99fef90ee79eae582270054860057183"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","a6fd6f6575d6da3ed7367bde0145d5b9"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","74ff16722e31c3d32afae852f343c3ce"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","370d195f3e81ffeecf6470835b537a91"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","f921f91f3ac6f25c87cbbe4b44b11223"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","459813c91db2e2885d7426098d3ff106"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","1e35130ffc367497ad73352ec7aa537a"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","b154ffc72ef2c6fa27f9074963063a11"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","a73290d1989a1725220d209acd1d0cf8"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","ba51be82305f5277dc2e28af013969fc"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","879ded68ca4f897709b812f7164e9ddc"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","be8d3f390f48d94b8990e9ffe0b4b575"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","fd38dcd0686e126a6c6257543b334763"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","1af81c838a2e648202a52414076676f1"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","e7a14e099d8bc49fbeeed9cc38c237ba"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","4f063d1f2a6cd4ed23f76104c7802051"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","3c9fbd4a25fe3f1b97705ff31a6a453d"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","c2304350a009b139413040d8ecdc320a"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","dec18da73fa022a50b0c1d8cc085ea64"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","264c455e8a5377e9ed56fe2202ee1126"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","a3dcf35b2c3b6e806659d43f22ab8c28"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","e04d208c7de432703e2bff1b27eadecc"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","bb80da14db39f86ae8262b9748ef2cf0"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","65b23358b2f9a0c3d1f13a85a2db2495"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","c6f4e51347053a90cef6a9eb48b18c83"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","5a54175db57aad0a0e98a32aeff526d4"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","0656ced359dce66bc19254080c68cc08"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","27f919120187575d9305e096e28e1716"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","873f3f160b240bfbccb0b9498ff80c1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","e24c24e9230886bf2f42d90ac8f67495"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","97b70cec7ee222b93e30aa578d461532"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","40d7f7d1567aae8bcd8db6f25836dee1"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","9725e310877565a4e83b1f514774466d"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","2fb0e313c543a0a84f9cf0bf77ddceeb"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","71e1065e16b4787079e4785c88097ae3"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","55b3cb1fe63df210a1cc38f196a71852"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","5efa5a0bac62ec6c8efe593b3e78329e"],["/2023/08/02/配置文件/JSON/index.html","b506c1aac87cd485cb4ceb9612aee82e"],["/2023/08/02/配置文件/YAML/index.html","d6eb2f2fcb383e04ad018caa50102e26"],["/2023/08/07/配置文件/XML/index.html","3647666b79bce9105f0deda84aac21a1"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","578bc204a567ef345e8da4ffca57292d"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","e86399139778b17e9f88c5a010156283"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","adf47f29f0c2ac3f378fcf3b8f227c09"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","857765a4328adc2820de229d3f8fdcc5"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","266d1aac696938c2726049d2f5a90fe7"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","9507b191f9a7d08bd2282284ba56a781"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","fb0bd072260cbbcc24a770ad5fbb5e3f"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","daa0a1f1d2d4abd13242046dfe1746b6"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","11973fbb0ce7208dcf39afca9dd4de8a"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","33176eccd7f8675dc264623eccbabf12"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","45c92ba657ee0260d1645bc4b9a44cbb"],["/2025/01/10/正则表达式/正则表达式/index.html","4ded076013d43e2e7042e9a167b0af38"],["/2025/01/20/Lua/Lua/index.html","f29d0f94f529ab2ab1c8e0d2d5fab89d"],["/2025/02/12/Lua/Lua + CSharp/index.html","70094f31138a751a7c027376c9190feb"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","50aaccc38e02e6a709c23d325ee53a40"],["/404.html","c785f1d8bfd46848ce075f6010cd7572"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","3bf0a704ae9157c9a9bbff12bdfd1453"],["/archives/2023/01/index.html","afdf0c79f857ae6bdb38fe9c15ca85b0"],["/archives/2023/03/index.html","bb7a36873e84cca454479f90fe464655"],["/archives/2023/03/page/2/index.html","280f18a230b9e60dc74b017e77779c2c"],["/archives/2023/04/index.html","2591e4490fa65bee39903c0f09d8f1b3"],["/archives/2023/05/index.html","7fdf6edadff3cfb0effecc66e8c1b276"],["/archives/2023/06/index.html","d1302870e140c806a0bc815047d09603"],["/archives/2023/07/index.html","5ebc3215063d398073d8852c2a1ebfa9"],["/archives/2023/07/page/2/index.html","3e0add1a1a7f53f084d949e8defc9f1b"],["/archives/2023/07/page/3/index.html","cd9aa67d3e24deae4adbd24feb8e6ab0"],["/archives/2023/08/index.html","1858e59de5b39ab7f37d745f1c1c3c5c"],["/archives/2023/12/index.html","c1fa55d1877387e62c54edc450c8ab83"],["/archives/2023/index.html","913dc2b4ea237b9002e80df4a328f653"],["/archives/2023/page/2/index.html","98a904b2cc6dd0408cd5b2d37274cf67"],["/archives/2023/page/3/index.html","a6b2f983872c96d1a16ea7b5d1d86f57"],["/archives/2023/page/4/index.html","891fd2788dc1f4c73bc56783d6481391"],["/archives/2023/page/5/index.html","4c392567d9274a3f32c5998ffa03fea1"],["/archives/2023/page/6/index.html","6ebcbca11a22ad47a64147c66dc5c055"],["/archives/2023/page/7/index.html","c52e3d7933d1cdf26322cecd5c79fab3"],["/archives/2024/01/index.html","264464590a3892bc78f47ea9df60d3a3"],["/archives/2024/05/index.html","1d29c5bde02df8e0ce430f0f66971728"],["/archives/2024/09/index.html","63f86a05a496b1c32672940941ed4128"],["/archives/2024/10/index.html","3c0a3233a0ed2333c8b8bfd34af97116"],["/archives/2024/index.html","26eac682fa79f6fdae141ed537664dbe"],["/archives/2025/01/index.html","6ed086b07a3139b5b17579c034a68beb"],["/archives/2025/02/index.html","14d105e233264accc824d3d3b1cf3064"],["/archives/2025/08/index.html","3f44b7f9998f691a89a1b85922084b06"],["/archives/2025/index.html","b561b447d28a873646b7c5732a464ec8"],["/archives/index.html","6fe99ddb05bc0c40abda979bbef751eb"],["/categories/CSharp/CSharpBasics/index.html","4c21de7ccfc0174b8cce3e14a2dd8d47"],["/categories/CSharp/CSharpToolClass/index.html","9224821deade25c3e07a11c58a0b6a1d"],["/categories/CSharp/index.html","5ab1b65613eaadaf3b08a30f3ed088d4"],["/categories/CSharp/page/2/index.html","d1f57816724990cb462a50d14a622c02"],["/categories/DesignPatterns/index.html","25f9ec03f40c7963db71506513e257a0"],["/categories/DesignPatterns/page/2/index.html","aa3e42c39c3dc60baac39c18a53f7f9e"],["/categories/DesignPatterns/page/3/index.html","f5fcc7a39f1fe82321622c5014f31a25"],["/categories/Lua/index.html","46b9f6292b250fa39b08ac916d1c0f9f"],["/categories/Shoka/index.html","cb8733c53b349cff3fa25e7a27a1968f"],["/categories/Unity/UnityBasics/index.html","806b9578261a5b7822b27e0daf273a07"],["/categories/Unity/UnityFramework/index.html","c8d4d64c6807240f03b104c1aac5f834"],["/categories/Unity/UnityGames/Unity2DGames/index.html","93f0ad8a7056ce70d2c9911c08054cc1"],["/categories/Unity/UnityGames/index.html","e7523cefee97f91c0c9bbfbb2f579193"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","4d4558f32cbe5c326e018d56b89ffc69"],["/categories/Unity/UnityShader/index.html","a7cbabd9e9d8f77b8783134c79cd96a5"],["/categories/Unity/UnityToolClass/index.html","909ac8b7a5ca718c7f01e49c25741ac3"],["/categories/Unity/UnityToolClass/page/2/index.html","fa360aa2ce1d2fdad48a68f7ebd328a7"],["/categories/Unity/index.html","1a005bf3da698019c40c02aef3019ba2"],["/categories/Unity/page/2/index.html","c5c85ddacdbecdd63f3de9d7e51f1ddf"],["/categories/Unity/page/3/index.html","715591baf714a20a9c5f52972dbf6be3"],["/categories/index.html","54dbc11aee8a484404f733fef8ee6fa9"],["/categories/正则表达式/index.html","83983a481b3e812e0fd48420227385b5"],["/categories/游戏设计/index.html","d014cf05f89bfaef4a683f2fbf7b644a"],["/categories/游戏设计/关卡设计/index.html","f2dfff47b648672d749c3e06821b03cd"],["/categories/计算机基础/index.html","46d135b597929d978218e506630cb157"],["/categories/配置文件/index.html","7e06db50c6a14a40be7ce9794b5acd26"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","851a9d2972532e8e15ff50d9be3882be"],["/games/index.html","1b51a4df52ad29905fe3b8848e359a1e"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","8de22bb66ea3f97707c7f8002459361c"],["/js/app.js","e82d49d496985ae085d8b0ae957a0ffe"],["/page/2/index.html","79f739e9c3b780c00c7ffd4ed6231e99"],["/page/3/index.html","385157a98a9c5985b1f43520bde43996"],["/page/4/index.html","9b7a62ed4853045d0059b95f7f124edf"],["/page/5/index.html","a26c7bb69c57af0485c2660317d78b57"],["/page/6/index.html","afc8286b72e3613f20287a47da067edd"],["/page/7/index.html","32b3640fea7d5dce4a53fdedde6a0f30"],["/page/8/index.html","f65696862d6df5acbf5804abcbd8ecc7"],["/sw-register.js","94e61fa6c36316728ecf3569c0f96d3b"],["/tags/2DGames/index.html","d1140f01833ebce2a962e84f7a473a39"],["/tags/CSharp/index.html","9015582e0edcb1c5c385059c618ecca4"],["/tags/CSharp/page/2/index.html","ce2303b7c84a64a9f023c277993877ce"],["/tags/ConfigurationFile/index.html","0dea25f5d9abcbbd4c6d4f8a30f78159"],["/tags/DesignPatterns/index.html","f7a7690010952abd0753be4c09d7ae3b"],["/tags/DesignPatterns/page/2/index.html","e404c86e96b142705d32665348c24cba"],["/tags/DesignPatterns/page/3/index.html","773c560807a2357d6ef79d681c6b3beb"],["/tags/Lua/index.html","8d5481b750cbb646e4dff15783bca400"],["/tags/Shoka/index.html","007691c78f8c54143551529446ec182a"],["/tags/Unity/index.html","daddff56270eb7262ae1c7116c19a880"],["/tags/Unity/page/2/index.html","4a4c39b11ba2b85179c5caf4e4704589"],["/tags/Unity/page/3/index.html","2e1f3197623fcc38f1cdd66777a4edb2"],["/tags/UnityShader/index.html","24c4610be47ab645748326b0026b0c76"],["/tags/UnityUI/index.html","2e03c856f9c45e5e441542a6f2c49b61"],["/tags/index.html","1d5c064b095d60deae1c67583e6b5806"],["/tags/操作系统/index.html","27276f7e43fe40ae3cde60e3825d7c43"],["/tags/数据结构/index.html","5e29c1b24beb3ff895fa988aef32efd0"],["/tags/正则表达式/index.html","30b3967e16e7499dd31541f6bce394fa"],["/tags/游戏设计/index.html","95712a1aca5b88cab61d02c2083b0245"],["/tags/配置文件/index.html","a221dd9357c829c2ad70ddee10065710"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
