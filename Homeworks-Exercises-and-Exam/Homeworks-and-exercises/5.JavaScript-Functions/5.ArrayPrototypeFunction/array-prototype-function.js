/**
 * Created by PC on 18.01.2016 г..
 */
"use script"
Array.prototype.removeItem = function(value) {
    if(typeof value === 'number' || typeof value === 'string') {
        for (var index in this) {
            if(this[index] === value) {
                this.splice(index, 1);
            }
        }
    }
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);
console.log(arr);

arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');
console.log(arr);