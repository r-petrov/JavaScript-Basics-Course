/**
 * Created by PC on 28.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var exams = {};
    for (var index in arr) {
        var line = arr[index].trim();
        var examInfo = line.split(/[\-:]/g);
        examInfo = examInfo.filter(function(e) {
            return e;
        });

        var result = Number(examInfo[examInfo.length - 1].trim());
        if (result >= 0 && result <= 400) {
            var exam = examInfo[examInfo.length - 2].trim();
            var studentName = examInfo[0].trim();

            if (!exams[exam]) {
                exams[exam] = [];
            }

            var studentIndex = getStudentsIndex(studentName, exams[exam]);

            if (studentIndex >= 0) {
                if (exams[exam][studentIndex].result < result) {
                    exams[exam][studentIndex].result = result;
                }

                exams[exam][studentIndex].makeUpExams++;
            }
            else {
                exams[exam].push({
                    name: studentName,
                    result: result,
                    makeUpExams: 0,
                });
            }
        }
    }

    for (var ex in exams) {
        var currentExam = exams[ex];
        currentExam.sort(function(a, b) {
            if (a.result === b.result) {
                if (a.makeUpExams === b.makeUpExams) {
                    return a.name.localeCompare(b.name);
                }
                else {
                    return a.makeUpExams - b.makeUpExams;
                }
            }
            else {
                return b.result - a.result;
            }
        });
    }

    console.log(JSON.stringify(exams));

    function getStudentsIndex(studentName, students) {
        var index = -1;
        for (var st in students) {
            var student = students[st];
            if (student.name === studentName) {
                index = st;
                break;
            }
        }

        return index;
    }
}

var arr = [
    'Scarlett Johansson - HTML & CSS : 500',
    'Scarlett Johansson - HTML & CSS : 100',
    'Scarlett Johansson - HTML & CSS : 200',
    'Scarlett Johansson - HTML & CSS : 350',
    'Scarlett Johansson - HTML & CSS : 250',
    'Scarlett Johansson - HTML & CSS : 150',
    'Scarlett Johansson - HTML & CSS : 300',
     ];

solve(arr);