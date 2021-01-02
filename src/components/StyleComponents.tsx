import styled from 'styled-components';
import { RANKING_COLOR } from '../constants';


interface RankingProps {
  ranking: any,
};
interface PictureProps {
  picure: String
}

export const ListContainer = styled.div`
  background-color: #f7f5f6;
  position: absolute;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
`;

export const ItemBox  = styled.div<RankingProps>`
  width: 90%;
  height: 50px;
  position: absolute;
  top: ${(props) => 50 * (props.ranking - 1)}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease 0s;
  border-bottom: 1px solid #efeded;
`;

export const ItemRanking = styled.div<RankingProps>`
  width: 22px;
  text-align: center;
  border-radius: 50%;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
  color: #fff;
  font-size: 14px;
  background-color: ${(props) => RANKING_COLOR[props.ranking - 1] || '#8eb9f5'};
`;

export const ItemName = styled.div`
  color: #ffffff;
  margin-left: 8px;
`;

export const ItemPicture = styled.div`
  background-color: #e5e5e5;
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  background-image: url('./logo.png');
  
`;

export const ItemScore = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
  color: #e46a86;
`;

export const Container = styled.div`
  width: 550px;
  margin: 80px auto;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const Leadheader = styled.div`
    width: 100%;
    height: 70px;
    background: rgba(0, 168, 232, 0.79);
    text-align: center;
    border-radius: 5px 5px 0 0;
    h2 {
      margin: 0;
      color: #fefefe;
      padding-top: 20px;
    }
`;

