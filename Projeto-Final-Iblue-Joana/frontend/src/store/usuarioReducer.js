const INITIAL_STATE = {
    usuarioEmail:'',
    usuarioLogado:0,
};

function usuarioReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOG_IN':
            return {...StaticRange, usuarioLogado: 1, usuarioEmail: action.usuarioEmail}
        case 'LOG_OUT':
            return {...StaticRange, usuarioLogado: 0, usuarioEmail: ''}
        default:
            return state;
            
    }
}

    export default usuarioReducer;
