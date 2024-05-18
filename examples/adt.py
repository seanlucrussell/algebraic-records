from types import SimpleNamespace

Just = lambda x: lambda r: r.Just(x)
Nothing = lambda r: r.Nothing

def match(adt,**kwargs):
    return adt(SimpleNamespace(**kwargs))

def safeDivide(numerator, denominator):
    return Nothing if denominator == 0 else Just(numerator / denominator)

def displayResult(maybeValue):
    extractedValue = match(maybeValue,
      Just = lambda x: f'Result of division is {x}',
      Nothing = 'Handled divide by zero error'
    )
    print(extractedValue)

badDivision = safeDivide(5,0);
goodDivision = safeDivide(22, 7);

displayResult(badDivision);
displayResult(goodDivision);
