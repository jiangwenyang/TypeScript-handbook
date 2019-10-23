import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, className, ...otherProps } = props;
  const buttonClassName = className;
  return (
    <button className={buttonClassName} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
