

export function startUI( ) {
  
  const {
    highestScore = 0,
    gamesPlayed = 0,
    highestLevel = 0 
  } = JSON.parse( localStorage.getItem('playerStats') ) || {};

  return {
    highestScore,
    gamesPlayed,
    highestLevel
  }

}