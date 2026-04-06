Starting on Page 46 (pdf reader) / Page 16 (pdf)

# ESNext export modules

For export, there are two different kinds of `export`; _default_ and _named_.

## Default export

> Default exports require you to define new function names on import.

ESNext _default_ `export` _requires_ a new function name when `importing`.

## Named export

> For named exports, renaming is optional and done with the as statement.

ESNext _named_ `export` has _optional_ function name when `importing`.

## Best Practice

_Named_ export's are considered best practice because _named_ exports "define a clear and unique interface for the module’s
functionality". That doesn't really mean anything to me. "[...] clear and unique interface for the module's functionality"? How is that it _does_ that, exactly?

## Why not use default export?

The risk of using _default_ `export` is that, when when a _default_ `export` is `imported`, there is a risk of importing the _same function_ under a different name!

The way I am imagining this to be is something like, if I had an alias for `rm` called `remove`, that re-used exactly all of the same functions/features of `rm`, but perhaps didn't have the same safety features? Or maybe it's more about space concerns.

# Differences between JavaScript and TypeScript for exports

More leeway for _default_ `exports`, more specificity for _named_ `exports`

The recommendations above (Best Practices, etc.) are what apply to JavaScript. However, with TypeScript, they recommend using _default_ `exports` if the module has:

1. A singular, clear purpose
2. It is a _single_ export

Conversely, TypeScript recommends using _named_ `exports`:

- Whenever a module is going to export more than one item

In that way, it sounds like TS doesn't care _at all_ about whether or not an `imported` module has the same functions as another function with a different name.

# Default export syntax

It is important to know the syntax of _default_ `exports` because third party modules will use them frequently. Compared to _named_ `exports`, only one _default_ `export` can be be made per-file. It will be marked with the keyword `default`.

(This is a guess, based on later text)

export default must be performed outside of the curly braces of a function.

## Example

Below, we will do the following:
1. Make an anonymous `function`
2. Store the anonymous `function` in a `constant` named "getFoo"
3. `Export` the the `constant` "getFoo" using `default`. Using default makes it the modules *default* `export`.

```javascript
const getFoo = function () {
  return "foo";
};

export default getFoo;
```

# Named export syntax

With *named* `exports`, you can perform the export at the end of the file, in the same manner that is done with *default* `export`, or, you can perform the *named* `export` inline.

## Example

Below, we will do the following:
1. Make a anonymous `function`
2. Store the anonymous `function` in a `constant` named "getFooBar"
3. Immediately `export` the `function` as "getFooBar"
4. Define two additional anonymous `functions`
5. Export the anonymous `functions` as *named* `functions` in curly braces

```javascript
export const getFooBar = function () {
  return 'foo bar';
};

const getBar = function () {
  return 'bar';
};

const getBaz = function () {
  return 'baz';
};

export {getBar, getBaz};
```