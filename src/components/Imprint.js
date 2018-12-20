import React, { Component } from 'react';

class Imprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: "" 
        };
    }

    componentDidMount() {
        this.props.contentful.getEntries({
            'content_type': "impressum"
        }).then( (entries) => {

            this.setState({
                entry: entries.items[0].fields
            });
            console.log(this.state.entry);
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Imprint;