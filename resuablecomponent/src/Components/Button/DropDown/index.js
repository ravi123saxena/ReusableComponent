import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

export default CustomDropDown = ({ countries, onSelect }) => {
    return (
        <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={countries[0]}
            onSelect={(selectedItem, index) => onSelect(selectedItem, index)}
            defaultButtonText={'Select country'}
            buttonTextAfterSelection={(selectedItem) => {
                return selectedItem;
            }}
            rowTextForSelection={(item) => {
                return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
        />
    );
};