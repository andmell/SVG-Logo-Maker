class Shape {
    constructor(fill){
        this.fill = fill;
    };
};

class Text {
    constructor(text, tColor){
        if (text.length > 3){
            throw new Error('Text must be 3 characters or less');
        }
        this.text = text;
        this.tColor = tColor;
    };
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>`
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
    };
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`
    };
};

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.fill}" />`
    };
};

module.exports = {Text, Circle, Triangle, Square, Shape}