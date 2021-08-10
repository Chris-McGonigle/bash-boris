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

The HTML was then rechecked in its entirety. All errors were found ot be fixed and no new issues had arisen.

![HTML retesting results](./testing-images/boris-html-retest.png) "HTML retest results"

* CSS

CSS was tested using the [W3C CSS Validation Service - Jigsaw](https://jigsaw.w3.org/css-validator/)

One error and twenty three warnings were found as detailed in the following screenshot:

![CSS Testing Results](./testing-images/boris-css-testing.png) "CSS testing results"

#### Error and Warning Fixes

1. The single error was casued by the omission of 'seconds' from a transition attribute on the mole image. This was added to correct.

Retested: ERROR PASSED

2. Warnings were given for all button elements that the same colour was used for the background color and border colour of the buttons. This was a deliberate design choice to retain some of the original colour on hover over any button element. As such this did not need retested.

Retested: NOT APPLICABLE

3. Two warnings were received for an unknown vendor extension, namely -webkit. Again this was a deliberate choice of extension and can be ignored.

Retested: NOT APPLICABLE