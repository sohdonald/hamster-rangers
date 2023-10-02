The evil sorceress, Whoopy Whoopy, has invaded Earth

It's up to the Hamster Rangers to thwart her ambitions and save the planet.

Hamster rangers can mix and match to summon different megazords

select 5 rangers from the db.json
rangers are displayed in thumbnail gallery
thumbnail displays a ranger's picture, name, and color
the thumbnails are buttons that we can click
click on the thumbnail of the ranger to select them

after 5 different rangers are selected, the "summon megazord"
button appears

by pressing that button, a megazord is summon based on which rangers were selected

mixing and matching different rangers lead to different megazords

look at Gerbil Army lab
look at zombie hamsters
step 1, create db.json file
step 2, create local server
step 3, fetch from that file
render all the rangers in the gallery
need map function


need a reset button
sort the rangers by team after submitting them

review how to work in branch workflow and merge

make a mobile first view, use percentages to make it work
check out tailwind and bootstrap

don't sort your states, sort the copy of the arrays
sortedRangers.sort()

branch commands
git branch displays branches
git checkout [branch-name] switches to this branch

how to make a branch
git checkout -b [new-name]

how to delete a branch
git branch --delete [branch-name] this is for merged branches
git branch -D [branch-name] for unmerged branches

How to do a deploy?  What can I do and can't do after an app is deployed 

would it be better to use routing for the switch statement in SummonMegazord?

What other components in this app would benefit from routing?

hamster-rangers.com/

hamster-rangers.com/newrangerform

a post and a submit
use form html

make a new ranger team of five or a new megazord


three teams
1. Coconut Avengers
2. Soggy Pillows
3. Tickle Elves

each team has five hamsters

by default, the teams have their own megazord they can summon

however, when 5 hamsters assemble from different teams, they summon 
either a special megazord or a lame sock puppet

Whoopi will call a random giant monster to invade Earth 

summon a megazord to defeat it

h3 "recruit 5 more hamsters"

hamsters are displayed in hamster cards

     // rangerColors is currently an array of strings
      // rangerColors combine existing array as a string
      // we want to compare contents of rangerColors to contents of Bloody Banana

      /**goal is to return a specific megazord based on colors
       * how do we compare rangerColors with a condition?
       */
      /** if r = 0
       * then 'red, red, red' = 3r
       * r keeps track of number of rangers with color = 'red'
       * we need a way to keep track of r

      need to check each ranger color from rangers object array
      datatype of rangerColor is a string
      for each 'red', increase r by +1
      compare 'red' in colorString
      colorString is a string
      rangerColors.forEach((color)=>console.log(color))
       */


 // how do we make the value dynamic?

  /** we need to convert the arrays in rangerColor
 * into string arrays like this
 * rangerColor = ["red", "blue", "yellow", "green", "pink"]
 * 
    how do we create a new array with only the 5 rangers selected?
*/
  // ["red","red","red","yellow","yellow"]: 'Bloody Banana',
  //      ["pink","pink","pink","blue","yellow"]: 'Pink Lemonade',
  //     ["yellow","yellow","yellow","red","pink"]: 'Super Sour',
  //     ["blue","blue","blue","yellow","red"]: 'Boring Suitcase',


  talk about code,
  explain how to use the app
  should be between 1-3 min
