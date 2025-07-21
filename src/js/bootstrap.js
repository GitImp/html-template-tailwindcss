import { createEnvManager } from './env.min.js';

export const Bootstrap = {
    env: createEnvManager('dev'),

    init: function() {
        this.cdbg = this.env.getEnvValue('debug'); // cdbg is current environment debug value

        this.cdbg && console.log('Bootstrap initialized');
        this.create();
    },

    create: function() {
        this.cdbg && console.log('Bootstrap.create()');
        this.hide();

        // here you can add more initialization logic

        this.show();
    },

    hide: function() {
        this.cdbg && console.log('Bootstrap.hide()');

        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'none';
        }  
    },

    show: function() {
        this.cdbg && console.log('Bootstrap.show()');

        const content = document.getElementById('content');
        if (content) {
            content.style.display = 'inline';
        }  
    }
};