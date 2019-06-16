import Streams from '../apis/streams';
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
export const createStream = formValues => async  dispatch => {
    Streams.post('/streams',formValues)
}