Just = function(x)
  return function(handler)
    return handler.Just(x)
  end
end

Nothing = function(handler)
  return handler.Nothing
end

function match(value, handler)
  return value(handler)
end

function safeDivide(numerator, denominator)
  if denominator == 0
    then return Nothing
    else return Just(numerator / denominator)
  end
end

function displayResult(maybeValue)
  extractedValue = match(maybeValue, {
    Just = function(result) return "Result of division is " .. result end,
    Nothing = "Handled divide by zero error"
  })
  print(extractedValue)
end

badDivision = safeDivide(5, 0)
goodDivision = safeDivide(22, 7)

displayResult(badDivision)
displayResult(goodDivision)
