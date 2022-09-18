import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import MainPage from './MainPage';

const mockStore = {
    robots: [],
    searchField: ''
}

const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
}

const mockPropsPopulated = {
    onRequestRobots: jest.fn(),
    robots: [{
        id: 1,
        name: 'David Beckham',
        email: 'posh@spiceandbecks.com'
    },
    {
        id: 2,
        name: 'Leanne Graham',
        email: 'leanne@graham.com'
    },
    {
        id: 3,
        name: 'Richard the III',
        email: 'royalty@deadmonarch.com'
    },
    {
        id: 4,
        name: 'Leanne the III',
        email: 'fakeroyalty@deadmonarch.com'
    }
],
    searchField: 'Leanne',
    isPending: false
}

const mockMainPageComponent = <MainPage {...mockProps} />
const mockPopulatedMainPageComponent = <MainPage {...mockPropsPopulated} />

test('expect to render MainPage component', () => {
    render(mockMainPageComponent)
})

test('expect mock MainPage component JSX to match snapshot', () => {
    expect(mockMainPageComponent).toMatchSnapshot()
})

test('expect rendered mock MainPage component to match snapshot', () => {
    expect(render(mockMainPageComponent).baseElement).toMatchSnapshot()
})

test('filters robots correctly', () => {
    const user = userEvent.setup()
    render(mockPopulatedMainPageComponent)
    // look for all elements with 'Leanne ' - space included to ignore email
    const robots = screen.getAllByText('Leanne ', {exact: false})
    expect(robots).toBeDefined();
    // two Leannes - Leanne Graham and Leanne the III
    expect(robots.length).toEqual(2);
    expect(robots[0]).toHaveTextContent("Leanne Graham")
})

