import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    viewContainer: {
       width: '100%', 
       height: 0.5,
      backgroundColor: '#fff' 
    },
    innerContainer: {
      flexDirection: 'row', 
      height: '30%' 
    },
    modal: {
      backgroundColor: "#ffffff",
      borderRadius: 8,
      paddingBottom: 10,
      flex: 1
    },
    mainAlertView: {
      width: 0.5, 
      height: '100%', 
      backgroundColor: '#fff' 
    }
  });