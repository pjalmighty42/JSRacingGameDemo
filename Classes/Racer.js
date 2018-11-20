
function Racer (
    firstName,
    lastName,
    age,
    speed,
    cornering,
    aggression,
    smoothness,
    versatility
){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.speed = speed;
    this.cornering = cornering;
    this.aggression = aggression;
    this.smoothness = smoothness;
    this.versatility = versatility;
}

Racer.prototype.calculateRacerSkill = function(
    speed,
    cornering,
    aggression,
    smoothness,
    versatility
){
    var oSkill = Math.floor((speed + cornering + aggression + smoothness + versatility) / 5);

    this.overallSkill = oSkill;
};