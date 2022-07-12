import React, { useState } from 'react';
import { View, Image, Button, FlatList } from 'react-native';
import HeaderBar from '../Components/Header';
import { pickSingleWithCamera, pickSingle, pickMultiple } from '../Components/Gallery'


export default CompEighteen = ({ navigation }) => {
    const [image, setImage] = useState({ uri: '', width: 0, height: 0, mime: 'image/jpg', images: [] })
    const ImagePicCallBack = (data) => {
        setImage(data)
    }
    const PickImageFromGalery = () => {
        pickSingle(true, false, ImagePicCallBack)
    }

    const PickImageFromCamera = () => {
        pickSingleWithCamera(true, ImagePicCallBack)
    }

    const PickMultipleImages = () => {
        pickMultiple(ImagePicCallBack)
    }

    const renderItem = ({ item }) => {
        console.log('item', item)
        return (
            <View style={{marginVertical: 10}}>
                <Image
                    style={{ width: item.width, height: item.width, resizeMode: 'contain' }}
                    source={{ uri: item.uri }} />

            </View>)
    }

        return (
            <>
                <HeaderBar
                    leftIconName={'chevron-left'}
                    text={'Pick Image'}
                    handleLeftIconPress={() => navigation.goBack()} />
                <View style={{ flex: 1, top: 60, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Button title='Pick Image From Galary' onPress={() => PickImageFromGalery()} />
                    <View style={{ marginVertical: 20 }} />
                    <Button title='Pick Image from Camera' onPress={() => PickImageFromCamera()} />
                    <View style={{ marginTop: 20 }} />
                    <Button title='Pick Multiple Image from Camera' onPress={() => PickMultipleImages()} />
                    {image && image.uri && <Image
                        style={{ top: 20, width: image.width, height: image.width, resizeMode: 'contain' }}
                        source={{ uri: image.uri }}
                    />}
                    <FlatList
                        data={image.images}
                        renderItem={renderItem}
                        keyExtractor={item => item.uri}
                    />
                </View>
            </>
        );
    };

