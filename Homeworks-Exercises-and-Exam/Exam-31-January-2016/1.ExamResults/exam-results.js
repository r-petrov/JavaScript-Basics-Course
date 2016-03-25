/**
 * Created by PC on 31.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var divider = /\s+/g;
    var requestetExam = arr[arr.length - 1];
    var totalExamScore = 0;
    var examCounter = 0;
    for (var index = 0; index < arr.length - 1; index++) {
        var line = arr[index].trim();
        var studentInfo = line.split(divider);
        var studentName = studentInfo[0];
        var examName = studentInfo[1];
        var examPoints = Number(studentInfo[2]);
        var bonus = Number(studentInfo[3]);
        if (examName === requestetExam) {
            totalExamScore += examPoints;
            examCounter++;
        }

        if (examPoints < 100) {
            console.log(studentName + ' failed at ' + '"' + examName + '"');
            continue;
        }

        var coursePoints = calculateCoursePoints(examPoints);
        coursePoints += bonus;
        var grade = calculateGrade(coursePoints);
        console.log(studentName + ': Exam - "' + examName + '"; Points - ' + coursePoints + '; Grade - ' + grade);
    }

    var averagePoints = 0;
    if (examCounter > 0) {
        averagePoints = totalExamScore / examCounter;
        averagePoints = parseFloat(averagePoints.toFixed(2));
    }
    console.log('"' + requestetExam + '" average points -> ' + averagePoints);

    function calculateGrade(coursePoints) {
        var neededPointsForSix = 80;
        var grade = ((coursePoints / neededPointsForSix) * 4) + 2;
        if (grade > 6) {
            grade = 6;
        }

        grade = grade.toFixed(2).toString();

        return grade;
    }

    function calculateCoursePoints(examPoints) {
        var points = examPoints / 5;
        points = parseFloat(points.toFixed(2));

        return points;
    }

}

var arr = [ 'Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced' ];

solve(arr);