import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DisplayPanelEquation extends PureComponent {
  static propTypes = {
    equation: PropTypes.string
  };

  static defaultProps = {
    equation: ''
  };

  render() {
    return (
      <div className="calculator-display-panel-equation color-gray">
        {this.props.equation}
      </div>
    );
  }
}

export default DisplayPanelEquation;
