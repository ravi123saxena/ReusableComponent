import React, { useState } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import { pickFiles } from '../Components/DocumentPicker';
import HeaderBar from '../Components/Header';


export default CompNineteen = ({ navigation }) => {
    const [result, setResult] = useState([])

    const PicFilesCallBack = (data) => {
        setResult(data)
        console.log('image data', data)
    }
    const PickSingleFiles = () => {
        pickFiles(false, PicFilesCallBack)
    }

    const pickMultipleFiles = () => {
        pickFiles(true, PicFilesCallBack)
    }

    const renderItem = () => {
        return result.map((file, index) => (
                <Text key={index.toString()} style={{ padding: 10, fontSize: 15, color: 'black',}}>
                    File Name: {file.name}
                    {'\n'}
                    Type: {file.type}
                    {'\n'}
                    File Size: {file.size}
                    {'\n'}
                    URI: {file.uri}
                    {'\n'}
                </Text>
        ))
    }


    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Pick Image'}
                handleLeftIconPress={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ flex: 1, top: 60, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button title='Pick Single File' onPress={() => PickSingleFiles()} />
                <View style={{ marginVertical: 10 }} />
                <Button title='Pick Multiple Files' onPress={() => pickMultipleFiles()} />
            </ScrollView>
            {result && renderItem()}
        </>
    );
};

