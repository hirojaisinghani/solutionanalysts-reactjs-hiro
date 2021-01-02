import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatLeaderboardData } from './utils'
import { INTERVAL } from './constants';
import ScoreList from './components/ScoreList'

const  App = () => {
  //Use for all the dispatch actions
  const dispatch = useDispatch();
  //get initail data from reducer
  const scoreList: string[] = useSelector((state: any) => state.score.scoreList);
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
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
