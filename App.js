import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';

import Home from './src/scenes/Home';
import Router from './src/navigation/Router';

export default class App extends React.Component {

    render() {
        return (
            <NavigationProvider router={Router}>
                <StackNavigation initialRoute="home" />
            </NavigationProvider>
        );
    }

}

Expo.registerRootComponent(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
