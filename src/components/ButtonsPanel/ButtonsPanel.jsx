import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button, { enhance } from '../Button/Button';
import { calculatorButtons } from '../../consts/buttons';
import uiConstants from '../../consts/uiConstants';

class ButtonsPanel extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    clearingButtonType: PropTypes.string
  };

  static defaultProps = {
    clearingButtonType: calculatorButtons.CE
  };

  render() {
    const CalculatorButton = enhance(Button, { onClick: this.props.onClick });
    let styles = {};

    if(window.innerWidth <= uiConstants.PHONE_VERTICAL_BREAKPOINT) {
      const windowHeight = window.screen.height;
      const height = windowHeight - uiConstants.DISPLAY_PANEL_HEIGHT - uiConstants.PHONE_VERTICAL_MARGIN;

      styles = { height };
    }

    return (
      <div className="calculator-buttons-panel" style={styles}>
        <CalculatorButton
          type={this.props.clearingButtonType}
          className="color-red"
        />
        <CalculatorButton
          type={calculatorButtons.LEFT_PARENTHESES}
          className="color-gray"
        />
        <CalculatorButton
          type={calculatorButtons.RIGHT_PARENTHESES}
          className="color-gray"
        />
        <CalculatorButton type={calculatorButtons.CARET} className="color-gray">
          x<sup>y</sup>
        </CalculatorButton>
        <CalculatorButton
          type={calculatorButtons.BUTTON_7}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_8}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_9}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.MULTIPLICATION_SIGN}
          className="color-gray"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_4}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_5}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_6}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.OBELUS}
          className="color-gray"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_1}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_2}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_3}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.MINUS}
          className="color-gray"
        />
        <CalculatorButton
          type={calculatorButtons.BUTTON_0}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.DOT}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.EQUALS_SIGN}
          className="color-white"
        />
        <CalculatorButton
          type={calculatorButtons.PLUS}
          className="color-gray"
        />
      </div>
    );
  }
}

export default ButtonsPanel;
