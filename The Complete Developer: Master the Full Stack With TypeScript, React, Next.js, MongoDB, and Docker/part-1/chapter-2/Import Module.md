Starting on Page 47 (pdf reader) / Page 17 (pdf)

# ESNext import modules

The syntax for `importing` an ESNext module is dependant on the type of `export` created.

*Named* `exports` need to be imported using curly braces.

*Default* `exports` do not need to be imported using curly braces.

## Syntax for importing a default export

Suppose you have a *default* `export` named "getFoo". In the file where you wish to import the module, you also want to call it getFoo for whatever reason. Here's how you would use it:
1. `import` localName (the name you wish to give to it)
2. `from` filename (the filename that contained the code)

### Example

```javascript
import getFoo from "default.js";
```

## Syntax for importing a named export

Suppose you have a *named* `exports` named "getFooBar, getBar, and getBaz".

The only big difference would be that the *named* `exports` that you are importing need to be enclosed in curly braces.

Note: It is *possible* to rename the *named* `export` functions "getFooBar, getBar, and getBaz" to other things, however, you would have to explicitly do so with an `as` statement, and there usually not a compelling reason to do that.

Here's how you would use it:
1. `import` {localName} (must be enclosed in curly braces)
2. `from` filename (the filename that contained the code)

### Example

```javascript
import { getFooBar, getBar, getBaz } from "named.js";
```