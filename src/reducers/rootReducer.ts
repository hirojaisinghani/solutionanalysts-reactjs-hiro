import {combineReducers} from 'redux';
import ScoreListReducer from './scoreListReducers'

//Combine all the sub reducers
const rootReducer = combineReducers({
  score: ScoreListReducer,
})

export default rootReducer