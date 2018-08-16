var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  var andy = {
    firstName: 'Andy',
    lastName: 'Yu',
  };

andy.__proto__ = person;
console.log(andy.getFullName());