/**
 * Created by PC on 26.01.2016 г..
 */
function solve (arr) {
    "use script";
    var courses = {};
    var regex = /\s*\|\s*/g;
    for (var index in arr) {
        var inputLine = arr[index].trim();
        var line = inputLine.split(regex);
        var student = line[0];
        var course = line[1];
        var currentGrade = Number(line[2]);
        var currentVisits = Number(line[3]);

        if (!courses[course]) {
            courses[course] = {
                grades: [],
                visits: [],
                students: [],
            }
        }

        courses[course].grades.push(currentGrade);
        courses[course].visits.push(currentVisits);
        if (courses[course].students.indexOf(student) === -1) {
            courses[course].students.push(student);
        }
    }

    var agragatedCourses = agregateCourses(courses);

    console.log(JSON.stringify(agragatedCourses));

    function agregateCourses (courses) {
        var agregatedCourses = {};
        var objKeys = Object.keys(courses).sort();
        for (var index in objKeys) {
            var key = objKeys[index];
            agregatedCourses[key] = {
                avgGrade: getAverageValue(courses[key].grades),
                avgVisits: getAverageValue(courses[key].visits),
                students: courses[key].students.sort()
            };
        }

        return agregatedCourses;
    }

    function getAverageValue (arr) {
        var totatSum = 0;
        for (var index in arr) {
            totatSum += arr[index];
        }

        var average = totatSum / arr.length;

        return Number(average.toFixed(2));
    }
}

var arr = [ 'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9' ];

solve(arr);