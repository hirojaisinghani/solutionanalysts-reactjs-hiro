import Reac, { memo } from 'react'
import { useSelector  } from 'react-redux';
import { formatLeaderboardData } from '../utils';
import {
  ItemBox,
  ItemRanking,
  ItemPicture,
  ItemName,
  ItemScore,
  Container,
  Leadheader
} from './StyleComponents';

const ScoreList = () => {
  const scoreList: string[] = useSelector((state: any) => state.score.scoreList);
  console.log(5, scoreList);
  return (
    <Container>
      <h2>Leaderboard For Real Update Score</h2>
        {/* <Leadheader>
          <h2>Leaderboard For Real Update Score</h2>
        </Leadheader> */}

      { 
        formatLeaderboardData(scoreList).map((item) => {
          return (
            <ItemBox ranking={item.rank}>
            <ItemRanking ranking={item.rank}>{item.rank}</ItemRanking>
            <ItemPicture />
            <ItemName>{item.displayName}</ItemName>
            <ItemScore>{item.score}pt</ItemScore>
            </ItemBox>
          )
          
        }) 
      }
    </Container>
  )
}
export default memo(ScoreList);
