import Expo from 'expo';
import React from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button,
} from 'react-native';

export default class Walkthrough1Scene extends React.Component {
    // static route = {
    //     navigationBar: {
    //         title: 'Reassurance',
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            deposit: '',
            autoWithdraw: ''
        };
    }

    render() {
        return (
                <Image
                    source={require('../img/scenes/3-Walkthrough1.png')}
                    style={styles.container}
                >

                    <View style={{top: 530}}>
                        <Button
                            onPress={this._goToWalkthrough2}
                            title="Continue"
                            color="#fff"
                            accessibilityLabel="Continue"
                        />
                    </View>
                </Image>
        )
    }
    // <TextInput
    //   style={{height: 40, width: 250, left: 120, top: 150, color: '#fff'}}
    //   placeholder="asdasd"
    //   onChangeText={(deposit) => this.setState({deposit})}
    // />
    // <TextInput
    //   style={{height: 40, width: 250, left: 120, top: 300, color: '#fff'}}
    //   placeholder="asdasd"
    //   onChangeText={(autoWithdraw) => this.setState({autoWithdraw})}
    // />
    // <Text onPress={this._handlePress}>HomeScreen!</Text>
    // style={{height: 40, width: 250, left: 80, top: 415, color: '#fff'}}

    _goToWalkthrough2 = () => {
        this.props.navigator.push('wt2');
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
