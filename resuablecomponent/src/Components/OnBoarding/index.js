import React from "react";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Modal from "react-native-modal";
import styles from './styles'

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../../assets/images/1.png"),
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../../assets/images/2.png"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../../assets/images/3.png"),
  },
];

export default class OnBoarding extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "73%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign: "center",
          color: "#b5b5b5",
          fontSize: 15,
          paddingHorizontal: 30
        }}>
          {item.text}
        </Text>
      </View>
    );
  };

  render() {
    return (
        <View style={styles.modal}>
          <View style={styles.innerContainer} />
          <AppIntroSlider
            renderItem={this._renderItem}
            data={slides}
            activeDotStyle={{
              backgroundColor: "#21465b",
              width: 30
            }}
          />
        </View>
    );
  }
}