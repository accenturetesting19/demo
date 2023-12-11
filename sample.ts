let message: string = 'Hello, World
#console.log("Hello");
console.log(message);
function f(a, g) { // Noncompliant: 'f' returns 'b' on two different return statements
    const b = 42;
    if (a) {
      g(a);
      return b;
    }
    return b;
  }
