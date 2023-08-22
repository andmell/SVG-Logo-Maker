const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(text, tColor, fill){
        super(text, tColor, fill)
    }
    render() {
        return `<svg height="200" width="300" style="background-color:white">
        <rect x="75" y="25" width="150" height="150" style="fill:${res.fill}"/>
             <text x="50%" y="52%" fill="${res.tColor}" dominant-baseline="middle" text-anchor="middle" style="font-size:50px; font-family:serif">${res.text}</text>
        </svg>`
    }
};

module.exports = Square;