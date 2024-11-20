import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Search, SearchProps } from './Search';

export default {
    title: 'Components/Search',
    component: Search
} as Meta;

export const Default: StoryObj<SearchProps> = {
    render: (args) => {
        const [searchedItems, setSearchedItems] = useState(args.listToSearchIn);

        const handleSearchedChange = (newList: any[]) => {
            setSearchedItems(newList);
        };

        return (
            <div>
                <Search
                    {...args}
                    onSearchedChange={handleSearchedChange}
                    parentClassName="border"
                />
                <div style={{ marginTop: '20px' }}>
                    <h4>Search Results:</h4>
                    <ul>
                        {searchedItems.map((item, index) => (
                            <li key={index}>{item[args.propertyNameToSearchBy]}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    },
    args: {
        listToSearchIn: [
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' },
            { name: 'Dmn' },
        ],
        propertyNameToSearchBy: 'name',
        parentClassName: 'search-component',
    },
};
