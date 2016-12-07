import React, { PropTypes } from 'react';
import './input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const value = this.input.value;
    const {onChange} = this.props;
    onChange && onChange(value);
  }

  render() {
    const {
      value,
      className,
      placeholder,
      type,
      style,
      onKeyDown
    } = this.props;
    return (
      <input
        type={type}
        value={value}
        className={`input ${style} ${className}`}
        onChange={this.onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref => this.input = ref}
      />
    )
  }
}

Input.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  className: '',
  placeholder: '',
  type: 'string',
  style: 'material',
  onChange: () => {},
  onKeyDown: () => {}
}

export default Input;