/**
 * Created by PC on 25.01.2016 г..
 */
function solve (arr) {
    "use script";
    var output = {};
    var regex = /[\/:-]/g;
    for (var index in arr) {
        var line = arr[index].replace(/\B\s+|\s+\B/g, '').trim();
        line = line.split(regex);
        var homeTeam = line[0],
            awayTeam = line[1],
            homeGoals = Number(line[2]),
            awayGoals = Number(line[3]);

        updateTeams(homeTeam, awayTeam, homeGoals, awayGoals, output);
        updateTeams(awayTeam, homeTeam, awayGoals, homeGoals, output);
    }

    var sortedOutput = sortTeams(output);
    for (var index in sortedOutput) {
        var team = sortedOutput[index];
        team.matchesPlayedWith.sort();
    }

    console.log(JSON.stringify(sortedOutput));

    function updateTeams (team1, team2, team1Goals, team2Goals, output) {
        if (!output[team1]) {
            output[team1] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: [],
            };
        }

        /*if(!output[team1][matchesPlayedWith]) {
            output[team1][matchesPlayedWith] = [];
        }*/

        output[team1].goalsScored += team1Goals;
        output[team1].goalsConceded += team2Goals;

        if (output[team1].matchesPlayedWith.indexOf(team2) === -1) {
            output[team1].matchesPlayedWith.push(team2);
        }
    }

    function sortTeams (teams) {
        var sortedTeams = {};
        var objKeys = Object.keys(teams).sort();
        for (var index in objKeys) {
            var key = objKeys[index];
            sortedTeams[key] = teams[key];
        }

        return sortedTeams;
    }
}

var arr = ['Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1',];

solve(arr);