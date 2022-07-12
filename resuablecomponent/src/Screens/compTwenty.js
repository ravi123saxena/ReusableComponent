import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    PermissionsAndroid,
  } from 'react-native';
import { downloadPdfFile } from '../Components/DownLoadPDF';
   
import HeaderBar from '../Components/Header';

const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';
 

export default CompTwenty = ({ navigation }) => {

    const fileDownloadCallback = (result) => {
        if(result) {
            console.log(result)
            alert('File Downloaded Successfully.');
        }
        
    }   

    const checkPermission = async () => {
    
        // Function to check the platform
        // If Platform is Android then check for permissions.
     
        if (Platform.OS === 'ios') {
          downloadPdfFile(fileUrl, fileDownloadCallback);
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Storage Permission Required',
                message:
                  'Application needs access to your storage to download File',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              // Start downloading
              downloadPdfFile(fileUrl, fileDownloadCallback);
              console.log('Storage Permission Granted.');
            } else {
              // If permission denied then show alert
              Alert.alert('Error','Storage Permission Not Granted');
            }
          } catch (err) {
            // To handle permission related exception
            console.log("++++"+err);
          }
        }
      };
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Image Card'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>
                React Native File Download Example
                </Text>
            
            </View>
            <Image
                source={{
                uri: fileUrl,
                }}
                style={{
                width: '100%',
                height: 100,
                resizeMode: 'contain',
                margin: 5
                }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={checkPermission}>
                <Text style={styles.text}>
                Download File
                </Text>
            </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
    },
    button: {
      width: '80%',
      padding: 10,
      backgroundColor: 'blue',
      margin: 10,
    },
    
  });