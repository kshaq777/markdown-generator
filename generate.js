function generateMarkdown(questions) {
    return ` # ${questions.title} 
  ![License](https://img.shields.io/badge/license-${questions.license}-green)

  ## Description
   ${questions.desc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
   ${questions.install}

  ## Usage
   ${questions.use}

  ## License
   Covered under the ${questions.license} License.

  ## Contributing
   ${questions.contribute}

  ## Tests
   ${questions.test}

  ## Questions
   * Github: https://github.com/${questions.username}
   * Email: [${questions.email}](mailto:${questions.email})
  
  `;
  }
  
  module.exports = generateMarkdown;