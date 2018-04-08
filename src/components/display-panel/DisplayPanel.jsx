import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DisplayPanelEquation from './DisplayPanelEquation';
import DisplayPanelResult from './DisplayPanelResult';

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
        <DisplayPanelEquation equation={this.props.equation} />
        <DisplayPanelResult result={this.props.result} />
      </div>
    );
  }
}

export default DisplayPanel;
