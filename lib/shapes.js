class Shapes {
    constructor (text, tColor, fill,) {
        this.text = text;
        this.tColor = tColor;
        this.fill = fill;
    }
};

class Circle extends Shapes {
    constructor() {
        super(text, tColor, fill)

    }
};

class Square extends Shapes {
    constructor(){
        super(text, tColor, fill)
    }
}