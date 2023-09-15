/* 
summonMegazord is a button that works only when 5 rangers are selected

when 5 rangers are selected, it checks from an object array of Megazords
that fulfill the conditions of the SummonBy key

we are going to need to do something like this

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

we want to make a bunch of megazords with different conditions

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
    each case has their own conditions 
    the case 'Fuzzy Sock Monkey' is checking the Megazord variable. 
    If it matches, the statements in rangers below the case are executed
*/
