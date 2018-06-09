import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DisplayPanelRow from '../DisplayPanelRow/DisplayPanelRow';

class DisplayPanel extends PureComponent {
  static propTypes = {
    equation: PropTypes.string,
    result: PropTypes.string
  };

  static defaultProps = {
    equation: '',
    result: ''
  };

  renderEquation() {
    return (
      <DisplayPanelRow
        text={this.props.equation}
        className="calculator-display-panel-equation color-gray"
        maxTextLength={30}
      />
    );
  }

  isLongResult(result) {
    return result.length > 14;
  }

  renderResult() {
    const { result } = this.props;
    const fontModifierClassName = this.isLongResult(result)
      ? 'calculator-display-panel-result-small-font'
      : '';

    return (
      <DisplayPanelRow
        text={result}
        className={`calculator-display-panel-result color-white ${fontModifierClassName}`}
        maxTextLength={21}
      />
    );
  }

  render() {
    return (
      <div className="calculator-display-panel">
        {this.renderEquation()}
        {this.renderResult()}
      </div>
    );
  }
}

export default DisplayPanel;
