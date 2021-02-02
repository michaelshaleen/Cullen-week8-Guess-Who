console.log('Here are all the available people:', people);
$(document).ready(addPeople);

// putting photos in variables

function addPeople() {
  prompt('pick a');
  for (let name of people) {
    console.log(name.name, 'name');
    console.log(name.githubUsername);
    $('body').append(`
      <div>
      ${name.name}-${name.githubUsername}<img src="https://github.com/${name.githubUsername}.png?size=250">
      </div>

      `);
  }
}
//? how and where should I define human
//<img src="https://github.com/${human.githubUsername}.png?size=250"
// template literals are ${object.property} or prop.prop, uses JQs ability rather than manually
