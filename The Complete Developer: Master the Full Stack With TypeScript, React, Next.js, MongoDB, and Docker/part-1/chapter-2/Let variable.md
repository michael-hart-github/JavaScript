# Let variable

The let variable is considered to be a *non-hoisted variable*.

With the `var` variable, it will always be hoisted from block to the top scope it resides within.

Comparatively, with the `let` variable, it is possible to create a "block-scoped" variable that can only be accessed after it has been declared.

## Why is that useful?

That is useful because...

## Block-scoped variables

Block-scoped variables are limited to the *scope* of the block statement in which they are defined within.

# Differences between global variable types

* A global variable defined with `var` is added to the *window* object
* A global variable defined with `let` is not added to the *window* object

## Example

We will define:
1. A variable foo inside a function scope
2. A variable bar inside a block scope

```javascript
let globalVar = "global"; // exists in global scope
function scope() {
    let foo = "1"; // exists in function scope
    if(true) {
        let bar = "2"; // exists in block scope
    }
    console.log(globalVar); // will print
    console.log(window.globalVar); // will error, because global let var is not added to window object the same way global var is
    console.log(foo); // will print; scope(); is called at the bottom so items within function scope will be included
    console.log(bar); // will not print; it's scope is limited to block scope. It is not hoisted to function scope.
}
scope();
```

Stopping on top of Page 50 (pdf reader) / Page 20 (pdf)