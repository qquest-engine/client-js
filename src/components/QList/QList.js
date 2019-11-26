import React from "react"
import './QList.css'

import propTypes from 'prop-types'

import { relative } from "path";

export default class QList extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = { 
            isOpened: false,
            isValue: '',
        };

        this.toggleContainer = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
        this.onClickInsideHandler = this.onClickInsideHandler.bind(this);
    }

    static propTypes = {
        type: propTypes.string, 
        className: propTypes.string,
        mode: propTypes.string,
        disabled: propTypes.bool,
        focused: propTypes.bool,
        onClick: propTypes.func,
        options: propTypes.array,
        
    };

    static defaultProps = {
        type: 'drop-down',
        className: '',
        mode: 'check',
        disabled: false,
        focused: false,
        onClick: () => { },
        options: [],
        
    };

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler(event) {

        if (this.state.isOpened) {
            this.setState({isOpened: false});
        } else {
            this.setState({isOpened: true});
        }
                
    }
    onClickOutsideHandler(event) {
        if (this.state.isOpened && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpened: false });
        }
    }

    onClickInsideHandler(event) {
        this.setState({
            isValue: event.target.attributes.getNamedItem('data-value').value,
            isOpened: false,
        })
    }

    render() {

        return (
            <div className='drop-down' ref={this.toggleContainer}>    
                <div 
                    type={this.props.type}
                    disabled={this.props.disabled}
                    onClick = {this.onClickHandler}
                > 

                    {
                        this.props.options.map(option => (
                            option.default && option.title
                        ))
                    }
                              
                </div>
                
                <div className="drop-down__list">
                    {
                        this.state.isOpened && (this.props.options.map(option => (
                            <div 
                            key = {option.id}
                            onClick = {this.onClickInsideHandler}
                            data-value = {option.value}
                            >
                                {option.title}
                            </div>
                        )))
                    }
                </div>
                
            </div>
        );
    }
}






