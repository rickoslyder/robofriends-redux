import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CounterButton from './CounterButton';

const mockButtonComponent = <CounterButton color={'red'}/>

test('expect to render CounterButton component', () => {
    render(mockButtonComponent)
    const buttons = screen.getAllByRole("button")
    expect(buttons).toBeDefined();
    expect(buttons.length).toEqual(1)
})

test('expect mock CounterButton component JSX to match snapshot', () => {
    expect(mockButtonComponent).toMatchSnapshot()
})

test('expect rendered mock CounterButton component to match snapshot', () => {
    expect(render(mockButtonComponent).baseElement).toMatchSnapshot()
})

test('expect click to increment count by 1', () => {
    render(mockButtonComponent)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(button).toHaveTextContent("Count: 1")
    fireEvent.click(button)
    expect(button).toHaveTextContent("Count: 2")
})