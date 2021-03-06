# jQuery Guess Who

You will be creating a pick-the-person game with HTML, CSS, and jQuery!

## Update Your GitHub Profile Picture

Before you get started writing code, please update your GitHub profile to include a picture of yourself. Feel free to add you and your group members to the `data.js` file -- follow the format!

## Display Profile Pictures

On document load, append divs for each person in the `data.js` file to the DOM with jQuery (not hardcoded), each containing an image from each GitHub profile (see the provided data.js file). As an example, the below HTML would produce Chris's GitHub profile picture where `christopher-black` is Chris's GitHub username and `250` is the size of the picture requested.

[x]get their github??
[x]get their github pic
[x] get their profile pic
[x]format in html for stuff to go
[x] div has id
[x] use div id for jq
[x] 250 all around

```HTML
<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
```

## Start the Game

Prompt the player to pick one of the people by displaying a randomly selected name.
[x]append a prompt of sorts to notify user
[x]who is player?
[x]what is prompt?
[x] grab a name
[x] randomly selected name
[x] get random on dom
[x]make random
[x]give pictures a number

[] make array of all people's names
[] give each name a number
[] number = name
[] if 1 log dev if 2 log this if three log this try using a switch

Here is a handy function to generate a random number given a minimum and maximum.

```JavaScript
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
```

## Game Logic

- If the player clicks on the correct person
  [x]if $(this).('click',)
  [x] create click handlers
  [x] click handlers show log
  [x]
  [x] if prompt = $(this).()
  - give them a success message.
    []alert
  - Prompt the player to pick another person randomly and let them keep playing.
    [] alert
- If they pick the wrong person
  - give them an error message.
  - allow them to try again.
    []try again

![example.gif](example.gif)

## Stretch Goals

- When the player clicks on the correct person, add a visual cue that indicates that they picked the correct person. Then change it back after 2 seconds and resume the game. You'll need to use the [built in `setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) function for the timing. This function waits a given amount of time and then calls a function you specify.
- Add some jQuery effects, animations and styling to your game! There are quite a few built in. [See the Docs!](https://api.jquery.com/category/effects/)
- Randomize the array of images before displaying them on the page to make the game more challenging.
