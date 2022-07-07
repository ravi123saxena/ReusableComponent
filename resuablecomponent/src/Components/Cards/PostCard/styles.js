

import { ScaledSheet } from 'react-native-size-matters';
export default styles = ScaledSheet.create({
    container: {
        margin: '10@ms',
        paddingTop:'5@ms',
        borderWidth:'2@ms',
        borderColor:"grey",
        borderRadius:'20@ms',
        backgroundColor:"white",
        elevation:'20@ms'
    },
    container1: {
        flexDirection: "row",
        justifyContent: "flex-start",
 
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical:'5@ms',
        borderTopWidth:1
    },
    container3:{
        marginTop:'10@ms',
        justifyContent:"space-between",
        alignItems:"center",
    },
    image1Viewstyle: {
        marginHorizontal: '10@ms',
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:'10@ms' 
    },
    image1style: {
        height: '60@ms',
        width: '60@ms',
        borderRadius:'30@ms'
    },
    viewImage: {
        height: '250@ms',
        width: "100%",
        backgroundColor: "pink",
        marginTop: '10@ms',
    },
    styleImage: {
        height: '250@ms',
        width: "100%",

    },
    title: {
        fontSize: '25@ms',
        fontWeight:"bold",
        color:"black"
    },
    dateStyle: {
        fontSize: '25@ms',
        fontWeight:"bold"

    },
    postTitle: {
        fontSize: '30@ms',
        fontWeight: "bold",
        marginVertical: '20@ms',
        marginHorizontal: '15@ms'
    },
    postDescription: {
        fontSize: '22@ms',
        fontWeight: "400",
        marginBottom: '20@ms',
        marginHorizontal: '15@ms'
    },
    iconStyle: {
        height: '20@ms',
        width: '20@ms'
    },
    c3text:{
        fontSize:'15@ms',
        fontWeight:"bold"
    },
    viewName:{
        paddingLeft:'5@ms',
        justifyContent:"center"
    }

})
