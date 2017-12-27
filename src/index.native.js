import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import Home from './screens/Home.native';

const Navigator = StackNavigator({
    Home: {
        screen: Home,
    },
});

const App = () => (
    <View
        style={{ flex: 1 }}>
        <Navigator />
    </View>
);

AppRegistry.registerComponent('Chess', () => App);
