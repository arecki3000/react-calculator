import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const enhance = (Component, props) =>
  class extends PureComponent { // eslint-disable-line
    static propTypes = {
      type: PropTypes.string
    };

    static defaultProps = {
      type: ''
    };

    onClickHandler = () => {
      return props.onClick(this.props.type);
    };

    render() {
      return <Component onClick={this.onClickHandler} {...this.props} />;
    }
  };

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.array,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    children: [],
    type: '',
    className: '',
    onClick: () => {}
  };

  render() {
    const { children, type, className, onClick } = this.props;

    return (
      <button className={`calculator-button ${className}`} onClick={onClick}>
        {_.isEmpty(children) ? type : children}
      </button>
    );
  }
}

export default Button;
