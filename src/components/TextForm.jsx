import React from 'react';

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    onClick = () => { this.props.handler(this.state.value) }

    render() {
        return (
            <div className="inputBox">
                <h5 className="center-align">
                    Enter your lispyHTML:
                </h5>
                <div className="input-field">
                    <textarea id="textarea1" value={this.state.value} onChange={this.handleChange} className="materialize-textarea" />
                    <label htmlFor="textarea1">JSON goes here</label>
                </div>
                <p className="center-align">
                    <a id="button1" className="waves-effect waves-light btn-large " onClick={this.onClick}>Render!</a>
                </p>
            </div>
        );
    }
}

export default TextForm;