import React, { useEffect, useState } from 'react';

type Option = { name: string, value: string };

interface FilterProps {
    filterOptions: Option[];
    listToFilter: any[];
    filterRule: (element: any, selectedOption: any) => boolean;
    onFilterChange: (filteredList: any[]) => void;
}

export const Filter: React.FC<FilterProps> = ({
          filterOptions,
          listToFilter,
          filterRule,
          onFilterChange
      }) => {

    const [selectedOption, setSelectedOption] = useState<string>('all');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (selectedOption === 'all') {
            onFilterChange(listToFilter);
            return;
        }
        const newFilteredList = listToFilter.filter(element => {
            return filterRule(element, selectedOption) //element[propertyNameToFilterBy] === selectedOption;
        });
        onFilterChange(newFilteredList);
    }, [selectedOption]);

    return (
        <div className="filter-dropdown">
            <select
                id="filter-select"
                className="p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="all">All</option>
                {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
