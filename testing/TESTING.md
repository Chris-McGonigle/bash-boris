# Testing for the website 'Bash Boris'

The following document outlines all testing carried out on the website 'Bash Boris'

During the construction process, the Dev Tools functionality of Firefox was used to CSS code initially, where it was then tweaked to the desired outcome.

## Automated Testing

### Validator Testing

* HTML

HTML was tested using the [W3C Markup Validation Service](https://validator.w3.org/)

Five errors were found as detailed in the following screenshot:

![HTML testing results](./testing-images/boris-html-testing.png) "HTML testing results"

#### Error fixes

1. Errors 1 - 3 were caused by a missing space between attributes. Added space where required.

Retested: ERROR PASSED.

2. Incorrect placment of Main tag. Main tag position was changed to correct place.

Retested: ERROR PASSED.

3. Unclosed Div element in instruction section. this was found and a closing tag added to line 163.

Retested: ERROR PASSED.