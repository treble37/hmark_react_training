## Resources

https://codesandbox.io/

https://github.com/coryhouse/rjc/issues

https://github.com/coryhouse/hallmark

### Testing Libraries

- React Testing Library
- Enzyme by AirBnb - complicated, but allows for depth
- Jest
- Cypress

### VS code plugins

quokka.js
prettier
npm
npm Intellisense
Reactjs code snippets
React pure to class

Agenda
Today 6/6/18 Wed
1-3 - Modern JS
3-5 - Build React app

Tomorrow 6/7/18 Thurs
9 - 12 Building React app

- Forms for editing, adding, deleting eCards
- Other binding patterns to solve this keyword issues
- Core React features
- React router?
- Styling?
- How create-react-app works - the tech behind the scenes
- Mock API

1-5 Redux, Testing (Jest, Enzyme, Cypress.io), New React features (context, erorr handling), reusable component design, best practices

### Terminology

- The => uses the "this" that inherits from the parent scope enclosure
- Higher order function - a function that accepts a function

### Naming

- React components traditionally start with an uppercase character

### Other Core Features

- Error boundaries
- Lifecycle methods
- Context - centralize your data
- Redux - centralize your application state

* Do AJAX calls in componentDidMount because you want to make sure your component is mounted
* getDerviedStateFromProps(props) - called any time props have changed

- Stateless functional components (basically declare a function) - Cory recommends you use these because they're faster unless you need state

### Installation

npm install --save-dev react-test-renderer

### Chrome Plugins

- React developer tools
- Redux dev tools

### Reading

- React Documentation
- Egghead.io, Pluralsight
- Looking at open source

## Day 1 6/6/18

### Functions

const helloWorld3 = (message => "hello")

const helloWorld4 = (message) => message;

- JS teams use linters to enforce their styles

### Template literals

### Destructuring

```
const user = {
    name: 'Cory',
    email: 'co@example.com',
    sayHi() {
        console.log('say hi');
    }
}
```

const {name, email} = user;

### Object rest and object spread

```
var obj1 = {
    name: 'Cory'
}

var obj2 = {
    name: 'Cory'
}

console.log(obj1 === obj2) // false

// spread
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

const { name, email, ...rest } = user;
console.log(rest);
```
