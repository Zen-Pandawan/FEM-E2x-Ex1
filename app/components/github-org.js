import Component from '@ember/component';

export default Component.extend({
    actions: {
        buttonClick(org){
            console.log('clicked star');
            this.sendAction('action', org);
        }
    },

    tagName: 'li',
    classNames: ['gh-repo-component']
});
