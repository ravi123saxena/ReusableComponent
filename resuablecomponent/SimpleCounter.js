import React, { useState } from 'react'
import {View, Text} from 'react-native'
import { Button } from 'react-native-paper'

const SimpleCounter = () => {
    const [count, setCount] = useState(0)

    buttonPressed = () => {
        setCount(count + 1)
    }

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>button count: {count} </Text>
            <Button onPress = {buttonPressed} title = 'Increase'/>
        </View>
    )
}

export default SimpleCounter;