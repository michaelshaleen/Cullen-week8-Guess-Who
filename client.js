console.log('Here are all the available people:', people);
$(document).ready(addPeople);

function addPeople() {
  console.log('here we are');

  for (let name of people) {
    console.log(name.name, 'name');
    $('body').append(`
      <div>${name.name} ${name.githubUsername}</div>
      <img src="https://github.com/${human.githubUsername}.png?size=250"
      alt="Profile image of ${human.name}">

      `);
  }
}
