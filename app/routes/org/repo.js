/* global $ */
import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let org = this.modelFor('org');
        //debugger;
        //How did params get the attribute "repoid" (used below in api call)? 
        //Is this default behaviour from passing repo.id from /repos?
        return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}`).then(rawRepo => {
            rawRepo.oldId = rawRepo.id;
            rawRepo.id = rawRepo.login;
            return rawRepo;
        });
    }
});
