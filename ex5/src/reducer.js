import * as OP from './dispatch-operations'

const initial_state = {
    persons: []
};

export const reducer = (state = initial_state, action) => {
    switch (action.type)
    {
        case OP.ADDPERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            };
            return {
                persons: [...state.persons, newPerson]
            };
        case OP.DELETEPERSON:
            return {
                persons: state.persons.filter(p => p.id !== action.value)
            };
        default:
            return state;
    }
};