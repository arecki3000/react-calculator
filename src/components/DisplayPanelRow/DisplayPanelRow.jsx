import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DisplayPanelRow extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    maxTextLength: PropTypes.number
  };

  static defaultProps = {
    text: '',
    className: '',
    maxTextLength: 100
  };

  truncate(input) {
    const { maxTextLength } = this.props;
    const prefix = '...';
    const truncated = input.substring(input.length - maxTextLength + 3);

    if (input.length <= maxTextLength) {
      return input;
    }

    return `${prefix}${truncated}`;
  }

  render() {
    const { className, text } = this.props;

    return (
      <div className={className} title={text}>
        {this.truncate(text)}
      </div>
    );
  }
}

export default DisplayPanelRow;
