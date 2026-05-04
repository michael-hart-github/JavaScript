---
created: 2026-05-03 23:59
source: https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-html-fundamentals/what-are-ids-and-classes
tags: [HTML, Literature]
---
# What is the id attribute?
The `id` [[attribute]] is used to identify specific [[HTML elements|elements]] of HTML.

The `id` attribute must always be unique.

The id attribute cannot contain spaces.
# When should I use id?
You should use the `id` attribute if you want to target a *specific* HTML element.

## Why shouldn't I just use `class`, instead?
Class is used when you want to target multiple elements in HTML. Class is not intended for targeting specific HTML elements.

## How is `id` useful?
`id` is useful because the ability to reference a specific HTML element allows you to reference it in [[JavaScript]] or [[CSS]].

# Examples of using the id attribute
## Example of attaching id attribute to an HTML element for later use
```HTML
<h1 id="title">Movie Review Page</h1>
<h2 id="subtitle">On this page, we review movies</h2>
```

## Example of referencing an id attribute

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
    <h2 id="subtitle">On this page, we review movies</h2>
  </body>
</html>
```

styles.css
```CSS
#title {
	color: red;
}
#subtitle {
	color: blue;
}
```
The id `title` is referenced from `index.html` to `styles.css`, and the text is made *red*. The `subtitle` text is made *blue*, following the same method.