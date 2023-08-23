class SVG {
    constructor (text, shape) {
        this.text = text;
        this.shape = shape;

    }
    render(){
        return `<svg height="200" width="300">${this.shape}${this.text}</svg>`
    }
};



module.exports = SVG;