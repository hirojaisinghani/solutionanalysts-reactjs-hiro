import React, { memo } from 'react'
import { useSelector  } from 'react-redux';
import { formatLeaderboardData } from '../utils';
import {
  User,
  Rank,
  Picture,
  Name,
  Score,
  Container,
} from './StyleComponents';

const ScoreList = () => {
  // get data from redux
  const scoreList: string[] = useSelector((state: any) => state.score.scoreList);
  return (
    <Container>
      { 
        // format and itereate data
        formatLeaderboardData(scoreList).map((item) => {
          return (
            <div key={item.rank}>
            <User ranking={item.rank}>
              <Rank ranking={item.rank}>{item.rank}</Rank>
              <Picture />
              <Name>{item.displayName}</Name>
              <Score>{item.score}pt</Score>
            </User>
            </div>
          )
          
        }) 
      }
    </Container>
    
  )
}
export default memo(ScoreList);
