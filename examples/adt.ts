type Maybe<T> = <R>(handler: {Just: (value: T) => R; Nothing: R}) => R;

const Just : <T>(value: T) => Maybe<T> = value => handler => handler.Just(value);
const Nothing : Maybe<never> = handler => handler.Nothing;

const match : <T,R>(value: (h: T) => R, handler: T) => R = (v,h) => v(h);

function safeDivide(numerator: number, denominator: number): Maybe<number> {
  return denominator === 0 ? Nothing : Just(numerator / denominator);
}

function displayResult(mabyeValue: Maybe<number>): void {
  const extractedValue = match(mabyeValue<string>, {
    Just: result => `Result of division is ${result}`,
    Nothing: `Handled divide by zero error`
  });
  console.log(extractedValue);
}

const badDivision = safeDivide(5,0);
const goodDivision = safeDivide(22, 7);

displayResult(badDivision);
displayResult(goodDivision);
