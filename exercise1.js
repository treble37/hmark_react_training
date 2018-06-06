/*1. Create a user class with name, email, age and country using the class keyword
2. Add a sayHi method, that says "Hi <name>", and defaults to person if name isn't defined. Format the message with a template string
3. Instantiate and console.log(sayHi())
4. Copy and refactor into an object literal
5. Destructure an instance of the user object to create a separate name const and use the rest/spread operator to place the remaining properties in a separate object
*/

class User {
  constructor(name, email = "bruce@example.com", age = 23, country = "United States") {
    this.name = name || "person"
    this.email = email;
    this.age = age;
    this.country = country;
  }

  sayHi() {
    return `Hi ${this.name}`
  }
}

console.log(new User())
const {name, email, age, country} = new User();
//const {name, ...rest} = new User();
