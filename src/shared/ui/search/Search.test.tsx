import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';

jest.mock("@/shared/lib/debounce", () => ({
    debounce: (fn:any) => fn
}));

describe("Search component", () => {
    const mockData = [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Orange" }
    ];
    const mockOnSearchedChange = jest.fn();

    beforeEach(() => {
        mockOnSearchedChange.mockClear();
    });

    test("filters the list if the input has been change", () => {
        render(
            <Search
                listToSearchIn={mockData}
                propertyNameToSearchBy="name"
                onSearchedChange={mockOnSearchedChange}
            />
        );

        fireEvent.change(screen.getByPlaceholderText("Search..."), { target: { value: "Ap" } });

        expect(mockOnSearchedChange).toHaveBeenCalledWith([{ name: "Apple" }]);
    });

    test("call onSearchedChange with the full list being called by empty string input", () => {
        render(
            <Search
                listToSearchIn={mockData}
                propertyNameToSearchBy="name"
                onSearchedChange={mockOnSearchedChange}
            />
        );

        fireEvent.change(screen.getByPlaceholderText("Search..."), { target: { value: "" } });

        expect(mockOnSearchedChange).toHaveBeenCalledWith(mockData);
    });

    test("not existing search property case", () => {
        render(
            <Search
                listToSearchIn={mockData}
                propertyNameToSearchBy="nonexistent"
                onSearchedChange={mockOnSearchedChange}
            />
        );

        fireEvent.change(screen.getByPlaceholderText("Search..."), { target: { value: "A" } });

        expect(mockOnSearchedChange).toHaveBeenCalledWith([]);
    })
});