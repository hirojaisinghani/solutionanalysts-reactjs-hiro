import React, {useState, useEffect} from 'react';
import leaderboardData from './leaderboardData.json';
import { formatLeaderboardData } from './utils'

import './App.css';

function App() {
  // usState hook local state 
  const [data, setData] = useState()
  console.log(formatLeaderboardData([...leaderboardData]));
  return (
    <>
    </>
  );
}

export default App;
