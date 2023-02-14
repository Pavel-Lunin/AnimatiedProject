import React, {useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const leftValue = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 400,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            // left: leftValue,
            // opacity: leftValue,
            transform: [{translateX: leftValue}],
            width: 100,
            height: 150,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }}
        />
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: '#697272',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={moveBall}>
          <Text>Move Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
