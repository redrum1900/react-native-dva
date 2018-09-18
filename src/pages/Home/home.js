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

const Home = ({ home, loading, dispatch, navigation }) => {
  const { count = '' } = home;
  const onPress = () => {
    dispatch({ type: 'home/count', payload: { num: 1 } });
  };

  const onPress2 = () => {
    dispatch({ type: 'home/count', payload: { num: -1 } });
  };

  const toHome2 = () => {
    navigation.navigate('Home2');
  };

  return (
    <View style={styles.container}>
      <Text>
        {count}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text>点我多</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
        <Text>点我少</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toHome2}>
        <Text>前往Home2</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default connect(mapStateToProps)(Home);

export default connect(({ home, loading }) => ({
  home,
  loading,
}))(Home);
