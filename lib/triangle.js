const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(text, tColor, fill){
        super(text, tColor, fill)
        if (text.length > 3) {
            throw new Error('text may contain no more than three characters')
        }
        
        
        this.text = text,
        this.tColor = tColor,
        this.fill = fill
    }
    render() {
        return `<svg height="200" width="300" style="background-color:white">
        <polygon points="150,25 50,175 250,175" style="fill:${this.fill};" />
        <text x="50%" y="70%" fill="${this.tColor}" dominant-baseline="middle" text-anchor="middle" style="font-size:50px; font-family:serif">${this.text}</text>
      </svg>`
    }
};
module.exports = Triangle;