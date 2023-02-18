import React, {useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const opacity = useState(new Animated.Value(0))[0];

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  function FadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }

  function FadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            opacity: opacity,
            width: 100,
            height: 150,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
            marginBottom: 9,

            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }}
          {...panResponder.panHandlers}
        />
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: '#997272',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 7,
          }}
          onPress={FadeInBall}>
          <Text>Fade in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: '#297272',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={FadeOutBall}>
          <Text>Fade out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
