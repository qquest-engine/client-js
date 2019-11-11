import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

const Button = ({
    text, type, onClick, className, disabled, isactive
}) => {

    const classes = classNames(
        'q-button',
        className,
        { isactive }
    );

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >{text}</button>
    );
};

Button.propTypes = {
    text: propTypes.node,
    type: propTypes.string,
    onClick: propTypes.func,
    className: propTypes.string,
    disabled: propTypes.bool,
    active: propTypes.bool,
};

Button.defaultProps = {
    text: 'Send',
    type: 'button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: false,
};

export default Button;