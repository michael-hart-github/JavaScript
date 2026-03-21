# Source Material

* Video: [https://www.youtube.com/watch?v=PkZNo7MFNFg](https://www.youtube.com/watch?v=PkZNo7MFNFg)
* Using [codepen.io](https://codepen.io) to write JS with.

```JS
console.log("Hello World!");
```

`Ctrl + Shift + 7` in CodePen to run/re-run preview
# Terms
## Comments

`In-line` comment

```JS
//
```

`Multi-line` comment

```JS
/* Text here
and here
ending here */
```
## Data Types

- `undefined`: Something that has not been defined
- `null`: nothing
- `boolean`: true or false
- `string`: any sort of text
- `symbol`: immutable primitive value that is unique
- `number`: a number
- `object`: can store many key value pairs
# Variables

A variable allows you to store and manipulate data in a dynamic way. It's a label to point to data.

`var`: "var" is short for variable

```JS
var myName = "Mike";
console.log(myName);
```

You can override the value of a variable with new data.

```JS
var myName = "Mike";
console.log(myName);
myName = 8;
console.log(myName);
```
## Variable declaration

There are three ways to declare a variable.

1. `var`
2. `let`
3. `const`

`var` is able to be used throughout a program

`let` can only be used within a scope of where it was declared
Will be covered later

`const` is unchanging
Example: Pi will always start with 3.14. It is unchanging
## Declaring and assigning variables

```JS
var a; // This declares variable 'a'
var a = 2; // This assigns variable 'a' the value 2
var b = 3; // This declares *and* assigns variable 'b'
```

You can declare and assign separately, but you do not have to.
## Uninitialized variables

A variable that has not been defined is considered to be uninitialized

```JS
var a; // uninitialized

/* If you were to change the above to this */

var a = 1; // initialized
```

You can add the *previous* value of a `var` to a newly assigned value.

```js
var a = 1;
a = a + 1;
console.log(a); // output is 2
```

You can do the same with strings.

```js
var me;
me = "Mike";
me = me + " Hart";
console.log(me); // output is Mike Hart
```
## Case Sensitive

Variables and Functions are case sensitive in JavaScript.

```js
var me = "Mike";
var Me = "John";
console.log(me); // output is Mike
console.log(Me); // output is John
```
## Camel Case

Commonly expected case is "camel case". It is written as this

```js
var variableName;
```

Basically, the first word of a name is lower case. Proceeding words in the variable are upper case.
# Math in JavaScript
## Addition

```js
var sum = 10 + 10;
console.log(sum); // output is 20
```
### Augmented addition

Instead of writing something like this:

```js
var sum = 10;
sum = sum + 10;
console.log(sum); // output is 20
```

It's possible to write something like this instead:

```js
var sum = 10;
sum += 10;
console.log(sum); // output is 20
```
## Subtraction
```js
var sum = 10 - 5;
console.log(sum); // output is 5
```
### Augmented subtraction

Instead of writing something like this:

```js
var sum = 10;
sum = sum - 5;
console.log(sum); // output is 5
```

It's possible to write something like this instead:

```js
var sum = 10;
sum -= 5;
console.log(sum); // output is 5
```
## Multiplication
```js
var sum = 10 * 5;
console.log(sum); // output is 50
```
### Augmented multiplication

Instead of writing something like this:

```js
var sum = 10;
sum = sum * 2;
console.log(sum); // output is 20
```

It's possible to write something like this instead:

```js
var sum = 10;
sum *= 2;
console.log(sum); // output is 20
```
## Division 
```js
var sum = 10 / 5;
console.log(sum); // output is 2
```
### Augmented division

Instead of writing something like this:

```js
var sum = 10;
sum = sum / 2;
console.log(sum); // output is 5
```

It's possible to write something like this instead:

```js
var sum = 10;
sum /= 2;
console.log(sum); // output is 5
```
## Multiplying decimals

You can multiply floats the same way that you would multiply integers.

```js
var product = 3.1 * 1.1;
console.log(product); // output is 3.4100000000000006
```
## Dividing decimals

Again, you can divide floats the same way that you would divide integers.
```js
var quotient = 3.1 / 1.1;
console.log(quotient); // output is 2.81 repeating
```
## Finding the remainder

> [!info] Common use for remainder
> Typically, the remainder operator is used to determine if a number is odd or even.
> 
> "If a number can be divided by 2, and the remainder is 0, then the number is even."

You use the percent sign (`%`) to find a remainder in JavaScript. A remainder is the "remainder" of two numbers being divided.

```js
var remainder = 11 % 3; // 11 divdied by 3 is 9. 11 minus 9 is 2.
console.log(remainder); // output is 2
```
# Incrementing numbers in JavaScript

Incrementing means to "add to it".

```js
var countingUpTo50 = 48;
countingUpTo50 = countingUpTo50 + 1;
console.log(countingUpTo50); // output is 49
```

To write that same information out with less text, it would look like this:

```js
var countingUpTo50 = 48;
countingUpTo50++;
console.log(countingUpTo50); // output is 49
```
# Decrementing numbers in JavaScript

Decrementing means to "take from it".

```js
var countingDownTo45 = 48;
countingDownTo45 = countingDownTo45 - 1;
console.log(countingDownTo45); // output is 47
```

To write that same information out with less text, it would look like this:

```js
var countingDownTo45 = 48;
countingDownTo45--;
console.log(countingDownTo45); // output is 47
```
# Decimals in JavaScript

A number like 3.1 could be called a few different things in JavaScript:
1. Decimal
2. `Floating point number`
3. `Float`

```js
var myDecimal = 3.1;
var otherDecimal = 0.0009; // example with more zeros
```

# Strings
## String literals

String literals can be defined with any of the following:
* Back ticks: \`
* Single quotes: '
* Double quotes: "

When a string is surrounded with any of the above, it is a string literal

```js
var firstName = "Mike"; // the word "Mike" is a string literal
```

## Escape characters

In the event you have text that needs to contain a quote, for example: "Four score and seven year ago..." That phrase must be properly quoted in order to indicate that it is a quotation taken from another source. To do that, you must use the backslash (\) character.

```js
var aQuoteWithAttribution = "As a former President once said, \"Four score and seven year ago...\", it should be recalled how phrases change over time."
console.log(aQuoteWithAttribution); /* output is: "As a former President once said, 'Four score and seven year ago...', it should be recalled how phrases change over time." */
```
## Alternative to backslash - single quote

It is fairly uncommon to *need* to escape double quotes with backslashes. Instead, the *double quotes* surrounding a string of text which contains double quotes can instead be escaped by surrounding that block of text with *single* quotes.

```js
var aQuoteWithAttribution = 'As a former President once said, "Four score and seven year ago...", it should be recalled how phrases change over time.'
console.log(aQuoteWithAttribution); /* output is: "As a former President once said, 'Four score and seven year ago...', it should be recalled how phrases change over time." */
```

This is helpful because excess characters do not have to be added into the body of the string literal.

## Alternative to backslash - back tick

In cases where a quoted piece of text contains both double quotes *and* single quotes, it is possible to avoid using backslash by instead surrounding the string literal with back ticks.

```js
var aComplexQuote = `In his most famous biography, the author wrote: 'As a former President once said, "Four score and seven year ago...", it should be recalled how phrases change over time.' Although this is technically true, it ought also be recalled that the study of language informs readers of those changes to language, and we need not 'dumb down' our means of writing in order to meet modern sensibilities.`
console.log(aComplexQuote); /* output is: "In his most famous biography, the author wrote: 'As a former President once said, 'Four score and seven year ago...', it should be recalled how phrases change over time.' Although this is technically true, it ought also be recalled that the study of language informs readers of those changes to language, and we need not 'dumb down' our means of writing in order to meet modern sensibilities."*/
```