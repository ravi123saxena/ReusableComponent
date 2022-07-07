
 import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
 import { StyleSheet } from 'react-native';

 export default styles = StyleSheet.create({
    container:{
        margin:moderateScale(20),
        borderRadius:moderateScale(25),
        paddingBottom:verticalScale(30),
        elevation:30,
    },
   imageStyle: {
     height:verticalScale(250),
     width:moderateScale(250),
     borderRadius:verticalScale(250),
     marginVertical:verticalScale(30),
     marginHorizontal: moderateScale(20)
   },
   imageView:{
        justifyContent:"center",
        alignItems:"center"
   },
   text1_view:{
        paddingVertical:verticalScale(15),
        justifyContent:"center",
        alignItems:"center",
   },
   text1_style:{
        fontSize: scale(40),
        fontWeight:"bold",
        //color:"white"
   },
   text2_view:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:verticalScale(50),
        backgroundColor:"white",
        width:"75%",
        paddingVertical:verticalScale(10),
        borderWidth: moderateScale(4,0.2),        // light
          // light
    },
    text2_view2:{
        justifyContent:"center",
        alignItems:"center",
        padding:moderateScale(10),
        paddingBottom:verticalScale(25), 
        
    },
    text2_style:{
        fontSize: scale(40),
        fontWeight:"bold",
        //color:"#1234e0",
    },
 });
 