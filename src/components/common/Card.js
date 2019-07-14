import React from 'react';
import { View, Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
const styles = {
    containerStyle: {
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        justifycontent: "flex-start",
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative',
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        // marginTop:10,
        shadowColor: "#000",

        width: deviceWidth - 20,



    }
};

export default Card;
