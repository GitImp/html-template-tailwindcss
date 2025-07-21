const configs = {
    dev: {
        debug: true,
        timeout: 5000
    },
    prd: {
        debug: false,
        timeout: 1000
    }
};

let currentEnv = 'dev';

export function setEnv(env) {
    if (!configs[env]) throw new Error(`Unknown environment: ${env}`);
    currentEnv = env;
}

export function getEnvValue(key) {
    const config = configs[currentEnv];
    if (config && key in config) {
        return config[key];
    }
    throw new Error(`Key '${key}' is not defined for environment '${currentEnv}'.`);
}