/**
 * Erstellt einen Environment-Manager für verschiedene Umgebungen.
 * @param {string} [initialEnv='dev'] - Die Startumgebung (z.B. 'dev' oder 'prd').
 * @returns {object} API zum Verwalten und Abfragen von Umgebungswerten.
 */
export function createEnvManager(initialEnv = 'dev') {
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

    let currentEnv = initialEnv;
    if (!configs[currentEnv]) throw new Error(`Unknown environment: ${currentEnv}`);

    /**
     * Setzt die aktuelle Umgebung.
     * @param {string} env - Der Name der Umgebung ('dev', 'prd', ...).
     * @throws {Error} Wenn die Umgebung nicht existiert.
     */
    function setEnv(env) {
        if (!configs[env]) throw new Error(`Unknown environment: ${env}`);
        currentEnv = env;
    }

    /**
     * Gibt den Wert eines Schlüssels in der aktuellen Umgebung zurück.
     * @param {string} key - Der Name des Konfigurationsschlüssels.
     * @param {*} [defaultValue] - Optionaler Standardwert, falls der Schlüssel nicht existiert.
     * @returns {*} Der Wert des Schlüssels oder defaultValue.
     * @throws {Error} Wenn der Schlüssel nicht existiert und kein defaultValue angegeben ist.
     */
    function getEnvValue(key, defaultValue) {
        const config = configs[currentEnv];
        if (config && key in config) {
            return config[key];
        }
        if (defaultValue !== undefined) return defaultValue;
        throw new Error(`Key '${key}' is not defined for environment '${currentEnv}'.`);
    }

    /**
     * Gibt eine Kopie der aktuellen Umgebungskonfiguration zurück.
     * @returns {object} Die Konfiguration der aktuellen Umgebung.
     */
    function getAllConfig() {
        return { ...configs[currentEnv] };
    }

    /**
     * Gibt eine Liste aller verfügbaren Umgebungen zurück.
     * @returns {string[]} Array der Umgebungsnamen.
     */
    function getAvailableEnvs() {
        return Object.keys(configs);
    }

    /**
     * Gibt den Namen der aktuellen Umgebung zurück.
     * @returns {string} Der aktuelle Environment-Name.
     */
    function getCurrentEnv() {
        return currentEnv;
    }

    return { setEnv, getEnvValue, getAllConfig, getAvailableEnvs, getCurrentEnv };
}