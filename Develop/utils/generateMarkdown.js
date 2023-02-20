function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
    N/A`;
  } else {
    return`
    ${data}`;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'no license'){
    return `
 ![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `
  [${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return `
    ## [License]
    ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `
    *[License](#license)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## [Description]
  ${data.what}
  ${data.why}
  ${data.how}

  ## [Installation]
  ${data.installation}

  ## [Usage]
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributing]
  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Tests]
  ${data.test}

  ## [Questions]
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;

