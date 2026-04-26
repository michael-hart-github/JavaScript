Besides differences in syntax between regular functions and arrow functions, there are other points to consider as well:

* Regular functions "bind their scope" to the object that calls that function. Arrow functions, however, do not "bind their scope" to the object that calls the function
* Arrow functions use lexical scope, which means that the surrounding scope determines the value of the `this` keyword.
* (This part is hard to understand) The scope which `this` refers in an arrow function always represents the object *defining* the arrow function, instead of the object *calling* the function
	* I think what they mean is this: "With a traditional function, whatever *calls* the function determines what the scope is for the function, not *where* the function was made. With arrow functions (using lexical scope) the roles are completely reversed: *where* that arrow function was made determines what its scope is, not what *calls* it."

## Example of lexical scope

```JavaScript
this.scope = "lexical scope";

const scopeOf = {
	scope: defining scope",
	
	traitional: function () {
		return this.scope;
	},
	
	arrow: () => {
		return this.scope;
	},
};

console.log(scopeOf.traditional());
console.log(scopeOf.arrow());
```