let obj = {};

// define object's property  with access descriptors
Object.defineProperty(obj, "name", {
  get() {
    console.log("Getting Value...");
    return val;
  },
  set(newVal) {
    console.log("Setting Value...");
    val = newVal;
  },
  enumerable: true,
  configurable: true,
});

obj.name = 'Bart'; 
console.log(obj); 

  

