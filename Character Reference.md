---
created: 2026-05-04 21:57
source:
tags: [HTML, Reference]
---
# Summary

A character reference is when you need to display [[reserved character|reserved HTML characters]] on an HTML webpage. If you do not do this, the [[HTML parser]] will "think" you are attempting to write legitimate HTML in the middle of a sentence.

## Example

Suppose you wanted to display the reserved character `<` on an HTML webpage. If you simply type the character and then load the webpage, the character will not be displayed on the webpage because of the HTML parser.

To get around this, you would use a [[Named character reference|named]], [[Decimal numeric character reference|decimal numeric]], or [[Hexadecimal numeric character reference]] to display the [[reserved character]] `<` using a series of symbols and numbers.