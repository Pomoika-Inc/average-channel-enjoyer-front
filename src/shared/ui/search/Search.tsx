import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from "@/shared/lib/debounce";

export interface SearchProps {
    listToSearchIn: any[],
    propertyNameToSearchBy: string,
    onSearchedChange: Function,
    parentClassName?: string
}

export const Search: React.FC<SearchProps> = ({ listToSearchIn, propertyNameToSearchBy, parentClassName,onSearchedChange }) => {
    const [searchString, setSearchString] = useState<string>('');

    const handleSearch = (search: string) => {
        const searchedInList = listToSearchIn.filter(element => {
            if (typeof element[propertyNameToSearchBy] === 'string') {
                return element[propertyNameToSearchBy].toLowerCase().includes(search.toLowerCase());
            }
            return false;
        });
        onSearchedChange(searchedInList);
    };

    const debouncedSearch = useCallback(debounce(handleSearch, 100), [listToSearchIn]);

    useEffect(() => {
        if (searchString === '') {
            onSearchedChange(listToSearchIn)
            return;
        }
        debouncedSearch(searchString)

    }, [searchString, debouncedSearch, listToSearchIn]);

    const searchingHandler = (newSearchString: string) => {
        setSearchString(newSearchString);
    };

    return (
        <div className={parentClassName}>
            <input value={searchString}
                onChange={(event) => searchingHandler(event.target.value)}
                placeholder="Search..."
                   className="w-full"
            />
        </div>
    );
};
