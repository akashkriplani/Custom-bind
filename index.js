// Custom bind using apply

Function.prototype.bind = function(whoIsCallingMe){
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, arguments);
  };
}

// Custom date to get the previous year

Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
};

console.log(new Date().lastYear());
console.log(new Date('1900-10-11').lastYear()); // 1899

// Custom map
// Modifies the array and returns the doubled value of each element in the array

Array.prototype.map = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i]*2);
  }
  return arr;
}

console.log([1, 2, 3].map());   // Returns [2, 4, 6]