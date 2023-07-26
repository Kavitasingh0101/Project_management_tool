const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

// Function to display all projects
function displayProjects(projects) {
  projectList.innerHTML = '';
  projects.forEach((project) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectList.appendChild(listItem);
  });
}

// Sample initial data (in a real app, you would fetch this from the server or a database)
let projects = [
  { title: 'Project 1', description: 'This is the description of Project 1.' },
  { title: 'Project 2', description: 'This is the description of Project 2.' },
];

// Display the initial projects
displayProjects(projects);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const title = event.target.title.value;
  const description = event.target.description.value;

  // Add the new project to the data
  projects.push({ title, description });

  // Display the updated list of projects
  displayProjects(projects);

  // Reset the form
  event.target.reset();
}

// Attach event listener to the form
projectForm.addEventListener('submit', handleFormSubmit);
