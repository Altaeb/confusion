import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MainNavigator from '../navigation/MainNavigator'

class Main extends Component {


    render() {
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;