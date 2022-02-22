const inquirer = require('inquirer'); // imports the inquirer module into the project
// const fs = require('fs'); // imports the fs module into the project
// const generatePage = require('./src/page-template'); // locally written generate page module loaded in. 


// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));