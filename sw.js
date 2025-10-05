/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/Shoka/邮箱与头像绑定/index.html","7e3bffc2a5386bab9569d4b2a7436547"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/WallManger.png","eb9142fecb8bfb0fdb5adcabcad0ebc8"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/components.png","bcb5787d295c56fb04dbef440d7a4256"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/index.html","c9393de58a90b8f853c6f59295b2fafc"],["/2023/01/12/Unity/UnityGames/Unity2DGames/制作2D小游戏01——飞行挑战/interface.gif","b39c66c21577b2fe05c6bfa5b2379deb"],["/2023/03/20/DesignPatterns/设计模式/index.html","33d15cce4863cec6aeb9f7e48edf8a59"],["/2023/03/21/CSharp/CSharpToolClass/JSON解析/index.html","842fde4dc103e2ba054fb95c1a4b05bf"],["/2023/03/24/DesignPatterns/单例模式/index.html","2b29d67066ba4ff63b83ce31f8f9571e"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/AllUI.png","aa4c07c3cc9264982f7d9bea117000d4"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/Demo.gif","83d5e1fce7b9b15567bf5f0a8f01eeae"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartButton.png","d0a257058e2f8baf98be0f8dd29d039d"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/StartCanvas.png","2fd0b3b88e859bf9f0a349fc3dd83a15"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/UI.png","6ececa7e63a89c602f10e6627e9b595c"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/diagram.png","fef096c7776b43b064a80f6a4c31b8ab"],["/2023/03/24/Unity/UnityFramework/一个简单的UnityUI框架/index.html","67c4784d12c5686385fb928801720c40"],["/2023/03/24/Unity/UnityToolClass/变换组件助手类/index.html","5087a7ac1e05aa1d1aee282f7dce1c2c"],["/2023/03/25/CSharp/CSharpBasics/CSharp基础笔记/index.html","7b32be2032af9a688c1fdd6c1e8d8333"],["/2023/03/27/CSharp/CSharpToolClass/数组助手类/index.html","1861b2f9c022143fcb4402ab562653de"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo1.png","93573a14611e1c1ae5787012d2fda235"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/Demo2.png","2c4e5fb274c00e177ea3dc18da0c40ea"],["/2023/03/27/Unity/UnityToolClass/动画事件行为类/index.html","7754d0ac0e85613e7ce9e66d22d828ab"],["/2023/03/28/CSharp/CSharpBasics/事件（Event）/index.html","a0bbce49f59d8e483302a9fcd57f866d"],["/2023/03/28/CSharp/CSharpBasics/反射（Reflection）/index.html","ad29719395f618f38274ede2b00baa79"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/index.html","ae7136fce4c2984a444955bb8513a77e"],["/2023/03/28/CSharp/CSharpBasics/委托（Delegate）/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/03/28/CSharp/CSharpBasics/枚举器（Enumerator）/index.html","fa14357638fcaaec6e6f059becdc47a1"],["/2023/03/28/Unity/UnityBasics/协同程序（Coroutine）/index.html","7751479b9411cb03ac65cfe2ee4c9f6b"],["/2023/04/13/Unity/UnityToolClass/对象池/index.html","ba3c094d543eb8e95b51e6f1c666ce55"],["/2023/04/13/Unity/UnityToolClass/生成资源配置文件/index.html","a113819649568b7094946168c49e2e37"],["/2023/04/13/Unity/UnityToolClass/资源管理器/index.html","ec7fe279c81917e73f375b0346aa4914"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/01.png","dcb68864d5c5f86c347207ffa7d2269c"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Animator.png","1100f576caebb2f8867c91655a81320e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/ClassDiagram.png","9001338875a1c5a32626fa7426bd5434"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_1.png","c104bb9d288af719a9fc67c4180d0096"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_2.png","ca33122ce93dcce1db7dd52ee39f6e1d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_3.png","b4ac04568ccc3e4254c9e6dfaacdeb76"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Components_4.png","97572bee2cd5bf33a26a0a9b93b9f4e0"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_0.png","3ac5f9c887f567e29dc0b4cd9ef66071"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Config_1.png","87a841e834594f2e817c7408bbfb5700"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Deployer.png","11d79f0ca1808d4f423bc355b16d2825"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/Plan.png","043644706819306edfe01e4a04f2f07e"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/SkillPrefab.png","81bcd7c6845daa6778daf05c1c3104a5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI.png","d7be31c5c9016542a41e7fd765cfcef5"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/UI_1.png","72f96ebe3fee2aa83cc407606ee5535d"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/index.html","25d83ca85d4f7fe30aade0fd35c198da"],["/2023/05/05/Unity/UnityFramework/一个简单的ARPG技能框架/result.gif","0446b2c71265f224b49d966c7e89b358"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/Character.png","e11fadfac5ed73e89afd133ec3075d48"],["/2023/05/20/Unity/UnityFramework/一个简单的ARPG角色框架/index.html","4e345efb7787c5a695be36814d2e7313"],["/2023/05/26/Unity/UnityFramework/有限状态机/1.png","defd30935c868e84b0d657e2e3c244a8"],["/2023/05/26/Unity/UnityFramework/有限状态机/2.png","0c893d7af49183e0bcad0d92b4f9fbc5"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_0.png","c5b08b6accf3ea54b5bd3e035799931e"],["/2023/05/26/Unity/UnityFramework/有限状态机/component_1.png","90bebf97e7408fcdb22e430c98889476"],["/2023/05/26/Unity/UnityFramework/有限状态机/config.png","d79f23afa181343dab276893e53ddefb"],["/2023/05/26/Unity/UnityFramework/有限状态机/demo.gif","7670a5e0c113934c685efd1f293ba025"],["/2023/05/26/Unity/UnityFramework/有限状态机/diagram.png","5a46ec7c3f9681c42abac478011719f0"],["/2023/05/26/Unity/UnityFramework/有限状态机/index.html","1ba03fba5d169fbc217816d703581554"],["/2023/05/26/Unity/UnityToolClass/配置文件读取器/index.html","e9709ec370c928c4ae8dc845bcc65eca"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/Diagram.png","87a9ca4fecaabba9d9004711f533616d"],["/2023/06/12/Unity/UnityToolClass/线程交叉访问助手/index.html","ab78ee0783845255203d0204494b120c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Architecture.png","cbe6e3cba8adcf17d9f6771579dfcfde"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram.png","a089b8c3ea9e4ea6686dd1375bb4a086"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClassDiagram_1.png","9948a4a8fb62bd76f2f2a143db383aa9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client.png","dee54b0d83ba2df4ea9ba27659e0d0a9"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientLogIn.png","c684cd63f5152b62e8a2dcc7a1c8c10c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/ClientSever.png","939c37b4c2f1a95ec9148ac2b746b5dd"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Client_1.png","9539982c908f362e5fcb1706e739869f"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/GameManger.png","1d4fb949211eeb6ca3c2bbdfe38ede39"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/LogIn.png","5369c55cd53e4e70b2d8121fb2f73ad3"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Protocol.png","593686d32ec9439d2b882e313d10dd9c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever.png","26ec6d9b8d41e44de70428b5ed143333"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/SeverLogIn.png","9c7f82fedb9240e482ac639f12365655"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Sever_1.png","9634c0d4a2b3b46762c23ad2e23603f4"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test.png","b54d55862a890c2de37798a801f5d37c"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/Test_1.png","407edc6a7b775a3d83d7438a9f92e78d"],["/2023/06/13/Unity/UnityGames/Unity2DGames/制作一个简单的网络聊天室/index.html","7604e0957ad69b6f2efc90af2318af63"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/demo.gif","30c288e0d25ec3cbe9f7f9ffdd3fd670"],["/2023/06/16/Unity/UnityBasics/UnityUI淡入淡出/index.html","1b64e096af0e7f2b431c09632c2ffa28"],["/2023/06/24/CSharp/CSharpBasics/异常处理（Exception）/index.html","c586e92c2dc757cc46a2c89346b7247c"],["/2023/06/24/CSharp/CSharpBasics/特性（Attribute）/index.html","05df66ac80576006e32e5d25c9065a0a"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/Exception.png","696d2a42d10a0ae877b62f573d2345b8"],["/2023/06/25/Unity/UnityBasics/Unity异常处理/index.html","73069cf20380cb09ec23cf3e47e291b2"],["/2023/07/17/DesignPatterns/工厂方法模式/ClassDiagram.png","a090594ba44daa612bd6c8bf5dd51db6"],["/2023/07/17/DesignPatterns/工厂方法模式/index.html","fbf066f1eac4769e621e0a04d6cd45bb"],["/2023/07/17/DesignPatterns/工厂模式/ClassDiagram.png","b5dc500c4eb62500b2bcfeb14c8c2f57"],["/2023/07/17/DesignPatterns/工厂模式/index.html","baa93331fa3d92dc8bd6e5151d885147"],["/2023/07/18/DesignPatterns/代理模式/ClassDiagram.png","d3f98f5eb0ecd11512fda4090be25996"],["/2023/07/18/DesignPatterns/代理模式/index.html","d7a16793f54305103f6c363888cb4668"],["/2023/07/18/DesignPatterns/策略模式/ClassDiagram.png","4520a8224b6ed899da0d91d166e7fcaa"],["/2023/07/18/DesignPatterns/策略模式/index.html","fa105ffc116dbc8d889de2befcbb48ef"],["/2023/07/18/DesignPatterns/装饰器模式/ClassDiagram.png","332a2abdb9291e995ddb07f76452ca6b"],["/2023/07/18/DesignPatterns/装饰器模式/index.html","8b467dc938e9bdc5147d670ba366fa58"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram1.png","b8fca12734643c7f8e8fdcab4db4d8f6"],["/2023/07/20/DesignPatterns/原型模式/ClassDiagram2.png","39a272fdc7e5573a92ca117363595c54"],["/2023/07/20/DesignPatterns/原型模式/index.html","4882ffc2686239a9aff5b1ec45c2ddfd"],["/2023/07/21/DesignPatterns/外观模式/ClassDiagram.png","bf136bff03e838bfc850181065ea353c"],["/2023/07/21/DesignPatterns/外观模式/index.html","230b64f4797462f70856eacb3dda6e2c"],["/2023/07/21/DesignPatterns/模板模式/ClassDiagram.png","46a081aff8abad116703c59cf11706e4"],["/2023/07/21/DesignPatterns/模板模式/index.html","abd5012bcc1843a472eeb3bd4910b5ec"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/2DSprite.png","983c8799f94b2d74787ba79b0971ecd4"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/CreateSpriteAtlas.png","e63c4671801c2c659b9df0859308363a"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Sprite.png","c504d7ae2417325869d4fb2d91521d2b"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlas.png","eb20a9740afc011afdac7435a3c5c896"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/SpriteAtlasSet.png","3e490319c67ef4c9ba5755a9a94393d6"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/Texture.png","aaac39cab16a7e81211cb7caf93a2d83"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/TurnOnBatching.png","2bffa5df1d16ed036485a9766e325e41"],["/2023/07/21/Unity/UnityBasics/Unity性能优化/index.html","f39c2946acff19616c4f09093ac2c1d9"],["/2023/07/21/Unity/UnityBasics/meta文件/index.html","e5e481380552126858022e78b84c6ce7"],["/2023/07/22/DesignPatterns/建造者模式/ClassDiagram.png","cf795abc7b85de28bb02b5e40473f0b3"],["/2023/07/22/DesignPatterns/建造者模式/index.html","8916d8758cf2afe8bb15141e5bec2243"],["/2023/07/23/DesignPatterns/观察者模式/ClassDiagram.png","2ab4da1f175a097ef7b31d26109640ed"],["/2023/07/23/DesignPatterns/观察者模式/index.html","45bfc1ac4df143f46c481b4eca50a6c9"],["/2023/07/24/DesignPatterns/抽象工厂模式/ClassDiagram.png","92290d232481bb6ebd6b88006ebd7e6c"],["/2023/07/24/DesignPatterns/抽象工厂模式/index.html","44d7136dd4a0192e145e9dcf13377d20"],["/2023/07/25/DesignPatterns/状态模式/ClassDiagram.png","e6803ec7aabf9450412b386c86ff0e9e"],["/2023/07/25/DesignPatterns/状态模式/index.html","e79c321e823cfb45272c11d0fedf0396"],["/2023/07/26/DesignPatterns/适配器模式/ClassDiagram.png","583ba719433b7021543b7269c753367e"],["/2023/07/26/DesignPatterns/适配器模式/index.html","701c89d7f002a608c708ce8f5fb002f7"],["/2023/07/27/DesignPatterns/备忘录模式/ClassDiagram.png","50592ac818e2b706cbde8bda79a410ea"],["/2023/07/27/DesignPatterns/备忘录模式/index.html","002b0aef3520361f0d6e9f8941676bb7"],["/2023/07/28/DesignPatterns/组合模式/ClassDiagram.png","19a5675a5e725660986cb3249fbeb6e8"],["/2023/07/28/DesignPatterns/组合模式/index.html","f0f06961f20a370cb84694c7a79fe1e2"],["/2023/07/29/DesignPatterns/命令模式/ClassDiagram.png","61159b6ac777523568bdb5e99da8252d"],["/2023/07/29/DesignPatterns/命令模式/index.html","2d49c653ce395819cc195fce6140fa40"],["/2023/07/29/DesignPatterns/桥接模式/ClassDiagram.png","0a7d9aaa500e43b7fbfbbbfad445179c"],["/2023/07/29/DesignPatterns/桥接模式/index.html","b91373757dadd7d98354e2ae64ec5b4b"],["/2023/07/29/DesignPatterns/迭代器模式/ClassDiagram.png","b2eaed8170b88ba5c21650dfa1be1431"],["/2023/07/29/DesignPatterns/迭代器模式/index.html","2b13d963012443af9b016c8988524f84"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/index.html","c5f1819de09005e0a01e0a70057ef553"],["/2023/07/30/CSharp/CSharpBasics/CSharp多线程/synchronous-and-asynchronous.png","20c130366f55d0034cd6e05856a33b1c"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/FourHandshake.png","f937274e5b0e67c60832e7301d8ef861"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/ThreeHandshake.png","2bd8942232eb941915130f16cdca9179"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/UDPAndTCP.png","e2a29280526447d52f663ad20fcd40e8"],["/2023/07/30/CSharp/CSharpBasics/CSharp网络编程/index.html","01970e26182d8d37358a3b95af5a5630"],["/2023/07/30/DesignPatterns/中介者模式/ClassDiagram.png","a4d25b77f76b818d1103d4efe52ac281"],["/2023/07/30/DesignPatterns/中介者模式/index.html","6baf5eb3735ee1dc7906c10c648ce0a7"],["/2023/07/30/DesignPatterns/责任链模式/ClassDiagram.png","fe6cf0e02b814ce24a2ceb3b34eaee64"],["/2023/07/30/DesignPatterns/责任链模式/index.html","41f0d0a70fd15aebcac93d91e6156d08"],["/2023/07/31/DesignPatterns/MVC模式/ClassDiagram.png","c5e977c76f76689248ab5b183e531ebd"],["/2023/07/31/DesignPatterns/MVC模式/index.html","5563da548a9070b0c33a29d752723573"],["/2023/07/31/DesignPatterns/享元模式/ClassDiagram.png","4594f6a5e43424ba0e1b56fc7d67f9c9"],["/2023/07/31/DesignPatterns/享元模式/index.html","ece30a59b3beb0601848c40090250b51"],["/2023/07/31/DesignPatterns/解释器模式/ClassDiagram.png","ecf7f588e0ffe6537396f97d8534670f"],["/2023/07/31/DesignPatterns/解释器模式/index.html","defae72b01f875709a1457363acc41ef"],["/2023/07/31/DesignPatterns/访问者模式/ClassDiagram.png","710efb91081afd40106f07035796ba6b"],["/2023/07/31/DesignPatterns/访问者模式/index.html","d3fdff68074b322d898a9e075dcd5e52"],["/2023/08/02/配置文件/JSON/index.html","f0ec77ff24e955f1449d8c1301cacc8a"],["/2023/08/02/配置文件/YAML/index.html","799ca788548c9b785676ad8b20e2979e"],["/2023/08/07/配置文件/XML/index.html","5faeba93139e1d7be9510b6862aed3aa"],["/2023/08/14/Unity/UnityToolClass/Sqlite助手/index.html","245b2109ba4a1afd4f45466a001cfb2f"],["/2023/08/14/Unity/UnityToolClass/路径助手/index.html","deea9be141aec300e43d1cab006ab7c1"],["/2023/08/21/Unity/UnityToolClass/加载场景管理器/index.html","f5a5f0d7f7e88454e02642a1a31a8763"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_1.png","7d346a0f9e4a26bce4bf5a85c0e7686e"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/Pipeline_2.png","857765a4328adc2820de229d3f8fdcc5"],["/2023/12/01/Unity/UnityShader/UnityShaderBasics/渲染管线/index.html","015d54231251b64e1b5806339f5230cb"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB.png","6a55c8fd10f7d27164f904fd094336b0"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/AB_1.png","c4a5972fff39f1e5613e6261615f7816"],["/2024/01/13/Unity/UnityToolClass/AssetBundle创建与加载工具/index.html","b866e126924232acc7934819129b888e"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/Install.png","1322766984bba19010952dea15dadd98"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/NetworkManager.png","0ef18d6b9cdea2612e1e7b0f04795c14"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/UnityTransport.png","00361bc613110458c868182d9996ad06"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/demo.gif","38d242b3640e0a1df85ee5c8ea32cbd8"],["/2024/01/18/Unity/UnityBasics/Unity多人联机基础（Netcode）/index.html","b1500aded430cf7a9379b59a7b6655d4"],["/2024/05/10/游戏设计/关卡设计/锁钥设计/index.html","ce864092769b7bad227b5f8b5280d8d3"],["/2024/09/01/Shoka/Shoka主题的数学公式/index.html","bfb00c6e5d70a11576cc3831f8b1185a"],["/2024/10/01/计算机基础/操作系统/21153508.jpg","6ef415b94914ae3b0113208857273d19"],["/2024/10/01/计算机基础/操作系统/21153559.jpg","5baac56eacafb02be621d048b194d62f"],["/2024/10/01/计算机基础/操作系统/21153618.jpg","ef95035804e9171d8c2b4d1709450e8f"],["/2024/10/01/计算机基础/操作系统/21153955.jpg","1144adac7f8c94cdee6da0215ad92d4a"],["/2024/10/01/计算机基础/操作系统/21154820.jpg","14ead7bf8b373a817695461c2066c37a"],["/2024/10/01/计算机基础/操作系统/21155618.jpg","c2e8b18ebdd0e98f5ec005dea413e3d6"],["/2024/10/01/计算机基础/操作系统/21155951.jpg","e6e8fdd5149278370df2a5b5546e7aa1"],["/2024/10/01/计算机基础/操作系统/21161802.jpg","87ee19b888f158311fa2c87efc9c2fa9"],["/2024/10/01/计算机基础/操作系统/21162509.jpg","e14568c6332eaf0f2542bb91fd3463a9"],["/2024/10/01/计算机基础/操作系统/21163807.jpg","e631b3d87548dc91531813c92cc016b0"],["/2024/10/01/计算机基础/操作系统/21164812.jpg","627c81e59ce91a831f3d11ba9e37443a"],["/2024/10/01/计算机基础/操作系统/21165304.jpg","10da8cb5129a63579d9eab103feb64d5"],["/2024/10/01/计算机基础/操作系统/21181059.jpg","e0a6bc3a503989fe2a2c2c803057fd31"],["/2024/10/01/计算机基础/操作系统/21185753.jpg","3e367d8a0e6d3d89af45dc07e289c9df"],["/2024/10/01/计算机基础/操作系统/21193468.jpg","071b3e5267b4e188e752faae781298cf"],["/2024/10/01/计算机基础/操作系统/212328366.jpg","ea3a21fff5c3125ca61651326d769be2"],["/2024/10/01/计算机基础/操作系统/213081351.jpg","c89838967d70c204a3b7ab982660d1a3"],["/2024/10/01/计算机基础/操作系统/215522977.jpg","ea2ca3770518f038eefa4843286df859"],["/2024/10/01/计算机基础/操作系统/215522978.jpg","a8c41a1f4aae08e94f74167aa57c5f31"],["/2024/10/01/计算机基础/操作系统/21553429.jpg","12fd8bddf703ce81f875f31219c73f34"],["/2024/10/01/计算机基础/操作系统/217713731.jpg","fc6a0f344900d9a8d13c5562243bc6d7"],["/2024/10/01/计算机基础/操作系统/217731751.jpg","bd9e7c1429c4e5eff1416995b7b75be0"],["/2024/10/01/计算机基础/操作系统/217739518.jpg","fd5372514c73c821b2f62f4e72a667bf"],["/2024/10/01/计算机基础/操作系统/index.html","553ac390392e241b4b5d12f4b348ada8"],["/2024/10/01/计算机基础/数据结构/21143565.jpg","189329362ef24f3207c672649723422a"],["/2024/10/01/计算机基础/数据结构/21192521.jpg","cd809380c82f806186f4c91386413222"],["/2024/10/01/计算机基础/数据结构/21192522.jpg","f40350ab92c5d1500728995317f97112"],["/2024/10/01/计算机基础/数据结构/21192565.jpg","d92540ccc695436121e67baf8a79da95"],["/2024/10/01/计算机基础/数据结构/21292565.jpg","eeff08331ab1954886fcf72fce95829a"],["/2024/10/01/计算机基础/数据结构/index.html","63a53bde0c72cadb6f44a3d9e51c32e5"],["/2025/01/10/正则表达式/正则表达式/index.html","96e2a4872f56c3bcea6e36b77b455da0"],["/2025/01/20/Lua/Lua/index.html","5e98c70c2db92c3b48facc605ea2d893"],["/2025/02/12/Lua/Lua + CSharp/index.html","7b5857d8c10224bbfe3af5e1ba435602"],["/2025/08/20/Unity/UnityFramework/行为树/ClassDiagram.png","d5b9a1b5f29932beb162ded9dcf976fa"],["/2025/08/20/Unity/UnityFramework/行为树/component_0.png","94249b6ed7bbe38d05a7727ed630f7d9"],["/2025/08/20/Unity/UnityFramework/行为树/component_1.png","bd70050a1a03f332def35a4d589efa51"],["/2025/08/20/Unity/UnityFramework/行为树/demo.gif","81834f584b019bc46a0578e95f6d2c85"],["/2025/08/20/Unity/UnityFramework/行为树/index.html","3f40aa0e1ad77705c1d204c2f2616496"],["/404.html","f996b49cf8ac9720418350845cf254cf"],["/CSharp/cover.jpg","80235a6afca99268a91aab25ff11719f"],["/DesignPatterns/cover.jpg","1267e16720b538e5858cde934272ac5c"],["/MiniValine/MiniValine.min.js","4f1550b7cb1a765277c29f6e80ef383e"],["/Unity/cover.jpg","a6977360a270f82fbe0d11b0f2702337"],["/about/index.html","44a9a4730a874a1581f4510cfb0d36f9"],["/archives/2023/01/index.html","93d10278d72698d90fd988eb96d46e16"],["/archives/2023/03/index.html","273b636d6a9dcb29ba343d768c7c988d"],["/archives/2023/03/page/2/index.html","0356e10dc080e155120eb39d572ae890"],["/archives/2023/04/index.html","a2dfd6820175eb61864535197ce5d6c5"],["/archives/2023/05/index.html","7f8c2d88ee8edd68a89ae9475f6cb932"],["/archives/2023/06/index.html","58b85dc5b3ad739f57b8143cc4e471ce"],["/archives/2023/07/index.html","2b84408d99015886079f706b83558fa1"],["/archives/2023/07/page/2/index.html","437bc68d0c9bdeda5e6bf7fae745d19e"],["/archives/2023/07/page/3/index.html","9a0e31c99d290136d32b6ecef3349a38"],["/archives/2023/08/index.html","4eb6489a65ead3df63d9df70c73f36ad"],["/archives/2023/12/index.html","c6cb3f571052d58e8a19120d2c90565e"],["/archives/2023/index.html","127f3af59842dbc141c4853f6fec91f9"],["/archives/2023/page/2/index.html","ab092c6f8615a95251611c979d8371de"],["/archives/2023/page/3/index.html","e3eceb2996b3ce711c4155b3118bf947"],["/archives/2023/page/4/index.html","b9579396c59b42b16b1e97f5fa3f3656"],["/archives/2023/page/5/index.html","4a23ae0eeefa8bbf4b0fbe6ef0565721"],["/archives/2023/page/6/index.html","671753b9b4f62c62bc67d7b03fdaccdb"],["/archives/2023/page/7/index.html","26fd7719c9e6a3eb93c91d774a5228fd"],["/archives/2024/01/index.html","6dd3c96f715599ffa58a320d22e8fa43"],["/archives/2024/05/index.html","a14cccbfd9d13a0431bb4b24928f98b4"],["/archives/2024/09/index.html","2c3eb07ac626085a4e52b220058fb7cf"],["/archives/2024/10/index.html","5543c97c1d608f2dbfc1117815bc3c2e"],["/archives/2024/index.html","a46112e05e4c357f4877184a1406ffd3"],["/archives/2025/01/index.html","d37ca8bb1a8545b9edfc465a9a5c3221"],["/archives/2025/02/index.html","ceb6ecebb2832983307395abf92b50b6"],["/archives/2025/08/index.html","2abab594b2ab86e2b8800fac403c9589"],["/archives/2025/index.html","ec90ecb2ddce77ab81eee59505a9dc0b"],["/archives/index.html","ec5d4a86096038fec835d8d595fb91b7"],["/categories/CSharp/CSharpBasics/index.html","4e18d8722cb5d7a0629108db7b793743"],["/categories/CSharp/CSharpToolClass/index.html","28dc0020696f190d42b5dc8b0c0c1eff"],["/categories/CSharp/index.html","65bb3b30793e845bd08fd3b12ecf32d2"],["/categories/CSharp/page/2/index.html","f0d74471546c6514f32b9ff04a13ff67"],["/categories/DesignPatterns/index.html","9f5d385df068c7805a483923cb5cd40a"],["/categories/DesignPatterns/page/2/index.html","c8091e21b75e8719659be1205e90f8c3"],["/categories/DesignPatterns/page/3/index.html","96f94aa7bc27d7d913e09b040740a2b3"],["/categories/Lua/index.html","07176821ab9ed93c8457282b73a178ca"],["/categories/Shoka/index.html","c56900def9ebc5d9295686979f303565"],["/categories/Unity/UnityBasics/index.html","1dc76071c1edea3c3dbdc845f545ff88"],["/categories/Unity/UnityFramework/index.html","33a3ba4aa544a0a27993126a8b3fc4d5"],["/categories/Unity/UnityGames/Unity2DGames/index.html","4d40377809cac5730f0a5fdd3edd591b"],["/categories/Unity/UnityGames/index.html","6b24ec147b47cb112474a918e1a67338"],["/categories/Unity/UnityShader/UnityShaderBasics/index.html","3c35995770c18bc2576fadc01754da9a"],["/categories/Unity/UnityShader/index.html","65946686857ff401e56f97b637d255a9"],["/categories/Unity/UnityToolClass/index.html","b8ec269ecd1c07660008407829861cdf"],["/categories/Unity/UnityToolClass/page/2/index.html","7c7e9cf2b8c88f46a6e41314f62690d6"],["/categories/Unity/index.html","e40ec3f592ea35a0d00eeef98afd8f57"],["/categories/Unity/page/2/index.html","09e5b76b830802ad1c8a4323e7a22ef7"],["/categories/Unity/page/3/index.html","40d1ec0aaf1a24d9c96840d2bf2ee7bb"],["/categories/index.html","0d8a29b74a99a2765b78c40f5b761479"],["/categories/正则表达式/index.html","9d7ea70bd7165e9e8ac08617bfc4fa0d"],["/categories/游戏设计/index.html","2223dc6a96630ff19a4acb26bf9b9c28"],["/categories/游戏设计/关卡设计/index.html","69234c41a56caf2a4f2bbc3620070d5e"],["/categories/计算机基础/index.html","b77bc0f71d7083618a0b28823d4d1e2e"],["/categories/配置文件/index.html","9a399487a7a205e60a7c41fd9f157e2d"],["/css/app.css","a25b6d2903f1df013499954cc8c42c73"],["/css/comment.css","9792f4f6a0d1990073bc9c08f1e8ee2f"],["/css/mermaid.css","72633d6954fc748b2e5d6230036db1c4"],["/friends/index.html","be2e75b5cde3eeac5f516ca3e4db849b"],["/games/index.html","a06a6bd3306185751a8d9ca926575bfe"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","450fb18bd4e8041c49ced8f9c6a27fbf"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","963522a511427c8366e6f29bc2b36ebd"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/paypal.png","3652ad75520a9765da95f1408c4d3981"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","a0cea8dd56607e6f4b5b5330a1669960"],["/index.html","01f394ddcf75e63213005cd7c235fa28"],["/js/app.js","d513957c1ad7ad885c51ad0f8e99267b"],["/page/2/index.html","3400882186ab706940e65e3214e09d2c"],["/page/3/index.html","98945ff8ed0cb82e86711da4252e89a9"],["/page/4/index.html","60a8ab27d4926878e7eb41831c66bd8e"],["/page/5/index.html","b3455c27d79a663774347c8ae3d02d29"],["/page/6/index.html","0aa2ea7487d030191f3af67d96a63a53"],["/page/7/index.html","f70105b37d456ef4f595797bc2a51155"],["/page/8/index.html","9c3671fbfa9b3781474b43f1eb561785"],["/sw-register.js","a716b337ef1509bcb54f7d01e345dfea"],["/tags/2DGames/index.html","a04b98ae8065569e9a31c89174fff37a"],["/tags/CSharp/index.html","30ada73ac65542e4fbb078d5e79cd619"],["/tags/CSharp/page/2/index.html","971c0b71d70ae41e847604cea2f675c2"],["/tags/ConfigurationFile/index.html","cfbdae9bbf0cf8e62e678c0b4aa56998"],["/tags/DesignPatterns/index.html","1c69379fb16e9247f797b8227de88050"],["/tags/DesignPatterns/page/2/index.html","7230646bc9cab0cc109b895598585bdb"],["/tags/DesignPatterns/page/3/index.html","dd4f200476e633aeeec6e403ac18b545"],["/tags/Lua/index.html","6af87a987d1c3ee24124f3dde306bc5c"],["/tags/Shoka/index.html","b7a3585476a5f2d3f622a01fda688e66"],["/tags/Unity/index.html","130a911859e4a6a9396506412d91a8d8"],["/tags/Unity/page/2/index.html","520692236278983dd9d42eb69213cfdd"],["/tags/Unity/page/3/index.html","f04632c17ff2d748a9ad7f3ea4635194"],["/tags/UnityShader/index.html","e27517bb5f74d3eee74e10995d6e57f0"],["/tags/UnityUI/index.html","35339a2f67243526776e292d97e30145"],["/tags/index.html","968c78c1ce8f77b6d650fb2cd761da91"],["/tags/操作系统/index.html","d2afd563ca95d5baa573ea3cf7e75650"],["/tags/数据结构/index.html","763b3f830ba10ca569922047ee961d1c"],["/tags/正则表达式/index.html","43283ef4601c4c522e1d67d9a33bb2ac"],["/tags/游戏设计/index.html","3a51869aeb2209adedfc00fc6ba0fb5b"],["/tags/配置文件/index.html","76bf84e1d5d07c1f324ae3debc7ffd53"],["/计算机基础/cover.jpg","8b14a18669706db1ba7aabf6262122df"]];
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
