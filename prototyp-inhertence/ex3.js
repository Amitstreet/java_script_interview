let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  // walk is taken from the prototype chain
  longEar.walk(); // Animal walk
  alert(longEar.jumps); // true (from rabbit)

  //Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit, and then in animal.
//   The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. We’ll also cover these functions later.