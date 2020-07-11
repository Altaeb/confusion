import React, { Component } from 'react';
import { View, Platform, NetInfo, ToastAndroid } from 'react-native';
import MainNavigator from '../navigation/MainNavigator';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})


class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();

    NetInfo.getConnectionInfo()
      .then((ConnectionInfo) => {
        ToastAndroid.show('Initial Network Connectivity Type: '
          + ConnectionInfo.type + ', effectiveType: ' + ConnectionInfo.effectiveType,
          ToastAndroid.LONG)
      });

    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = (connectionInfo) => {
    switch (connectionInfo.type) {
      case 'none':
        ToastAndroid.show('You are now offline', ToastAndroid.LONG);
        break;
      case 'wifi':
        ToastAndroid.show('You are now connected to wifi', ToastAndroid.LONG);
        break;
      case 'cellular':
        ToastAndroid.show('You are now connected to celluler', ToastAndroid.LONG);
        break;
      case 'unknown':
        ToastAndroid.show('You now have an unknown connection ', ToastAndroid.LONG);
        break;
      default:
        break;
    }
  }



  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);