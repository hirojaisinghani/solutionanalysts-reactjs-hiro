import { useSelector } from 'react-redux';
import { formatLeaderboardData } from './utils';
import { INTERVAL } from './constants';

// update score for every seconds
export const updateLeaderBoardScore = () => {
  return (dispatch: any) => {
  //   const interval = setInterval(() => {
  //     const scoreList: string[] = useSelector((state: any) => state.score.scoreList);
  //     console.log(14, scoreList);
  //     dispatch({type:'UPDATE_LIST',payload:formatLeaderboardData([...scoreList])});
  //     // setCountc(formatData);
  //   }, INTERVAL);
  //   // clearInterval(interval);
  //   return () => clearInterval(interval);
  }
  
}