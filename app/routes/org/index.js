import Route from '@ember/routing/route';
//INDEX FOR /org
export default Route.extend({
    beforeModel(){
        this._super(...arguments);
        this.transitionTo('org.repos'); //no need to respecify the org because context already includes the org needed.
    }
});
