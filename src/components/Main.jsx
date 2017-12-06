import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import TextForm from './TextForm';
import Article from './Article';

class Main extends Component {
    constructor(props) {
        super(props);
        this.escapeHtml = this.escapeHtml.bind(this);
        this.handler = this.handler.bind(this);
        this.isString = this.isString.bind(this);
        this.parseLispyHTML = this.parseLispyHTML.bind(this);
        this.state = { data: "" }
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    isString(value) {
        return typeof value === 'string' || value instanceof String;
    };

    parseLispyHTML(input) {
        if (input.length === 0) {
            return '';
        } else if (input.length === 1 && this.isString(input[0]) === true) {
            return this.escapeHtml(input[0]);
        } else {
            let children = "";
            if (this.isString(input[2][0]) === true) {
                children = this.escapeHtml(input[2][0]);
            } else {
                children = input[2].map((x) => this.parseLispyHTML(x)).join("");
            }
            let attr = input[1].reduce((acc, cur, index) => {
                if (index % 2 === 0) {
                    return acc + cur + "=";
                } else {
                    return acc + '"' + cur + '" ';
                }
            }, '')
            return "<" + input[0] + " " + attr + ">" + children + "</" + input[0] + ">";
        }
    }

    handler(value) {

        this.setState({ data: this.parseLispyHTML(JSON.parse(value)) });
    }
    render() {
        return (
            <div >
                <Header />
                <TextForm handler={this.handler} />
                <Article nodes={this.state.data} />
            </div>
        );
    }
}

export default Main;