import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button, { enhance } from './Button';

class ButtonsPanel extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    clearingButtonType: PropTypes.string
  };

  static defaultProps = {
    clearingButtonType: 'CE'
  };

  render() {
    const CalculatorButton = enhance(Button, { onClick: this.props.onClick });

    return (
      <div className="calculator-buttons-panel">
        <CalculatorButton
          type={this.props.clearingButtonType}
          className="color-red"
        />
        <CalculatorButton type="(" className="color-gray" />
        <CalculatorButton type=")" className="color-gray" />
        <CalculatorButton type="^" className="color-gray">
          x<sup>y</sup>
        </CalculatorButton>
        <CalculatorButton type="7" className="color-white" />
        <CalculatorButton type="8" className="color-white" />
        <CalculatorButton type="9" className="color-white" />
        <CalculatorButton type="×" className="color-gray" />
        <CalculatorButton type="4" className="color-white" />
        <CalculatorButton type="5" className="color-white" />
        <CalculatorButton type="6" className="color-white" />
        <CalculatorButton type="÷" className="color-gray" />
        <CalculatorButton type="1" className="color-white" />
        <CalculatorButton type="2" className="color-white" />
        <CalculatorButton type="3" className="color-white" />
        <CalculatorButton type="-" className="color-gray" />
        <CalculatorButton type="0" className="color-white" />
        <CalculatorButton type="." className="color-white" />
        <CalculatorButton type="=" className="color-white" />
        <CalculatorButton type="+" className="color-gray" />
      </div>
    );
  }
}

export default ButtonsPanel;
