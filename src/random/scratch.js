const people = ["Alex", "Jordan", "Gabe"];

people;
// Don't use push... use concat

const multiply = (a, b) => a * b;
const sum = (a, b) => a + b;
const divide = (n, d) => n / d;
const squared = n => multiply(n, n);
const double = n => multiply(n, 2);

// Kissing

const kiss = a => {
    return a !== "frog" ? a : "prince";
};

function transform(thing, changFunction) {
    return changFunction(thing);
}

const frog = transform("frog", kiss);
frog;

const theSky = transform("the sky", kiss);
theSky;
