//console.log('Here are all the available people:', people);
$(document).ready(addPeople);

// putting photos in variables
//let instructorNames = ['Dev', 'Dane', 'Mary', 'Kris', 'Edan', 'Casie', 'Chris'];

function addPeople() {
  // $('body').append(`
  // Find Number:
  // <div>${randomNumber(1, 7)}</div>

  // `);

  // why running twice???
  //prompt('pick a');
  for (let name of people) {
    //console.log(name.name, 'name');
    //console.log(name.githubUsername);
    $('body').append(`
      <div>
      ${name.name}-${name.githubUsername}<img src="https://github.com/${name.githubUsername}.png?size=250">
      </div>
      `);
  } // append seperately so it's not part of the loop

  $('#h1ME').append(`
find
  ${people[finder].name}
  `);
}

function randomNumber(min, max) {
  let numberGuess = Math.floor(Math.random() * (1 + max - min) + min);
  return Math.floor(Math.random() * (1 + max - min) + min);
  console.log('here', numberGuess);
}

//

//not sure how to attach a number to the person
// if statement???
// I'm not sure what's is being asked and what would be to find that answer

const finder = randomNumber(1, 7);
$('#h1ME').append(`
this
  ${people[finder].name}
  `);
