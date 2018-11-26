function RaceObject(
    trackType,
    trackOvrRating,
    teamName,
    teamOvrRating,
    racerName,
    racerOvrRating
) {
    this.trackType = trackType;
    this.trackOvrRating = trackOvrRating;
    this.teamName = teamName;
    this.teamOvrRating = teamOvrRating;
    this.racerName = racerName;
    this.racerOvrRating = racerOvrRating;
}

RaceObject.prototype.calculateRaceFinishTime = function(
    trackType,
    trackOvrRating,
    teamOvrRating,
    racerOvrRating
) {
    var racerRaceRating = (trackOvrRating + teamOvrRating + racerOvrRating) / 3;

    switch (trackType) {
        case "Oval":
            if (racerRaceRating >= 0 && racerRaceRating <= 30) {
                this.finalTime = getRandomInt(52, 62);
            } else if (racerRaceRating >= 31 && racerRaceRating <= 60) {
                this.finalTime = getRandomInt(48, 51);
            } else {
                this.finalTime = getRandomInt(38, 47);
            }
            break;
        case "Rally":
            if (racerRaceRating >= 0 && racerRaceRating <= 30) {
                this.finalTime = getRandomInt(350, 400);
            } else if (racerRaceRating >= 31 && racerRaceRating <= 60) {
                this.finalTime = getRandomInt(210, 349);
            } else {
                this.finalTime = getRandomInt(195, 209);
            }
            break;
        case "Road":
            if (racerRaceRating >= 0 && racerRaceRating <= 30) {
                this.finalTime = getRandomInt(90, 98);
            } else if (racerRaceRating >= 31 && racerRaceRating <= 60) {
                this.finalTime = getRandomInt(78, 89);
            } else {
                this.finalTime = getRandomInt(72, 77);
            }
            break;
    }
};