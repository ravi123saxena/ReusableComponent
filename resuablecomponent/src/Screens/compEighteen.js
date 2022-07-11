import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import HeaderBar from '../Components/Header';
import PickerImage from '../Components/Gallery'


export default CompEighteen = ({ navigation }) => {
    const [image, setImage] = useState({uri: '', width: 0, height: 0, mime: 'image/jpg', images: []})
    const ImagePicCallBack = (data) => {
        setImage(data)
    }
    const onPress = () => {
        console.log('called pick')
        return (
            <PickerImage
                cropit
                chooseSingle
                ImagePicCallBack={(Imagedata) => ImagePicCallBack(Imagedata)}
            />
        )
    }
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Post Card'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button title='Pick Image' onPress={onPress} />
                {image && <Image
                    style={{ width: image.width, height: image.height, resizeMode: 'contain' }}
                    source={image.uri}
                />}
            </View>
        </>
    );
};

