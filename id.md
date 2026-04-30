The `id` [[attribute]] helps identify [[HTML elements]]. You should use the id attribute when you want to target a *specific* element, because the `id` attribute must always be unique.

This is useful because you can reference the id of that element within [[JavaScript]] or [[CSS]].

The `id` attribute **cannot** have a space in it, and *must* be unique.
## Example of id
```HTML
<h1 id="title">Movie Review Page</h1>
<h2 id="subtitle">Text</h2>
```

## Example of referencing an id

index.html
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device.width, initial-scale=1.0" />
    <title>Review page Example</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1 id="title">Movie Review Page</h1>
  </body>
</html>
```

styles.css
```CSS
#title {
	color: red;
}
```

The id `title` is referenced from `index.html` to `styles.css`



Source: https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-html-fundamentals/what-are-ids-and-classes