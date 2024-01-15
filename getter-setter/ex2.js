let user = {
    get fullName() {
      return `...`;
    }
  };
  
  user.fullName = "Test"; // Error (property has only a getter)

  console.log(user.fullName) // you can read only as there is not setter function
  
