
//Helper Functions
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Create Tracks
function createTrackList(
    numberOfTracks
){
    var tList = [];

    for(var tCount = 0; tCount < numberOfTracks; tCount++){
        var typeRandom = Math.floor((Math.random() * 3) + 1);
        var typeOut = "";
        switch(typeRandom){
            case 1:
                typeOut = "Rally";
            break;
            case 2:
                typeOut = "Road";
            break;
            case 3:
                typeOut = "Oval";
            break;
        }

        var diffRandom = Math.floor((Math.random() * 100) + 1);
        var safeRandom = Math.floor((Math.random() * 100) + 1);
        var complexRandom = Math.floor((Math.random() * 100) + 1);

        var newTrack = new Tracks(
            "Track" + tCount,
            typeOut,
            diffRandom,
            safeRandom,
            complexRandom
        );

        newTrack.calculateOverallDiff(
            diffRandom,
            safeRandom,
            complexRandom
        );

        tList.push(newTrack);
    }

    return tList;
}

//Create Teams
function createTeamsList(
    numberOfTeams
){
    var tList = [];

    for(var tCount = 0; tCount < numberOfTeams; tCount++){
            var pitRandom = Math.floor((Math.random() * 100) + 1);
            var spdRandom = Math.floor((Math.random() * 100) + 1);
            var mechRandom = Math.floor((Math.random() * 100) + 1);
            var techRandom = Math.floor((Math.random() * 100) + 1);
            var vechRandom = Math.floor((Math.random() * 100) + 1);
            var leadRandom = Math.floor((Math.random() * 100) + 1);

            var newTeam = new Teams(
                "Team" + tCount,
                pitRandom,
                spdRandom,
                mechRandom,
                techRandom,
                vechRandom,
                leadRandom
            );

            newTeam.calculateTeamLevel(
                pitRandom,
                spdRandom,
                mechRandom,
                techRandom,
                vechRandom,
                leadRandom
            );

            tList.push(newTeam);
    }

    return tList;
}

//Create Racers
function createRacersList(
    numberOfRacers,
    multiplier
){
    var rList = [];

    for(var rCount = 0; rCount < (numberOfRacers * multiplier); rCount++){
            var ageRandom = getRandomInt(16, 45);
            var spdRandom = Math.floor((Math.random() * 100) + 1);
            var cornRandom = Math.floor((Math.random() * 100) + 1);
            var aggRandom = Math.floor((Math.random() * 100) + 1);
            var smoothRandom = Math.floor((Math.random() * 100) + 1);
            var versRandom = Math.floor((Math.random() * 100) + 1);

            var newRacer = new Racer(
                "RacerFirst" + rCount,
                "RacerLast" + rCount,
                ageRandom,
                spdRandom,
                cornRandom,
                aggRandom,
                smoothRandom,
                versRandom
            );

            newRacer.calculateRacerSkill(
                spdRandom,
                cornRandom,
                aggRandom,
                smoothRandom,
                versRandom
            );

            rList.push(newRacer);
    }

    return rList;
}