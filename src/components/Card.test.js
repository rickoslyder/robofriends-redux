import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

const mockCardComponent = <Card name={"test"} email={"test@test.com"} id={69} />

test('expect to render Card component', () => {
    render(mockCardComponent)
    const header = screen.getAllByRole("heading")
    expect(header).toBeDefined();
    expect(header.length).toEqual(1)
})

test('expect mock Card component JSX to match snapshot', () => {
    expect(mockCardComponent).toMatchSnapshot()
})

test('expect rendered mock Card component to match snapshot', () => {
    expect(render(mockCardComponent).baseElement).toMatchSnapshot()
})