`Comparison operators` let us compare *two* values. An easy way to think about comparison operators is to think of them as "making a statement" or "asking a question".

```js
let name = "Mike";
name == "Tom";
false
```

```js
let valueFive = 5;
console.log(10 == valueFive);
false
```

```js
let loggedIn = true;
console.log(loggedIn != false);
true
```

If a statement is correct, it returns `true`. If a statement is incorrect, it returns `false`.

A comparison will always return a boolean.

Greater than and less than are pretty obvious. If a number is greater than another, or if a number is less than another, it returns information according.
# Equal to operator

The equal to operator checks if two values are the same. It is written with two equal signs

```js
==
```

> [!Important] Meta note
> Trying to write == with two backticks surrounding it caused an error in Obsidian.


> [!Warning] Unexpected behavior with equal to operator
> Sometimes it can be fine to use the equal to operator. Other times, it can lead to unexpected behavior.
> 
> For example, if you have a variable set to a integer, and perform an equal to of a string of the so-called "same" value, it will be accepted

```js
let euqalsFive = 5;
equalsFive == "5";
true
```

The above example is unexpected behavior, because the "5" is a string, not an integer. 

Additional examples

```js
false == 0;
true
undefined == null;
true
"" == 0;
true
```

This is why the following operator exists...
# Strict equality operator

The strict equality operator is very similar to the equal to operator. The difference between the equal to operator, and the strict equality operator is that the strict equality operator *also* checks the *datatype* of the values.

The strict equality operator uses three equal signs in a row:

```js
===
```

Example:

```js
let normalEqualToOperator = 5;
let strictEqualityOperator = 5;
normalEqualToOperator == "5";
true
strictEqualityOperator === "5";
false
```
# Greater than or equal operator

The greater than or equal operator checks if the value on the left *side* is greater than or equal to the value on the *right* side.

```js
let valueFive = 5;
let valueTen = 10;
let valueName = "Mike";
valueFive >= 10;
false
valueTen >= 10;
true
valueName >= 10;
false
```

# Less than or equal operator

The less than or equal operator checks if the value on the left *side* is less than or equal to the value on the *right* side.

```js
let valueFive = 5;
let valueTen = 10;
let valueName = "Mike";
valueFive <= 10;
true
valueTen >= 10;
false
valueName >= 10;
false
```

# Not equal operator

The not equal operator checks if two values are the same.

```js
let valueFive = 5;
let valueTen = 10;
let valueName = "Mike";
valueFive != 10;
true
valueTen != 10;
false
valueName != 10;
true
```

# Strict inequality operator

The strict inequality operator checks if two values are the same, and *also* checks if they use the same *datatype*.

```js
let valueFive = 5;
let valueTen = 10;
let valueName = "Mike";
valueFive !== "10";
true
valueTen !== "10";
true
valueName !== "10";
true
```