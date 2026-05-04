---
created: 2026-05-03 23:51
source: https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-html-fundamentals/what-are-html-entities
tags: [HTML, Literature]
---
# The problem
Suppose you wanted to write the following sentence:
> This sentence contains the `<img />` element

The result would look like this:
> This sentence contains the element

# The cause
Both `<` and `>` are [[reserved characters]] in HTML, so invoking them in a page that *reads* HTML will attempt to *run* it as HTML.

# The solution
In order to display the sentence above, you would instead need to write the [[HTML entity]] for `<` and `>`.

HTML entities always begin with `&`, and end with `;`
## Example
- The entity for `<` is `&lt;`
- The entity for `>` is `&gt;`

So, the sentence would be written as:
> This sentence contains the &lt;img /&gt; element

And would then be displayed as:
> This sentence contains the `<img />` element