import React from 'react'
import cx from 'classnames'
import propTypes from 'prop-types'
import './QCheckbox.scss'

export default class Checkbox extends React.Component {

    static propTypes = {
        className: propTypes.string,
        isDisabled: propTypes.bool,
        isChecked: propTypes.bool,
        ifFilter: propTypes.bool,
        ifCheckIn: propTypes.bool,
        onChange: propTypes.func
    };

    static defaultProps = {
        className: '',
        isDisabled: false,
        isChecked: false,
        ifFilter: false,
        ifCheckIn: false,
        onChange: () => { }
    };

    render() {
        return (
            <label
                className={cx(
                    'q-checkbox',
                    { 'q-checkbox_main-filter': this.props.ifFilter },
                    { 'q-checkbox_check-in': this.props.ifCheckIn },
                    this.props.className
                )}
            >
                <input
                    className="q-checkbox__input"
                    type="checkbox"
                    disabled={this.props.isDisabled}
                    onChange={() => {
                        if (!this.props.isDisabled) this.props.onChange(this.props.checked)
                    }}
                />
                <span className="q-checkbox__checkmark"></span>
                {this.props.children}
            </label>
        );
    }

}