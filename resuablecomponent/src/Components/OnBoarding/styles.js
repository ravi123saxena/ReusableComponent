import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../constants/constants";

export default styles = StyleSheet.create({
    buttonLabelContainer: {
      padding: 12
    },
    textLableContainer: {
      color: '#072F4A',
      fontWeight: '600',
      fontSize: 22,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 15,
      paddingTop: 100,
    },
    imageContainer: {
      width: DEVICE_WIDTH - 80,
      height: 400,
    },
    titleContainer: {
      fontWeight: 'bold',
      color: '#072F4A',
      fontSize: 16,
    },
    descriptionContainer: {
      textAlign: 'center',
      paddingTop: 5,
      color: '#072F4A',
    },
    dotStyle: {
      backgroundColor: '#f52d56',
      width: 30,
    }
  });