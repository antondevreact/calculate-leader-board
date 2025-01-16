function calculateLeaderboardPlaces(users, minScores) {
    const sortedUsers = users.sort((a, b) => b.score - a.score);

    let isFirstPlaceTaken = false;
    let isSecondPlaceTaken = false;
    let isThirdPlaceTaken = false;
    const places = [];
    const maxPlacesToAward = sortedUsers > 3 ? 3 : sortedUsers.length;

    for (let i = 0; i < maxPlacesToAward; i++) {
        const { userId, score } = sortedUsers[i];

        if (score >= minScores.firstPlaceMinScore && !isFirstPlaceTaken) {
            isFirstPlaceTaken = true;
            places.push({ userId, place: 1 });
            continue;
        }

        if(score >= minScores.secondPlaceMinScore && !isSecondPlaceTaken) {
            isSecondPlaceTaken = true;
            places.push({ userId, place: 2 });
            continue;
        }

        if(score >= minScores.thirdPlaceMinScore && !isThirdPlaceTaken) {
            isThirdPlaceTaken=true;
            places.push({ userId, place: 3 });
        }
    }

    const indexNotPrizePlacesBegin = places.length;

    for (let i = indexNotPrizePlacesBegin; i<sortedUsers.length; i++) {
        const { userId } = sortedUsers[i];
        places.push({userId,place: 4 + i - indexNotPrizePlacesBegin});
    }

    return places;
}
