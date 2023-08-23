const inquirer = require('inquirer');
const fs = require('fs');
const {Text, Circle, Triangle, Square} = require('./lib/shape');
const SVG = require('./lib/SVG');

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
        const textInput = new Text(res.text, res.tColor);
        var shapeInput;

        if(res.shape === "Triangle") {
             shapeInput = new Triangle(
                res.fill,
            );
            
        } else if (res.shape === "Circle") {
            shapeInput = new Circle(
                res.fill,
            )
        } else {
            shapeInput = new Square(
                res.fill,
            );
        };
        const SVGOutput = new SVG(
            textInput.render(),
            shapeInput.render(),
        );
            console.log(SVGOutput.render());
            return fs.writeFile('generated.svg', SVGOutput.render(), (err) => {
                err ? console.error("error") : console.log("success!")
            });
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