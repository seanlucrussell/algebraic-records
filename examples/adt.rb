def Just(x)
  ->(handler) { handler[:Just].call(x) }
end

Nothing = ->(handler) { handler[:Nothing] }

def match(value, handler)
  value.call(handler)
end

def safeDivide(numerator, denominator)
  denominator == 0 ? Nothing : Just(numerator / denominator)
end

def displayResult(maybeValue)
  extractedValue = match(maybeValue, {
    Just: ->(result) { "Result of division is #{result}" },
    Nothing: "Handled divide by zero error"
  })
  puts extractedValue
end

badDivision = safeDivide(5,0);
goodDivision = safeDivide(22, 7);

displayResult(badDivision);
displayResult(goodDivision);
