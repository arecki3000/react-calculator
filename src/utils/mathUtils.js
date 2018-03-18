import _ from 'lodash';

function isNumeric(input) {
  return _.isFinite(_.toNumber(input));
}

function round(number, precision = 12) {
  return Number(Number(number).toFixed(precision));
}

function addition(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtraction(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiplication(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function division(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function power(inputBase, inputExponent) {
  let result = 1;
  let base = inputBase;
  let exponent = inputExponent;

  /**
   * TODO: Think about smarter approach
   * Simplify this function
   * Handle more cases eg: 0.5 ^ -0.5 ^ -0.3
  */
  if (exponent < 0) {
    result = 1 / power(base, -exponent);
  } else if(exponent < 1) {
    result = Math.pow((base < 0) ? -base : base, exponent);
  } else {
    while (exponent > 0) {
      if ((exponent & 1) !== 0) {
        result *= base;
      }
      exponent >>= 1;
      base *= base;
    }
  }

  return (inputBase < 0) ? result * (-1) : result;
}

function calculatePostfixEquation(postfixEquation) {
  const resultStack = [];
  const postfixEquationElements = _.split(postfixEquation, ' ');

  _.forEach(postfixEquationElements, (postfixEquationElement) => {
    if(isNumeric(postfixEquationElement)) {
      resultStack.push(postfixEquationElement);
    } else {
      let result;
      let lastElementInList = resultStack.pop();
      let oneBeforeLastElementInList = resultStack.pop();

      switch(postfixEquationElement) {
      case '+':
        result = addition(oneBeforeLastElementInList, lastElementInList);
        break;
      case '-':
        result = subtraction(oneBeforeLastElementInList, lastElementInList);
        break;
      case '*':
        result = multiplication(oneBeforeLastElementInList, lastElementInList);
        break;
      case '/':
        result = division(oneBeforeLastElementInList, lastElementInList);
        break;
      case '^':
        result = power(oneBeforeLastElementInList, lastElementInList);
        break;
      default:
        break;
      }

      resultStack.push(result);
    }
  });

  return (resultStack.length > 1) ? ['error'] : resultStack.pop();
}

/**
 * Modify equation in infix notation to postfix notation
 * (called also Reverse Polish Notation, more info: https://en.wikipedia.org/wiki/Reverse_Polish_notation)
 * eg: '10 + 20 + 30' -> '10 20 + 30 +'
 */
function infixToPostfix(infixEquation) {
  let  outputQueue = '';
  let  operatorsStack = [];
  let  operators = {
    '^': {
      precedence: 4,
    },
    '/': {
      precedence: 3,
    },
    '*': {
      precedence: 3,
    },
    '+': {
      precedence: 2,
    },
    '-': {
      precedence: 2,
    }
  };

  const infixEquationElements = _.split(infixEquation, /([\+\( -)\*+\/+\^+\(\)])/);
  const infixEquationElementsFiltered = _.filter(infixEquationElements, (infixEquationElements) => infixEquationElements !== '' && infixEquationElements !== ' ');

  _.forEach(infixEquationElementsFiltered, (infixEquationElement) => {
    if(isNumeric(infixEquationElement)) {
      outputQueue += `${infixEquationElement} `;
    } else if(_.includes('^*/+-', infixEquationElement)) {
      let operator = infixEquationElement;
      let lastOperatorFromStack = _.last(operatorsStack);

      while(
        _.includes('^*/+-', lastOperatorFromStack) &&
        (operator !== '^' && operators[operator].precedence <= operators[lastOperatorFromStack].precedence)
      ) {
        outputQueue += `${operatorsStack.pop()} `;
        lastOperatorFromStack = _.last(operatorsStack);
      }
      operatorsStack.push(operator);
    } else if(infixEquationElement === '(') {
      operatorsStack.push(infixEquationElement);
    } else if(infixEquationElement === ')') {
      while(_.last(operatorsStack) !== '(') {
        outputQueue += `${operatorsStack.pop()} `;
      }
      operatorsStack.pop();
    }
  });

  while(operatorsStack.length > 0) {
    outputQueue += `${operatorsStack.pop()} `;
  }

  return outputQueue.trim();
}

function evaluate(equation) {
  return round(calculatePostfixEquation(infixToPostfix(equation)));
}

export default {
  evaluate
};