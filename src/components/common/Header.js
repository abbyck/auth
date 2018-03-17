import React from 'react';
import { Text, View } from 'react-native';


// Component
const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>{ props.headerText }</Text>
        </View>
    );
}

// Styles
const styles = {
    viewStyle: {
        backgroundColor : '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 3,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 30
    }
};


export { Header };