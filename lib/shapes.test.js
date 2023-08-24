const {Text, Circle, Triangle, Square, Shape} = require('./shape');
const SVG = require('./SVG');

describe("Text Class", () => {
    test('Text parameter expectation', () => {
        var ABC = "ABC";
        var testText = new Text(ABC)
        expect(testText.text).toEqual(ABC);
    } )
});

describe('Text Class Color', () => {
    test('Text color expectation', () => {
        var Blue = 'blue';
        var testText = new Text("Hey", Blue);
        expect(testText.tColor).toEqual(Blue);
    })
})

describe('Text Class Render', () => {
    test('Testing the render method inside of the text class', () => {
        var Blue = 'blue';
        var ABC = "ABC";
        var testText = new Text(ABC, Blue);
        var expectedRender = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>`
        expect(testText.render()).toEqual(expectedRender);
    })
})

describe('Shape Class', () => {
    test('Testing to see if the Shape parent class will render properly', () => {
        var Blue = "blue";
        var testShape = new Shape(Blue);
        expect(testShape.fill).toEqual(Blue);
    })
});

describe('Triangle Render', () => {
    test('Testing the render method of the triangle class', () => {
        var Blue = "blue";
        var testShape = new Triangle(Blue);
        var expectedPolygon = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        expect(testShape.render()).toEqual(expectedPolygon);
    })
});

describe('Square Render', () => {
    test('Testing the render method of the Square class', () => {
        var Blue = 'blue';
        var testShape = new Square(Blue);
        var expectedPolygon = `<rect x="90" y="40" width="120" height="120" fill="blue" />`;
        expect(testShape.render()).toEqual(expectedPolygon);
    })
})

describe('Circle Render', () => {
    test('Testing the render method of the Circle Class', () => {
        var Blue = 'blue';
        var testShape = new Circle(Blue);
        var expectedPolygon = `<circle cx="150" cy="100" r="80" fill="blue" />`;
        expect(testShape.render()).toEqual(expectedPolygon);
    })
})

describe('SVG Text test', () => {
    test('Testing how the SVG class handles text input', () => {
        var testText = 'test';
        var testShape = 'Circle';
        var testSVG = new SVG(testText, testShape);
        expect(testSVG.text).toEqual(testText);
    })
});

describe('SVG Shape test', () => {
    test('Testing how the SVG class handles the shape input', () => {
        var testText = 'test';
        var testShape = 'Circle';
        var testSVG = new SVG(testText, testShape);
        expect(testSVG.shape).toEqual(testShape);
    });
});

describe('SVG Rendering Test', () => {
    test('Testing how the SVG class handles its built-in render function', () => {
        var testText = 'test';
        var testShape = 'Circle';
        var testSVG = new SVG(testText, testShape);
        var expectedRender = `<svg height="200" width="300">Circletest</svg>`
        expect(testSVG.render()).toEqual(expectedRender);
    })
})