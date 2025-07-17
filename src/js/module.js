export const apiKey = 'abc123';

export function fetchData() {
    return 'data';
}

let privateVariable = 'This is private';
const config = {
    timeout: 5000,

    getPrivateVariable: function() {
        return privateVariable;
    }
};

export {config}; // Named export