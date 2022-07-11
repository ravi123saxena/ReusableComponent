import { StyleSheet } from "react-native";
export default styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
      },
      mainContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
      },
      innerContainer: {
        width: '100%', 
        height: 0.5, 
        backgroundColor: '#fff'
      },
      subInnerContainer: {
        width: 0.5, 
        height: '100%',
        backgroundColor: '#fff'
      },
      MainAlertView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1769aa", 
        height: 200,
        width: '90%',      
        borderColor: '#fff',
      },
      AlertTitle: {
        fontSize: 25,
        color: "#fff",
        textAlign: 'center',
        padding: 10,
        height: '28%'
      },
      AlertMessage: {
        fontSize: 22,
        color: "#fff",
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 10,
        height: '40%'
      },
      buttonStyle: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        marginTop: -5
      },
      alertContainer:{ 
        flexDirection: 'row', 
        height: '30%'
      },
      
    });