const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Select a shape',
            name: 'shape',
            choices:[
                'Triangle',
                'Square',
                'Circle',
            ]
        },
        {
            type: 'input',
            message: 'Input your color, either with a keyword (red, blue, etc) or a hexadecimal value',
            name: 'color'
        },
        {
            type: 'input',
            message: 'Write three characters to go inside of your image',
            name: 'text'
        },
    ]);


/* To do:
Create prompt line questions that ask:
    - Color (keyword or hexadecimal)
    - Text (3 Characters)
    - Shape (Triangle, Circle, Square)

    Throw error if input for text is less than or greater than three characters
    Throw error if color input is invalid
*/