import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

Loading.navigationOptions = {
    title: 'Loading',
    // header: null,
}
