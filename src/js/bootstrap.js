import { createEnvManager } from './env.min.js';

export const Bootstrap = {
    env: createEnvManager('dev'),

    init: function() {
        this.cenv = this.env.getEnvValue('debug'); // cenv is current environment debug value

        this.cenv && console.log('Bootstrap initialized');
        this.create();
    },

    create: function() {
        this.cenv && console.log('Bootstrap.create()');
        this.hide();

        // here you can add more initialization logic

        this.show();
    },

    hide: function() {
        this.cenv && console.log('Bootstrap.hide()');

        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'none';
        }  
    },

    show: function() {
        this.cenv && console.log('Bootstrap.show()');

        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'inline';
        }  
    }
};