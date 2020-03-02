import React, {useState} from 'react'
import ReactTags from 'react-tag-autocomplete'
import './react-tags.css'

const suggestions = [
    {id: 3, name: "Bananas"},
    {id: 4, name: "Mangoes"},
    {id: 5, name: "Lemons"},
    {id: 6, name: "Apricots"}
];

const AutoCompleteHooks = () => {
    const [tags, setTags] = useState([
            {id: 1, name: "Apples"},
            {id: 2, name: "Pears"}
        ]);

    const onAddition = (tag) => {
        const newTags = [...tags, tag];
        setTags(newTags)
    };

    const onDelete = (index) => {
        const tagsCopy = tags.slice(0);
        tagsCopy.splice(index, 1);
        setTags(tagsCopy)
    };

    return (
        <ReactTags
            onAddition={onAddition}
            onDelete={onDelete}
            tags={tags}
            suggestions={suggestions}
        />
    )
};

export default AutoCompleteHooks;
