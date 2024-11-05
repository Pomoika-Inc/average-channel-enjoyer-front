import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Filter } from './Filter';

describe("Filter component", () => {
    const mockOptions = [
        { name: "Option 1", value: "option1" },
        { name: "Option 2", value: "option2" }
    ];
    const mockList = [
        { category: "option1", name: "Item 1" },
        { category: "option2", name: "Item 2" },
        { category: "option1", name: "Item 3" }
    ];
    const mockFilterRule = (element: any, selectedOption: string) => element.category === selectedOption;
    const mockOnFilterChange = jest.fn();

    beforeEach(() => {
        mockOnFilterChange.mockClear();
    });

    test("renders filter options correctly", () => {
        render(
            <Filter
                filterOptions={mockOptions}
                listToFilter={mockList}
                filterRule={mockFilterRule}
                onFilterChange={mockOnFilterChange}
            />
        );

        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getByText("Option 1")).toBeInTheDocument();
        expect(screen.getByText("Option 2")).toBeInTheDocument();
    });

    test("filters the list based on selected option", () => {
        render(
            <Filter
                filterOptions={mockOptions}
                listToFilter={mockList}
                filterRule={mockFilterRule}
                onFilterChange={mockOnFilterChange}
            />
        );

        fireEvent.change(screen.getByRole("combobox"), { target: { value: "option1" } });

        expect(mockOnFilterChange).toHaveBeenCalledWith([
            { category: "option1", name: "Item 1" },
            { category: "option1", name: "Item 3" }
        ]);
    });

    test("returns full list when 'all' option is selected", () => {
        render(
            <Filter
                filterOptions={mockOptions}
                listToFilter={mockList}
                filterRule={mockFilterRule}
                onFilterChange={mockOnFilterChange}
            />
        );

        fireEvent.change(screen.getByRole("combobox"), { target: { value: "all" } });

        expect(mockOnFilterChange).toHaveBeenCalledWith(mockList);
    });
});

