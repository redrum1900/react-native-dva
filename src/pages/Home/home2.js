import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

function mapStateToProps(state) {
  return {
    count: state.home.count,
    loading: state.loading,
  };
}

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    count: PropTypes.number,
    loading: PropTypes.object,
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    navigation: {},
    count: 0,
    loading: {},
    dispatch: () => {},
  };
  componentWillMount() {}

  onPress = () => {
    this.props.dispatch({ type: 'home/count', payload: { num: 1 } });
  };

  onPress2 = () => {
    this.props.dispatch({ type: 'home/count', payload: { num: -1 } });
  };

  backHome1 = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    /* loading 为异步加载状态 */
    const { count, loading } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          {count}
        </Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text>点我多</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress2}>
          <Text>点我少</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.backHome1}>
          <Text>回到Home1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Home);
