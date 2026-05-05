---
created: 2026-05-04 00:13
source: https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-html-fundamentals/what-are-html-entities
tags: [HTML, Literature]
---
# Summary

*Named* character references area specific type of [[Character Reference|character references]] that start with `&`, and end with `;`.

> [!NOTE] 
> Different kinds of character references (i.e., [[Decimal numeric character reference|decimal numeric]] and [[Hexadecimal numeric character reference|hexadecimal numeric]]) include different required characters after the `&`.

Named character references are what are used to write things like `<p>` without confusing the [[HTML parser]].

If you do not use a named character reference, the HTML parser will "think" you are attempting to write a legitimate [[HTML element]], instead of simply trying to mention or reference it in a sentence.

## Example

If you want to write `<` as visible text on an HTML webpage, you would write `&lt;`

To see an example of a named character reference being used, refer to [[Example of HTML entity]].