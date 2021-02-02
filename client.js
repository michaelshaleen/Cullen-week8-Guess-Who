//console.log('Here are all the available people:', people);
$(document).ready(addPeople);

// putting photos in variables
//let instructorNames = ['Dev', 'Dane', 'Mary', 'Kris', 'Edan', 'Casie', 'Chris'];

function addPeople() {
  // $('body').append(`
  // Find Number:
  // <div>${randomNumber(1, 7)}</div>

  // `);

  const finder = randomNumber(1, 7);
  $('#h1ME').append(`
  Find ${people[finder].name}
  `);
  $(this).
// if click is right
  if(${people[finder].name} == $(this).data???  ){
    alert(Sweet Success);

  }

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
}
//? how and where should I define human
//<img src="https://github.com/${human.githubUsername}.png?size=250"
// template literals are ${object.property} or prop.prop, uses JQs ability rather than manually

function randomNumber(min, max) {
  let numberGuess = Math.floor(Math.random() * (1 + max - min) + min);
  return Math.floor(Math.random() * (1 + max - min) + min);
  console.log('here', numberGuess);
}

console.log(randomNumber(1, 7));
switch (randomNumber(1, 7)) {
  case 1:
    console.log('instructor = Dev');
    break;
  case 2:
    console.log('instructor = Dane');
    break;
  case 3:
    console.log('instructor = Kris');
    break;
  case 4:
    console.log('instructor = Casie');
    break;
  case 5:
    console.log('instructor = Chris');
    break;
  case 6:
    console.log('instructor = Edan');
    break;
  case 7:
    console.log('instructor = Mary');
}

//not sure how to attach a number to the person
// if statement???
// I'm not sure what's is being asked and what would be to find that answer

const finder = randomNumber(1, 7);
$('#h1ME').append(`
this
  ${people[finder].name}
  `);
