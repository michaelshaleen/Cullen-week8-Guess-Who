//console.log('Here are all the available people:', people);
$(document).ready(addPeople);

function checkPicture() {
  console.log($(this).data('name'));
  console.log($(this), 'this');
  console.log('this is working');
  let clickedPhoto = $(this).data('name');
  let targetPerson = people[finder].name;
  console.log(clickedPhoto, targetPerson, 'looking here');
  if (clickedPhoto == targetPerson) {
    alert('wow you can read');
  } else {
    alert('ooooooohp, try again!');
  }
} //access name that's displayed
//access clicked div

// putting photos in variables
//let instructorNames = ['Dev', 'Dane', 'Mary', 'Kris', 'Edan', 'Casie', 'Chris'];
// look up replace !!!!!!!!!
function addPeople() {
  // $('body').append(`
  // Find Number:
  // <div>${randomNumber(1, 7)}</div>
  $('body').on('click', '.thisDiv', checkPicture); //ensure click handler exists, need to
  //be in main function

  // why running twice???
  //prompt('pick a');
  for (let name of people) {
    //console.log(name.name, 'name');
    //console.log(name.githubUsername);
    //data can use any data TYPE always objects
    $('body').append(`
      <div data-name = ${name.name}  class = "thisDiv">
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
