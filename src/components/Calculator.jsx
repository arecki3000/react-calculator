import _ from 'lodash';
import React, { PureComponent } from 'react';
import DisplayPanel from './display-panel/DisplayPanel';
import ButtonsPanel from './buttons-panel/ButtonsPanel';
import mathUtils from '../utils/mathUtils';
import {
  keyboardButtons,
  calculatorButtons,
  mathematicalSigns,
  mathematicalOperands
} from '../consts/buttons';
import './Calculator.css';

class Calculator extends PureComponent {
  static initialState = {
    equation: [],
    result: '0',
    clearingButtonType: calculatorButtons.CE
  };

  constructor(props) {
    super(props);

    this.state = Calculator.initialState;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardHandler);
  }

  keyboardHandler = event => {
    switch (event.key) {
    case keyboardButtons.BACKSPACE:
      this.onClick(this.state.clearingButtonType);
      break;
    case keyboardButtons.DELETE:
      this.onClick(calculatorButtons.AC);
      break;
    case keyboardButtons.DOT:
    case keyboardButtons.COMMA:
      this.onClick(calculatorButtons.DOT);
      break;
    case keyboardButtons.LEFT_PARENTHESES:
      this.onClick(calculatorButtons.LEFT_PARENTHESES);
      break;
    case keyboardButtons.RIGHT_PARENTHESES:
      this.onClick(calculatorButtons.RIGHT_PARENTHESES);
      break;
    case keyboardButtons.CARET:
      this.onClick(calculatorButtons.CARET);
      break;
    case keyboardButtons.SMALL_X:
    case keyboardButtons.BIG_X:
    case keyboardButtons.ASTERISK:
      this.onClick(calculatorButtons.MULTIPLICATION_SIGN);
      break;
    case keyboardButtons.SLASH:
      this.onClick(calculatorButtons.OBELUS);
      break;
    case keyboardButtons.PLUS:
      this.onClick(calculatorButtons.PLUS);
      break;
    case keyboardButtons.MINUS:
      this.onClick(calculatorButtons.MINUS);
      break;
    case keyboardButtons.ENTER:
    case keyboardButtons.EQUALS_SIGN:
      this.onClick(calculatorButtons.EQUALS_SIGN);
      break;
    default:
      if (_.includes(calculatorButtons, event.key)) {
        this.onClick(event.key);
        break;
      }
    }
  };

  removeLastItem(array) {
    const clonedArray = _.clone(array);

    return _.slice(clonedArray, 0, clonedArray.length - 1);
  }

  isPrevItemSignOfEquality(equation) {
    return _.trim(_.last(equation)) === mathematicalSigns.EQUALS_SIGN;
  }

  isPrevItemAnyOfOperands(equation) {
    const lastEquationItem = _.trim(_.last(equation));

    return _.includes(mathematicalOperands, lastEquationItem);
  }

  wrapOperand(item) {
    const { equation } = this.state;

    // shouldn't add empty space after minus sign if it's for negative number.
    return (item === mathematicalOperands.MINUS &&
      this.isPrevItemAnyOfOperands(equation)) ||
      _.isEmpty(equation)
      ? ` ${item}`
      : ` ${item} `;
  }

  onClick = type => {
    switch (type) {
    case calculatorButtons.EQUALS_SIGN:
      return this.onEvaluate();
    case calculatorButtons.CE:
      return this.onRemoveLastChar();
    case calculatorButtons.AC:
      return this.onRemoveWholeEquation();
    case calculatorButtons.CARET:
    case calculatorButtons.MULTIPLICATION_SIGN:
    case calculatorButtons.OBELUS:
    case calculatorButtons.PLUS:
    case calculatorButtons.MINUS:
      return this.onJoinOperand(type);
    default:
      return this.onJoinEquationChar(type);
    }
  };

  onEvaluate() {
    return this.setState(prevState => {
      let { equation } = prevState;

      if (this.isPrevItemSignOfEquality(prevState.equation)) {
        return prevState;
      }

      if (this.isPrevItemAnyOfOperands(prevState.equation)) {
        equation = this.removeLastItem(prevState.equation);
      }

      return {
        equation: [
          ...equation,
          this.wrapOperand(mathematicalSigns.EQUALS_SIGN)
        ],
        result: this.calculateResult(this.equationListToString(equation)),
        clearingButtonType: calculatorButtons.AC
      };
    });
  }

  onRemoveLastChar() {
    return this.setState(prevState => ({
      equation: this.removeLastItem(prevState.equation)
    }));
  }

  onRemoveWholeEquation() {
    return this.setState(Calculator.initialState);
  }

  onJoinOperand(operand) {
    return this.setState(prevState => {
      let equation = prevState.equation;

      if (this.isPrevItemSignOfEquality(prevState.equation)) {
        equation = _.castArray(prevState.result);
      }

      if (
        operand !== mathematicalOperands.MINUS &&
        this.isPrevItemAnyOfOperands(prevState.equation)
      ) {
        equation = this.removeLastItem(prevState.equation);
      }

      return {
        equation: [...equation, this.wrapOperand(operand)],
        clearingButtonType: calculatorButtons.CE
      };
    });
  }

  onJoinEquationChar(type) {
    return this.setState(prevState => {
      if (this.isPrevItemSignOfEquality(prevState.equation)) {
        const {
          equation,
          result,
          clearingButtonType
        } = Calculator.initialState;

        return {
          equation: [equation, type],
          result,
          clearingButtonType
        };
      }

      return {
        equation: [...prevState.equation, type],
        clearingButtonType: calculatorButtons.CE
      };
    });
  }

  equationListToString(equationList) {
    return equationList.join('');
  }

  calculateResult(equation) {
    return mathUtils.evaluate(equation);
  }

  render() {
    const { equation, result, clearingButtonType } = this.state;

    return (
      <div className="calculator">
        <DisplayPanel
          equation={this.equationListToString(equation)}
          result={result}
        />
        <ButtonsPanel
          onClick={this.onClick}
          clearingButtonType={clearingButtonType}
        />
      </div>
    );
  }
}

export default Calculator;