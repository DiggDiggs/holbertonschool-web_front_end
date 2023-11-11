function welcome(firstName, lastName) {
    // Combine firstName and lastName
    var fullName = firstName + ' ' + lastName;
  
    // Function to display full name
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the displayFullName function
    displayFullName();
  }
  
  // Example usage
  welcome('Christopher', 'Diggs');
  