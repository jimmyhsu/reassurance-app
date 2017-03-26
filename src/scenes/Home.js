import Expo from 'expo';
import React from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
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
                    source={require('../img/scenes/1-Login.png')}
                    style={styles.container}
                >
                    <TextInput
                      style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}
                      placeholder="Username"
                      onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                      style={{height: 40, width: 250, left: 80, top: 445, color: '#fff'}}
                      placeholder="Password"
                      onChangeText={(password) => this.setState({password})}
                      secureTextEntry={true}
                    />
                    <View style={{top: 475}}>
                        <Button
                            onPress={this._getStarted}
                            title="Get Started"
                            color="#fff"
                            accessibilityLabel="Get Started with Reassurance"
                        />
                    </View>
                </Image>
        )
    }
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}
    _goHome = () => {
        this.props.navigator.push('home');
    }

    _getStarted = () => {
        this.props.navigator.push('wt1');
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
