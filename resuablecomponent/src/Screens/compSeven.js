import React from 'react';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';
import HeaderBar from '../Components/Header';
import BallIndicator from '../Components/Loader/ball-indicator'; 
import BarIndicator from '../Components/Loader/bar-indicator';
import DotIndicator from '../Components/Loader/dot-indicator';
import MaterialIndicator from '../Components/Loader/material-indicator';
import PacmanIndicator from '../Components/Loader/pacman-indicator';
import PulseIndicator from '../Components/Loader/pulse-indicator';
import SkypeIndicator from '../Components/Loader/skype-indicator';
import UIActivityIndicator from '../Components/Loader/ui-activity-indicator';
import WaveIndicator from '../Components/Loader/wave-indicator';


Platform.select({
  ios: () => StatusBar.setBarStyle('light-content'),
  android: () => StatusBar.setBackgroundColor('#01579B'),
})();

export default CompSeven = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Loading'}
                handleLeftIconPress={() => navigation.goBack()} />
                <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.flex}>
              <BallIndicator color='white' animationDuration={800} />
            </View>

            {/* <View style={styles.flex}>
              <PulseIndicator color='white' />
            </View> */}

            {/* <View style={styles.flex}>
              <SkypeIndicator color='white' />
            </View> */}
          </View>

          {/* <View style={styles.row}>
            <View style={styles.flex}>
              <WaveIndicator color='white' />
            </View>

            <View style={styles.flex}>
              <WaveIndicator color='white' waveMode='outline' />
            </View>

            <View style={styles.flex}>
              <WaveIndicator color='white' count={2} waveFactor={0.4} />
            </View>
          </View> */}

          <View style={styles.row}>
            <View style={styles.flex}>
              <UIActivityIndicator color='white' />
            </View>

            {/* <View style={styles.flex}>
              <MaterialIndicator color='white' />
            </View> */}

            {/* <View style={styles.flex}>
              <PacmanIndicator color='white' />
            </View> */}
          </View>

          {/* <View style={styles.row}>
            <View style={styles.flex}>
              <BarIndicator color='white' count={5} />
            </View>
          </View> */}

          <View style={styles.row}>
            <View style={styles.flex}>
              <DotIndicator
                count={3}
                color='white'
                animationDuration={800}
              />
            </View>

            {/* <View style={styles.flex}>
              <DotIndicator
                style={styles.reverse}
                count={3}
                color='white'
                animationDuration={800}
              />
            </View> */}
          </View>
        </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#01579B',
      padding: 20,
    },
  
    row: {
      flex: 1,
      flexDirection: 'row',
    },
  
    reverse: {
      transform: [{
        rotate: '180deg',
      }],
    },
  
    flex: {
      flex: 1,
    },
  });