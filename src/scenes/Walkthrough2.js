import Expo from 'expo';
import React from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button,
} from 'react-native';

export default class Walkthrough2Scene extends React.Component {
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
                    source={require('../img/scenes/3-Walkthrough2.png')}
                    style={styles.container}
                >
                
                    <View style={{top: 530}}>
                        <Button
                            onPress={this._account}
                            title="Continue"
                            color="#fff"
                            accessibilityLabel="Continue"
                        />
                    </View>
                </Image>
        )
    }
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}

    _account = () => {
        this.props.navigator.push('account');
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
