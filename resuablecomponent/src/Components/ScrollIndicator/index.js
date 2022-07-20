import React, { useState, useRef } from 'react';
import { ScrollView,  Text, View, Animated } from 'react-native';
import { style } from '../TextInput/Styles';
import styles from './styles';
export default CustomScrollIndicator = ({title, data}) => {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp'
  });

  return (
    <>
      <View style={styles.container}>
          <View
            style={styles.scrollContainer}
          >
            <ScrollView
              contentContainerStyle={{ paddingRight: 14 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onContentSizeChange={(_,height) => {
                setCompleteScrollBarHeight(height);
              }}
              onLayout={({
                nativeEvent: {
                  layout: { height }
                }
              }) => {
                setVisibleScrollBarHeight(height);
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                { useNativeDriver: false }
              )}
            >
              <Text
                style={styles.scrollDataTitle}
              >
                {data.title}
              </Text>
              <Text
                style={styles.description}
              >
                {data.description}
              </Text>
            </ScrollView>
            <View
              style={styles.animContainer}
            >
              <Animated.View
                style={{
                  width: 6,
                  borderRadius: 8,
                  backgroundColor: '#bc6ff1',
                  height: scrollIndicatorSize,
                  transform: [{ translateY: scrollIndicatorPosition }]
                }}
              />
            </View>
          </View>
        {/* <View style={{ flex: 4 }} /> */}
      </View>
    </>
  );
}