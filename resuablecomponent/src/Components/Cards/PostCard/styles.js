
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 10,
        paddingTop:5,
        borderWidth: 20,
        borderColor:"grey",
        borderRadius:20,
        backgroundColor:"white",
        elevation: 20,
        marginVertical: 5,
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    innerSubContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 5,
        borderTopWidth:1
    },
    iconContainer:{
        marginTop:10,
        justifyContent:"space-between",
        alignItems:"center",
    },
    imageContainerViewstyle: {
        marginHorizontal: 10,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10 
    },
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    viewImage: {
        height: 250,
        width: "100%",
        backgroundColor: "red",
        marginTop: 10,
    },
    styleImage: {
        height: 250,
        width: "100%",

    },
    title: {
        fontSize: 25,
        fontWeight:"bold",
        color:"black"
    },
    dateStyle: {
        fontSize: 25,
        fontWeight:"bold"

    },
    postTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
        marginHorizontal: 15
    },
    postDescription: {
        fontSize: 18,
        marginBottom: 20,
        marginHorizontal: 15
    },
    iconStyle: {
        height: 20,
        width: 20
    },
    likeText:{
        fontSize: 15,
        fontWeight:"bold"
    },
    viewName:{
        paddingLeft:5,
        justifyContent:"center"
    }

})
