/**
 * Created by PC on 31.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var regex = /#([A-z][\w\-]+[A-z0-9]+)/g;
    var bannedUsers = arr[arr.length - 1].split(' ');
    for(var index = 0; index < arr.length - 1; index++) {
        var line = arr[index];
        if (line === '<code>') {
            while (line !== '</code>') {
                console.log(line);
                index++;
                line = arr[index];
            }
        }

        var matches = getMatches(line, regex);
        for (var i in matches) {
            var user = matches[i];
            var userName = '#' + user;
            var namePattern = new RegExp(userName, 'g');
            if (checkForBannedUsers(bannedUsers, user)) {
                var censoredName = censorBannedUsers(user);
                line = line.replace(namePattern, censoredName);
                continue;
            }

            var link = '<a href="/users/profile/show/' + user + '">' + user + '</a>';
            line = line.replace(namePattern, link);
        }

        console.log(line);
    }

    function censorBannedUsers(user) {
        var censored = '';
        for(var index in user) {
            censored += '*';
        }

        return censored;
    }

    function checkForBannedUsers(bannedUsers, userName) {
        var isBanned = false;
        for (var index in bannedUsers) {
            var user = bannedUsers[index];
            if (user === userName) {
                isBanned = true;
                break;
            }
        }

        return isBanned;
    }

    function getMatches(string, pattern) {
        var match;
        var matches = [];
        while (match = pattern.exec(string)) {
            matches.push(match[1]);
        }

        return matches;
    }
}

var arr = [ '#RoYaL: I\'m not sure what you mean,',
    'but I am confident that I\'ve written',
    'everything correctly. Ask #iordan_93',
    'and #pesho if you don\'t believe me',
    '<code>',
    '#trying to print stuff',
    'print("yoo")',
    '</code>',
    'pesho gosho' ];

solve(arr);