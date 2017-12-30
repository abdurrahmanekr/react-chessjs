import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import Pages from './screens/Pages.native';
import NewGame from './screens/NewGame.native';
import Loading from './screens/Loading.native';
import Game from './screens/Game.native';

const Navigator = StackNavigator({
    Pages: {
        screen: Pages,
    },
    NewGame: {
        screen: NewGame,
    },
    Loading: {
        screen: Loading,
    },
    Game: {
        screen: Game,
    }
});

const App = () => (
    <View
        style={{ flex: 1 }}>
        <Navigator />
    </View>
);

AppRegistry.registerComponent('Chess', () => App);

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
