const initial =  {
    isSignedin : null,
    clientId : null
}

export default (state = initial,action) => {
    switch (action.type) {
        case 'SIGN_IN' :
            return {...state,isSignedin : true,clientId : action.payload}
        case 'SIGN_OUT' :
            return {...state,isSignedin : false,clientId: null}
        default:
            return state;
            
    }
}