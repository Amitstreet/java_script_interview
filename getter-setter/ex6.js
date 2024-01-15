let obj = {};

// define a single property of obj object
Object.defineProperty(obj, "property1", {
  value: 789,
  writable: false,
  enumerable: false,
  configurable: false,
});


obj.property1="7"

console.log(obj.property1); 
console.log(obj)
