import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MenuNavigator from '../navigation/MenuNavigator'

class Main extends Component {


    render() {
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    }
}

export default Main;