import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons'; // icon kütüphanesi

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.tabIcons = [];
    }

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue({ value, }) {
        this.tabIcons.forEach((icon, i) => {
            const progress = Math.min(1, Math.abs(value - i))
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
        });
    }

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 255 + (50 - 255) * progress;
        const green = 255 + (50 - 255) * progress;
        const blue = 255 + (50 - 255) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    render() {
        return <View style={[styles.tabs, this.props.style, ]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity key={tab}
                onPress={() => this.props.goToPage(i)}
                style={styles.tab}>
                    <Icon
                        name={tab}
                        size={30}
                        color={this.props.activeTab === i ? 'rgb(50,50,50)' : 'rgb(50,50,50)'}
                        ref={(icon) => { this.tabIcons[i] = icon; }}
                    />
                </TouchableOpacity>;
            })}
        </View>;
    }
};

TabBar.propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
};

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        backgroundColor: '#ff843c',
        flexDirection: 'row',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        ...Platform.select({
            android: {
                paddingTop: 5,
                height: 50
            },
            ios: {
                paddingTop: 22,
                height: 64
            },
        })
    }
});
