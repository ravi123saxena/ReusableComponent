import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CompOne from '../Screens/compOne';
import navigationStrings from '../constants/navigationStrings';
import CompTwo from '../Screens/compTwo';
import Home from '../Screens/home';
import CompThree from '../Screens/compThree';
import CompFour from '../Screens/compFour';
import CompFive from '../Screens/compFive'
import CompSix from '../Screens/compSix'
import CompSeven from '../Screens/compSeven';
import CompEight from '../Screens/compEight';
import CompNine from '../Screens/compNine';
import CompTen from '../Screens/compTen';
import CompEleven from '../Screens/compEleven';
import CompTwelve from '../Screens/compTwelve';
import CompThirteen from '../Screens/compThirteen';
import CompFourteen from '../Screens/compFourteen';
import CompFifteen from '../Screens/compFifteen';
import CompSixteen from '../Screens/compSixteen';
import CompSeventeen from '../Screens/compSeventeen.js';

const Stack = createNativeStackNavigator();

export default Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={navigationStrings.HOME} screenOptions={{headerShown: false}} >
                <Stack.Screen name={navigationStrings.HOME} component={Home} />
                <Stack.Screen name={navigationStrings.COMP_ONE} component={CompOne} />
                <Stack.Screen name={navigationStrings.COMP_TWO} component={CompTwo} />
                <Stack.Screen name={navigationStrings.COMP_THREE} component={CompThree} />
                <Stack.Screen name={navigationStrings.COMP_FOUR} component={CompFour} />
                <Stack.Screen name={navigationStrings.COMP_FIVE} component={CompFive} />
                <Stack.Screen name={navigationStrings.COMP_SIX} component={CompSix} />
                <Stack.Screen name={navigationStrings.COMP_SEVEN} component={CompSeven} />
                <Stack.Screen name={navigationStrings.COMP_EIGHT} component={CompEight} />
                <Stack.Screen name={navigationStrings.COMP_NINE} component={CompNine} />
                <Stack.Screen name={navigationStrings.COMP_TEN} component={CompTen} />
                <Stack.Screen name={navigationStrings.COMP_ELEVEN} component={CompEleven} />
                <Stack.Screen name={navigationStrings.COMP_TWELVE} component={CompTwelve} />
                <Stack.Screen name={navigationStrings.COMP_THIRTEEN} component={CompThirteen} />
                <Stack.Screen name={navigationStrings.COMP_FOURTEEN} component={CompFourteen} />
                <Stack.Screen name={navigationStrings.COMP_FIFTEEN} component={CompFifteen} />
                <Stack.Screen name={navigationStrings.COMP_SIXTEEN} component={CompSixteen} />
                <Stack.Screen name={navigationStrings.COMP_SEVENTEEN} component={CompSeventeen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

