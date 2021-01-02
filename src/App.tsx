import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import leaderboardData from './leaderboardData.json';
import { formatLeaderboardData } from './utils'
import { INTERVAL } from './constants';
import { updateLeaderBoardScore } from './action';
import ScoreList from './components/ScoreList'

import './App.css';

function App() {
  //Use for all the dispatch actions
  const dispatch = useDispatch();
  //get initail data from reducer
  const scoreList: string[] = useSelector((state: any) => state.score.scoreList);
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // updateLeaderBoardScore(dispatch);
    const interval = setInterval(() => {
          dispatch({type:'UPDATE_LIST',payload:formatLeaderboardData([...scoreList])});
    }, INTERVAL);
    return () => clearInterval(interval);
  });
  return (
    <ScoreList />
  );
}

export default App;
