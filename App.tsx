import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.root}>
      <Text>Hello</Text>
      <AntDesign name="stepforward" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
});
export default App;
