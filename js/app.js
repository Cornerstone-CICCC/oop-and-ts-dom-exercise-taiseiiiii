class Calculator {
  constructor(num1, num2, operator) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) {
      return "Error: Division by zero";
    }
    return this.num1 / this.num2;
  }

  compute() {
    switch (this.operator) {
      case "add":
        return this.add();
      case "subtract":
        return this.subtract();
      case "multiply":
        return this.multiply();
      case "divide":
        return this.divide();
      default:
        return "Error: Invalid operator";
    }
  }
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operation").value;

  const calculator = new Calculator(num1, num2, operator);
  const result = calculator.compute();

  document.getElementById("result").textContent = result;
});
