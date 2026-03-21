# Intro / Chapter 0

> While the book introduces many technologies from scratch, it assumes some prior familiarity with HTML, CSS, and JavaScript, as well as the client/server architecture of most web applications. For a refresher, see The Coding Workbook by Sam Taylor (No Starch Press, 2020), which teaches you how to build a website with HTML and CSS, and The Book of CSS3, 2nd edition, by Peter Gasston (No Starch Press, 2014) to sharpen your CSS skills. To familiarize yourself with JavaScript, I recommend JavaScript Crash Course by Nick Morgan (No Starch Press, 2024), which is a fast-paced JavaScript tutorial for beginners, and Eloquent JavaScript, 3rd edition, by Marijn Haverbeke (No Starch Press, 2018), for a deep dive into JavaScript.

# Regarding Chapter 1

> Introduces you to Node.js and its ecosystem, which let you run JavaScript code outside a browser. Then you’ll use Node.js and the Express.js framework to create your own simple web server with JavaScript.

So, the intent is to:
1. Show a means to run JS outside of a browser
2. Use Node.JS and Express.JS framework to make a (simple) webserver with JavaScript.

That isn't super thrilling to hear, but whatever.

> Frontend developers focus on user engagement, experiences, and interfaces. They rely on HTML for creating the elements of the website’s interface, CSS for styling, JavaScript for user interactions, and frameworks such as Next.js to pull everything together.

"pull everything together". Ugh. Empty phrase. Does it "synergize the widgets", too?

> Often, an API lets the frontend code (or a third-party) access the application’s backend. JavaScript-driven development relies on two primary architectural frameworks for creating APIs: REST and GraphQL, both of which are covered in Chapter 6

Good to know.

> The backend is the invisible part of a web application. 

Dude. No.

> In a JavaScript-driven application, the backend runs on a server, typically Express.js, though others might use Apache or NGINX.

It's not that I don't believe the author, it just sounds very...limited to boil down the common choices to 1 of 3 primary options. Strange if true!

> [...] the backend is the code that searches the database for the keywords you entered in the frontend, which the backend received through the middleware.

Huh. I thought middleware would perform the search, and the backend would simply be the repository *of* that information; that the middle would be "very active" and the backend would be in a kind of semi-static state, only *receiving* updates, creations, deletes, etc., not actually processing the request. Guess not!

> The middleware would combine these search results with
other relevant pieces of information. 

Okay, yeah. That's closer to what I was thinking; it's just on the return journey out, not in.

> Backend development can be done in any programming language. Full-stack developers usually employ modern JavaScript or TypeScript. Other options include PHP, Ruby, Elixir, Python, Java, and frameworks like Symfony, Ruby on Rails, Phoenix, and Django.

Although it's good to have things like this listed out, without a bit more context for why one might prefer this or that, it kind of feels like I'm just having a list thrown at me. I guess that kind of contradicts what I had written above, about server options.

> [...] the Node.js package manager npm built the missing ecosystem for full- stack JavaScript development.

## JavaScript frameworks

Google = Angular
Facebook = React