import React from "react";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from './styles'

export default onBoarding = ({ slides, onDone, visible}) => {
  const buttonLabel = (label) => {
    return (
      <View style={styles.buttonLabelContainer}>
        <Text style={styles.textLableContainer}>
          {label}
        </Text>
      </View>
    )
  }
   return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <Image
              source={item.image}
              style={styles.imageContainer}
              resizeMode="contain"
            />
            <Text style={styles.titleContainer}>
              {item.title}
            </Text>
            <Text style={styles.descriptionContainer}>
              {item.description}
            </Text>
          </View>
        )
      }}
      activeDotStyle={styles.dotStyle}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
      onDone={() => {
        onDone(true);
      }}
    />
  )
}