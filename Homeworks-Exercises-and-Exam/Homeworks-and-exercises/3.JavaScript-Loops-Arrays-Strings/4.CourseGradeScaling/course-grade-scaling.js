/**
 * Created by PC on 13.01.2016 г..
 */
"use strict";
var students = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];

// scale student scores upwards by increasing them with 10%
for(var index = 0; index < students.length; index++) {
    var student = students[index];
    for (var prop in student) {
        if(prop === 'score') {
            var grade = student[prop];
            student[prop] = grade + (grade * (10 / 100));
        }
    }
}

// should add a field that shows whether the student has passed or failed the exam
for(var index = 0; index < students.length; index++) {
    student = students[index];
    var hasPassed = student['score'] >= 100;
    student['hasPassed'] = hasPassed;
}

// filter out only the students that have passed the exam
var passedStudents = new Array;
for(var index = 0; index < students.length; index++) {
    var student = students[index];
    if(student['hasPassed'] === true) {
        passedStudents.push(student);
    }
}

// print passed students out sorted alphabetically
function compareStudentNames(name1, name2) {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    if(name1 < name2) {
        return -1;
    }
    else if (name1 === name2) {
        return 0;
    }
    else {
        return 1;
    }
}

passedStudents.sort(function(a, b) {
    return compareStudentNames(a.name, b.name);
});

var outputStudents = JSON.stringify(passedStudents, null, 0);
console.log(outputStudents);

