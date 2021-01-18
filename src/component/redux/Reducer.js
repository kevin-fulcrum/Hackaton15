const initialState={
    datos: {
            listUser:[
                {
                usuario: 'admin',
                contra: '123',           
                }
            ],
            newUser: {
                username: '',
                email: '',
                password: '',
                phone: ''
            }
    }
}

const UsuarioReducer = (state= initialState, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {...state, user: action};
    }
     
    return state;
}
export default UsuarioReducer;