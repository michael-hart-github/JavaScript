# Functions
Do you recall creating alerts? If you do, that is a function. Here's what it looked like:

```js
alert("Hello");
```

## In a more realistic setup it might look like…
### Within a file named `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="alertApp.js"></script>
  </body>
</html>
```

### And within a second file named `alertApp.js`

```js
alert("Hello");
alert("alert() is a function!");
```

## Have we used any other functions?
Yes. We also used `console.log();`, which is a function that prints text within the console of DevTools.

## What are these functions? I thought I had to make a function?
Both `alert()` and `console.log()` are "built-in" functions within JavaScript. There are many other (over 1,000!) built-in functions.

## Examples of other built-in functions

### Date
This prints out the current date and time.

```js
Date();
'Thu Aug 28 2025 22:12:27 (redacted)'
```

> [!NOTE] Not working?
> Make sure you are capitalizing the "D" in Date. Remember that capitalization matters in JavaScript!

### toLowerCase
This forces text to lowercase.

```js
"TEXT IN CAPS".toLowerCase();
'text in caps'
```

### Math.random
This generates a random number.

```js
Math.random();
0.23267414695135247
```

# What if there isn't a built-in function for something I need?
If a function does not exist for what you need, you will have to make your own.

## What is a function?
Functions are a means to write code in a *reusable*, and organized way.

In other words, when you write programs, there will inevitably be some kind of task that needs to happen repeatedly.

## Example with humans
Suppose you explain to a student how to perform addition.

>There are two numbers.
>
>To add, you will count upward to the value of the first number. Then, continue counting upwards by the amount of the second number.
>
>The number that you end on is the sum of "adding" those two numbers together. What was two has become one.

Now suppose that you need to tell the student to perform 50 math problems in a row. Should you instruct them how to perform addition each time? No, that is tiresome. The way to perform that task has already been described precisely and in detail. The student just needs to repeat that same set of instructions without you needing to describe in-depth of *how* to do.

The simplicity of that is a function.

> Okay, add 2 and 3.
> Next, add 4 and 7.
> Finally, add 17 and 1.

## Example with JavaScript
In JavaScript that would look like:

```js
function add (a, b) {
    return console.log(a + b);
}
console.log(add(2,3));
// 5

console.log(add(4,7));
// 11

console.log(add(17,1));
// 18
```

# Making functions
The syntax of a function looks like this

`function functionName() {}`

The name of a function should describe what it does. For example, a function that greets the user every time they login by printing text on the screen should be built something like this:

```js
function welcomeTextOnLogon() {
	console.log("Hello, " + username + ". Welcome back.");
}
```

After building a function (function declaration), you have saved something to be run within the program, but it does not run automatically. In order to get a function to run within a program, you need to…

# Call a function
If we wish to activate or "call" a function, we need to invoke it. The way we do that is like this:

```js
function welcomeTextOnLogon() {
	console.log("Hello, " + username + ". Welcome back.");
}
welcomeTextOnLogon();
```

> [!NOTE] Regarding the parenthesis
> Keep in mind that in this example, the parenthesis are not being used. There are cases where they will be used.

Calling a function multiple times will cause it to execute multiple times.

stopping at 1:01:25