import React, { Component } from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import Card from './common/Card';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
class CardDetails extends Component {
    static navigationOptions = {
        title: 'CardDetails',
        headerMode: 'none'
    };
    render() {
        return (
            <View style={{ margin: 6 }}>
                <Card>
                    <Image source={{ uri: this.props.navigation.state.params.url }} style={{
                        height: deviceWidth - 30, width: deviceWidth - 30,

                        borderRadius: 10, borderWidth: 1, borderColor: 'gray',
                        alignSelf: "center",
                    }} />

                    <Text style={{ fontSize: 20,marginTop:10 }}>
                        {this.props.navigation.state.params.title}
                    </Text>
                    <Text style={{ flexWrap: 'wrap', fontSize: 13,marginTop:10  }}>
                        {this.props.navigation.state.params.article}
                    </Text>
                </Card>
            </View>

        );
    }

}


export default CardDetails;
