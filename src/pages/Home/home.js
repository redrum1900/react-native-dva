import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from '../../dva';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = ({ home, loading, dispatch }) => {
  const { count } = home;
  debugger;
  const onPress = () => {
    dispatch({ type: 'home/addCount' });
  };

  return (
    <View style={styles.container}>
      <Text>
        {count}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text>点我试试</Text>
      </TouchableOpacity>

      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  );
};

// export default connect(mapStateToProps)(Home);

export default connect(({ home, loading }) => ({
  home,
  loading,
}))(Home);
