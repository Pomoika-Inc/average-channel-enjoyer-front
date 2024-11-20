import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Filter, FilterProps } from './Filter';

export default {
    title: 'Components/Filter',
    component: Filter,
    argTypes: {
        filterOptions: { control: 'object' },
        listToFilter: { control: 'object' },
    },
} as Meta;

export const Default: StoryObj<FilterProps> = {
    render: (args) => {
        const [filteredList, setFilteredList] = useState(args.listToFilter);

        const handleFilterChange = (newFilteredList: any[]) => {
            setFilteredList(newFilteredList);
        };

        return (
            <div>
                <Filter
                    {...args}
                    onFilterChange={handleFilterChange}
                />
                <div style={{ marginTop: '20px' }}>
                    <h4>Filtered Results:</h4>
                    <ul>
                        {filteredList.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    },
    args: {
        filterOptions: [
            { name: 'Option 1', value: 'option1' },
            { name: 'Option 2', value: 'option2' },
            { name: 'Option 3', value: 'option3' },
        ],
        listToFilter: [
            { name: 'Item 1', category: 'option1' },
            { name: 'Item 2', category: 'option2' },
            { name: 'Item 3', category: 'option3' },
            { name: 'Item 4', category: 'option1' },
        ],
        filterRule: (element, selectedOption) => element.category === selectedOption,
    },
};
