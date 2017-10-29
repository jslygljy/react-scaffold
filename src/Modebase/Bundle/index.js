import React, { Component } from 'react'
export default class Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    load = props => {
        this.setState({
            mod: null
        });
        props.load(mod => {
            this.setState({
                mod: mod ? mod : null
            });
        });
    }

    componentWillMount() {
        this.load(this.props);
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}
