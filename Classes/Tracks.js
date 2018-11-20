function Tracks(
    name,
    type,
    difficultyLevel,
    safteyLevel,
    complexityLevel
){
    this.name = name;
    this.type = type;
    this.difficultyLevel = difficultyLevel;
    this.safteyLevel = safteyLevel;
    this.complexityLevel = complexityLevel;
}

Tracks.prototype.calculateOverallDiff = function(
    difficultyLevel,
    safteyLevel,
    complexityLevel
){
    var ovrTDiff = Math.floor((difficultyLevel + safteyLevel + complexityLevel) / 3);

    this.overallTrackDifficulty = ovrTDiff;
};

