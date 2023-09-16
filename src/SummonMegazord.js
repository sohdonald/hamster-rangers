/* 
summonMegazord is a button that works only when 5 rangers are selected

when 5 rangers are selected, it checks from an object array of Megazords
that fulfill the conditions of the SummonBy key

we want to make a bunch of megazords with different conditions

we need to do something like this

const order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}

*/

const Megazord = "Fuzzy Sock Monkey";

let rangers;

switch (Megazord) {
  case `Fuzzy Sock Monkey`:
    rangers = `Bob, Sally, Trini, Bean, Raisin`;
    break;
  case `King Sized Bed`:
    rangers = `Panpan, Lick, Stubby, Minty, Waifu`;
    break;
  case `Santa Tickler`:
    rangers = `Pine Nut, Ajax, Gus, Mandy, Nibbles`;
    break;
  case `Bloody Banana`:
    rangers = `red, red, red, yellow, yellow`;
    break;
  case `Pink Lemonade`:
    rangers = `pink, pink, pink, blue, yellow`;
    break;
  case `Super Sour`:
    rangers = `yellow, yellow, yellow, red, pink`;
    break;
  case `Boring Suitcase`:
    rangers = `blue,blue,blue,yellow,red`;
    break;
  default:
    console.log(`Cheap Knockoff`);
    break;
}

/* the switch statement allows us to make multiple cases
    each case has their own set of conditions 
    the case 'Fuzzy Sock Monkey' is checking the Megazord variable. 
    If it matches, the statements in rangers below the case are executed
*/

/** the statements in rangers are strings,
 *  but the data we need are keys from objects
 * So we need to 'stringify' that data 
 * 
 * Even that would not be enough
 * How would the 'stringified' data know to check if the statements match?
 * Especially since the statements themselves don't tell specifically to
 * look for name: and color:
 * 
 * I was thinking e.target would be useful, but
 * what does e.target do?  Would it really 'target' the data we want to check?
 * 
 * 
 * it would be confusing if we have to do something like this
 * rangers = `rangers.color===red && rangers.color===yellow && rangers.color===green...`
 * besides, this wouldn't work anyway because it would only output objects that matches ALL these conditions 
 * instead of assigning a different 'check' for each ranger we selected
 * 
 * there's gotta be a way to check and match data that doesn't look confusing
 */