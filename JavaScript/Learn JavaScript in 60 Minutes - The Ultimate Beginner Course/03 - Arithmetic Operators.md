# What are Arithmetic Operators?
Arithmetic Operators are operators used to perform calculations on numbers.

## Example

```js
let valueTen = 10;
let valueFive = 5;
console.log(valueTen + valueFive);
15
```

That is an arithmetic operator. Same goes for things like:
* `Subtraction`
	* Uses `-`
* `Multiplication`
	* Uses `*`
* `Division`
	* Uses `/`

## A new operator

Aside from the standard operators that you would be aware of (listed above) there are also other operators that you may not be aware of:
* `Modulo` (aka `remainder`)
	* Uses `%`
	* Commonly used to find out if a number is divisible by a different number. This is helpful to find out if a number is odd or even
		* If the result is `2`, it is even
		* If the result is `1`, it is odd
* `Exponentiation` (aka `exponent`)
	* Uses `**`
### Example of exponentiation

```js
console.log(4 ** 3);
64
```

This is how you would write `4^3`. That is, `4 x 4 x 4`

# What else can you do with Arithmetic Operators?

You can combine arithmetic operators, like so:

```js
let valueTen = 10;
let valueFive = 5;
console.log(valueTen + valueFive * valueFive);
35
```

This follows PEMDAS.

1. `valueFive` * `valueFive` = 25
2. 25 + `valueTen` = 35

The order of operations can be changed by using parenthesis, like in math. (10 + 5) * 5 = 75

```js
let valueTen = 10;
let valueFive = 5;
console.log((valueTen + valueFive) * valueFive);
75
```

> [!NOTE] Notice the enclosed parenthesis
> `valueTen` and `valueFive` must have a parenthesis around both sides, or else you get an error message.

## You can use a variable as part of a calculation to update that same variable

```js
let age = 18;
age = age + 1;
console.log(age);
19
```

# Addition assignment operator
You can also write that more concisely with the `addition assignment operator`

> [!Warning] Incrementing by 1
> If you are only increasing a variable by 1, refer to the increment operator below. It is considered good practice!

```js
let age = 18;
age += 1;
console.log(age);
19
```

This also applies to `subtraction`, `multiplication`, `division`, and `remainder` operators.

```js
age -= 1;
age *= 1;
age /= 1;
age %= 1;
```

# Increment and decrement operators
If you only need to increase a value by 1 at a time, it is considered best practice to do the following

```js
let age = 18;
age++;
console.log(age);
19
```

The same goes for decreasing the value by 1 at a time.

```js
let age = 20;
age--;
console.log(age);
19
```

