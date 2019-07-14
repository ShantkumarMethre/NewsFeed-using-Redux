

import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, AsyncStorage, Dimensions, ImageBackground, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import Card from './common/Card';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchData, fetchDataPage } from '../actions/action';
import PropType from 'prop-types'


const key = 'countries';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Home extends Component {
    static navigationOptions = {
        title: 'News Feed',
    };
    constructor(props) {
        super(props)
        //    state = {
        //     avatarSource: null,
        //     imageLocal: null,
        //     data: [],
        //     isLoading: true,
        //     page: 1,
        // }
    }

    componentDidMount() {
        this.props.fetchData(this.props.data.page);

    }
    // _fetchData = () => {

    //     const { page } = this.state;

    //     const URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4897125d49c84aa2979b28e4bd453538&page=' + page + '&pagesize=2'
    //     //  = `/beers?page=${page}&per_page=10`;
    //     axios.get(URL)
    //         .then((responseJson) => {
    //             console.log(responseJson);
    //             this.setState({
    //                 isLoading: false,
    //                 data: this.state.data.concat(responseJson.data.articles)
    //             });

    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    _handleLoadMore = () => {

        this.props.fetchDataPage(this.props.data.page);
    };

    render() {
      var i=0;
        const { navigate } = this.props.navigation.navigate;
        console.log(this.props.data);
        if (this.props.data.isFetching) {
            return (
                <ActivityIndicator />
            )
        }
        return (
            <FlatList
                data={this.props.data.data}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={() => {

                        this.props.navigation.navigate('CardDetails', { url: item.urlToImage, title: item.title, article: item.description })
                    }}>
                        <View style={{ margin: 6 }}>
                            <Card>
                                <Image source={{ uri: item.urlToImage }} style={{
                                    height: deviceWidth - 30, width: deviceWidth - 30,

                                    borderRadius: 10, borderWidth: 1, borderColor: 'gray',
                                    alignSelf: "center",
                                }} />

                                <Text style={{ fontSize: 20, marginTop: 10 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ flexWrap: 'wrap', fontSize: 13, marginTop: 10 }}>
                                    {item.description}
                                </Text>
                            </Card>
                        </View>
                    </TouchableWithoutFeedback>
                }
                onEndReached={this._handleLoadMore}
                keyExtractor={(item, index) => 'key'+index}
                
                onEndReachedThreshold={0.5}
                initialNumToRender={2}

            />
        );
    }
}

Home.PropType = {
    fetchData: PropType.func.isRequired
}
// export default withNavigation(Home)


function mapStateToProps(state) {
    return {
        data: state
    }
}


export default connect(mapStateToProps, { fetchData, fetchDataPage })(Home);

