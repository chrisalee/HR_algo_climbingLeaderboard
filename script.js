const climbingLeaderboard = (ranked, player) => {
    let uniqueRanks = ranked.filter((x, index) => {
        return ranked.indexOf(x) === index;
    });
    let playerRankings = [];
    
    for(let i = 0; i < player.length; i++) {
        uniqueRanks.push(player[i]);
        uniqueRanks.sort((a, b) => b - a);
        let playerRank = uniqueRanks.indexOf(player[i]) + 1;
        // console.log(playerRank);  
        playerRankings.push(playerRank);
    }
    console.log(playerRankings);
    return playerRankings;
    
}

// does not pass all tests within a given time limit
