import React from 'react';
import { Button } from 'react-native';
import HeaderBar from '../Components/Header';
import AlertComponentWithTitle from '../Components/Alert/AlertComponentWithTitle';
import AlertComponent from '../Components/Alert/AlertComponent';

export default CompFifteen = ({ navigation }) => {
    const showAlertWithTitle = () => {
        return (
            AlertComponentWithTitle(
                'Title',
                'This is Message',
                'cancel',
                () => console.log('negative button'), // or null
                'Proceed',
                () => console.log('Positive button'),
            ))
    }
    const showAlert = () => {
        return (
             AlertComponent(
                'This is alert message',
                () => console.log('handle cancel'),
                () => console.log('handle delete'),
                'Do you want to delete',
                ['Ok', 'Cancel']
           )
        )
    }
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Alert'}
                handleLeftIconPress={() => navigation.goBack()} />
            <Button title='Show Alert' onPress={showAlert} />
            <Button title='Show Alert With Title' onPress={showAlertWithTitle} />
        </>
    );
};

