/**
 * Created by PC on 27.01.2016 г..
 */
function solve (arr) {
    "use strict";
    var filesCollection = {},
        regex = /\d+\.?\d*/g;
    for (var index in arr) {
        var fileInfo = arr[index].split(' '),
            fileName = fileInfo[0],
            fileExtension = fileInfo[1],
            fileSize = fileInfo[2],
            fileSizeMatch = fileSize.match(regex),
            fileSizeValue = Number(fileSizeMatch);
        if(!filesCollection[fileExtension]) {
            filesCollection[fileExtension] = {
                files: [],
                memory: 0,
            }
        }

        if (filesCollection[fileExtension].files.indexOf(fileName) === -1) {
            filesCollection[fileExtension].files.push(fileName);
            filesCollection[fileExtension].memory += fileSizeValue;
        }
    }

    var sortedFiles = sortFiles(filesCollection);
    console.log(JSON.stringify(sortedFiles));

    function sortFiles (files) {
        var sortedFiles = {};
        var objKeys = Object.keys(files).sort();
        for (var index in objKeys) {
            var key = objKeys[index];
            sortedFiles[key] = files[key];
            sortedFiles[key].files.sort();
            sortedFiles[key].memory = files[key].memory.toFixed(2).toString();
        }

        return sortedFiles;
    }
}

var arr = [ 'eclipse .tar.gz 198.00MB',
    'uTorrent .gyp 33.02MB',
    'nodeJS .gyp 14MB',
    'nakov-naked .jpeg 3MB',
    'gnuGPL .pdf 5.6MB',
    'skype .tar.gz 66MB',
    'selfie .jpeg 7.24MB',
    'myFiles .tar.gz 783MB' ];
solve(arr);