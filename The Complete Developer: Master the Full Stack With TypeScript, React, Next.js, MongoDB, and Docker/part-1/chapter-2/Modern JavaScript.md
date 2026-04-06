Starting on Page 45 (pdf reader) / Page 15 (pdf)

# Regarding ES.Next

ES.Next is a way to describe the new versions of JavaScript.

> Most runtime environments have implemented the features covered here. Otherwise, you can transpile them with `Babel.js` creating backward-compatible JavaScript that emulates the new features for older runtimes.

Basically meaning something like this:

> Almost every RTE should support ES.Next -> Older versions of JS, but, if for some reason you can't, you can always use `Bable.js`.

That does not sound very promising. Also, why have I never heard of ES.Next? Am I really that out of the loop, or are they talking about Next.JS in some roundabout way?

Ah. Looking online, I see the issue. For one: it's usually written as "ESNext", not "ES.Next".

Secondly, it's referring indirectly to upcoming versions of ECMAScript. So if ES6 (ECMAScript 2015) is _a_ version of ECMAScript, ECMAScript 2016 (they dropped the "ES#" formatting) is a slightly updated version of ECMAScript, then saying ESNext is like saying, "JavaScript for June of (upcoming year)." It's like saying "version (current)".

Additionally, ECMAScript is not strictly JavaScript. ECMAScript is a specification. JavaScript is an implementation of ECMAScript. Other implementations of ECMAScript, besides JavaScript include: JScript, ActionScript, and QtScript.

# ES.Next modules

> ES.Next modules allow you to separate code into files to improve maintenance and testability. They encapsulate a piece of logic into easily reusable code, and because variables and functions are limited to the module’s scope, you can use the same variable name in different modules without running into conflicts.

That sounds...entirely unremarkable to me. Yeah, you can separate code into files. Yeah, that helps with maintenance and testability. Yeah, that _also_ encapsulates logic into reusable code _because_ variables and functions are limited to the scope of the module. That's how programming is supposed to work, roughly speaking. Code in files. Reusable, low maintenance, and testable. Vars and functions, scoped to a module. So what?

---

Page 46 (pdf reader) / Page 16 (pdf)

> The official ES.Next modules replaced various unofficial module formats, such as UMD and AMD, which you would load with a require statement. For example, you used `require` to include the Express.js package for the Node.js server code in Chapter 1. Instead, ES.Next modules use `export` and `import` statements to export functions from one module’s scope and import them for use somewhere else. In other words, modules allow you to create functions and variables and expose them to a new scope.

To review, I had used

```javascript
const express = require("express");
```

So this is saying that if I had been using an ES.Next module, instead, I would have written:

```javascript
const express = import("express");
```

Or maybe something like:

```javascript
const express = require("express");
// and then in a different file (or something), do something like this?
const exportExpressForESNext = export("express");
const importExpressForESNext = import ("exportExpressForESNext");
```