'use strict';

import { getEnvValue, setEnv } from './env.min.js';
import { Bootstrap } from './bootstrap.min.js';
import { fetchData, apiKey, config_module } from './module.min.js';

function ready() {
    Bootstrap.init();
    
    console.log('\nmodule.js output');
    console.log(apiKey);
    console.log(fetchData());

    console.log('\nconfig dev output');
    console.log(getEnvValue('debug'));
    console.log(getEnvValue('timeout'));

    setEnv('prd');
    console.log('\nconfig prd output');
    console.log(getEnvValue('debug'));
    console.log(getEnvValue('timeout'));
}

/**
 * BOOTSTRAP JavaScript
 * document.readyState shows if the Page-DOM is loaded. This doesn't need content like images, audio, video, css, etc.
 * this is required for the (not so) edge case where your script is loaded after the document has loaded
 * https://developer.mozilla.org/en/docs/Web/API/Document/readyState
 */
if (document.readyState !== 'loading') {
    ready();
} else {
    // the document hasn't finished loading/parsing yet so let's add an event handler
    document.addEventListener('DOMContentLoaded', ready);
};

// windows.onload waits for every content to be loaded (ex. images, audio, video, css, etc.)
window.onload = () => {
    // alert("The complete document is loaded!");
};