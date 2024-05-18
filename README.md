unorthodox ADTs/ADTs for the free spirit/Bohemian ADTs - further reading: kind of like church encodings, if you are familiar with those

or maybe it should just be called Algebraic records. Recording Algebraic Data
Types. something.

relevant haskell proposal for anonymous records https://gist.github.com/nikita-volkov/6977841

basically we have with this a church encoding of data types using kwargs instead
of positional args. some examples might help - consider `maybe` from haskell. we
describe ADTs by their constructors and eliminators. `maybe` is the canonical
eliminator for the Maybe type, but it needs to keep arguments in a particular
order. the types are also not particularly illuminating when going for a pure
church encoding. this is particularly relevant when doing more complex algebraic
types, e.g. for a abstract syntax tree we might have

```
data Expression
  = Add Expression Expression
  | Multiply Expression Expression
  | ...
```

if we have positionally encoded church eliminators, then we just have to
remember where `Add` is in the eliminator and where `Multiply` is. with records
we can have these church encodings but they can be self documenting. the type
checker will explicitly tell us the names of the missing fields. this is so
neat.
