import React from 'react';


class Article extends React.Component {
    constructor(props){
        super(props);
        this.rawMarkup = this.rawMarkup.bind(this);
    }

    rawMarkup(){
        var rawMarkup = this.props.nodes
        return { __html: rawMarkup };
    }

    render(props) {
        return (
            <div className=".article">
            <div dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}


export default Article;