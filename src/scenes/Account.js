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

export default class AccountScene extends React.Component {
    // static route = {
    //     navigationBar: {
    //         title: 'Reassurance',
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
                <Image
                    source={require('../img/scenes/13-History.png')}
                    style={styles.container}
                >
                    <View style={{left: -160, top: 13}}>
                        <Button
                            onPress={this._goToSettings}
                            title="--"
                            color="#fff"
                            accessibilityLabel=""
                        />
                    </View>
                </Image>
        )
    }
    // <TextInput
    //   style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}
    //   placeholder="Username"
    //   onChangeText={(username) => this.setState({username})}
    // />
    // <TextInput
    //   style={{height: 40, width: 250, left: 80, top: 445, color: '#fff'}}
    //   placeholder="Password"
    //   onChangeText={(password) => this.setState({password})}
    //   secureTextEntry={true}
    // />
    // <View style={{top: 475}}>
    //     <Button
    //         onPress={this._getStarted}
    //         title="Get Started"
    //         color="#fff"
    //         accessibilityLabel="Get Started with Reassurance"
    //     />
    // </View>
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}

    _goToSettings = () => {
        this.props.navigator.push('settings');
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
