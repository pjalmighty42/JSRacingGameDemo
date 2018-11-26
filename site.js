var trackList, teamList, racerList = [];
var lapCount, currLap = 1;
var isTrackSel, isTeamSel, isRacerSel = false;

var trackSel;

var mins, secs = 0;

//Use the selected Teams amount to set the Racer amount
document.getElementById('teams-num-sel').addEventListener('click', function() {
    var teamSelMain = document.getElementById('teams-num-sel');
    var selectTeamVal = parseInt(teamSelMain[teamSelMain.selectedIndex].value);

    racerList = createRacersList(selectTeamVal, 2);
    console.log(selectTeamVal);

    var racerSelMain = document.getElementById('racers-num-sel');

    for (var i = racerSelMain.options.length - 1; i >= 0; i--) {
        racerSelMain.remove(i);
    }

    for (var racerAmt = selectTeamVal; racerAmt <= racerList.length; racerAmt++) {
        var option = document.createElement('option');
        option.value = option.text = racerAmt;
        racerSelMain.add(option);
    }

    document.getElementById('racers-area').classList.remove('disabledDiv');
    document.getElementById('racers-num-sel').removeAttribute("disabled");
});

document.getElementById('new-btn').addEventListener('click', function() {
    trackList = createTrackList(25);
    teamList = createTeamsList(22);


    console.log(trackList);

    document.getElementById('track-area').classList.remove('disabledDiv');

    //Set the Options for the Team Number Selection <select></select>
    var teamSelMain = document.getElementById('teams-num-sel');

    for (var teamAmt = 1; teamAmt <= 32; teamAmt++) {
        var option = document.createElement('option');
        option.value = option.text = teamAmt;
        teamSelMain.add(option);
    }
});

document.getElementById('reset-btn').addEventListener('click', function() {
    trackList = [];
    teamList = [];
    racerList = [];

    document.getElementById('track-area').classList.add('disabledDiv');
});

document.getElementById('difficulty-level').addEventListener('click', function() {

    var diffSel = document.getElementById('difficulty-level');
    var diffSelVal = parseInt(diffSel[diffSel.selectedIndex].value);

    console.log(diffSelVal);

    var orgTrackList = [];

    switch (diffSelVal) {
        case 1:
            for (var ve = 0; ve < trackList.length; ve++) {
                if (trackList[ve].overallTrackDifficulty <= 20) {
                    orgTrackList.push(trackList[ve]);
                }
            }
            break;
        case 2:
            for (var e = 0; e < trackList.length; e++) {
                if (trackList[e].overallTrackDifficulty >= 21 && trackList[e].overallTrackDifficulty <= 40) {
                    orgTrackList.push(trackList[e]);
                }
            }
            break;
        case 3:
            for (var m = 0; m < trackList.length; m++) {
                if (trackList[m].overallTrackDifficulty >= 41 && trackList[m].overallTrackDifficulty <= 60) {
                    orgTrackList.push(trackList[m]);
                }
            }
            break;
        case 4:
            for (var d = 0; d < trackList.length; d++) {
                if (trackList[d].overallTrackDifficulty >= 61 && trackList[d].overallTrackDifficulty <= 80) {
                    orgTrackList.push(trackList[d]);
                }
            }
            break;
        case 5:
            for (var vd = 0; vd < trackList.length; vd++) {
                if (trackList[vd].overallTrackDifficulty >= 81 && trackList[vd].overallTrackDifficulty <= 100) {
                    orgTrackList.push(trackList[vd]);
                }
            }
            break;
    }

    console.log(orgTrackList);

    var trackSel = document.getElementById('track-list');

    for (var i = trackSel.options.length; i >= 0; i--) {
        trackSel.remove(i);
    }

    for (var trackAmt = 0; trackAmt < orgTrackList.length; trackAmt++) {
        var option = document.createElement('option');
        option.value = option.text = orgTrackList[trackAmt].name;
        trackSel.add(option);
    }

    document.getElementById('track-list').removeAttribute("disabled");
});

document.getElementById('track-list').addEventListener('click', function() {
    var selTrack = document.getElementById('track-list');
    var selTrackVal = selTrack[selTrack.selectedIndex].value;

    console.log(selTrackVal);

    for (var t = 0; t < trackList.length; t++) {
        if (trackList[t].name === selTrackVal) {
            trackSel = trackList[t];
        }
    }

    console.log(trackSel);

    document.getElementById('track-info-div').style.display = "flex";

    document.getElementById('track-name').innerHTML = trackSel.name;
    document.getElementById('track-type').innerHTML = trackSel.type;
    document.getElementById('track-diff').innerHTML = trackSel.overallTrackDifficulty;

    if (trackSel !== null) {
        document.getElementById('teams-area').classList.remove('disabledDiv');
        document.getElementById('teams-num-sel').removeAttribute("disabled");
    }

});

document.getElementById('racers-num-sel').addEventListener('click', function() {
    var racerSel = document.getElementById('racers-num-sel');
    var selRacerVal = racerSel[racerSel.selectedIndex].value;

    if (selRacerVal !== "") {
        var currTeamList = teamList;
        var currRacerList = racerList;

        var randomTeamSel = getRandomInt(0, teamList.length);


        for (var r = 0; r < racerList.length; r++) {
            for (var t = 0; t < teamList.length; t++) {
                createRaceObjectList(
                    trackSel.type,
                    trackSel.overallTrackDifficulty,
                    teamList[t].name,
                    teamList[t].overallTeamLevel,
                    racerList[r].name,
                    racerList[r].overallSkill
                )
            }
        }

        document.getElementById('output-area').classList.remove('disabledDiv');
    }
});

function stopWatch() {
    secs++;
    if (secs >= 60) {
        secs = 0;
        mins++;
    }
}