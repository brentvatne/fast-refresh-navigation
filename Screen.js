import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class MyScreen extends React.Component {
  static navigationOptions = {
    title: 'This will *not* update with fast refresh',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This will update with fast refresh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
