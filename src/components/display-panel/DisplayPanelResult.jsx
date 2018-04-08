import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DisplayPanelResult extends PureComponent {
  static propTypes = {
    result: PropTypes.string
  };

  static defaultProps = {
    result: ''
  };

  render() {
    return (
      <div className="calculator-display-panel-result color-white">
        {this.props.result}
      </div>
    );
  }
}

export default DisplayPanelResult;
