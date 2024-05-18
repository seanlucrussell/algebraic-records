const ADT = (...s) => Object.fromEntries(s.map(f => [f, (...args) => r => r[f](...args)]));
const match = (data, handler) => data(handler);

const {Just, Nothing} = ADT('Just','Nothing');

const safeDivide = (x,y) => y === 0 ? Nothing() : Just(x/y);

function showResult(val) {
  console.log(match(val, {
    Just: result => `Result of division is ${result}`,
    Nothing: () => `Handled divide by zero error`
  }));
}

showResult(safeDivide(4,0));
showResult(safeDivide(22,7));

const {Leaf, Branch} = ADT('Leaf','Branch')

function displayTree(tree, indent=0) {
  match(tree,{
    Leaf: value =>
      console.log(Array(indent).join(' '), value),
    Branch: (value, left, right) => {
      console.log(Array(indent).join(' '), value);
      displayTree(left,indent+1);
      displayTree(right,indent+1);
    }
  });
}

const exampleTree =
  Branch(
    1,
    Branch(
      3,
      Leaf(2),
      Branch(
        6,
        Leaf(1),
        Leaf(0))),
    Branch(
      0,
      Leaf(4),
      Leaf(1)))

displayTree(exampleTree)
