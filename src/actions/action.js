import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';
import axios from 'axios';

export const getData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const getDataSuccess = (data) => {
    return {
        type: FETCHING_DATA_SUCCESS,
        payload: data
    }
}

export const getDataFailure = (page) => {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export const fetchData = (page) => {
    const pageData = page == null ? 1 : page;
    return (dispatch) => {
        dispatch(getData())

        const URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4897125d49c84aa2979b28e4bd453538&page=' + pageData + '&pagesize=5';

        axios.get(URL)
            .then((responseJson) => {

                const data = responseJson.data.articles
                dispatch(getDataSuccess(data))

            })
            .catch((error) => {
                console.error(error);
            });


    }
};

export const fetchDataPage = (page) => {
    const pageData = page == null ? 1 : page;
    return (dispatch) => {

        const URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4897125d49c84aa2979b28e4bd453538&page=' + pageData + '&pagesize=5';

        axios.get(URL)
            .then((responseJson) => {

                const data = responseJson.data.articles
                dispatch(getDataSuccess(data))

            })
            .catch((error) => {
                console.error(error);
            });


    }
};