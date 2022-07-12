import ImagePicker from "react-native-image-crop-picker";

let imageData = {
  uri: '', 
  width: 0, 
  height: 0, 
  mime: 'image/png',
  images: []
}

export const pickSingleWithCamera = (cropping, ImagePicCallBack) => {
  imageData={}
  ImagePicker.openCamera({
    cropping: cropping,
    width: 200,
    height: 200,
    freeStyleCropEnabled: true,
    includeExif: true,
    mediaType: 'image/jpg',
  })
    .then((image) => {
      console.log('received image', image);
      imageData.uri = image.path;
      imageData.width = image.width;
      imageData.mime = image.mime;
      imageData.images = null;
      ImagePicCallBack(imageData)
    })
    .catch((e) => alert(e));
}

export const pickSingleBase64 = (cropit, ImagePicCallBack) =>  {
  imageData={}
  ImagePicker.openPicker({
    width: 300,
    height: 300,
    mediaType: 'image/jpg',
    cropping: cropit,
    includeBase64: true,
    includeExif: true,
  })
    .then((image) => {
      console.log('received base64 image');
      imageData.uri = `data:${image.mime};base64` + image.data;
      imageData.width = image.width;
      imageData.mime = '';
      imageData.images = null;
      ImagePicCallBack(imageData)
    })
    .catch((e) => alert(e));
}

export const cleanupImages = () => {
  ImagePicker.clean()
    .then(() => {
      console.log('removed tmp images from tmp directory');
    })
    .catch((e) => {
      alert(e);
    });
}

export const cleanupSingleImage = () => {
  let image =
    imageData ||
    (imageData.images && imageData.images.length
      ? imageData.images[0]
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

export const cropLast = (ImagePicCallBack) =>  {
  imageData={}
  if (!image) {
    return Alert.alert(
      'No image',
      'Before open cropping only, please select image'
    );
  }

  ImagePicker.openCropper({
    path: image.uri,
    width: 300,
    height: 300,
  })
    .then((image) => {
      console.log('received cropped image', image);
      imageData.uri = image.path;
      imageData.width = image.width;
      imageData.mime = image.mime;
      imageData.images = null;
      ImagePicCallBack(imageData)
    })
    .catch((e) => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
}

export const pickSingle = (cropit, circular = false, ImagePicCallBack) => {
  imageData={}
  ImagePicker.openPicker({
    width: 300,
    height: 300,
    cropping: cropit,
    freeStyleCropEnabled: true,
    cropperCircleOverlay: circular,
    forceJpg: true,
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
      imageData.uri = image.path;
      imageData.width = image.width;
      imageData.mime = image.mime;
      imageData.images = null;
      ImagePicCallBack(imageData)
    })
    .catch((e) => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
}

export const pickMultiple = (ImagePicCallBack) =>  {
  imageData={}
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
          width: 300,
          height: 300,
          mime: i.mime,
        };
      })
      imageData.images = multiImages;
      ImagePicCallBack(imageData)
    })
    .catch((e) => alert(e));
}
