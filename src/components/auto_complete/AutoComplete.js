import React from 'react'
import ReactTags from 'react-tag-autocomplete'
import './react-tags.css'

// https://github.com/i-like-robots/react-tags

class AutoComplete extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            tags: [
                { id: 1, name: "Apples" },
                { id: 2, name: "Pears" }
            ],
            suggestions: [
                { id: 3, name: "Bananas" },
                { id: 4, name: "Mangos" },
                { id: 5, name: "Lemons" },
                { id: 6, name: "Apricots" }
            ]
        }
    }

    onAddition = (tag) => {
        const tags = [...this.state.tags, tag];
        this.setState({ tags })
    };

    onDelete = (index) => {
        const tags = this.state.tags.slice(0);
        tags.splice(index, 1);
        this.setState({ tags })
    };

    render () {
        return (
            <ReactTags
                onAddition={this.onAddition}
                onDelete={this.onDelete}
                tags={this.state.tags}
                suggestions={this.state.suggestions}
            />
        )
    }
}

export default AutoComplete;
