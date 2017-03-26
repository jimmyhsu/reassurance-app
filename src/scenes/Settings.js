import Expo from 'expo';
import React from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button,
} from 'react-native';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';

export default class SettingsScene extends React.Component {
    // static route = {
    //     navigationBar: {
    //         title: 'Reassurance',
    //     }
    // }

    render() {
        return (
                <Image
                    source={require('../img/scenes/15-Settings.png')}
                    style={styles.container}
                >
                    <View style={{left: -160, top: 12}}>
                        <Button
                            onPress={this._goToHome}
                            title="--"
                            color="#fff"
                            accessibilityLabel=""
                        />
                    </View>
                </Image>
        )
    }
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}
    _goToHome = () => {
        this.props.navigator.push('home');
    }

}

const styles = {
  container: {
    flex: 1,
    resizeMode: 'cover',
    // width: undefined,
    // height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};
