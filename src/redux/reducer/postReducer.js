import {FETCH_POST_ERROR,FETCH_POST_SUCCESS,FETCH_POST_REQUEST} from '../contants/postContants';

const nameInitialState = { 
    requesting : false,
    thanhcong: false,
    message: null,
    data:null
}
const postReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                thanhcong: false,
                message: action.message
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                requesting:false,
                thanhcong:true,
                data:action.data
            }
        case FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            };
        default:
            return state
    }
}
export default postReducer;