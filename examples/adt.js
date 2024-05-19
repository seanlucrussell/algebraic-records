const Just = x => handler => handler.Just(x);
const Nothing = handler => handler.Nothing;

const match = (value, handler) => value(handler);

function safeDivide(numerator, denominator) {
    return denominator === 0 ? Nothing : Just(numerator / denominator);
}

function displayResult(mabyeValue) {
  const extractedValue = match(mabyeValue, {
    Just: result => `Result of division is ${result}`,
    Nothing: `Handled divide by zero error`
  });
  console.log(extractedValue);
}

const badDivision = safeDivide(5,0);
const goodDivision = safeDivide(22, 7);

displayResult(badDivision);
displayResult(goodDivision);
