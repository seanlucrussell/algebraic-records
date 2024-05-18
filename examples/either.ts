const match : <T,R>(value: (h: T) => R, handler: T) => R = (v,h) => v(h);

type Either<A,B> = <C>(handler: {Left: (l: A) => C; Right: (r: B) => C}) => C

const Left : <A>(value: A) => Either<A,any> = value => handler => handler.Left(value);
const Right : <B>(value: B) => Either<any,B> = value => handler => handler.Right(value);

const either = Left(4);

const extract = match(either<string>, {
  Left: n => n.toString(),
  Right: s => s
});

console.log(extract);
