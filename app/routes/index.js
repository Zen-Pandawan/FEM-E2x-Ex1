import Route from '@ember/routing/route';
//Index for Home
export default Route.extend({
    beforeModel(){
        this._super(...arguments);//call super by habit
        //this.transitionTo('orgs'); 
        //transitionTo actually starts you at the index then sends you to another page.
        this.replaceWith('orgs');
    }
});
