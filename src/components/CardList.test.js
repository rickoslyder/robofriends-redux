import { render, screen } from '@testing-library/react';
import React from 'react';
import CardList from './CardList';

const mockRobots = [
    {
        name: "test1",
        email: "test1@test.com",
        id: "1"
    },
    {
        name: "test2",
        email: "test2@test.com",
        id: "2"
    },
    {
        name: "test3",
        email: "test3@test.com",
        id: "3"
    },
]

const mockCardListComponent = <CardList robots={mockRobots} />

test('expect to render CardList component', () => {
    render(mockCardListComponent)
    const headers = screen.getAllByRole("heading")
    expect(headers).toBeDefined();
    expect(headers.length).toBeGreaterThanOrEqual(1)
})

test('expect mock Card component JSX to match snapshot', () => {
    expect(mockCardListComponent).toMatchSnapshot()
})

test('expect rendered mock Card component to match snapshot', () => {
    expect(render(mockCardListComponent).baseElement).toMatchSnapshot()
})