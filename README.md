# react-native-init

react-native   -v 0.59.8

yarn

react-native run-android

请确保环境配置完成再运行，否则会报错。前置环境包括javaJDK，node等，具体情况参考官方网站。

参考链接：

[官方文档](https://reactnative.cn/docs/getting-started/)

[react-navigation 参照](https://blog.csdn.net/u011272795/article/details/80915040)

[react-native-tab-navigation 参照](https://www.jianshu.com/p/e068d017ad4d)

[navigationOptions参数配置](https://blog.csdn.net/ahou2468/article/details/87625428)

[gradle包国内镜像下载](https://mirrors.cloud.tencent.com/gradle/)



# 2020-1-10

tips:这个项目是可以跑起来的。如果跑不起来：

1、请检查前置环境是否安装。

2、node 版本是否过低，不推荐使用版本为 12.14.0 的 node（跑不起来），推荐使用版本为 12.10.0 的 node。

3、更改 android=>gradle.properties 里面的密钥 MYAPP_RELEASE_STORE_FILE、MYAPP_RELEASE_KEY_ALIAS、MYAPP_RELEASE_STORE_PASSWORD、MYAPP_RELEASE_KEY_PASSWORD ，改为你自己的就可以了。（官网查一下，生成密钥的方式就 OK 了）;

4、网速如果比较慢的话，需要到网上下载有对应的 gradle 版本包。本项目用的是“gradle-6.3-all”。[gradle包国内镜像下载](https://mirrors.cloud.tencent.com/gradle/)

# 2021-06-04

配置 ts
1、运行 yarn tsc 对 TypeScript 文件进行类型检查。
