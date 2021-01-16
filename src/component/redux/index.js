const initialState={
    login: {
    usuarios:[],
        listUser: {
            username: '',
            email: '',
            password: '',
            phone: ''
        }
    }
}

const usuarioReducer = (state= initialState,action) => {
    switch(action.type) {
        case "LOGIN_USER":
        break;
        case "ADD_NEW_USER": 
        break;
    }
     
    return state;
}