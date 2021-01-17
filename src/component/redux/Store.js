import {combineReducers, createStore} from 'redux'
//import UsuarioReducer from './Reducer'

const UsuarioReducer={
    
}

const config=()=>{
    let combine=combineReducers({user: UsuarioReducer})
    return createStore(
        combine
    )
}