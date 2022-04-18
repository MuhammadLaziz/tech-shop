export const exampleAction = (value) => {
    return {
        type: 'EXAMPLE_ACTION', // ! Action type must be unique
        payload: value // ! Action payload
    };
}