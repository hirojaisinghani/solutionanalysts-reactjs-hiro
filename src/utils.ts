import { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } from './constants' // constant define for can use globally

// get random number using Math.random()
const getRandomNumber = (score: number) =>  {
  let randomNumber = Math.floor(Math.random()*(MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER) + MIN_RANDOM_NUMBER);
  return score + randomNumber;
}

// format input array and sort with score
export const formatLeaderboardData = (arr: any[]) => {
  const formatedArray = arr.map((item) => {
    return {
      ...item,
      score: getRandomNumber(item.score),
    }
  });
  formatedArray.sort((a, b) => (a.score > b.score ? -1 : 1));
  return formatedArray.map((item, index) => {
    return {
      ...item,
      rank: index + 1
    }
  })
  
}