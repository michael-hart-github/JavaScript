---
created: 2026-05-02 17:48
source: https://www.goodnotes.com/blog/zettelkasten-method
tags: ["#fleeting-note", expiration]
---
This expires on 2026-05-02 + 3

I don't remember how to take good Zettelkasten notes. I need to re-read stuff. The notes I am taking for HTML just suck so hard.

# DO NOT use for things like
- [ ] Taking notes during a meeting
- [ ] Notes you write down during a lecture

# DO use for things like
- [ ] Notes on subjects, like subjects you would see on Wikipedia

## Example
If you get a degree in computer science, Zettelkasten is not for notes during the lecture. Instead, the notes are for topics in computer science you will revisit throughout a four-year degree.

You build and "grow" the notes continually.

# Types of notes
The four types of notes are: Fleeting, Literature, Permanent, and Reference

## Fleeting note
Capture for spontaneous ideas.

They are the net that grabs the fish, not the plate that serves the meal.

### Example of fleeting note
You are the middle of doing whatever, and a specific thought enters your brain. Write it down. The fish has jumped into your boat, so just crack it with the oar.

You can figure out if you want to eat it later.
## Literature note
Use when you are reading a book, article, or whatever.

You **use** them to capture an **idea**, **not a collection** of learnings from that article, book, etc.

### Example of Literature note
Suppose you read an article that talks about a new type of exploit. The article goes on to talk about extremely common exploits you already have notes on. The article ends by talking about "the importance of computer security, and training employees on a yearly basis." All of the points outside of the new exploit are too vague to update any existing notes on.

You write down a note about the new exploit.

You probably do not have enough information about any of the other things to make any meaningful updates about those topics. You do not include any of that information in the note about the new exploit, either.

The note about the new exploit is a distilled idea.

## Permanent Notes

Permanent notes are a natural outcome of Literature notes and Fleeting notes. They are what "grows" from the mixture of Literature notes (aka source notes) and Fleeting notes.

### Example of Permanent note
Suppose you research the topic of computer keyboards. While you are reading about keyboards, you write one literature note about the most common keyboard layout. You write a second literature note about a unique kind of material that is used for keyboards. As you read more of the article, you learn about the most common failures that keyboards have and make a literature note for that. Finally, you learn about maintenance that users commonly perform in order to keep their keyboards functioning normally.

As you write each of these notes, a number of ideas come into your head:

1. What if I created a new keyboard layout of my own?
2. What if a different kind of material were used to make keyboards? E.g., what if we used wood instead of plastic for key caps?
3. What if there were a design that wouldn't require any kind of maintenance or cleaning?

In turn, you make fleeting notes for each of them.

As you continue reading, you:
1. Have the question answered in the article
2. Lose interest in the question
3. Retain interest in the question, but do not have it answered

For the first two, the fleeting note is simply destroyed and you move on with your life. For the last, where you still have an interest in having the question resolved, you begin a Permanent note for it.

Perhaps it starts with the question from the fleeting note. Perhaps it starts with the background of the source material gathered. The specifics of it isn't really important. What is important is that you have "planted" the note, but have not completed it yet. It is important that you have a keen interest in it.

In turn, you begin to look up more information on the topic. As you gather those new sources, you repeat the process above:

* You write literature notes (aka source notes) on whatever media or material you come across, focusing on "*ideas* not *summaries*"
	* Again, a singular source may have multiple core ideas or concepts to cover. That would mean multiple literature notes. Conversely, other sources might barely have a single idea (if any at all) depending on how in-depth or shallow the material is
* You create Fleeting notes of whatever ideas pop into existence as you write those literature notes

And finally, the critical, key component

* You *update* the *existing* Permanent note with more information gathered from those new literature notes

And overtime, *multiple* Permanent notes may start to overlap into a kind of "central theme" or idea. That is where the ammunition for books, articles, essays, papers, etc. come from. Permanent notes are not necessarily a paper by themselves (although they very well could be, under various circumstances). It is the conglomeration of Permanent notes smashing into one another that make for compelling reading, interesting ideas, new and unrealized interactions, and numerous other things. The manner in which they overlap is what will give you true and unexpected depth.

## Reference notes
Reference notes can serve as a kind of "universal translator" of sorts. 

Instead of needing to redefine a niche word in multiple notes, it may be more convenient to have a kind of centralized "guide" or reference bay to store those terms. This can have several key benefits:

1. When looking for inter-connections in the future, references to special terms will help to highlight and point out where those intersections exist
2. If you have others read or review your notes, they will not need to ask you what a specific term means, if there is a centralized definition used to outline or describe it for them
3. If you find yourself using a specific term more and more frequently, your level of knowledge about the context of that term will evolve and become more precise overtime. You will develop a sort of intuition for it, and be able to describe what it is, and is not, with greater specificity.

### Example of reference notes
Suppose that you have just learned what the programming term "function" is. You realize that it is something that you will be writing about and referencing in your notes frequently, but also recognize that the word "function" also has a more generalized, unrelated meaning in standard English.

So, you decide to make a Reference note for the programmatic meaning of the word "function".

In your reference note, you define function as "A piece of code that can be reused."

Later, as you went on to learn more about programming, you started to realize that many parts of code can be "reused" in different ways. In fact, a person could simply copy/paste code and refer to that as "re-using" code and that they would not *technically* be wrong.

In turn, you decide to update your Reference note for the word function, and change the definition to something like:

> A function is a piece of code that only needs to be written down once, and can then be imported and called in different parts of code.
> 
> By using a function, you help to eliminate the overall amount of redundant code present in a program. This is beneficial because it makes code easier to read, review, and maintain.

Later on, you start to apply a kind of standard format or template to the way reference notes for computer programming are formatted, and update the text might even expand to read something like this:

> # Summary
> A function is a piece of code that only needs to be written down once, and can then be imported and called in different parts of code.
> 
> ## Why use it?
> When you use a function, you eliminate the total number of Lines of Code (LOC) present in a code base. The smaller the LOC, the quicker you can read, understand, review, and update the program.
> 
> ## Variations
> Functions come in two types:
> 1. Traditional
> 2. Arrow
> 
> ### What's the difference?
> Traditional functions:
> 1. Have limited scope; they bind to the scope of the object that calls them
> 2. They require a little bit more typing
> 
> Arrow functions:
> 1. Have a lexical scope, making them more intuitive & less error prone
> 2. Require a little bit less typing
> 3. If they only have one parameter and one statement, you don't even need to include the curly brackets and return (called making a "concise body" function)
> 
> ## Example of a traditional function
> ```JavaScript
> const traditionalFunction = function (x) {
> 	return x * x;
> }
> ```
> 
> ## Example of an arrow function
> ```JavaScript
> // Using a concise body
> const arrowFunction = x => x * x;
> ```

To be clear: at that kind of length, it may be time to start considering whether it would make more sense to **convert** that reference note into a permanent note and have a shorter, more concise Reference note in its stead.

However, it should also be recognized that in some instances, simplistic terms, like "lambda" or "sort" may be short, simple words, but hide a *significant* amount of complexity in their meaning, and to even "bridge the gap" in trying to introduce them as a topic requires multiple paragraphs.

The intent of a Reference note should be to give the reader something to *refer to*, to better understand. In some cases, that may be summed up in a few short words, or a pithy sentence or two. In other cases, even introducing the summary of a complex topic cannot (*should not*) be abstracted away into multiple related Reference notes, because the defining feature of the term is precise and can be easily misunderstood or misattributed.