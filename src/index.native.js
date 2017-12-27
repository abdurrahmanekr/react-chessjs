import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import Pages from './screens/Pages.native';

const Navigator = StackNavigator({
    Pages: {
        screen: Pages,
    },
});

const App = () => (
    <View
        style={{ flex: 1 }}>
        <Navigator />
    </View>
);

AppRegistry.registerComponent('Chess', () => App);
