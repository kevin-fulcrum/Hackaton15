import React from 'react'
import StackInit from './src/component/navigation/StackInit'
import {Provider} from 'react-redux'
import getStore from './src/component/redux/Store'
import {createStore} from 'redux'

const App=()=>{
  return(
    <Provider store={createStore(getStore)}>
    <StackInit></StackInit>
    </Provider>
  )
};

export default App;