Arrow functions are an alternative to regular functions. 

Arrow functions offer to big benefits:
1. Arrow functions use a different syntax than regular functions, meaning they are much quicker to write by only requiring a few characters to type, in a single line of code
2. Arrow functions use "lexical scope", making them more intuitive and less error prone

## Syntax

Instead of writing the word `function`, you can simply write = > (without a space) instead. Writing an arrow like that is also called "the fat arrow". Fat arrow reduces noise and offers more "compact" code. 

Modern JS prefers fat arrow syntax when passing functions as arguments.

If an arrow function only has one parameter and one statement, omit both `curly brackets` and `return`.

Omitting curly brackets and return is called a "concise body" function.

## Example of traditional function vs arrow function

```JavaScript
const traditional = function (x) {
	return x * x;
}

const conciseBody = x => x * x;
```