function Teams(
    name,
    pitting,
    speed,
    mechanical,
    technical,
    vechicle,
    leadership
){
    this.name = name;
    this.pitting = pitting;
    this.speed = speed;
    this.mechanical = mechanical;
    this.technical = technical;
    this.vechicle = vechicle;
    this.leadership = leadership;
}

Teams.prototype.calculateTeamLevel = function(
    pitting,
    speed,
    mechanical,
    technical,
    vechicle,
    leadership
){
    var tLevel = Math.floor((pitting + speed + mechanical + technical + vechicle + leadership) / 6);

    this.overallTeamLevel = tLevel;
};