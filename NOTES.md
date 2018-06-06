## Resources

https://codesandbox.io/

https://github.com/coryhouse/rjc/issues

Agenda 
Today 6/6/18 Wed
1-3 - Modern JS
3-5 - Build React app

Tomorrow 6/7/18 Thurs
9 - 12 Building React app
1-5 Redux, Testing, New React features (context, erorr handling), reusable component design, best practices

## Day 1 6/6/18

### Functions

const helloWorld3 = (message => "hello")

const helloWorld4 = (message) => message;

* JS teams use linters to enforce their styles

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

