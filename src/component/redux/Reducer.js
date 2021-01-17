const initialState={
    datos: {
        listUser:[],
            newUser: {
                username: '',
                email: '',
                password: '',
                phone: ''
            }
    }
}

const UsuarioReducer = (state= initialState.datos, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return action.data;
    }
     
    return state;
}
export default UsuarioReducer;