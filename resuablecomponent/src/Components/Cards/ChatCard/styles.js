// import { ScaledSheet } from 'react-native-size-matters';

// const styles = ScaledSheet.create({
//     container: {
//       flexDirection:"row",
//       justifyContent:"flex-start",
//       alignItems: "flex-start",
//       paddingHorizontal:'20@s',
//       paddingTop: '20@s',
//       paddingVertical:'10@s',
//       height: '80@s',
//       backgroundColor:"#abb3af", // grey
//       borderRadius: '10@s',
//       margin: '10@s',
//       elevation: '20@s' ,// android prop
//       // IOS Props
//       shadowColor: "#171617",
//       shadowOffset: {width:'10@s',height:'10@s'},
//       shadowOpacity:'0.9@s'
//     },
//     imageStyle:{
//       height: '40@s',
//       width:'40@s',
//       borderRadius:'50@s'
//     },
//     innerContainer:{
//       flex:1,
//       flexDirection:"row",
//       justifyContent:"space-between",
//       alignItems:"center",
//       paddingHorizontal: '15@s'
//     },
    
//     textTitle:{
//       width:"100%",
//       fontWeight:"900@s",
//       color:"#141414",
//       fontSize: '16@s'
//     } ,
//     textSubTitle:{
//       width:"100%",
//       fontWeight:"600@s",
//       color:"#807c7e",
//       fontSize:'10@s'
//     },
    
//     viewTitles:{
//       flex: 9
//     },
//     viewNum:{
//       flex:1,
//       justifyContent:"center",
//       alignItems:"center",
//       backgroundColor:"#d10881", // dark pink
//       borderRadius:'25@s',
//       height:'22@s'
//     },
//     messageNum:{
//       color:"white",
//       fontSize:'12@s',
//       fontWeight: "normal"
//     },
//   });
  
//   export default styles;


import { StyleSheet } from "react-native";
import { scale, verticalScale , moderateScale } from 'react-native-size-matters';

export default styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems: "flex-start",
    paddingHorizontal:moderateScale(20),
    paddingTop: verticalScale(20),
    paddingVertical:10,
    height: verticalScale(80),
    backgroundColor:"#fff", // grey
    borderRadius: moderateScale(10),
    margin: moderateScale(10),
    elevation: 20 ,// android prop
    // IOS Props
    shadowColor: "#171617",
    shadowOffset: {width:10,height:10},
    shadowOpacity:0.9
  },
  imageStyle:{
    height: verticalScale(40),
    width:moderateScale(40),
    borderRadius:moderateScale(50)
  },
  innerContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal: moderateScale(15)
  },
  
  textTitle:{
    width:"100%",
    fontWeight:"900",
    color:"#141414",
    fontSize: scale(16)
  } ,
  textSubTitle:{
    width:"100%",
    fontSize: 18,
    color:"#807c7e",
    fontSize:scale(10)
  },
  
  viewTitles:{
    flex:9
  },
  viewNum:{
    //flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth: 1,
    borderColor:"red", // dark pink
    width: moderateScale(35),
    height: verticalScale(35),
    borderRadius:moderateScale(35),
  },
  messageNum:{
    color:"#000",
    fontSize:scale(12),
    fontWeight: "normal"
  },
});
