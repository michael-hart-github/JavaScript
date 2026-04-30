In JavaScript, you can pass functions as arguments to other functions.

In the previous chapter, we used this to define callbacks in Node.JS. We also noticed this when working with event handlers in the browser.

When regular functions are used as callbacks, it is extremely easy for code to get "cluttered" with function statements and curly braces, even in the case of simplistic callbacks.

By comparison, with arrow functions, you can keep callbacks clean with comparatively simple syntax.

Here is a comparison example, where we will do callbacks on an array filter, and define it using:
* A traditional function
* And an arrow function

## Example

```JavaScript
let numbers = [-2, -1, 0, 1, 2];

let traditional = numbers.filter(function(num) {
		return num >= 0;
	}
);

let arrow = numbers.filter(num => num >= 0);

console.log(traditional);
console.log(arrow);
```

