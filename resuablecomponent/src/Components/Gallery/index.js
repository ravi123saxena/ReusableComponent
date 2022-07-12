
import React, { useState } from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


export default PickerImage = ({ 
    isFromCamera = false, 
    ImagePicCallBack, 
    isBase64, 
    cleanSingleImage, 
    isCropLast, 
    cropit, 
    circular = false, 
    chooseSingle, 
    chooseMultiple, 
    cleanMultipleImage 
  }) => {
  const [image, setImage] = useState({uri: '', width: 0, height: 0, mime: 'image/png', images: []})
  console.log('called',cropit) 
  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        setImage({uri: image.path, width: image.width, height: image.height, mime: image.mime, images: null})
        ImagePicCallBack(image)
      })
      .catch((e) => alert(e));
  }

  const pickSingleBase64 = (cropit) =>  {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    })
      .then((image) => {
        console.log('received base64 image');
        setImage({uri: `data:${image.mime};base64,` + image.data, width: image.width, height: image.height, mime: '', images: null})
        ImagePicCallBack(image)
      })
      .catch((e) => alert(e));
  }

  const cleanupImages = () => {
    ImagePicker.clean()
      .then(() => {
        console.log('removed tmp images from tmp directory');
      })
      .catch((e) => {
        alert(e);
      });
  }

  const cleanupSingleImage = () => {
    let image =
      image ||
      (image.images && image.images.length
        ? image.images[0]
        : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null)
      .then(() => {
        console.log(`removed tmp image ${image.uri} from tmp directory`);
      })
      .catch((e) => {
        alert(e);
      });
  }

  const cropLast = () =>  {
    if (!image) {
      return Alert.alert(
        'No image',
        'Before open cropping only, please select image'
      );
    }

    ImagePicker.openCropper({
      path: image.uri,
      width: 200,
      height: 200,
    })
      .then((image) => {
        console.log('received cropped image', image);
        setImage({uri: image.path, width: image.width, height: image.height, mime: image.mime, images: null})
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  const pickSingle = (cropit, circular = false) => {
    console.log('called galery')
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);
        setImage({uri: image.path, width: image.width, height: image.height, mime: image.mime, images: null})
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  const pickMultiple = () =>  {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    }).then((images) => {
        let multiImages = images.map((i) => {
          return {
            uri: i.path,
            width: i.width,
            height: i.height,
            mime: i.mime,
          };
        })
        setImage({...image, images: multiImages})
        ImagePicCallBack(image)
      })
      .catch((e) => alert(e));
  }

  return (
    <View>
      {chooseSingle && pickSingle(cropit, circular)}
      {chooseMultiple && pickMultiple()}
      {isCropLast && cropLast()}
      {cleanSingleImage && cleanupSingleImage()}
      {cleanMultipleImages && cleanupImages()}
      {isBase64 && pickSingleBase64(cropit)}
      {isFromCamera && pickSingleWithCamera()}
    </View>
  )


}

