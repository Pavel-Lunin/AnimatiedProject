import React, {useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }}
        />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
