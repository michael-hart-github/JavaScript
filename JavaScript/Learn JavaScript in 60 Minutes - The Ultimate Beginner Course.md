Source: https://www.youtube.com/watch?v=voLJ3CmaM1s

Talks about setting up VS Code
Talks about `emmet`
`emmet` wasn't starting automatically. I had to make an `index.html` file. Duh.

Talks about HTML
h1. blah blah blah, `live server`. Already done.

Talks about `script` tag
Presenter likes to put it in `head`, or in the bottom of `body`.

Works!
![[Pasted image 20250811165829.png]]

Presenter starts talking about how to check for error messages
For example, with the script tags, change:
`alert("Hello World");`
to
`alert("Hello World";)`

Then open DevTools -> Console
![[Pasted image 20250811170147.png]]

What about multiple alerts?

```js
alert("Hello World!");
alert("Hello JavaScript!");
alert("Hello GitHub!");
```
After closing the first message, the second opens
After closing the second message, the third opens
After closing the third message, nothing happens.

Line-by-line, top-to-bottom.

"Probably the main purpose of JavaScript is to interact with HTML and CSS"

To do something like changing the background color:
`document.body.style.background = "blue";`

`document` represents the entire webpage
From the entire webpage, we want to specifically access the `body`
Body contains the `style` property
The style has `background` as an option
One of the options for background is `blue`

He starts talking about the issues surrounding putting all your JavaScript directly in an HTML file, making it messy and hard to read.

We'll name ours app.js