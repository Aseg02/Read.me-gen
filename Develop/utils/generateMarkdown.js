// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${data.title}
 ${data.description}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Title
 ${data.description}
`;
}

function generateMarkdown(data) {
  return `# ${data.userStory}
## User Story
 ${data.userStory}
`;
}
function generateMarkdown(data) {
  return `# ${data.description}
## Description
 ${data.description}
`;
}

module.exports = generateMarkdown;
