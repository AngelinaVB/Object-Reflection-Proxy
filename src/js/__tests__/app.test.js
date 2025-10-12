import orderByProps from '../app';

test.each([
    [
        ['name', 'level'], [
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
        ],
    ],
])('Sorting of properties', (order, expectedResult) => {
    const obj = {
        name: 'мечник',
        health: 10,
        level: 2,
        attack: 80,
        defence: 40,
    };
    expect(orderByProps(obj, order)).toEqual(expectedResult);
});