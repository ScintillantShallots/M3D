import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';

import thunk from 'redux-thunk';
import rootReducer from '../reducers/Index';
import DevTools from '../components/AppRoot/DevTools';

const enhancer = compose(
  // Middleware you want to use in development:
//   applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches [1] : null;
}

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0

  const store = createStore(rootReducer, initialState, enhancer);

  store.subscribe(()=>{
    // console.log('SUBSCRIBE IS GETTIGN CALLED DOE');
    // console.log(Object.keys(store.getState().xycloneLogin.loginStatus), 'THIS IS LOGIN STATUS FROM STORE.SUBSCRIBE');
    if (Object.keys(store.getState().xycloneLogin.loginStatus).length !== 0) {
      // console.log('IM NEVER HERE : C')
      sessionStorage.setItem('loginStatus', JSON.stringify(store.getState().xycloneLogin.loginStatus));
    }
  });

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers/Index', () =>
      store.replaceReducer(require('../reducers/Index')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}