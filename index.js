const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

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
            message: 'Write (up to) three characters to go inside of your image',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Input your color, either with a keyword (red, blue, etc) or a hexadecimal value',
            name: 'fill'
        },
        {
            type: 'input',
            message: 'Input a color for the text that is going inside your image, with either a keyword (red, blue, etc) or a hexadecimal value',
            name: 'tColor',
        }
    ]).then((res) => {

        const shapeInput = res.shape;

        if(shapeInput === "Triangle") {
            const shapeGenerate = new Triangle(
                res.text,
                res.tColor,
                res.fill,
            );
            const SVGFile = shapeGenerate.render(res);
            console.log(SVGFile);
            return fs.writeFile('generated.svg', SVGFile, (err) => {
                err ? console.error("error") : console.log("success!")
            });
        } else if (shapeInput === "Circle") {
            console.log('success circle')
        } else {
            console.log ('success Square');
        }
    }

    );


/* TODO:
- Write JS function that log results of prompts to console
- Write JS function that creates an SVG image based off of prompt
- 
    Throw error if input for text is less than or greater than three characters
    Throw error if color input is invalid

     return writeFile('./examples.svg', html);
*/