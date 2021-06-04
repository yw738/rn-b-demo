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
  Button
} from "react-native";
import dimensions from "Dimensions";
const { width, height } = dimensions.get("window");

export default class GuidePage extends Component {
  static navigationOptions = {
    headerTitle: "详情页666",
    headerStyle: {
      //标题栏样式
      backgroundColor: "red",
    },
    headerTintColor: "#fff", //标题文字和按钮颜色
    headerTitleStyle: {
      //标题文字样式
      fontWeight: "bold",
      color: "blue", //如果这里也写了标题文字的颜色，那么会覆盖headerTintColor的颜色，即标题为蓝色
    },
  };

  render(): any {
    return (
      <View style={style.bg}>
        <Text>xxxx</Text>
        <Text>www</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
    bg:{

    }
});
module.exports = GuidePage;
