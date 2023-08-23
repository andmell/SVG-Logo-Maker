const {Text, Circle, Triangle, Square, Shape} = require('./shape');
const SVG = require('./SVG');

describe("Text Class", () => {
    test('Text parameter expectation', () => {
        var ABC = "ABC";
        var testText = new Text(ABC)
        expect(testText.text).toEqual(ABC);
    } )
});

describe('Shape Class', () => {
    test('Testing to see if the Shape parent class will render properly', () => {
        var Blue = "blue";
        var testShape = new Shape(Blue);
        expect(testShape.fill).toEqual(Blue);
    })
})

describe('Triangle Render', () => {
    test('Testing the render method of the triangle class', () => {
        var Blue = "blue";
        var testShape = new Triangle(Blue);
        var expectedPolygon = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        expect(testShape.render()).toEqual(expectedPolygon);
    })
})