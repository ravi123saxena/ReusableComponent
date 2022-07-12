import DocumentPicker from 'react-native-document-picker';

export const pickFiles = async (multiple, pickFilesCallback) => {
    try {
        const results = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
            allowMultiSelection: multiple,
            presentationStyle: 'fullScreen',
        });
        pickFilesCallback(results)
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err;
        }
    }
}