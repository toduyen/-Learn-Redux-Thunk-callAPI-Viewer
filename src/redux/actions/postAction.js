import {FETCH_POST_REQUEST,FETCH_POST_SUCCESS,FETCH_POST_ERROR} from '../contants/postContants';

export const loadPosts = () => async dispatch => {
    try
    {
        dispatch({type:FETCH_POST_REQUEST});
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const reponse = await fetch(url);
        const reponseBody = await reponse.json();
        dispatch({
            type:FETCH_POST_SUCCESS,
            data: reponseBody
        })
    }
    catch(err)
    {
        console.log(err);
        dispatch({
            type:FETCH_POST_ERROR,
            message: err
        })
    }
}