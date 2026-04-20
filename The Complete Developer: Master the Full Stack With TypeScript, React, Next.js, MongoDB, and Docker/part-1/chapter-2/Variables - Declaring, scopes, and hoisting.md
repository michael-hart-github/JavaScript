Starting on Page 47 (pdf reader) / Page 17 (pdf)

# Declaring variables

There are three types of variables in JavaScript:
* `var`
* `let`
* `const`

Stop the presses!

Okay, the writer has a bone to pick about var being outdated.

> Often, you’ll be given the advice to avoid var because it is “outdated.” You can rest assured that it’s not, and you must understand each of these variable declaration methods in order to choose the right tool for the job.

He's not *wrong*, but it may be more illustrative to say something like "`var` is still used under various conditions, for various reasons, but is less popular than it used to be, because of the availability of `const`."

# Scopes

Each variable type differs by their *scope*. Scope defines the "code area" in which we can access and use each variable type.

JavaScript has multiple levels of scope:
* Global
* Module
* Function
* Block

## Block scope

1. Block scope applies to any block enclosed in curly braces
   1. Each time you write a  new set of curly braces, a new *block scope* is created
2. Block is the smallest unit of scope

## Function scope

1. Function scope applies any time a specific function is created
2. Function scope is limited to the code area inside of a function

## Module scope

1. Module scope applies any time a specific module is created

## Global scope

1. Global scope applies to the entire program area
2. Variables created in global scope are available in all parts of the code
   1. Its code space is anywhere within the code

## Variables and their children

A variable is always available:
1. Within its own scope
2. All of its child scopes

### Example

A `function` scope can contain multiple `block` scopes.

## Defining variables multiple times

The *same variable name* can be defined *multiple times* in a program, as long as each variable occurs within *different scopes*.

# Hoisted Variables

Starting on Page 48 (pdf reader) / Page 18 (pdf)

The scope for `var` is the current execution context, which is usually the enclosing `function`. If, however, `var` is declared *outside* of any `function`, that variables scope is `global`, and that variable creates a property "on the global object".

(I don't fully understand what this is supposed to mean. I think it's something like this:

* If `var` is declared inside a function, its scope is within that function
* If `var` is declared outside a function, its scope is global
  * If `var` is global, the "global object" (what is this?) has a property created, which somehow references or notes the `var` that was made.)

`var` is unique from all other variable types. This is because the Runtime Environment (RTE) "moves" (aka *hoists*) the `var` declaration to the top of its scope at execution.

## So...why does that matter?

That matters because when a variable is *hoisted*, you can *call* the variable in code *before* the variable is *defined*.

### Example of hoisting

Again, the idea of hoisting is that you can call `var` in code *before* you define it. So, for example, you can assign a value to a variable *before* declaring it, like so:

```javascript
function scope() {
    foo = 1; // foo is given the value 1
    var foo; // foo is defined
}
```
In the above, the `foo` var was assigned a value of 1 before we were even told what `foo` was. In the line after, we were told what `foo` was. We were able to do that because `foo` was *hoisted*.

That is to say, because of "hoisting" in JavaScript, the parser moved all variable declarations defined with the `var` keyword to the *top* of the scope.

That means that the above example is equivalent to this:

```javascript
function scope() {
    var foo; // foo is defined
    foo = 1; // foo is given the value 1
}
```

In turn, because of *hoisting*, a `block` scope does not apply to `var` variables. A `var` variable, even if it is defined in a `block` scope, it will always be hoisted to whichever scope it is within because of *hoisting*.

Below is an example of this in action:
* `globalVar` is in `global` scope
* `foo` is in `function` scope
* `bar` is in `block` scope

```javascript
var globalVar = "global"; // globalVar is given the value global; globalVar has global scope
function scope() {
  var foo = "1"; // foo is given the value 1; foo is in function scope, but hoisted to global
  if (true) {
    var bar = "2"; // bar is given the value 2; bar is in block scope, but is hoisted to global
  }
  console.log(globalVar);
  console.log(window.globalVar);
  console.log(foo);
  console.log(bar);
}

scope();
```

If `foo` and `bar` had not been *hoisted* to the top of the scope, they would not have been available 