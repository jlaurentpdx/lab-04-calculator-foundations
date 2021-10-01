// IMPORT MODULES under test here:
import { add } from '../calculations.js';

const test = QUnit.test;

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(4, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
