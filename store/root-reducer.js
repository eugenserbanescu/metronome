import { combineReducers } from 'redux';
import controllerReducer from '../controller/reducer';
import queuesReducer from '../queues/reducer';

const rootReducer = combineReducers({
  audio: controllerReducer,
  queues: queuesReducer
});

export default rootReducer;
