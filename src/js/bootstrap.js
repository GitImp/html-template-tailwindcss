import { ENV } from './env.min.js';

export const Bootstrap = {
    cEnv: ENV.getEnvValue('debug'), // Current environment debug mode

    init: function() {
        this.cEnv && console.log('Bootstrap initialized');
        this.create();
    },

    create: function() {
        this.cEnv && console.log('Bootstrap.create()');
        this.hide();

        // here you can add more initialization logic

        this.show();
    },

    hide: function() {
        this.cEnv && console.log('Bootstrap.hide()');

        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'none';
        }  
    },

    show: function() {
        this.cEnv && console.log('Bootstrap.show()');

        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'inline';
        }  
    }
};