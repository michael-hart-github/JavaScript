If you were to write a sentence like this in HTML
> This sentence contains the `<img />` element

The result would look like
> This sentence contains the  element

In order to display a sentence like that, you would instead need to write the [[HTML entity|entity]] for `<` and `>`.

The entity for `<` is `&lt;`

The entity for `>` is `&gt;`

So, the sentence would be written as
> This sentence contains the &lt;img /&gt; element

Which would then correctly display as
> This sentence contains the `<img />` element

source: https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-html-fundamentals/what-are-html-entities