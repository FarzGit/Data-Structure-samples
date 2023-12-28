class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function isBalanced(expression) {
    const stack = new Stack();
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
  
    for (let char of expression) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const top = stack.pop();
        if (!top || openingBrackets.indexOf(top) !== closingBrackets.indexOf(char)) {
          return false;
        }
      }
    }
  
    return stack.isEmpty();
  }
  
  // Example usage:
  const balancedExpression = "{[()]}";
  const unbalancedExpression = "{[(])}";
  
  console.log(`${balancedExpression} is balanced: ${isBalanced(balancedExpression)}`);
  console.log(`${unbalancedExpression} is balanced: ${isBalanced(unbalancedExpression)}`);
  