import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  Image,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Divider, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import dimensions from "Dimensions";
const { width, height } = dimensions.get("window");
import TabNavigator from "react-native-tab-navigator";
import GuidePage from './login/guidePage.tsx'


import Home from "./home";
import My from "./my";
import Find from "./find";
/*看到生命周期*/
export default class main extends Component {
  //es6 写法。getInitalState()初始化state 已被淘汰。用constructor代替 。
  constructor(props) {
    super(props); //执行父类的方法
    this.state = {
      tit: "测试",
      data: [],
      isLoading: true,
      num: 0,
      selectedTab: "guidePage",
      tabList: [
        {
          title: "首页",
          icon: require("./../images/icon/home.png"),
          tabName: "Home",
          component: Home,
        },
        {
          title: "发现",
          icon: require("./../images/icon/find.png"),
          tabName: "Find",
          component: Find,
        },
        {
          title: "我的",
          icon: require("./../images/icon/my.png"),
          tabName: "My",
          component: My,
        },
      ],
    };
  }
  isShow = false;
  componentDidMount(){
      setTimeout(()=>{
        //   this.state.isShow = true

      },1000)
  }
  render() {
    return (
      <View>
        {!this.state.isShow&&<GuidePage/>}
        {this.state.isShow&&<TabNavigator>{this.init()}</TabNavigator>}
      </View>
    );
  }
  init() {
    let that = this;
    let arr = this.state.tabList;
    let arr2 = [];
    arr.forEach((item, i) => {
      arr2.push(
        <TabNavigator.Item
          key={i}
          renderIcon={() => <Image source={item.icon} />}
          selected={that.state.selectedTab === item.tabName}
          selectedTitleStyle={{ color: "#007aff" }} //设置tab标题颜色
          title={item.title}
          hidesTabTouch={false}
          onPress={() => {
            that.setState({ selectedTab: item.tabName });
          }}
        >
          <item.component navigation={this.props.navigation} />
        </TabNavigator.Item>
      );
    });
    return arr2;
  }
}

const style = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "#ccc",
  },
  sec: {},
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
    borderWidth: 2,
    borderColor: "red",
  },
  flex: {
    width: "100%",
    height: 40,
    // display:'flex',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex1: {
    // flex:1,
    borderColor: "red",
    borderWidth: 2,
  },
});
module.exports = main;
