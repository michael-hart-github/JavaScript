# Building a simple Express-based Node server

Starting around page 43, we're told we'll be building a simple Express-based Node server.

## Setup

1. Use the sample-express directory from before
   1. Note: I'm going to ignore this and use my express-server directory instead. I want to practice this multiple times and I don't feel like switching back and fourth.
2. Initialize a new Node project (`npm init`)
3. Accept the defaults
4. Install the latest _major_ version of Express 4 (`npm install express@4`)
   1. Note: I could do `npm install express@5`, but I'd rather just follow things the way the book is written at the moment. <package>@<n> gives you the most recent major version of that package.
5. Create index.js in the directory (`touch index.js`)

## Server Code

1. Paste in the code from page 43, Listing 1-5

```javascript
const express = require("express");
const server = express();
const port = 3000;
server.get("/hello", function (req, res) {
  res.send("Hello World!");
});
server.listen(port, function () {
  console.log("Listening on " + port);
});
```

### What the code above is doing is this:

1.  Load express into the file (line 1)
2.  Instantiate the application (I.e., `server`) (line 2)
3.  Define a constant for the sever's port (line 3)
4.  Create a route on the `server`
    1.  The server will respond to all GET requests sent to `/hello` base URI with "Hello World!"
        1.  The GET requests will be recognized because Express has the `get` method(), and it is used at the first parameter
        2.  The server will respond because Express has the `callback` function , and it is used as the second parameter
        3.  The `callback` function is set to use the `send` method() to respond with "Hello World!"
5.  The `listen` method() is used to "spin up" the server and tell it to _listen_ for incoming requests on port `3000`.
    1.  `port` was defined as a `const` on line 3

#### Breaking down point four

1. Express has a `get` method that we used to pass /hello as the **first** parameter
2. Express has a `callback` function (function) that we used as the **second** parameter

Therefore: after each GET is received, the `get` method() is run. Afterward, the `callback` function is triggered to send the response "Hello World!"

![[method-and-function.png]]

# Starting the server and seeing the result

Assuming the code from Server Code was copied/pasted correctly, all you need to do is:

1. Run the command `node index.js`
2. Visit http://localhost:3000/hello

# Messing with the server

After I followed the book, I wanted to see if the server would update in real time, or if I had to close the connection and retry

1. I changed the server text to include this, below line 6:

```javascript
server.get("/bye", function (req, res) {
  res.send("Goodbye cruel world!");
});
```

2. I then tried going to http://localhost:3000/bye
3. I got back: `Cannot GET /bye`
4. Fair enough! I went to terminal
5. `Ctrl`+`C`
6. `node index.js`
7. Refreshed the browser
8. I saw the same error message for a few seconds
   1. I switched to http://localhost:3000/hello
   2. I switched back to http://localhost:3000/bye
   3. It worked
9. Neat!

Let's see if escape characters and stuff work.

1. `Ctrl`+`C`
2. Change the server code to

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today\nGoodbye, goodbye, goodbye\nGoodbye, all you people, there's nothing you can say\nTo make me change my mind, goodbye",
  );
});
```

3. node index.js
4. /hello works
5. /bye works, but the newlines didn't take. Oh, right. I think you need to concatinate in JS or else it treats it as literals or something weird. I forget exactly why, but you can't do it the way you would in BASH or whatever. Blah.

I'm trying with

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today" + \n + "Goodbye, goodbye, goodbye" + \n + "Goodbye, all you people, there's nothing you can say" + \n + "To make me change my mind, goodbye"
  );
});
```

It wasn't that.

It also wasn't...

this

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today",
    "\n",
    "Goodbye, goodbye, goodbye",
    "\n",
    "Goodbye, all you people, there's nothing you can say",
    "\n",
    "To make me change my mind, goodbye",
  );
});
```

Or this...

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today",
    "\r\n",
    "Goodbye, goodbye, goodbye",
    "\r\n",
    "Goodbye, all you people, there's nothing you can say",
    "\r\n",
    "To make me change my mind, goodbye",
  );
});
```

...Or this...

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today%0AGoodbye, goodbye, goodbye%0AGoodbye, all you people, there's nothing you can say%0ATo make me change my mind, goodbye",
  );
});
```

...Or this!...

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today%0D%0AGoodbye, goodbye, goodbye%0D%0AGoodbye, all you people, there's nothing you can say%0D%0ATo make me change my mind, goodbye",
  );
});
```

Or variations of that

# How to get newlines in send method responses

It's this!

```javascript
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today<br>Goodbye, goodbye, goodbye<br>Goodbye, all you people, there's nothing you can say<br>To make me change my mind, goodbye",
  );
});
```

I mean, I get why it's `br`, because HTML. It's a web server, after all. It goes together. I guess I just figured it'd be something a bit more complex. It just sucks how many crappy not-quite-right answers there are out there. Yeah man, I'm sure LLMs are just _great_ to work with, huh? ALl of that nice wrong information to work off of. Awesome.

Anyway, that's how you make a webserver!
