import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DisplayPanelRow from './DisplayPanelRow';

class DisplayPanel extends PureComponent {
  static propTypes = {
    equation: PropTypes.string,
    result: PropTypes.string
  };

  static defaultProps = {
    equation: '',
    result: ''
  };

  render() {
    return (
      <div className="calculator-display-panel">
        <DisplayPanelRow
          text={this.props.equation}
          className="calculator-display-panel-equation color-gray"
          maxTextLength={30}
        />
        <DisplayPanelRow
          text={this.props.result}
          className="calculator-display-panel-result color-white"
          maxTextLength={14}
        />
      </div>
    );
  }
}

export default DisplayPanel;
