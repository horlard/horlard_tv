import Streams from '../apis/streams';
import History from  '../history';
export const Signin = (id) => {
    return {
        type:'SIGN_IN',
        payload: id
    }
}

export const Signout = () => {
    return {
        type:'SIGN_OUT'
    }
}
export const createStream = (formValues) => async  (dispatch,getState) => {
    const {clientId} = getState().auth
    const response= await Streams.post('/streams',{...formValues,clientId});

    dispatch({
        type : 'CREATE_STREAM',
        payload : response.data
    })
    History.push('/');
}
export const fetchStreams = () => async dispatch => {
    const response = await Streams.get('/streams');
    dispatch ({
        type : 'FETCH_STREAMS',
        payload : response.data
    })
}
export const fetchStream = (id) => async dispatch => {
    const response = await Streams.get(`/streams/${id}`);

    dispatch({
        type : 'FETCH_STREAM',
        payload : response.data
    })
}
export const deleteStream = (id) => async dispatch => {
   await Streams.delete(`/streams/${id}`);
    dispatch ({
        type : 'DELETE_STREAM',
        payload : id
    })
}
export const editStream = (id,formValues) => async dispatch => {
    const response = await Streams.patch(`/streams/${id}`,formValues);
    dispatch ({
        type : 'EDIT_STREAM',
        payload: response.data
    })
    History.push('/');
}

