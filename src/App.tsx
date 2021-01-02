import React, {useState, useEffect} from 'react';
import leaderboardData from './leaderboardData.json';
import { formatLeaderboardData } from './utils'
import { INTERVAL } from './constants';

import './App.css';

function App() {
  // usState hook local state 
  const [data, setData] = useState(formatLeaderboardData([...leaderboardData]));
  

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // set interval for every second to update 
    const interval = setInterval( () => {
      setData(formatLeaderboardData([...leaderboardData]));
    }, INTERVAL);
    return () => clearInterval(interval);
  })
  return (
    <>
    </>
  );
}

export default App;
