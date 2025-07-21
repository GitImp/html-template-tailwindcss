export const apiKey = 'abc123';

export function fetchData() {
    return 'data';
}

let privateVariable = 'This is private';
const config_module = {
    timeout: 5000,

    getPrivateVariable: function() {
        return privateVariable;
    }
};

export {config_module}; // Named export