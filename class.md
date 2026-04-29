The `class` attribute should be used when you want to apply a *set* of CSS [[styles]] to multiple [[HTML elements|elements]], because it does not require you to use unique `class` names.

The `class` attribute can use words that might be considered "reserved" in HTML, like `box`.

## Example

```HTML
<div class="box"></div>
```

Multiple `class` names can be assigned to one `class` by using spaces.

## Example

```HTML
<div class="box red-box"></div>
```

`Class` names also do not need to be unique, and can be assigned to different `class` attributes.

## Example

index.html
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>Colored boxes example</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
  </body>
</html>
```

sytles.css
```CSS
.box {
  width: 100px;
  height: 100px;
}

.red-box {
  background-color: red;
}

blue-box {
  background-color: blue;
}
```


source: https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-html-fundamentals/what-are-ids-and-classes