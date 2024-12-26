// CustomArray Constructor
function CustomArray(initialArray = []) {
    this.data = initialArray;
}

// map method
CustomArray.prototype.map = function(callback) {
    const result = [];
    for (let i = 0; i < this.data.length; i++) {
        result.push(callback(this.data[i], i, this.data));
    }
    return new CustomArray(result);
};

// filter method
CustomArray.prototype.filter = function(callback) {
    const result = [];
    for (let i = 0; i < this.data.length; i++) {
        if (callback(this.data[i], i, this.data)) {
            result.push(this.data[i]);
        }
    }
    return new CustomArray(result);
};

// reduce method
CustomArray.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this.data[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.data.length; i++) {
        accumulator = callback(accumulator, this.data[i], i, this.data);
    }
    return accumulator;
};

// forEach method
CustomArray.prototype.forEach = function(callback) {
    for (let i = 0; i < this.data.length; i++) {
        callback(this.data[i], i, this.data);
    }
};

// sort method
CustomArray.prototype.sort = function(compareFn) {
    this.data.sort(compareFn);
    return this; // Return the same object for chaining
};

// Testing the CustomArray
const arr = new CustomArray([5, 2, 9, 1, 5, 6]);

console.log('Original Array:', arr.data);

// Test map
const mapped = arr.map(x => x * 2);
console.log('Mapped (x * 2):', mapped.data);

// Test filter
const filtered = arr.filter(x => x > 4);
console.log('Filtered (x > 4):', filtered.data);

// Test reduce
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log('Reduced (sum):', sum);

// Test forEach
arr.forEach(x => console.log('ForEach value:', x));

// Test sort
arr.sort((a, b) => a - b);
console.log('Sorted Array:', arr.data);
