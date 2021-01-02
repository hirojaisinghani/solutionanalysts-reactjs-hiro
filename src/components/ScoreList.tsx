import Reac, { memo } from 'react'
import { useSelector  } from 'react-redux';
import { formatLeaderboardData } from '../utils';

const ScoreList = () => {
  const scoreList: string[] = useSelector((state: any) => state.score.scoreList);
  console.log(5, scoreList);
  
  return (
    <>
      { 
        formatLeaderboardData(scoreList).map((item) => {
          <>
          <h1>
            test
          </h1>
            
          </>
        }) 
      }
    </>
  )
}
export default memo(ScoreList);
