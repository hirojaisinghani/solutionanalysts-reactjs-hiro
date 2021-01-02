import styled from 'styled-components';
import { RANK_COLOR } from '../constants';


interface RankingProps {
  ranking: any,
};
export const Container = styled.div`
  background-color: #f7f5f6;
  position: absolute;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
`;

export const User  = styled.div<RankingProps>`
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

export const Rank = styled.div<RankingProps>`
  width: 22px;
  text-align: center;
  border-radius: 50%;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
  color: #fff;
  font-size: 14px;
  background-color: ${(props) => RANK_COLOR[props.ranking - 1] || '#8eb9f5'};
`;

export const Name = styled.div`
  color: #000000;
  margin-left: 8px;
`;

export const Picture = styled.div`
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

export const Score = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
  color: #e46a86;
`;
