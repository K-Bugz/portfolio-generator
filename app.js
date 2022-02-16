const fs = require('fs'); // imports the fs module into the project
const generatePage = require('./src/page-template'); // locally written generate page module loaded in. 
const profileDataArgs = process.argv.slice(2);
// Lets see the console log of profileDataArgs
console.log(profileDataArgs);

// Lets see the console log of profileDataArgs
const [name, github] = profileDataArgs;
console.log(name, github);

// function generatePage with two parameter input
const pageHTML = generatePage(name, github);

// Writing the file
fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});
