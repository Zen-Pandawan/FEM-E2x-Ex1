/* global $ */
import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
    model(params){
        //debugger;//checking that params contains the data to be used in this route.
        let orgId = get(this.modelFor('org'),'login');
        return $.get(`https://api.github.com/orgs/${orgId}/repos`).then(rawRepos => {
            return rawRepos.map(rawRepo => {
                rawRepo.oldId = rawRepo.id;
                rawRepo.id = rawRepo.name;
                return rawRepo; 
            });
        });
    }
});
