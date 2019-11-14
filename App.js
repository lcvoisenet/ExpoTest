import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';

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
      <Text>hello</Text>
      <Button title="Show alert" onPress={() => Alert.alert('Hello')} />
    </View>
  );
}
