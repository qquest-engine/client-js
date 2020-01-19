import React from 'react'
import cx from 'classnames'
import propTypes from 'prop-types'

export default class Button extends React.Component {

    static propTypes = {
        type: propTypes.string,
        className: propTypes.string,
        isActive: propTypes.bool,
        isRadius: propTypes.string,
        disabled: propTypes.bool,
        onClick: propTypes.func
    };

    static defaultProps = {
        type: 'button',
        className: '',
        active: false,
        isRadius: '',
        disabled: false,
        onClick: () => { },
    };

    render() {
        return (
            <button
                type={this.props.type}
                className={cx(
                    'q-button',
                    { 'q-button_active': this.props.isActive },
                    { [`q-button_radius-${this.props.isRadius}`]: this.props.isRadius },
                    this.props.className
                )}
                disabled={this.props.disabled}
                onClick={() => {
                    if (!this.props.disabled) this.props.onClick(this.props.isActive)
                }}
            >
                {this.props.children}
            </button>
        );
    }

}