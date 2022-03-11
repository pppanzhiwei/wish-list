import { createStore, applyMiddleware } from 'redux';
import wishReducer from './reducer';
import mySaga from './saga';
import createSagaMiddleware from 'redux-saga';

// 应用中间件
const sagaMiddleware = createSagaMiddleware();
const store = createStore(wishReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export { store };
