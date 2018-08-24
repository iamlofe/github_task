import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootSaga from '../../search/sagas/search-sagas';

import rootReducer from '../../main/reducer/root-reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const history = createBrowserHistory({});
sagaMiddleware.run(rootSaga);
