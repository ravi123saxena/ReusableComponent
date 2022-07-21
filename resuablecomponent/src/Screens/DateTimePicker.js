import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "../Components/Header";
import { View, Text, StyleSheet } from "react-native";
import DatePicker from "../Components/DatePicker";

export default DateTimePicker = ({ navigation, route }) => {
     const [date, setDate] = useState('')
     const [time, setTime] = useState('20:00')

    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Custom Date Picker'}
                handleLeftIconPress={() => navigation.goBack()} />

            <View style={styles.container}>
                <DatePicker
                    style={{ width: 200, borderWidth: 1, borderColor: '#000', marginVertical: 10, borderRadius: 10 }}
                    date={date}
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 10,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                        }
                        
                    }}
                    mode="date"
                    placeholder="placeholder"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconSource={require('../assets/images/google_calendar.png')}
                    onDateChange={(date) => setDate(date)}
                />
                <Text style={styles.instructions}>date: {date}</Text>
                <DatePicker
                    style={{ width: 200, borderWidth: 1, borderColor: '#000', marginVertical: 10, borderRadius: 10 }}
                    date={time}
                    mode="time"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={10}
                    onDateChange={(time) => setTime(time)}
                />
                <Text style={styles.instructions}>time: {time}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        margin: 20,
        backgroundColor: '#F5FCFF'

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'left',
        color: '#000',
        marginBottom: 10
    }
});
