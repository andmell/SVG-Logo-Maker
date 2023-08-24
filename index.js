const inquirer = require('inquirer');
const fs = require('fs');
const {Text, Circle, Triangle, Square} = require('./lib/shape');
const SVG = require('./lib/SVG');


// Inquirer prompts that will gather information from the user
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
        // Command to determine what image and text to generate based on the above input.
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
        // Final command to generate shape.
            return fs.writeFile('logo.svg', SVGOutput.render(), (err) => {
                err ? console.error("error") : console.log("Generated Logo.SVG!")
            });
    }

    );


