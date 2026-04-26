this.scope = "lexical scope";

const scopeOf = {
  scope: "defining scope",

  // this scope is defined based on where it is CALLED
  traditional: function () {
    return this.scope;
  },

  // this scope is defined based on where it is MADE
  arrow: () => {
    return this.scope;
  },
};

console.log(scopeOf.traditional()); // scope is global; it was CALLED globally
console.log(scopeOf.arrow()); // scope is block; it was MADE in a block; "Each time you write a  new set of curly braces, a new *block scope* is created"
