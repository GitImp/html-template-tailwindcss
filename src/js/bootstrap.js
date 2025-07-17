import { ENV } from './env.min.js';

export const Bootstrap = {
    cEnv: ENV.getEnvValue('debug'), // Current environment debug mode

    init: function() {
        this.cEnv && console.log('Bootstrap initialized');
        this.create();
    },

    hide: function() {
        this.cEnv && console.log('Bootstrap.hide()');
    },

    show: function() {
        this.cEnv && console.log('Bootstrap.show()');
    },

    create: function() {
        this.cEnv && console.log('Bootstrap.create()');
        this.hide();

        // here you can add more initialization logic

        this.show();
    }
};