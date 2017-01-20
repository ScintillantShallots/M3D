import { createStore } from 'redux';
import rootReducer from '../reducers/Index';

export default function configureStore(initialState) {
  var store = createStore(rootReducer, initialState);

  store.subscribe(()=>{
    // console.log('SUBSCRIBE IS GETTIGN CALLED DOE');
    // console.log(Object.keys(store.getState().xycloneLogin.loginStatus), 'THIS IS LOGIN STATUS FROM STORE.SUBSCRIBE');
    if (Object.keys(store.getState().xycloneLogin.loginStatus).length !== 0) {
      // console.log('IM NEVER HERE : C')
      sessionStorage.setItem('loginStatus', JSON.stringify(store.getState().xycloneLogin.loginStatus));
    }
  });

  return store;
}
