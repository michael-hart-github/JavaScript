Source: https://www.youtube.com/watch?v=voLJ3CmaM1s

Talks about setting up VS Code
Talks about `emmet`
`emmet` wasn't starting automatically. I had to make an `index.html` file. Duh.

Talks about HTML
h1. blah blah blah, `live server`. Already done.

# `script` tag
It can be used in the `header`, or in the `body` (preferably at the bottom).
Presenter likes to put it in `head`, or in the bottom of `body`.

You can use script to do stuff like make `alerts`
# `alert`
Alerts are like a popup.

To make an alert, put it within the script tag, like so

```html
<body>
    <script>
        document.body.style.background = "blue";
        alert("Hello World!");
        alert("Hello JavaScript!");
        alert("Hello GitHub!");
    </script>
</body>
```

It should look something like this
![[Pasted image 20250811165829.png]]

## Multiple `alerts`

If you want to make multiple alerts, it would look something like this:

```html
<body>
    <script>
        document.body.style.background = "blue";
        alert("Hello World!");
        alert("Hello JavaScript!");
        alert("Hello GitHub!");
    </script>
</body>
```

## Order matters
You will notice that depending on which order you write the alerts in impacts which alert will be shown first.

Example:
After closing `first message`, `second message` opens
After closing `second message`, `third message` opens
After closing `third message`, nothing else happens

JavaScript follows the following format:
Line-by-line, top-to-bottom, left-to-right.

# Checking for error messages
Suppose that instead of writing:
`alert("Hello World");`

You instead wrote this:
`alert("Hello World";)`

You wouldn't see the alert popup, but if you opened DevTools, you would see this in the console

![[Pasted image 20250811170147.png]]

`Uncaught SyntaxError: missing ) after argument list (at index.html:11:15)`

# One of the main purposes of JavaScript is...
> Probably the main purpose of JavaScript is to interact with HTML and CSS

To do something like changing the background color:
`document.body.style.background = "blue";`

Breaking that down a little bit:
* `document` represents the entire webpage
* Of that webpage, you want to specifically access the `body` of it
* The `body` of the webpage contains the `style` property
* The `style` property has `background` as an option
* One of the options you can choose for `background` is `blue`

# Issues with putting JavaScript directly into HTML
You probably don't want to put JS directly into HTML files because
1. It gets hard to read the JavaScript very quickly
2. It gets hard to read the HTML very quickly
3. If you want to reuse the same JavaScript for multiple webpages, you have to copy/paste it

# Put JavaScript in its own files
It's better to put JavaScript in its own file, and call it to the HTML page it is needed for.

Example
1. make a new folder (Lesson-3)
2. Name the JavaScript program `app.js`
3. Put an alert in the JavaScript program
```js
// this is the only text in the js file. Nothing above or below is needed!
alert("Hello");
```
4. Make an `index.html` file
5. Use emmet (`!`)
6. Within the `body`, add your `script` tag.
7. In the opening `script` tag, include a source that points to the file `app.js`

```html
<body>
    <script src="app.js"></script>
</body>
```

This `app.js` file can be used across multiple HTML pages, *without* requiring you to copy/paste the code each time.

If you have different scripts doing different things, you'll want to separate them into their own files.
Example:
1. `file-1.js` is for alerts
2. `file-2.js` is for text validation
3. `file-3.js` is for animation

To include multiple scripts within a single HTML page, simply use more `script` tags like this
```html
<body>
    <script src="file-1.js"></script>
    <script src="file-2.js"></script>
    <script src="file-3.js"></script>
</body>
```
# Using the console
