import { StyleSheet } from "react-native";

  export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    listview: {
      flex: 1,
    },
    sectionHeader: {
      marginBottom: 15,
      backgroundColor: "#007AFF",
      height: 30,
      justifyContent: "center",
    },
    sectionHeaderText: {
      color: "#FFF",
      fontSize: 18,
      alignSelf: "center",
    },
    rowContainer: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "center",
    },
    timeContainer: {
      minWidth: 45,
    },
    time: {
      textAlign: "right",
      color: '#000',
      overflow: "hidden",
    },
    circle: {
      width: 16,
      height: 16,
      borderRadius: 10,
      zIndex: 1,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    details: {
      borderLeftWidth: 2,
      flexDirection: "column",
      flex: 1,
    },
    detail: { 
        paddingTop: 10, 
        paddingBottom: 10 
    },
    description: {
      marginTop: 10,
    },
    separator: {
      height: 1,
      backgroundColor: "#aaa",
      marginTop: 10,
      marginBottom: 10,
    },
  });