const match = (value, handler) => value(handler);

const add = (x,y) => r => r.add(x,y);
const multiply = (x,y) => r => r.multiply(x,y);
const negate = x => r => r.negate(x);
const baseVal = x => r => r.baseVal(x);

const sampleExpression = negate(add(baseVal(2),multiply(negate(baseVal(4)),baseVal(1))));

const toStr = expr => match(expr, {
    add: (x,y) => "(" + toStr(x) + "+" + toStr(y) + ")",
    multiply: (x,y) => "(" + toStr(x) + "*" + toStr(y) + ")",
    negate: x => "-" + toStr(x),
    baseVal: x => x.toString()
});

const eval = expr => match(expr, {
    add: (x,y) => eval(x) + eval(y),
    multiply: (x,y) => eval(x) * eval(y),
    negate: x => -eval(x),
    baseVal: x => x
});

console.log(toStr(sampleExpression),'equals',eval(sampleExpression));
