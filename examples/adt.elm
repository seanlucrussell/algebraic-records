import Html exposing (text,p,div)

type alias Maybe a b = {just : a -> b, nothing : b} -> b

just : a -> Maybe a b
just a r = r.just a

nothing : Maybe a b
nothing r = r.nothing

match : (a -> b) -> a -> b
match value handler = value handler

safeDivide : Float -> Float -> Maybe Float b
safeDivide numerator denominator = if denominator == 0 then nothing else just (numerator / denominator)

displayResult : Maybe Float String -> String
displayResult maybeValue = match maybeValue {
    just = \x -> "Result of division is " ++ String.fromFloat x,
    nothing = "Handled divide by zero error"
  }
  
badDivision : Maybe Float b
badDivision = safeDivide 5 0

goodDivision : Maybe Float b
goodDivision = safeDivide 22 7

main =
  div []
  [ p [] [text (displayResult badDivision) ]
  , p [] [text (displayResult goodDivision)]]
