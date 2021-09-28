import { combineReducers } from 'redux';
import system, { SystemState } from './system';

export interface RootState {
  system: SystemState;
}

const rootReducer = combineReducers({
  system,
});

export default rootReducer;
