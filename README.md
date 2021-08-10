# Bash Boris

Bash Boris is a fun satirical browser game based on the popular fairground and arcade game, Whack-A-Mole, which was first introduced in 1975. This javascript version is optimised for use on desktop, but can also be used via a mobile or tablet device.

## Table of Contents

## Site Design Considerations

### Site Goals

1. To provide a fun game to play that requires little instruction.
2. To provide a game that is responsive across all devices.
3. To provide a game that entices the user to return to play again.
4. To provide differing game modes dependant on user preference.
5. To record scores of each game to enable user to return to beat score
6. To ensure the game is fully accessible to those users that may require assisstive technologies.

### User Stories and Goals

* As a user, I want to easily ascertain the purpose of the website.
* As user, I want to be able to view the website on any of my devices without any loss of functionality.
* As a user, I want to be able to easily understand the game instructions.
* As a user, I want to be able to see my score easily.
* As a user, I want to be able to keep track of my time remaining easily.
* As a user, I want to be able to play different game modes.
* As a user, I want to be able to record my scores.
* As a user, I want to be able to toggle the volume on and off.

### Site Design Approach

The brief for this project was to create an interactive front-end site that should respond to a user’s actions. To this end, it was decided to create a Whack A Mole style game. Early on in the design process it was decided to create a themed game.

Simple javascript games are ubiquitous online, and if thinking commercially, to drive traffic and advertising revenue to a site above others offering a similar experience, a developer needs to appreciate the zeitgeist at the time, and offer something current and in the public’s mind.

There can be no bigger current affair in the UK at the moment than Brexit, and framing a game around a ‘popular’ subject can tap into general discourse at the time. 

It was for this reason that a theme involving the UK Prime Minister and the Northern Ireland Protocol was chosen. It is current, with high public visibility, and if presenting commercially taps into public conversation at the time....and also...who wouldn't love to give their own politicians a virtual bashing!!

### Game Visual Design and Font

In keeping with the game theme, it was decided that the main backdrop for the game should be a image of 10 Downing Street. This served two purposes, firstly as discussed it ties in with the theme that the game is carrying, and second, the path area of Downing Street would be perfect to contain mole holes.

Again instead of using standard holes, as the main game area was to be a street, it was decided to use man hole covers to maintain the game theme.

The colours used reflect the colours used in the background, namely blues, reds and whites. This was specifcially chosen to mirror the colours of the UK national flag, again to keep the theme consistent throughout. Fredoka and Raleway were intially chosen as site fonts, with Raleway being the predominant font used. These fonts are modern, legible and make it easy for the user to understand any text areas in the site. 

For the moles, again on theme, a picture of the Prime ministers head was used. To ensure the game remained fun and light hearted, and so as to not be accused of bullying or bad taste, the decision was taken to cartoonise all of the image elements. 

In doing this, it enforces that the game is meant to be fun, humorours and satirical, and is in no way intended to demonise the main character (the PM).

Finally, it was chosen to force the user to play the game horizontally. It was intially intended to be played on either device rotation, but on testing it was found that forcing users to play horizontally would ensure that mobile users can use the same background as desktop users, so again to maintain the theme that the game is trying to portray. 


## Wireframes

### Mobile version

![Mobile version](./assets/wireframes/mobile.png)

### Tablet version

![Tablet version](./assets/wireframes/tablet.png)

### Desktop version

![Desktop version](./assets/wireframes/desktop.png)

## Features





### Future Features

1. It would be advantageous to provide a high score capture mechanism. At the time of creation, a local storage method could have been used, but this would only store scores on an indiviual device, and would not function like a 'normal' high scores database would, taking in scores from various different users.

2. I would like to animate the cursor in future deployments so that on each mouse click, the paper would move simulating a strike, much liek swatting a fly. Early attempts to include this proved unsuccessful but it is definietly a feature that should be added in future.

3. I would consider adding an 'infintity' play mode in addition to the three game modes already provided. This mode would run continuously, wit the game picking up speed after a perdetemined amount of time, perhaps every 30 seconds. The game would then end when the user missed a selected number of mole pop ups.

4. I would like to add a number of different images for the mole character, depending on whether or not the mole had been struck or not. Samples of what these images might look like are provided in the images folder but have not been used. this would add another level of complexity and prifessionalism to the game.

## Technologies Used



## Testing

### Automated Testing

### Manual Testing

## Deployment

The site was deployed to GitHub pages.

The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab
* Select the Pages sub-menu
* From the source section drop-down menu, select the Master Branch, and then hit save
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - (https://chris-mcgonigle.github.io/bash-boris/)

## Credits

1. I viewed numerous Whack A Mole tutorials on Youtube, but specifically tutorials by [Ania Kubow](https://youtu.be/rJU3tHLgb_c), [Wes Bos](https://youtu.be/toNFfAaWghU), [Franks Laboratory](https://youtu.be/RTb8icFiSfk) and [The Matrix](https://youtu.be/Fgqvx9APc_Y) proved to be the most useful in producing the game.

2. The countdown timer was adpated from youtube tutorials by [Ania Kubow](https://youtu.be/vSV_Ml2_A88), [Wes Bos](https://youtu.be/LAaf7-WuJJQ), [WEB CIFAR](https://youtu.be/_a4XCarxwr8) and [Florin Pop](https://youtu.be/x7WJEmxNlEs).

3. The feedback form was adpated from a Youtube tutorial by [Coding Nepal](https://youtu.be/rw3eZ6XodN8).

4. Tutorials from [Codginflag](https://youtu.be/iE_6pQ3RlZU) and [Web Dev Simplified](https://youtu.be/MBaw_6cPmAw) were used to help design the various pop up windows used throughout the site.

5. W3Schools Tutorials were used to help in the coding of the [audio mute button](https://www.w3schools.com/jsref/prop_audio_muted.asp), [how to create a star rating](https://www.w3schools.com/howto/howto_css_star_rating.asp), [cursor properties](https://www.w3schools.com/CSSref/pr_class_cursor.asp), [coundown timers](https://www.w3schools.com/howto/howto_js_countdown.asp) and [creating pop ups](https://www.w3schools.com/howto/howto_js_popup.asp).

6. The favicon for the site was created using [favicon.cc](https://www.favicon.cc/).

7. Images for the site were sourced using Google Image search, and were then cartoonized by the developer using [Befunky](https://www.befunky.com/). Details ofo the source images used can be found in the table below.

| Image Title | Source |
| --- | --- |
| 10-downing-street-bg | GOV.uk |
| boris-hit | Arab News.com |
| boris-miss | MurdockLondon.com |
| boris-popup | iconspng.com |
| cursor-protocol | Developer |
| rotate-screen | The Noun Project |

8. The audio for the whack sound effect was sourced from [Freesound.org](https://freesound.org/people/Natty23/sounds/) 