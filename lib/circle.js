const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(text, tColor, fill) {
        super(text, tColor, fill)
    }
    render() {
        return `<svg height="200" width="300" style="background-color:white">
        <circle cx="150" cy="100" r="75" style="fill:${res.fill}"/>
         <text x="50%" y="52%" fill="${res.tColor}" dominant-baseline="middle" text-anchor="middle" style="font-size:50px; font-family:serif">${res.text}</text>
    </svg>`
    }
};

module.exports = Circle;
