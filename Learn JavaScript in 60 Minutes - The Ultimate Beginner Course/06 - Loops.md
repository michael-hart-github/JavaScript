# Loops
Loops are helpful because they allow a program to repeat an action.
# While loop
The simplest type of loop. The condition between the parenthesis can either be a comparison or a boolean.

```js
while (i < 10) {
	// do something
}
```

```js
while (keyPressed) {
	// do something
}
```

While loops are typically used with a variable named `counter`, but does not have to be.

```js
let counter = 0;
while (counter < 10) {
	console.log("The number is: "+counter);
	counter++;
}
```

# For loop

A for loop differs from while loops by having three expressions within the parenthesis.

```js
for (let i = 0; i < 10; i++) {
	// do something
}
```

## First part: Initialization
The first part is called initialization. Initialization is used to setup counter variables. In the example below, the counter variable is `i`.

```js
for (let i = 0;)
```

## Second part: Condition
The second part is called condition. It is where you define the parameters of what the counter is counting against, or towards.

The condition is checked before each iteration. 

> [!NOTE] Isn't that condition exactly the same as how the while loop works?
> Yes. There is no difference so far, between the while loop and the for loop

```js
for (let i = 0; i < 10; )
```

## Third part: Increment / decrement
The third part is called the increment, if counting up, or decrement, if counting down.

Within this third part, the for loop updates the counter variable (`i` in this example) after each loop iteration. That is to say, `i` is updated *after* the execution of the code within the curly braces. 

1. (do a thing)
2. update `i`
3. (do a thing)
4. update `i`

> [!error] Take note
> `i` is **NOT** updated before code execution, *even though* the increment / decrement is placed in the area above code execution

```js
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

> [!Warning] Regarding `i++`
> The third condition is written as `i++`.
> Do not write `i++;` (with a semi colon). You will receive an error

# For each loop
Will be covered later.
# Do while loop
Not used very often.

# For loops and While loops seem very alike. Which should I use and why?
It depends in the *kind* of task being performed, and even then, it can change.
## Counting
The presenter says that for loops are (usually) the better choice when it comes to **counting,** because:
1. It is fewer lines of code
2. Because all parts of the loop are within the parenthesis, it makes the code "more organized" (debatable)
3. Because the while loop requires work done outside of the loop, and within the parenthesis, and within the body of the loop it is "easier to forget to increment" (debatable)
## Unknown number of times a piece of code needs to run
The presenter says that while loops are the better option when you have an "unknown quantity" or are "uncertain of" how many times a task may need to be performed.

>You just keep going until the condition becomes false.

## In other words...
* while loops seem to be more suited for loops requiring a boolean
* for loops seem to be more suited for loops that require an integer or float