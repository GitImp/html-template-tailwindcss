export const ENV = {
    env: 'dev',

    dev: {
        debug: true,
        timeout: 5000
    },

    prd: {
        debug: false,
        timeout: 1000
    },

    getEnvValue: function(key) {
        if (this[this.env] && this[this.env][key] !== undefined) {
            return this[this.env][key];
        } else {
            throw new Error(`Key '${key}' is not defined for environment '${this.env}'.`);
        }
    }
};