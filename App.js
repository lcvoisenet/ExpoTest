import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Click for Pop up"
        onPress={() => {
          Alert.alert('Hey new Popup');
        }}
      />
    </View>
  );
}
