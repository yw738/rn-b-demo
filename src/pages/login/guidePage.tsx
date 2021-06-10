/**
 * 引导页
 */
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
  Button,
} from "react-native";
import dimensions from "Dimensions";
const { width, height } = dimensions.get("window");
import { setSpText, scaleSize } from "./../../util/px2pd";
const guidePage_banner = require("./../../images/guidePage_banner.png");
const logo = require("./../../images/logo.png");

export default class GuidePage extends Component {
  static navigationOptions = {
    tabBarVisible: false, // 隐藏底部导航栏
    header: null, //隐藏顶部导航栏
  };

  render(): any {
    return (
      <View style={style.bg}>
        <View style={style.top}>
          <Text
            style={{
              width: scaleSize(34),
              fontSize: scaleSize(36),
              color: "#333333",
            }}
          >
            让工业看到未来
          </Text>
        </View>
        <View>
          <Image style={style.banner} source={guidePage_banner} />
        </View>
        <View style={style.logoBox}>
          <Image style={style.logo} source={logo} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  top: {
    height: scaleSize(667),
    width: width,
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 2,
  },
  banner: {
    width: width,
    height: scaleSize(510),
  },
  bg: {
    borderColor: "red",
  },
  logoBox: {
    justifyContent: "center",
    height: scaleSize(100),
    alignItems: "center",
    width: width,
  },
  logo: {
    width: scaleSize(100),
    height: scaleSize(100),
  },
});
module.exports = GuidePage;
