// Error: Invalid property descriptor.
  let user = {
    name: "John",
    surname: "Smith"
  };
  
//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   });
  
//     user.fullName= 'amit singh'
//   console.log(user.fullName); // John Smith
  
//   for(let key in user) console.log(key);

//   console.log(user)


  Object.defineProperty(user, 'prow', {
    // get() {
    //   return 1
    // },
  
    value: 2
  });

  console.log(user.prow);