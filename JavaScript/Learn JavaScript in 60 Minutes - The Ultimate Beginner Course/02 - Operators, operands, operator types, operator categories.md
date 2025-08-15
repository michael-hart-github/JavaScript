# What are operators?

> Operators are the foundation of any programming task.

More specifically, when a *special symbol* is used in a computer program, it (the operator) instructs the computer to perform an action against a value or variable. So, the "operator" is *the symbol* that was used to to instruct the computer to do something.
## I don't get it, yet. What *is* an operator?

Consider this

```js
console.log(2 * 2);
4
```

The `operator` is `*`. The `operator` tells the computer, "do this multiplication task".

So, when you see a `symbol` used in a computer program, that `symbol` is called an `operator`. An `operator` tells the computer to do a specific task.
## What are some real world examples of what operators are used for?
* *Calculating* the score of a game
* *Checking* if a user password is correct
* *Confirming* the price of a product
* `Concatenating` a series of `strings` together
## Example(s) Of a operators
### Example 1 - Concatenation

```js
let firstName = "Mike";
let lastName = "Hart";
console.log(firstName + " " + lastName);
Mike Hart
```

In this example, the *symbol* `+` was the `operator`.
### Example 2 - Remainder

```js
let firstNumber = 17;
let secondNumber = 3;
let remainder = firstNumber % secondNumber;
console.log(remainder);
2
```

In the example above, the *symbol* `%` (which is used to find the remainder of a division) was the `operator`.

# What are operands?
An operand are the values in which a operator uses while performing a task

## Example(s) Of operands
### Example 1 - Addition

```js
let firstNumber = 3;
let secondNumber = 8;
let addition = firstNumber + secondNumber;
console.log(addition);
11
```

In this example, the `operands` were `3` and `8`, while the operator was `+`

### Example 2 - Concatenation

```js
let firstName = "Mike";
let lastName = "Hart";
console.log(firstName + " " + lastName);
Mike Hart
```

In this example, the `operands` were `Mike` and `Hart`, while the operator was `+`

# What operation *types* are there?
There are three *types* of operations. 
* Binary
* Unary
* Ternary
The most common operation type is `binary`.
## What is a `binary` operation?
A binary operation is uses `two operands` (two values).
## Examples of `binary` operations
### Example 1 - Addition, subtraction, and multiplication

```js
console.log(2 + 2);
4
console.log(2 - 2);
0
console.log(2 * 2);
4
```

### Example 2 - Comparisons

```js
console.log(3 > 2);
true
console.log(3 == 2);
false
```

## What is a `unary` operation?
This type of operation uses only *one* `operand`. They are typically used to increment values.
## Example

```js
y++;
x--;
```

## What is a `ternary` operation?
A ternary operation works with *three* operands.

> [!NOTE]
> The speaker says this is a more advanced concept, and doesn't discuss it further.

## Example

```js
(true)?3:2
```

# What are operator *categories*?
There are four operator *categories*:
* `Assignment`
* `Arithmetic`
* `Comparison`

## What are `assignment` operators?
We have already covered this. It is what is used to *assign* a value to a variable.
### Basic example

```js
let awesomeWord = "Cellar Door";
```

## What are `arithmetic` operators?
We have already covered this. It is what is used to perform basic math operations, like addition or subtraction.
## What are `comparison` operators?
Again, we have already covered this. It is what is used to compare one value to another.

### Basic example

```js
console.log(3 == 2);
false
```

## What are `logical` operators?
This type of operator is used to combine conditions like `AND` and `OR`. 

No example given. Presenter says it will be covered later on.

stopped at 32:08