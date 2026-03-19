
Conditional statements are helpful because they give our programs the ability to adapt and respond to different scenarios.
# If statement

## For a weather app
```js
let currentWeather = "Sunny";
if (currentWeather === "Sunny") {
	console.log(sunny-icon.jpg);
} else {
		console.log(shower-icon.jpg);
}
```

## For an ecommerce site
```js
let purchaseTotal = 150;
if (purchaseTotal >= 75) {
	console.log(button.freeShipping);
} else {
		console.log(button.calulateShippingCost);
}
```

## Checking if a website has loaded
```js
let websiteLoadComplete = true;
if (websiteLoadComplete === true) {
	console.log("Website load complete!");
}
```
# If statements with true boolean values

If you are performing a comparison where the value of a variable is a boolean, and the expected outcome is `true`, you do not need to write something like this

```js
let legalToDrink = true;
if (legalToDrink === true) {
	console.log("You are old enough to drink.");
}
```

Instead, you can write this, instead

```js
let legalToDrink = true;
if (legalToDrink) {
	console.log("You are old enough to drink.");
}
```

Come back to 45:00. It talks about weirdnesses when certain datatypes are used in if statements:
* `undefined`
* `null`
* `0`
* `""`
* etc.

# If else statements

If you need to catch for behavior other than what is expected, you need to use an `else` statement.

```js
let username = "eAlderson"
let dbPassword = "robot";
let enteredPassword = "robo"

if (enteredPassword === password) {
    console.log("Welcome back, "+username);
} else {
    console.log("Wrong.");
}
```

# Else if statements

Else if statements are good if you need to check for a number of conditions, not just two.

Example: Suppose you need to greet users in several different languages.

```js
let selectedLanguage = "German";
// let selectedEnglish = "English";
// let selectedSpanish = "Spanish";

if (selectedLanguage === "German") {
	console.log("Willkommen");
} else if (selectedLanguage === "English") {
	console.log("Welcome");
} else if (selectedLanguage === "Spanish") {
	console.log("Bienvenido");
} else {
	console.log("Sorry, we do not support language: "+selectedLanguage);
}
```

Stopping at 50:39

<code>==</code>
` ==`
`==

