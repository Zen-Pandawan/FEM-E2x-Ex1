import Component from '@ember/component';

export default Component.extend({
    isExpanded: true,

    actions: {
        toggleExpansion(){
            this.toggleProperty('isExpanded');
            this.sendAction('on-expansion-toggle');
        }
    }
});
