import Expo from 'expo';
import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            title: 'Reassurance',
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text onPress={this._handlePress}>HomeScreen!</Text>
            </View>
        )
    }

    _handlePress = () => {
        this.props.navigator.push('home');
    }

}
