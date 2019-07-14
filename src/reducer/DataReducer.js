import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/constants'
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    page: 1,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,

                data: state.data.concat(action.payload),
                page: state.page + 1,
                isFetching: false,
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

export default dataReducer;